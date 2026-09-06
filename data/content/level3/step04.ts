// TOPIK 3 STEP 4 — Comparison and Choice (비교와 선택).
// Independent of TOPIK1/TOPIK2/TOPIK3 STEP1-3's data files.
// 선택, 결정하다, 고르다 already exist as "new" (TOPIK3 STEP2/3, TOPIK2
// STEP7) — recorded here with status "review". 다르다 shares its root
// with 다른 (already "new" in TOPIK1), so it is recorded as "review" too,
// not a fresh new word.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L3-S4-W01", korean: "비교", partOfSpeech: "noun", translations: { en: "comparison" }, example: "가격 비교를 해 봤어요.", exampleTranslations: { en: "I compared the prices." }, audioUrl: null, status: "new" },
  { id: "L3-S4-W02", korean: "장점", partOfSpeech: "noun", translations: { en: "advantage" }, example: "이 방법의 장점은 빠르다는 거예요.", exampleTranslations: { en: "This method's advantage is that it's fast." }, audioUrl: null, status: "new" },
  { id: "L3-S4-W03", korean: "단점", partOfSpeech: "noun", translations: { en: "disadvantage" }, example: "가격이 비싼 게 단점이에요.", exampleTranslations: { en: "The high price is a disadvantage." }, audioUrl: null, status: "new" },
  { id: "L3-S4-W04", korean: "차이", partOfSpeech: "noun", translations: { en: "difference" }, example: "두 제품은 가격 차이가 커요.", exampleTranslations: { en: "The two products have a big price difference." }, audioUrl: null, status: "new" },
  { id: "L3-S4-W05", korean: "종류", partOfSpeech: "noun", translations: { en: "type / kind" }, example: "여러 종류가 있어요.", exampleTranslations: { en: "There are several kinds." }, audioUrl: null, status: "new" },
  { id: "L3-S4-W06", korean: "방법", partOfSpeech: "noun", translations: { en: "method" }, example: "더 좋은 방법이 있어요.", exampleTranslations: { en: "There's a better method." }, audioUrl: null, status: "new" },
  { id: "L3-S4-W07", korean: "편리하다", partOfSpeech: "adjective", translations: { en: "convenient" }, example: "지하철이 더 편리해요.", exampleTranslations: { en: "The subway is more convenient." }, audioUrl: null, status: "new" },
  { id: "L3-S4-W08", korean: "불편하다", partOfSpeech: "adjective", translations: { en: "inconvenient" }, example: "버스는 조금 불편해요.", exampleTranslations: { en: "The bus is a bit inconvenient." }, audioUrl: null, status: "new" },
  { id: "L3-S4-W09", korean: "빠르다", partOfSpeech: "adjective", translations: { en: "fast" }, example: "지하철이 버스보다 빨라요.", exampleTranslations: { en: "The subway is faster than the bus." }, audioUrl: null, status: "new" },
  { id: "L3-S4-W10", korean: "느리다", partOfSpeech: "adjective", translations: { en: "slow" }, example: "이 방법은 조금 느려요.", exampleTranslations: { en: "This method is a bit slow." }, audioUrl: null, status: "new" },
  { id: "L3-S4-W11", korean: "중요하다", partOfSpeech: "adjective", translations: { en: "important" }, example: "가격보다 품질이 중요해요.", exampleTranslations: { en: "Quality is more important than price." }, audioUrl: null, status: "new" },
  { id: "L3-S4-W12", korean: "적당하다", partOfSpeech: "adjective", translations: { en: "reasonable / suitable" }, example: "이 가격이 적당해요.", exampleTranslations: { en: "This price is reasonable." }, audioUrl: null, status: "new" },
  { id: "L3-S4-W13", korean: "비슷하다", partOfSpeech: "adjective", translations: { en: "similar" }, example: "두 제품이 비슷해요.", exampleTranslations: { en: "The two products are similar." }, audioUrl: null, status: "new" },
  { id: "L3-S4-W14", korean: "고르다", partOfSpeech: "verb", translations: { en: "to pick / choose" }, example: "저는 이 색을 골랐어요.", exampleTranslations: { en: "I picked this color." }, audioUrl: null, status: "review" },
  { id: "L3-S4-W15", korean: "추천하다", partOfSpeech: "verb", translations: { en: "to recommend" }, example: "이 가방을 추천해요.", exampleTranslations: { en: "I recommend this bag." }, audioUrl: null, status: "new" },
  { id: "L3-S4-W16", korean: "기준", partOfSpeech: "noun", translations: { en: "standard / criteria" }, example: "가격을 기준으로 선택했어요.", exampleTranslations: { en: "I chose based on price as the standard." }, audioUrl: null, status: "new" },
  { id: "L3-S4-W17", korean: "품질", partOfSpeech: "noun", translations: { en: "quality" }, example: "품질이 좋아요.", exampleTranslations: { en: "The quality is good." }, audioUrl: null, status: "new" },
  { id: "L3-S4-W18", korean: "다양하다", partOfSpeech: "adjective", translations: { en: "various" }, example: "종류가 다양해요.", exampleTranslations: { en: "There are various kinds." }, audioUrl: null, status: "new" },
  { id: "L3-S4-W19", korean: "선호하다", partOfSpeech: "verb", translations: { en: "to prefer" }, example: "저는 편리한 방법을 선호해요.", exampleTranslations: { en: "I prefer the convenient method." }, audioUrl: null, status: "new" },
  { id: "L3-S4-W20", korean: "선택", partOfSpeech: "noun", translations: { en: "choice" }, example: "좋은 선택이었어요.", exampleTranslations: { en: "It was a good choice." }, audioUrl: null, status: "review" },
  { id: "L3-S4-W21", korean: "다르다", partOfSpeech: "adjective", translations: { en: "different" }, example: "두 방법이 서로 달라요.", exampleTranslations: { en: "The two methods are different from each other." }, audioUrl: null, status: "review" },
  { id: "L3-S4-W22", korean: "결정하다", partOfSpeech: "verb", translations: { en: "to decide" }, example: "저는 이 가방으로 결정했어요.", exampleTranslations: { en: "I decided on this bag." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L3-S4-S01", korean: "이 세 가지 중에서 이 가방이 제일 좋아요.", translations: { en: "Among these three, this bag is the best." }, keyExpression: "중에서", relatedWords: ["가방"], audioUrl: null },
  { id: "L3-S4-S02", korean: "버스를 타는 것보다 지하철을 타는 것이 더 빨라요.", translations: { en: "Taking the subway is faster than taking the bus." }, keyExpression: "-는 것이 더", relatedWords: ["버스", "지하철", "빠르다"], audioUrl: null },
  { id: "L3-S4-S03", korean: "이 제품은 저 제품보다 비싸지만 품질이 더 좋아요.", translations: { en: "This product is more expensive than that one, but the quality is better." }, keyExpression: "-보다", relatedWords: ["비싸다", "품질"], audioUrl: null },
  { id: "L3-S4-S04", korean: "가격과 품질 중에서 무엇이 더 중요해요?", translations: { en: "Between price and quality, which is more important?" }, keyExpression: "중에서", relatedWords: ["중요하다", "품질"], audioUrl: null },
  { id: "L3-S4-S05", korean: "이 두 색은 비슷하지만 조금 달라요.", translations: { en: "These two colors are similar, but a little different." }, keyExpression: "비슷하다", relatedWords: ["비슷하다", "다르다"], audioUrl: null },
  { id: "L3-S4-S06", korean: "저는 가격을 기준으로 물건을 골라요.", translations: { en: "I choose things based on price as my standard." }, keyExpression: "기준", relatedWords: ["기준", "고르다"], audioUrl: null },
  { id: "L3-S4-S07", korean: "직원이 이 방법을 추천해 줬어요.", translations: { en: "The staff recommended this method to me." }, keyExpression: "추천하다", relatedWords: ["방법", "추천하다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L3-S4-G01",
    pattern: "중에서",
    meanings: { en: "among / out of (a group)" },
    explanations: {
      en: "중에서 follows a noun listing options to mark the group something is chosen from.",
    },
    examples: [
      { korean: "이 세 가지 중에서 이 가방이 제일 좋아요.", translations: { en: "Among these three, this bag is the best." } },
      { korean: "가격과 품질 중에서 무엇이 더 중요해요?", translations: { en: "Between price and quality, which is more important?" } },
    ],
  },
  {
    id: "L3-S4-G02",
    pattern: "-는 것이 더",
    meanings: { en: "doing ~ is more (comparison between two actions)" },
    explanations: {
      en: "Attach -는 것이 더 to a verb stem to compare two actions and say one is more of something than the other.",
    },
    examples: [
      { korean: "버스를 타는 것보다 지하철을 타는 것이 더 빨라요.", translations: { en: "Taking the subway is faster than taking the bus." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L3-S4-L01",
    audioText: "가: 이 두 가방 중에서 어느 것이 좋아요? 나: 이 가방이 더 편리해요. 그래서 이걸로 골랐어요.",
    audioUrl: null,
    question: "이 사람은 왜 이 가방을 골랐습니까?",
    options: ["더 싸서", "더 예뻐서", "더 편리해서", "친구가 추천해서"],
    correctAnswer: 2,
    translations: { en: { question: "Why did they pick this bag?", explanation: 'The reply says "it\'s more convenient," so the correct answer is 더 편리해서.' } },
  },
  {
    id: "L3-S4-L02",
    audioText: "버스는 지하철보다 느리지만 요금이 더 싸요. 저는 시간이 있어서 버스를 탈 거예요.",
    audioUrl: null,
    question: "이 사람은 왜 버스를 탈 겁니까?",
    options: ["시간이 있어서", "더 빨라서", "지하철이 없어서", "친구와 같이 가서"],
    correctAnswer: 0,
    translations: { en: { question: "Why will they take the bus?", explanation: 'The sentence says "I have time," so the correct answer is 시간이 있어서.' } },
  },
  {
    id: "L3-S4-L03",
    audioText: "이 두 제품은 가격이 비슷해요. 하지만 이 제품이 품질이 더 좋아서 이것을 추천해요.",
    audioUrl: null,
    question: "왜 이 제품을 추천합니까?",
    options: ["가격이 더 싸서", "품질이 더 좋아서", "디자인이 예뻐서", "인기가 많아서"],
    correctAnswer: 1,
    translations: { en: { question: "Why is this product recommended?", explanation: 'The sentence says "the quality is better," so the correct answer is 품질이 더 좋아서.' } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L3-S4-R01",
    passage:
      "이 가게에는 가방 종류가 다양해요.\n가격이 싼 가방도 있고 비싼 가방도 있어요.\n비싼 가방은 품질이 더 좋아요.\n저는 가격과 품질을 비교한 후에 적당한 가방을 골랐어요.",
    question: "이 사람은 무엇을 기준으로 가방을 골랐습니까?",
    options: ["브랜드", "디자인", "색깔", "가격과 품질"],
    correctAnswer: 3,
    translations: { en: { question: "What standard did they use to choose the bag?", explanation: "The passage says they compared price and quality, so the correct answer is 가격과 품질." } },
  },
  {
    id: "L3-S4-R02",
    passage:
      "온라인 쇼핑과 매장 쇼핑은 각각 장점이 있어요.\n온라인 쇼핑은 편리하지만 물건을 직접 볼 수 없어요.\n매장 쇼핑은 조금 불편하지만 물건을 직접 확인할 수 있어요.",
    question: "매장 쇼핑의 장점은 무엇입니까?",
    options: ["더 빨라요", "더 편리해요", "물건을 직접 확인할 수 있어요", "가격이 더 싸요"],
    correctAnswer: 2,
    translations: { en: { question: "What is the advantage of in-store shopping?", explanation: "The passage says you can check items directly, so the correct answer is 물건을 직접 확인할 수 있어요." } },
  },
  {
    id: "L3-S4-R03",
    passage:
      "버스와 지하철 중에서 저는 지하철을 더 자주 타요.\n버스는 요금이 싸지만 길이 막히면 느려요.\n지하철은 요금이 조금 비싸지만 시간이 정확해요.\n저는 시간이 중요해서 지하철을 선택해요.",
    question: "이 사람은 왜 지하철을 선택합니까?",
    options: ["요금이 더 싸서", "시간이 중요해서", "사람이 적어서", "친구가 추천해서"],
    correctAnswer: 1,
    translations: { en: { question: "Why do they choose the subway?", explanation: "The passage says time is important to them, so the correct answer is 시간이 중요해서." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L3-S4-WR01",
    type: "keyword-writing",
    prompt: { en: "Write one sentence that compares two things, using all of the following words." },
    keywords: ["버스", "지하철", "빠르다"],
    sampleAnswer: { en: "버스를 타는 것보다 지하철을 타는 것이 더 빨라요." },
    explanation: { en: "-는 것이 더 compares two actions: 지하철을 타는 것이 더 빨라요." },
  },
  {
    id: "L3-S4-WR02",
    type: "short-response",
    prompt: { en: "Between online shopping and in-store shopping, which do you prefer? Write 2-3 sentences with your choice and reason." },
    keywords: ["온라인 쇼핑", "매장 쇼핑", "편리하다", "그래서"],
    sampleAnswer: { en: "저는 온라인 쇼핑을 더 좋아해요. 시간과 장소에 상관없이 편리하게 살 수 있어서요. 그래서 저는 보통 온라인으로 물건을 사요." },
    explanation: { en: "State your choice first, then give the reason with -아서/어서 or 그래서." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L3-S4-P01", type: "vocabulary", question: '"장점"의 뜻은 무엇입니까?', options: ["Advantage", "Disadvantage", "Difference", "Standard"], correctAnswer: 0, explanation: { en: "장점 means advantage." } },
  { id: "L3-S4-P02", type: "vocabulary", question: '"편리하다"의 뜻은 무엇입니까?', options: ["Convenient", "Inconvenient", "Similar", "Various"], correctAnswer: 0, explanation: { en: "편리하다 means convenient." } },
  { id: "L3-S4-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n이 세 가지 ______ 이게 제일 좋아요.", options: ["중에서", "보다", "때문에", "동안"], correctAnswer: 0, explanation: { en: "중에서 marks a group to choose from: 세 가지 중에서." } },
  { id: "L3-S4-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n버스를 타는 것보다 지하철을 타는 것이 ______.", options: ["빨라야 해요", "빠를 거예요", "빠르지 마세요", "더 빨라요"], correctAnswer: 3, explanation: { en: "-는 것이 더 compares two actions: 타는 것이 더 빨라요." } },
  { id: "L3-S4-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n이 제품은 저 제품보다 ______.", options: ["비슷해요", "고르고 있어요", "선택해요", "품질이 좋아요"], correctAnswer: 3, explanation: { en: "품질이 좋아요 (\"quality is good\") fits a comparison sentence." } },
  { id: "L3-S4-P06", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n저는 가격을 ______으로 물건을 골라요.", options: ["차이", "방법", "기준", "종류"], correctAnswer: 2, explanation: { en: "기준 means \"standard/criteria.\"" } },
  { id: "L3-S4-P07", type: "vocabulary", question: "두 물건이 많이 같을 때 쓰는 말은?", options: ["다르다", "비슷하다", "느리다", "적당하다"], correctAnswer: 1, explanation: { en: "비슷하다 means similar." } },
  { id: "L3-S4-P08", type: "listening", audioText: "이 가방이 더 편리해서 이걸로 골랐어요.", question: "왜 이 가방을 골랐습니까?", options: ["더 예뻐서", "더 싸서", "더 편리해서", "친구가 사줘서"], correctAnswer: 2, explanation: { en: 'The sentence says "more convenient," so the answer is 더 편리해서.' } },
  { id: "L3-S4-P09", type: "reading", passage: "온라인 쇼핑은 편리하지만 매장 쇼핑은 물건을 직접 확인할 수 있어요.", question: "매장 쇼핑의 장점은 무엇입니까?", options: ["더 편리해요", "물건을 직접 확인할 수 있어요", "가격이 싸요", "빨라요"], correctAnswer: 1, explanation: { en: 'The passage says you can check items directly, so the answer is 물건을 직접 확인할 수 있어요.' } },
  { id: "L3-S4-P10", type: "reading", passage: "저는 시간이 중요해서 버스보다 지하철을 선택해요.", question: "이 사람은 왜 지하철을 선택합니까?", options: ["요금이 싸서", "시간이 중요해서", "사람이 적어서", "가까워서"], correctAnswer: 1, explanation: { en: 'The passage says time is important, so the answer is 시간이 중요해서.' } },
];

export const STEP_3_4: StepContent = {
  level: 3,
  step: 4,
  title: "비교와 선택 (Comparison and Choice)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
