# TOPIK 4 Curriculum Design (Stage 28)

Design-only document. No code, no React changes, no data files this
stage — fixes the plan future TOPIK 4 content-authoring stages build
against, the same role `topik3-curriculum.md` played for TOPIK 3.

TOPIK 3 completion is never a condition for TOPIK 4 access. All Levels
stay Open — this document only plans STEP content, not gating.

## 1. Level goal

TOPIK 4 moves learners from early-intermediate daily life into a wider
range of social topics: school, work, society, public information,
culture, environment, economy, media. Learners connect multiple
grammar points in one sentence, explain/compare/give opinions with
reasons, follow slightly longer Listening, read informational
passages, find the main idea, make simple inferences, and write
5-7 sentence pieces.

Out of scope: long argumentative essays, highly specialized/abstract
vocabulary, AI writing grading, official score prediction.

## 2. Structure

18 STEPs. Same flow as TOPIK 3, reusing the existing engine and
Writing structure unchanged:

```
WORDS → SENTENCES → GRAMMAR → LISTENING → READING → WRITING → PRACTICE → COMPLETE
```

No new section, no new WritingItem type, no new component.

## 3. STEP-by-STEP curriculum

General STEP: ~20-25 new core words, 7-9 sentences, 1-2 new grammar
points, 3-4 Listening, 3-4 Reading, 2 Writing, ~12 Practice.
Vocabulary exposure target across a STEP (words + sentences + reading
+ listening combined): ~30-40% new, ~60-70% review/reuse of TOPIK
1-3 vocabulary — not enforced by code.

