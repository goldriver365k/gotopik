// TOPIK 2 STEP 7 — Shopping, Exchange & Refund (쇼핑과 교환/환불).
// Real STEP content, independent of TOPIK1 and TOPIK2 STEP1-6's data files.
// Checked against all existing words — every word below is genuinely new.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L2-S7-W01", korean: "크기", partOfSpeech: "noun", translations: { en: "size" }, example: "이 옷 크기가 어때요?", exampleTranslations: { en: "How is the size of these clothes?" }, audioUrl: null, status: "new" },
  { id: "L2-S7-W02", korean: "색", partOfSpeech: "noun", translations: { en: "color" }, example: "무슨 색을 좋아해요?", exampleTranslations: { en: "What color do you like?" }, audioUrl: null, status: "new" },
  { id: "L2-S7-W03", korean: "빨간색", partOfSpeech: "noun", translations: { en: "red" }, example: "저는 빨간색을 좋아해요.", exampleTranslations: { en: "I like red." }, audioUrl: null, status: "new" },
  { id: "L2-S7-W04", korean: "파란색", partOfSpeech: "noun", translations: { en: "blue" }, example: "이 가방은 파란색이에요.", exampleTranslations: { en: "This bag is blue." }, audioUrl: null, status: "new" },
  { id: "L2-S7-W05", korean: "검은색", partOfSpeech: "noun", translations: { en: "black" }, example: "검은색 신발을 샀어요.", exampleTranslations: { en: "I bought black shoes." }, audioUrl: null, status: "new" },
  { id: "L2-S7-W06", korean: "흰색", partOfSpeech: "noun", translations: { en: "white" }, example: "흰색 옷이 예뻐요.", exampleTranslations: { en: "White clothes are pretty." }, audioUrl: null, status: "new" },
  { id: "L2-S7-W07", korean: "맞다", partOfSpeech: "verb", translations: { en: "to be correct / to fit" }, example: "이 옷이 저한테 맞아요.", exampleTranslations: { en: "These clothes fit me." }, audioUrl: null, status: "new" },
  { id: "L2-S7-W08", korean: "작다", partOfSpeech: "adjective", translations: { en: "small" }, example: "이 신발은 작아요.", exampleTranslations: { en: "These shoes are small." }, audioUrl: null, status: "new" },
  { id: "L2-S7-W09", korean: "크다", partOfSpeech: "adjective", translations: { en: "big" }, example: "이 옷은 커요.", exampleTranslations: { en: "These clothes are big." }, audioUrl: null, status: "new" },
  { id: "L2-S7-W10", korean: "할인", partOfSpeech: "noun", translations: { en: "discount" }, example: "이 가게는 할인을 해요.", exampleTranslations: { en: "This store gives discounts." }, audioUrl: null, status: "new" },
  { id: "L2-S7-W11", korean: "영수증", partOfSpeech: "noun", translations: { en: "receipt" }, example: "영수증을 주세요.", exampleTranslations: { en: "Please give me the receipt." }, audioUrl: null, status: "new" },
  { id: "L2-S7-W12", korean: "교환하다", partOfSpeech: "verb", translations: { en: "to exchange" }, example: "옷을 교환하고 싶어요.", exampleTranslations: { en: "I want to exchange the clothes." }, audioUrl: null, status: "new" },
  { id: "L2-S7-W13", korean: "환불하다", partOfSpeech: "verb", translations: { en: "to refund" }, example: "신발을 환불했어요.", exampleTranslations: { en: "I got a refund for the shoes." }, audioUrl: null, status: "new" },
  { id: "L2-S7-W14", korean: "고르다", partOfSpeech: "verb", translations: { en: "to choose" }, example: "저는 파란색을 골랐어요.", exampleTranslations: { en: "I chose blue." }, audioUrl: null, status: "new" },
  { id: "L2-S7-W15", korean: "입어보다", partOfSpeech: "verb", translations: { en: "to try on" }, example: "이 옷을 입어 보세요.", exampleTranslations: { en: "Please try on these clothes." }, audioUrl: null, status: "new" },
  { id: "L2-S7-W16", korean: "다른", partOfSpeech: "noun", translations: { en: "different" }, example: "다른 색이 있어요?", exampleTranslations: { en: "Do you have a different color?" }, audioUrl: null, status: "new" },
  { id: "L2-S7-W17", korean: "같은", partOfSpeech: "noun", translations: { en: "same" }, example: "같은 크기로 주세요.", exampleTranslations: { en: "Please give me the same size." }, audioUrl: null, status: "new" },
];

