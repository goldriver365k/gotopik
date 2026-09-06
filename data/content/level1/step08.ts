// TOPIK 1 STEP 8 — Weather and Seasons (날씨와 계절).
// Real STEP 8 curriculum content, independent of STEP 1-7's data files.
// Checked against all STEP 1-7 words for duplicates — none found; every
// word below is genuinely new. (눈 here means "snow" — STEP 10 later adds
// 눈 meaning "eye" as an unrelated homonym, not a duplicate concept.)
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L1-S8-W01", korean: "날씨", partOfSpeech: "noun", translations: { en: "weather" }, example: "오늘은 날씨가 좋아요.", exampleTranslations: { en: "The weather is nice today." }, audioUrl: null, status: "new" },
  { id: "L1-S8-W02", korean: "봄", partOfSpeech: "noun", translations: { en: "spring" }, example: "봄은 따뜻해요.", exampleTranslations: { en: "Spring is warm." }, audioUrl: null, status: "new" },
  { id: "L1-S8-W03", korean: "여름", partOfSpeech: "noun", translations: { en: "summer" }, example: "여름은 더워요.", exampleTranslations: { en: "Summer is hot." }, audioUrl: null, status: "new" },
  { id: "L1-S8-W04", korean: "가을", partOfSpeech: "noun", translations: { en: "autumn / fall" }, example: "가을도 따뜻해요.", exampleTranslations: { en: "Autumn is warm too." }, audioUrl: null, status: "new" },
  { id: "L1-S8-W05", korean: "겨울", partOfSpeech: "noun", translations: { en: "winter" }, example: "겨울은 추워요.", exampleTranslations: { en: "Winter is cold." }, audioUrl: null, status: "new" },
  { id: "L1-S8-W06", korean: "비", partOfSpeech: "noun", translations: { en: "rain" }, example: "오늘 비가 와요.", exampleTranslations: { en: "It's raining today." }, audioUrl: null, status: "new" },
  { id: "L1-S8-W07", korean: "눈", partOfSpeech: "noun", translations: { en: "snow" }, example: "겨울에 눈이 와요.", exampleTranslations: { en: "It snows in winter." }, audioUrl: null, status: "new" },
  { id: "L1-S8-W08", korean: "바람", partOfSpeech: "noun", translations: { en: "wind" }, example: "오늘 바람이 많이 불어요.", exampleTranslations: { en: "It's very windy today." }, audioUrl: null, status: "new" },
  { id: "L1-S8-W09", korean: "덥다", partOfSpeech: "adjective", translations: { en: "hot" }, example: "여름은 더워요.", exampleTranslations: { en: "Summer is hot." }, audioUrl: null, status: "new" },
  { id: "L1-S8-W10", korean: "춥다", partOfSpeech: "adjective", translations: { en: "cold" }, example: "겨울은 추워요.", exampleTranslations: { en: "Winter is cold." }, audioUrl: null, status: "new" },
  { id: "L1-S8-W11", korean: "따뜻하다", partOfSpeech: "adjective", translations: { en: "warm" }, example: "봄은 따뜻해요.", exampleTranslations: { en: "Spring is warm." }, audioUrl: null, status: "new" },
  { id: "L1-S8-W12", korean: "시원하다", partOfSpeech: "adjective", translations: { en: "cool" }, example: "가을은 시원해요.", exampleTranslations: { en: "Autumn is cool." }, audioUrl: null, status: "new" },
  { id: "L1-S8-W13", korean: "맑다", partOfSpeech: "adjective", translations: { en: "clear (weather)" }, example: "오늘은 하늘이 맑아요.", exampleTranslations: { en: "The sky is clear today." }, audioUrl: null, status: "new" },
  { id: "L1-S8-W14", korean: "흐리다", partOfSpeech: "adjective", translations: { en: "cloudy" }, example: "오늘은 날씨가 흐려요.", exampleTranslations: { en: "It's cloudy today." }, audioUrl: null, status: "new" },
  { id: "L1-S8-W15", korean: "좋다", partOfSpeech: "adjective", translations: { en: "good" }, example: "오늘은 날씨가 좋아요.", exampleTranslations: { en: "The weather is nice today." }, audioUrl: null, status: "new" },
];

