# Next.js security update — October 14, 2026

## Current status after follow-up

Bradley subsequently authorized investigation and focused remediation of the Turbopack blocker and the two production dependency findings on the same branch. The original preparation results below are retained as history; the follow-up results supersede the original open items 1 and 2.

- Default Turbopack production build now passes after isolating stale generated `.next` state. No source, build script, or configuration change was required.
- Production dependency audit now reports **zero vulnerabilities** after compatible lockfile-only updates of `nanoid` and `source-map-js`.
- Next.js 16.4.1 and Sharp 0.35.5 remain unchanged. A further authorized development-dependency remediation reduced the full audit from 13 findings to **five high-severity entries**, all tracing to one unpatched `braces` advisory. See the final section for current evidence and remaining limits.
- All work remains local on `codex/nextjs-security-2026-10-14`. Bradley authorized a local commit after final diff review; push, merge, and deployment remain unauthorized.

## Scope and authorization

Bradley requested this local security update in chat on October 14, 2026, including an isolated branch, focused dependency changes, lockfile verification, build/lint/existing tests, and course/image smoke checks. That direct instruction authorizes this bounded maintenance assignment. It does not approve pushing, merging, deployment, launch, or general dependency remediation. This record is implementation evidence, not reviewer acceptance or a claim of complete product validation.

Repository instructions reviewed: `docs/SYSTEM-INSTRUCTIONS.md`, `docs/COPILOT-INSTRUCTIONS.md`, and `docs/IMPLEMENTATION_WORK_ORDER_STANDARD.md`. Relevant architecture and routing sources: `docs/architecture/TECH_ARCHITECTURE.md`, `docs/architecture/SITE_MAP.md`, and `docs/strategy/DECISIONS.md`. The architecture remains Next.js App Router, structured content, and local browser persistence.

Initial state: clean `main` at `339f73f`; no staged, unstaged, or untracked work. Created local branch `codex/nextjs-security-2026-10-14` from that commit. No existing work was stashed, reset, or overwritten. No commit, push, merge, or deployment was performed.

## Official security evidence

