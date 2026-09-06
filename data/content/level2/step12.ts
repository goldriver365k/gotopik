// TOPIK 2 STEP 12 — Culture and Events (문화와 행사).
// Real STEP content, independent of TOPIK1 and TOPIK2 STEP1-11's data files.
// 생일, 모임, 준비하다 already exist as "new" — recorded here with status
// "review". 초대 (noun) is a distinct word from 초대하다 (verb, already
// "new" in TOPIK1 STEP9) and is treated as new here, matching the existing
// noun/verb-pair precedent (e.g. 약속/약속하다).
// QA fix (Stage 21): -아/어 보다 was already introduced as core grammar in
// STEP 7 — relabeled here as "-아/어 보다 (복습)" instead of a second new
// introduction; 때 remains this STEP's one genuinely new pattern.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L2-S12-W01", korean: "축제", partOfSpeech: "noun", translations: { en: "festival" }, example: "이번 주에 축제가 있어요.", exampleTranslations: { en: "There's a festival this week." }, audioUrl: null, status: "new" },
  { id: "L2-S12-W02", korean: "행사", partOfSpeech: "noun", translations: { en: "event" }, example: "학교에서 행사를 해요.", exampleTranslations: { en: "The school is holding an event." }, audioUrl: null, status: "new" },
  { id: "L2-S12-W03", korean: "선물", partOfSpeech: "noun", translations: { en: "gift" }, example: "친구에게 선물을 줘요.", exampleTranslations: { en: "I give a gift to my friend." }, audioUrl: null, status: "new" },
  { id: "L2-S12-W04", korean: "파티", partOfSpeech: "noun", translations: { en: "party" }, example: "파티에 가요.", exampleTranslations: { en: "I'm going to a party." }, audioUrl: null, status: "new" },
  { id: "L2-S12-W05", korean: "초대", partOfSpeech: "noun", translations: { en: "invitation" }, example: "초대를 받았어요.", exampleTranslations: { en: "I received an invitation." }, audioUrl: null, status: "new" },
  { id: "L2-S12-W06", korean: "기념일", partOfSpeech: "noun", translations: { en: "anniversary" }, example: "오늘은 우리 기념일이에요.", exampleTranslations: { en: "Today is our anniversary." }, audioUrl: null, status: "new" },
  { id: "L2-S12-W07", korean: "전통", partOfSpeech: "noun", translations: { en: "tradition" }, example: "한국 전통 음식이에요.", exampleTranslations: { en: "It's a traditional Korean food." }, audioUrl: null, status: "new" },
  { id: "L2-S12-W08", korean: "문화", partOfSpeech: "noun", translations: { en: "culture" }, example: "한국 문화를 배워요.", exampleTranslations: { en: "I'm learning Korean culture." }, audioUrl: null, status: "new" },
  { id: "L2-S12-W09", korean: "공연", partOfSpeech: "noun", translations: { en: "performance" }, example: "공연을 보러 가요.", exampleTranslations: { en: "I'm going to see a performance." }, audioUrl: null, status: "new" },
  { id: "L2-S12-W10", korean: "참가하다", partOfSpeech: "verb", translations: { en: "to participate" }, example: "축제에 참가해요.", exampleTranslations: { en: "I'm participating in the festival." }, audioUrl: null, status: "new" },
  { id: "L2-S12-W11", korean: "축하하다", partOfSpeech: "verb", translations: { en: "to congratulate" }, example: "생일을 축하해요.", exampleTranslations: { en: "I congratulate you on your birthday." }, audioUrl: null, status: "new" },
  { id: "L2-S12-W12", korean: "즐겁다", partOfSpeech: "adjective", translations: { en: "enjoyable / pleasant" }, example: "파티가 즐거워요.", exampleTranslations: { en: "The party is enjoyable." }, audioUrl: null, status: "new" },
  { id: "L2-S12-W13", korean: "특별하다", partOfSpeech: "adjective", translations: { en: "special" }, example: "오늘은 특별한 날이에요.", exampleTranslations: { en: "Today is a special day." }, audioUrl: null, status: "new" },
  { id: "L2-S12-W14", korean: "경험", partOfSpeech: "noun", translations: { en: "experience" }, example: "좋은 경험이었어요.", exampleTranslations: { en: "It was a good experience." }, audioUrl: null, status: "new" },
  { id: "L2-S12-W15", korean: "생일", partOfSpeech: "noun", translations: { en: "birthday" }, example: "오늘은 제 생일이에요.", exampleTranslations: { en: "Today is my birthday." }, audioUrl: null, status: "review" },
  { id: "L2-S12-W16", korean: "모임", partOfSpeech: "noun", translations: { en: "gathering" }, example: "친구 모임에 가요.", exampleTranslations: { en: "I'm going to a friend gathering." }, audioUrl: null, status: "review" },
  { id: "L2-S12-W17", korean: "준비하다", partOfSpeech: "verb", translations: { en: "to prepare" }, example: "파티를 준비해요.", exampleTranslations: { en: "I'm preparing a party." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L2-S12-S01", korean: "한국 음식을 먹어 봤어요.", translations: { en: "I've tried Korean food." }, keyExpression: "-아/어 보다", relatedWords: ["음식"], audioUrl: null },
  { id: "L2-S12-S02", korean: "이 축제에 참가해 봤어요.", translations: { en: "I've participated in this festival before." }, keyExpression: "-아/어 보다", relatedWords: ["축제", "참가하다"], audioUrl: null },
  { id: "L2-S12-S03", korean: "생일 때 친구를 초대했어요.", translations: { en: "I invited my friend for my birthday." }, keyExpression: "때", relatedWords: ["생일", "초대"], audioUrl: null },
  { id: "L2-S12-S04", korean: "기념일 때 특별한 선물을 줬어요.", translations: { en: "I gave a special gift for the anniversary." }, keyExpression: "때", relatedWords: ["기념일", "특별하다", "선물"], audioUrl: null },
  { id: "L2-S12-S05", korean: "전통 공연을 보고 좋은 경험을 했어요.", translations: { en: "I watched a traditional performance and had a good experience." }, keyExpression: "-고", relatedWords: ["전통", "공연", "경험"], audioUrl: null },
  { id: "L2-S12-S06", korean: "파티는 즐거웠어요. 그래서 다음에도 가고 싶어요.", translations: { en: "The party was enjoyable. So I want to go again next time." }, keyExpression: "즐겁다", relatedWords: ["파티", "즐겁다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L2-S12-G01",
    pattern: "-아/어 보다 (복습)",
    meanings: { en: "to try doing something (review)" },
    explanations: {
      en: "Keep using -아/어 보다 to talk about trying or having tried something, now for festivals and food.",
    },
    examples: [
      { korean: "한국 음식을 먹어 봤어요.", translations: { en: "I've tried Korean food." } },
      { korean: "이 축제에 참가해 봤어요.", translations: { en: "I've participated in this festival before." } },
    ],
  },
  {
    id: "L2-S12-G02",
    pattern: "때",
    meanings: { en: "when / at the time of" },
    explanations: {
      en: "때 follows a noun or verb to mean \"when\" or \"at the time of\" something.",
    },
    examples: [
      { korean: "생일 때 친구를 초대했어요.", translations: { en: "I invited my friend for my birthday." } },
      { korean: "기념일 때 특별한 선물을 줬어요.", translations: { en: "I gave a special gift for the anniversary." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L2-S12-L01",
    audioText: "저는 이 축제에 작년에 참가해 봤어요.",
    audioUrl: null,
    question: "이 사람은 무엇을 해 봤습니까?",
    options: ["공연 준비", "축제 참가", "선물 구매", "파티 준비"],
    correctAnswer: 1,
    translations: { en: { question: "What has this person tried?", explanation: 'The sentence says "participated in the festival," so the correct answer is 축제 참가.' } },
  },
  {
    id: "L2-S12-L02",
    audioText: "생일 때 친구들을 초대해서 파티를 했어요.",
    audioUrl: null,
    question: "생일 때 무엇을 했습니까?",
    options: ["여행을 갔어요", "친구들을 초대해서 파티를 했어요", "혼자 쉬었어요", "일을 했어요"],
    correctAnswer: 1,
    translations: { en: { question: "What did they do on their birthday?", explanation: "The sentence says they invited friends and had a party, so the correct answer is 친구들을 초대해서 파티를 했어요." } },
  },
  {
    id: "L2-S12-L03",
    audioText: "이 공연은 한국 전통 문화를 보여 줘요. 아주 특별해요.",
    audioUrl: null,
    question: "이 공연은 어떻습니까?",
    options: ["지루해요", "특별해요", "짧아요", "비싸요"],
    correctAnswer: 1,
    translations: { en: { question: "What is this performance like?", explanation: "The sentence says it is very special, so the correct answer is 특별해요." } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L2-S12-R01",
    passage: "이번 주말에 학교에서 축제가 있어요.\n전통 공연도 볼 수 있어요.",
    question: "이번 주말에 무엇이 있습니까?",
    options: ["회의", "축제", "시험", "여행"],
    correctAnswer: 1,
    translations: { en: { question: "What is happening this weekend?", explanation: "The passage says there's a festival, so the correct answer is 축제." } },
  },
  {
    id: "L2-S12-R02",
    passage: "생일 파티에 친구를 초대했어요.\n친구에게 특별한 선물을 줬어요.",
    question: "친구에게 무엇을 줬습니까?",
    options: ["편지", "선물", "돈", "음식"],
    correctAnswer: 1,
    translations: { en: { question: "What did they give their friend?", explanation: "The passage says they gave a special gift, so the correct answer is 선물." } },
  },
  {
    id: "L2-S12-R03",
    passage: "저는 지난달에 한국 전통 축제에 참가해 봤어요.\n전통 공연도 보고 전통 음식도 먹어 봤어요.\n정말 즐겁고 특별한 경험이었어요.",
    question: "이 사람의 경험은 어땠습니까?",
    options: ["지루했어요", "즐겁고 특별했어요", "너무 바빴어요", "위험했어요"],
    correctAnswer: 1,
    translations: { en: { question: "How was this person's experience?", explanation: "The passage says it was enjoyable and special, so the correct answer is 즐겁고 특별했어요." } },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L2-S12-P01", type: "vocabulary", question: '"축제"의 뜻은 무엇입니까?', options: ["Meeting", "Festival", "Document", "Schedule"], correctAnswer: 1, explanation: { en: "축제 means festival." } },
  { id: "L2-S12-P02", type: "vocabulary", question: '"경험"의 뜻은 무엇입니까?', options: ["Experience", "Tradition", "Culture", "Performance"], correctAnswer: 0, explanation: { en: "경험 means experience." } },
  { id: "L2-S12-P03", type: "vocabulary", question: "생일이나 기념일에 주는 것은?", options: ["번호표", "선물", "서류", "일정"], correctAnswer: 1, explanation: { en: "선물 means gift." } },
  { id: "L2-S12-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n한국 음식을 ______.", options: ["먹어 봤어요", "먹고 있어요", "먹을 거예요", "먹지 마세요"], correctAnswer: 0, explanation: { en: "-아/어 보다 means to have tried: 먹어 봤어요." } },
  { id: "L2-S12-P05", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n생일 ______ 친구를 초대했어요.", options: ["때", "동안", "후에", "때문에"], correctAnswer: 0, explanation: { en: "때 means \"at the time of\": 생일 때." } },
  { id: "L2-S12-P06", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n이 축제에 ______.", options: ["참가해 봤어요", "참가하지 마세요", "참가할 수 없어요", "참가해야 해요"], correctAnswer: 0, explanation: { en: "-아/어 보다 describes a tried experience: 참가해 봤어요." } },
  { id: "L2-S12-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n파티가 정말 ______.", options: ["즐거웠어요", "바빴어요", "필요했어요", "특별했어요에요"], correctAnswer: 0, explanation: { en: "즐거웠어요 means it was enjoyable." } },
  { id: "L2-S12-P08", type: "listening", audioText: "생일 때 친구들을 초대해서 파티를 했어요.", question: "생일 때 무엇을 했습니까?", options: ["여행을 갔어요", "혼자 쉬었어요", "파티를 했어요", "일을 했어요"], correctAnswer: 2, explanation: { en: 'The sentence says "had a party," so the answer is 파티를 했어요.' } },
  { id: "L2-S12-P09", type: "reading", passage: "이번 주말에 학교에서 축제가 있어요.", question: "이번 주말에 무엇이 있습니까?", options: ["시험", "축제", "회의", "여행"], correctAnswer: 1, explanation: { en: 'The passage says "there is a festival," so the answer is 축제.' } },
  { id: "L2-S12-P10", type: "reading", passage: "전통 공연을 보고 정말 즐겁고 특별한 경험을 했어요.", question: "이 사람은 무엇을 했습니까?", options: ["전통 공연을 봤어요", "서류를 작성했어요", "회의에 참석했어요", "약을 먹었어요"], correctAnswer: 0, explanation: { en: 'The passage says "watched a traditional performance," so the answer is 전통 공연을 봤어요.' } },
];

export const STEP_2_12: StepContent = {
  level: 2,
  step: 12,
  title: "문화와 행사 (Culture and Events)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  practice: PRACTICE,
};
