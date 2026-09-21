# TOPIK 5 Curriculum Design (Stage 34)

Design-only document. No code, no React changes, no data files this
stage — fixes the plan future TOPIK 5 content-authoring stages build
against, the same role `topik4-curriculum.md` played for TOPIK 4.

TOPIK 4 completion is never a condition for TOPIK 5 access. All Levels
stay Open — this document only plans STEP content, not gating.

## 1. Level goal

TOPIK 5 moves learners from TOPIK 4's intermediate social topics into
upper-intermediate territory: denser sentences carrying more
information per clause, abstract vocabulary, cause/result and
condition/assumption structures, comparing multiple viewpoints,
picking up a speaker's attitude or a writer's intent, drawing simple
inferences from information not stated directly, and writing 7-9
sentence pieces with an opinion or problem-solution structure.

Out of scope: university-major-level academic vocabulary, specialized
legal/economic jargon, long-form academic essays, AI writing grading.

## 2. Structure

20 STEPs. Same flow as TOPIK 3/4, reusing the existing engine and
Writing structure unchanged:

```
WORDS → SENTENCES → GRAMMAR → LISTENING → READING → WRITING → PRACTICE → COMPLETE
```

No new section, no new WritingItem type, no new component.

## 3. STEP-by-STEP curriculum

General STEP: ~22-28 new core words (not forced when overlap with
TOPIK1-4 is heavy — Review weighting takes priority instead), 8-10
sentences (9-10 in later STEPs), 1-2 new grammar points (often a
combination of already-known grammar rather than a brand-new pattern),
4 Listening, 4 Reading, 2 Writing, ~14 Practice (14-16 in later
STEPs). Vocabulary exposure target across a STEP (words + sentences +
reading + listening combined): ~30-40% new, ~60-70% review/reuse of
TOPIK 1-4 vocabulary — not enforced by code.

