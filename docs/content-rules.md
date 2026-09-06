# GO TOPIK Content Rules

Fixed after comparing TOPIK 1 STEP 1 (protected, original sample content) and
STEP 2 (Stage 10, first real content built to this structure). Use this
document as the checklist for STEP 3–12 (and TOPIK 2–6 later). Content is
loaded through `getStepContent(level, step)` in `lib/content.ts` — there is
no fallback that substitutes another STEP's content, so a missing STEP
simply renders nothing and the screens show a "content is being prepared"
notice (`components/ContentPending.tsx`).

## Answer index convention

**0-based**, confirmed across every existing data file and screen:
`correctAnswer` is an index into `options`, and every screen (`QuizQuestion`,
the inline option lists in `/diagnostic`, `/quick-check`, PRACTICE) checks
`selected === correctAnswer` directly against that index. Always use
0-based indices — never introduce 1-based `correctAnswer` values.

## ID convention

`L{level}-S{step}-{type}{number}`, two-digit number, e.g. `L1-S3-W01`,
`L1-S3-S01`, `L1-S3-G01`, `L1-S3-L01`, `L1-S3-R01`, `L1-S3-P01`. IDs must be
unique within a STEP and never reused across STEPs. `id` is a `string` on
every content type — it is only ever used as a React `key`, never for
arithmetic, so this is safe to rely on everywhere.

## Word rules

