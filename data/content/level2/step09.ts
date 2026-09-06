// TOPIK 2 STEP 9 — Health and Lifestyle (건강과 생활습관).
// Real STEP content, independent of TOPIK1 and TOPIK2 STEP1-8's data files.
// 피곤하다, 습관, 쉬다, 아프다, 약, 병원, 매일, 일찍 already exist as
// "new" — recarded here with status "review", not re-created as new.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L2-S9-W01", korean: "건강", partOfSpeech: "noun", translations: { en: "health" }, example: "건강이 중요해요.", exampleTranslations: { en: "Health is important." }, audioUrl: null, status: "new" },
  { id: "L2-S9-W02", korean: "운동하다", partOfSpeech: "verb", translations: { en: "to exercise" }, example: "저는 매일 아침에 운동해요.", exampleTranslations: { en: "I exercise every morning." }, audioUrl: null, status: "new" },
  { id: "L2-S9-W03", korean: "잠", partOfSpeech: "noun", translations: { en: "sleep" }, example: "잠을 충분히 자야 해요.", exampleTranslations: { en: "You should get enough sleep." }, audioUrl: null, status: "new" },
  { id: "L2-S9-W04", korean: "수면", partOfSpeech: "noun", translations: { en: "sleep / slumber" }, example: "수면이 부족해요.", exampleTranslations: { en: "My sleep is insufficient." }, audioUrl: null, status: "new" },
  { id: "L2-S9-W05", korean: "충분하다", partOfSpeech: "adjective", translations: { en: "sufficient / enough" }, example: "잠을 충분히 자요.", exampleTranslations: { en: "I sleep sufficiently." }, audioUrl: null, status: "new" },
  { id: "L2-S9-W06", korean: "규칙적", partOfSpeech: "noun", translations: { en: "regular / regularly" }, example: "규칙적으로 운동해요.", exampleTranslations: { en: "I exercise regularly." }, audioUrl: null, status: "new" },
  { id: "L2-S9-W07", korean: "스트레스", partOfSpeech: "noun", translations: { en: "stress" }, example: "스트레스가 많아요.", exampleTranslations: { en: "I have a lot of stress." }, audioUrl: null, status: "new" },
  { id: "L2-S9-W08", korean: "조심하다", partOfSpeech: "verb", translations: { en: "to be careful" }, example: "건강을 조심하세요.", exampleTranslations: { en: "Please take care of your health." }, audioUrl: null, status: "new" },
  { id: "L2-S9-W09", korean: "건강하다", partOfSpeech: "adjective", translations: { en: "healthy" }, example: "저는 건강해요.", exampleTranslations: { en: "I am healthy." }, audioUrl: null, status: "new" },
  { id: "L2-S9-W10", korean: "피곤하다", partOfSpeech: "adjective", translations: { en: "tired" }, example: "저는 요즘 피곤해요.", exampleTranslations: { en: "I am tired these days." }, audioUrl: null, status: "review" },
  { id: "L2-S9-W11", korean: "습관", partOfSpeech: "noun", translations: { en: "habit" }, example: "저는 좋은 습관이 있어요.", exampleTranslations: { en: "I have a good habit." }, audioUrl: null, status: "review" },
  { id: "L2-S9-W12", korean: "쉬다", partOfSpeech: "verb", translations: { en: "to rest" }, example: "저는 주말에 쉬어요.", exampleTranslations: { en: "I rest on weekends." }, audioUrl: null, status: "review" },
  { id: "L2-S9-W13", korean: "아프다", partOfSpeech: "adjective", translations: { en: "sick / to hurt" }, example: "머리가 아파요.", exampleTranslations: { en: "My head hurts." }, audioUrl: null, status: "review" },
  { id: "L2-S9-W14", korean: "약", partOfSpeech: "noun", translations: { en: "medicine" }, example: "약을 먹어요.", exampleTranslations: { en: "I take medicine." }, audioUrl: null, status: "review" },
  { id: "L2-S9-W15", korean: "병원", partOfSpeech: "noun", translations: { en: "hospital" }, example: "저는 병원에 가요.", exampleTranslations: { en: "I go to the hospital." }, audioUrl: null, status: "review" },
  { id: "L2-S9-W16", korean: "매일", partOfSpeech: "noun", translations: { en: "every day" }, example: "저는 매일 운동해요.", exampleTranslations: { en: "I exercise every day." }, audioUrl: null, status: "review" },
  { id: "L2-S9-W17", korean: "일찍", partOfSpeech: "noun", translations: { en: "early" }, example: "저는 일찍 자요.", exampleTranslations: { en: "I sleep early." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L2-S9-S01", korean: "너무 늦게 자지 마세요.", translations: { en: "Please don't sleep too late." }, keyExpression: "-지 마세요", relatedWords: ["늦게", "자다"], audioUrl: null },
  { id: "L2-S9-S02", korean: "매일 늦게까지 일하지 마세요.", translations: { en: "Please don't work late every day." }, keyExpression: "-지 마세요", relatedWords: ["매일", "늦게", "일하다"], audioUrl: null },
  { id: "L2-S9-S03", korean: "저는 매일 규칙적으로 운동해야 해요.", translations: { en: "I should exercise regularly every day." }, keyExpression: "-아/어야 하다", relatedWords: ["매일", "규칙적", "운동하다"], audioUrl: null },
  { id: "L2-S9-S04", korean: "저는 잠을 충분히 자요. 그래서 건강해요.", translations: { en: "I sleep enough. So I am healthy." }, keyExpression: "충분히", relatedWords: ["잠", "충분하다", "건강하다"], audioUrl: null },
  { id: "L2-S9-S05", korean: "저는 요즘 피곤해서 일찍 쉬어요.", translations: { en: "I am tired these days, so I rest early." }, keyExpression: "-아서/어서", relatedWords: ["피곤하다", "일찍", "쉬다"], audioUrl: null },
  { id: "L2-S9-S06", korean: "저는 아파서 병원에 가요.", translations: { en: "I am sick, so I go to the hospital." }, keyExpression: "-아서/어서", relatedWords: ["아프다", "병원"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L2-S9-G01",
    pattern: "-지 마세요",
    meanings: { en: "please don't (negative command)" },
    explanations: {
      en: "Attach -지 마세요 to a verb stem to tell someone not to do something.",
    },
    examples: [
      { korean: "너무 늦게 자지 마세요.", translations: { en: "Please don't sleep too late." } },
      { korean: "매일 늦게까지 일하지 마세요.", translations: { en: "Please don't work late every day." } },
      { korean: "건강에 안 좋은 음식을 먹지 마세요.", translations: { en: "Please don't eat food that's bad for your health." } },
    ],
  },
  {
    id: "L2-S9-G02",
    pattern: "-아/어야 하다 (복습)",
    meanings: { en: "must / have to (review)" },
    explanations: {
      en: "Keep using -아/어야 하다 for health advice — things you should do.",
    },
    examples: [
      { korean: "규칙적으로 운동해야 해요.", translations: { en: "You should exercise regularly." } },
      { korean: "잠을 충분히 자야 해요.", translations: { en: "You should get enough sleep." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L2-S9-L01",
    audioText: "저는 매일 아침에 운동해요.",
    audioUrl: null,
    question: "언제 운동합니까?",
    options: ["아침", "밤", "점심", "저녁"],
    correctAnswer: 0,
    translations: { en: { question: "When do they exercise?", explanation: 'The sentence says "every morning," so the correct answer is 아침.' } },
  },
  {
    id: "L2-S9-L02",
    audioText: "너무 늦게 자지 마세요.",
    audioUrl: null,
    question: "무엇을 하지 말라고 합니까?",
    options: ["일찍 자기", "쉬기", "운동하기", "늦게 자기"],
    correctAnswer: 3,
    translations: { en: { question: "What are they told not to do?", explanation: 'The sentence says "don\'t sleep too late," so the correct answer is 늦게 자기.' } },
  },
  {
    id: "L2-S9-L03",
    audioText: "저는 요즘 스트레스가 많아요. 그래서 잠을 잘 못 자요.",
    audioUrl: null,
    question: "이 사람은 요즘 어떻습니까?",
    options: ["건강해요", "운동을 많이 해요", "스트레스가 많아요", "피곤하지 않아요"],
    correctAnswer: 2,
    translations: { en: { question: "How is this person these days?", explanation: 'The sentence says "I have a lot of stress," so the correct answer is 스트레스가 많아요.' } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L2-S9-R01",
    passage: "저는 매일 아침에 운동해요.\n그래서 건강해요.",
    question: "이 사람은 왜 건강합니까?",
    options: ["매일 운동해서", "매일 먹어서", "매일 쉬어서", "매일 자서"],
    correctAnswer: 0,
    translations: { en: { question: "Why is this person healthy?", explanation: 'The passage says they exercise every day, so the correct answer is 매일 운동해서.' } },
  },
  {
    id: "L2-S9-R02",
    passage: "잠을 충분히 자야 해요.\n스트레스를 조심해야 해요.",
    question: "건강을 위해 무엇을 해야 합니까?",
    options: ["늦게 자기", "충분히 자기와 스트레스 조심", "운동 안 하기", "약 먹기"],
    correctAnswer: 1,
    translations: { en: { question: "What should you do for your health?", explanation: 'The passage says to sleep enough and watch out for stress, so the correct answer is 충분히 자기와 스트레스 조심.' } },
  },
  {
    id: "L2-S9-R03",
    passage: "저는 요즘 피곤해요.\n잠을 충분히 못 자요.\n그래서 병원에 갔어요.",
    question: "왜 병원에 갔습니까?",
    options: ["운동해서", "건강해서", "스트레스가 없어서", "피곤하고 잠을 못 자서"],
    correctAnswer: 3,
    translations: { en: { question: "Why did they go to the hospital?", explanation: 'The passage says they are tired and can\'t sleep enough, so the correct answer is 피곤하고 잠을 못 자서.' } },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L2-S9-P01", type: "vocabulary", question: '"건강"의 뜻은 무엇입니까?', options: ["Health", "Sleep", "Stress", "Habit"], correctAnswer: 0, explanation: { en: "건강 means health." } },
  { id: "L2-S9-P02", type: "vocabulary", question: '"충분하다"의 뜻은 무엇입니까?', options: ["Insufficient", "Regular", "Careful", "Sufficient"], correctAnswer: 3, explanation: { en: "충분하다 means sufficient/enough." } },
  { id: "L2-S9-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n너무 늦게 ______.", options: ["자요", "잤어요", "자지 마세요", "잘 거예요"], correctAnswer: 2, explanation: { en: "-지 마세요 tells someone not to do something: 자지 마세요." } },
  { id: "L2-S9-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n규칙적으로 운동______.", options: ["해요", "했어요", "하세요", "해야 해요"], correctAnswer: 3, explanation: { en: "-아/어야 하다 shows necessity: 해야 해요." } },
  { id: "L2-S9-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n저는 요즘 ______.", options: ["피곤해요", "건강해요", "즐거워요", "특별해요"], correctAnswer: 0, explanation: { en: "피곤해요 means tired." } },
  { id: "L2-S9-P06", type: "sentence", question: "잠을 잘 못 잘 때 필요한 것은?", options: ["운동", "충분한 잠", "스트레스", "일"], correctAnswer: 1, explanation: { en: "충분한 잠 (enough sleep) is needed." } },
  { id: "L2-S9-P07", type: "vocabulary", question: "몸이 아플 때 가는 곳은?", options: ["학교", "회사", "병원", "은행"], correctAnswer: 2, explanation: { en: "병원 (hospital) is where you go when sick." } },
  { id: "L2-S9-P08", type: "listening", audioText: "너무 늦게 자지 마세요.", question: "무엇을 하지 말라고 합니까?", options: ["일찍 자기", "운동하기", "쉬기", "늦게 자기"], correctAnswer: 3, explanation: { en: 'The sentence says "don\'t sleep late," so the answer is 늦게 자기.' } },
  { id: "L2-S9-P09", type: "reading", passage: "저는 매일 운동해서 건강해요.", question: "이 사람은 왜 건강합니까?", options: ["매일 운동해서", "매일 쉬어서", "매일 먹어서", "매일 자서"], correctAnswer: 0, explanation: { en: 'The passage says "because I exercise every day," so the answer is 매일 운동해서.' } },
  { id: "L2-S9-P10", type: "reading", passage: "저는 스트레스가 많아서 잠을 잘 못 자요.", question: "왜 잠을 잘 못 잡니까?", options: ["운동해서", "스트레스가 많아서", "건강해서", "일찍 자서"], correctAnswer: 1, explanation: { en: 'The passage says "because of a lot of stress," so the answer is 스트레스가 많아서.' } },
];

export const STEP_2_9: StepContent = {
  level: 2,
  step: 9,
  title: "건강과 생활습관 (Health and Lifestyle)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  practice: PRACTICE,
};
