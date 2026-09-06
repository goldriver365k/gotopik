# TOPIK 1~2 통합 QA 리포트

Date: 2026-09-06
Scope: TOPIK 1 STEP 1–12 + TOPIK 2 STEP 1–14 (Stage 21 full integrated QA pass)

## 1. 콘텐츠 수 집계

| Level | New Words | Review Words | Sentences | Grammar | Listening | Reading | Practice |
|---|---:|---:|---:|---:|---:|---:|---:|
| TOPIK 1 | 154 | 24 | 59 | 26 | 24 | 24 | 97 |
| TOPIK 2 | 181 | 65 | 86 | 39 | 43 | 43 | 150 |

(TOPIK 1 STEP 1 and TOPIK 2 STEP 14 are Review STEPs and intentionally
carry different counts than the general-STEP pattern — see §5.)

## 2. 검사 방법

전수 스크립트 검사(26 STEP, `data/content/level1/step01–12.ts` +
`data/content/level2/step01–14.ts`, STEP 1은 `data/sample*.ts` 원본까지
포함)로 다음을 확인했다: 섹션 존재 여부, STEP 객체의 level/step 일치,
ID 형식/중복, options 개수(4) 및 correctAnswer 범위(0–3), relatedWords가
실제로 가르친 어휘를 가리키는지, 신규 어휘 중복, 문법 패턴 중복,
practice/listening/reading 문항의 완전 중복, 정답 위치 분포.

## 3. 발견 및 수정 사항

1. **문법 중복 (3건, 수정함)** — 같은 핵심 문법이 서로 다른 STEP에서
   두 번 "신규"로 소개됨:
   - `을/를`: TOPIK1 STEP3(신규) / STEP4(신규였음 → **STEP4를 "을/를
     (복습)"으로 수정**)
   - `-고 있다`: TOPIK2 STEP1(신규) / STEP10(신규였음 → **STEP10을
     "-고 있다 (복습)"으로 수정**, 동안이 STEP10의 실제 신규 문법)
   - `-아/어 보다`: TOPIK2 STEP7(신규) / STEP12(신규였음 → **STEP12를
     "-아/어 보다 (복습)"으로 수정**, 때가 STEP12의 실제 신규 문법)
   - 문장/예문/설명은 그대로 두고 pattern 이름과 meanings/explanations
     문구만 최소 수정. 대규모 재설계 없음.

2. **relatedWords 오류 (2건, 수정함)** — 어디에서도 가르친 적 없는
   기능어가 relatedWords에 포함됨. 배열에서 제거만 함 (문장 자체는
   변경 없음):
   - TOPIK2 STEP10 S01: `"지금"` 제거
   - TOPIK2 STEP14 S07: `"인터넷"` 제거

3. **정답 위치 편중 (수정함, 선택지 순서 변경만)** — 문항을 다시
   만들지 않고 options 배열 순서 + correctAnswer 인덱스만 바꿔 재배열:
   - TOPIK2 Listening: `[4,32,7,0]` → `[11,11,11,10]`
   - TOPIK2 Reading: `[4,33,6,0]` → `[11,11,11,10]`
   - TOPIK1 Listening: `[7,12,5,0]` → `[7,6,6,5]`
   - TOPIK1 Reading: `[1,14,7,1]` → `[7,6,6,5]`
   - TOPIK2 Practice: `[58,46,28,18]` → `[38,38,37,37]`
   - TOPIK1 Practice는 이미 `[24,25,24,24]`로 균형 — 수정 없음.

4. **신규 어휘 중복 (1건, 정상 처리된 기존 예외)** — 눈(snow, TOPIK1
   STEP8) / 눈(eye, TOPIK1 STEP10)은 동음이의어로, Stage 15 QA에서
   이미 검토 후 의도된 예외로 확정됨 (`docs/topik1-qa.md` 참고).
   이번 통합 검사에서도 재확인만 하고 그대로 둠.

5. **문제 완전 중복**: 0건 (question+options+correctAnswer 동시 일치
   케이스 없음).

6. **ID 검사**: 전체 999+ ID 전수 검사, 중복/형식 오류 없음. STEP
   객체(`STEP_L_S`)의 level/step 값도 파일 위치와 모두 일치.

7. **Level 간 어휘 연결**: TOPIK1 핵심 어휘(가족/친구/학교/회사/시간/
   음식/병원/버스/지하철 등)가 TOPIK2 Sentence에서 자연스럽게 반복
   등장함을 확인. TOPIK2가 새 단어로만 구성되지 않음 — 정상.

8. **correctAnswer 규칙**: 프로젝트 전체가 0-based로 통일되어 있음
   (`components/QuizQuestion.tsx`의 `index === correctAnswer`와 일치).
   TOPIK1/TOPIK2 간 불일치 없음.

9. **Review STEP (TOPIK1 STEP12, TOPIK2 STEP14)**: 신규 어휘 0개
   (TOPIK1 STEP12) / 0개(TOPIK2 STEP14), 신규 핵심 문법 없음, 종합
   문제 비중 높음, 다음 Level 잠금 없음, 공식 합격/인증 표현 없음 —
   모두 정상.

10. **Progress / Level 분리**: `completedSteps`가 이미
    `{level, step}` 쌍으로 저장되어 TOPIK1 STEP N 완료가 TOPIK2 STEP
    N에 영향을 주지 않음을 확인 (구조 변경 불필요, 기존 구조가 이미
    정답). Continue Learning은 STEP뿐 아니라 section(reading 등)까지
    정확히 복원됨을 브라우저 자동화로 확인.

11. **Fallback**: TOPIK3 STEP1처럼 콘텐츠가 없는 STEP은 TOPIK1
    STEP1 데이터로 대체되지 않고 "content is being prepared" 안내만
    표시됨을 확인. 모든 Level이 잠금 없이 열려 있음도 재확인.

## 4. TOPIK 3 확장 준비

- `types/content.ts`에 `WritingItem` placeholder 타입과
  `StepContent.writing?: WritingItem[]` optional 필드만 추가. 기존
  TOPIK1~2 26개 STEP 파일은 전부 이 필드를 생략하므로 영향 없음
  (optional이라 구조적으로 호환).
- Writing UI/화면/실제 콘텐츠는 만들지 않음.
- `StepContent` 구조는 TOPIK3~6에도 그대로 재사용 가능 — 큰 재설계
  불필요.

## 5. 결론

TOPIK 1~2 26 STEP 콘텐츠는 위 3건의 문법 중복, 2건의 relatedWords
오류, 정답 위치 편중을 수정한 뒤 구조적으로 일관되고 fallback/Progress
오류 없이 정상 동작함을 build + lint + 전수 스크립트 검사 +
브라우저 자동화로 확인했다. TOPIK 3 설계를 시작해도 되는 상태다.