| STEP | Theme | Learning Goal | New Words | Review Focus | Grammar | Sentences | Listening | Reading | Writing | Practice |
|---|---|---|---:|---|---|---|---|---|---|---|
| 1 | 사회 변화와 생활 | 사회 변화가 생활에 미치는 영향과 원인·결과를 연결해 이해한다 | 24 | 변화/생활방식 기존 어휘(TOPIK4 STEP8/15) 재사용 | -에 따라 (복습, TOPIK4 STEP2), -(으)면서 (복습, TOPIK1) | 8-9 | 4문제 (7-10문장) | 4문제 (9-12문장) | 2개, 6-7문장 | 14 |
| 2 | 인간관계와 소통 | 갈등의 원인을 이해하고 관계 개선 방법과 서로 다른 입장을 설명한다 | 22 | 인간관계 기존 어휘(TOPIK4 STEP1) 재사용 | -는 반면 (복습, '-는 반면에' TOPIK3 STEP9의 변형), -기보다는 (복습, TOPIK3 STEP12) | 8-9 | 4문제 (7-10문장) | 4문제 (9-12문장) | 2개, 6-7문장 | 14 |
| 3 | 교육과 학습환경 | 교육방식의 장단점을 비교하고 효과적인 학습환경에 대한 의견을 이해한다 | 24 | 교육/학습 기존 어휘(TOPIK3 STEP7/TOPIK4 STEP2) 재사용 | -에 따라 달라지다 (신규, '-에 따라' 결합 확장), -(으)ㄹ 뿐만 아니라 (복습, TOPIK4 STEP3) | 8-9 | 4문제 (7-10문장) | 4문제 (9-12문장) | 2개, 6-7문장 | 14 |
| 4 | 직장과 조직문화 | 직장 내 관계와 조직문화를 이해하고 효율적인 업무환경의 조건을 설명한다 | 22 | 직장/업무 기존 어휘(TOPIK3 STEP8/TOPIK4 STEP3) 재사용 | -는 데 있어서 (신규), -기 마련이다 (복습, TOPIK4 STEP2) | 8-9 | 4문제 (7-10문장) | 4문제 (9-12문장) | 2개, 6-7문장 | 14 |
| 5 | 소비와 경제 | 소비 변화의 원인을 이해하고 소비의 장단점을 비교한다 | 22 | 소비 기존 어휘(TOPIK3 STEP12/TOPIK4 STEP4) 재사용 | -에 비해 (복습, TOPIK4 STEP4), -는 대신 (복습, '-는 대신에' TOPIK4 STEP4의 변형) | 8-9 | 4문제 (7-10문장) | 4문제 (9-12문장) | 2개, 6-7문장 | 14 |
| 6 | 건강과 사회 | 건강 문제의 여러 원인을 파악하고 예방·해결방법을 제안한다 | 24 | 건강 기존 어휘(TOPIK2 STEP9/TOPIK3 STEP6/TOPIK4 STEP5) 재사용 | -다 보니 (복습, TOPIK4 STEP5), -(으)로 인해 (신규) | 8-9 | 4문제 (8-11문장) | 4문제 (10-13문장) | 2개, 7-8문장 | 14 |
| 7 | 도시와 주거 | 도시와 주거 문제를 이해하고 장점과 문제점을 비교한다 | 25 | 도시/생활환경 기존 어휘 재사용 | -는 한편 (신규), -(으)ㄹ수록 (복습, TOPIK4 STEP1) | 8-9 | 4문제 (8-11문장) | 4문제 (10-13문장) | 2개, 7-8문장 | 14 |
| 8 | 교통과 이동 | 교통문제의 원인을 이해하고 해결책을 비교한다 | 22 | 교통 기존 어휘(TOPIK3 STEP9/TOPIK4 STEP6) 재사용 | -에 의해 (복습, TOPIK4 STEP6), -기 위해서는 (복습, TOPIK4 STEP10/16) | 8-9 | 4문제 (8-11문장) | 4문제 (10-13문장) | 2개, 7-8문장 | 14 |
| 9 | 문화와 세대 | 세대별 차이를 이해하고 문화 변화의 원인을 설명한다 | 24 | 문화/세대 기존 어휘(TOPIK3 STEP11/TOPIK4 STEP8) 재사용 | -는 데 비해 (신규, '-에 비해서'와 구분 주의), -기 나름이다 (복습, TOPIK4 STEP8) | 8-9 | 4문제 (8-11문장) | 4문제 (10-13문장) | 2개, 7-8문장 | 14 |
| 10 | 미디어와 정보 | 정보의 출처와 신뢰성을 판단하고 사실과 의견을 구분한다 | 22 | 미디어 기존 어휘(TOPIK3 STEP13/TOPIK4 STEP9) 재사용 | -에 따르면 (복습, TOPIK3 STEP13), -다고 볼 수 있다 (복습, TOPIK4 STEP9) | 9-10 | 4문제 (8-12문장) | 4문제 (10-14문장) | 2개, 7-8문장 | 14-15 |
| 11 | 과학과 기술 | 기술 발전의 영향을 이해하고 긍정적·부정적 측면을 비교한다 | 22 | 기술 기존 어휘(TOPIK4 STEP11) 재사용 | -게 됨에 따라 (신규, '-게 되다'+'-에 따라' 결합), -는 반면에 (복습, TOPIK3 STEP9) | 9-10 | 4문제 (8-12문장) | 4문제 (10-14문장) | 2개, 7-8문장 | 14-15 |
| 12 | 환경과 기후 | 환경문제의 원인과 결과를 파악하고 개인·사회 차원의 대응을 구분한다 | 24 | 환경 기존 어휘(TOPIK3 STEP14/TOPIK4 STEP10) 재사용 | -(으)로 인해 (복습, STEP6에서 신규 도입), -지 않는 한 (신규) | 9-10 | 4문제 (8-12문장) | 4문제 (10-14문장) | 2개, 8문장 | 14-15 |
| 13 | 공공서비스와 사회제도 | 공공 안내를 이해하고 제도의 목적과 이용방법을 파악한다 | 24 | 공공서비스 기존 어휘(TOPIK2 STEP13/TOPIK4 STEP12) 재사용 | -도록 되어 있다 (복습, TOPIK4 STEP12), -(으)려면 (복습, TOPIK4 STEP12) | 9-10 | 4문제 (8-12문장) | 4문제 (10-14문장) | 2개, 7-8문장 | 14-15 |
| 14 | 문화예술과 여가 | 작품·행사의 특징과 평가를 이해하고 문화활동의 가치에 대한 의견을 표현한다 | 25 | 문화/공연 기존 어휘(TOPIK2 STEP12/TOPIK4 STEP13) 재사용 | -는 데다가 (복습, TOPIK4 STEP3), -기는 하지만 (신규) | 9-10 | 4문제 (8-12문장) | 4문제 (10-14문장) | 2개, 7-8문장 | 14-15 |
| 15 | 직업과 미래 | 직업 선택 기준을 이해하고 미래 준비 방법을 설명한다 | 26 | 진로 관련 기존 어휘 재사용 | -기 위해서는 (복습, TOPIK4 STEP10/16), -(으)ㄹ 가능성이 있다 (신규) | 9-10 | 4문제 (8-12문장) | 4문제 (10-14문장) | 2개, 8문장 | 14-15 |
| 16 | 사회적 문제와 원인 | 생활과 가까운 사회문제를 정확히 파악하고 복수의 원인과 결과를 구분한다 | 22 | 문제/원인 기존 어휘(TOPIK3 STEP3·5/TOPIK4 STEP16) 재사용 | -는 데에는 (복습, '-는 데' TOPIK4 STEP7의 확장), -(으)로 인해 (복습, STEP6/12에서 이미 사용) | 9-10 | 4문제 (9-12문장) | 4문제 (11-14문장) | 2개, 8문장 | 15-16 |
| 17 | 해결책과 대안 | 여러 해결책을 제시하고 장단점을 비교해 현실적인 대안을 선택한다 | 24 | 해결/방법 기존 어휘(TOPIK3 STEP5/TOPIK4 STEP16) 재사용 | -기보다는 (복습, STEP2/TOPIK3 STEP12), -(으)ㄹ 필요가 있다 (신규), -는 것이 바람직하다 (복습, TOPIK4 STEP14) | 9-10 | 4문제 (9-12문장) | 4문제 (11-14문장) | 2개, 8-9문장 | 15-16 |
| 18 | 의견과 근거 | 친숙한 사회·생활 주제에 자신의 입장을 밝히고 근거 2개 이상과 예시를 제시한다 | 20 | 의견 기존 어휘(TOPIK3 STEP15/TOPIK4 STEP9·17) 재사용 | -다고 볼 수 있다 (복습, STEP10/TOPIK4 STEP9), -는 반면 (복습, STEP2/11), -기 때문이다 (복습, TOPIK4 STEP17) | 9-10 | 4문제 (9-12문장) | 4문제 (11-14문장) | 2개, 8-9문장 | 15-16 |
| 19 | 정보 통합과 추론 | 여러 정보를 연결해 직접 제시되지 않은 내용을 추론하고 핵심 의도·태도를 파악한다 | 18 | TOPIK1~5 전반 주제 어휘 종합 재사용 | 신규 문법 없음 — 기존 문법 종합 활용, Reading/Listening 비중 확대 | 9-10 | 4-5문제 (9-12문장) | 4-5문제 (11-14문장) | 2개, 8-9문장(자료/상황 기반) | 15-16 |
| 20 | TOPIK 5 종합복습 | STEP1-19 전체 복습 + TOPIK 6 준비도 확인 | 0-5 (최소화) | STEP1-19 문법·주제 전면 복습 | 신규 문법 없음 (전 STEP 문법 종합 복습) | 9-10 (복습 위주) | 4-5문제 (종합) | 4-5문제 (종합) | 2-3개, 8-9문장 종합 | 16-18 |

