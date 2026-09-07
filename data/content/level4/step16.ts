// TOPIK 4 STEP 16 — Problems and Solutions (문제와 해결).
// Independent of TOPIK1/TOPIK2/TOPIK3/TOPIK4 STEP1-15's data files.
// 원인, 결과, 해결책, 개선, 효과, 노력하다, 증가, 감소, 영향,
// 필요성 already exist as "new" elsewhere (TOPIK3/TOPIK4) — recorded
// here with status "review", heavily reused as this synthesis STEP
// intends. Uses a close-to-life problem (smartphone overuse) rather
// than a large abstract social issue, per this stage's brief.
// -기 위해서는 reuses the TOPIK4 STEP10 review-extension of TOPIK3
// STEP2's -기 위해서 rather than re-teaching it as new.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L4-S16-W01", korean: "문제점", partOfSpeech: "noun", translations: { en: "problem point / issue" }, example: "이 방법의 문제점을 찾았어요.", exampleTranslations: { en: "I found the problem with this method." }, audioUrl: null, status: "new" },
  { id: "L4-S16-W02", korean: "대책", partOfSpeech: "noun", translations: { en: "countermeasure" }, example: "빠른 대책이 필요해요.", exampleTranslations: { en: "A quick countermeasure is needed." }, audioUrl: null, status: "new" },
  { id: "L4-S16-W03", korean: "발생", partOfSpeech: "noun", translations: { en: "occurrence" }, example: "문제 발생을 예방해야 해요.", exampleTranslations: { en: "We must prevent the occurrence of problems." }, audioUrl: null, status: "new" },
  { id: "L4-S16-W04", korean: "예방하다", partOfSpeech: "verb", translations: { en: "to prevent" }, example: "미리 문제를 예방해요.", exampleTranslations: { en: "I prevent problems in advance." }, audioUrl: null, status: "new" },
  { id: "L4-S16-W05", korean: "마련하다", partOfSpeech: "verb", translations: { en: "to prepare / set up (a measure)" }, example: "대책을 마련했어요.", exampleTranslations: { en: "I prepared a countermeasure." }, audioUrl: null, status: "new" },
  { id: "L4-S16-W06", korean: "근본적", partOfSpeech: "noun", translations: { en: "fundamental" }, example: "근본적인 해결책이 필요해요.", exampleTranslations: { en: "A fundamental solution is needed." }, audioUrl: null, status: "new" },
  { id: "L4-S16-W07", korean: "대안", partOfSpeech: "noun", translations: { en: "alternative" }, example: "좋은 대안을 생각해 봤어요.", exampleTranslations: { en: "I thought of a good alternative." }, audioUrl: null, status: "new" },
  { id: "L4-S16-W08", korean: "해소하다", partOfSpeech: "verb", translations: { en: "to resolve / relieve" }, example: "스트레스를 해소해요.", exampleTranslations: { en: "I relieve my stress." }, audioUrl: null, status: "new" },
  { id: "L4-S16-W09", korean: "극복하다", partOfSpeech: "verb", translations: { en: "to overcome" }, example: "어려움을 극복했어요.", exampleTranslations: { en: "I overcame the difficulty." }, audioUrl: null, status: "new" },
  { id: "L4-S16-W10", korean: "대응하다", partOfSpeech: "verb", translations: { en: "to respond / cope" }, example: "문제에 침착하게 대응해요.", exampleTranslations: { en: "I respond to problems calmly." }, audioUrl: null, status: "new" },
  { id: "L4-S16-W11", korean: "방안", partOfSpeech: "noun", translations: { en: "plan / measure" }, example: "새로운 방안을 제안했어요.", exampleTranslations: { en: "I proposed a new plan." }, audioUrl: null, status: "new" },
  { id: "L4-S16-W12", korean: "실질적", partOfSpeech: "noun", translations: { en: "practical / substantial" }, example: "실질적인 도움이 됐어요.", exampleTranslations: { en: "It was of practical help." }, audioUrl: null, status: "new" },
  { id: "L4-S16-W13", korean: "반복되다", partOfSpeech: "verb", translations: { en: "to be repeated" }, example: "같은 문제가 반복돼요.", exampleTranslations: { en: "The same problem keeps repeating." }, audioUrl: null, status: "new" },
  { id: "L4-S16-W14", korean: "심각성", partOfSpeech: "noun", translations: { en: "seriousness" }, example: "문제의 심각성을 느꼈어요.", exampleTranslations: { en: "I felt the seriousness of the problem." }, audioUrl: null, status: "new" },
  { id: "L4-S16-W15", korean: "원인", partOfSpeech: "noun", translations: { en: "cause" }, example: "문제의 원인을 찾았어요.", exampleTranslations: { en: "I found the cause of the problem." }, audioUrl: null, status: "review" },
  { id: "L4-S16-W16", korean: "결과", partOfSpeech: "noun", translations: { en: "result" }, example: "좋은 결과가 나왔어요.", exampleTranslations: { en: "A good result came out." }, audioUrl: null, status: "review" },
  { id: "L4-S16-W17", korean: "해결책", partOfSpeech: "noun", translations: { en: "solution (a way to solve)" }, example: "좋은 해결책을 찾았어요.", exampleTranslations: { en: "I found a good solution." }, audioUrl: null, status: "review" },
  { id: "L4-S16-W18", korean: "개선", partOfSpeech: "noun", translations: { en: "improvement" }, example: "생활습관 개선이 필요해요.", exampleTranslations: { en: "Improvement of lifestyle habits is needed." }, audioUrl: null, status: "review" },
  { id: "L4-S16-W19", korean: "효과", partOfSpeech: "noun", translations: { en: "effect" }, example: "이 방법은 효과가 있어요.", exampleTranslations: { en: "This method is effective." }, audioUrl: null, status: "review" },
  { id: "L4-S16-W20", korean: "노력하다", partOfSpeech: "verb", translations: { en: "to make an effort" }, example: "목표를 위해 노력해요.", exampleTranslations: { en: "I make an effort for my goal." }, audioUrl: null, status: "review" },
  { id: "L4-S16-W21", korean: "증가", partOfSpeech: "noun", translations: { en: "increase" }, example: "차량 증가가 문제예요.", exampleTranslations: { en: "The increase in vehicles is a problem." }, audioUrl: null, status: "review" },
  { id: "L4-S16-W22", korean: "감소", partOfSpeech: "noun", translations: { en: "decrease" }, example: "이용객이 감소했어요.", exampleTranslations: { en: "The number of users decreased." }, audioUrl: null, status: "review" },
  { id: "L4-S16-W23", korean: "영향", partOfSpeech: "noun", translations: { en: "influence / effect" }, example: "스트레스가 건강에 영향을 줘요.", exampleTranslations: { en: "Stress affects health." }, audioUrl: null, status: "review" },
  { id: "L4-S16-W24", korean: "필요성", partOfSpeech: "noun", translations: { en: "necessity" }, example: "이 물건의 필요성을 느끼지 못했어요.", exampleTranslations: { en: "I didn't feel the necessity of this item." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L4-S16-S01", korean: "스마트폰 사용 문제를 해결하기 위해서는 사용 시간을 정하는 것이 필요해요.", translations: { en: "To solve the smartphone-use problem, setting a usage time limit is necessary." }, keyExpression: "-기 위해서는", relatedWords: ["문제점"], audioUrl: null },
  { id: "L4-S16-S02", korean: "이 문제를 근본적으로 해결하기 위해서는 원인부터 파악해야 해요.", translations: { en: "To fundamentally solve this problem, you must first identify the cause." }, keyExpression: "-기 위해서는", relatedWords: ["근본적", "원인"], audioUrl: null },
  { id: "L4-S16-S03", korean: "문제가 반복되지 않으려면 실질적인 대책을 마련하는 것이 필요해요.", translations: { en: "To keep the problem from repeating, preparing a practical countermeasure is necessary." }, keyExpression: "-는 것이 필요하다", relatedWords: ["반복되다", "실질적", "대책", "마련하다"], audioUrl: null },
  { id: "L4-S16-S04", korean: "문제의 심각성을 이해하는 것이 필요해요.", translations: { en: "Understanding the seriousness of the problem is necessary." }, keyExpression: "-는 것이 필요하다", relatedWords: ["심각성"], audioUrl: null },
  { id: "L4-S16-S05", korean: "요즘 스마트폰 사용 시간이 계속 증가해서 문제가 발생하고 있어요.", translations: { en: "Smartphone usage time keeps increasing these days, so problems are occurring." }, keyExpression: "발생", relatedWords: ["증가", "발생"], audioUrl: null },
  { id: "L4-S16-S06", korean: "저는 이 문제를 대응하기 위해 몇 가지 대안을 생각해 봤어요.", translations: { en: "I thought of a few alternatives to respond to this problem." }, keyExpression: "대응하다", relatedWords: ["대응하다", "대안"], audioUrl: null },
  { id: "L4-S16-S07", korean: "규칙적인 생활 습관으로 이 문제를 극복하고 스트레스도 해소할 수 있어요.", translations: { en: "You can overcome this problem and relieve stress too with regular life habits." }, keyExpression: "극복하다", relatedWords: ["극복하다", "해소하다"], audioUrl: null },
  { id: "L4-S16-S08", korean: "학교와 가정이 함께 노력하면 좋은 방안을 마련할 수 있을 거예요.", translations: { en: "If school and home make an effort together, a good plan can be prepared." }, keyExpression: "방안", relatedWords: ["노력하다", "방안", "마련하다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L4-S16-G01",
    pattern: "-기 위해서는 (복습)",
    meanings: { en: "in order to (review)" },
    explanations: {
      en: "Keep using -기 위해서는 (TOPIK4 STEP10) to emphasize a goal, then explain what's required to solve a problem and reach it.",
    },
    examples: [
      { korean: "스마트폰 사용 문제를 해결하기 위해서는 사용 시간을 정하는 것이 필요해요.", translations: { en: "To solve the smartphone-use problem, setting a usage time limit is necessary." } },
      { korean: "이 문제를 근본적으로 해결하기 위해서는 원인부터 파악해야 해요.", translations: { en: "To fundamentally solve this problem, you must first identify the cause." } },
    ],
  },
  {
    id: "L4-S16-G02",
    pattern: "-는 것이 필요하다",
    meanings: { en: "doing (something) is necessary" },
    explanations: {
      en: "Attach -는 것이 필요하다 to a verb stem to state that an action is a necessary step, often as part of a solution.",
    },
    examples: [
      { korean: "문제가 반복되지 않으려면 실질적인 대책을 마련하는 것이 필요해요.", translations: { en: "To keep the problem from repeating, preparing a practical countermeasure is necessary." } },
      { korean: "문제의 심각성을 이해하는 것이 필요해요.", translations: { en: "Understanding the seriousness of the problem is necessary." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L4-S16-L01",
    audioText: "스마트폰 사용 문제를 해결하기 위해서는 사용 시간을 정하는 것이 필요해요. 저는 하루에 두 시간만 쓰기로 했어요.",
    audioUrl: null,
    question: "이 사람은 문제를 해결하기 위해 무엇을 정했습니까?",
    options: ["스마트폰을 아예 안 쓰기", "새 스마트폰 사기", "하루에 두 시간만 쓰기", "친구에게 맡기기"],
    correctAnswer: 2,
    translations: { en: { question: "What did this person decide to solve the problem?", explanation: 'The sentence says "decided to use it only two hours a day," so the correct answer is 하루에 두 시간만 쓰기.' } },
  },
  {
    id: "L4-S16-L02",
    audioText: "이 문제가 반복되지 않으려면 실질적인 대책을 마련하는 것이 필요해요. 근본적인 원인부터 살펴봐야 해요.",
    audioUrl: null,
    question: "이 사람이 강조하는 것은 무엇입니까?",
    options: ["원인을 무시하는 것", "다른 사람 탓을 하는 것", "문제를 그냥 두는 것", "근본적인 원인부터 살펴보는 것"],
    correctAnswer: 3,
    translations: { en: { question: "What does this person emphasize?", explanation: "The sentence says look at the fundamental cause first, so the correct answer is 근본적인 원인부터 살펴보는 것." } },
  },
  {
    id: "L4-S16-L03",
    audioText: "저는 스트레스를 해소하고 문제를 극복하기 위해 규칙적으로 운동을 시작했어요. 효과가 정말 좋아요.",
    audioUrl: null,
    question: "이 사람은 무엇을 시작했습니까?",
    options: ["규칙적인 운동", "새로운 직장", "긴 여행", "다른 취미"],
    correctAnswer: 0,
    translations: { en: { question: "What did this person start?", explanation: "The sentence says they started exercising regularly, so the correct answer is 규칙적인 운동." } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L4-S16-R01",
    passage:
      "최근 스마트폰 사용 시간이 계속 증가하면서 여러 문제점이 발생하고 있어요.\n특히 학생들 사이에서 집중력 저하와 수면 부족 문제가 심각해지고 있어요.\n이 문제를 근본적으로 해결하기 위해서는 학교와 가정이 함께 대책을 마련하는 것이 필요해요.\n예를 들어 사용 시간을 제한하는 규칙을 만드는 것도 하나의 방안이 될 수 있어요.",
    question: "이 글에서 스마트폰 사용 문제를 해결하는 방안으로 제시된 것은 무엇입니까?",
    options: ["스마트폰을 더 많이 산다", "학교를 그만둔다", "사용 시간을 제한하는 규칙을 만든다", "아무것도 하지 않는다"],
    correctAnswer: 2,
    translations: { en: { question: "What solution is presented in the passage for the smartphone-use problem?", explanation: "The passage says making a rule to limit usage time, so the correct answer is 사용 시간을 제한하는 규칙을 만든다." } },
  },
  {
    id: "L4-S16-R02",
    passage:
      "문제가 발생했을 때는 먼저 원인을 정확히 파악하는 것이 중요해요.\n원인을 모르고 대책만 마련하면 같은 문제가 반복될 수 있기 때문이에요.\n그다음에는 실질적인 해결책을 찾고 대응 방안을 세워야 해요.\n마지막으로 개선된 결과를 확인하면서 계속 노력하는 자세가 필요해요.",
    question: "이 글에서 문제 해결의 첫 단계는 무엇입니까?",
    options: ["결과 확인", "대책 마련", "노력 포기", "원인 파악"],
    correctAnswer: 3,
    translations: { en: { question: "According to the passage, what is the first step in solving a problem?", explanation: "The passage says identifying the cause first, so the correct answer is 원인 파악." } },
  },
  {
    id: "L4-S16-R03",
    passage:
      "저는 최근 스마트폰을 너무 많이 사용해서 문제의 심각성을 느꼈어요.\n그래서 사용 시간을 정하고 대신 운동으로 스트레스를 해소하기로 했어요.\n처음에는 힘들었지만 규칙적으로 실천하니 조금씩 극복할 수 있었어요.\n이 경험을 통해 문제를 해결하려면 실질적인 노력이 필요하다는 것을 배웠어요.",
    question: "이 사람은 문제를 어떻게 극복했습니까?",
    options: ["사용 시간을 정하고 운동을 했다", "아무것도 하지 않았다", "스마트폰을 버렸다", "다른 사람에게 맡겼다"],
    correctAnswer: 0,
    translations: { en: { question: "How did this person overcome the problem?", explanation: "The passage says they set a usage time and exercised, so the correct answer is 사용 시간을 정하고 운동을 했다." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L4-S16-WR01",
    type: "sentence-order",
    prompt: {
      en: "Put the fragments in the order problem → cause → solution.\n① 사용 시간을 제한하는 규칙이 필요해요\n② 스마트폰 사용 문제가 심각해요\n③ 원인은 사용 시간의 증가예요",
    },
    sampleAnswer: { en: "스마트폰 사용 문제가 심각해요. 원인은 사용 시간의 증가예요. 사용 시간을 제한하는 규칙이 필요해요." },
    explanation: { en: "A problem-solution passage names the problem first, then the cause, then the proposed solution." },
  },
  {
    id: "L4-S16-WR02",
    type: "short-response",
    prompt: {
      en: "Choose one everyday problem and write about 6 sentences on how to solve it.\nStructure: 1) problem, 2) current situation, 3) cause, 4) solution 1, 5) solution 2, 6) expected result.",
    },
    keywords: ["문제점", "원인", "대책", "해결책"],
    sampleAnswer: {
      en: "요즘 스마트폰 사용 문제가 심각해지고 있어요. 특히 학생들이 스마트폰을 너무 많이 사용해서 집중력이 떨어지고 있어요. 이 문제의 원인은 스마트폰 사용 시간이 계속 증가하고 있기 때문이에요. 해결책 1은 하루 사용 시간을 정해 놓는 거예요. 해결책 2는 스마트폰 대신 운동이나 취미 활동을 하는 거예요. 이렇게 실천하면 집중력도 좋아지고 생활도 더 건강해질 거라고 기대해요.",
    },
    explanation: { en: "6 sentences following problem → situation → cause → solution 1 → solution 2 → expected result is enough at this stage." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L4-S16-P01", type: "vocabulary", question: '"대책"의 뜻은 무엇입니까?', options: ["Countermeasure", "Cause", "Result", "Effect"], correctAnswer: 0, explanation: { en: "대책 means countermeasure." } },
  { id: "L4-S16-P02", type: "vocabulary", question: '"극복하다"의 뜻은 무엇입니까?', options: ["To prevent", "To overcome", "To respond", "To repeat"], correctAnswer: 1, explanation: { en: "극복하다 means to overcome." } },
  { id: "L4-S16-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n이 문제를 해결하______ 원인부터 파악해야 해요.", options: ["기 위해서는", "는 대신에", "는 김에", "기 나름으로"], correctAnswer: 0, explanation: { en: "-기 위해서는 emphasizes the goal: 해결하기 위해서는." } },
  { id: "L4-S16-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n실질적인 대책을 마련하는 것이 ______.", options: ["필요해요", "나름이에요", "반면이에요", "김이에요"], correctAnswer: 0, explanation: { en: "-는 것이 필요하다 states a necessary step: 마련하는 것이 필요해요." } },
  { id: "L4-S16-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n스마트폰 사용 시간이 계속 증가해서 문제가 ______.", options: ["예방하고 있어요", "발생하고 있어요", "극복하고 있어요", "해소하고 있어요"], correctAnswer: 1, explanation: { en: "발생하다 (to occur) fits describing a problem arising." } },
  { id: "L4-S16-P06", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n저는 운동으로 스트레스를 ______.", options: ["반복해요", "발생해요", "해소해요", "대응해요"], correctAnswer: 2, explanation: { en: "해소하다 (to relieve) fits relieving stress through exercise." } },
  { id: "L4-S16-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n학교와 가정이 함께 좋은 ______을/를 마련할 수 있어요.", options: ["필요성", "심각성", "방안", "발생"], correctAnswer: 2, explanation: { en: "방안 (plan/measure) fits preparing a solution together." } },
  { id: "L4-S16-P08", type: "listening", audioText: "스마트폰 사용 문제를 해결하기 위해서는 사용 시간을 정하는 것이 필요해요. 저는 하루에 두 시간만 쓰기로 했어요.", question: "이 사람은 문제를 해결하기 위해 무엇을 정했습니까?", options: ["새 스마트폰 사기", "친구에게 맡기기", "스마트폰을 아예 안 쓰기", "하루에 두 시간만 쓰기"], correctAnswer: 3, explanation: { en: "The sentence says decided to use it only two hours a day, so the answer is 하루에 두 시간만 쓰기." } },
  { id: "L4-S16-P09", type: "listening", audioText: "저는 스트레스를 해소하고 문제를 극복하기 위해 규칙적으로 운동을 시작했어요. 효과가 정말 좋아요.", question: "이 사람은 무엇을 시작했습니까?", options: ["새로운 직장", "긴 여행", "다른 취미", "규칙적인 운동"], correctAnswer: 3, explanation: { en: "The sentence says they started exercising regularly, so the answer is 규칙적인 운동." } },
  { id: "L4-S16-P10", type: "reading", passage: "이 문제를 근본적으로 해결하기 위해서는 학교와 가정이 함께 대책을 마련하는 것이 필요해요. 사용 시간을 제한하는 규칙을 만드는 것도 하나의 방안이 될 수 있어요.", question: "이 글에서 스마트폰 사용 문제를 해결하는 방안으로 제시된 것은 무엇입니까?", options: ["스마트폰을 더 많이 산다", "학교를 그만둔다", "아무것도 하지 않는다", "사용 시간을 제한하는 규칙을 만든다"], correctAnswer: 3, explanation: { en: "The passage says making a rule to limit usage time, so the answer is 사용 시간을 제한하는 규칙을 만든다." } },
  { id: "L4-S16-P11", type: "reading", passage: "문제가 발생했을 때는 먼저 원인을 정확히 파악하는 것이 중요해요. 원인을 모르고 대책만 마련하면 같은 문제가 반복될 수 있어요.", question: "이 글에서 문제 해결의 첫 단계는 무엇입니까?", options: ["결과 확인", "대책 마련", "원인 파악", "노력 포기"], correctAnswer: 2, explanation: { en: "The passage says identifying the cause first, so the answer is 원인 파악." } },
  { id: "L4-S16-P12", type: "sentence", question: "다음 중 자연스러운 문장은?", options: ["대책을 마련하는 것이 필요요.", "대책을 마련하는 것이 필요해요.", "대책을 마련한 것 필요해요.", "대책을 마련하기 것이 필요해요."], correctAnswer: 1, explanation: { en: "-는 것이 필요하다 attaches to the verb's noun-modifying form: 마련하는 것이 필요해요." } },
];

export const STEP_4_16: StepContent = {
  level: 4,
  step: 16,
  title: "문제와 해결 (Problems and Solutions)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