Verified during this task against the [Next.js October 14 security update](https://nextjs.org/blog/nextjs-security-update-october-14-2026) and [official v16.4.1 release](https://github.com/vercel/next.js/releases/tag/v16.4.1).

| Advisory | Issue | Patched Next.js 16 release |
| --- | --- | --- |
| [GHSA-673q-mjm6-r5xr](https://github.com/vercel/next.js/security/advisories/GHSA-673q-mjm6-r5xr) | Critical unauthenticated RCE in Cache Components / `use cache` returning typed arrays | 16.4.1 |
| [GHSA-2464-fhr4-w9xw](https://github.com/vercel/next.js/security/advisories/GHSA-2464-fhr4-w9xw) / CVE-2026-96889 | Critical SVG image-processing RCE on glibc Linux | 16.4.1; Sharp >=0.35.5 |
| [GHSA-p3m5-59mp-jv5r](https://github.com/vercel/next.js/security/advisories/GHSA-p3m5-59mp-jv5r) | High App Router Server Action denial of service | 16.4.1 |

Source inspection found `next/image` usage, but no `use server`, `use cache`, `cacheComponents`, or `next/og` usage in app/components/lib or the Next config. This bounds the observed feature usage; it is not a security audit or proof of non-exploitability. The vendor recommends upgrading regardless of similar cache functions.

## Initial dependency changes (historical)

- `web/package.json`: pin `next` and `eslint-config-next` from 16.1.6 to 16.4.1. Other direct dependency declarations remain unchanged, including React/React DOM 19.2.3.
- `web/package-lock.json`: npm-generated resolution updates for Next.js, aligned tooling, and their transitive dependencies. Sharp changes from 0.34.5 to 0.35.5; platform Sharp packages resolve to 0.35.5 and libvips packages to 1.3.4. Associated compiler, PostCSS, Babel, browser-data, and lint dependencies also change. No broad `npm update`, `npm audit fix`, overrides, new direct dependency, application/config/content edit, or package-manager migration.
- This validation record.

Both `npm ls next eslint-config-next sharp` and the lockfile confirm `next@16.4.1 -> sharp@0.35.5`. Next's optional Sharp range is `^0.35.5`. Loading the installed Sharp native module reports Sharp 0.35.5 and libvips 8.18.7. Linux optional packages are present in the lockfile; Linux installation/execution was not tested.

## Initial validation results (historical)

Environment: macOS arm64, Node 22.19.0, npm 10.9.3. Commands ran in `web/`; browser checks used the Codex in-app browser at `http://127.0.0.1:3100`, against the production Webpack build. All listed commands were available.

| Check | Result | Observed evidence and limits |
| --- | --- | --- |
| `npm run lint` | Passed | ESLint exited 0, no diagnostics. |
| `npm run test:persistence` | Passed | 3 test files, 34 tests passed; course progress, module artifacts, and reflection stores. |
| `npm run build` | Blocked | First attempt could not fetch existing Google Fonts in the sandbox. Network-enabled retry reached Turbopack but failed opening a local worker port with `Operation not permitted`, while processing `app/globals.css`. Default build remains unverified; no build/config workaround committed. |
| `npm run build -- --webpack` | Passed | Optimized build, TypeScript checking, static generation and traces completed; expected routes emitted. This is alternate-bundler validation, not a passing default build. |
| `npm run start -- --hostname 127.0.0.1 --port 3100` | Passed | Next.js 16.4.1 production server started. |
| Local HTTP route checks | Passed | HTTP 200 for `/`, `/about`, `/course`, `/course/orientation`, `/course/dashboard`, and all seven documented module slugs. |
| Course navigation and completion | Passed, bounded smoke check | Landing CTA opened Orientation; marking Orientation complete survived reload and Dashboard showed 1/8 completed. Continue Course opened AI Literacy. Module completion survived reload as a disabled Complete control. All remaining module pages rendered course content and completion controls. |
| Module inputs and Reverse Build | Passed, bounded smoke check | Scenario/reflection inputs accepted text and enabled feedback controls; Reveal the Thinking opened the expected dialog and Close dismissed it. No provider requests submitted. This did not test saved AI feedback or reflection records end to end. Unsaved reflection input cleared on reload; no persistence claim is made for drafts. |
| Images | Passed, representative coverage | Landing hero/proof, AI Literacy banner/framework, and enlarged lightbox images loaded with nonzero natural dimensions through `/_next/image`. Lightbox visually inspected. A direct optimizer request returned HTTP 200, `image/jpeg`, 16,846 bytes. Other lazy images were not exhaustively checked. |
| Browser console | Passed, bounded observation | No captured warnings/errors at the Module 1 lightbox checkpoint. |
| `git diff --check` | Passed | No whitespace errors. |
| `npm audit --json` | Failed | 15 dependency findings: 11 high, 4 moderate; zero critical. No audit auto-fix applied. |
| `npm audit --omit=dev --json` | Failed | 2 high findings, listed below. Next/Sharp were not reported by this query; absence from npm audit alone does not prove security. |

Raw command logs from this run are local temporary files: `/private/tmp/future-id-lint.log`, `/private/tmp/future-id-tests.log`, `/private/tmp/future-id-build.log`, `/private/tmp/future-id-build-webpack.log`, `/private/tmp/future-id-audit.json`, and `/private/tmp/future-id-audit-production.json`. The retained results above remain useful after temporary files expire.

## Initial concerns and acceptance (historical; see follow-up)

1. Default Turbopack build must pass in an unrestricted development or CI environment before acceptance. Webpack success narrows the issue but does not establish its root cause or prove the deployed build path.
2. Production audit findings: `nanoid@3.3.16` ([GHSA-2v37-7h3g-55p8](https://github.com/advisories/GHSA-2v37-7h3g-55p8)) and `source-map-js@1.2.1` ([GHSA-68fv-2mgg-jv7q](https://github.com/advisories/GHSA-68fv-2mgg-jv7q)). Both exact versions were already present in the baseline lockfile. Audit reports fixed versions available. A separate focused remediation/reachability review is needed; this update does not claim a clean dependency audit.
3. Live AI feedback, all-module interaction completion, cross-browser/mobile/screen-reader coverage, full accessibility regression, and glibc Linux native behavior were not run. Existing tests and smoke checks do not substitute for full governed product validation.
4. The local update does not remediate an existing hosted deployment. Bradley's review/approval is required before push, merge, or deployment. Prepared locally with validation limitations; reviewer acceptance remains pending.
5. The server logged one upstream CDN timeout for `simulation-design-banner-overlay-web640x287.jpg` during browser navigation. A targeted retry passed: the original remote JPEG returned HTTP 200 (115,879 bytes), and the optimized 3840-pixel JPEG returned HTTP 200 (17,459 bytes). This confirms successful recovery, not guaranteed remote-image availability.

## Follow-up investigation and remediation

### Dependency findings

`npm explain` traced both production classifications to `next@16.4.1 -> postcss@8.5.23`. The packages are also shared by development tools. PostCSS declares `nanoid: ^3.3.16` and `source-map-js: ^1.2.1`, which permit patched versions without overrides or new direct dependencies.

- The [Nano ID advisory](https://github.com/advisories/GHSA-2v37-7h3g-55p8) identifies custom generators receiving size zero as the denial-of-service trigger and 3.3.18 as a patched 3.x version. Installed PostCSS uses `nanoid/non-secure` with a fixed size of 6 in `lib/input.js`, rather than the advisory's custom generator trigger. No direct Nano ID use was found in app/components/lib. That limits the observed exposure; remediation was still appropriate.
- The [source-map-js advisory](https://github.com/advisories/GHSA-68fv-2mgg-jv7q) identifies malformed indexed source-map section offsets as the denial-of-service trigger and 1.2.2 as patched. PostCSS imports `SourceMapConsumer` for CSS source-map processing. No direct source-map-js use was found in app/components/lib. No claim is made that every transitive runtime path has been exhaustively analyzed.

Ran `npm update nanoid source-map-js --cache /private/tmp/future-of-id-npm-cache --no-audit --no-fund`. Compared with the prepared lockfile at the start of this follow-up, **exactly two package records changed**:

| Package | Before | After |
| --- | --- | --- |
| `nanoid` | 3.3.16 | 3.3.20 |
| `source-map-js` | 1.2.1 | 1.2.2 |

`web/package.json` received no further changes. `npm ls` confirmed the installed resolutions, and lockfile inspection reconfirmed Sharp 0.35.5. No audit auto-fix or general update was used.

### Turbopack investigation

The standard build reproduced the same `app/globals.css -> PostCssTransformedAsset -> creating new process -> binding to a port -> Operation not permitted` failure both before and after the dependency fixes. Ordinary IPv4/IPv6 Node and Python socket tests passed, as did a Node child-process localhost test. Therefore a general inability to open localhost sockets was not established.

A disposable minimal Next.js 16.4.1 page using the same installed dependencies and `@tailwindcss/postcss` plugin built successfully with Turbopack. It had simple CSS and no Future of ID code or Google Fonts. It served as a control, not complete app-equivalence evidence.

Preserved the existing generated `.next` directory in `/private/tmp/future-id-next-cache-w22Xq5/.next`, then ran the full application's unchanged `npm run build` from a clean generated state. It passed, including TypeScript and static generation. As a controlled comparison, restored the old `.next` directory and reran the identical command: the original socket error returned. Restored the successful output afterward. The temporary probe was moved outside the repository to `/private/tmp/future-id-minimal-turbo-probe-3v1u1D`.

**Finding:** stale generated build state reproducibly retains the failure in this checkout, and isolating that state resolves it. The exact persisted cache entry and the cause of the initial permission denial remain unproven. This evidence does not establish a Next.js source defect or require changing the application's default bundler. Official [sandbox documentation](https://learn.chatgpt.com/docs/sandboxing) describes platform-native restrictions on spawned commands, but does not establish the cause of this particular cached failure.

### Follow-up validation

Same macOS/Node/npm environment as the initial run; commands available and run from `web/`.

| Check | Result | Evidence |
| --- | --- | --- |
| `npm run lint` | Passed | Exit 0, no diagnostics. |
| `npm run test:persistence` | Passed | 3 files, 34 tests passed. |
| `npm run build`, old generated state | Failed, diagnostic control | Same port-binding error before/after dependency updates and when old state was deliberately restored. |
| Minimal Turbopack control app | Passed | Optimized build and prerender completed. |
| `npm run build`, clean generated state | Passed | Default Turbopack optimized build, TypeScript, and all expected routes completed. |
| Final repeat `npm run build` | Passed | Same default build passed again after restoring successful state and removing the temporary probe from the repo. |
| Final Turbopack production server smoke checks | Passed | All 12 public/course/module routes returned HTTP 200. Generated CSS returned HTTP 200 with theme variables (48,256 characters); optimized AI Literacy banner returned HTTP 200, `image/jpeg`, 16,846 bytes. This was HTTP coverage; the initial browser interaction checks were not repeated. Local server stopped afterward. |
| `npm audit --omit=dev --json` | Passed | Exit 0; all severities zero. |
| `npm audit --json` | Failed, development findings remain | 13 findings: 9 high, 4 moderate, zero critical; production findings resolved. |
| `git diff --check` | Passed | No whitespace errors. |

Temporary follow-up evidence files: `/private/tmp/future-id-turbopack-followup.log`, `/private/tmp/future-id-turbopack-after-followup.log`, `/private/tmp/future-id-minimal-turbopack.log`, `/private/tmp/future-id-turbopack-clean-followup.log`, `/private/tmp/future-id-turbopack-oldstate-retest.log`, `/private/tmp/future-id-turbopack-final.log`, `/private/tmp/future-id-lint-followup.log`, `/private/tmp/future-id-tests-followup.log`, `/private/tmp/future-id-audit-followup.json`, and `/private/tmp/future-id-audit-production-followup.json`.

Remaining review scope: development audit findings, full product/accessibility/provider validation, Linux deployment behavior, and deployment approval. A local passing build does not remediate an existing hosted deployment. Final changed-file inventory remains `web/package.json`, `web/package-lock.json`, and this evidence record; no application code/configuration changes.

## Development dependency remediation

### Authorization and starting state

Bradley authorized investigating the 13 remaining development dependency findings and resolving compatible updates on this same branch, without push, merge, or deployment. Existing uncommitted security changes were preserved. A fresh audit confirmed the starting count: 13 entries (9 high, 4 moderate); production audit was clear.

### Findings and compatible changes

The 13 audit entries represent dependency advisories plus propagated findings on dependent packages, not 13 independent vulnerabilities. Inspected the installed dependency graph and official GitHub advisory records. Applied only named updates within existing dependency ranges; no force install, legacy-peer-deps, override, major-version migration, or application/configuration edit.

| Dependency/finding group | Path and issue | Resolution |
| --- | --- | --- |
| `@humanfs/node` | ESLint; recursive copy follows symlinks outside the source tree ([advisory](https://github.com/advisories/GHSA-p498-v437-472g)) | 0.16.7 → 0.16.8; associated core 0.19.1 → 0.19.2 and types 0.15.0 added by the patched package. |
| `brace-expansion` | ESLint/minimatch and TypeScript ESLint/minimatch; multiple expansion/recursion DoS advisories, including [quadratic expansion](https://github.com/advisories/GHSA-q2hr-2g5m-vwhr) | Both installed lines patched: 1.1.12 → 1.1.21 and 5.0.4 → 5.0.12. This is a different package from the unresolved `braces`. |
| `flatted` | ESLint → file-entry-cache → flat-cache; parse prototype pollution ([advisory](https://github.com/advisories/GHSA-rf6f-7fwh-wjgh)) | 3.4.1 → 3.4.4; advisory lists 3.4.2 as patched. |
| `js-yaml` | ESLint → @eslint/eslintrc; YAML merge/alias CPU DoS advisories, including [merge-budget bypass](https://github.com/advisories/GHSA-2883-xcg3-v3hh) | 4.1.1 → 4.3.2. |
| `undici` | jsdom; multiple cache, HTTP, WebSocket, and TLS findings, including [BalancedPool TLS callback loss](https://github.com/advisories/GHSA-w293-vg96-wgc3) | 7.28.0 → 7.30.0, within jsdom's `^7.25.0` range. Audit no longer reports the package. |
| `vitest`, `@vitest/mocker`, `@vitest/coverage-v8` | Redirect mocks can read files outside the project through particular dev-server plugin paths ([advisory](https://github.com/advisories/GHSA-82fw-gwwq-j7x9)) | Vitest, mocker, coverage, and aligned Vitest packages 4.1.10 → 4.1.11. Raised the two direct dev dependency minimums to `^4.1.11`. Existing tests use `vitest run` with jsdom; no standalone public mocker server was found in the configured test path. |

Used `npm update @humanfs/node vitest @vitest/coverage-v8 brace-expansion flatted js-yaml undici` for compatible named updates. That retained Vitest's existing exact peer pair. Installing the explicitly patched Vitest/coverage pair with npm 10.9.3 then hit an internal Arborist `Cannot read properties of null (reading 'edgesOut')` failure, including with package-lock-only resolution. No peer requirement was relaxed. A temporary official-registry `npm@11.21.0` invocation successfully resolved `vitest@^4.1.11` and `@vitest/coverage-v8@^4.1.11`. Global npm and project package-manager settings were not changed.

The Vitest resolution also refreshed its compatible nested tooling: Vite 8.1.4 → 8.3.4, Rolldown 1.1.5 → 1.2.14 with platform bindings, Vite's Lightning CSS 1.32.0 → 1.33.0, a nested PostCSS 8.5.30, and associated test utility packages. A prefer-dedupe trial did not avoid that refresh; retained the successful normal resolution. These are transitive test-toolchain changes, not new direct product dependencies. Verified a clean install afterward using the original npm 10.9.3, including its usual install-script handling.

### Unresolved upstream chain

Five high-severity audit entries remain:

`eslint-config-next@16.4.1 → @next/eslint-plugin-next@16.4.1 → fast-glob@3.3.1 → micromatch@4.0.8 → braces@3.0.3`.

All five entries trace to [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm), a stack-exhaustion DoS from deeply nested brace patterns. The advisory lists **no patched version**. npm registry checks confirmed the current `braces` version is 3.0.3. The latest fast-glob 3.3.3 still depends on micromatch 4.x; the Next ESLint plugin pins fast-glob 3.3.1, so an override to latest fast-glob would not resolve the underlying finding.

npm suggests `eslint-config-next@14.2.35` as a fix because that older chain avoids the dependency. Rejected that downgrade: it would leave the explicitly aligned Next.js 16.4.1 tooling contract and exceed compatible maintenance scope. Did not remove lint rules, vendor a patch, force a package replacement, or suppress the advisory to obtain a zero count.

Reachability inspection: the installed Next ESLint plugin imports fast-glob only in `dist/utils/get-root-dirs.js`, where it processes explicit `settings.next.rootDir` patterns. The repository's ESLint config does not set that property; the default uses the current directory. No direct braces/micromatch/fast-glob use was found in app/components/lib/test or the Vitest config. This narrows the observed route to a trusted lint configuration, but is not proof that every transitive path is unreachable. The vulnerability remains unresolved, with no production audit finding. Revisit when an upstream patched package or compatible dependency-chain change is available; no future monitoring was scheduled.

### Final validation after development fixes

Environment remains macOS arm64, Node 22.19.0, normal npm 10.9.3. All commands available; working directory `web/`.

| Check | Result | Evidence and limits |
| --- | --- | --- |
| `npm ci --no-audit --no-fund` with temporary cache | Passed | Original npm 10.9.3 clean install: 446 packages installed. Confirms ordinary installs do not need the temporary resolver upgrade. |
| `npm run lint` | Passed | Exit 0, no diagnostics. |
| `npm run test:persistence -- --coverage` | Passed | Vitest 4.1.11, 3 files, 34 tests passed; V8 coverage completed. Reported 81.44% statements, 79.31% branches, 80.76% functions, 85.4% lines across measured files; these are not full-product coverage figures. |
| `npm run build` | Passed | Default Next.js 16.4.1 Turbopack build, TypeScript, and expected route generation completed. |
| `npm audit --json` | Failed, upstream finding remains | 5 high entries from the single braces advisory; zero moderate/low/critical. Eight starting audit entries cleared. |
| `npm audit --omit=dev --json` | Passed | Exit 0, zero findings at every severity. |
| `npm ls` / lockfile inspection | Passed | Vitest, coverage, and mocker aligned at 4.1.11. Next 16.4.1, Sharp 0.35.5, Nano ID 3.3.20, and source-map-js 1.2.2 preserved. Lockfile format remains v3. |
| `git diff --check` | Passed | No whitespace errors. |

Vitest/Vite emitted a non-failing warning: the existing `vitest.config.ts` uses ESM syntax in a CommonJS package, which a future major Vite native config loader will not support. Current execution and coverage pass. Left configuration/module-mode changes for a future tooling migration rather than suppressing the warning or changing application module semantics here.

Evidence logs: `/private/tmp/future-id-dev-audit-before.json`, `/private/tmp/future-id-dev-audit-final.json`, `/private/tmp/future-id-dev-production-audit.json`, `/private/tmp/future-id-dev-ci.log`, `/private/tmp/future-id-dev-lint.log`, `/private/tmp/future-id-dev-tests.log`, and `/private/tmp/future-id-dev-build.log`. Coverage output remains in the existing temporary reports location configured by `web/vitest.config.ts`.

Final changed files remain `web/package.json`, `web/package-lock.json`, and this record. In this development-dependency slice, only the Vitest and coverage minimum declarations changed in the manifest. No new tests were added; existing tests and the changed coverage provider were exercised. Prior browser/product validation is historical and was not repeated for these dev-tool-only changes. No commit, push, merge, deployment, global tooling update, or acceptance decision was performed.

## Final diff review and local commit authorization

Bradley requested review of the final diff and a local commit on this branch. Reviewed the manifest diff, every changed lockfile package record, registry destinations, and the full validation record. The final scope is exactly three files: the dependency manifest, generated lockfile, and this evidence record. No unrelated application code, content, configuration, generated build output, temporary probe, credential, or global tooling change is included. The lockfile's transitive Next.js, image-processing, ESLint, and Vitest/Vite changes are documented above; all changed package download URLs use the npm registry.

Final review found no additional implementation changes needed. `git diff --check` passed. The previously completed clean install, lint, 34 tests with coverage, and default Turbopack build remain the validation evidence; only this documentation clarification followed those checks. The unresolved braces advisory and its five propagated development audit entries remain explicitly documented. Local commit authorization does not approve those remaining risks for deployment or establish full product acceptance. No push, merge, or deployment is authorized.
