# awesome-seedance-2-5-prompts-and-skills
ImagineVid-branded public field guide for source-verifiable Seedance 2.5 prompts and production patterns.

<directory>
data/ - English truth sources for categories, official cases, and verified community prompts; category labels cover all published languages while prompt overlays await verified cases.
docs/ - Model scope, contribution contract, local workflow, and X-source review policy.
public/images/ - Original ImagineVid cover and future licensed preview assets.
scripts/ - Local data validation, candidate scoring, and README generation.
.github/ - Repository-specific issue intake, labels, and publication automation.
</directory>

<config>
AGENTS.md - Repository architecture and content boundaries.
package.json - Node 24 and pnpm commands for validation, tests, and generation.
</config>

## Product Scope
- The intended public repository is `imagineVid/Awesome-seedance-2-5-prompts-and-skills`; no remote is configured during local bootstrap.
- The collection tracks Seedance 2.5 video workflows without treating launch reporting or third-party product pages as an official model card.
- Until ImagineVid publishes a dedicated Seedance 2.5 route, product CTAs use the existing `https://imaginevid.io/seedance-2-0` workflow rather than linking to a nonexistent page.
- The initial community set contains three independently screened X cases discovered through twitterapi.io; no inherited sibling-repository example or placeholder may enter it.

## Content Rules
- English is the canonical language. Thirteen reviewed locale surfaces share the same evidence rules and preserve English source prompts beside localized overlays.
- A community record requires the original prompt or a transparently labeled reconstruction, a canonical X source, author attribution, model evidence, and playable video or a trustworthy preview.
- Model claims must be traceable to current ByteDance documentation or release notes; product CTAs point to ImagineVid.
- Prompt discovery may use local APIs, but credentials and raw search caches never enter Git.
- README output covers fourteen reviewed languages. Video cases use a GitHub-safe clickable-preview pattern with an explicit playback link; public data and generated views must pass structural and duplicate checks before publication.

## Launch Boundary
- `data/prompts.json` contains only cases with explicit Seedance 2.5 evidence, complete public prompts, canonical attribution, and playable X video; `data/official-cases.json` stays empty until a first-party case meets the same reusable-evidence bar.
- The repository publishes one English truth surface and thirteen reviewed localized views; prompt-level overlays are added only after verified cases enter the data set.
- The workflow taxonomy is video-native: camera direction, native audio, commercial motion, image-to-video continuity, stylized motion, and video editing.
- Before committing, run `pnpm run generate`, `pnpm test`, and `pnpm run typecheck`.

[PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