| STEP | Theme | Learning Goal | New Words | Review Focus | Grammar | Sentences | Listening | Reading | Writing | Practice |
|---|---|---|---:|---|---|---|---|---|---|---|
| 1 | 사회생활과 인간관계 | 인간관계 속 갈등의 원인을 이해하고 해결 방법을 설명한다 | 22 | 가족/친구/감정 기존 어휘 재사용 | -는 바람에 (신규), -(으)ㄹ수록 (신규) | 7-9 | 3-4문제 (5-8문장) | 3-4문제 (7-10문장) | 2개, 4-5문장 | 12 |
| 2 | 학교와 교육 | 학습 방법의 장단점과 교육 관련 의견을 이해한다 | 22 | 학교/공부 기존 어휘 재사용 | -에 따라 (신규), -기 마련이다 (신규) | 7-9 | 3-4문제 (5-8문장) | 3-4문제 (7-10문장) | 2개, 4-5문장 | 12 |
| 3 | 직장과 업무환경 | 직장 내 상황과 업무 문제·해결 방법을 설명한다 | 22 | 직장/업무 기존 어휘(TOPIK3 STEP8) 재사용 | -는 데다가 (신규), -(으)ㄹ 뿐만 아니라 (신규) | 7-9 | 3-4문제 (5-8문장) | 3-4문제 (7-10문장) | 2개, 4-5문장 | 12 |
| 4 | 소비와 경제생활 | 소비 습관을 이해하고 합리적 선택 이유를 설명한다 | 22 | 가격/소비 기존 어휘(TOPIK3 STEP12) 재사용 | -는 대신에 (신규), -에 비해 (복습, '-에 비해서' 축약형) | 7-9 | 3-4문제 (5-8문장) | 3-4문제 (7-10문장) | 2개, 4-5문장 | 12 |
| 5 | 건강과 현대생활 | 현대인의 건강 문제와 원인·해결책을 설명한다 | 22 | 건강/생활습관 기존 어휘(TOPIK3 STEP6) 재사용 | -다 보니 (신규), -는 것이 중요하다 (신규) | 7-9 | 3-4문제 (5-8문장) | 3-4문제 (7-10문장) | 2개, 5문장 | 12 |
| 6 | 교통과 도시 문제 | 도시 문제의 원인을 이해하고 해결 방법을 제안한다 | 23 | 교통/도시 기존 어휘(TOPIK3 STEP9) 재사용 | -에 의해 (신규), -고 말다 (신규) | 7-9 | 3-4문제 (6-8문장) | 3-4문제 (7-10문장) | 2개, 5문장 | 12 |
| 7 | 여행과 지역문화 | 지역의 특징을 설명하고 여행 경험을 구체적으로 말한다 | 23 | 여행/지역 기존 어휘(TOPIK3 STEP10) 재사용 | -는 데 [주의: '-는데'와 구분] (신규), -(으)ㄴ 덕분에 (신규) | 7-9 | 3-4문제 (6-8문장) | 3-4문제 (7-10문장) | 2개, 5-6문장 | 12 |
| 8 | 한국 문화와 생활 | 문화 차이를 이해하고 생활 방식 변화를 설명한다 | 23 | 문화/생활방식 기존 어휘(TOPIK3 STEP11) 재사용 | -기 나름이다 (신규), -는 편이다 (복습, TOPIK3 STEP11) | 7-9 | 3-4문제 (6-8문장) | 3-4문제 (7-10문장) | 2개, 5-6문장 | 12 |
| 9 | 미디어와 정보 | 정보의 장단점을 이해하고 신뢰성을 간단히 판단한다 | 23 | 정보/미디어 기존 어휘(TOPIK3 STEP13) 재사용 | -다고 볼 수 있다 (신규), -에 따르면 (복습, TOPIK3 STEP13) | 7-9 | 3-4문제 (6-8문장) | 3-4문제 (8-10문장) | 2개, 5-6문장 | 12 |
| 10 | 환경과 생활 | 환경 문제를 이해하고 개인 실천 방법을 설명한다 | 23 | 환경/공공생활 기존 어휘(TOPIK3 STEP14) 재사용 | -지 않는 한 (신규), -기 위해서는 (복습, '-기 위해서' 확장) | 7-9 | 3-4문제 (6-8문장) | 3-4문제 (8-10문장) | 2개, 5-6문장 | 12 |
| 11 | 과학과 기술생활 | 기술 변화가 생활에 미치는 영향과 장단점을 비교한다 | 23 | 스마트폰/인터넷 기존 어휘 재사용 | -게 되다 (신규), -는 반면에 (복습, TOPIK3 STEP9) | 7-9 | 3-4문제 (6-8문장) | 3-4문제 (8-10문장) | 2개, 5-6문장 | 12 |
| 12 | 공공서비스와 제도 | 공공 안내·절차를 이해하고 필요한 행동을 순서대로 이해한다 | 23 | 공공시설/신청 기존 어휘 재사용 | -(으)려면 (신규), -도록 되어 있다 (신규, '-도록' 결합) | 7-9 | 3-4문제 (6-8문장) | 3-4문제 (8-10문장) | 2개, 5-7문장 | 12 |
| 13 | 문화행사와 여가 | 행사 정보를 이해하고 경험·평가를 표현한다 | 23 | 여가/취미 기존 어휘 재사용 | -는 김에 (신규), -는 동안 (복습, TOPIK3 STEP7) | 7-9 | 3-4문제 (6-8문장) | 3-4문제 (8-10문장) | 2개, 5-7문장 | 12 |
| 14 | 사회 규칙과 공공질서 | 공공 규칙의 필요성을 이해하고 자신의 생각을 설명한다 | 23 | 규칙/질서 기존 어휘(TOPIK3 STEP14) 재사용 | -는 것이 바람직하다 (신규), -아/어야만 하다 (복습, '-아/어야 하다' 강조형) | 7-9 | 3-4문제 (6-8문장) | 3-4문제 (8-10문장) | 2개, 5-7문장 | 12 |
| 15 | 변화와 세대 | 과거와 현재를 비교하고 변화의 원인·결과를 이해한다 | 20 | 세대/생활변화 관련 기존 어휘 재사용 | -던 (신규), -에 비해서 + -게 되다 (복습 2건, 과거·현재 비교 복습) | 7-9 | 3-4문제 (6-8문장) | 3-4문제 (8-10문장) | 2개, 5-7문장 | 12 |
| 16 | 문제와 해결 | 문제 상황을 분석하고 원인·해결 방법을 제안한다 | 23 | 지금까지의 사회생활 주제 어휘 재사용 | -는 수밖에 없다 (신규), -는 것이 필요하다 (신규) | 7-9 | 3-4문제 (6-8문장) | 3-4문제 (8-10문장) | 2개, 문제→원인→해결 6문장 | 12 |
| 17 | 의견과 주장 | 이유·예시를 붙여 의견을 표현하고 다른 의견을 간단히 언급한다 | 22 | 지금까지의 주제 전반 어휘 재사용 | -기 때문이다 (신규), -다고 생각하다 + -는 반면에 (복습 2건, TOPIK3 STEP13/15, STEP9) | 7-9 | 4문제 (7-8문장) | 4문제 (9-10문장) | 2개, 6-7문장 의견문 | 12-13 (의견형 비중↑) |
| 18 | TOPIK 4 종합복습 | STEP1-17 전체 복습 + TOPIK 5 준비도 확인 | 5 이하 (최소화) | STEP1-17 문법·주제 전면 복습 | 신규 문법 없음 (전 STEP 문법 종합 복습) | 7-9 (복습 위주) | 4문제 (종합) | 4문제 (종합) | 종합 Writing 1-2개, 6-7문장 (문제-해결형 또는 의견형) | 15 (종합, Listening/Reading 비중↑) |

