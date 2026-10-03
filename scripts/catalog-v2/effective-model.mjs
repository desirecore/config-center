/** Pure contract resolver. No name inference, capability union, or metadata consumption. */
export function compareVersions(a, b) {
  const parse = value => typeof value === 'string' && /^\d+\.\d+\.\d+$/.test(value) ? value.split('.').map(Number) : null;
  const x = parse(a), y = parse(b);
  if (!x || !y) return null;
  for (let i = 0; i < 3; i++) if (x[i] !== y[i]) return Math.sign(x[i] - y[i]);
  return 0;
}
const SUPPORTED_PROTOCOLS = ['openai-completions','openai-responses','anthropic-messages','google-generative-ai','openai-codex-responses','kling-task-api','stability-rest-api'];
const HARD_CONSTRAINTS = ['thinkingOnly', 'samplingParametersDeprecated', 'forcedToolChoiceUnsupported'];
export function resolveEffectiveModel(spec, accessModel, options = {}) {
  const blockedReasons = [], provenance = {}, pendingOverrides = [];
  if (options.publicationState !== 'published') blockedReasons.push('catalog-not-published');
  const connection = options.connection ?? {};
  const protocol = accessModel.protocol ?? options.protocol ?? {};
  let apiFormat = accessModel.request?.apiFormatOverride ?? protocol.apiFormat ?? connection.apiFormat;
  if(accessModel.request?.responsesOnly===true && apiFormat==='openai-completions')apiFormat='openai-responses';
  const exact = Boolean(spec && accessModel.binding?.kind === 'exact' && spec.modelRef === accessModel.modelRef);
  const profiles = (exact ? spec.protocolProfiles ?? [] : []).filter(profile => profile.apiFormats.includes(apiFormat));
  const required = [options.requiredClientVersion, connection.requiredClientVersion, connection.minimumClientVersion, accessModel.requiredClientVersion, protocol.requiredClientVersion, exact ? spec.requiredClientVersion : undefined, ...profiles.map(p => p.requiredClientVersion)].filter(v => v !== undefined);
  if (!required.length || required.some(v => compareVersions(options.clientVersion, v) === null)) blockedReasons.push('invalid-client-version');
  else if (required.some(v => compareVersions(options.clientVersion, v) < 0)) blockedReasons.push('client-update-required');
  const local = ['access-local','dynamic'].includes(accessModel.binding?.kind) && accessModel.modelRef === null;
  if (!exact && !local) blockedReasons.push('unresolved-model-binding');
  if (!(options.supportedApiFormats ?? SUPPORTED_PROTOCOLS).includes(apiFormat) || protocol.state === 'unknown') blockedReasons.push('unknown-adapter');
  const now = options.now === undefined ? Date.now() : typeof options.now === 'number' ? options.now : Date.parse(options.now);
  if (!Number.isFinite(now)) blockedReasons.push('invalid-lifecycle-clock');
  for (const lifecycle of [exact ? spec.lifecycle : undefined, accessModel.lifecycle]) {
    if (['retired', 'historical'].includes(lifecycle?.status)) blockedReasons.push('retired-model');
    if (lifecycle?.retiredAt !== undefined) {
      const expiry = /^\d{4}-\d{2}-\d{2}$/.test(lifecycle.retiredAt) ? Date.parse(`${lifecycle.retiredAt}T00:00:00Z`) : NaN;
      if (!Number.isFinite(expiry)) blockedReasons.push('invalid-retirement-date');
      else if (now >= expiry) blockedReasons.push('retired-model');
    }
  }
  if (protocol.state === 'unsupported') blockedReasons.push('unsupported-adapter');
  const facts = structuredClone(exact ? spec.facts : {});
  for (const key of Object.keys(facts)) provenance[key] = {owner: 'spec', modelRef: spec.modelRef};
  for (const [key, override] of Object.entries(accessModel.overrides ?? {})) {
    if (!override || !('value' in override) || !override.reason) throw new Error(`Unexplained override: ${key}`);
    const intrinsic = exact ? spec.facts[key] : undefined;
    const unverifiedExpansion = ['contextWindow','maxInputTokens','maxOutputTokens'].includes(key) && typeof intrinsic === 'number' && typeof override.value === 'number' && override.value > intrinsic && override.verification !== 'officially-verified-access-contract';
    facts[key] = unverifiedExpansion ? intrinsic : structuredClone(override.value);
    if (unverifiedExpansion) pendingOverrides.push({field:key, requested:override.value, enforced:intrinsic, reason:'unverified-budget-expansion'});
    provenance[key] = {owner: 'access', reason: override.reason, evidence: override.evidence ?? null};
  }
  // Preferences may tighten positive numeric budgets; they never elevate managed capabilities.
  for (const [key, value] of Object.entries(options.userOverrides ?? {})) {
    if (['contextWindow', 'maxInputTokens', 'maxOutputTokens'].includes(key) && Number.isFinite(value) && value > 0 && (facts[key] === undefined || facts[key] === null || value <= facts[key])) {
      facts[key] = value; provenance[key] = {owner: 'user'};
    }
  }
  const request = Object.assign({}, ...profiles.map(profile => structuredClone(profile.request)), structuredClone(accessModel.request ?? {}));
  if(accessModel.request?.responsesOnly===true && apiFormat==='openai-responses')request.apiFormatOverride='openai-responses';
  facts.constraints = {...(facts.constraints ?? {}), ...(request.constraints ?? {})};
  for (const key of HARD_CONSTRAINTS) {
    if (exact && spec.facts.constraints?.[key] === true) facts.constraints[key] = true;
  }
  // Mandatory protocol form cannot be disabled by a weaker access annotation.
  if (profiles.some(profile => profile.request.adaptiveThinking === true)) request.adaptiveThinking = true;
  request.constraints = structuredClone(facts.constraints);
  const supported = request.reasoning?.supportedEfforts, modes = exact ? spec.routing?.reasoning?.supportedModes : undefined;
  if (Array.isArray(supported) && Array.isArray(modes)) {
    request.reasoning.supportedEfforts = supported.filter(e => modes.includes(e) || e === 'none' && modes.includes('off'));
    if (!request.reasoning.supportedEfforts.includes(request.reasoning.defaultEffort)) delete request.reasoning.defaultEffort;
  }
  if (facts.constraints.thinkingOnly === true && request.reasoning) {
    request.reasoning.supportedEfforts = (request.reasoning.supportedEfforts ?? []).filter(e => !['none', 'off'].includes(e));
    if (['none', 'off'].includes(request.reasoning.defaultEffort)) delete request.reasoning.defaultEffort;
  }
  if (request.reasoning?.supportedEfforts?.length === 0) blockedReasons.push('no-compatible-reasoning-effort');
  const uniqueReasons = [...new Set(blockedReasons)], eligible = uniqueReasons.length === 0;
  const selectable = eligible && accessModel.lifecycle?.deprecated !== true && accessModel.lifecycle?.status !== 'deprecated' && accessModel.lifecycle?.selectable !== false && (!exact || spec.lifecycle?.status !== 'deprecated' && spec.lifecycle?.selectable !== false);
  return {eligible, selectable, apiFormat, eligibleForCall:eligible, eligibleForAutoRouting:selectable && exact && pendingOverrides.length === 0 && spec.routing?.eligibleForAgent === true, automaticRoutingEligible: selectable && exact && pendingOverrides.length === 0 && spec.routing?.eligibleForAgent === true, pendingOverrides, manualOnly: !exact || pendingOverrides.length > 0, blockedReasons: uniqueReasons, identity: exact ? spec.identity : null, apiModelId: request.upstreamModelId ?? accessModel.apiModelId, facts, request, billing: structuredClone(accessModel.billing ?? []), provenance};
}