const SENTENCES: Sentence[] = [
  { id: "L2-S7-S01", korean: "이 가방이 저 가방보다 싸요.", translations: { en: "This bag is cheaper than that bag." }, keyExpression: "-보다", relatedWords: ["가방", "싸다"], audioUrl: null },
  { id: "L2-S7-S02", korean: "이 옷을 입어 보세요.", translations: { en: "Please try on these clothes." }, keyExpression: "-아/어 보다", relatedWords: ["입어보다"], audioUrl: null },
  { id: "L2-S7-S03", korean: "이 신발은 저 신발보다 커요.", translations: { en: "These shoes are bigger than those shoes." }, keyExpression: "-보다", relatedWords: ["신발", "크다"], audioUrl: null },
  { id: "L2-S7-S04", korean: "저는 빨간색보다 파란색을 좋아해요.", translations: { en: "I like blue more than red." }, keyExpression: "-보다", relatedWords: ["빨간색", "파란색", "좋아하다"], audioUrl: null },
  { id: "L2-S7-S05", korean: "옷이 작아서 교환하고 싶어요.", translations: { en: "The clothes are small, so I want to exchange them." }, keyExpression: "-아서/어서", relatedWords: ["작다", "교환하다"], audioUrl: null },
  { id: "L2-S7-S06", korean: "저는 영수증으로 환불했어요.", translations: { en: "I got a refund with the receipt." }, keyExpression: "으로 환불했어요", relatedWords: ["영수증", "환불하다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L2-S7-G01",
    pattern: "-보다",
    meanings: { en: "more than (comparison)" },
    explanations: {
      en: "Attach -보다 after a noun to compare it with something else, meaning 'more than'.",
    },
    examples: [
      { korean: "이 가방이 저 가방보다 싸요.", translations: { en: "This bag is cheaper than that bag." } },
      { korean: "이 신발은 저 신발보다 커요.", translations: { en: "These shoes are bigger than those shoes." } },
      { korean: "저는 빨간색보다 파란색을 좋아해요.", translations: { en: "I like blue more than red." } },
    ],
  },
  {
    id: "L2-S7-G02",
    pattern: "-아/어 보다",
    meanings: { en: "to try doing something" },
    explanations: {
      en: "Attach -아/어 보다 to a verb stem to say you try doing something.",
    },
    examples: [
      { korean: "이 옷을 입어 보세요.", translations: { en: "Please try on these clothes." } },
      { korean: "한번 먹어 보세요.", translations: { en: "Please try eating it once." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L2-S7-L01",
    audioText: "이 가방이 저 가방보다 싸요.",
    audioUrl: null,
    question: "어느 가방이 더 쌉니까?",
    options: ["이 가방", "저 가방", "둘 다 같아요", "몰라요"],
    correctAnswer: 0,
    translations: { en: { question: "Which bag is cheaper?", explanation: 'The sentence says "this bag is cheaper," so the correct answer is 이 가방.' } },
  },
  {
    id: "L2-S7-L02",
    audioText: "신발이 작아서 교환하고 싶어요.",
    audioUrl: null,
    question: "왜 교환하고 싶습니까?",
    options: ["비싸서", "커서", "작아서", "더러워서"],
    correctAnswer: 2,
    translations: { en: { question: "Why do they want to exchange?", explanation: 'The sentence says "because they are small," so the correct answer is 작아서.' } },
  },
  {
    id: "L2-S7-L03",
    audioText: "이 옷은 빨간색과 파란색이 있어요. 저는 파란색을 골랐어요.",
    audioUrl: null,
    question: "이 사람은 무슨 색을 골랐습니까?",
    options: ["빨간색", "흰색", "검은색", "파란색"],
    correctAnswer: 3,
    translations: { en: { question: "What color did they choose?", explanation: 'The sentence says "I chose blue," so the correct answer is 파란색.' } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L2-S7-R01",
    passage: "이 신발은 작아요.\n그래서 큰 사이즈로 교환했어요.",
    question: "왜 교환했습니까?",
    options: ["비싸서", "예뻐서", "더러워서", "작아서"],
    correctAnswer: 3,
    translations: { en: { question: "Why did they exchange?", explanation: 'The passage says the shoes were small, so the correct answer is 작아서.' } },
  },
  {
    id: "L2-S7-R02",
    passage: "이 옷은 할인 중이에요.\n원래 가격보다 싸요.",
    question: "이 옷은 지금 어떻습니까?",
    options: ["더 비싸요", "교환했어요", "환불했어요", "할인해서 싸요"],
    correctAnswer: 3,
    translations: { en: { question: "How are the clothes right now?", explanation: 'The passage says they are discounted and cheap, so the correct answer is 할인해서 싸요.' } },
  },
  {
    id: "L2-S7-R03",
    passage: "저는 옷을 샀어요.\n입어 보니까 작았어요.\n그래서 영수증을 가지고 가서 교환했어요.",
    question: "이 사람은 무엇을 했습니까?",
    options: ["환불했어요", "다시 샀어요", "할인받았어요", "교환했어요"],
    correctAnswer: 3,
    translations: { en: { question: "What did this person do?", explanation: 'The passage says they exchanged the clothes, so the correct answer is 교환했어요.' } },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L2-S7-P01", type: "vocabulary", question: '"할인"의 뜻은 무엇입니까?', options: ["Refund", "Receipt", "Exchange", "Discount"], correctAnswer: 3, explanation: { en: "할인 means discount." } },
  { id: "L2-S7-P02", type: "vocabulary", question: '"고르다"의 뜻은 무엇입니까?', options: ["To fit", "To choose", "To exchange", "To refund"], correctAnswer: 1, explanation: { en: "고르다 means to choose." } },
  { id: "L2-S7-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n이 가방이 저 가방___ 싸요.", options: ["에서", "와", "보다", "도"], correctAnswer: 2, explanation: { en: "-보다 makes a comparison: 가방보다 싸요." } },
  { id: "L2-S7-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n이 옷을 ______ 보세요.", options: ["입고", "입지만", "입으려고", "입어"], correctAnswer: 3, explanation: { en: "-아/어 보다 means to try: 입어 보세요." } },
  { id: "L2-S7-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n이 신발은 ______.", options: ["같아요", "커요", "맞아요", "작아요"], correctAnswer: 3, explanation: { en: "작아요 means small." } },
  { id: "L2-S7-P06", type: "sentence", question: "옷이 안 맞아서 다른 사이즈로 바꾸고 싶을 때 하는 말은?", options: ["감사합니다", "교환하고 싶어요", "맛있어요", "안녕하세요"], correctAnswer: 1, explanation: { en: "교환하고 싶어요 means 'I want to exchange it'." } },
  { id: "L2-S7-P07", type: "vocabulary", question: "영수증이 있고 물건을 사용하지 않았을 때 요청할 수 있는 것은?", options: ["할인", "교환", "환불", "고르기"], correctAnswer: 2, explanation: { en: "환불 (refund) can be requested with a receipt for unused items." } },
  { id: "L2-S7-P08", type: "listening", audioText: "신발이 작아서 교환하고 싶어요.", question: "왜 교환하고 싶습니까?", options: ["비싸서", "커서", "더러워서", "작아서"], correctAnswer: 3, explanation: { en: 'The sentence says "because they are small," so the answer is 작아서.' } },
  { id: "L2-S7-P09", type: "reading", passage: "이 옷은 할인 중이에요.", question: "이 옷은 지금 어떻습니까?", options: ["싸요", "비싸요", "환불했어요", "교환했어요"], correctAnswer: 0, explanation: { en: 'The passage says it is on sale, so the answer is 싸요.' } },
  { id: "L2-S7-P10", type: "reading", passage: "저는 파란색을 골랐어요.", question: "저는 무슨 색을 골랐습니까?", options: ["빨간색", "파란색", "검은색", "흰색"], correctAnswer: 1, explanation: { en: 'The passage says "I chose blue," so the answer is 파란색.' } },
];

export const STEP_2_7: StepContent = {
  level: 2,
  step: 7,
  title: "쇼핑과 교환/환불 (Shopping, Exchange & Refund)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  practice: PRACTICE,
};
