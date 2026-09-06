// TOPIK 1 STEP 2 — Family and People (가족과 사람).
// Real STEP 2 curriculum content, independent of STEP 1's data files.
// Translations: Korean + English are complete; other languages fall back
// to English via the existing `pick()` helpers in each card component —
// no new translation system, per this stage's cost scope.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  {
    id: "L1-S2-W01",
    korean: "가족",
    partOfSpeech: "noun",
    translations: { en: "family" },
    example: "우리 가족은 네 명이에요.",
    exampleTranslations: { en: "Our family has four people." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S2-W02",
    korean: "아버지",
    partOfSpeech: "noun",
    translations: { en: "father" },
    example: "아버지는 학교 선생님이에요.",
    exampleTranslations: { en: "My father is a school teacher." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S2-W03",
    korean: "어머니",
    partOfSpeech: "noun",
    translations: { en: "mother" },
    example: "어머니는 집에 있어요.",
    exampleTranslations: { en: "My mother is at home." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S2-W04",
    korean: "부모님",
    partOfSpeech: "noun",
    translations: { en: "parents" },
    example: "저는 부모님과 살아요.",
    exampleTranslations: { en: "I live with my parents." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S2-W05",
    korean: "형",
    partOfSpeech: "noun",
    translations: { en: "older brother (of a male)" },
    example: "저는 형이 있어요.",
    exampleTranslations: { en: "I have an older brother." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S2-W06",
    korean: "오빠",
    partOfSpeech: "noun",
    translations: { en: "older brother (of a female)" },
    example: "오빠는 회사에 가요.",
    exampleTranslations: { en: "My older brother goes to work." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S2-W07",
    korean: "누나",
    partOfSpeech: "noun",
    translations: { en: "older sister (of a male)" },
    example: "누나는 학생이에요.",
    exampleTranslations: { en: "My older sister is a student." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S2-W08",
    korean: "언니",
    partOfSpeech: "noun",
    translations: { en: "older sister (of a female)" },
    example: "언니는 친구를 만나요.",
    exampleTranslations: { en: "My older sister meets a friend." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S2-W09",
    korean: "동생",
    partOfSpeech: "noun",
    translations: { en: "younger sibling" },
    example: "저는 동생이 있어요.",
    exampleTranslations: { en: "I have a younger sibling." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S2-W10",
    korean: "할아버지",
    partOfSpeech: "noun",
    translations: { en: "grandfather" },
    example: "할아버지는 집에 있어요.",
    exampleTranslations: { en: "My grandfather is at home." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S2-W11",
    korean: "할머니",
    partOfSpeech: "noun",
    translations: { en: "grandmother" },
    example: "할머니는 저와 살아요.",
    exampleTranslations: { en: "My grandmother lives with me." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S2-W12",
    korean: "남자",
    partOfSpeech: "noun",
    translations: { en: "man" },
    example: "저 사람은 남자예요.",
    exampleTranslations: { en: "That person is a man." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S2-W13",
    korean: "여자",
    partOfSpeech: "noun",
    translations: { en: "woman" },
    example: "이 사람은 여자예요.",
    exampleTranslations: { en: "This person is a woman." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S2-W14",
    korean: "누구",
    partOfSpeech: "noun",
    translations: { en: "who" },
    example: "저 사람은 누구예요?",
    exampleTranslations: { en: "Who is that person?" },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S2-W15",
    korean: "있다",
    partOfSpeech: "verb",
    translations: { en: "to have / to exist" },
    example: "저는 친구가 있어요.",
    exampleTranslations: { en: "I have a friend." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S2-W16",
    korean: "없다",
    partOfSpeech: "verb",
    translations: { en: "to not have / to not exist" },
    example: "저는 형이 없어요.",
    exampleTranslations: { en: "I don't have an older brother." },
    audioUrl: null,
    status: "new",
  },
];

const SENTENCES: Sentence[] = [
  {
    id: "L1-S2-S01",
    korean: "우리 가족은 네 명이에요.",
    translations: { en: "Our family has four people." },
    keyExpression: "-이에요",
    relatedWords: ["가족"],
    audioUrl: null,
  },
  {
    id: "L1-S2-S02",
    korean: "이 사람은 제 어머니예요.",
    translations: { en: "This person is my mother." },
    keyExpression: "-예요",
    relatedWords: ["어머니", "사람"],
    audioUrl: null,
  },
  {
    id: "L1-S2-S03",
    korean: "저 사람은 누구예요?",
    translations: { en: "Who is that person?" },
    keyExpression: "누구예요?",
    relatedWords: ["사람", "누구"],
    audioUrl: null,
  },
  {
    id: "L1-S2-S04",
    korean: "저는 동생이 있어요.",
    translations: { en: "I have a younger sibling." },
    keyExpression: "-이 있어요",
    relatedWords: ["동생", "있다"],
    audioUrl: null,
  },
  {
    id: "L1-S2-S05",
    korean: "제 친구는 학교에 가요.",
    translations: { en: "My friend goes to school." },
    keyExpression: "-에 가요",
    relatedWords: ["친구", "학교", "가다"],
    audioUrl: null,
  },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L1-S2-G01",
    pattern: "이/가 있어요",
    meanings: { en: "to have / there is (a person or thing)" },
    explanations: {
      en: "Use 이/가 with 있어요 to say a person or thing exists, or that you have someone.",
    },
    examples: [
      { korean: "동생이 있어요.", translations: { en: "I have a younger sibling." } },
      { korean: "친구가 있어요.", translations: { en: "I have a friend." } },
      { korean: "형이 있어요?", translations: { en: "Do you have an older brother?" } },
    ],
  },
  {
    id: "L1-S2-G02",
    pattern: "누구예요?",
    meanings: { en: "Who is it? / Who is this person?" },
    explanations: {
      en: "Use 누구 with -예요? to ask who someone is.",
    },
    examples: [
      { korean: "저 사람은 누구예요?", translations: { en: "Who is that person?" } },
      { korean: "이 사람은 누구예요?", translations: { en: "Who is this person?" } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L1-S2-L01",
    audioText: "저는 형이 한 명 있어요.",
    audioUrl: null,
    question: "누가 있습니까?",
    options: ["형", "동생", "언니", "누나"],
    correctAnswer: 0,
    translations: {
      en: {
        question: "Who do they have?",
        explanation:
          'The sentence says "I have one older brother," so the correct answer is 형 (older brother).',
      },
    },
  },
  {
    id: "L1-S2-L02",
    audioText: "이 사람은 제 어머니예요.",
    audioUrl: null,
    question: "이 사람은 누구입니까?",
    options: ["아버지", "할머니", "어머니", "언니"],
    correctAnswer: 2,
    translations: {
      en: {
        question: "Who is this person?",
        explanation:
          'The sentence says "This person is my mother," so the correct answer is 어머니 (mother).',
      },
    },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L1-S2-R01",
    passage: "저는 민수예요.\n우리 가족은 네 명이에요.\n아버지, 어머니, 동생이 있어요.",
    question: "민수 씨의 가족은 몇 명입니까?",
    options: ["두 명", "세 명", "다섯 명", "네 명"],
    correctAnswer: 3,
    translations: {
      en: {
        question: "How many people are in Minsu's family?",
        explanation:
          'The passage says "Our family has four people," so the correct answer is 네 명 (four people).',
      },
    },
  },
  {
    id: "L1-S2-R02",
    passage: "저는 수미예요.\n저는 오빠가 있어요.\n오빠는 회사에 가요.",
    question: "오빠는 어디에 가요?",
    options: ["회사", "학교", "식당", "집"],
    correctAnswer: 0,
    translations: {
      en: {
        question: "Where does the older brother go?",
        explanation:
          'The passage says "My older brother goes to work (회사)," so the correct answer is 회사 (work).',
      },
    },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  {
    id: "L1-S2-P01",
    type: "vocabulary",
    question: '"가족"의 뜻은 무엇입니까?',
    options: ["Friend", "Family", "Teacher", "Money"],
    correctAnswer: 1,
    explanation: { en: "가족 means family." },
  },
  {
    id: "L1-S2-P02",
    type: "vocabulary",
    question: '"할머니"의 뜻은 무엇입니까?',
    options: ["Grandfather", "Father", "Mother", "Grandmother"],
    correctAnswer: 3,
    explanation: { en: "할머니 means grandmother." },
  },
  {
    id: "L1-S2-P03",
    type: "sentence",
    question: "빈칸에 알맞은 말을 고르세요.\n저 사람은 ______?",
    options: ["뭐예요", "어디예요", "누구예요", "언제예요"],
    correctAnswer: 2,
    explanation: { en: "Use 누구예요? to ask who a person is: 저 사람은 누구예요?" },
  },
  {
    id: "L1-S2-P04",
    type: "grammar",
    question: "빈칸에 알맞은 것을 고르세요.\n저는 친구___ 있어요.",
    options: ["은", "는", "가", "를"],
    correctAnswer: 2,
    explanation: {
      en: "Use 이/가 with 있어요 to say you have someone: 친구가 있어요.",
    },
  },
  {
    id: "L1-S2-P05",
    type: "sentence",
    question: "빈칸에 알맞은 것을 고르세요.\n우리 가족은 네 ___이에요.",
    options: ["명", "개", "살", "권"],
    correctAnswer: 0,
    explanation: { en: "명 is the counter used for people: 네 명 (four people)." },
  },
  {
    id: "L1-S2-P06",
    type: "vocabulary",
    question: "아버지의 어머니는 누구입니까?",
    options: ["이모", "할머니", "고모", "언니"],
    correctAnswer: 1,
    explanation: { en: "A father's mother is 할머니 (grandmother)." },
  },
  {
    id: "L1-S2-P07",
    type: "reading",
    passage: "저는 링링이에요.\n저는 언니가 두 명 있어요.\n언니들은 학교 선생님이에요.",
    question: "링링 씨의 언니들은 무엇을 합니까?",
    options: ["회사에 가요", "식당에 가요", "집에 있어요", "학교 선생님이에요"],
    correctAnswer: 3,
    explanation: {
      en: 'The passage says the older sisters are school teachers, so the answer is "학교 선생님이에요."',
    },
  },
  {
    id: "L1-S2-P08",
    type: "listening",
    audioText: "저는 여동생이 있어요. 여동생은 학생이에요.",
    question: "여동생은 무엇을 합니까?",
    options: ["학생이에요", "회사원이에요", "선생님이에요", "의사예요"],
    correctAnswer: 0,
    explanation: {
      en: 'The sentence says the younger sister is a student, so the answer is "학생이에요."',
    },
  },
];

export const STEP_1_2: StepContent = {
  level: 1,
  step: 2,
  title: "가족과 사람 (Family and People)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  practice: PRACTICE,
};