STEP 20 mirrors the existing Review-STEP pattern (TOPIK 1 STEP 12 /
TOPIK 2 STEP 14 / TOPIK 3 STEP 16 / TOPIK 4 STEP 18): near-zero new
words, no new grammar, heavier Practice weighting, no lock on
TOPIK 6, no pass/certification wording.

## 4. Grammar duplicate check (fixed now, binding for content authoring)

Cross-checked every proposed pattern against every `pattern` field
already used in TOPIK 1-4 (`data/content/level1-4`, `data/sample*.ts`
— 134 distinct entries). Of the ~38 patterns in the user's STEP1-20
draft, only **10 are genuinely new**; the rest collide with an
existing "new" introduction and are labeled `(복습)` above instead:

- `-에 따라` (STEP1) → new **TOPIK4 STEP2**.
- `-(으)면서` (STEP1) → new **TOPIK1**.
- `-는 반면` (STEP2/11/18) → short form of `-는 반면에`, new **TOPIK3
  STEP9**.
- `-기보다는` (STEP2/17) → new **TOPIK3 STEP12**.
- `-(으)ㄹ 뿐만 아니라` (STEP3) → new **TOPIK4 STEP3**.
- `-기 마련이다` (STEP4) → new **TOPIK4 STEP2**.
- `-에 비해` (STEP5) → new **TOPIK4 STEP4**.
- `-는 대신` (STEP5) → short form of `-는 대신에`, new **TOPIK4
  STEP4**.
