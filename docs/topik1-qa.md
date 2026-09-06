# TOPIK 1 QA Report

Date: 2026-09-06
Scope: TOPIK 1 STEP 1–12 (Stage 15 full QA pass)

## Content count summary

| STEP | New | Review | Sentences | Grammar | Listening | Reading | Practice |
|---|---:|---:|---:|---:|---:|---:|---:|
| 1 | 5 | 0 | 3 | 1 | 1 | 1 | 5 |
| 2 | 16 | 0 | 5 | 2 | 2 | 2 | 8 |
| 3 | 15 | 0 | 5 | 2 | 2 | 2 | 8 |
| 4 | 14 | 1 | 5 | 2 | 2 | 2 | 8 |
| 5 | 15 | 0 | 5 | 2 | 2 | 2 | 8 |
| 6 | 15 | 1 | 5 | 2 | 2 | 2 | 8 |
| 7 | 15 | 0 | 5 | 2 | 2 | 2 | 8 |
| 8 | 15 | 0 | 5 | 2 | 2 | 2 | 8 |
| 9 | 15 | 0 | 5 | 2 | 2 | 2 | 8 |
| 10 | 14 | 1 | 5 | 2 | 2 | 2 | 8 |
| 11 | 15 | 0 | 5 | 2 | 2 | 2 | 8 |
| 12 | 0 | 21 | 6 | 5 | 3 | 3 | 12 |

Total content ids across STEP 1–12: 408. No cross-STEP id collisions.

## Errors found and fixed (minimal edits only)

1. **STEP 1 Practice — answer position skew.** All 5 questions had
   `correctAnswer: 0`. Fixed by reordering each question's `options` array
   only (content/meaning unchanged) so the correct answer lands at a mix
   of positions: `{0:1, 1:2, 2:1, 3:1}`. File: `data/samplePractice.ts`.
2. **STEP 2, word `누구` (L1-S2-W14) — nonstandard `partOfSpeech: "pronoun"`.**
   Not one of the three values `WordCard` translates
   (`noun`/`verb`/`adjective`); displayed as raw untranslated English.
   Changed to `"noun"`. File: `data/content/level1/step02.ts`.
   `docs/content-rules.md` updated to reflect the fix.
3. **STEP 12 Practice P06 duplicated STEP 10 Practice P03 exactly**
   (identical question + options + correctAnswer, both testing 안 with
   "오늘 학교에 ___ 가요."). Reworded STEP 12's P06 to use a different
   sentence testing the same grammar point (저는 커피를 ___ 마셔요.),
   same correct answer position. File: `data/content/level1/step12.ts`.

## Checked and found correct (no change needed)

- All required arrays (words/sentences/grammar/listening/reading/practice)
  present and non-empty on every STEP; STEP 12's review structure intact.
- Word/Sentence/Grammar/Listening/Reading/Practice ids: unique, correctly
  formatted (`L1-S{step}-{TYPE}{NN}`), step number embedded matches the
  file. 408 ids checked, 0 duplicates, 0 format errors.
- New-vocabulary duplication: one real duplicate found and already fixed
  in Stage 13 (병원 → STEP 10 status "review"); the only remaining flag,
  눈 (STEP 8 "snow") vs 눈 (STEP 10 "eye"), is an intentional homonym, not
  a duplicate concept.
- `status` values: only `"new"`/`"review"` used anywhere.
- `relatedWords` (this project's actual field — not `relatedWordIds`;
  documented in content-rules.md) all resolve to real Korean word text
  from the current or an earlier STEP.
- `options.length === 4` and `correctAnswer` in range (0-based, the
  project's one convention — confirmed against `QuizQuestion` and every
  inline quiz screen) on all Listening/Reading/Practice items.
- `translations.en` / `exampleTranslations.en` / `explanation.en` present
  everywhere required.
- No exact-duplicate Practice questions remain after the STEP 12/10 fix.
- Practice answer-position distribution: perfectly even (2/2/2/2 or
  3/3/3/3) on every STEP except STEP 1 (now 1/2/1/1, acceptable for 5
  items). Listening/Reading distributions show some per-STEP skew from
  small sample size (2–4 items per STEP) — not corrected, per the QA
  rule's own guidance not to force a system to fix this at this scale.
- Topic-to-content match: every STEP's actual vocabulary/sentences match
  its stated theme (STEP 1 intro, STEP 2 family, ... STEP 11 services,
  STEP 12 comprehensive review).
- Grammar progression: no early pattern is abandoned — every STEP 1–11
  pattern is deliberately re-surfaced in STEP 12's 5 grammar-review
  entries (에/에서, 이가/을를, 하고와과/도, 있다없다/안, -고싶어요/-으세요).
- **Known gap, not fixed this stage**: 은/는 (topic marker) is used
  constantly across sentences from STEP 1 onward but was never given its
  own formal Grammar entry in any STEP. Flagging for a future stage
  rather than retrofitting a new Grammar item into an early, otherwise
  untouched STEP.
- Reading passages: 20–51 characters, 1–4 lines, consistent with the
  STEP 1–3 → 10–11 → 12 length progression in content-rules.md.
- Listening `audioText`: all short (well under the ~60-char check), no
  oversized scripts found.
- No `SAMPLE_*` fallback leakage: `lib/content.ts`'s `getStepContent`
  still has no fallback path; only `data/content/level1/step01.ts`
  references the `SAMPLE_*` arrays besides their own definitions. STEP
  1–12 all resolve their own real content; no STEP shows "Content coming
  soon" (verified live).
- Progress (`currentLevel`/`currentStep`/`currentSection`/
  `completedSteps`) and Continue Learning: unchanged this stage, still
  verified correct from Stage 8–14's browser-based checks; not re-tested
  end-to-end here since no progress-affecting code changed.
- Self Level / TOPIK History / Quick Check / Level Profile / Recommended
  Start: untouched.

## Remaining known issues (not fixed, documented for later)

- 은/는 has no dedicated Grammar entry despite constant use in sentences
  from STEP 1 onward (see above).
- Listening/Reading answer-position distribution is uneven within some
  individual STEPs (small sample size per STEP, 2–4 items) — acceptable
  at this scale per the QA rule's own guidance.
