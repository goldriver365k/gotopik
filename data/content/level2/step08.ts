// TOPIK 2 STEP 8 — Food and Cooking (음식과 요리).
// Real STEP content, independent of TOPIK1 and TOPIK2 STEP1-7's data files.
// 고기 (TOPIK1 L1-S4-W05), 씻다 (TOPIK2 L2-S1-W08), and 준비하다
// (TOPIK2 L2-S1-W09, already reused as review in STEP6) already exist as
// "new" — recarded here with status "review", not re-created as new.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L2-S8-W01", korean: "요리", partOfSpeech: "noun", translations: { en: "cooking / a dish" }, example: "저는 요리를 좋아해요.", exampleTranslations: { en: "I like cooking." }, audioUrl: null, status: "new" },
  { id: "L2-S8-W02", korean: "재료", partOfSpeech: "noun", translations: { en: "ingredient" }, example: "요리 재료를 사요.", exampleTranslations: { en: "I buy cooking ingredients." }, audioUrl: null, status: "new" },
  { id: "L2-S8-W03", korean: "채소", partOfSpeech: "noun", translations: { en: "vegetable" }, example: "채소를 먼저 씻어야 해요.", exampleTranslations: { en: "You should wash the vegetables first." }, audioUrl: null, status: "new" },
  { id: "L2-S8-W04", korean: "소금", partOfSpeech: "noun", translations: { en: "salt" }, example: "소금을 조금 넣어요.", exampleTranslations: { en: "I add a little salt." }, audioUrl: null, status: "new" },
  { id: "L2-S8-W05", korean: "설탕", partOfSpeech: "noun", translations: { en: "sugar" }, example: "설탕을 넣어요.", exampleTranslations: { en: "I add sugar." }, audioUrl: null, status: "new" },
  { id: "L2-S8-W06", korean: "기름", partOfSpeech: "noun", translations: { en: "oil" }, example: "기름을 넣고 볶아요.", exampleTranslations: { en: "I add oil and stir-fry." }, audioUrl: null, status: "new" },
  { id: "L2-S8-W07", korean: "냄비", partOfSpeech: "noun", translations: { en: "pot" }, example: "냄비에 물을 끓여요.", exampleTranslations: { en: "I boil water in the pot." }, audioUrl: null, status: "new" },
  { id: "L2-S8-W08", korean: "칼", partOfSpeech: "noun", translations: { en: "knife" }, example: "칼로 채소를 잘라요.", exampleTranslations: { en: "I cut vegetables with a knife." }, audioUrl: null, status: "new" },
  { id: "L2-S8-W09", korean: "자르다", partOfSpeech: "verb", translations: { en: "to cut" }, example: "고기를 잘라요.", exampleTranslations: { en: "I cut the meat." }, audioUrl: null, status: "new" },
  { id: "L2-S8-W10", korean: "끓이다", partOfSpeech: "verb", translations: { en: "to boil" }, example: "물을 끓여요.", exampleTranslations: { en: "I boil water." }, audioUrl: null, status: "new" },
  { id: "L2-S8-W11", korean: "넣다", partOfSpeech: "verb", translations: { en: "to put in / add" }, example: "소금을 넣어요.", exampleTranslations: { en: "I add salt." }, audioUrl: null, status: "new" },
  { id: "L2-S8-W12", korean: "만들다", partOfSpeech: "verb", translations: { en: "to make" }, example: "저는 음식을 만들어요.", exampleTranslations: { en: "I make food." }, audioUrl: null, status: "new" },
  { id: "L2-S8-W13", korean: "먼저", partOfSpeech: "noun", translations: { en: "first" }, example: "먼저 손을 씻어요.", exampleTranslations: { en: "First, I wash my hands." }, audioUrl: null, status: "new" },
  { id: "L2-S8-W14", korean: "마지막", partOfSpeech: "noun", translations: { en: "last / finally" }, example: "마지막에 소금을 넣어요.", exampleTranslations: { en: "Lastly, I add salt." }, audioUrl: null, status: "new" },
  { id: "L2-S8-W15", korean: "고기", partOfSpeech: "noun", translations: { en: "meat" }, example: "고기를 볶아요.", exampleTranslations: { en: "I stir-fry the meat." }, audioUrl: null, status: "review" },
  { id: "L2-S8-W16", korean: "씻다", partOfSpeech: "verb", translations: { en: "to wash" }, example: "채소를 씻어요.", exampleTranslations: { en: "I wash the vegetables." }, audioUrl: null, status: "review" },
  { id: "L2-S8-W17", korean: "준비하다", partOfSpeech: "verb", translations: { en: "to prepare" }, example: "재료를 준비해요.", exampleTranslations: { en: "I prepare the ingredients." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L2-S8-S01", korean: "채소를 먼저 씻어야 해요.", translations: { en: "You should wash the vegetables first." }, keyExpression: "-아/어야 하다", relatedWords: ["채소", "먼저", "씻다"], audioUrl: null },
  { id: "L2-S8-S02", korean: "저는 재료를 먼저 준비해야 해요.", translations: { en: "I should prepare the ingredients first." }, keyExpression: "-아/어야 하다", relatedWords: ["재료", "먼저", "준비하다"], audioUrl: null },
  { id: "L2-S8-S03", korean: "고기를 자르고 소금을 넣어요.", translations: { en: "I cut the meat and add salt." }, keyExpression: "-고", relatedWords: ["고기", "자르다", "소금"], audioUrl: null },
  { id: "L2-S8-S04", korean: "냄비에 물을 넣고 끓여요.", translations: { en: "I put water in the pot and boil it." }, keyExpression: "-고", relatedWords: ["냄비", "물", "넣다", "끓이다"], audioUrl: null },
  { id: "L2-S8-S05", korean: "저는 매일 음식을 만들어요.", translations: { en: "I make food every day." }, keyExpression: "만들어요", relatedWords: ["매일", "음식", "만들다"], audioUrl: null },
  { id: "L2-S8-S06", korean: "마지막에 설탕을 넣어야 해요.", translations: { en: "You should add sugar last." }, keyExpression: "-아/어야 하다", relatedWords: ["마지막", "설탕"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L2-S8-G01",
    pattern: "-아/어야 하다",
    meanings: { en: "must / have to" },
    explanations: {
      en: "Attach -아/어야 하다 to a verb stem to say something is necessary or required.",
    },
    examples: [
      { korean: "채소를 먼저 씻어야 해요.", translations: { en: "You should wash the vegetables first." } },
      { korean: "재료를 준비해야 해요.", translations: { en: "You should prepare the ingredients." } },
      { korean: "마지막에 설탕을 넣어야 해요.", translations: { en: "You should add sugar last." } },
    ],
  },
  {
    id: "L2-S8-G02",
    pattern: "-고 (복습)",
    meanings: { en: "and / and then (review, for cooking steps)" },
    explanations: {
      en: "Keep using -고 to connect cooking steps in order.",
    },
    examples: [
      { korean: "고기를 자르고 소금을 넣어요.", translations: { en: "I cut the meat and add salt." } },
      { korean: "냄비에 물을 넣고 끓여요.", translations: { en: "I put water in the pot and boil it." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L2-S8-L01",
    audioText: "채소를 먼저 씻어야 해요.",
    audioUrl: null,
    question: "채소로 무엇을 먼저 해야 합니까?",
    options: ["잘라요", "끓여요", "넣어요", "씻어요"],
    correctAnswer: 3,
    translations: { en: { question: "What should be done to the vegetables first?", explanation: 'The sentence says "wash first," so the correct answer is 씻어요.' } },
  },
  {
    id: "L2-S8-L02",
    audioText: "고기를 자르고 소금을 넣어요.",
    audioUrl: null,
    question: "고기를 자른 후에 무엇을 넣습니까?",
    options: ["설탕", "기름", "소금", "물"],
    correctAnswer: 2,
    translations: { en: { question: "What is added after cutting the meat?", explanation: 'The sentence says "add salt," so the correct answer is 소금.' } },
  },
  {
    id: "L2-S8-L03",
    audioText: "냄비에 물을 넣고 끓여요. 그 다음에 채소를 넣어요.",
    audioUrl: null,
    question: "물을 끓인 후에 무엇을 넣습니까?",
    options: ["고기", "기름", "소금", "채소"],
    correctAnswer: 3,
    translations: { en: { question: "What is added after boiling the water?", explanation: 'The sentence says "next, add vegetables," so the correct answer is 채소.' } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L2-S8-R01",
    passage: "저는 요리를 좋아해요.\n오늘은 채소 요리를 만들어요.",
    question: "오늘 무슨 요리를 만듭니까?",
    options: ["고기 요리", "면 요리", "생선 요리", "채소 요리"],
    correctAnswer: 3,
    translations: { en: { question: "What dish are they making today?", explanation: 'The passage says a vegetable dish, so the correct answer is 채소 요리.' } },
  },
  {
    id: "L2-S8-R02",
    passage: "먼저 재료를 준비해요.\n그 다음에 채소를 씻어요.\n마지막에 요리를 시작해요.",
    question: "이 사람이 가장 나중에 하는 일은 무엇입니까?",
    options: ["재료 준비", "채소 씻기", "요리 시작", "설거지"],
    correctAnswer: 2,
    translations: { en: { question: "What does this person do last?", explanation: 'The passage says they start cooking last, so the correct answer is 요리 시작.' } },
  },
  {
    id: "L2-S8-R03",
    passage: "냄비에 물을 넣어요.\n소금을 조금 넣어요.\n물을 끓여요.\n그 다음에 채소를 넣어요.",
    question: "소금을 넣은 후에 무엇을 합니까?",
    options: ["채소를 넣어요", "기름을 넣어요", "고기를 잘라요", "물을 끓여요"],
    correctAnswer: 3,
    translations: { en: { question: "What happens after adding salt?", explanation: 'The passage says they boil the water next, so the correct answer is 물을 끓여요.' } },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L2-S8-P01", type: "vocabulary", question: '"재료"의 뜻은 무엇입니까?', options: ["Ingredient", "Recipe", "Kitchen", "Knife"], correctAnswer: 0, explanation: { en: "재료 means ingredient." } },
  { id: "L2-S8-P02", type: "vocabulary", question: '"끓이다"의 뜻은 무엇입니까?', options: ["To cut", "To boil", "To add", "To wash"], correctAnswer: 1, explanation: { en: "끓이다 means to boil." } },
  { id: "L2-S8-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n채소를 먼저 ______.", options: ["씻어요", "씻었어요", "씻어야 해요", "씻고 있어요"], correctAnswer: 2, explanation: { en: "-아/어야 하다 shows necessity: 씻어야 해요." } },
  { id: "L2-S8-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n고기를 자르___ 소금을 넣어요.", options: ["아서", "지만", "려고", "고"], correctAnswer: 3, explanation: { en: "-고 connects two actions: 자르고 넣어요." } },
  { id: "L2-S8-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n냄비에 물을 넣고 ______.", options: ["끓여요", "잘라요", "넣어요", "만들어요"], correctAnswer: 0, explanation: { en: "끓여요 means to boil." } },
  { id: "L2-S8-P06", type: "sentence", question: "요리를 시작하기 전에 가장 먼저 하는 일은?", options: ["요리해요", "재료를 준비해요", "먹어요", "설거지해요"], correctAnswer: 1, explanation: { en: "재료를 준비해요 (preparing ingredients) comes first." } },
  { id: "L2-S8-P07", type: "vocabulary", question: "채소나 고기를 작게 나눌 때 사용하는 도구는?", options: ["냄비", "숟가락", "칼", "그릇"], correctAnswer: 2, explanation: { en: "칼 (knife) is used to cut vegetables or meat." } },
  { id: "L2-S8-P08", type: "listening", audioText: "채소를 먼저 씻어야 해요.", question: "채소로 무엇을 먼저 해야 합니까?", options: ["잘라요", "넣어요", "끓여요", "씻어요"], correctAnswer: 3, explanation: { en: 'The sentence says "wash first," so the answer is 씻어요.' } },
  { id: "L2-S8-P09", type: "reading", passage: "오늘은 채소 요리를 만들어요.", question: "오늘 무슨 요리를 만듭니까?", options: ["채소 요리", "고기 요리", "생선 요리", "면 요리"], correctAnswer: 0, explanation: { en: 'The passage says a vegetable dish, so the answer is 채소 요리.' } },
  { id: "L2-S8-P10", type: "reading", passage: "마지막에 설탕을 넣어요.", question: "설탕은 언제 넣습니까?", options: ["처음에", "마지막에", "중간에", "먼저"], correctAnswer: 1, explanation: { en: 'The passage says "last," so the answer is 마지막에.' } },
];

export const STEP_2_8: StepContent = {
  level: 2,
  step: 8,
  title: "음식과 요리 (Food and Cooking)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  practice: PRACTICE,
};
