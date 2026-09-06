// TOPIK 1 STEP 7 — Shopping and Money (쇼핑과 돈).
// Real STEP 7 curriculum content, independent of STEP 1-6's data files.
// Checked against all STEP 1-6 words for duplicates — none found; every
// word below is genuinely new.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L1-S7-W01", korean: "돈", partOfSpeech: "noun", translations: { en: "money" }, example: "저는 돈이 필요해요.", exampleTranslations: { en: "I need money." }, audioUrl: null, status: "new" },
  { id: "L1-S7-W02", korean: "가격", partOfSpeech: "noun", translations: { en: "price" }, example: "가격이 싸요.", exampleTranslations: { en: "The price is cheap." }, audioUrl: null, status: "new" },
  { id: "L1-S7-W03", korean: "원", partOfSpeech: "noun", translations: { en: "won (currency unit)" }, example: "이거는 오천 원이에요.", exampleTranslations: { en: "This is 5,000 won." }, audioUrl: null, status: "new" },
  { id: "L1-S7-W04", korean: "얼마", partOfSpeech: "noun", translations: { en: "how much" }, example: "이 가방은 얼마예요?", exampleTranslations: { en: "How much is this bag?" }, audioUrl: null, status: "new" },
  { id: "L1-S7-W05", korean: "사다", partOfSpeech: "verb", translations: { en: "to buy" }, example: "저는 옷을 사요.", exampleTranslations: { en: "I buy clothes." }, audioUrl: null, status: "new" },
  { id: "L1-S7-W06", korean: "팔다", partOfSpeech: "verb", translations: { en: "to sell" }, example: "가게에서 신발을 팔아요.", exampleTranslations: { en: "The store sells shoes." }, audioUrl: null, status: "new" },
  { id: "L1-S7-W07", korean: "물건", partOfSpeech: "noun", translations: { en: "item / thing" }, example: "이 물건은 비싸요.", exampleTranslations: { en: "This item is expensive." }, audioUrl: null, status: "new" },
  { id: "L1-S7-W08", korean: "옷", partOfSpeech: "noun", translations: { en: "clothes" }, example: "저는 옷을 사고 싶어요.", exampleTranslations: { en: "I want to buy clothes." }, audioUrl: null, status: "new" },
  { id: "L1-S7-W09", korean: "신발", partOfSpeech: "noun", translations: { en: "shoes" }, example: "신발이 비싸요.", exampleTranslations: { en: "The shoes are expensive." }, audioUrl: null, status: "new" },
  { id: "L1-S7-W10", korean: "가방", partOfSpeech: "noun", translations: { en: "bag" }, example: "이 가방은 얼마예요?", exampleTranslations: { en: "How much is this bag?" }, audioUrl: null, status: "new" },
  { id: "L1-S7-W11", korean: "시장", partOfSpeech: "noun", translations: { en: "market" }, example: "시장에서 과일을 사요.", exampleTranslations: { en: "I buy fruit at the market." }, audioUrl: null, status: "new" },
  { id: "L1-S7-W12", korean: "마트", partOfSpeech: "noun", translations: { en: "mart / supermarket" }, example: "마트에서 물건을 사요.", exampleTranslations: { en: "I buy things at the mart." }, audioUrl: null, status: "new" },
  { id: "L1-S7-W13", korean: "싸다", partOfSpeech: "adjective", translations: { en: "cheap" }, example: "이 옷은 싸요.", exampleTranslations: { en: "These clothes are cheap." }, audioUrl: null, status: "new" },
  { id: "L1-S7-W14", korean: "비싸다", partOfSpeech: "adjective", translations: { en: "expensive" }, example: "이 신발은 비싸요.", exampleTranslations: { en: "These shoes are expensive." }, audioUrl: null, status: "new" },
  { id: "L1-S7-W15", korean: "필요하다", partOfSpeech: "adjective", translations: { en: "to need" }, example: "저는 가방이 필요해요.", exampleTranslations: { en: "I need a bag." }, audioUrl: null, status: "new" },
];

