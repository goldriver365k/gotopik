# TOPIK 1~3 통합 QA 리포트

Date: 2026-09-06
Scope: TOPIK 1 STEP 1–12 + TOPIK 2 STEP 1–14 + TOPIK 3 STEP 1–16
(Stage 27 full integrated QA pass, 42 STEP)

## 1. 콘텐츠 수 집계

| Level | New Words | Review Words | Sentences | Grammar | Listening | Reading | Writing | Practice |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| TOPIK 1 | 154 | 24 | 59 | 26 | 24 | 24 | — | 97 |
| TOPIK 2 | 181 | 65 | 86 | 39 | 43 | 43 | — | 150 |
| TOPIK 3 | 270 | 107 | 113 | 47 | 49 | 49 | 33 | 169 |

(TOPIK 1 STEP 12, TOPIK 2 STEP 14, TOPIK 3 STEP 16은 Review STEP로 다른
수량을 허용 — §7 참고.)

## 2. 검사 방법

42개 STEP 파일 전체(STEP 1은 `data/sample*.ts` 원본 포함)를 스캔하는
스크립트로 섹션 존재 여부, STEP 객체의 level/step 일치, ID 형식·중복,
options 개수(4)·correctAnswer 범위(0–3), relatedWords가 실제 가르친
어휘를 가리키는지, 신규 어휘 중복, 문법 패턴 중복, 문제 완전 중복,
그리고 이번 단계에서 새로 추가한 **STEP별 정답 위치 분포**를 확인했다.

## 3. 발견 및 수정 사항

1. **정답 위치 편중 (57건, 수정함)** — 이전 단계들의 QA는 Level
   전체 합산 분포만 확인해서, 개별 STEP 안에서 정답이 한 번호에
   100% 몰려 있어도 놓칠 수 있었다. 이번 단계에서 STEP 단위 분포
   검사를 추가해 TOPIK1 STEP12(1건), TOPIK2 STEP1~14(대부분),
   TOPIK3 STEP1~8(대부분) 총 57개 Listening/Reading/Practice
   섹션이 한 번호에 50% 이상 몰려 있는 것을 발견했다.
   - 문제 자체는 다시 만들지 않고 options 배열 순서 + correctAnswer
     인덱스만 STEP별로 재배열했다 (질문/지문/설명 텍스트 변경 없음).
   - 1차 수정 후 STEP 단위로는 균등해졌지만, Listening/Reading처럼
     문항이 3개뿐인 섹션은 4로 나누어떨어지지 않아 매 STEP마다 같은
     번호(3번)가 항상 빠지는 구조적 편향이 Level 전체 합산에서
     드러났다. STEP마다 "빠지는 번호"를 순환시키는 2차 조정을
     추가해 Level 합산 분포도 특정 번호가 0에 가깝지 않도록
     맞췄다.
   - 결과: 42개 STEP 전부 STEP 단위 50% 이상 편중 0건, Level 합산도
     모든 번호가 최소 15% 이상 등장.

2. **신규 어휘 중복**: 0건 (기존에 확정된 눈[snow]/눈[eye] 동음이의어
   1건은 재확인만 하고 예외로 유지 — Stage 15에서 이미 검토·확정).

3. **ID 중복 / 형식 오류**: 0건. Word/Sentence/Grammar/Listening/
   Reading/Practice/Writing 전체 ID 전수 검사, STEP 객체
   (`STEP_L_S`)의 level/step 값도 파일 위치와 모두 일치.

4. **Writing 검사 (TOPIK3만)**: 33개 Writing 항목(STEP1~15 각 2개 +
   STEP16 3개) 전수 확인 — ID 고유, type은 4가지 허용값
   (sentence-completion/sentence-order/keyword-writing/
   short-response) 내에서만 사용, prompt·sampleAnswer·explanation
   모두 존재, keyword-writing 항목은 keywords 배열도 존재. AI 첨삭/
   자동 채점/공식 점수 예측 코드는 어디에도 없음 (WritingQuestion
   컴포넌트·writing 페이지 무수정 확인).

5. **relatedWordIds**: 오류 0건 (모든 참조가 실제 가르친 어휘를
   가리킴).

6. **문법 중복 소개**: 0건 (동일 문법이 서로 다른 Level/STEP에서
   신규로 두 번 소개된 사례 없음 — Stage 21/24에서 발견된 을/를,
   -고 있다, -아/어 보다, 고르다 케이스는 이미 review로 수정 완료).

