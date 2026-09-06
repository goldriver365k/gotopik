// TOPIK 2 STEP 1 — Daily Life Extended (일상생활 확장).
// Real STEP content, following the TOPIK 2 curriculum design and the same
// StepContent structure/conventions as TOPIK 1 (see docs/content-rules.md).
// 쉬다 (W16) is a deliberate review word from TOPIK 1 STEP 10
// (L1-S10-W12, "to rest") — status "review", not re-created as new.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L2-S1-W01", korean: "하루", partOfSpeech: "noun", translations: { en: "a day" }, example: "오늘 하루는 바빴어요.", exampleTranslations: { en: "Today was a busy day." }, audioUrl: null, status: "new" },
  { id: "L2-S1-W02", korean: "일과", partOfSpeech: "noun", translations: { en: "daily routine" }, example: "저는 매일 같은 일과를 해요.", exampleTranslations: { en: "I do the same daily routine every day." }, audioUrl: null, status: "new" },
  { id: "L2-S1-W03", korean: "습관", partOfSpeech: "noun", translations: { en: "habit" }, example: "저는 아침에 운동하는 습관이 있어요.", exampleTranslations: { en: "I have a habit of exercising in the morning." }, audioUrl: null, status: "new" },
  { id: "L2-S1-W04", korean: "보통", partOfSpeech: "noun", translations: { en: "usually" }, example: "저는 보통 아홉 시에 자요.", exampleTranslations: { en: "I usually sleep at nine." }, audioUrl: null, status: "new" },
  { id: "L2-S1-W05", korean: "자주", partOfSpeech: "noun", translations: { en: "often" }, example: "저는 친구를 자주 만나요.", exampleTranslations: { en: "I often meet my friend." }, audioUrl: null, status: "new" },
  { id: "L2-S1-W06", korean: "가끔", partOfSpeech: "noun", translations: { en: "sometimes" }, example: "저는 가끔 늦게 일어나요.", exampleTranslations: { en: "I sometimes wake up late." }, audioUrl: null, status: "new" },
  { id: "L2-S1-W07", korean: "청소하다", partOfSpeech: "verb", translations: { en: "to clean" }, example: "저는 주말에 집을 청소해요.", exampleTranslations: { en: "I clean my house on weekends." }, audioUrl: null, status: "new" },
  { id: "L2-S1-W08", korean: "씻다", partOfSpeech: "verb", translations: { en: "to wash" }, example: "저는 아침에 손을 씻어요.", exampleTranslations: { en: "I wash my hands in the morning." }, audioUrl: null, status: "new" },
  { id: "L2-S1-W09", korean: "준비하다", partOfSpeech: "verb", translations: { en: "to prepare" }, example: "저는 아침을 준비해요.", exampleTranslations: { en: "I prepare breakfast." }, audioUrl: null, status: "new" },
  { id: "L2-S1-W10", korean: "늦다", partOfSpeech: "adjective", translations: { en: "to be late" }, example: "저는 오늘 학교에 늦었어요.", exampleTranslations: { en: "I was late for school today." }, audioUrl: null, status: "new" },
  { id: "L2-S1-W11", korean: "일찍", partOfSpeech: "noun", translations: { en: "early" }, example: "저는 오늘 일찍 일어났어요.", exampleTranslations: { en: "I woke up early today." }, audioUrl: null, status: "new" },
  { id: "L2-S1-W12", korean: "늦게", partOfSpeech: "noun", translations: { en: "late" }, example: "저는 어제 늦게 잤어요.", exampleTranslations: { en: "I went to sleep late yesterday." }, audioUrl: null, status: "new" },
  { id: "L2-S1-W13", korean: "벌써", partOfSpeech: "noun", translations: { en: "already" }, example: "벌써 아홉 시예요.", exampleTranslations: { en: "It's already nine o'clock." }, audioUrl: null, status: "new" },
  { id: "L2-S1-W14", korean: "아직", partOfSpeech: "noun", translations: { en: "yet / still" }, example: "저는 아직 안 씻었어요.", exampleTranslations: { en: "I haven't washed yet." }, audioUrl: null, status: "new" },
  { id: "L2-S1-W15", korean: "계속", partOfSpeech: "noun", translations: { en: "continuously / keep on" }, example: "비가 계속 와요.", exampleTranslations: { en: "It keeps raining." }, audioUrl: null, status: "new" },
  { id: "L2-S1-W16", korean: "쉬다", partOfSpeech: "verb", translations: { en: "to rest" }, example: "저는 주말에 집에서 쉬었어요.", exampleTranslations: { en: "I rested at home on the weekend." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L2-S1-S01", korean: "저는 어제 학교에 늦었어요.", translations: { en: "I was late for school yesterday." }, keyExpression: "-았/었어요", relatedWords: ["학교", "늦다"], audioUrl: null },
  { id: "L2-S1-S02", korean: "저는 오늘 아침에 일찍 일어났어요.", translations: { en: "I woke up early this morning." }, keyExpression: "-았/었어요", relatedWords: ["아침", "일찍", "일어나다"], audioUrl: null },
  { id: "L2-S1-S03", korean: "저는 지금 청소하고 있어요.", translations: { en: "I am cleaning right now." }, keyExpression: "-고 있다", relatedWords: ["청소하다"], audioUrl: null },
  { id: "L2-S1-S04", korean: "저는 보통 아홉 시에 자요.", translations: { en: "I usually sleep at nine." }, keyExpression: "보통", relatedWords: ["보통", "자다"], audioUrl: null },
  { id: "L2-S1-S05", korean: "저는 아직 준비를 안 했어요.", translations: { en: "I haven't prepared yet." }, keyExpression: "아직 ... 안", relatedWords: ["아직", "준비하다"], audioUrl: null },
  { id: "L2-S1-S06", korean: "저는 매일 같은 습관이 있어요.", translations: { en: "I have the same habit every day." }, keyExpression: "이 있어요", relatedWords: ["습관", "매일"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L2-S1-G01",
    pattern: "-았/었어요",
    meanings: { en: "past tense" },
    explanations: {
      en: "Attach -았/었어요 (or -였어요 after 하다) to a verb/adjective stem to talk about something that already happened.",
    },
    examples: [
      { korean: "저는 학교에 늦었어요.", translations: { en: "I was late for school." } },
      { korean: "오늘 하루는 바빴어요.", translations: { en: "Today was a busy day." } },
      { korean: "어제 늦게 잤어요.", translations: { en: "I went to sleep late yesterday." } },
    ],
  },
  {
    id: "L2-S1-G02",
    pattern: "-고 있다",
    meanings: { en: "to be doing (progressive)" },
    explanations: {
      en: "Attach -고 있다 to a verb stem to say an action is currently in progress.",
    },
    examples: [
      { korean: "저는 지금 청소하고 있어요.", translations: { en: "I am cleaning right now." } },
      { korean: "친구를 기다리고 있어요.", translations: { en: "I am waiting for my friend." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L2-S1-L01",
    audioText: "저는 어제 학교에 늦었어요.",
    audioUrl: null,
    question: "언제 학교에 늦었습니까?",
    options: ["오늘", "어제", "내일", "지금"],
    correctAnswer: 1,
    translations: { en: { question: "When were they late for school?", explanation: 'The sentence says "yesterday," so the correct answer is 어제.' } },
  },
  {
    id: "L2-S1-L02",
    audioText: "저는 지금 방을 청소하고 있어요.",
    audioUrl: null,
    question: "지금 무엇을 하고 있습니까?",
    options: ["요리해요", "청소해요", "공부해요", "쉬어요"],
    correctAnswer: 1,
    translations: { en: { question: "What are they doing right now?", explanation: 'The sentence says "I am cleaning," so the correct answer is 청소해요.' } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L2-S1-R01",
    passage: "저는 보통 아침 일곱 시에 일어나요.\n하지만 오늘은 늦게 일어났어요.",
    question: "오늘 이 사람은 어떻게 일어났습니까?",
    options: ["일찍", "늦게", "보통 때처럼", "안 일어났어요"],
    correctAnswer: 1,
    translations: { en: { question: "How did they wake up today?", explanation: 'The passage says "I woke up late today," so the correct answer is 늦게.' } },
  },
  {
    id: "L2-S1-R02",
    passage: "저는 매일 아침에 운동하는 습관이 있어요.\n오늘도 아침에 운동했어요.",
    question: "이 사람의 습관은 무엇입니까?",
    options: ["아침에 청소하기", "아침에 운동하기", "아침에 요리하기", "아침에 공부하기"],
    correctAnswer: 1,
    translations: { en: { question: "What is this person's habit?", explanation: 'The passage says they exercise every morning, so the correct answer is 아침에 운동하기.' } },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L2-S1-P01", type: "vocabulary", question: '"하루"의 뜻은 무엇입니까?', options: ["Day", "Week", "Month", "Year"], correctAnswer: 0, explanation: { en: "하루 means a day." } },
  { id: "L2-S1-P02", type: "vocabulary", question: '"습관"의 뜻은 무엇입니까?', options: ["Plan", "Schedule", "Habit", "Rule"], correctAnswer: 2, explanation: { en: "습관 means habit." } },
  { id: "L2-S1-P03", type: "vocabulary", question: '"청소하다"의 뜻은 무엇입니까?', options: ["To wash", "To cook", "To prepare", "To clean"], correctAnswer: 3, explanation: { en: "청소하다 means to clean." } },
  { id: "L2-S1-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n저는 어제 학교에 ______.", options: ["늦어요", "늦었어요", "늦을 거예요", "늦고 있어요"], correctAnswer: 1, explanation: { en: "-았/었어요 marks the past tense: 늦었어요." } },
  { id: "L2-S1-P05", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n저는 지금 청소______.", options: ["했어요", "할 거예요", "하고 있어요", "하세요"], correctAnswer: 2, explanation: { en: "-고 있다 marks an action in progress: 청소하고 있어요." } },
  { id: "L2-S1-P06", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n저는 보통 아홉 시에 ______.", options: ["자요", "잤어요", "잘 거예요", "자고 있어요"], correctAnswer: 0, explanation: { en: "보통 describes a usual, present-tense habit: 아홉 시에 자요." } },
  { id: "L2-S1-P07", type: "sentence", question: '"아직 준비를 안 했어요"의 뜻은 무엇입니까?', options: ["Not prepared yet", "Already prepared", "Preparing now", "Will prepare"], correctAnswer: 0, explanation: { en: "아직 ... 안 했어요 means 'haven't done (something) yet'." } },
  { id: "L2-S1-P08", type: "reading", passage: "저는 어제 늦게 잤어요. 그래서 오늘 피곤해요.", question: "왜 피곤합니까?", options: ["일찍 잤어요", "운동했어요", "아팠어요", "늦게 잤어요"], correctAnswer: 3, explanation: { en: 'The passage says "I went to sleep late," so the correct answer is 늦게 잤어요.' } },
  { id: "L2-S1-P09", type: "reading", passage: "저는 매일 아침에 씻고 준비해요.", question: "이 사람은 아침에 무엇을 합니까?", options: ["청소해요", "씻고 준비해요", "운동해요", "요리해요"], correctAnswer: 1, explanation: { en: 'The passage says "I wash and get ready," so the correct answer is 씻고 준비해요.' } },
  { id: "L2-S1-P10", type: "listening", audioText: "저는 오늘 하루 종일 집에서 쉬었어요.", question: "오늘 무엇을 했습니까?", options: ["일했어요", "공부했어요", "쉬었어요", "청소했어요"], correctAnswer: 2, explanation: { en: 'The sentence says "I rested at home all day," so the correct answer is 쉬었어요.' } },
];

export const STEP_2_1: StepContent = {
  level: 2,
  step: 1,
  title: "일상생활 확장 (Daily Life Extended)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  practice: PRACTICE,
};
