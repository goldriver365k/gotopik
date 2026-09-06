// TOPIK 1 STEP 3 — School and Study (학교와 공부).
// Real STEP 3 curriculum content, independent of STEP 1/2's data files.
// Translations: Korean + English complete; other languages fall back to
// English via each card component's existing pick() helper.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  {
    id: "L1-S3-W01",
    korean: "선생님",
    partOfSpeech: "noun",
    translations: { en: "teacher" },
    example: "선생님이 질문을 해요.",
    exampleTranslations: { en: "The teacher asks a question." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S3-W02",
    korean: "학생",
    partOfSpeech: "noun",
    translations: { en: "student" },
    example: "저는 학생이에요.",
    exampleTranslations: { en: "I am a student." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S3-W03",
    korean: "교실",
    partOfSpeech: "noun",
    translations: { en: "classroom" },
    example: "교실에서 공부해요.",
    exampleTranslations: { en: "I study in the classroom." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S3-W04",
    korean: "책",
    partOfSpeech: "noun",
    translations: { en: "book" },
    example: "책을 읽어요.",
    exampleTranslations: { en: "I read a book." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S3-W05",
    korean: "공책",
    partOfSpeech: "noun",
    translations: { en: "notebook" },
    example: "공책에 써요.",
    exampleTranslations: { en: "I write in my notebook." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S3-W06",
    korean: "연필",
    partOfSpeech: "noun",
    translations: { en: "pencil" },
    example: "연필로 써요.",
    exampleTranslations: { en: "I write with a pencil." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S3-W07",
    korean: "공부",
    partOfSpeech: "noun",
    translations: { en: "study" },
    example: "공부가 재미있어요.",
    exampleTranslations: { en: "Studying is fun." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S3-W08",
    korean: "숙제",
    partOfSpeech: "noun",
    translations: { en: "homework" },
    example: "숙제를 해요.",
    exampleTranslations: { en: "I do my homework." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S3-W09",
    korean: "시험",
    partOfSpeech: "noun",
    translations: { en: "exam" },
    example: "시험이 어려워요.",
    exampleTranslations: { en: "The exam is difficult." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S3-W10",
    korean: "읽다",
    partOfSpeech: "verb",
    translations: { en: "to read" },
    example: "책을 읽어요.",
    exampleTranslations: { en: "I read a book." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S3-W11",
    korean: "쓰다",
    partOfSpeech: "verb",
    translations: { en: "to write" },
    example: "이름을 써요.",
    exampleTranslations: { en: "I write my name." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S3-W12",
    korean: "배우다",
    partOfSpeech: "verb",
    translations: { en: "to learn" },
    example: "한국어를 배워요.",
    exampleTranslations: { en: "I learn Korean." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S3-W13",
    korean: "공부하다",
    partOfSpeech: "verb",
    translations: { en: "to study" },
    example: "저는 교실에서 공부해요.",
    exampleTranslations: { en: "I study in the classroom." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S3-W14",
    korean: "질문",
    partOfSpeech: "noun",
    translations: { en: "question" },
    example: "질문이 있어요?",
    exampleTranslations: { en: "Do you have a question?" },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S3-W15",
    korean: "대답",
    partOfSpeech: "noun",
    translations: { en: "answer" },
    example: "저는 대답을 해요.",
    exampleTranslations: { en: "I give an answer." },
    audioUrl: null,
    status: "new",
  },
];

const SENTENCES: Sentence[] = [
  {
    id: "L1-S3-S01",
    korean: "저는 학교에서 공부해요.",
    translations: { en: "I study at school." },
    keyExpression: "에서",
    relatedWords: ["학교", "공부하다"],
    audioUrl: null,
  },
  {
    id: "L1-S3-S02",
    korean: "교실에서 책을 읽어요.",
    translations: { en: "I read a book in the classroom." },
    keyExpression: "에서",
    relatedWords: ["교실", "책", "읽다"],
    audioUrl: null,
  },
  {
    id: "L1-S3-S03",
    korean: "선생님이 질문을 해요.",
    translations: { en: "The teacher asks a question." },
    keyExpression: "을 해요",
    relatedWords: ["선생님", "질문"],
    audioUrl: null,
  },
  {
    id: "L1-S3-S04",
    korean: "저는 연필로 써요.",
    translations: { en: "I write with a pencil." },
    keyExpression: "로",
    relatedWords: ["연필", "쓰다"],
    audioUrl: null,
  },
  {
    id: "L1-S3-S05",
    korean: "친구와 함께 공부해요.",
    translations: { en: "I study together with my friend." },
    keyExpression: "와 함께",
    relatedWords: ["친구", "공부하다"],
    audioUrl: null,
  },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L1-S3-G01",
    pattern: "에서",
    meanings: { en: "at / in (where an action happens)" },
    explanations: {
      en: "Use 에서 after a place where an action happens — not just where something exists.",
    },
    examples: [
      { korean: "학교에서 공부해요.", translations: { en: "I study at school." } },
      { korean: "교실에서 책을 읽어요.", translations: { en: "I read a book in the classroom." } },
      { korean: "도서관에서 숙제를 해요.", translations: { en: "I do my homework at the library." } },
    ],
  },
  {
    id: "L1-S3-G02",
    pattern: "을/를",
    meanings: { en: "object marker" },
    explanations: {
      en: "Use 을/를 after the object of a verb — 을 after a consonant, 를 after a vowel.",
    },
    examples: [
      { korean: "책을 읽어요.", translations: { en: "I read a book." } },
      { korean: "숙제를 해요.", translations: { en: "I do my homework." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L1-S3-L01",
    audioText: "저는 교실에서 책을 읽어요.",
    audioUrl: null,
    question: "어디에서 책을 읽습니까?",
    options: ["집", "식당", "교실", "은행"],
    correctAnswer: 2,
    translations: {
      en: {
        question: "Where do they read a book?",
        explanation:
          'The sentence says "I read a book in the classroom," so the correct answer is 교실 (classroom).',
      },
    },
  },
  {
    id: "L1-S3-L02",
    audioText: "선생님이 학생에게 질문해요.",
    audioUrl: null,
    question: "누가 질문합니까?",
    options: ["학생", "어머니", "친구", "선생님"],
    correctAnswer: 3,
    translations: {
      en: {
        question: "Who asks the question?",
        explanation:
          "The sentence says the teacher asks, so the correct answer is 선생님 (teacher).",
      },
    },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L1-S3-R01",
    passage: "저는 학생이에요.\n저는 학교에 가요.\n교실에서 공부해요.",
    question: "이 사람은 어디에서 공부합니까?",
    options: ["회사", "집", "식당", "교실"],
    correctAnswer: 3,
    translations: {
      en: {
        question: "Where does this person study?",
        explanation:
          'The passage says "I study in the classroom," so the correct answer is 교실 (classroom).',
      },
    },
  },
  {
    id: "L1-S3-R02",
    passage: "민수는 책을 좋아해요.\n민수는 도서관에서 책을 읽어요.",
    question: "민수는 어디에서 책을 읽습니까?",
    options: ["도서관", "교실", "식당", "집"],
    correctAnswer: 0,
    translations: {
      en: {
        question: "Where does Minsu read books?",
        explanation:
          "The passage says Minsu reads books at the library (도서관), so the correct answer is 도서관.",
      },
    },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  {
    id: "L1-S3-P01",
    type: "vocabulary",
    question: '"선생님"의 뜻은 무엇입니까?',
    options: ["Teacher", "Student", "Friend", "Family"],
    correctAnswer: 0,
    explanation: { en: "선생님 means teacher." },
  },
  {
    id: "L1-S3-P02",
    type: "vocabulary",
    question: '"숙제"의 뜻은 무엇입니까?',
    options: ["Exam", "Question", "Answer", "Homework"],
    correctAnswer: 3,
    explanation: { en: "숙제 means homework." },
  },
  {
    id: "L1-S3-P03",
    type: "grammar",
    question: "빈칸에 알맞은 것을 고르세요.\n학교___ 공부해요.",
    options: ["에", "에서", "을", "가"],
    correctAnswer: 1,
    explanation: { en: "Use 에서 for the place where an action happens: 학교에서 공부해요." },
  },
  {
    id: "L1-S3-P04",
    type: "grammar",
    question: "빈칸에 알맞은 것을 고르세요.\n책___ 읽어요.",
    options: ["이", "에서", "를", "와"],
    correctAnswer: 2,
    explanation: { en: "Use 를 after 책 to mark it as the object: 책을 읽어요." },
  },
  {
    id: "L1-S3-P05",
    type: "sentence",
    question: "빈칸에 알맞은 것을 고르세요.\n저는 연필로 ______.",
    options: ["써요", "읽어요", "봐요", "먹어요"],
    correctAnswer: 0,
    explanation: { en: "연필로 써요 means to write with a pencil." },
  },
  {
    id: "L1-S3-P06",
    type: "sentence",
    question: "선생님이 질문할 때 학생은 무엇을 합니까?",
    options: ["질문해요", "자요", "가요", "대답해요"],
    correctAnswer: 3,
    explanation: { en: "When asked a question, a student gives an answer: 대답해요." },
  },
  {
    id: "L1-S3-P07",
    type: "reading",
    passage: "저는 학생이에요. 교실에서 공부해요.",
    question: "이 사람은 무엇을 합니까?",
    options: ["먹어요", "공부해요", "자요", "가요"],
    correctAnswer: 1,
    explanation: { en: 'The passage says "I study in the classroom," so the answer is 공부해요.' },
  },
  {
    id: "L1-S3-P08",
    type: "listening",
    audioText: "저는 도서관에서 숙제를 해요.",
    question: "어디에서 숙제를 합니까?",
    options: ["교실", "식당", "도서관", "집"],
    correctAnswer: 2,
    explanation: { en: 'The sentence says "I do my homework at the library," so the answer is 도서관.' },
  },
];

export const STEP_1_3: StepContent = {
  level: 1,
  step: 3,
  title: "학교와 공부 (School and Study)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  practice: PRACTICE,
};
