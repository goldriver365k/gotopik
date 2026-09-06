// TOPIK 3 STEP 6 — Health Management (건강과 생활관리).
// Independent of TOPIK1/TOPIK2/TOPIK3 STEP1-5's data files.
// 스트레스, 규칙적 already exist as "new" (TOPIK2 STEP9) — recorded here
// with status "review". 충분히/적당히 share their root with 충분하다
// (TOPIK2 STEP9) and 적당하다 (TOPIK3 STEP4), so they are recorded as
// "review" too rather than fresh new words.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L3-S6-W01", korean: "생활습관", partOfSpeech: "noun", translations: { en: "lifestyle habit" }, example: "좋은 생활습관을 만들어요.", exampleTranslations: { en: "I build good lifestyle habits." }, audioUrl: null, status: "new" },
  { id: "L3-S6-W02", korean: "건강관리", partOfSpeech: "noun", translations: { en: "health management" }, example: "건강관리가 중요해요.", exampleTranslations: { en: "Health management is important." }, audioUrl: null, status: "new" },
  { id: "L3-S6-W03", korean: "식습관", partOfSpeech: "noun", translations: { en: "eating habit" }, example: "식습관을 바꿨어요.", exampleTranslations: { en: "I changed my eating habits." }, audioUrl: null, status: "new" },
  { id: "L3-S6-W04", korean: "휴식", partOfSpeech: "noun", translations: { en: "rest" }, example: "충분한 휴식이 필요해요.", exampleTranslations: { en: "Enough rest is necessary." }, audioUrl: null, status: "new" },
  { id: "L3-S6-W05", korean: "줄이다", partOfSpeech: "verb", translations: { en: "to reduce" }, example: "커피를 줄였어요.", exampleTranslations: { en: "I reduced my coffee intake." }, audioUrl: null, status: "new" },
  { id: "L3-S6-W06", korean: "늘리다", partOfSpeech: "verb", translations: { en: "to increase" }, example: "운동 시간을 늘렸어요.", exampleTranslations: { en: "I increased my exercise time." }, audioUrl: null, status: "new" },
  { id: "L3-S6-W07", korean: "유지하다", partOfSpeech: "verb", translations: { en: "to maintain" }, example: "건강을 유지하고 싶어요.", exampleTranslations: { en: "I want to maintain my health." }, audioUrl: null, status: "new" },
  { id: "L3-S6-W08", korean: "관리하다", partOfSpeech: "verb", translations: { en: "to manage" }, example: "건강을 관리해요.", exampleTranslations: { en: "I manage my health." }, audioUrl: null, status: "new" },
  { id: "L3-S6-W09", korean: "예방", partOfSpeech: "noun", translations: { en: "prevention" }, example: "감기 예방이 중요해요.", exampleTranslations: { en: "Preventing colds is important." }, audioUrl: null, status: "new" },
  { id: "L3-S6-W10", korean: "상태", partOfSpeech: "noun", translations: { en: "condition / state" }, example: "건강 상태가 좋아요.", exampleTranslations: { en: "My health condition is good." }, audioUrl: null, status: "new" },
  { id: "L3-S6-W11", korean: "기분", partOfSpeech: "noun", translations: { en: "mood" }, example: "운동을 하면 기분이 좋아져요.", exampleTranslations: { en: "If I exercise, my mood improves." }, audioUrl: null, status: "new" },
  { id: "L3-S6-W12", korean: "집중하다", partOfSpeech: "verb", translations: { en: "to concentrate" }, example: "일에 집중하기 어려워요.", exampleTranslations: { en: "It's hard to concentrate on work." }, audioUrl: null, status: "new" },
  { id: "L3-S6-W13", korean: "피로", partOfSpeech: "noun", translations: { en: "fatigue" }, example: "피로가 쌓였어요.", exampleTranslations: { en: "Fatigue has built up." }, audioUrl: null, status: "new" },
  { id: "L3-S6-W14", korean: "회복하다", partOfSpeech: "verb", translations: { en: "to recover" }, example: "푹 쉬어서 회복했어요.", exampleTranslations: { en: "I rested well and recovered." }, audioUrl: null, status: "new" },
  { id: "L3-S6-W15", korean: "균형", partOfSpeech: "noun", translations: { en: "balance" }, example: "균형 잡힌 식습관이 중요해요.", exampleTranslations: { en: "A balanced eating habit is important." }, audioUrl: null, status: "new" },
  { id: "L3-S6-W16", korean: "체력", partOfSpeech: "noun", translations: { en: "physical strength" }, example: "체력이 좋아졌어요.", exampleTranslations: { en: "My physical strength has improved." }, audioUrl: null, status: "new" },
  { id: "L3-S6-W17", korean: "실천하다", partOfSpeech: "verb", translations: { en: "to put into practice" }, example: "건강한 습관을 실천해요.", exampleTranslations: { en: "I put healthy habits into practice." }, audioUrl: null, status: "new" },
  { id: "L3-S6-W18", korean: "숙면", partOfSpeech: "noun", translations: { en: "sound sleep" }, example: "숙면을 취하는 게 중요해요.", exampleTranslations: { en: "Getting sound sleep is important." }, audioUrl: null, status: "new" },
  { id: "L3-S6-W19", korean: "스트레스", partOfSpeech: "noun", translations: { en: "stress" }, example: "스트레스를 줄이는 게 좋아요.", exampleTranslations: { en: "It's good to reduce stress." }, audioUrl: null, status: "review" },
  { id: "L3-S6-W20", korean: "규칙적", partOfSpeech: "noun", translations: { en: "regular / regularly" }, example: "규칙적으로 운동해요.", exampleTranslations: { en: "I exercise regularly." }, audioUrl: null, status: "review" },
  { id: "L3-S6-W21", korean: "충분히", partOfSpeech: "noun", translations: { en: "sufficiently" }, example: "잠을 충분히 자야 해요.", exampleTranslations: { en: "You should sleep enough." }, audioUrl: null, status: "review" },
  { id: "L3-S6-W22", korean: "적당히", partOfSpeech: "noun", translations: { en: "moderately" }, example: "운동은 적당히 하는 게 좋아요.", exampleTranslations: { en: "It's good to exercise moderately." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L3-S6-S01", korean: "건강하도록 매일 운동해요.", translations: { en: "I exercise every day so that I stay healthy." }, keyExpression: "-도록", relatedWords: ["운동"], audioUrl: null },
  { id: "L3-S6-S02", korean: "숙면을 취하도록 일찍 자요.", translations: { en: "I go to bed early so that I get sound sleep." }, keyExpression: "-도록", relatedWords: ["숙면", "일찍"], audioUrl: null },
  { id: "L3-S6-S03", korean: "스트레스를 줄이는 것이 좋아요.", translations: { en: "It's good to reduce stress." }, keyExpression: "-는 것이 좋다", relatedWords: ["스트레스", "줄이다"], audioUrl: null },
  { id: "L3-S6-S04", korean: "커피는 줄이고 물은 늘리는 게 좋아요.", translations: { en: "It's good to reduce coffee and increase water." }, keyExpression: "-는 게 좋다", relatedWords: ["줄이다", "늘리다"], audioUrl: null },
  { id: "L3-S6-S05", korean: "규칙적인 생활습관이 건강관리에 도움이 돼요.", translations: { en: "A regular lifestyle habit helps with health management." }, keyExpression: "규칙적", relatedWords: ["규칙적", "생활습관", "건강관리"], audioUrl: null },
  { id: "L3-S6-S06", korean: "운동을 하면 기분이 좋아지고 체력도 늘어요.", translations: { en: "If I exercise, my mood improves and my physical strength increases too." }, keyExpression: "-(으)면", relatedWords: ["기분", "체력"], audioUrl: null },
  { id: "L3-S6-S07", korean: "피곤할 때는 충분히 쉬어서 피로를 회복하는 게 좋아요.", translations: { en: "When you're tired, it's good to rest enough to recover from fatigue." }, keyExpression: "-는 게 좋다", relatedWords: ["피로", "회복하다", "충분히"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L3-S6-G01",
    pattern: "-도록",
    meanings: { en: "so that / in order to" },
    explanations: {
      en: "Attach -도록 to a verb/adjective stem to show the purpose or goal behind an action — doing something so that a certain result happens.",
    },
    examples: [
      { korean: "건강하도록 매일 운동해요.", translations: { en: "I exercise every day so that I stay healthy." } },
      { korean: "숙면을 취하도록 일찍 자요.", translations: { en: "I go to bed early so that I get sound sleep." } },
    ],
  },
  {
    id: "L3-S6-G02",
    pattern: "-는 것이 좋다",
    meanings: { en: "it's good to (review, compared with -는 게 좋다)" },
    explanations: {
      en: "-는 것이 좋다 is the fuller, slightly more formal form of -는 게 좋다 (STEP 5) — 것이 and 게 mean the same thing, so both give gentle advice.",
    },
    examples: [
      { korean: "스트레스를 줄이는 것이 좋아요.", translations: { en: "It's good to reduce stress." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L3-S6-L01",
    audioText: "요즘 피로가 쌓여서 힘들어요. 그래서 잠을 충분히 자려고 해요.",
    audioUrl: null,
    question: "이 사람은 피로를 풀기 위해 무엇을 하려고 합니까?",
    options: ["일을 그만두려고 해요", "커피를 마시려고 해요", "잠을 충분히 자려고 해요", "병원에 가려고 해요"],
    correctAnswer: 2,
    translations: { en: { question: "What do they intend to do to relieve fatigue?", explanation: 'The sentence says "sleep enough," so the correct answer is 잠을 충분히 자려고 해요.' } },
  },
  {
    id: "L3-S6-L02",
    audioText: "저는 스트레스를 줄이도록 매일 산책을 해요. 그러면 기분이 좋아져요.",
    audioUrl: null,
    question: "이 사람은 왜 매일 산책을 합니까?",
    options: ["스트레스를 줄이려고", "살을 빼려고", "친구를 만나려고", "시간이 남아서"],
    correctAnswer: 0,
    translations: { en: { question: "Why do they take a walk every day?", explanation: 'The sentence says "so that I reduce stress," so the correct answer is 스트레스를 줄이려고.' } },
  },
  {
    id: "L3-S6-L03",
    audioText: "건강을 유지하려면 규칙적인 생활습관이 중요해요. 식사도 균형 있게 하는 게 좋아요.",
    audioUrl: null,
    question: "건강을 유지하기 위해 무엇이 중요합니까?",
    options: ["긴 휴가", "규칙적인 생활습관", "많은 운동", "비싼 약"],
    correctAnswer: 1,
    translations: { en: { question: "What is important for maintaining health?", explanation: "The sentence says a regular lifestyle is important, so the correct answer is 규칙적인 생활습관." } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L3-S6-R01",
    passage:
      "건강을 관리하는 방법은 어렵지 않아요.\n첫째, 잠을 충분히 자는 게 좋아요.\n둘째, 식습관을 규칙적으로 유지하는 게 좋아요.\n셋째, 스트레스를 줄이도록 노력해야 해요.",
    question: "건강 관리를 위해 두 번째로 소개된 방법은 무엇입니까?",
    options: ["충분한 잠", "규칙적인 식습관", "스트레스 줄이기", "매일 운동하기"],
    correctAnswer: 1,
    translations: { en: { question: "What is the second method introduced for health management?", explanation: "The passage lists regular eating habits second, so the correct answer is 규칙적인 식습관." } },
  },
  {
    id: "L3-S6-R02",
    passage:
      "저는 요즘 일이 많아서 피로가 쌓였어요.\n그래서 주말에는 충분히 쉬려고 해요.\n휴식을 취하면 기분도 좋아지고 체력도 회복돼요.\n다음 주부터는 운동도 늘릴 계획이에요.",
    question: "이 사람은 왜 주말에 쉬려고 합니까?",
    options: ["날씨가 안 좋아서", "친구가 없어서", "피로가 쌓여서", "일이 없어서"],
    correctAnswer: 2,
    translations: { en: { question: "Why do they plan to rest this weekend?", explanation: "The passage says fatigue has built up, so the correct answer is 피로가 쌓여서." } },
  },
  {
    id: "L3-S6-R03",
    passage:
      "규칙적인 생활습관은 건강에 좋은 영향을 줘요.\n매일 같은 시간에 자고 일어나면 몸의 상태가 안정돼요.\n또한 적당히 운동하면 스트레스도 줄고 기분도 좋아져요.\n작은 습관을 꾸준히 실천하는 것이 중요해요.",
    question: "이 글에 따르면 무엇이 중요합니까?",
    options: ["잠을 적게 자는 것", "비싼 운동 기구를 사는 것", "병원에 자주 가는 것", "작은 습관을 꾸준히 실천하는 것"],
    correctAnswer: 3,
    translations: { en: { question: "According to this passage, what is important?", explanation: "The passage says practicing small habits consistently is important, so the correct answer is 작은 습관을 꾸준히 실천하는 것." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L3-S6-WR01",
    type: "keyword-writing",
    prompt: { en: "Write one sentence using all of the following words." },
    keywords: ["건강", "운동", "규칙적으로"],
    sampleAnswer: { en: "건강을 위해서 규칙적으로 운동해요." },
    explanation: { en: "규칙적으로 (regularly) pairs naturally with 운동하다 to describe a health habit." },
  },
  {
    id: "L3-S6-WR02",
    type: "short-response",
    prompt: { en: "Write about 3 sentences describing things you usually do for your health." },
    keywords: ["건강", "위해서", "매일"],
    sampleAnswer: { en: "저는 건강을 위해서 매일 아침에 운동해요. 그리고 잠을 충분히 자려고 해요. 스트레스를 줄이도록 주말에는 산책도 해요." },
    explanation: { en: "Try combining -기 위해서 (in order to) with -도록 (so that) to explain the purpose of each habit." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L3-S6-P01", type: "vocabulary", question: '"생활습관"의 뜻은 무엇입니까?', options: ["Mood", "Health condition", "Lifestyle habit", "Fatigue"], correctAnswer: 2, explanation: { en: "생활습관 means lifestyle habit." } },
  { id: "L3-S6-P02", type: "vocabulary", question: '"회복하다"의 뜻은 무엇입니까?', options: ["To reduce", "To worry", "To manage", "To recover"], correctAnswer: 3, explanation: { en: "회복하다 means to recover." } },
  { id: "L3-S6-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n건강하______ 매일 운동해요.", options: ["도록", "고 나서", "기 때문에", "는 동안"], correctAnswer: 0, explanation: { en: "-도록 shows purpose: 건강하도록." } },
  { id: "L3-S6-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n스트레스를 줄이는 ______ 좋아요.", options: ["것이", "곳이", "적이", "김에"], correctAnswer: 0, explanation: { en: "-는 것이 좋다 gives advice: 줄이는 것이 좋아요." } },
  { id: "L3-S6-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n잠을 ______ 자야 해요.", options: ["다시", "충분히", "미리", "갑자기"], correctAnswer: 1, explanation: { en: "충분히 means \"sufficiently.\"" } },
  { id: "L3-S6-P06", type: "vocabulary", question: "몸이 피곤해서 쌓인 것을 무엇이라고 합니까?", options: ["체력", "피로", "균형", "휴식"], correctAnswer: 1, explanation: { en: "피로 means fatigue." } },
  { id: "L3-S6-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n운동을 하면 ______도 좋아지고 체력도 늘어요.", options: ["관리", "예방", "기분", "상태"], correctAnswer: 2, explanation: { en: "기분 (mood) fits: 기분도 좋아지고." } },
  { id: "L3-S6-P08", type: "listening", audioText: "스트레스를 줄이도록 매일 산책을 해요.", question: "왜 매일 산책을 합니까?", options: ["잠이 안 와서", "살을 빼려고", "스트레스를 줄이려고", "친구를 만나려고"], correctAnswer: 2, explanation: { en: 'The sentence says "so that I reduce stress," so the answer is 스트레스를 줄이려고.' } },
  { id: "L3-S6-P09", type: "reading", passage: "건강을 유지하려면 규칙적인 생활습관이 중요해요.", question: "건강 유지에 중요한 것은 무엇입니까?", options: ["새 운동화", "비싼 약", "많은 휴가", "규칙적인 생활습관"], correctAnswer: 3, explanation: { en: 'The passage says a regular lifestyle is important, so the answer is 규칙적인 생활습관.' } },
  { id: "L3-S6-P10", type: "reading", passage: "작은 습관을 꾸준히 실천하는 것이 건강에 중요해요.", question: "이 글에서 중요하다고 말하는 것은 무엇입니까?", options: ["잠을 줄이는 것", "비싼 운동 기구", "병원에 자주 가는 것", "작은 습관을 꾸준히 실천하는 것"], correctAnswer: 3, explanation: { en: 'The passage says practicing small habits consistently is important, so the answer is 작은 습관을 꾸준히 실천하는 것.' } },
];

export const STEP_3_6: StepContent = {
  level: 3,
  step: 6,
  title: "건강과 생활관리 (Health Management)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