- `-다 보니` (STEP6) → new **TOPIK4 STEP5**.
- `-(으)ㄹ수록` (STEP7) → new **TOPIK4 STEP1**.
- `-에 의해` (STEP8) → new **TOPIK4 STEP6**.
- `-기 위해서는` (STEP8/15) → already review-labeled since TOPIK4
  STEP10 (extension of TOPIK3 STEP2's `-기 위해서`).
- `-기 나름이다` (STEP9) → new **TOPIK4 STEP8**.
- `-에 따르면` (STEP10) → new **TOPIK3 STEP13**.
- `-다고 볼 수 있다` (STEP10/18) → new **TOPIK4 STEP9**.
- `-는 반면에` (STEP11) → new **TOPIK3 STEP9**.
- `-(으)로 인해` (STEP12/16, reintroduced) → only its first
  appearance at STEP6 counts as new.
- `-도록 되어 있다` / `-(으)려면` (STEP13) → new **TOPIK4 STEP12**
  (both).
- `-는 데다가` (STEP14, drafted as "-(으)ㄴ/는 데다가") → exact match,
  new **TOPIK4 STEP3**.
- `-는 것이 바람직하다` (STEP17) → new **TOPIK4 STEP14**.
- `-기 때문이다` (STEP18) → new **TOPIK4 STEP17**.

Genuinely new (10, one per STEP unless noted): `-는 데 있어서` (STEP4),
`-(으)로 인해` (STEP6, first use), `-는 한편` (STEP7), `-는 데 비해`
(STEP9 — flag for future authors: distinguish clearly from `-에
비해서`/`-에 비해` in the explanation field), `-게 됨에 따라` (STEP11,
a `-게 되다` + `-에 따라` combination), `-지 않는 한` (STEP12), `-는
데에는` (STEP16, an extension of TOPIK4 STEP7's `-는 데`), `-기는
하지만` (STEP14), `-(으)ㄹ 가능성이 있다` (STEP15), `-(으)ㄹ 필요가
있다` (STEP17). `-에 따라 달라지다` (STEP3) is a fixed combination
built on the already-reviewed `-에 따라` — kept as its own entry since
it is a distinct expression, but content authors should call out the
relationship in the explanation field.

Future TOPIK 5 content-authoring stages must re-run this same
duplicate-check script (pull every "new" `pattern` across TOPIK 1-5)
before finalizing any STEP's actual grammar entries, exactly like the
existing rule in `docs/content-rules.md` and `docs/topik4-curriculum.md`.

## 5. Listening difficulty criteria

- 4 questions per STEP (4-5 for STEP 19-20).
- Length: ~7-10 sentences (STEP 1-5), ~8-11 (STEP 6-9), ~8-12 (STEP
  10-15), ~9-12 (STEP 16-19), comprehensive for STEP 20.
- Question focus shifts toward meaning-level comprehension over
  TOPIK 4: purpose, reason, the speaker's opinion/attitude, the next
  action, and simple inference, not just literal word-matching (e.g.
  "남자는 왜 이렇게 말했습니까?", "여자의 생각으로 알맞은 것은
  무엇입니까?", "두 사람의 대화 후에 할 일은 무엇입니까?").
- No copying real TOPIK exam listening scripts.

## 6. Reading difficulty criteria

- 4 questions per STEP (4-5 for STEP 19-20).
- Length: ~9-12 sentences (STEP 1-9), ~10-14 (STEP 10-19),
  comprehensive for STEP 20. Forms: informational notices,
  explanatory writing, comparison writing, problem/solution writing,
  short opinion pieces, everyday-social topics.
- Question types strengthened over TOPIK 4: main idea, purpose,
  detail, contextual meaning, cause/effect, the writer's attitude, an
  appropriate title, simple inference — not every question needs to be
  an inference question; mix fact-checking and inference. Still no
  long academic-paper-style passages.

## 7. Writing difficulty ramp

| STEPs | Length | Notes |
|---|---|---|
| 1-5 | 6-7 sentences | direct continuation of TOPIK 4 STEP 17-18's 6-7 sentence ramp |
| 6-10 | 7-8 sentences | |
| 11-15 | 7-8 sentences | |
| 16-19 | 8-9 sentences | STEP 16-19 emphasize problem→cause→solution or opinion→reason→example→conclusion structure |
| 20 | 8-9 sentences | comprehensive, opinion or problem-solution form |

Reused unchanged from TOPIK 3/4: `WritingItem` type
(`sentence-completion` / `sentence-order` / `keyword-writing` /
`short-response`, short-response emphasized), the Writing
screen/component, `hasWriting()` / `getSectionCount()`, and the write
→ sample answer → key points flow. No AI grading, no free-form essay
scoring, no official score prediction, no automatic pass/fail —
unchanged from TOPIK 3/4.

Two structures to standardize for future content authors:

**의견형 (opinion)**: 1) topic intro, 2) own opinion, 3) reason 1, 4)
explanation, 5) example, 6) reason 2, 7) explanation, 8) conclusion.

**문제해결형 (problem-solution)**: 1) problem, 2) situation, 3) cause
1, 4) cause 2, 5) solution 1, 6) solution 2, 7) expected effect, 8)
conclusion.

Each STEP may simplify either structure to fit its own sentence count.

## 8. TOPIK 4 → TOPIK 5 difficulty bridge

- TOPIK 4 STEP 18 (review) already reviews all of TOPIK 4's grammar
  and vocabulary (인간관계/교육/직장/소비/건강/교통/문화/미디어/
  환경/기술/공공서비스/공공질서/문제해결/의견) and runs comprehensive
  4-question Listening/Reading. TOPIK 5 STEP 1's target (7-10 sentence
  Listening, 9-12 sentence Reading, 6-7 sentence Writing) continues
  that scale directly — no jump to academic-length passages or
  professional jargon in STEP 1.
- TOPIK 4 STEP 17 already reaches 6-7 sentence opinion writing with
  `-다고 생각하다`/`-는 반면에`/`-기 때문이다`. TOPIK 5 STEP 1-5's
  Writing (6-7 sentences) does not regress below that, and the ramp to
  8-9 sentences only completes by STEP 16-20 — a gradual extension,
  not a sudden jump to a 5-paragraph essay.
- Vocabulary: TOPIK 5 STEP 1 ("사회 변화와 생활") keeps reusing TOPIK
  1-4 core words (변화/생활방식/영향 already built up through TOPIK4
  STEP8/11/15) rather than starting from an all-new abstract-vocabulary
  list; it is a natural widening of TOPIK 4 STEP 15's "변화와 세대"
  theme, not an unrelated new domain.
- Grammar: STEP 1's `-에 따라` and `-(으)면서` are both pure review
  (see §4) — TOPIK 5 does not open with unfamiliar grammar.
- STEP 16-19's problem/solution/opinion/inference sequence continues
  directly from TOPIK 4 STEP 16-17's same problem→solution and
  opinion→reason pattern, just with denser sentences and more
  comparison/inference in the questions — not a new skill introduced
  from scratch.

Future content-authoring stages for TOPIK 5 STEP 1 must verify this
bridge concretely (duplicate-check script + a fresh read of TOPIK 4
STEP 17-18's actual content) before finalizing STEP 1's word/grammar
lists, the same way every past stage has done.

## 9. Elements to keep repeating from TOPIK 1-4

Per the brief, TOPIK 5 does not re-teach these from scratch — it
reuses and deepens them: 원인/결과, 비교/대조, 조건, 경험, 목적, 의견,
문제/해결, 공공정보, 미디어, 환경, 교육, 업무. Each already has a
"new" home somewhere in TOPIK 1-4 (see §4's grammar table and the
existing vocabulary DB) — future STEP authors must run the duplicate
check against the full TOPIK 1-5 DB before registering any of these
domains' words or grammar as "new" again.

## 10. STEP 16-19 role

Per the brief, TOPIK 5's back half is sequenced as one arc rather than
four independent topic STEPs:

- **STEP 16 (문제 분석)**: identify a problem precisely, separate
  multiple causes, understand the result.
- **STEP 17 (해결책)**: propose multiple solutions, compare their
  trade-offs, pick a realistic alternative.
- **STEP 18 (의견 + 근거)**: take a clear position, back it with 2+
  reasons and an example, briefly acknowledge another view.
- **STEP 19 (정보 통합 + 추론)**: connect multiple pieces of
  information, infer what isn't stated directly, identify the core
  intent/attitude of a passage or conversation — no new chart UI or
  data-analysis feature, just heavier Reading/Listening weighting on
  the existing engine.

This four-STEP arc is what prepares a learner for TOPIK 6 — it is
deliberately sequenced problem → solution → opinion → integration
rather than shuffled with the other topic STEPs.

## 11. Cumulative vocabulary target

TOPIK 1-5 cumulative vocabulary DB target: **~6,300 words** (long-term
target, not something this stage builds). Not "20 STEPs ×
new-words-per-STEP" — includes core learning vocabulary, review words,
vocabulary appearing naturally in Reading/Listening passages, and
eventually a central vocabulary DB not built in this stage.

## 12. Content-authoring rules fixed for future TOPIK 5 stages

Carried over unchanged from `docs/content-rules.md` and
`docs/topik4-curriculum.md`, plus what's new here:

- Never re-register an existing TOPIK 1-4 "new" word or grammar
  pattern as "new" again in TOPIK 5 — reuse with `status: "review"` /
  a `(복습)` pattern suffix. §4 above already pre-flags 20+ grammar
  collisions across the 20-STEP draft; run the duplicate-check script
  again before authoring each STEP regardless.
- Keep 1-2 new grammar points per STEP; several TOPIK5 STEPs are
  designed to be grammar-review-heavy (STEP2, 5, 8, 10, 13, 15, 17,
  18) by combining already-known patterns rather than teaching new
  ones — that is intentional, not a gap to fill.
- `relatedWords` must only reference vocabulary actually taught
  somewhere in TOPIK 1-5 so far.
- `correctAnswer` stays 0-based; check answer-position distribution
  both per-STEP and Level-aggregate (per the Stage 25/27/30 rotating-
  offset method) before a content stage is considered done.
- STEP 20 follows the same Review-STEP rules as TOPIK 1 STEP 12 /
  TOPIK 2 STEP 14 / TOPIK 3 STEP 16 / TOPIK 4 STEP 18: minimal/zero
  new words, no new grammar, heavier Practice weighting, no lock on
  TOPIK 6, no pass/fail/certification wording (banned: "Passed/
  Failed/Certified/Official TOPIK 5", "You are TOPIK Level 5";
  allowed: "Review complete", "Suggested next step", "Ready to
  explore TOPIK 6", "More TOPIK 5 review is recommended").
- Writing content, once authored, follows §7's sizing ramp and stays
  rule-based (sample answer + key points) — no AI grading without a
  separate, explicit decision.
- Topics stay politically/religiously neutral — content uses 생활/
  교육/환경/교통/기술/문화/소비/공공서비스 framing even for "social"
  themes (STEP16-19), never partisan or election-advocacy content.
- Practice should skew slightly more Reading/Listening/inference-
  heavy than TOPIK 4, per the brief — not enforced by code, applied
  when authoring each STEP's actual Practice set.

## 13. Explicitly not done this stage

No TOPIK 5 real content, no TOPIK 5 STEP data files, no code changes,
no React changes, no changes to `types/content.ts`, `lib/content.ts`,
routing, the Writing UI, the learning engine, or HOME/STUDY/TEST/MY,
no central vocabulary DB. This document is the fixed plan later
content-authoring stages build against.
