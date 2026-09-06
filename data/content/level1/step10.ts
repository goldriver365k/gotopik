// TOPIK 1 STEP 10 — Body and Basic Health Expressions (몸과 기본 건강 표현).
// Real STEP 10 curriculum content, independent of STEP 1-9's data files.
// 병원 (W15) duplicates STEP 6's word (L1-S6-W06, "hospital") — per this
// stage's duplicate rule it is NOT re-created as new vocabulary; it is
// recarded here with status "review" instead. (눈 here means "eye" — an
// unrelated homonym of STEP 8's 눈 "snow", not a duplicate concept.)
// No medical specialty content — everyday health expressions only.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L1-S10-W01", korean: "몸", partOfSpeech: "noun", translations: { en: "body" }, example: "몸이 안 좋아요.", exampleTranslations: { en: "I don't feel well." }, audioUrl: null, status: "new" },
  { id: "L1-S10-W02", korean: "머리", partOfSpeech: "noun", translations: { en: "head" }, example: "머리가 아파요.", exampleTranslations: { en: "My head hurts." }, audioUrl: null, status: "new" },
  { id: "L1-S10-W03", korean: "얼굴", partOfSpeech: "noun", translations: { en: "face" }, example: "얼굴이 예뻐요.", exampleTranslations: { en: "The face is pretty." }, audioUrl: null, status: "new" },
  { id: "L1-S10-W04", korean: "눈", partOfSpeech: "noun", translations: { en: "eye" }, example: "눈이 아파요.", exampleTranslations: { en: "My eye hurts." }, audioUrl: null, status: "new" },
  { id: "L1-S10-W05", korean: "코", partOfSpeech: "noun", translations: { en: "nose" }, example: "코가 아파요.", exampleTranslations: { en: "My nose hurts." }, audioUrl: null, status: "new" },
  { id: "L1-S10-W06", korean: "입", partOfSpeech: "noun", translations: { en: "mouth" }, example: "입이 커요.", exampleTranslations: { en: "The mouth is big." }, audioUrl: null, status: "new" },
  { id: "L1-S10-W07", korean: "손", partOfSpeech: "noun", translations: { en: "hand" }, example: "손을 씻어요.", exampleTranslations: { en: "I wash my hands." }, audioUrl: null, status: "new" },
  { id: "L1-S10-W08", korean: "발", partOfSpeech: "noun", translations: { en: "foot" }, example: "발이 아파요.", exampleTranslations: { en: "My foot hurts." }, audioUrl: null, status: "new" },
  { id: "L1-S10-W09", korean: "배", partOfSpeech: "noun", translations: { en: "stomach" }, example: "배가 아파요.", exampleTranslations: { en: "My stomach hurts." }, audioUrl: null, status: "new" },
  { id: "L1-S10-W10", korean: "아프다", partOfSpeech: "adjective", translations: { en: "sick / to hurt" }, example: "머리가 아파요.", exampleTranslations: { en: "My head hurts." }, audioUrl: null, status: "new" },
  { id: "L1-S10-W11", korean: "괜찮다", partOfSpeech: "adjective", translations: { en: "okay / fine" }, example: "저는 괜찮아요.", exampleTranslations: { en: "I am okay." }, audioUrl: null, status: "new" },
  { id: "L1-S10-W12", korean: "쉬다", partOfSpeech: "verb", translations: { en: "to rest" }, example: "오늘 집에서 쉬어요.", exampleTranslations: { en: "I rest at home today." }, audioUrl: null, status: "new" },
  { id: "L1-S10-W13", korean: "약", partOfSpeech: "noun", translations: { en: "medicine" }, example: "약을 먹어요.", exampleTranslations: { en: "I take medicine." }, audioUrl: null, status: "new" },
  { id: "L1-S10-W14", korean: "피곤하다", partOfSpeech: "adjective", translations: { en: "tired" }, example: "저는 피곤해요.", exampleTranslations: { en: "I am tired." }, audioUrl: null, status: "new" },
  { id: "L1-S10-W15", korean: "병원", partOfSpeech: "noun", translations: { en: "hospital" }, example: "저는 배가 아파서 병원에 가요.", exampleTranslations: { en: "My stomach hurts, so I go to the hospital." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L1-S10-S01", korean: "머리가 아파요.", translations: { en: "My head hurts." }, keyExpression: "가 아파요", relatedWords: ["머리", "아프다"], audioUrl: null },
  { id: "L1-S10-S02", korean: "오늘 학교에 안 가요.", translations: { en: "I'm not going to school today." }, keyExpression: "안", relatedWords: ["학교", "가다"], audioUrl: null },
  { id: "L1-S10-S03", korean: "저는 아파요. 오늘 쉬어요.", translations: { en: "I am sick. I rest today." }, keyExpression: "쉬어요", relatedWords: ["아프다", "쉬다"], audioUrl: null },
  { id: "L1-S10-S04", korean: "약을 먹어요.", translations: { en: "I take medicine." }, keyExpression: "을 먹어요", relatedWords: ["약", "먹다"], audioUrl: null },
  { id: "L1-S10-S05", korean: "저는 괜찮아요.", translations: { en: "I am okay." }, keyExpression: "괜찮아요", relatedWords: ["괜찮다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L1-S10-G01",
    pattern: "안",
    meanings: { en: "not (verb/adjective negation)" },
    explanations: { en: "Place 안 right before a verb or adjective to negate it." },
    examples: [
      { korean: "오늘 학교에 안 가요.", translations: { en: "I'm not going to school today." } },
      { korean: "저는 커피를 안 마셔요.", translations: { en: "I don't drink coffee." } },
      { korean: "머리가 안 아파요.", translations: { en: "My head doesn't hurt." } },
    ],
  },
  {
    id: "L1-S10-G02",
    pattern: "어디가 아파요?",
    meanings: { en: "Where does it hurt?" },
    explanations: { en: "Use 어디가 아파요? to ask where someone hurts." },
    examples: [
      { korean: "어디가 아파요?", translations: { en: "Where does it hurt?" } },
      { korean: "배가 아파요.", translations: { en: "My stomach hurts." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L1-S10-L01",
    audioText: "머리가 아파요. 그래서 약을 먹어요.",
    audioUrl: null,
    question: "무엇이 아픕니까?",
    options: ["배", "머리", "손", "발"],
    correctAnswer: 1,
    translations: { en: { question: "What hurts?", explanation: 'The sentence says "my head hurts," so the correct answer is 머리.' } },
  },
  {
    id: "L1-S10-L02",
    audioText: "오늘 피곤해요. 그래서 집에서 쉬어요.",
    audioUrl: null,
    question: "오늘 무엇을 합니까?",
    options: ["집에서 쉬어요", "회사에 가요", "학교에 가요", "친구를 만나요"],
    correctAnswer: 0,
    translations: { en: { question: "What do they do today?", explanation: 'The sentence says "I rest at home," so the answer is 집에서 쉬어요.' } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L1-S10-R01",
    passage: "저는 오늘 아파요.\n머리가 아프고 피곤해요.",
    question: "저는 오늘 어떻습니까?",
    options: ["괜찮아요", "좋아요", "아파요", "바빠요"],
    correctAnswer: 2,
    translations: { en: { question: "How is this person today?", explanation: 'The passage says "I am sick today," so the answer is 아파요.' } },
  },
  {
    id: "L1-S10-R02",
    passage: "저는 배가 아파요.\n그래서 병원에 가요.",
    question: "저는 왜 병원에 갑니까?",
    options: ["피곤해서", "배가 아파서", "학교에 가려고", "친구를 만나려고"],
    correctAnswer: 1,
    translations: { en: { question: "Why do they go to the hospital?", explanation: 'The passage says their stomach hurts, so the answer is 배가 아파서.' } },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L1-S10-P01", type: "vocabulary", question: '"머리"의 뜻은 무엇입니까?', options: ["Head", "Hand", "Foot", "Stomach"], correctAnswer: 0, explanation: { en: "머리 means head." } },
  { id: "L1-S10-P02", type: "vocabulary", question: '"피곤하다"의 뜻은 무엇입니까?', options: ["Sick", "Okay", "Rest", "Tired"], correctAnswer: 3, explanation: { en: "피곤하다 means tired." } },
  { id: "L1-S10-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n오늘 학교에 ___ 가요.", options: ["도", "안", "를", "가"], correctAnswer: 1, explanation: { en: "안 negates a verb: 학교에 안 가요." } },
  { id: "L1-S10-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n______ 아파요?", options: ["누가", "언제", "어디가", "무엇이"], correctAnswer: 2, explanation: { en: "어디가 아파요? asks where it hurts." } },
  { id: "L1-S10-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n배가 ______.", options: ["아파요", "좋아요", "맛있어요", "비싸요"], correctAnswer: 0, explanation: { en: "배가 아파요 means my stomach hurts." } },
  { id: "L1-S10-P06", type: "sentence", question: "몸이 아플 때 무엇을 합니까?", options: ["일해요", "공부해요", "만나요", "쉬어요"], correctAnswer: 3, explanation: { en: "When you are sick, you 쉬어요 (rest)." } },
  { id: "L1-S10-P07", type: "reading", passage: "저는 배가 아파요.", question: "저는 어디가 아픕니까?", options: ["머리", "배", "손", "발"], correctAnswer: 1, explanation: { en: 'The passage says "my stomach hurts," so the answer is 배.' } },
  { id: "L1-S10-P08", type: "listening", audioText: "저는 피곤해요. 그래서 쉬어요.", question: "저는 왜 쉽니까?", options: ["아파서", "바빠서", "피곤해서", "좋아서"], correctAnswer: 2, explanation: { en: 'The sentence says "I am tired," so the answer is 피곤해서.' } },
];

export const STEP_1_10: StepContent = {
  level: 1,
  step: 10,
  title: "몸과 기본 건강 표현 (Body and Basic Health Expressions)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  practice: PRACTICE,
};
