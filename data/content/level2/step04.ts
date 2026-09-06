// TOPIK 2 STEP 4 — Home and Living (집과 주거생활).
// Real STEP content, independent of TOPIK1 and TOPIK2 STEP1-3's data files.
// 안 (TOPIK1 L1-S6-W12, "inside") already exists as "new" — recarded here
// with status "review", not re-created as new.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L2-S4-W01", korean: "방", partOfSpeech: "noun", translations: { en: "room" }, example: "제 방은 작아요.", exampleTranslations: { en: "My room is small." }, audioUrl: null, status: "new" },
  { id: "L2-S4-W02", korean: "거실", partOfSpeech: "noun", translations: { en: "living room" }, example: "우리는 거실에서 이야기해요.", exampleTranslations: { en: "We talk in the living room." }, audioUrl: null, status: "new" },
  { id: "L2-S4-W03", korean: "부엌", partOfSpeech: "noun", translations: { en: "kitchen" }, example: "부엌은 좁아요.", exampleTranslations: { en: "The kitchen is small." }, audioUrl: null, status: "new" },
  { id: "L2-S4-W04", korean: "침실", partOfSpeech: "noun", translations: { en: "bedroom" }, example: "침실에 침대가 있어요.", exampleTranslations: { en: "There is a bed in the bedroom." }, audioUrl: null, status: "new" },
  { id: "L2-S4-W05", korean: "창문", partOfSpeech: "noun", translations: { en: "window" }, example: "창문을 열어요.", exampleTranslations: { en: "I open the window." }, audioUrl: null, status: "new" },
  { id: "L2-S4-W06", korean: "문", partOfSpeech: "noun", translations: { en: "door" }, example: "문을 닫아요.", exampleTranslations: { en: "I close the door." }, audioUrl: null, status: "new" },
  { id: "L2-S4-W07", korean: "책상", partOfSpeech: "noun", translations: { en: "desk" }, example: "책상 위에 책이 있어요.", exampleTranslations: { en: "There is a book on the desk." }, audioUrl: null, status: "new" },
  { id: "L2-S4-W08", korean: "의자", partOfSpeech: "noun", translations: { en: "chair" }, example: "의자에 앉아요.", exampleTranslations: { en: "I sit on the chair." }, audioUrl: null, status: "new" },
  { id: "L2-S4-W09", korean: "침대", partOfSpeech: "noun", translations: { en: "bed" }, example: "침대에서 자요.", exampleTranslations: { en: "I sleep on the bed." }, audioUrl: null, status: "new" },
  { id: "L2-S4-W10", korean: "냉장고", partOfSpeech: "noun", translations: { en: "refrigerator" }, example: "냉장고에 음식이 있어요.", exampleTranslations: { en: "There is food in the refrigerator." }, audioUrl: null, status: "new" },
  { id: "L2-S4-W11", korean: "정리하다", partOfSpeech: "verb", translations: { en: "to organize" }, example: "저는 방을 정리해요.", exampleTranslations: { en: "I organize my room." }, audioUrl: null, status: "new" },
  { id: "L2-S4-W12", korean: "이사하다", partOfSpeech: "verb", translations: { en: "to move house" }, example: "저는 다음 달에 이사해요.", exampleTranslations: { en: "I am moving next month." }, audioUrl: null, status: "new" },
  { id: "L2-S4-W13", korean: "넓다", partOfSpeech: "adjective", translations: { en: "spacious" }, example: "거실이 넓어요.", exampleTranslations: { en: "The living room is spacious." }, audioUrl: null, status: "new" },
  { id: "L2-S4-W14", korean: "좁다", partOfSpeech: "adjective", translations: { en: "narrow / small" }, example: "제 방은 좁아요.", exampleTranslations: { en: "My room is small." }, audioUrl: null, status: "new" },
  { id: "L2-S4-W15", korean: "깨끗하다", partOfSpeech: "adjective", translations: { en: "clean" }, example: "집이 깨끗해요.", exampleTranslations: { en: "The house is clean." }, audioUrl: null, status: "new" },
  { id: "L2-S4-W16", korean: "더럽다", partOfSpeech: "adjective", translations: { en: "dirty" }, example: "부엌이 더러워요.", exampleTranslations: { en: "The kitchen is dirty." }, audioUrl: null, status: "new" },
  { id: "L2-S4-W17", korean: "안", partOfSpeech: "noun", translations: { en: "inside" }, example: "가방 안에 책이 있어요.", exampleTranslations: { en: "There is a book inside the bag." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L2-S4-S01", korean: "저는 방을 청소하고 책을 읽어요.", translations: { en: "I clean my room and read a book." }, keyExpression: "-고", relatedWords: ["방", "청소하다", "읽다"], audioUrl: null },
  { id: "L2-S4-S02", korean: "거실은 넓고 부엌은 좁아요.", translations: { en: "The living room is spacious and the kitchen is small." }, keyExpression: "-고", relatedWords: ["거실", "넓다", "부엌", "좁다"], audioUrl: null },
  { id: "L2-S4-S03", korean: "저는 침실에서 자고 거실에서 쉬어요.", translations: { en: "I sleep in the bedroom and rest in the living room." }, keyExpression: "-고", relatedWords: ["침실", "자다", "거실", "쉬다"], audioUrl: null },
  { id: "L2-S4-S04", korean: "냉장고 안에 음식이 있어요.", translations: { en: "There is food inside the refrigerator." }, keyExpression: "안에", relatedWords: ["냉장고", "안", "음식"], audioUrl: null },
  { id: "L2-S4-S05", korean: "저는 매일 방을 정리해요.", translations: { en: "I organize my room every day." }, keyExpression: "매일", relatedWords: ["매일", "방", "정리하다"], audioUrl: null },
  { id: "L2-S4-S06", korean: "저는 다음 달에 새 집으로 이사해요.", translations: { en: "I am moving to a new house next month." }, keyExpression: "으로 이사해요", relatedWords: ["집", "이사하다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L2-S4-G01",
    pattern: "-고",
    meanings: { en: "and / and then (connecting actions or states)" },
    explanations: {
      en: "Attach -고 to a verb/adjective stem to connect two actions or states, similar to 'and' in English.",
    },
    examples: [
      { korean: "방을 청소하고 책을 읽어요.", translations: { en: "I clean my room and read a book." } },
      { korean: "거실은 넓고 부엌은 좁아요.", translations: { en: "The living room is spacious and the kitchen is small." } },
      { korean: "침실에서 자고 거실에서 쉬어요.", translations: { en: "I sleep in the bedroom and rest in the living room." } },
    ],
  },
  {
    id: "L2-S4-G02",
    pattern: "안/밖/앞/뒤/옆 (복습)",
    meanings: { en: "location words (review)" },
    explanations: {
      en: "Keep using 안, 밖, 앞, 뒤, and 옆 with 에 to describe where something is.",
    },
    examples: [
      { korean: "냉장고 안에 음식이 있어요.", translations: { en: "There is food inside the refrigerator." } },
      { korean: "집 밖에 있어요.", translations: { en: "It's outside the house." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L2-S4-L01",
    audioText: "제 방은 좁아요.",
    audioUrl: null,
    question: "방이 어때요?",
    options: ["좁아요", "넓어요", "깨끗해요", "더러워요"],
    correctAnswer: 0,
    translations: { en: { question: "How is the room?", explanation: 'The sentence says "my room is small," so the correct answer is 좁아요.' } },
  },
  {
    id: "L2-S4-L02",
    audioText: "저는 방을 청소하고 책을 읽어요.",
    audioUrl: null,
    question: "방을 청소한 후에 무엇을 합니까?",
    options: ["책을 읽어요", "자요", "요리해요", "쉬어요"],
    correctAnswer: 0,
    translations: { en: { question: "What do they do after cleaning the room?", explanation: 'The sentence says "and read a book," so the correct answer is 책을 읽어요.' } },
  },
  {
    id: "L2-S4-L03",
    audioText: "거실은 넓어요. 하지만 부엌은 좁아요.",
    audioUrl: null,
    question: "부엌은 어때요?",
    options: ["넓어요", "깨끗해요", "좁아요", "더러워요"],
    correctAnswer: 2,
    translations: { en: { question: "How is the kitchen?", explanation: 'The sentence says "but the kitchen is small," so the correct answer is 좁아요.' } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L2-S4-R01",
    passage: "제 방은 작아요.\n하지만 깨끗해요.",
    question: "이 사람의 방은 어때요?",
    options: ["크고 더러워요", "넓고 더러워요", "작고 깨끗해요", "작고 더러워요"],
    correctAnswer: 2,
    translations: { en: { question: "How is this person's room?", explanation: 'The passage says "small but clean," so the correct answer is 작고 깨끗해요.' } },
  },
  {
    id: "L2-S4-R02",
    passage: "저는 다음 달에 이사해요.\n새 집은 지금 집보다 넓어요.",
    question: "새 집은 어때요?",
    options: ["더 좁아요", "더러워요", "더 넓어요", "작아요"],
    correctAnswer: 2,
    translations: { en: { question: "How is the new house?", explanation: 'The passage says the new house is more spacious, so the correct answer is 더 넓어요.' } },
  },
  {
    id: "L2-S4-R03",
    passage: "우리 집에는 방이 두 개 있어요.\n거실은 넓고 부엌은 작아요.\n저는 이 집이 좋아요.",
    question: "우리 집에 방이 몇 개 있습니까?",
    options: ["한 개", "세 개", "두 개", "네 개"],
    correctAnswer: 2,
    translations: { en: { question: "How many rooms are in the house?", explanation: 'The passage says there are two rooms, so the correct answer is 두 개.' } },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L2-S4-P01", type: "vocabulary", question: '"거실"의 뜻은 무엇입니까?', options: ["Bathroom", "Kitchen", "Bedroom", "Living room"], correctAnswer: 3, explanation: { en: "거실 means living room." } },
  { id: "L2-S4-P02", type: "vocabulary", question: '"정리하다"의 뜻은 무엇입니까?', options: ["To clean", "To build", "To move", "To organize"], correctAnswer: 3, explanation: { en: "정리하다 means to organize." } },
  { id: "L2-S4-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n방을 청소___ 책을 읽어요.", options: ["아서", "지만", "고", "려고"], correctAnswer: 2, explanation: { en: "-고 connects two actions: 청소하고 읽어요." } },
  { id: "L2-S4-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n냉장고 ______ 음식이 있어요.", options: ["위에", "옆에", "앞에", "안에"], correctAnswer: 3, explanation: { en: "안에 means inside: 냉장고 안에." } },
  { id: "L2-S4-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n제 방은 ______.", options: ["더러워요", "넓어요", "깨끗해요", "좁아요"], correctAnswer: 3, explanation: { en: "좁아요 means small/narrow." } },
  { id: "L2-S4-P06", type: "sentence", question: "집이 깨끗하지 않을 때 쓰는 말은?", options: ["넓어요", "더러워요", "좁아요", "좋아요"], correctAnswer: 1, explanation: { en: "더러워요 means dirty." } },
  { id: "L2-S4-P07", type: "vocabulary", question: "이사할 때 필요한 것은?", options: ["요리", "청소", "이사 준비", "독서"], correctAnswer: 2, explanation: { en: "이사 준비 (moving preparation) is needed when moving." } },
  { id: "L2-S4-P08", type: "listening", audioText: "거실은 넓고 부엌은 좁아요.", question: "부엌은 어때요?", options: ["넓어요", "깨끗해요", "더러워요", "좁아요"], correctAnswer: 3, explanation: { en: 'The sentence says the kitchen is small, so the answer is 좁아요.' } },
  { id: "L2-S4-P09", type: "reading", passage: "제 방에는 침대와 책상이 있어요.", question: "방에 무엇이 있습니까?", options: ["창문만", "냉장고", "의자만", "침대와 책상"], correctAnswer: 3, explanation: { en: 'The passage says there is a bed and a desk, so the answer is 침대와 책상.' } },
  { id: "L2-S4-P10", type: "reading", passage: "부엌이 더러워요. 그래서 청소해요.", question: "왜 청소합니까?", options: ["넓어서", "더러워서", "좁아서", "깨끗해서"], correctAnswer: 1, explanation: { en: 'The passage says the kitchen is dirty, so the answer is 더러워서.' } },
];

export const STEP_2_4: StepContent = {
  level: 2,
  step: 4,
  title: "집과 주거생활 (Home and Living)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  practice: PRACTICE,
};
