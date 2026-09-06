// TOPIK 2 STEP 6 — Travel and Accommodation (여행과 숙박).
// Real STEP content, independent of TOPIK1 and TOPIK2 STEP1-5's data files.
// 여행 (TOPIK2 L2-S2-W06), 방 (TOPIK2 L2-S4-W01), and 준비하다
// (TOPIK2 L2-S1-W09) already exist as "new" — recarded here with status
// "review", not re-created as new.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L2-S6-W01", korean: "호텔", partOfSpeech: "noun", translations: { en: "hotel" }, example: "저는 호텔을 예약했어요.", exampleTranslations: { en: "I booked a hotel." }, audioUrl: null, status: "new" },
  { id: "L2-S6-W02", korean: "숙소", partOfSpeech: "noun", translations: { en: "accommodation" }, example: "숙소가 편해요.", exampleTranslations: { en: "The accommodation is comfortable." }, audioUrl: null, status: "new" },
  { id: "L2-S6-W03", korean: "표", partOfSpeech: "noun", translations: { en: "ticket" }, example: "기차표를 샀어요.", exampleTranslations: { en: "I bought a train ticket." }, audioUrl: null, status: "new" },
  { id: "L2-S6-W04", korean: "비행기", partOfSpeech: "noun", translations: { en: "airplane" }, example: "비행기를 타요.", exampleTranslations: { en: "I take an airplane." }, audioUrl: null, status: "new" },
  { id: "L2-S6-W05", korean: "공항", partOfSpeech: "noun", translations: { en: "airport" }, example: "공항에 도착했어요.", exampleTranslations: { en: "I arrived at the airport." }, audioUrl: null, status: "new" },
  { id: "L2-S6-W06", korean: "관광", partOfSpeech: "noun", translations: { en: "sightseeing" }, example: "관광을 좋아해요.", exampleTranslations: { en: "I like sightseeing." }, audioUrl: null, status: "new" },
  { id: "L2-S6-W07", korean: "여행지", partOfSpeech: "noun", translations: { en: "travel destination" }, example: "이 여행지는 유명해요.", exampleTranslations: { en: "This travel destination is famous." }, audioUrl: null, status: "new" },
  { id: "L2-S6-W08", korean: "출발하다", partOfSpeech: "verb", translations: { en: "to depart" }, example: "아침에 출발해요.", exampleTranslations: { en: "I depart in the morning." }, audioUrl: null, status: "new" },
  { id: "L2-S6-W09", korean: "도착하다", partOfSpeech: "verb", translations: { en: "to arrive" }, example: "저녁에 도착해요.", exampleTranslations: { en: "I arrive in the evening." }, audioUrl: null, status: "new" },
  { id: "L2-S6-W10", korean: "예약하다", partOfSpeech: "verb", translations: { en: "to reserve" }, example: "호텔을 예약했어요.", exampleTranslations: { en: "I booked a hotel." }, audioUrl: null, status: "new" },
  { id: "L2-S6-W11", korean: "묵다", partOfSpeech: "verb", translations: { en: "to stay overnight" }, example: "호텔에서 이틀 묵어요.", exampleTranslations: { en: "I stay at the hotel for two days." }, audioUrl: null, status: "new" },
  { id: "L2-S6-W12", korean: "계획", partOfSpeech: "noun", translations: { en: "plan" }, example: "여행 계획을 세워요.", exampleTranslations: { en: "I make a travel plan." }, audioUrl: null, status: "new" },
  { id: "L2-S6-W13", korean: "짐", partOfSpeech: "noun", translations: { en: "luggage" }, example: "짐을 싸요.", exampleTranslations: { en: "I pack my luggage." }, audioUrl: null, status: "new" },
  { id: "L2-S6-W14", korean: "여행", partOfSpeech: "noun", translations: { en: "travel" }, example: "저는 이 여행지로 여행을 가요.", exampleTranslations: { en: "I travel to this destination." }, audioUrl: null, status: "review" },
  { id: "L2-S6-W15", korean: "방", partOfSpeech: "noun", translations: { en: "room" }, example: "이 호텔 방은 넓어요.", exampleTranslations: { en: "This hotel room is spacious." }, audioUrl: null, status: "review" },
  { id: "L2-S6-W16", korean: "준비하다", partOfSpeech: "verb", translations: { en: "to prepare" }, example: "여행을 준비해요.", exampleTranslations: { en: "I prepare for the trip." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L2-S6-S01", korean: "여행을 가려고 호텔을 예약했어요.", translations: { en: "I booked a hotel in order to go on a trip." }, keyExpression: "-(으)려고", relatedWords: ["여행", "호텔", "예약하다"], audioUrl: null },
  { id: "L2-S6-S02", korean: "공항에 가려고 일찍 출발했어요.", translations: { en: "I departed early in order to go to the airport." }, keyExpression: "-(으)려고", relatedWords: ["공항", "일찍", "출발하다"], audioUrl: null },
  { id: "L2-S6-S03", korean: "저는 비행기를 타고 여행지에 도착했어요.", translations: { en: "I took an airplane and arrived at the destination." }, keyExpression: "-았/었어요", relatedWords: ["비행기", "타다", "여행지", "도착하다"], audioUrl: null },
  { id: "L2-S6-S04", korean: "저는 호텔에서 이틀 묵을 거예요.", translations: { en: "I will stay at the hotel for two days." }, keyExpression: "-(으)ㄹ 거예요", relatedWords: ["호텔", "묵다"], audioUrl: null },
  { id: "L2-S6-S05", korean: "저는 여행 계획을 준비해요.", translations: { en: "I prepare my travel plan." }, keyExpression: "준비해요", relatedWords: ["계획", "준비하다"], audioUrl: null },
  { id: "L2-S6-S06", korean: "짐을 싸고 공항으로 갈 거예요.", translations: { en: "I will pack my luggage and go to the airport." }, keyExpression: "-고", relatedWords: ["짐", "공항"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L2-S6-G01",
    pattern: "-(으)려고",
    meanings: { en: "in order to / intending to" },
    explanations: {
      en: "Attach -(으)려고 to a verb stem to say the purpose or intention behind another action.",
    },
    examples: [
      { korean: "여행을 가려고 호텔을 예약했어요.", translations: { en: "I booked a hotel in order to go on a trip." } },
      { korean: "공항에 가려고 일찍 출발했어요.", translations: { en: "I departed early in order to go to the airport." } },
      { korean: "표를 사려고 줄을 섰어요.", translations: { en: "I stood in line in order to buy a ticket." } },
    ],
  },
  {
    id: "L2-S6-G02",
    pattern: "-(으)ㄹ 거예요 (복습)",
    meanings: { en: "future tense (review)" },
    explanations: {
      en: "Keep using -(으)ㄹ 거예요 to talk about travel plans.",
    },
    examples: [
      { korean: "호텔에서 이틀 묵을 거예요.", translations: { en: "I will stay at the hotel for two days." } },
      { korean: "짐을 싸고 공항으로 갈 거예요.", translations: { en: "I will pack my luggage and go to the airport." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L2-S6-L01",
    audioText: "저는 호텔을 예약했어요.",
    audioUrl: null,
    question: "무엇을 예약했습니까?",
    options: ["비행기", "호텔", "표", "관광"],
    correctAnswer: 1,
    translations: { en: { question: "What did they book?", explanation: 'The sentence says "I booked a hotel," so the correct answer is 호텔.' } },
  },
  {
    id: "L2-S6-L02",
    audioText: "공항에 가려고 일찍 출발했어요.",
    audioUrl: null,
    question: "왜 일찍 출발했습니까?",
    options: ["학교에 가려고", "공항에 가려고", "회사에 가려고", "집에 가려고"],
    correctAnswer: 1,
    translations: { en: { question: "Why did they leave early?", explanation: 'The sentence says "in order to go to the airport," so the correct answer is 공항에 가려고.' } },
  },
  {
    id: "L2-S6-L03",
    audioText: "저는 비행기를 타고 여행지에 도착했어요. 호텔에서 이틀 묵을 거예요.",
    audioUrl: null,
    question: "호텔에서 며칠 묵을 겁니까?",
    options: ["하루", "이틀", "삼일", "일주일"],
    correctAnswer: 1,
    translations: { en: { question: "How many days will they stay at the hotel?", explanation: 'The sentence says "two days," so the correct answer is 이틀.' } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L2-S6-R01",
    passage: "저는 다음 주에 여행을 가요.\n비행기 표를 예약했어요.",
    question: "이 사람은 무엇을 예약했습니까?",
    options: ["호텔", "비행기 표", "기차표", "자동차"],
    correctAnswer: 1,
    translations: { en: { question: "What did this person book?", explanation: 'The passage says they booked a plane ticket, so the correct answer is 비행기 표.' } },
  },
  {
    id: "L2-S6-R02",
    passage: "저는 공항에 아침 일찍 도착했어요.\n비행기는 아홉 시에 출발해요.",
    question: "비행기는 몇 시에 출발합니까?",
    options: ["여덟 시", "아홉 시", "열 시", "일곱 시"],
    correctAnswer: 1,
    translations: { en: { question: "What time does the plane depart?", explanation: 'The passage says "at nine o\'clock," so the correct answer is 아홉 시.' } },
  },
  {
    id: "L2-S6-R03",
    passage: "저는 여행 계획을 세웠어요.\n먼저 호텔을 예약했어요.\n그 다음에 짐을 쌌어요.",
    question: "이 사람이 가장 먼저 한 일은 무엇입니까?",
    options: ["짐을 쌌어요", "호텔을 예약했어요", "계획을 세웠어요", "공항에 갔어요"],
    correctAnswer: 2,
    translations: { en: { question: "What did this person do first?", explanation: 'The passage says they made a plan first, so the correct answer is 계획을 세웠어요.' } },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L2-S6-P01", type: "vocabulary", question: '"호텔"의 뜻은 무엇입니까?', options: ["Hotel", "Airport", "Ticket", "Airplane"], correctAnswer: 0, explanation: { en: "호텔 means hotel." } },
  { id: "L2-S6-P02", type: "vocabulary", question: '"짐"의 뜻은 무엇입니까?', options: ["Plan", "Luggage", "Ticket", "Destination"], correctAnswer: 1, explanation: { en: "짐 means luggage." } },
  { id: "L2-S6-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n여행을 가___ 호텔을 예약했어요.", options: ["아서", "지만", "려고", "고"], correctAnswer: 2, explanation: { en: "-(으)려고 shows intention: 가려고." } },
  { id: "L2-S6-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n호텔에서 이틀 ______.", options: ["묵어요", "묵었어요", "묵으세요", "묵을 거예요"], correctAnswer: 3, explanation: { en: "-(으)ㄹ 거예요 marks a future plan: 묵을 거예요." } },
  { id: "L2-S6-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n저는 비행기를 ______ 여행지에 도착했어요.", options: ["타고", "타서", "타지만", "타려고"], correctAnswer: 0, explanation: { en: "-고 connects two actions: 타고 도착했어요." } },
  { id: "L2-S6-P06", type: "sentence", question: "호텔에 며칠 있을지 물을 때 하는 말은?", options: ["얼마예요?", "며칠 묵을 거예요?", "어디예요?", "누구예요?"], correctAnswer: 1, explanation: { en: "며칠 묵을 거예요? asks how many days someone will stay." } },
  { id: "L2-S6-P07", type: "vocabulary", question: "여행 가기 전에 옷과 물건을 넣는 것은?", options: ["예약해요", "계획해요", "짐을 싸요", "도착해요"], correctAnswer: 2, explanation: { en: "짐을 싸요 means to pack luggage." } },
  { id: "L2-S6-P08", type: "listening", audioText: "저는 호텔을 예약했어요.", question: "무엇을 예약했습니까?", options: ["비행기", "표", "관광", "호텔"], correctAnswer: 3, explanation: { en: 'The sentence says "I booked a hotel," so the answer is 호텔.' } },
  { id: "L2-S6-P09", type: "reading", passage: "비행기는 아홉 시에 출발해요.", question: "비행기는 언제 출발합니까?", options: ["아홉 시", "여덟 시", "열 시", "일곱 시"], correctAnswer: 0, explanation: { en: 'The passage says "at nine o\'clock," so the answer is 아홉 시.' } },
  { id: "L2-S6-P10", type: "reading", passage: "저는 호텔에서 이틀 묵을 거예요.", question: "며칠 묵을 겁니까?", options: ["하루", "이틀", "삼일", "나흘"], correctAnswer: 1, explanation: { en: 'The passage says "two days," so the answer is 이틀.' } },
];

export const STEP_2_6: StepContent = {
  level: 2,
  step: 6,
  title: "여행과 숙박 (Travel and Accommodation)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  practice: PRACTICE,
};
