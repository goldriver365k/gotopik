// TOPIK 4 STEP 18 — TOPIK 4 Review (TOPIK 4 종합복습).
// Comprehensive review STEP mirroring TOPIK1 STEP12 / TOPIK2 STEP14 /
// TOPIK3 STEP16's existing Review-STEP pattern: 0 new words, no new
// core grammar, heavier Practice weighting, comprehensive Listening/
// Reading/Writing, never a lock on TOPIK 5.
// All 39 Review Words below already exist as "new" somewhere in
// TOPIK1-4 (see the per-word origin noted in each comment) — none are
// re-registered as "new" here. All 6 Grammar entries reuse existing
// TOPIK4 patterns as "(복습)" comparison pairs; no new grammar.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  // 인간관계 (TOPIK4 STEP1)
  { id: "L4-S18-W01", korean: "갈등", partOfSpeech: "noun", translations: { en: "conflict" }, example: "동료와 갈등이 생겼어요.", exampleTranslations: { en: "A conflict arose with my coworker." }, audioUrl: null, status: "review" },
  { id: "L4-S18-W02", korean: "배려", partOfSpeech: "noun", translations: { en: "consideration (for others)" }, example: "그 사람은 배려가 많아요.", exampleTranslations: { en: "That person is very considerate." }, audioUrl: null, status: "review" },
  { id: "L4-S18-W03", korean: "협력", partOfSpeech: "noun", translations: { en: "cooperation" }, example: "문제를 해결하려면 협력이 필요해요.", exampleTranslations: { en: "Cooperation is needed to solve the problem." }, audioUrl: null, status: "review" },
  { id: "L4-S18-W04", korean: "신뢰", partOfSpeech: "noun", translations: { en: "trust" }, example: "동료 사이에 신뢰가 중요해요.", exampleTranslations: { en: "Trust between coworkers is important." }, audioUrl: null, status: "review" },
  { id: "L4-S18-W05", korean: "존중하다", partOfSpeech: "verb", translations: { en: "to respect" }, example: "서로의 문화를 존중해요.", exampleTranslations: { en: "We respect each other's culture." }, audioUrl: null, status: "review" },
  // 교육 (TOPIK4 STEP2 / TOPIK3 STEP7)
  { id: "L4-S18-W06", korean: "교육", partOfSpeech: "noun", translations: { en: "education" }, example: "저는 교육에 관심이 많아요.", exampleTranslations: { en: "I'm very interested in education." }, audioUrl: null, status: "review" },
  { id: "L4-S18-W07", korean: "학습", partOfSpeech: "noun", translations: { en: "learning / study" }, example: "효과적인 학습 방법을 찾았어요.", exampleTranslations: { en: "I found an effective learning method." }, audioUrl: null, status: "review" },
  { id: "L4-S18-W08", korean: "평가", partOfSpeech: "noun", translations: { en: "evaluation" }, example: "선생님이 평가를 해 주셨어요.", exampleTranslations: { en: "The teacher gave an evaluation." }, audioUrl: null, status: "review" },
  { id: "L4-S18-W09", korean: "효과", partOfSpeech: "noun", translations: { en: "effect" }, example: "이 방법은 효과가 있어요.", exampleTranslations: { en: "This method is effective." }, audioUrl: null, status: "review" },
  // 직장 (TOPIK3 STEP8 / TOPIK4 STEP3)
  { id: "L4-S18-W10", korean: "업무", partOfSpeech: "noun", translations: { en: "work / duties" }, example: "오늘 업무가 많아요.", exampleTranslations: { en: "I have a lot of work today." }, audioUrl: null, status: "review" },
  { id: "L4-S18-W11", korean: "협업", partOfSpeech: "noun", translations: { en: "collaboration" }, example: "팀 간의 협업이 중요해요.", exampleTranslations: { en: "Collaboration between teams is important." }, audioUrl: null, status: "review" },
  { id: "L4-S18-W12", korean: "책임", partOfSpeech: "noun", translations: { en: "responsibility" }, example: "이 일은 제 책임이에요.", exampleTranslations: { en: "This task is my responsibility." }, audioUrl: null, status: "review" },
  // 소비 (TOPIK3 STEP12/STEP16)
  { id: "L4-S18-W13", korean: "소비", partOfSpeech: "noun", translations: { en: "consumption / spending" }, example: "계획적으로 소비해요.", exampleTranslations: { en: "I spend in a planned way." }, audioUrl: null, status: "review" },
  { id: "L4-S18-W14", korean: "예산", partOfSpeech: "noun", translations: { en: "budget" }, example: "예산을 세웠어요.", exampleTranslations: { en: "I set a budget." }, audioUrl: null, status: "review" },
  { id: "L4-S18-W15", korean: "지출", partOfSpeech: "noun", translations: { en: "expenditure" }, example: "이번 달 지출을 확인했어요.", exampleTranslations: { en: "I checked this month's expenditure." }, audioUrl: null, status: "review" },
  // 건강 (TOPIK2 STEP9 / TOPIK3 STEP16)
  { id: "L4-S18-W16", korean: "생활습관", partOfSpeech: "noun", translations: { en: "lifestyle habit" }, example: "좋은 생활습관을 만들어요.", exampleTranslations: { en: "I build good lifestyle habits." }, audioUrl: null, status: "review" },
  { id: "L4-S18-W17", korean: "스트레스", partOfSpeech: "noun", translations: { en: "stress" }, example: "스트레스가 많아요.", exampleTranslations: { en: "I have a lot of stress." }, audioUrl: null, status: "review" },
  // 교통 (TOPIK4 STEP6 / TOPIK3 STEP9)
  { id: "L4-S18-W18", korean: "교통체증", partOfSpeech: "noun", translations: { en: "traffic congestion" }, example: "출근 시간에 교통체증이 심해요.", exampleTranslations: { en: "Traffic congestion is bad during commute time." }, audioUrl: null, status: "review" },
  { id: "L4-S18-W19", korean: "대중교통", partOfSpeech: "noun", translations: { en: "public transportation" }, example: "저는 대중교통을 이용해요.", exampleTranslations: { en: "I use public transportation." }, audioUrl: null, status: "review" },
  { id: "L4-S18-W20", korean: "개선", partOfSpeech: "noun", translations: { en: "improvement" }, example: "생활습관 개선이 필요해요.", exampleTranslations: { en: "Improvement of lifestyle habits is needed." }, audioUrl: null, status: "review" },
  // 문화 (TOPIK2 STEP12)
  { id: "L4-S18-W21", korean: "문화", partOfSpeech: "noun", translations: { en: "culture" }, example: "한국 문화를 배워요.", exampleTranslations: { en: "I'm learning Korean culture." }, audioUrl: null, status: "review" },
  { id: "L4-S18-W22", korean: "전통", partOfSpeech: "noun", translations: { en: "tradition" }, example: "한국 전통 음식이에요.", exampleTranslations: { en: "It's a traditional Korean food." }, audioUrl: null, status: "review" },
  // 미디어 (TOPIK3 STEP13/STEP16 / TOPIK4 STEP16)
  { id: "L4-S18-W23", korean: "정보", partOfSpeech: "noun", translations: { en: "information" }, example: "유용한 정보를 얻었어요.", exampleTranslations: { en: "I got useful information." }, audioUrl: null, status: "review" },
  { id: "L4-S18-W24", korean: "출처", partOfSpeech: "noun", translations: { en: "source" }, example: "정보의 출처를 확인해요.", exampleTranslations: { en: "I check the source of the information." }, audioUrl: null, status: "review" },
  { id: "L4-S18-W25", korean: "영향", partOfSpeech: "noun", translations: { en: "influence / effect" }, example: "스트레스가 건강에 영향을 줘요.", exampleTranslations: { en: "Stress affects health." }, audioUrl: null, status: "review" },
  // 환경 (TOPIK4 STEP10)
  { id: "L4-S18-W26", korean: "환경보호", partOfSpeech: "noun", translations: { en: "environmental protection" }, example: "환경보호에 관심이 많아요.", exampleTranslations: { en: "I'm very interested in environmental protection." }, audioUrl: null, status: "review" },
  { id: "L4-S18-W27", korean: "자원", partOfSpeech: "noun", translations: { en: "resource" }, example: "자원을 아껴 써야 해요.", exampleTranslations: { en: "We must use resources sparingly." }, audioUrl: null, status: "review" },
  // 기술 (TOPIK4 STEP11)
  { id: "L4-S18-W28", korean: "기술", partOfSpeech: "noun", translations: { en: "technology" }, example: "기술이 정말 빠르게 발전해요.", exampleTranslations: { en: "Technology is developing really fast." }, audioUrl: null, status: "review" },
  { id: "L4-S18-W29", korean: "발전", partOfSpeech: "noun", translations: { en: "development / advancement" }, example: "기술 발전이 정말 빨라요.", exampleTranslations: { en: "Technological development is really fast." }, audioUrl: null, status: "review" },
  { id: "L4-S18-W30", korean: "변화", partOfSpeech: "noun", translations: { en: "change" }, example: "요즘 큰 변화가 생겼어요.", exampleTranslations: { en: "There's been a big change lately." }, audioUrl: null, status: "review" },
  // 공공서비스 (TOPIK2 STEP13 / TOPIK4 STEP12)
  { id: "L4-S18-W31", korean: "신청", partOfSpeech: "noun", translations: { en: "application" }, example: "신청 기간을 확인하세요.", exampleTranslations: { en: "Please check the application period." }, audioUrl: null, status: "review" },
  { id: "L4-S18-W32", korean: "절차", partOfSpeech: "noun", translations: { en: "procedure" }, example: "신청 절차가 간단해요.", exampleTranslations: { en: "The application procedure is simple." }, audioUrl: null, status: "review" },
  { id: "L4-S18-W33", korean: "제출", partOfSpeech: "noun", translations: { en: "submission" }, example: "서류 제출 기한이 내일이에요.", exampleTranslations: { en: "The document submission deadline is tomorrow." }, audioUrl: null, status: "review" },
  // 공공질서 (TOPIK3 STEP14)
  { id: "L4-S18-W34", korean: "규칙", partOfSpeech: "noun", translations: { en: "rule" }, example: "규칙을 지켜야 해요.", exampleTranslations: { en: "You have to follow the rules." }, audioUrl: null, status: "review" },
  // 문제해결 (TOPIK3 STEP3/STEP16)
  { id: "L4-S18-W35", korean: "원인", partOfSpeech: "noun", translations: { en: "cause" }, example: "문제의 원인을 찾았어요.", exampleTranslations: { en: "I found the cause of the problem." }, audioUrl: null, status: "review" },
  { id: "L4-S18-W36", korean: "결과", partOfSpeech: "noun", translations: { en: "result" }, example: "좋은 결과가 나왔어요.", exampleTranslations: { en: "A good result came out." }, audioUrl: null, status: "review" },
  // 의견 (TOPIK3 STEP15 / TOPIK4 STEP9/STEP17)
  { id: "L4-S18-W37", korean: "주장", partOfSpeech: "noun", translations: { en: "argument / claim" }, example: "그 사람의 주장에는 근거가 있어요.", exampleTranslations: { en: "That person's argument has grounds." }, audioUrl: null, status: "review" },
  { id: "L4-S18-W38", korean: "근거", partOfSpeech: "noun", translations: { en: "grounds / basis (for an argument)" }, example: "근거를 들어서 설명했어요.", exampleTranslations: { en: "I explained by giving grounds." }, audioUrl: null, status: "review" },
  { id: "L4-S18-W39", korean: "판단", partOfSpeech: "noun", translations: { en: "judgment" }, example: "스스로 판단해야 해요.", exampleTranslations: { en: "You have to judge for yourself." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L4-S18-S01", korean: "대화를 자주 할수록 서로를 더 잘 이해할 수 있습니다.", translations: { en: "The more often you talk, the better you can understand each other." }, keyExpression: "-(으)ㄹ수록", relatedWords: [], audioUrl: null },
  { id: "L4-S18-S02", korean: "공부 방법에 따라 학습 효과가 달라질 수 있습니다.", translations: { en: "Depending on the study method, the learning effect can vary." }, keyExpression: "-에 따라", relatedWords: ["학습", "효과"], audioUrl: null },
  { id: "L4-S18-S03", korean: "계획적으로 소비하다 보면 불필요한 지출을 줄일 수 있습니다.", translations: { en: "If you keep spending in a planned way, you can reduce unnecessary expenditure." }, keyExpression: "소비", relatedWords: ["소비", "지출"], audioUrl: null },
  { id: "L4-S18-S04", korean: "건강을 유지하기 위해서는 규칙적인 생활이 중요합니다.", translations: { en: "In order to maintain health, a regular lifestyle is important." }, keyExpression: "-기 위해서는", relatedWords: [], audioUrl: null },
  { id: "L4-S18-S05", korean: "대중교통을 확대하면 교통 문제를 줄이는 데 도움이 됩니다.", translations: { en: "Expanding public transportation helps reduce traffic problems." }, keyExpression: "-는 데", relatedWords: ["대중교통"], audioUrl: null },
  { id: "L4-S18-S06", korean: "기술은 생활을 편리하게 하는 반면에 새로운 문제를 만들기도 합니다.", translations: { en: "Technology makes life convenient, while also creating new problems." }, keyExpression: "-는 반면에", relatedWords: ["기술"], audioUrl: null },
  { id: "L4-S18-S07", korean: "서비스를 이용하려면 먼저 필요한 서류를 준비해야 합니다.", translations: { en: "To use the service, you must first prepare the necessary documents." }, keyExpression: "-(으)려면", relatedWords: ["절차"], audioUrl: null },
  { id: "L4-S18-S08", korean: "환경을 보호하기 위해서는 작은 행동부터 실천해야 합니다.", translations: { en: "In order to protect the environment, you must practice starting with small actions." }, keyExpression: "-기 위해서는", relatedWords: ["환경보호"], audioUrl: null },
  { id: "L4-S18-S09", korean: "문제를 해결하기 위해서는 먼저 원인을 정확히 파악하는 것이 필요합니다.", translations: { en: "In order to solve a problem, first accurately identifying the cause is necessary." }, keyExpression: "-는 것이 필요하다", relatedWords: ["원인"], audioUrl: null },
  { id: "L4-S18-S10", korean: "저는 공공장소에서 기본적인 규칙을 지켜야 한다고 생각합니다.", translations: { en: "I think you must keep basic rules in public places." }, keyExpression: "-다고 생각하다", relatedWords: ["규칙"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L4-S18-G01",
    pattern: "-(으)려고 하다 (복습)",
    meanings: { en: "to intend to / plan to (review)" },
    explanations: {
      en: "Review: -(으)려고 하다 states a personal plan or intention. Compare with -(으)려면 below, which names a condition needed to achieve a goal rather than the plan itself.",
    },
    examples: [
      { korean: "저는 내년에 유학을 가려고 해요.", translations: { en: "I plan to study abroad next year." } },
    ],
  },
  {
    id: "L4-S18-G02",
    pattern: "-(으)려면 (복습)",
    meanings: { en: "if you want to / in order to (review)" },
    explanations: {
      en: "Review: -(으)려면 (TOPIK4 STEP12) names a goal, then the sentence explains the condition required to reach it — different from -(으)려고 하다 above, which simply states a plan without naming a condition.",
    },
    examples: [
      { korean: "서비스를 이용하려면 먼저 신청서를 작성해야 합니다.", translations: { en: "To use the service, you must first fill out an application form." } },
    ],
  },
  {
    id: "L4-S18-G03",
    pattern: "-는 반면에 (복습)",
    meanings: { en: "while, on the other hand (review)" },
    explanations: {
      en: "Review: -는 반면에 (TOPIK3 STEP9) contrasts two features of the same thing — usually an advantage and a disadvantage together. Compare with -는 대신에 below, which is about substitution, not contrast.",
    },
    examples: [
      { korean: "기술은 생활을 편리하게 하는 반면에 새로운 문제를 만들기도 합니다.", translations: { en: "Technology makes life convenient, while also creating new problems." } },
    ],
  },
  {
    id: "L4-S18-G04",
    pattern: "-는 대신에 (복습)",
    meanings: { en: "instead of (review)" },
    explanations: {
      en: "Review: -는 대신에 (TOPIK4 STEP4) means choosing one thing in place of another — different from -는 반면에 above, which contrasts two features without substituting one for the other.",
    },
    examples: [
      { korean: "택시를 타는 대신에 지하철을 이용해요.", translations: { en: "Instead of taking a taxi, I use the subway." } },
    ],
  },
  {
    id: "L4-S18-G05",
    pattern: "-기 때문에 (복습)",
    meanings: { en: "because (review)" },
    explanations: {
      en: "Review: -기 때문에 simply gives a reason, positive or negative. Compare with -는 바람에 below, which is used specifically for an unexpected, usually negative result.",
    },
    examples: [
      { korean: "시간을 아낄 수 있기 때문에 저는 이 방법에 찬성해요.", translations: { en: "Because it saves time, I agree with this method." } },
    ],
  },
  {
    id: "L4-S18-G06",
    pattern: "-는 바람에 (복습)",
    meanings: { en: "because of (an unintended, often negative cause) (review)" },
    explanations: {
      en: "Review: -는 바람에 (TOPIK4 STEP1) is used specifically for an unexpected reason behind a usually negative result — a narrower case of -기 때문에 above, not a plain neutral reason.",
    },
    examples: [
      { korean: "서로 오해가 생기는 바람에 사이가 안 좋아졌어요.", translations: { en: "Because a misunderstanding arose between us, our relationship became bad." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L4-S18-L01",
    audioText: "저는 새 프로젝트에서 동료들과 협업하면서 몇 번 갈등을 겪었어요. 하지만 서로 배려하고 신뢰를 쌓으려고 노력하니까 지금은 팀워크가 훨씬 좋아졌어요.",
    audioUrl: null,
    question: "이 사람의 팀워크는 어떻게 좋아졌습니까?",
    options: ["서로 배려하고 신뢰를 쌓으려고 노력해서", "갈등을 무시해서", "혼자 일해서", "팀을 옮겨서"],
    correctAnswer: 0,
    translations: { en: { question: "How did this person's teamwork improve?", explanation: 'The sentence says "by trying to be considerate and build trust," so the correct answer is 서로 배려하고 신뢰를 쌓으려고 노력해서.' } },
  },
  {
    id: "L4-S18-L02",
    audioText: "이 서비스를 신청하려면 먼저 홈페이지에서 절차를 확인하고 필요한 서류를 준비하셔야 합니다. 서류를 제출한 후에는 담당자가 확인 후 결과를 안내해 드립니다.",
    audioUrl: null,
    question: "이 안내에 따르면 신청자는 서류를 제출한 후에 무엇을 기다립니까?",
    options: ["환불", "결과 안내", "새 신청서", "이용시간 변경"],
    correctAnswer: 1,
    translations: { en: { question: "According to this announcement, what does the applicant wait for after submitting documents?", explanation: "The sentence says the person in charge will inform the result after checking, so the correct answer is 결과 안내." } },
  },
  {
    id: "L4-S18-L03",
    audioText: "기술이 빠르게 발전하면서 생활이 훨씬 편리해졌습니다. 하지만 이런 변화가 환경보호나 자원 절약과 같은 문제와 함께 논의되어야 한다고 생각합니다.",
    audioUrl: null,
    question: "이 사람이 강조하는 것은 무엇입니까?",
    options: ["기술 발전은 필요 없다", "자원은 무한하다", "기술 변화와 환경보호를 함께 논의해야 한다", "환경 문제는 상관없다"],
    correctAnswer: 2,
    translations: { en: { question: "What does this person emphasize?", explanation: "The sentence says technological change should be discussed together with environmental protection, so the correct answer is 기술 변화와 환경보호를 함께 논의해야 한다." } },
  },
  {
    id: "L4-S18-L04",
    audioText: "저는 대중교통을 확대하는 것이 교통체증 문제를 해결하는 좋은 방법이라고 생각합니다. 근거는 많은 도시에서 이미 효과를 보고 있기 때문입니다.",
    audioUrl: null,
    question: "이 사람의 주장에 대한 근거는 무엇입니까?",
    options: ["비용이 저렴해서", "다른 방법이 없어서", "정부가 시켜서", "많은 도시에서 이미 효과를 보고 있어서"],
    correctAnswer: 3,
    translations: { en: { question: "What is the grounds for this person's claim?", explanation: "The sentence says many cities are already seeing the effect, so the correct answer is 많은 도시에서 이미 효과를 보고 있어서." } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L4-S18-R01",
    passage:
      "공공서비스 신청 안내\n신청하려면 홈페이지에서 절차를 먼저 확인하십시오.\n신청 자격을 갖춘 분만 신청서를 제출할 수 있습니다.\n서류 제출 후에는 담당자가 확인하는 데 약 3일이 걸립니다.\n확인이 끝나면 결과를 문자로 안내해 드립니다.\n문의 사항이 있으면 이용시간 내에 연락해 주십시오.",
    question: "이 안내문에 따르면 서류 제출 후 결과는 어떻게 안내됩니까?",
    options: ["문자로 안내한다", "방문해서 확인한다", "전화로만 안내한다", "안내하지 않는다"],
    correctAnswer: 0,
    translations: { en: { question: "According to this notice, how is the result announced after document submission?", explanation: "The passage says the result is announced by text message, so the correct answer is 문자로 안내한다." } },
  },
  {
    id: "L4-S18-R02",
    passage:
      "현대인의 생활습관과 스트레스는 밀접한 관련이 있습니다.\n불규칙한 생활습관은 스트레스를 늘리고, 스트레스는 다시 건강에 나쁜 영향을 줍니다.\n이런 악순환을 끊으려면 작은 습관부터 개선하는 것이 중요합니다.\n예를 들어 규칙적으로 운동하고 충분히 자는 것만으로도 스트레스를 줄이는 데 도움이 됩니다.\n전문가들은 이러한 생활습관 개선이 장기적으로 더 큰 효과가 있다고 말합니다.",
    question: "이 글에서 스트레스를 줄이는 방법으로 제시된 것은 무엇입니까?",
    options: ["일을 더 많이 한다", "규칙적으로 운동하고 충분히 잔다", "생활습관을 무시한다", "아무것도 하지 않는다"],
    correctAnswer: 1,
    translations: { en: { question: "What method to reduce stress is presented in the passage?", explanation: "The passage says exercising regularly and sleeping enough helps, so the correct answer is 규칙적으로 운동하고 충분히 잔다." } },
  },
  {
    id: "L4-S18-R03",
    passage:
      "요즘 시내 교통체증이 큰 문제가 되고 있습니다.\n원인은 주로 차량 증가와 부족한 대중교통 노선 때문입니다.\n이 문제를 해결하기 위해서는 두 가지 방법이 필요합니다.\n첫째, 대중교통 노선을 확대해서 이용객의 편리성을 높여야 합니다.\n둘째, 일부 지역에서는 차량 운행을 제한하는 정책도 검토해야 합니다.\n이런 개선이 이루어지면 교통체증이 점차 줄어들 것으로 기대됩니다.",
    question: "이 글의 구조는 어떻게 됩니까?",
    options: ["결과만 제시", "해결 → 원인 → 문제", "문제 → 원인 → 해결", "원인 없이 해결책만 제시"],
    correctAnswer: 2,
    translations: { en: { question: "What is the structure of this passage?", explanation: "The passage presents the problem, then the cause, then the solution, so the correct answer is 문제 → 원인 → 해결." } },
  },
  {
    id: "L4-S18-R04",
    passage:
      "저는 환경을 보호하기 위해서는 개인의 작은 실천이 중요하다고 생각합니다.\n일회용품 사용을 줄이고 자원을 재사용하는 습관이 그 시작이 될 수 있습니다.\n물론 기업과 정부의 정책도 필요하지만, 개인의 실천 없이는 근본적인 변화가 어렵습니다.\n그래서 저는 작은 습관부터 바꾸는 것이 환경보호의 가장 확실한 방법이라고 확신합니다.",
    question: "이 글쓴이의 의견은 무엇입니까?",
    options: ["환경보호는 정부만 할 수 있다", "실천은 의미가 없다", "환경 문제는 해결할 수 없다", "개인의 작은 실천이 환경보호에 중요하다"],
    correctAnswer: 3,
    translations: { en: { question: "What is the writer's opinion?", explanation: "The passage says individual small practices are important for environmental protection, so the correct answer is 개인의 작은 실천이 환경보호에 중요하다." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L4-S18-WR01",
    type: "sentence-order",
    prompt: {
      en: "Put the fragments in the order problem → cause → solution.\n① 대중교통 노선을 확대해야 합니다\n② 시내 교통체증이 심각한 문제입니다\n③ 원인은 차량 증가와 부족한 대중교통입니다",
    },
    sampleAnswer: { en: "시내 교통체증이 심각한 문제입니다. 원인은 차량 증가와 부족한 대중교통입니다. 대중교통 노선을 확대해야 합니다." },
    explanation: { en: "A problem-solution passage names the problem first, then the cause, then the proposed solution — the same structure reviewed across TOPIK4 STEP6/STEP16." },
  },
  {
    id: "L4-S18-WR02",
    type: "keyword-writing",
    prompt: { en: "Write 3-4 sentences using all of the following words." },
    keywords: ["환경", "필요하다", "실천하다", "줄이다"],
    sampleAnswer: {
      en: "환경을 지키기 위해서는 우리 모두의 노력이 필요하다고 생각해요. 저는 일회용품 사용을 줄이는 것을 실천하고 있어요. 작은 습관이지만 꾸준히 하면 큰 변화를 만들 수 있어요.",
    },
    explanation: { en: "3-4 sentences combining 환경/필요하다 for the topic, 실천하다 for the action, and 줄이다 for the specific practice is enough." },
  },
  {
    id: "L4-S18-WR03",
    type: "short-response",
    prompt: {
      en: "Write about the advantages and disadvantages smartphone use brings to daily life, in 6-7 sentences.\nStructure: 1) topic introduction, 2) your opinion, 3) reason 1, 4) explanation/example, 5) reason 2 or another view, 6) additional explanation, 7) conclusion.",
    },
    keywords: ["기술", "편리함", "영향", "반면에"],
    sampleAnswer: {
      en: "요즘 스마트폰은 우리 생활에서 없어서는 안 될 기술이 되었습니다. 저는 스마트폰이 장점과 단점을 함께 가지고 있다고 생각합니다. 첫 번째 장점은 언제 어디서나 정보를 찾고 사람들과 소통할 수 있다는 점입니다. 예를 들어 급한 일이 생겨도 바로 연락하고 필요한 정보를 검색할 수 있습니다. 하지만 스마트폰은 편리한 반면에 지나친 사용이 집중력에 나쁜 영향을 주기도 합니다. 실제로 많은 사람들이 스마트폰 의존 때문에 어려움을 겪고 있습니다. 그래서 저는 스마트폰을 유용하게 활용하되 사용 시간을 스스로 관리하는 것이 중요하다고 생각합니다.",
    },
    explanation: { en: "7 sentences following topic → opinion → reason 1 → example → reason 2/other view → additional explanation → conclusion is the full structure reviewed across TOPIK4 — still short of a TOPIK5-level long essay." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L4-S18-P01", type: "vocabulary", question: '"협업"의 뜻은 무엇입니까?', options: ["Collaboration", "Conflict", "Responsibility", "Trust"], correctAnswer: 0, explanation: { en: "협업 means collaboration." } },
  { id: "L4-S18-P02", type: "vocabulary", question: '"근거"의 뜻은 무엇입니까?', options: ["Judgment", "Grounds / basis", "Argument", "Opinion"], correctAnswer: 1, explanation: { en: "근거 means grounds/basis." } },
  { id: "L4-S18-P03", type: "vocabulary", question: '"환경보호"의 뜻은 무엇입니까?', options: ["Resource", "Pollution", "Environmental protection", "Recycling"], correctAnswer: 2, explanation: { en: "환경보호 means environmental protection." } },
  { id: "L4-S18-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n공부 방법______ 학습 효과가 달라져요.", options: ["에 따라", "는 대신에", "는 김에", "기 나름으로"], correctAnswer: 0, explanation: { en: "-에 따라 shows the result depends on something: 방법에 따라." } },
  { id: "L4-S18-P05", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n건강을 유지하______ 규칙적인 생활이 중요해요.", options: ["기 위해서는", "는 대신에", "는 김에", "기 나름으로"], correctAnswer: 0, explanation: { en: "-기 위해서는 emphasizes the goal: 유지하기 위해서는." } },
  { id: "L4-S18-P06", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n기술은 편리한 ______ 새로운 문제를 만들기도 해요.", options: ["반면에", "대신에", "김에", "동안"], correctAnswer: 0, explanation: { en: "-는 반면에 contrasts an advantage and disadvantage: 편리한 반면에." } },
  { id: "L4-S18-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n서비스를 이용하려면 먼저 필요한 ______을/를 준비해야 해요.", options: ["절차", "서류", "신청", "제출"], correctAnswer: 1, explanation: { en: "서류 (document) fits preparing to use a service." } },
  { id: "L4-S18-P08", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n문제를 해결하기 위해서는 먼저 ______을/를 정확히 파악해야 해요.", options: ["판단", "결과", "원인", "주장"], correctAnswer: 2, explanation: { en: "원인 (cause) fits identifying the root of a problem first." } },
  { id: "L4-S18-P09", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n저는 공공장소에서 기본적인 ______을/를 지켜야 한다고 생각해요.", options: ["협력", "책임", "규칙", "존중"], correctAnswer: 2, explanation: { en: "규칙 (rule) fits keeping basic conduct in public places." } },
  { id: "L4-S18-P10", type: "listening", audioText: "저는 새 프로젝트에서 동료들과 협업하면서 몇 번 갈등을 겪었어요. 하지만 서로 배려하고 신뢰를 쌓으려고 노력하니까 지금은 팀워크가 훨씬 좋아졌어요.", question: "이 사람의 팀워크는 어떻게 좋아졌습니까?", options: ["혼자 일해서", "갈등을 무시해서", "서로 배려하고 신뢰를 쌓으려고 노력해서", "팀을 옮겨서"], correctAnswer: 2, explanation: { en: "The sentence says by being considerate and building trust, so the answer is 서로 배려하고 신뢰를 쌓으려고 노력해서." } },
  { id: "L4-S18-P11", type: "listening", audioText: "저는 대중교통을 확대하는 것이 교통체증 문제를 해결하는 좋은 방법이라고 생각합니다. 근거는 많은 도시에서 이미 효과를 보고 있기 때문입니다.", question: "이 사람의 주장에 대한 근거는 무엇입니까?", options: ["비용이 저렴해서", "정부가 시켜서", "다른 방법이 없어서", "많은 도시에서 이미 효과를 보고 있어서"], correctAnswer: 3, explanation: { en: "The sentence says many cities already see the effect, so the answer is 많은 도시에서 이미 효과를 보고 있어서." } },
  { id: "L4-S18-P12", type: "reading", passage: "신청 자격을 갖춘 분만 신청서를 제출할 수 있습니다. 서류 제출 후에는 담당자가 확인하는 데 약 3일이 걸립니다. 확인이 끝나면 결과를 문자로 안내해 드립니다.", question: "이 안내문에 따르면 서류 제출 후 결과는 어떻게 안내됩니까?", options: ["안내하지 않는다", "방문해서 확인한다", "전화로만 안내한다", "문자로 안내한다"], correctAnswer: 3, explanation: { en: "The passage says the result is announced by text message, so the answer is 문자로 안내한다." } },
  { id: "L4-S18-P13", type: "reading", passage: "일회용품 사용을 줄이고 자원을 재사용하는 습관이 그 시작이 될 수 있습니다. 개인의 실천 없이는 근본적인 변화가 어렵습니다.", question: "이 글쓴이의 의견은 무엇입니까?", options: ["환경보호는 정부만 할 수 있다", "실천은 의미가 없다", "환경 문제는 해결할 수 없다", "개인의 작은 실천이 환경보호에 중요하다"], correctAnswer: 3, explanation: { en: "The passage says individual small practices matter, so the answer is 개인의 작은 실천이 환경보호에 중요하다." } },
  { id: "L4-S18-P14", type: "reading", passage: "요즘 시내 교통체증이 큰 문제가 되고 있습니다. 원인은 주로 차량 증가와 부족한 대중교통 노선 때문입니다. 대중교통 노선을 확대해야 합니다.", question: "이 글에서 교통체증의 원인으로 언급된 것은 무엇입니까?", options: ["날씨", "차량 증가와 부족한 대중교통", "인구 감소", "낮은 유가"], correctAnswer: 1, explanation: { en: "The passage names increasing vehicles and insufficient public transportation, so the answer is 차량 증가와 부족한 대중교통." } },
  { id: "L4-S18-P15", type: "sentence", question: "다음 중 자연스러운 문장은?", options: ["대화를 자주 하 수록 서로를 더 잘 이해할 수 있습니다.", "대화를 자주 할수록 서로를 더 잘 이해할 수 있습니다.", "대화를 자주 하는 수록 서로를 더 잘 이해할 수 있습니다.", "대화를 자주 했수록 서로를 더 잘 이해할 수 있습니다."], correctAnswer: 1, explanation: { en: "-(으)ㄹ수록 attaches to the verb stem: 할수록." } },
  { id: "L4-S18-P16", type: "sentence", question: "STEP 1~17을 종합할 때 다음 중 TOPIK 4에서 배운 표현이 아닌 것은?", options: ["-는 바람에", "-기 위해서는", "-도록 되어 있다", "-습니까?"], correctAnswer: 3, explanation: { en: "-습니까? is a basic sentence ending from TOPIK 1, not a TOPIK4 grammar point introduced in STEP1-17." } },
];

export const STEP_4_18: StepContent = {
  level: 4,
  step: 18,
  title: "TOPIK 4 종합복습 (TOPIK 4 Review)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