- **Count**: ~12–18 new core words per general STEP; STEP 12 minimizes new
  words (it's a review STEP).
- **Fields**: `id`, `korean`, `partOfSpeech`, `translations`, `example`,
  `exampleTranslations`, `audioUrl`, optional `status`.
- **`partOfSpeech`**: use only `"noun"`, `"verb"`, or `"adjective"` — these
  are the only values `WordCard` translates via `lib/i18n.ts`
  (`posNoun`/`posVerb`/`posAdjective`). Anything else (e.g. `"pronoun"`)
  displays untranslated as raw English text in every language. STEP 2's
  `누구` used `"pronoun"` for this reason until the Stage 15 QA pass fixed
  it to `"noun"` — classify question words like this as `"noun"` going
  forward.
- **`status`**: `"new"` for this STEP's own vocabulary, `"review"` when a
  word already taught in an earlier STEP is deliberately re-listed as its
  own Word card in this STEP. Not read by any component yet — reserved for
  a future spaced-review feature. STEP 1 predates this field (no `status`
  on any of its words); leave STEP 1 exactly as-is.
- **Translations**: `Record<string, string>`, keyed by language code.
  `translations.en` and `exampleTranslations.en` are **required**. Every
  card component falls back to `en` for any language not present
  (`pick(map, lang) { return map[lang] ?? map.en }`), so STEP 2 only fills
  Korean + English — this is expected, not a defect.

## Sentence rules

- **Count**: ~5 per STEP.
- **Fields**: `id`, `korean`, `translations`, `keyExpression`,
  `relatedWords`, `audioUrl`.
- **`relatedWords` is `string[]` of literal Korean word text, not an ID
  reference.** `SentenceCard` renders each entry directly as a chip; it does
  not resolve IDs. A `relatedWords` entry may be one of this STEP's own new
  words, or a word from an earlier STEP reused for review (STEP 2's
  sentence 5 does exactly this with STEP 1's 친구/학교/가다) — either is
  correct. Do **not** rename this field to `relatedWordIds` or store IDs in
  it without also updating `SentenceCard` to resolve them; that is a
  component change, out of scope for content-only STEPs.
- Use the current STEP's new words, a few words reused from earlier STEPs,
  and the current STEP's grammar pattern together where natural. Keep
  sentences short and usable in real beginner speech — not textbook
  translation filler.

## Grammar rules

- **Count**: 1 core pattern per STEP, +1 supporting pattern if needed. Never
  more than that in a single STEP.
- **Fields**: `id`, `pattern`, `meanings`, `explanations`,
  `examples: { korean, translations }[]`.
- Keep `explanations.en` to one short sentence — do not write long grammar
  essays.
- A pattern taught once must reappear (in a later STEP's sentences,
  grammar examples, reading, or practice) rather than never being touched
  again.

## Listening rules

- **Count**: ~2 questions per general STEP (STEP 1 has only 1 — it predates
  this rule and stays as-is).
- **Fields**: `id`, `audioText`, `audioUrl: null`, `question`, `options`
  (exactly 4), `correctAnswer` (0-based, in range), `translations.<lang>`
  = `{ question, explanation }`, `translations.en` required.
- No real audio/TTS yet — `audioUrl` stays `null`; the existing
  `ListenButton` placeholder UI is unchanged.
- Difficulty ramp: STEP 1–4 one-sentence comprehension → STEP 5–8 short
  Q&A → STEP 9–11 2–3 sentence situations → STEP 12 comprehensive review.
- Self-written content only — never copy real TOPIK exam audio/text.

## Reading rules

- **Count**: ~2 questions per general STEP.
- **Fields**: `id`, `passage`, `question`, `options` (exactly 4),
  `correctAnswer` (0-based, in range), `translations.<lang>` =
  `{ question, explanation }`, `translations.en` required.
- Difficulty ramp: STEP 1–3 word + one sentence → STEP 4–6 two sentences →
  STEP 7–9 short notices/memos/everyday info → STEP 10–11 3–4 sentence
  passages → STEP 12 comprehensive.
- Self-written content only — never copy real TOPIK exam passages.

## Practice rules

- **Count**: 8–10 questions per general STEP.
- **Fields**: `id`, `type` (`"vocabulary" | "sentence" | "grammar" |
  "reading" | "listening"`), `question`, optional `passage`/`audioText`,
  `options` (exactly 4), `correctAnswer` (0-based, in range),
  `explanation.<lang>`, `explanation.en` required.
- Mix at least 3 of the 5 `type` values per STEP — never make every
  question the same type.
- **Spread `correctAnswer` across all 4 positions.** STEP 1's 5 practice
  questions are all `correctAnswer: 0` — every answer is objectively
  correct (verified), but the position never varies; that is a known
  quality gap in the original protected sample, not something to fix
  retroactively, and not a pattern to repeat. STEP 2 demonstrates the
  target: 8 questions with correct answers split 2/2/2/2 across indices
  0–3.

## Repetition rule

From STEP 3 onward, actively reuse earlier STEPs' words and grammar:
roughly 30–40% new content, 60–70% review/reuse — as a content-writing
guideline only, not something enforced in code. Spread review across
Sentences, Grammar examples, Listening, Reading, and Practice, not just
repeated Word cards. Reuse accumulates: STEP 3 draws on STEP 1–2, STEP 4 on
STEP 1–3, and so on.

## Translation rules

Finalize the Korean content first, then write the English (`en`)
translation as the baseline — English is required for every translatable
field. Other languages are filled in later, STEP by STEP; until then the
existing `pick()` fallback in each card component shows English, which is
expected behavior, not a bug. Never invent a second Korean-content
structure to work around translation — Korean stays the single source of
truth, English is derived from it, and translation strings live in data
files only, never hardcoded inside a React component.

## Per-STEP QA checklist (run before calling a STEP done)

- [ ] `words`, `sentences`, `grammar`, `listening`, `reading`, `practice`
      all present and non-empty (unless intentionally partial, like a
      template/test STEP)
- [ ] Every `id` unique within the STEP, and not reused from any other STEP
- [ ] Every `options` array has exactly 4 entries
- [ ] Every `correctAnswer` is in range (`0 ≤ correctAnswer < options.length`)
- [ ] Practice `correctAnswer` values are not all the same index
- [ ] `translations.en` / `exampleTranslations.en` / `explanation.en`
      present everywhere required above
- [ ] `relatedWords` entries match real Korean word text (this STEP's own
      words or an earlier STEP's) — not IDs, not typos
- [ ] `getStepContent(level, step)` returns this STEP's data end-to-end on
      WORDS → SENTENCES → GRAMMAR → LISTENING → READING → PRACTICE →
      COMPLETE
- [ ] `npx next build` succeeds with no type errors

## STEP content template

Copy this shape for a new STEP file (`data/content/level{L}/step{NN}.ts`),
then register it in `lib/content.ts`'s `STEP_CONTENT` map:

```ts
import type { StepContent } from "@/types/content";

export const STEP_L_N: StepContent = {
  level: 1,
  step: 3,
  title: "",
  words: [
    // { id: "L1-S3-W01", korean: "", partOfSpeech: "noun",
    //   translations: { en: "" }, example: "",
    //   exampleTranslations: { en: "" }, audioUrl: null, status: "new" },
  ],
  sentences: [
    // { id: "L1-S3-S01", korean: "", translations: { en: "" },
    //   keyExpression: "", relatedWords: [], audioUrl: null },
  ],
  grammar: [
    // { id: "L1-S3-G01", pattern: "", meanings: { en: "" },
    //   explanations: { en: "" }, examples: [{ korean: "", translations: { en: "" } }] },
  ],
  listening: [
    // { id: "L1-S3-L01", audioText: "", audioUrl: null, question: "",
    //   options: ["", "", "", ""], correctAnswer: 0,
    //   translations: { en: { question: "", explanation: "" } } },
  ],
  reading: [
    // { id: "L1-S3-R01", passage: "", question: "",
    //   options: ["", "", "", ""], correctAnswer: 0,
    //   translations: { en: { question: "", explanation: "" } } },
  ],
  practice: [
    // { id: "L1-S3-P01", type: "vocabulary", question: "",
    //   options: ["", "", "", ""], correctAnswer: 0,
    //   explanation: { en: "" } },
  ],
};
```
