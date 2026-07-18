# X Discovery and Video Evidence Policy

X is a discovery surface, not a bulk-import source. Seedance 2.5 searches can return launch commentary, reposts, unrelated Seedance versions, still images, or clips without the prompt that produced them. Candidates remain private until they pass every gate.

## Search Matrix

- `"Seedance 2.5" prompt`
- `"Seedance 2.5" video prompt`
- `"Seedance 2.5" image to video`
- `"Seedance 2.5" reference video`
- `"Seedance 2.5" audio prompt`
- `"Seedance 2.5" camera movement`
- `"Seedance 2.5" video edit`

Search replies and quoted posts when the prompt is placed in a thread. Keep the creator's canonical post rather than an aggregator repost.

## Hard Gates

Reject a candidate unless it has explicit Seedance 2.5 evidence, a canonical source and attributable creator, reusable prompt text or a clearly labeled reconstruction, playable video evidence, one primary workflow category, and no duplicate source, prompt, or media fingerprint.

## Quality Signals

Prefer cases that reveal reference assignment, character or product continuity, sustained blocking, deliberate camera paths, synchronized dialogue or sound, and clearly scoped edits. Penalize announcements, engagement bait, prompt fragments, other Seedance versions, and showcase clips that hide how the result was directed.

## Publication Record

The public record retains source URL, publication date, creator, prompt provenance, model evidence, media URLs, workflow, and curation notes. Editorial completion must be described in `sourceMeta.prompt_source`; reconstructed text is never presented as verbatim.