STEP 18 mirrors the existing Review-STEP pattern (TOPIK 1 STEP 12 /
TOPIK 2 STEP 14 / TOPIK 3 STEP 16): near-zero new words, no new
grammar, heavier Practice weighting, no lock on TOPIK 5, no
pass/certification wording.

## 4. Grammar duplicate check (fixed now, binding for content authoring)

Cross-checked every proposed pattern against every `pattern` field
already used in TOPIK 1-3 (`data/content/level1-3`, `data/sample*.ts`).
Six proposed items collided with an existing "new" introduction and
are re-labeled `(복습)` above instead of being re-taught as new:

- `-에 비해` (STEP4) → short form of `-에 비해서`, new **TOPIK 3 STEP
  11**.
- `-는 편이다` (STEP8) → new **TOPIK 3 STEP 11**.
- `-에 따르면` (STEP9) → new **TOPIK 3 STEP 13**.
- `-기 위해서는` (STEP10) → extension of `-기 위해서`, new **TOPIK 3
  STEP 2**.
- `-는 반면에` (STEP11, STEP17) → new **TOPIK 3 STEP 9**.
- `-는 동안` (STEP13) → new **TOPIK 3 STEP 7**.
- `-아/어야만 하다` (STEP14) → emphatic form of `-아/어야 하다`, new
  **TOPIK 1/2**.
- `-에 비해서` and `-게 되다` (STEP15) → the first is the same
  collision as STEP4's; the second was newly introduced at STEP11 and
  would otherwise repeat as "new" four STEPs later.
- `-다고 생각하다` (STEP17) → new **TOPIK 3 STEP 13/15**.

Each STEP keeps 1-2 genuinely new grammar points after this fix (STEP
17 and 18 lean review-heavy by design, matching their synthesis role).
`-도록 하다` / `-도록 되어 있다` (STEP 6/12) and `-는 데`/`-는데` (STEP
7) are flagged as combination-of-known-parts or homophone-risk in the
table notes — genuinely new full patterns, but future content
authoring must call out the distinction from `-도록`/`-는데` explicitly
in the explanation field so learners don't confuse them.

Future TOPIK 4 content-authoring stages must re-run this same
duplicate-check script (pull every "new" `pattern` across TOPIK 1-4)
before finalizing any STEP's actual grammar entries, exactly like the
existing rule in `docs/content-rules.md` and `docs/topik3-curriculum.md`.

## 5. Listening difficulty criteria

- 3-4 questions per general STEP, 4 for STEP 17-18.
- Length: ~5-8 sentences (STEP 1-5), ~6-8 (STEP 6-13), ~7-8 (STEP
  14-17), comprehensive for STEP 18.
- Content: workplace/school situations, public announcements,
  explanations, short opinions — not just personal daily-life dialogue.
- Question focus: still includes literal fact confirmation, but adds
  purpose, reason, main idea, and the speaker's stance/attitude more
  often than TOPIK 3.
- No copying real TOPIK exam listening scripts.

## 6. Reading difficulty criteria

- 3-4 questions per general STEP, 4 for STEP 17-18.
- Length: ~7-10 sentences (STEP 1-8), ~8-10 (STEP 9-17), comprehensive
  for STEP 18. Short informational passages (notices, comparisons,
  brief opinion pieces) rather than personal narration only.
- Question types: main idea, detail, reason, purpose, simple
  inference — TOPIK 5+ style long argumentative passages stay out of
  scope.

## 7. Writing difficulty ramp

| STEPs | Length | Notes |
|---|---|---|
| 1-6 | 4-5 sentences | direct continuation of TOPIK 3 STEP 13-15's 4-5 sentence ramp |
| 7-12 | 5-6 sentences | adds reason + comparison/example |
| 13-17 | 5-7 sentences | STEP 17 specifically: 6-7 sentence opinion piece (reason + example + brief counterpoint mention) |
| 18 | 6-7 sentences | comprehensive, problem→cause→solution or opinion form |

