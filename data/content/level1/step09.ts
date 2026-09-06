// TOPIK 1 STEP 9 — Appointments and Schedule (약속과 일정).
// Real STEP 9 curriculum content, independent of STEP 1-8's data files.
// Checked against all STEP 1-8 words for duplicates — none found. Weekday
// names are kept as plain Word entries (no separate grouping system, per
// this stage's "no new system" rule) since 15 words is still in range.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L1-S9-W01", korean: "약속", partOfSpeech: "noun", translations: { en: "appointment / promise" }, example: "약속이 언제예요?", exampleTranslations: { en: "When is the appointment?" }, audioUrl: null, status: "new" },
  { id: "L1-S9-W02", korean: "날짜", partOfSpeech: "noun", translations: { en: "date" }, example: "날짜를 확인해요.", exampleTranslations: { en: "I check the date." }, audioUrl: null, status: "new" },
  { id: "L1-S9-W03", korean: "요일", partOfSpeech: "noun", translations: { en: "day of the week" }, example: "오늘은 무슨 요일이에요?", exampleTranslations: { en: "What day of the week is it today?" }, audioUrl: null, status: "new" },
  { id: "L1-S9-W04", korean: "월요일", partOfSpeech: "noun", translations: { en: "Monday" }, example: "월요일에 학교에 가요.", exampleTranslations: { en: "I go to school on Monday." }, audioUrl: null, status: "new" },
  { id: "L1-S9-W05", korean: "화요일", partOfSpeech: "noun", translations: { en: "Tuesday" }, example: "화요일에 시험이 있어요.", exampleTranslations: { en: "There is an exam on Tuesday." }, audioUrl: null, status: "new" },
  { id: "L1-S9-W06", korean: "수요일", partOfSpeech: "noun", translations: { en: "Wednesday" }, example: "수요일에 친구를 만나요.", exampleTranslations: { en: "I meet my friend on Wednesday." }, audioUrl: null, status: "new" },
  { id: "L1-S9-W07", korean: "목요일", partOfSpeech: "noun", translations: { en: "Thursday" }, example: "목요일에 일해요.", exampleTranslations: { en: "I work on Thursday." }, audioUrl: null, status: "new" },
  { id: "L1-S9-W08", korean: "금요일", partOfSpeech: "noun", translations: { en: "Friday" }, example: "금요일에 쇼핑해요.", exampleTranslations: { en: "I go shopping on Friday." }, audioUrl: null, status: "new" },
  { id: "L1-S9-W09", korean: "토요일", partOfSpeech: "noun", translations: { en: "Saturday" }, example: "우리는 토요일에 만나요.", exampleTranslations: { en: "We meet on Saturday." }, audioUrl: null, status: "new" },
  { id: "L1-S9-W10", korean: "일요일", partOfSpeech: "noun", translations: { en: "Sunday" }, example: "일요일에 쉬어요.", exampleTranslations: { en: "I rest on Sunday." }, audioUrl: null, status: "new" },
  { id: "L1-S9-W11", korean: "언제", partOfSpeech: "noun", translations: { en: "when" }, example: "약속이 언제예요?", exampleTranslations: { en: "When is the appointment?" }, audioUrl: null, status: "new" },
  { id: "L1-S9-W12", korean: "만나다", partOfSpeech: "verb", translations: { en: "to meet" }, example: "저는 친구를 만나요.", exampleTranslations: { en: "I meet my friend." }, audioUrl: null, status: "new" },
  { id: "L1-S9-W13", korean: "전화하다", partOfSpeech: "verb", translations: { en: "to make a phone call" }, example: "저는 친구에게 전화해요.", exampleTranslations: { en: "I call my friend." }, audioUrl: null, status: "new" },
  { id: "L1-S9-W14", korean: "같이", partOfSpeech: "noun", translations: { en: "together" }, example: "가족과 같이 있어요.", exampleTranslations: { en: "I am together with my family." }, audioUrl: null, status: "new" },
  { id: "L1-S9-W15", korean: "주말", partOfSpeech: "noun", translations: { en: "weekend" }, example: "저는 주말에 쉬어요.", exampleTranslations: { en: "I rest on the weekend." }, audioUrl: null, status: "new" },
];

