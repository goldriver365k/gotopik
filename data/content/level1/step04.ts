// TOPIK 1 STEP 4 — Food and Restaurant (음식과 식당).
// Real STEP 4 curriculum content, independent of STEP 1-3's data files.
// 먹다 (W11) is a deliberate review word from STEP 1 (L1-S1-W04), recarded
// here in the food theme — status "review", per docs/content-rules.md.
// QA fix (Stage 21): 을/를 was already introduced as core grammar in
// STEP 3 — relabeled here as "을/를 (복습)" instead of a second new
// introduction; -아요/어요 remains this STEP's one genuinely new pattern.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  {
    id: "L1-S4-W01",
    korean: "음식",
    partOfSpeech: "noun",
    translations: { en: "food" },
    example: "이 음식은 맛있어요.",
    exampleTranslations: { en: "This food is delicious." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S4-W02",
    korean: "밥",
    partOfSpeech: "noun",
    translations: { en: "rice / a meal" },
    example: "저는 밥을 먹어요.",
    exampleTranslations: { en: "I eat a meal." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S4-W03",
    korean: "물",
    partOfSpeech: "noun",
    translations: { en: "water" },
    example: "저는 물을 마셔요.",
    exampleTranslations: { en: "I drink water." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S4-W04",
    korean: "커피",
    partOfSpeech: "noun",
    translations: { en: "coffee" },
    example: "저는 커피를 좋아해요.",
    exampleTranslations: { en: "I like coffee." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S4-W05",
    korean: "고기",
    partOfSpeech: "noun",
    translations: { en: "meat" },
    example: "저는 고기를 먹어요.",
    exampleTranslations: { en: "I eat meat." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S4-W06",
    korean: "김치",
    partOfSpeech: "noun",
    translations: { en: "kimchi" },
    example: "김치는 매워요.",
    exampleTranslations: { en: "Kimchi is spicy." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S4-W07",
    korean: "과일",
    partOfSpeech: "noun",
    translations: { en: "fruit" },
    example: "저는 과일을 좋아해요.",
    exampleTranslations: { en: "I like fruit." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S4-W08",
    korean: "식당",
    partOfSpeech: "noun",
    translations: { en: "restaurant" },
    example: "식당에서 밥을 먹어요.",
    exampleTranslations: { en: "I eat a meal at the restaurant." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S4-W09",
    korean: "메뉴",
    partOfSpeech: "noun",
    translations: { en: "menu" },
    example: "메뉴를 봐요.",
    exampleTranslations: { en: "I look at the menu." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S4-W10",
    korean: "주문하다",
    partOfSpeech: "verb",
    translations: { en: "to order" },
    example: "음식을 주문해요.",
    exampleTranslations: { en: "I order food." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S4-W11",
    korean: "먹다",
    partOfSpeech: "verb",
    translations: { en: "to eat" },
    example: "친구와 밥을 먹어요.",
    exampleTranslations: { en: "I eat a meal with my friend." },
    audioUrl: null,
    status: "review",
  },
  {
    id: "L1-S4-W12",
    korean: "마시다",
    partOfSpeech: "verb",
    translations: { en: "to drink" },
    example: "저는 물을 자주 마셔요.",
    exampleTranslations: { en: "I often drink water." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S4-W13",
    korean: "맛있다",
    partOfSpeech: "adjective",
    translations: { en: "delicious" },
    example: "이 식당 음식이 맛있어요.",
    exampleTranslations: { en: "This restaurant's food is delicious." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S4-W14",
    korean: "맵다",
    partOfSpeech: "adjective",
    translations: { en: "spicy" },
    example: "이 음식은 매워요.",
    exampleTranslations: { en: "This food is spicy." },
    audioUrl: null,
    status: "new",
  },
  {
    id: "L1-S4-W15",
    korean: "좋아하다",
    partOfSpeech: "verb",
    translations: { en: "to like" },
    example: "저는 한국 음식을 좋아해요.",
    exampleTranslations: { en: "I like Korean food." },
    audioUrl: null,
    status: "new",
  },
];

const SENTENCES: Sentence[] = [
  {
    id: "L1-S4-S01",
    korean: "저는 밥을 먹어요.",
    translations: { en: "I eat a meal." },
    keyExpression: "을 먹어요",
    relatedWords: ["밥", "먹다"],
    audioUrl: null,
  },
  {
    id: "L1-S4-S02",
    korean: "저는 물을 마셔요.",
    translations: { en: "I drink water." },
    keyExpression: "을 마셔요",
    relatedWords: ["물", "마시다"],
    audioUrl: null,
  },
  {
    id: "L1-S4-S03",
    korean: "이 음식은 맛있어요.",
    translations: { en: "This food is delicious." },
    keyExpression: "맛있어요",
    relatedWords: ["음식", "맛있다"],
    audioUrl: null,
  },
  {
    id: "L1-S4-S04",
    korean: "저는 커피를 좋아해요.",
    translations: { en: "I like coffee." },
    keyExpression: "를 좋아해요",
    relatedWords: ["커피", "좋아하다"],
    audioUrl: null,
  },
  {
    id: "L1-S4-S05",
    korean: "친구와 식당에서 밥을 먹어요.",
    translations: { en: "I eat a meal with my friend at the restaurant." },
    keyExpression: "에서",
    relatedWords: ["친구", "식당", "밥", "먹다"],
    audioUrl: null,
  },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L1-S4-G01",
    pattern: "을/를 (복습)",
    meanings: { en: "object marker (review)" },
    explanations: {
      en: "Keep using 을/를 after the object of a verb — 을 after a consonant, 를 after a vowel.",
    },
    examples: [
      { korean: "밥을 먹어요.", translations: { en: "I eat a meal." } },
      { korean: "물을 마셔요.", translations: { en: "I drink water." } },
      { korean: "커피를 좋아해요.", translations: { en: "I like coffee." } },
    ],
  },
  {
    id: "L1-S4-G02",
    pattern: "-아요/어요",
    meanings: { en: "polite present tense verb ending" },
    explanations: {
      en: "Attach -아요 or -어요 to a verb stem, depending on its last vowel, to make the polite present tense.",
    },
    examples: [
      { korean: "먹어요.", translations: { en: "I eat / They eat." } },
      { korean: "마셔요.", translations: { en: "I drink / They drink." } },
      { korean: "좋아해요.", translations: { en: "I like / They like it." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L1-S4-L01",
    audioText: "저는 김치를 좋아해요.",
    audioUrl: null,
    question: "저는 무엇을 좋아합니까?",
    options: ["커피", "김치", "물", "고기"],
    correctAnswer: 1,
    translations: {
      en: {
        question: "What do they like?",
        explanation: 'The sentence says "I like kimchi," so the correct answer is 김치 (kimchi).',
      },
    },
  },
  {
    id: "L1-S4-L02",
    audioText: "이 식당은 맛있어요.",
    audioUrl: null,
    question: "식당이 어때요?",
    options: ["맛있어요", "비싸요", "커요", "작아요"],
    correctAnswer: 0,
    translations: {
      en: {
        question: "How is the restaurant?",
        explanation: 'The sentence says "This restaurant is delicious," so the correct answer is 맛있어요.',
      },
    },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L1-S4-R01",
    passage: "저는 식당에 가요.\n저는 밥과 고기를 먹어요.",
    question: "저는 무엇을 먹습니까?",
    options: ["과일", "밥과 고기", "커피", "김치"],
    correctAnswer: 1,
    translations: {
      en: {
        question: "What do they eat?",
        explanation: 'The passage says "I eat rice and meat," so the correct answer is 밥과 고기.',
      },
    },
  },
  {
    id: "L1-S4-R02",
    passage: "민수는 커피를 좋아해요.\n민수는 커피를 자주 마셔요.",
    question: "민수는 무엇을 좋아합니까?",
    options: ["물", "김치", "커피", "과일"],
    correctAnswer: 2,
    translations: {
      en: {
        question: "What does Minsu like?",
        explanation: 'The passage says "Minsu likes coffee," so the correct answer is 커피.',
      },
    },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  {
    id: "L1-S4-P01",
    type: "vocabulary",
    question: '"음식"의 뜻은 무엇입니까?',
    options: ["Food", "Water", "Menu", "Fruit"],
    correctAnswer: 0,
    explanation: { en: "음식 means food." },
  },
  {
    id: "L1-S4-P02",
    type: "vocabulary",
    question: '"메뉴"의 뜻은 무엇입니까?',
    options: ["Restaurant", "Order", "Meat", "Menu"],
    correctAnswer: 3,
    explanation: { en: "메뉴 means menu." },
  },
  {
    id: "L1-S4-P03",
    type: "grammar",
    question: "빈칸에 알맞은 것을 고르세요.\n밥___ 먹어요.",
    options: ["이", "을", "에서", "와"],
    correctAnswer: 1,
    explanation: { en: "Use 을 after 밥 to mark it as the object: 밥을 먹어요." },
  },
  {
    id: "L1-S4-P04",
    type: "grammar",
    question: "빈칸에 알맞은 것을 고르세요.\n커피___ 좋아해요.",
    options: ["이", "을", "를", "에"],
    correctAnswer: 2,
    explanation: { en: "Use 를 after 커피 to mark it as the object: 커피를 좋아해요." },
  },
  {
    id: "L1-S4-P05",
    type: "sentence",
    question: "빈칸에 알맞은 것을 고르세요.\n이 음식은 ______.",
    options: ["맛있어요", "먹어요", "마셔요", "좋아해요"],
    correctAnswer: 0,
    explanation: { en: "맛있어요 describes food as delicious." },
  },
  {
    id: "L1-S4-P06",
    type: "vocabulary",
    question: "식당에서 음식을 주문할 때 무엇을 봅니까?",
    options: ["책", "시험", "숙제", "메뉴"],
    correctAnswer: 3,
    explanation: { en: "You look at the 메뉴 (menu) before ordering food." },
  },
  {
    id: "L1-S4-P07",
    type: "reading",
    passage: "저는 식당에서 밥을 먹어요.",
    question: "저는 어디에서 밥을 먹습니까?",
    options: ["집", "식당", "학교", "회사"],
    correctAnswer: 1,
    explanation: { en: 'The passage says "I eat a meal at the restaurant," so the answer is 식당.' },
  },
  {
    id: "L1-S4-P08",
    type: "listening",
    audioText: "저는 고기를 안 좋아해요. 저는 과일을 좋아해요.",
    question: "저는 무엇을 좋아합니까?",
    options: ["고기", "김치", "과일", "물"],
    correctAnswer: 2,
    explanation: { en: 'The sentence says "I like fruit," so the answer is 과일.' },
  },
];

export const STEP_1_4: StepContent = {
  level: 1,
  step: 4,
  title: "음식과 식당 (Food and Restaurant)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  practice: PRACTICE,
};