Reused unchanged from TOPIK 3: `WritingItem` type
(`sentence-completion` / `sentence-order` / `keyword-writing` /
`short-response`), the Writing screen/component, `hasWriting()` /
`getSectionCount()`, and the write → sample answer → key points flow.
No AI grading, no free-form essay scoring, no official score
prediction — same as TOPIK 3.

## 8. TOPIK 3 → TOPIK 4 difficulty bridge

- TOPIK 3 STEP 16 (review) already reviews all of TOPIK 3's grammar
  (경험/계획/이유/비교/조건/문제-해결/의견) and runs comprehensive
  4-6 sentence Listening/Reading. TOPIK 4 STEP 1's target (5-8 sentence
  Listening, 7-10 sentence Reading, 4-5 sentence Writing) continues
  that length directly — no jump to long-form passages or advanced
  grammar in STEP 1.
- TOPIK 3 STEP 15 already reaches 4-5 sentence opinion writing
  (`-다고 생각하다`, `-지만`). TOPIK 4 STEP 1's Writing (4-5 sentences)
  does not regress below that, and STEP 17's 6-7 sentence opinion piece
  is a gradual extension of the same skill, not a sudden jump to essay
  form.
- Vocabulary: TOPIK 4 STEP 1 keeps reusing TOPIK 1-3 core words
  (사람/가족/친구/직장/사회 words already progressively built up)
  rather than starting an all-new topic list; "사회생활과 인간관계" is
  a natural widening of TOPIK 3's "이유와 결과"/"문제와 해결" themes,
  not an unrelated new domain.
- Grammar: `-는 바람에`/`-(으)ㄹ수록` build on already-reviewed
  `-아서/어서`, `-(으)면` conditional/reason forms rather than
  introducing an unrelated grammar family.

Future content-authoring stages for TOPIK 4 STEP 1 must verify this
bridge concretely (duplicate-check script + a fresh read of TOPIK 3
STEP 15-16's actual content) before finalizing STEP 1's word/grammar
lists, the same way every past stage has done.

## 9. Cumulative vocabulary target

TOPIK 1-4 cumulative vocabulary DB target: **~4,500 words**. Not
"18 STEPs × new-words-per-STEP" — includes core learning vocabulary,
review words, and extra vocabulary appearing naturally in
Reading/Listening passages across all four levels.

## 10. Content-authoring rules fixed for future TOPIK 4 stages

Carried over unchanged from `docs/content-rules.md` and
`docs/topik3-curriculum.md`, plus what's new here:

- Never re-register an existing TOPIK 1-3 "new" word or grammar
  pattern as "new" again in TOPIK 4 — reuse with `status: "review"` /
  a `(복습)` pattern suffix. §4 above already pre-flags six grammar
  collisions; run the duplicate-check script again before authoring
  each STEP regardless.
- Keep 1-2 new grammar points per STEP; STEP 17-18 lean review-heavy
  by design.
- `relatedWords` must only reference vocabulary actually taught
  somewhere in TOPIK 1-4 so far.
- `correctAnswer` stays 0-based; check answer-position distribution
  both per-STEP and Level-aggregate (per the Stage 25/27 rotating-offset
  method) before a content stage is considered done.
- STEP 18 follows the same Review-STEP rules as TOPIK 1 STEP 12 /
  TOPIK 2 STEP 14 / TOPIK 3 STEP 16: minimal/zero new words, no new
  grammar, heavier Practice weighting, no lock on TOPIK 5, no
  pass/fail/certification wording.
- Writing content, once authored, follows §7's sizing ramp and stays
  rule-based (sample answer + key points) — no AI grading without a
  separate, explicit decision.
- Practice should skew slightly more Reading/Listening-heavy than
  TOPIK 3, per the brief in the Stage 28 request — not enforced by
  code, applied when authoring each STEP's actual Practice set.

## 11. Explicitly not done this stage

No TOPIK 4 real content, no TOPIK 4 STEP data files, no code changes,
no React changes, no changes to `types/content.ts`, `lib/content.ts`,
routing, the Writing UI, the learning engine, or HOME/STUDY/TEST/MY.
This document is the fixed plan later content-authoring stages build
against.