const SENTENCES: Sentence[] = [
  { id: "L1-S7-S01", korean: "저는 옷을 사고 싶어요.", translations: { en: "I want to buy clothes." }, keyExpression: "-고 싶어요", relatedWords: ["옷", "사다"], audioUrl: null },
  { id: "L1-S7-S02", korean: "이 가방은 얼마예요?", translations: { en: "How much is this bag?" }, keyExpression: "얼마예요?", relatedWords: ["가방"], audioUrl: null },
  { id: "L1-S7-S03", korean: "신발이 비싸요.", translations: { en: "The shoes are expensive." }, keyExpression: "비싸요", relatedWords: ["신발", "비싸다"], audioUrl: null },
  { id: "L1-S7-S04", korean: "시장에서 과일을 사요.", translations: { en: "I buy fruit at the market." }, keyExpression: "에서", relatedWords: ["시장", "과일", "사다"], audioUrl: null },
  { id: "L1-S7-S05", korean: "저는 돈이 필요해요.", translations: { en: "I need money." }, keyExpression: "이 필요해요", relatedWords: ["돈", "필요하다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L1-S7-G01",
    pattern: "-고 싶어요",
    meanings: { en: "want to (do something)" },
    explanations: { en: "Attach -고 싶어요 to a verb stem to say you want to do something." },
    examples: [
      { korean: "옷을 사고 싶어요.", translations: { en: "I want to buy clothes." } },
      { korean: "물을 마시고 싶어요.", translations: { en: "I want to drink water." } },
      { korean: "가방을 사고 싶어요.", translations: { en: "I want to buy a bag." } },
    ],
  },
  {
    id: "L1-S7-G02",
    pattern: "얼마예요?",
    meanings: { en: "How much is it?" },
    explanations: { en: "Use 얼마예요? to ask the price of something." },
    examples: [
      { korean: "이거 얼마예요?", translations: { en: "How much is this?" } },
      { korean: "신발이 얼마예요?", translations: { en: "How much are the shoes?" } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L1-S7-L01",
    audioText: "이 신발은 삼만 원이에요.",
    audioUrl: null,
    question: "신발은 얼마예요?",
    options: ["이만 원", "오만 원", "사만 원", "삼만 원"],
    correctAnswer: 3,
    translations: { en: { question: "How much are the shoes?", explanation: 'The sentence says "30,000 won," so the correct answer is 삼만 원.' } },
  },
  {
    id: "L1-S7-L02",
    audioText: "저는 옷을 사고 싶어요.",
    audioUrl: null,
    question: "저는 무엇을 사고 싶습니까?",
    options: ["신발", "가방", "옷", "책"],
    correctAnswer: 2,
    translations: { en: { question: "What do they want to buy?", explanation: 'The sentence says "I want to buy clothes," so the correct answer is 옷.' } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L1-S7-R01",
    passage: "이 가게는 옷이 싸요.\n신발도 싸요.",
    question: "이 가게는 무엇이 쌉니까?",
    options: ["옷과 신발", "가방과 책", "음식과 물", "시간과 돈"],
    correctAnswer: 0,
    translations: { en: { question: "What is cheap at this store?", explanation: 'The passage says clothes and shoes are cheap, so the answer is 옷과 신발.' } },
  },
  {
    id: "L1-S7-R02",
    passage: "저는 시장에 가요.\n시장에서 과일을 사요.",
    question: "저는 시장에서 무엇을 삽니까?",
    options: ["옷", "신발", "과일", "가방"],
    correctAnswer: 2,
    translations: { en: { question: "What do they buy at the market?", explanation: 'The passage says "I buy fruit at the market," so the answer is 과일.' } },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L1-S7-P01", type: "vocabulary", question: '"가격"의 뜻은 무엇입니까?', options: ["Price", "Money", "Store", "Item"], correctAnswer: 0, explanation: { en: "가격 means price." } },
  { id: "L1-S7-P02", type: "vocabulary", question: '"필요하다"의 뜻은 무엇입니까?', options: ["To sell", "To buy", "To want", "To need"], correctAnswer: 3, explanation: { en: "필요하다 means to need." } },
  { id: "L1-S7-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n옷을 사___ 싶어요.", options: ["아", "고", "어", "지"], correctAnswer: 1, explanation: { en: "Attach -고 싶어요 to a verb stem: 사고 싶어요." } },
  { id: "L1-S7-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n이거 ______?", options: ["뭐예요", "어디예요", "얼마예요", "누구예요"], correctAnswer: 2, explanation: { en: "얼마예요? asks the price of something." } },
  { id: "L1-S7-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n신발이 ______.", options: ["비싸요", "싸요", "좋아요", "맛있어요"], correctAnswer: 0, explanation: { en: "비싸요 means expensive." } },
  { id: "L1-S7-P06", type: "sentence", question: "가게에서 물건 값을 물을 때 무엇이라고 말합니까?", options: ["감사합니다", "안녕하세요", "맛있어요", "얼마예요?"], correctAnswer: 3, explanation: { en: "얼마예요? is used to ask the price of an item." } },
  { id: "L1-S7-P07", type: "reading", passage: "이 옷은 싸요.", question: "이 옷은 어때요?", options: ["비싸요", "싸요", "맛있어요", "커요"], correctAnswer: 1, explanation: { en: 'The passage says "These clothes are cheap," so the answer is 싸요.' } },
  { id: "L1-S7-P08", type: "listening", audioText: "저는 가방을 사고 싶어요.", question: "저는 무엇을 사고 싶습니까?", options: ["신발", "옷", "가방", "책"], correctAnswer: 2, explanation: { en: 'The sentence says "I want to buy a bag," so the answer is 가방.' } },
];

export const STEP_1_7: StepContent = {
  level: 1,
  step: 7,
  title: "쇼핑과 돈 (Shopping and Money)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  practice: PRACTICE,
};
