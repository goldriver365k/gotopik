// TOPIK 1 STEP 5 — Day and Time (하루와 시간).
// Real STEP 5 curriculum content, independent of STEP 1-4's data files.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  {
    id: "L1-S5-W01",
    korean: "오늘",
    partOfSpeech: "noun",
    translations: { en: "today" },
    example: "저는 오늘 학교에 가요.",
    exampleTranslations: { en: "I go to school today." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S5-W02",
    korean: "내일",
    partOfSpeech: "noun",
    translations: { en: "tomorrow" },
    example: "내일 시험이 있어요.",
    exampleTranslations: { en: "There is an exam tomorrow." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S5-W03",
    korean: "어제",
    partOfSpeech: "noun",
    translations: { en: "yesterday" },
    example: "어제는 토요일이었어요.",
    exampleTranslations: { en: "Yesterday was Saturday." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S5-W04",
    korean: "아침",
    partOfSpeech: "noun",
    translations: { en: "morning" },
    example: "아침에 일어나요.",
    exampleTranslations: { en: "I wake up in the morning." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S5-W05",
    korean: "점심",
    partOfSpeech: "noun",
    translations: { en: "lunch / noon" },
    example: "점심에 밥을 먹어요.",
    exampleTranslations: { en: "I eat a meal at lunch." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S5-W06",
    korean: "저녁",
    partOfSpeech: "noun",
    translations: { en: "evening / dinner" },
    example: "저녁에 자요.",
    exampleTranslations: { en: "I sleep in the evening." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S5-W07",
    korean: "시간",
    partOfSpeech: "noun",
    translations: { en: "time" },
    example: "시간이 없어요.",
    exampleTranslations: { en: "I don't have time." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S5-W08",
    korean: "시",
    partOfSpeech: "noun",
    translations: { en: "o'clock / hour" },
    example: "지금 아홉 시예요.",
    exampleTranslations: { en: "It's nine o'clock now." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S5-W09",
    korean: "분",
    partOfSpeech: "noun",
    translations: { en: "minute" },
    example: "두 시 십 분이에요.",
    exampleTranslations: { en: "It's 2:10." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S5-W10",
    korean: "일어나다",
    partOfSpeech: "verb",
    translations: { en: "to wake up" },
    example: "저는 아침에 일어나요.",
    exampleTranslations: { en: "I wake up in the morning." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S5-W11",
    korean: "자다",
    partOfSpeech: "verb",
    translations: { en: "to sleep" },
    example: "저는 저녁에 자요.",
    exampleTranslations: { en: "I sleep in the evening." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S5-W12",
    korean: "시작하다",
    partOfSpeech: "verb",
    translations: { en: "to start" },
    example: "수업이 시작해요.",
    exampleTranslations: { en: "Class starts." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S5-W13",
    korean: "끝나다",
    partOfSpeech: "verb",
    translations: { en: "to end" },
    example: "수업이 끝나요.",
    exampleTranslations: { en: "Class ends." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S5-W14",
    korean: "일하다",
    partOfSpeech: "verb",
    translations: { en: "to work" },
    example: "아버지는 매일 일해요.",
    exampleTranslations: { en: "My father works every day." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S5-W15",
    korean: "매일",
    partOfSpeech: "noun",
    translations: { en: "every day" },
    example: "저는 매일 학교에 가요.",
    exampleTranslations: { en: "I go to school every day." },
    audioUrl: null,
    status: "new",
  },
];

const SENTENCES: Sentence[] = [
  {
    id: "L1-S5-S01",
    korean: "저는 아침에 일어나요.",
    translations: { en: "I wake up in the morning." },
    keyExpression: "에 일어나요",
    relatedWords: ["아침", "일어나다"],
    audioUrl: null,
  },
  {
    id: "L1-S5-S02",
    korean: "저는 저녁에 자요.",
    translations: { en: "I sleep in the evening." },
    keyExpression: "에 자요",
    relatedWords: ["저녁", "자다"],
    audioUrl: null,
  },
  {
    id: "L1-S5-S03",
    korean: "수업은 아홉 시에 시작해요.",
    translations: { en: "Class starts at nine o'clock." },
    keyExpression: "에 시작해요",
    relatedWords: ["시", "시작하다"],
    audioUrl: null,
  },
  {
    id: "L1-S5-S04",
    korean: "저는 매일 학교에 가요.",
    translations: { en: "I go to school every day." },
    keyExpression: "매일",
    relatedWords: ["매일", "학교", "가다"],
    audioUrl: null,
  },
  {
    id: "L1-S5-S05",
    korean: "저는 오늘 숙제를 해요.",
    translations: { en: "I do my homework today." },
    keyExpression: "오늘",
    relatedWords: ["오늘", "숙제"],
    audioUrl: null,
  },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L1-S5-G01",
    pattern: "에 (시간)",
    meanings: { en: "at (a point in time)" },
    explanations: {
      en: "Use 에 after a time expression to say when something happens.",
    },
    examples: [
      { korean: "아홉 시에 학교에 가요.", translations: { en: "I go to school at nine o'clock." } },
      { korean: "저녁에 숙제를 해요.", translations: { en: "I do my homework in the evening." } },
      { korean: "아침에 일어나요.", translations: { en: "I wake up in the morning." } },
    ],
  },
  {
    id: "L1-S5-G02",
    pattern: "숫자 + 시/분",
    meanings: { en: "telling time" },
    explanations: {
      en: "Use a number with 시 (hour) or 분 (minute) to say the time.",
    },
    examples: [
      { korean: "한 시예요.", translations: { en: "It's one o'clock." } },
      { korean: "두 시 삼십 분이에요.", translations: { en: "It's 2:30." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L1-S5-L01",
    audioText: "저는 아침 일곱 시에 일어나요.",
    audioUrl: null,
    question: "몇 시에 일어납니까?",
    options: ["일곱 시", "여덟 시", "아홉 시", "여섯 시"],
    correctAnswer: 0,
    translations: {
      en: {
        question: "What time do they wake up?",
        explanation: 'The sentence says "I wake up at seven," so the correct answer is 일곱 시.',
      },
    },
  },
  {
    id: "L1-S5-L02",
    audioText: "수업은 아홉 시에 시작해요.",
    audioUrl: null,
    question: "수업은 언제 시작합니까?",
    options: ["여덟 시", "아홉 시", "열 시", "일곱 시"],
    correctAnswer: 1,
    translations: {
      en: {
        question: "When does class start?",
        explanation: 'The sentence says "Class starts at nine," so the correct answer is 아홉 시.',
      },
    },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L1-S5-R01",
    passage: "저는 아침 일곱 시에 일어나요.\n저녁 열 시에 자요.",
    question: "저는 몇 시에 자요?",
    options: ["일곱 시", "여덟 시", "아홉 시", "열 시"],
    correctAnswer: 3,
    translations: {
      en: {
        question: "What time do they sleep?",
        explanation: 'The passage says "I sleep at ten in the evening," so the correct answer is 열 시.',
      },
    },
  },
  {
    id: "L1-S5-R02",
    passage: "민수는 매일 학교에 가요.\n민수는 저녁에 숙제를 해요.",
    question: "민수는 언제 숙제를 합니까?",
    options: ["아침", "점심", "저녁", "오늘"],
    correctAnswer: 2,
    translations: {
      en: {
        question: "When does Minsu do his homework?",
        explanation: 'The passage says "Minsu does his homework in the evening," so the answer is 저녁.',
      },
    },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  {
    id: "L1-S5-P01",
    type: "vocabulary",
    question: '"아침"의 뜻은 무엇입니까?',
    options: ["Morning", "Evening", "Today", "Tomorrow"],
    correctAnswer: 0,
    explanation: { en: "아침 means morning." },
  },
  {
    id: "L1-S5-P02",
    type: "vocabulary",
    question: '"끝나다"의 뜻은 무엇입니까?',
    options: ["To start", "To wake up", "To sleep", "To end"],
    correctAnswer: 3,
    explanation: { en: "끝나다 means to end." },
  },
  {
    id: "L1-S5-P03",
    type: "grammar",
    question: "빈칸에 알맞은 것을 고르세요.\n아홉 시___ 학교에 가요.",
    options: ["가", "에", "를", "에서"],
    correctAnswer: 1,
    explanation: { en: "Use 에 after a time expression: 아홉 시에 학교에 가요." },
  },
  {
    id: "L1-S5-P04",
    type: "grammar",
    question: "빈칸에 알맞은 것을 고르세요.\n수업이 아홉 시에 ______.",
    options: ["끝나요", "일어나요", "시작해요", "자요"],
    correctAnswer: 2,
    explanation: { en: "수업이 시작해요 means class starts." },
  },
  {
    id: "L1-S5-P05",
    type: "sentence",
    question: "빈칸에 알맞은 것을 고르세요.\n저는 아침에 ______.",
    options: ["일어나요", "자요", "끝나요", "시작해요"],
    correctAnswer: 0,
    explanation: { en: "아침에 일어나요 means to wake up in the morning." },
  },
  {
    id: "L1-S5-P06",
    type: "sentence",
    question: "하루가 끝날 때 무엇을 합니까?",
    options: ["일어나요", "시작해요", "공부해요", "자요"],
    correctAnswer: 3,
    explanation: { en: "At the end of the day, you 자요 (sleep)." },
  },
  {
    id: "L1-S5-P07",
    type: "reading",
    passage: "저는 아침에 일어나요. 저녁에 자요.",
    question: "저는 언제 일어납니까?",
    options: ["저녁", "아침", "점심", "오늘"],
    correctAnswer: 1,
    explanation: { en: 'The passage says "I wake up in the morning," so the answer is 아침.' },
  },
  {
    id: "L1-S5-P08",
    type: "listening",
    audioText: "수업은 아홉 시에 시작해서 열 시에 끝나요.",
    question: "수업은 몇 시에 끝납니까?",
    options: ["아홉 시", "여덟 시", "열 시", "일곱 시"],
    correctAnswer: 2,
    explanation: { en: 'The sentence says class ends at ten, so the answer is 열 시.' },
  },
];

export const STEP_1_5: StepContent = {
  level: 1,
  step: 5,
  title: "하루와 시간 (Day and Time)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  practice: PRACTICE,
};
