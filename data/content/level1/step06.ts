// TOPIK 1 STEP 6 — Places and Getting Around (장소와 이동).
// Real STEP 6 curriculum content, independent of STEP 1-5's data files.
// 가다 (W14) is a deliberate review word from STEP 1 (L1-S1-W05), recarded
// here in the location/transport theme — status "review".
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  {
    id: "L1-S6-W01",
    korean: "집",
    partOfSpeech: "noun",
    translations: { en: "house / home" },
    example: "저는 집에 있어요.",
    exampleTranslations: { en: "I am at home." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S6-W02",
    korean: "회사",
    partOfSpeech: "noun",
    translations: { en: "company" },
    example: "아버지는 회사에 가요.",
    exampleTranslations: { en: "My father goes to the company." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S6-W03",
    korean: "역",
    partOfSpeech: "noun",
    translations: { en: "station" },
    example: "역 앞에 있어요.",
    exampleTranslations: { en: "It's in front of the station." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S6-W04",
    korean: "버스",
    partOfSpeech: "noun",
    translations: { en: "bus" },
    example: "저는 버스를 타요.",
    exampleTranslations: { en: "I take the bus." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S6-W05",
    korean: "지하철",
    partOfSpeech: "noun",
    translations: { en: "subway" },
    example: "저는 지하철을 타요.",
    exampleTranslations: { en: "I take the subway." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S6-W06",
    korean: "병원",
    partOfSpeech: "noun",
    translations: { en: "hospital" },
    example: "병원에 가요.",
    exampleTranslations: { en: "I go to the hospital." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S6-W07",
    korean: "은행",
    partOfSpeech: "noun",
    translations: { en: "bank" },
    example: "은행에 가요.",
    exampleTranslations: { en: "I go to the bank." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S6-W08",
    korean: "가게",
    partOfSpeech: "noun",
    translations: { en: "store" },
    example: "가게에서 과일을 사요.",
    exampleTranslations: { en: "I buy fruit at the store." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S6-W09",
    korean: "앞",
    partOfSpeech: "noun",
    translations: { en: "front" },
    example: "학교 앞에 있어요.",
    exampleTranslations: { en: "It's in front of the school." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S6-W10",
    korean: "뒤",
    partOfSpeech: "noun",
    translations: { en: "back" },
    example: "집 뒤에 있어요.",
    exampleTranslations: { en: "It's behind the house." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S6-W11",
    korean: "옆",
    partOfSpeech: "noun",
    translations: { en: "side" },
    example: "은행 옆에 있어요.",
    exampleTranslations: { en: "It's next to the bank." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S6-W12",
    korean: "안",
    partOfSpeech: "noun",
    translations: { en: "inside" },
    example: "교실 안에 있어요.",
    exampleTranslations: { en: "It's inside the classroom." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S6-W13",
    korean: "밖",
    partOfSpeech: "noun",
    translations: { en: "outside" },
    example: "집 밖에 있어요.",
    exampleTranslations: { en: "It's outside the house." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S6-W14",
    korean: "가다",
    partOfSpeech: "verb",
    translations: { en: "to go" },
    example: "저는 회사에 가요.",
    exampleTranslations: { en: "I go to the company." },
    audioUrl: null,
    status: "review",
  },
  {
    id: "L1-S6-W15",
    korean: "오다",
    partOfSpeech: "verb",
    translations: { en: "to come" },
    example: "친구가 집에 와요.",
    exampleTranslations: { en: "My friend comes to my house." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S6-W16",
    korean: "타다",
    partOfSpeech: "verb",
    translations: { en: "to ride / to take (transport)" },
    example: "저는 버스를 타요.",
    exampleTranslations: { en: "I take the bus." },
    audioUrl: null,
    status: "new",
  },
];

const SENTENCES: Sentence[] = [
  {
    id: "L1-S6-S01",
    korean: "저는 회사에 가요.",
    translations: { en: "I go to the company." },
    keyExpression: "에 가요",
    relatedWords: ["회사", "가다"],
    audioUrl: null,
  },
  {
    id: "L1-S6-S02",
    korean: "친구가 집에 와요.",
    translations: { en: "My friend comes to my house." },
    keyExpression: "에 와요",
    relatedWords: ["친구", "집", "오다"],
    audioUrl: null,
  },
  {
    id: "L1-S6-S03",
    korean: "저는 버스를 타요.",
    translations: { en: "I take the bus." },
    keyExpression: "를 타요",
    relatedWords: ["버스", "타다"],
    audioUrl: null,
  },
  {
    id: "L1-S6-S04",
    korean: "은행은 학교 앞에 있어요.",
    translations: { en: "The bank is in front of the school." },
    keyExpression: "앞에 있어요",
    relatedWords: ["은행", "학교", "앞"],
    audioUrl: null,
  },
  {
    id: "L1-S6-S05",
    korean: "저는 지하철역에서 친구를 만나요.",
    translations: { en: "I meet my friend at the subway station." },
    keyExpression: "에서",
    relatedWords: ["지하철", "친구"],
    audioUrl: null,
  },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L1-S6-G01",
    pattern: "에 가요 / 에 와요",
    meanings: { en: "to go to / to come to (a place)" },
    explanations: {
      en: "Use 에 with 가요 or 와요 to say where someone goes or comes.",
    },
    examples: [
      { korean: "회사에 가요.", translations: { en: "I go to the company." } },
      { korean: "집에 와요.", translations: { en: "I come home." } },
      { korean: "병원에 가요.", translations: { en: "I go to the hospital." } },
    ],
  },
  {
    id: "L1-S6-G02",
    pattern: "앞/뒤/옆 + 에",
    meanings: { en: "in front of / behind / next to" },
    explanations: {
      en: "Use 앞, 뒤, or 옆 with 에 to describe where something is located.",
    },
    examples: [
      { korean: "은행 앞에 있어요.", translations: { en: "It's in front of the bank." } },
      { korean: "학교 뒤에 있어요.", translations: { en: "It's behind the school." } },
      { korean: "가게 옆에 있어요.", translations: { en: "It's next to the store." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L1-S6-L01",
    audioText: "저는 지하철을 타고 회사에 가요.",
    audioUrl: null,
    question: "무엇을 타고 회사에 갑니까?",
    options: ["지하철", "자전거", "택시", "버스"],
    correctAnswer: 0,
    translations: {
      en: {
        question: "What do they take to work?",
        explanation: 'The sentence says "I take the subway to work," so the correct answer is 지하철.',
      },
    },
  },
  {
    id: "L1-S6-L02",
    audioText: "은행은 학교 앞에 있어요.",
    audioUrl: null,
    question: "은행은 어디에 있습니까?",
    options: ["학교 뒤", "학교 앞", "학교 옆", "집 안"],
    correctAnswer: 1,
    translations: {
      en: {
        question: "Where is the bank?",
        explanation: 'The sentence says "The bank is in front of the school," so the answer is 학교 앞.',
      },
    },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L1-S6-R01",
    passage: "저는 매일 버스를 타요.\n버스에서 회사에 가요.",
    question: "저는 무엇을 타고 회사에 갑니까?",
    options: ["지하철", "버스", "택시", "자전거"],
    correctAnswer: 1,
    translations: {
      en: {
        question: "What do they take to work?",
        explanation: 'The passage says "I take the bus to work," so the correct answer is 버스.',
      },
    },
  },
  {
    id: "L1-S6-R02",
    passage: "은행은 가게 옆에 있어요.\n병원은 은행 뒤에 있어요.",
    question: "병원은 어디에 있습니까?",
    options: ["가게 옆", "은행 앞", "은행 뒤", "학교 안"],
    correctAnswer: 2,
    translations: {
      en: {
        question: "Where is the hospital?",
        explanation: 'The passage says "The hospital is behind the bank," so the answer is 은행 뒤.',
      },
    },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  {
    id: "L1-S6-P01",
    type: "vocabulary",
    question: '"회사"의 뜻은 무엇입니까?',
    options: ["Company", "Bank", "Hospital", "Store"],
    correctAnswer: 0,
    explanation: { en: "회사 means company." },
  },
  {
    id: "L1-S6-P02",
    type: "vocabulary",
    question: '"지하철"의 뜻은 무엇입니까?',
    options: ["Bus", "Taxi", "Station", "Subway"],
    correctAnswer: 3,
    explanation: { en: "지하철 means subway." },
  },
  {
    id: "L1-S6-P03",
    type: "grammar",
    question: "빈칸에 알맞은 것을 고르세요.\n저는 버스___ 타요.",
    options: ["가", "를", "에서", "도"],
    correctAnswer: 1,
    explanation: { en: "Use 를 after 버스 to mark it as the object: 버스를 타요." },
  },
  {
    id: "L1-S6-P04",
    type: "grammar",
    question: "빈칸에 알맞은 것을 고르세요.\n학교 앞___ 있어요.",
    options: ["가", "를", "에", "을"],
    correctAnswer: 2,
    explanation: { en: "Use 에 after a location word like 앞: 학교 앞에 있어요." },
  },
  {
    id: "L1-S6-P05",
    type: "sentence",
    question: "빈칸에 알맞은 것을 고르세요.\n친구가 집에 ______.",
    options: ["와요", "가요", "타요", "있어요"],
    correctAnswer: 0,
    explanation: { en: "집에 와요 means to come to my house." },
  },
  {
    id: "L1-S6-P06",
    type: "sentence",
    question: "지하철을 타려면 어디로 갑니까?",
    options: ["학교", "식당", "은행", "역"],
    correctAnswer: 3,
    explanation: { en: "You go to the 역 (station) to take the subway." },
  },
  {
    id: "L1-S6-P07",
    type: "reading",
    passage: "저는 지하철역 앞에 있어요.",
    question: "저는 어디에 있습니까?",
    options: ["학교 뒤", "지하철역 앞", "은행 옆", "집 안"],
    correctAnswer: 1,
    explanation: { en: 'The passage says "I am in front of the subway station," so the answer is 지하철역 앞.' },
  },
  {
    id: "L1-S6-P08",
    type: "listening",
    audioText: "저는 버스를 타고 학교에 가요.",
    question: "저는 무엇을 타고 학교에 갑니까?",
    options: ["지하철", "택시", "버스", "자전거"],
    correctAnswer: 2,
    explanation: { en: 'The sentence says "I take the bus to school," so the answer is 버스.' },
  },
];

export const STEP_1_6: StepContent = {
  level: 1,
  step: 6,
  title: "장소와 이동 (Places and Getting Around)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  practice: PRACTICE,
};