const SENTENCES: Sentence[] = [
  { id: "L1-S9-S01", korean: "저는 친구하고 만나요.", translations: { en: "I meet my friend." }, keyExpression: "하고", relatedWords: ["친구", "만나다"], audioUrl: null },
  { id: "L1-S9-S02", korean: "약속이 언제예요?", translations: { en: "When is the appointment?" }, keyExpression: "언제", relatedWords: ["약속", "언제"], audioUrl: null },
  { id: "L1-S9-S03", korean: "우리는 토요일에 만나요.", translations: { en: "We meet on Saturday." }, keyExpression: "에", relatedWords: ["토요일", "만나다"], audioUrl: null },
  { id: "L1-S9-S04", korean: "저는 가족과 같이 있어요.", translations: { en: "I am together with my family." }, keyExpression: "과 같이", relatedWords: ["가족", "같이", "있다"], audioUrl: null },
  { id: "L1-S9-S05", korean: "저는 친구에게 전화해요.", translations: { en: "I call my friend." }, keyExpression: "에게 전화해요", relatedWords: ["친구", "전화하다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L1-S9-G01",
    pattern: "하고/와/과",
    meanings: { en: "and / with (used with people)" },
    explanations: { en: "Use 하고, 와, or 과 after a person to mean 'with' or 'and' that person." },
    examples: [
      { korean: "친구하고 만나요.", translations: { en: "I meet with my friend." } },
      { korean: "가족과 이야기해요.", translations: { en: "I talk with my family." } },
      { korean: "동생과 같이 가요.", translations: { en: "I go together with my younger sibling." } },
    ],
  },
  {
    id: "L1-S9-G02",
    pattern: "언제 만나요?",
    meanings: { en: "When do we meet?" },
    explanations: { en: "Use 언제 to ask when something happens." },
    examples: [
      { korean: "언제 만나요?", translations: { en: "When do we meet?" } },
      { korean: "약속이 언제예요?", translations: { en: "When is the appointment?" } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L1-S9-L01",
    audioText: "저는 토요일에 친구를 만나요.",
    audioUrl: null,
    question: "언제 친구를 만납니까?",
    options: ["금요일", "토요일", "일요일", "월요일"],
    correctAnswer: 1,
    translations: { en: { question: "When do they meet their friend?", explanation: 'The sentence says "on Saturday," so the correct answer is 토요일.' } },
  },
  {
    id: "L1-S9-L02",
    audioText: "약속은 세 시예요. 우리는 역 앞에서 만나요.",
    audioUrl: null,
    question: "어디에서 만납니까?",
    options: ["학교", "역 앞", "식당", "집"],
    correctAnswer: 1,
    translations: { en: { question: "Where do they meet?", explanation: 'The sentence says "We meet in front of the station," so the answer is 역 앞.' } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L1-S9-R01",
    passage: "민수 씨, 우리 토요일에 만나요.\n오후 세 시, 학교 앞에서 만나요.",
    question: "언제 만납니까?",
    options: ["금요일", "월요일", "일요일", "토요일"],
    correctAnswer: 3,
    translations: { en: { question: "When do they meet?", explanation: 'The note says "let\'s meet on Saturday," so the answer is 토요일.' } },
  },
  {
    id: "L1-S9-R02",
    passage: "저는 친구와 약속이 있어요.\n우리는 주말에 만나요.",
    question: "저는 언제 친구를 만납니까?",
    options: ["평일", "주말", "오늘", "내일"],
    correctAnswer: 1,
    translations: { en: { question: "When do they meet their friend?", explanation: 'The passage says "we meet on the weekend," so the answer is 주말.' } },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L1-S9-P01", type: "vocabulary", question: '"약속"의 뜻은 무엇입니까?', options: ["Appointment", "Weekend", "Date", "Day"], correctAnswer: 0, explanation: { en: "약속 means an appointment or promise." } },
  { id: "L1-S9-P02", type: "vocabulary", question: '"주말"의 뜻은 무엇입니까?', options: ["Weekday", "Today", "Date", "Weekend"], correctAnswer: 3, explanation: { en: "주말 means weekend." } },
  { id: "L1-S9-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n친구___ 만나요.", options: ["가", "하고", "를", "에서"], correctAnswer: 1, explanation: { en: "하고 means 'with' when used after a person: 친구하고 만나요." } },
  { id: "L1-S9-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n______ 만나요?", options: ["누구", "어디", "언제", "무엇"], correctAnswer: 2, explanation: { en: "언제 asks when something happens." } },
  { id: "L1-S9-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n우리는 토요일___ 만나요.", options: ["에", "가", "를", "도"], correctAnswer: 0, explanation: { en: "에 marks the day something happens: 토요일에 만나요." } },
  { id: "L1-S9-P06", type: "sentence", question: "친구와 만날 시간을 물을 때 무엇이라고 말합니까?", options: ["어디예요?", "누구예요?", "뭐예요?", "언제예요?"], correctAnswer: 3, explanation: { en: "언제예요? asks about time." } },
  { id: "L1-S9-P07", type: "reading", passage: "약속은 토요일이에요.", question: "약속은 언제입니까?", options: ["금요일", "토요일", "일요일", "월요일"], correctAnswer: 1, explanation: { en: 'The passage says the appointment is on Saturday, so the answer is 토요일.' } },
  { id: "L1-S9-P08", type: "listening", audioText: "저는 일요일에 가족과 같이 있어요.", question: "저는 언제 가족과 같이 있습니까?", options: ["토요일", "금요일", "일요일", "월요일"], correctAnswer: 2, explanation: { en: 'The sentence says "on Sunday," so the answer is 일요일.' } },
];

export const STEP_1_9: StepContent = {
  level: 1,
  step: 9,
  title: "약속과 일정 (Appointments and Schedule)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  practice: PRACTICE,
};