const SENTENCES: Sentence[] = [
  { id: "L1-S8-S01", korean: "오늘은 날씨가 좋아요.", translations: { en: "The weather is nice today." }, keyExpression: "좋아요", relatedWords: ["날씨", "좋다"], audioUrl: null },
  { id: "L1-S8-S02", korean: "겨울은 추워요.", translations: { en: "Winter is cold." }, keyExpression: "추워요", relatedWords: ["겨울", "춥다"], audioUrl: null },
  { id: "L1-S8-S03", korean: "여름에는 비가 많이 와요.", translations: { en: "It rains a lot in summer." }, keyExpression: "에는", relatedWords: ["여름", "비", "오다"], audioUrl: null },
  { id: "L1-S8-S04", korean: "봄은 따뜻해요.", translations: { en: "Spring is warm." }, keyExpression: "따뜻해요", relatedWords: ["봄", "따뜻하다"], audioUrl: null },
  { id: "L1-S8-S05", korean: "오늘도 추워요.", translations: { en: "It's cold today too." }, keyExpression: "도", relatedWords: ["오늘", "춥다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L1-S8-G01",
    pattern: "-아요/어요 (형용사)",
    meanings: { en: "polite present tense — adjectives" },
    explanations: { en: "Attach -아요/어요 to an adjective stem, just like with verbs, to make the polite present tense." },
    examples: [
      { korean: "오늘은 날씨가 좋아요.", translations: { en: "The weather is nice today." } },
      { korean: "겨울은 추워요.", translations: { en: "Winter is cold." } },
      { korean: "봄은 따뜻해요.", translations: { en: "Spring is warm." } },
    ],
  },
  {
    id: "L1-S8-G02",
    pattern: "도",
    meanings: { en: "also / too" },
    explanations: { en: "Use 도 in place of 이/가 or 을/를 to say 'also' or 'too'." },
    examples: [
      { korean: "오늘도 추워요.", translations: { en: "It's cold today too." } },
      { korean: "저도 좋아요.", translations: { en: "I like it too." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L1-S8-L01",
    audioText: "오늘은 날씨가 좋아요.",
    audioUrl: null,
    question: "오늘 날씨가 어때요?",
    options: ["좋아요", "추워요", "더워요", "비가 와요"],
    correctAnswer: 0,
    translations: { en: { question: "How is the weather today?", explanation: 'The sentence says "The weather is nice today," so the answer is 좋아요.' } },
  },
  {
    id: "L1-S8-L02",
    audioText: "겨울은 추워요. 여름은 더워요.",
    audioUrl: null,
    question: "여름은 어때요?",
    options: ["추워요", "시원해요", "더워요", "좋아요"],
    correctAnswer: 2,
    translations: { en: { question: "How is summer?", explanation: 'The sentence says "Summer is hot," so the answer is 더워요.' } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L1-S8-R01",
    passage: "오늘은 날씨가 맑아요.\n하지만 내일은 비가 와요.",
    question: "내일 날씨는 어때요?",
    options: ["맑아요", "바람이 불어요", "눈이 와요", "비가 와요"],
    correctAnswer: 3,
    translations: { en: { question: "How is tomorrow's weather?", explanation: 'The passage says "tomorrow it rains," so the answer is 비가 와요.' } },
  },
  {
    id: "L1-S8-R02",
    passage: "저는 여름을 좋아해요.\n여름은 덥지만 재미있어요.",
    question: "이 사람은 어떤 계절을 좋아합니까?",
    options: ["봄", "겨울", "가을", "여름"],
    correctAnswer: 3,
    translations: { en: { question: "Which season does this person like?", explanation: 'The passage says "I like summer," so the answer is 여름.' } },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L1-S8-P01", type: "vocabulary", question: '"덥다"의 뜻은 무엇입니까?', options: ["Hot", "Cold", "Warm", "Cool"], correctAnswer: 0, explanation: { en: "덥다 means hot." } },
  { id: "L1-S8-P02", type: "vocabulary", question: '"흐리다"의 뜻은 무엇입니까?', options: ["Sunny", "Rainy", "Snowy", "Cloudy"], correctAnswer: 3, explanation: { en: "흐리다 means cloudy." } },
  { id: "L1-S8-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n날씨가 ______.", options: ["좋다", "좋아요", "좋고", "좋지"], correctAnswer: 1, explanation: { en: "The polite present tense of 좋다 is 좋아요." } },
  { id: "L1-S8-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n오늘___ 추워요.", options: ["가", "를", "도", "에"], correctAnswer: 2, explanation: { en: "도 means 'also/too': 오늘도 추워요." } },
  { id: "L1-S8-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n겨울은 ______.", options: ["추워요", "더워요", "따뜻해요", "시원해요"], correctAnswer: 0, explanation: { en: "겨울은 추워요 means winter is cold." } },
  { id: "L1-S8-P06", type: "sentence", question: "여름 날씨는 보통 어때요?", options: ["추워요", "시원해요", "맑아요", "더워요"], correctAnswer: 3, explanation: { en: "Summer weather is usually 더워요 (hot)." } },
  { id: "L1-S8-P07", type: "reading", passage: "오늘은 비가 와요.", question: "오늘 날씨는 어때요?", options: ["맑아요", "비가 와요", "눈이 와요", "좋아요"], correctAnswer: 1, explanation: { en: 'The passage says "it rains today," so the answer is 비가 와요.' } },
  { id: "L1-S8-P08", type: "listening", audioText: "봄은 따뜻해요. 가을도 따뜻해요.", question: "가을은 어때요?", options: ["추워요", "더워요", "따뜻해요", "비가 와요"], correctAnswer: 2, explanation: { en: 'The sentence says "autumn is warm too," so the answer is 따뜻해요.' } },
];

export const STEP_1_8: StepContent = {
  level: 1,
  step: 8,
  title: "날씨와 계절 (Weather and Seasons)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  practice: PRACTICE,
};