7. **Review STEP 검사**: TOPIK1 STEP12(신규 0/복습 21),
   TOPIK2 STEP14(신규 0/복습 30), TOPIK3 STEP16(신규 0/복습 32)
   모두 신규 어휘 0개, 신규 핵심 문법 없음, 종합 Listening/Reading
   보유, 다음 Level 잠금 없음, "Passed/Failed/Certified/Official"
   등 금지 표현 없음을 확인.

8. **Level 간 난이도 연결**:
   - 문법: TOPIK1(조사·기본 종결) → TOPIK2(과거/미래/이유/계획/
     가능/의무) → TOPIK3(경험/목적/조건/비교/대조/의견) 흐름이
     실제 문법 목록과 일치.
   - 어휘: TOPIK1(기초생활) → TOPIK2(생활 확장) → TOPIK3(초중급
     생활+기초 사회) 흐름 확인, TOPIK3에 지나치게 전문적인 고급
     추상어휘 없음.
   - Sentence 길이: TOPIK1 단문 → TOPIK2 생활 문장 → TOPIK3
     이유/조건/비교 포함 문장으로 완만히 증가.
   - Listening/Reading 길이: TOPIK1 1~3문장 → TOPIK2 2~4문장 →
     TOPIK3 3~6문장(Reading은 STEP11~15부터 6~8문장/정보글) 흐름
     확인, TOPIK3에서 TOPIK4급 장문 논설 없음.
   - Writing 길이: STEP1~4 2~3문장 → STEP5~12 3~4문장 →
     STEP13~15 4~5문장 → STEP16 종합, 완만한 상승 확인.

9. **Level별 Progress / completedSteps 분리**: 코드 구조상 이미
   `completedSteps`가 `{level, step}` 쌍으로 저장되어 있어 별도
   수정 불필요. TOPIK1 STEP3 + TOPIK3 STEP3을 동시에 완료시켜도
   TOPIK2 STEP3은 "Not Started"로 남아 있음을 브라우저 자동화로
   확인. TOPIK1/2/3 각각 6/12, 7/14, 8/16 = 50%를 HOME/STUDY/MY
   동일 helper로 정상 계산.

10. **Continue Learning**: TOPIK3 STEP11 Writing에서 종료 후
    재방문 시 정확히 `/study/3/11/writing`으로 복귀 확인.

11. **Section Flow**: TOPIK1/2는 READING → PRACTICE 그대로,
    TOPIK3만 READING → WRITING → PRACTICE. 상호 오염 없음.

12. **모든 Level Open**: TOPIK1~6 전부 항상 열려 있고 클릭 가능
    확인.

13. **Fallback**: TOPIK1~3은 42개 STEP 전부 실제 콘텐츠 보유 —
    "content is being prepared" 노출 0건. TOPIK4~6은 콘텐츠가
    없으므로 정상적으로 fallback 노출. STEP1 콘텐츠가 다른 STEP에
    자동 복제되는 사례 없음.

14. **Self Level / Quick Check / Level Profile / TOPIK History**:
    4개 화면 모두 200 정상 응답, TOPIK3 콘텐츠 추가로 인한 영향
    없음.

## 4. TOPIK 4 확장 준비

- `lib/levels.ts`에 Level 4(18 STEP)가 이미 정의되어 있음 — 별도
  수정 불필요.
- `types/content.ts`의 `StepContent.writing?: WritingItem[]`은
  이미 optional이며 level 값에 제약이 없어 TOPIK4 STEP 파일도
  동일한 구조로 바로 작성 가능. `WritingItem`도 신규 필드 없이
  그대로 재사용 가능.
- `lib/content.ts`의 `hasWriting()`/`getSectionCount()`는 이미
  범용(level 무관, `content.writing` 존재 여부만 확인)이라
  TOPIK4의 Writing 유무와 무관하게 그대로 동작.
- Listening/Reading 길이 제한은 타입에 없고 콘텐츠 관례일 뿐이므로,
  TOPIK4의 "더 긴 Listening/Reading" 요구도 구조 변경 없이 수용
  가능.
- 결론: **TOPIK4 확장을 위한 Type/구조 변경 불필요 — 기존
  StepContent/WritingItem/loader 패턴 그대로 재사용 가능.**

## 5. 결론

TOPIK 1~3 42 STEP 콘텐츠는 정답 위치 편중(57건, options 순서
재배열만으로 해결) 외에 새로운 오류 없이 구조적으로 일관되고,
Progress/Continue Learning/Section Flow/Level Open/Fallback 모두
정상 동작함을 build + lint + 전수 스크립트 검사 + 브라우저 자동화로
확인했다. TOPIK 4 교육과정 설계를 시작해도 되는 상태다.
