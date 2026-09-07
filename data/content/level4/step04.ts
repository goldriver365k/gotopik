// TOPIK 4 STEP 4 — Spending and Economic Life (소비와 경제생활).
// Independent of TOPIK1/TOPIK2/TOPIK3/TOPIK4 STEP1-3's data files.
// 생활비, 예산, 지출, 저축, 비교, 아끼다, 계획하다, 소비 already exist
// as "new" elsewhere (TOPIK3) — recorded here with status "review".
// -에 비해 is a short form of TOPIK3 STEP11's -에 비해서 — labeled
// "(복습)" rather than re-taught as new, per docs/topik4-curriculum.md §4.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L4-S4-W01", korean: "합리적이다", partOfSpeech: "adjective", translations: { en: "rational / reasonable" }, example: "저는 합리적으로 소비하려고 해요.", exampleTranslations: { en: "I try to spend rationally." }, audioUrl: null, status: "new" },
  { id: "L4-S4-W02", korean: "소비습관", partOfSpeech: "noun", translations: { en: "spending habit" }, example: "저는 제 소비습관을 점검했어요.", exampleTranslations: { en: "I checked my spending habit." }, audioUrl: null, status: "new" },
  { id: "L4-S4-W03", korean: "충동구매", partOfSpeech: "noun", translations: { en: "impulse buying" }, example: "충동구매를 줄이려고 해요.", exampleTranslations: { en: "I'm trying to reduce impulse buying." }, audioUrl: null, status: "new" },
  { id: "L4-S4-W04", korean: "필요성", partOfSpeech: "noun", translations: { en: "necessity" }, example: "이 물건의 필요성을 느끼지 못했어요.", exampleTranslations: { en: "I didn't feel the necessity of this item." }, audioUrl: null, status: "new" },
  { id: "L4-S4-W05", korean: "낭비", partOfSpeech: "noun", translations: { en: "waste" }, example: "돈 낭비를 하지 않으려고 해요.", exampleTranslations: { en: "I try not to waste money." }, audioUrl: null, status: "new" },
  { id: "L4-S4-W06", korean: "절약하다", partOfSpeech: "verb", translations: { en: "to save / economize" }, example: "저는 전기를 절약해요.", exampleTranslations: { en: "I save electricity." }, audioUrl: null, status: "new" },
  { id: "L4-S4-W07", korean: "온라인쇼핑", partOfSpeech: "noun", translations: { en: "online shopping" }, example: "온라인쇼핑이 편리해요.", exampleTranslations: { en: "Online shopping is convenient." }, audioUrl: null, status: "new" },
  { id: "L4-S4-W08", korean: "배송", partOfSpeech: "noun", translations: { en: "delivery / shipping" }, example: "배송이 빨라요.", exampleTranslations: { en: "The delivery is fast." }, audioUrl: null, status: "new" },
  { id: "L4-S4-W09", korean: "환불", partOfSpeech: "noun", translations: { en: "refund" }, example: "환불을 받았어요.", exampleTranslations: { en: "I got a refund." }, audioUrl: null, status: "new" },
  { id: "L4-S4-W10", korean: "교환", partOfSpeech: "noun", translations: { en: "exchange" }, example: "사이즈가 안 맞아서 교환했어요.", exampleTranslations: { en: "I exchanged it because the size didn't fit." }, audioUrl: null, status: "new" },
  { id: "L4-S4-W11", korean: "소비자", partOfSpeech: "noun", translations: { en: "consumer" }, example: "소비자의 권리가 중요해요.", exampleTranslations: { en: "Consumer rights are important." }, audioUrl: null, status: "new" },
  { id: "L4-S4-W12", korean: "물가", partOfSpeech: "noun", translations: { en: "prices (cost of living)" }, example: "요즘 물가가 많이 올랐어요.", exampleTranslations: { en: "Prices have gone up a lot these days." }, audioUrl: null, status: "new" },
  { id: "L4-S4-W13", korean: "가계부", partOfSpeech: "noun", translations: { en: "household account book" }, example: "저는 매달 가계부를 써요.", exampleTranslations: { en: "I keep a household account book every month." }, audioUrl: null, status: "new" },
  { id: "L4-S4-W14", korean: "실용적이다", partOfSpeech: "adjective", translations: { en: "practical" }, example: "실용적인 물건을 사는 게 좋아요.", exampleTranslations: { en: "It's good to buy practical items." }, audioUrl: null, status: "new" },
  { id: "L4-S4-W15", korean: "알뜰하다", partOfSpeech: "adjective", translations: { en: "thrifty" }, example: "그 사람은 정말 알뜰해요.", exampleTranslations: { en: "That person is really thrifty." }, audioUrl: null, status: "new" },
  { id: "L4-S4-W16", korean: "세일", partOfSpeech: "noun", translations: { en: "sale" }, example: "백화점에서 세일을 해요.", exampleTranslations: { en: "The department store is having a sale." }, audioUrl: null, status: "new" },
  { id: "L4-S4-W17", korean: "생활비", partOfSpeech: "noun", translations: { en: "living expenses" }, example: "생활비가 많이 들어요.", exampleTranslations: { en: "Living expenses cost a lot." }, audioUrl: null, status: "review" },
  { id: "L4-S4-W18", korean: "예산", partOfSpeech: "noun", translations: { en: "budget" }, example: "예산을 세웠어요.", exampleTranslations: { en: "I set a budget." }, audioUrl: null, status: "review" },
  { id: "L4-S4-W19", korean: "지출", partOfSpeech: "noun", translations: { en: "expenditure" }, example: "이번 달 지출을 확인했어요.", exampleTranslations: { en: "I checked this month's expenditure." }, audioUrl: null, status: "review" },
  { id: "L4-S4-W20", korean: "저축", partOfSpeech: "noun", translations: { en: "savings (banking)" }, example: "매달 저축을 해요.", exampleTranslations: { en: "I save money every month." }, audioUrl: null, status: "review" },
  { id: "L4-S4-W21", korean: "비교", partOfSpeech: "noun", translations: { en: "comparison" }, example: "가격 비교를 해 봤어요.", exampleTranslations: { en: "I compared the prices." }, audioUrl: null, status: "review" },
  { id: "L4-S4-W22", korean: "아끼다", partOfSpeech: "verb", translations: { en: "to save / be frugal with" }, example: "돈을 아껴 써요.", exampleTranslations: { en: "I spend money frugally." }, audioUrl: null, status: "review" },
  { id: "L4-S4-W23", korean: "계획하다", partOfSpeech: "verb", translations: { en: "to plan" }, example: "여행을 계획하고 있어요.", exampleTranslations: { en: "I'm planning a trip." }, audioUrl: null, status: "review" },
  { id: "L4-S4-W24", korean: "소비", partOfSpeech: "noun", translations: { en: "consumption / spending" }, example: "소비 습관을 점검해요.", exampleTranslations: { en: "I check my spending habits." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L4-S4-S01", korean: "온라인 상품은 매장 상품에 비해 가격이 싼 경우가 많아요.", translations: { en: "Online products are often cheaper compared to store products." }, keyExpression: "-에 비해", relatedWords: [], audioUrl: null },
  { id: "L4-S4-S02", korean: "이 물건은 저 물건에 비해 품질이 더 좋아요.", translations: { en: "This item has better quality compared to that item." }, keyExpression: "-에 비해", relatedWords: [], audioUrl: null },
  { id: "L4-S4-S03", korean: "택시를 타는 대신에 지하철을 이용해요.", translations: { en: "Instead of taking a taxi, I use the subway." }, keyExpression: "-는 대신에", relatedWords: [], audioUrl: null },
  { id: "L4-S4-S04", korean: "새 물건을 사는 대신에 중고 물건을 샀어요.", translations: { en: "Instead of buying a new item, I bought a used one." }, keyExpression: "-는 대신에", relatedWords: [], audioUrl: null },
  { id: "L4-S4-S05", korean: "저는 충동구매를 줄이려고 가계부를 써요.", translations: { en: "I keep a household account book to reduce impulse buying." }, keyExpression: "가계부", relatedWords: ["충동구매", "가계부"], audioUrl: null },
  { id: "L4-S4-S06", korean: "물가가 올라서 소비습관을 바꿨어요.", translations: { en: "Prices went up, so I changed my spending habit." }, keyExpression: "소비습관", relatedWords: ["물가", "소비습관"], audioUrl: null },
  { id: "L4-S4-S07", korean: "저는 실용적인 물건을 사는 알뜰한 소비자예요.", translations: { en: "I'm a thrifty consumer who buys practical items." }, keyExpression: "알뜰하다", relatedWords: ["실용적이다", "알뜰하다", "소비자"], audioUrl: null },
  { id: "L4-S4-S08", korean: "필요성을 느끼지 못하면 낭비하지 않고 절약해요.", translations: { en: "If I don't feel the necessity, I don't waste it — I save it." }, keyExpression: "절약하다", relatedWords: ["필요성", "낭비", "절약하다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L4-S4-G01",
    pattern: "-에 비해 (복습)",
    meanings: { en: "compared to (review, short form of -에 비해서)" },
    explanations: {
      en: "Keep using -에 비해 as a shorter form of -에 비해서 (TOPIK3 STEP11) to compare one thing against another.",
    },
    examples: [
      { korean: "온라인 상품은 매장 상품에 비해 가격이 싼 경우가 많아요.", translations: { en: "Online products are often cheaper compared to store products." } },
      { korean: "이 물건은 저 물건에 비해 품질이 더 좋아요.", translations: { en: "This item has better quality compared to that item." } },
    ],
  },
  {
    id: "L4-S4-G02",
    pattern: "-는 대신에",
    meanings: { en: "instead of (doing)" },
    explanations: {
      en: "Attach -는 대신에 to a verb stem to say one action or choice replaces another.",
    },
    examples: [
      { korean: "택시를 타는 대신에 지하철을 이용해요.", translations: { en: "Instead of taking a taxi, I use the subway." } },
      { korean: "새 물건을 사는 대신에 중고 물건을 샀어요.", translations: { en: "Instead of buying a new item, I bought a used one." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L4-S4-L01",
    audioText: "저는 필요성을 느끼지 못하는 물건은 사지 않아요. 그래서 충동구매를 많이 줄였어요.",
    audioUrl: null,
    question: "이 사람은 어떻게 충동구매를 줄였습니까?",
    options: ["필요성을 느끼지 못하는 물건은 안 사서", "돈을 안 써서", "세일할 때만 사서", "온라인으로만 사서"],
    correctAnswer: 0,
    translations: { en: { question: "How did this person reduce impulse buying?", explanation: 'The sentence says "not buying items I don\'t feel are necessary," so the correct answer is 필요성을 느끼지 못하는 물건은 안 사서.' } },
  },
  {
    id: "L4-S4-L02",
    audioText: "요즘 물가가 많이 올라서 저는 가계부를 쓰면서 소비습관을 관리해요.",
    audioUrl: null,
    question: "이 사람은 무엇을 하고 있습니까?",
    options: ["돈을 전혀 안 쓴다", "가계부를 쓰면서 소비습관을 관리한다", "은행에서 일한다", "물건을 다 환불한다"],
    correctAnswer: 1,
    translations: { en: { question: "What is this person doing?", explanation: 'The sentence says "managing spending habits by keeping a household account book," so the correct answer is 가계부를 쓰면서 소비습관을 관리한다.' } },
  },
  {
    id: "L4-S4-L03",
    audioText: "저는 백화점 물건을 사는 대신에 온라인쇼핑으로 필요한 것을 사요. 배송도 빠르고 가격도 싸기 때문이에요.",
    audioUrl: null,
    question: "이 사람은 왜 온라인쇼핑을 이용합니까?",
    options: ["백화점이 문을 닫아서", "친구가 추천해서", "배송이 빠르고 가격이 싸서", "환불이 쉬워서"],
    correctAnswer: 2,
    translations: { en: { question: "Why does this person use online shopping?", explanation: 'The sentence says "delivery is fast and prices are cheap," so the correct answer is 배송이 빠르고 가격이 싸서.' } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L4-S4-R01",
    passage:
      "저는 예전에 필요하지 않은 물건도 충동구매를 많이 했어요.\n하지만 요즘은 물건을 사기 전에 필요성을 먼저 생각해요.\n그리고 가격을 비교한 후에 가장 합리적인 것을 선택해요.\n이렇게 소비습관을 바꾸고 나서 지출이 많이 줄었어요.",
    question: "이 사람은 소비습관을 어떻게 바꿨습니까?",
    options: ["필요성을 생각하고 가격을 비교한 후에 산다", "더 많이 샀다", "온라인쇼핑만 한다", "저축을 그만뒀다"],
    correctAnswer: 0,
    translations: { en: { question: "How did this person change their spending habit?", explanation: "The passage says they think about necessity and compare prices before buying, so the correct answer is 필요성을 생각하고 가격을 비교한 후에 산다." } },
  },
  {
    id: "L4-S4-R02",
    passage:
      "온라인쇼핑은 매장 쇼핑에 비해 편리한 점이 많아요.\n집에서 편하게 가격을 비교할 수 있고 배송도 빨라요.\n하지만 물건을 직접 보지 못해서 교환이나 환불이 필요한 경우도 있어요.\n그래서 소비자는 상품 정보를 꼼꼼히 확인하는 것이 중요해요.",
    question: "이 글에 따르면 온라인쇼핑의 단점은 무엇입니까?",
    options: ["가격이 비싸다", "물건을 직접 보지 못한다", "배송이 느리다", "세일을 안 한다"],
    correctAnswer: 1,
    translations: { en: { question: "According to the passage, what is a downside of online shopping?", explanation: "The passage says you can't see the item in person, so the correct answer is 물건을 직접 보지 못한다." } },
  },
  {
    id: "L4-S4-R03",
    passage:
      "제 친구는 정말 알뜰한 소비자예요.\n매달 예산을 세우고 가계부를 써서 지출을 관리해요.\n비싼 물건을 사는 대신에 실용적이고 오래 쓸 수 있는 물건을 선택해요.\n그 덕분에 낭비 없이 꾸준히 저축을 하고 있어요.",
    question: "이 사람의 친구는 어떤 소비자입니까?",
    options: ["돈을 낭비하는 소비자", "물건을 안 사는 소비자", "예산과 가계부로 지출을 관리하는 소비자", "세일만 기다리는 소비자"],
    correctAnswer: 2,
    translations: { en: { question: "What kind of consumer is the friend?", explanation: "The passage says they manage spending with a budget and account book, so the correct answer is 예산과 가계부로 지출을 관리하는 소비자." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L4-S4-WR01",
    type: "keyword-writing",
    prompt: { en: "Write one sentence using all of the following words." },
    keywords: ["소비", "계획", "절약하다"],
    sampleAnswer: { en: "저는 소비 계획을 세워서 돈을 절약하려고 해요." },
    explanation: { en: "Combine 소비 and 계획 as the topic, then 절약하다 to state the goal." },
  },
  {
    id: "L4-S4-WR02",
    type: "short-response",
    prompt: {
      en: "Write 4-5 sentences about how to spend money rationally.\nInclude: a spending plan, checking whether something is needed, comparing prices, and your own method.",
    },
    keywords: ["예산", "필요성", "비교", "합리적이다"],
    sampleAnswer: {
      en: "저는 합리적으로 소비하기 위해 먼저 매달 예산을 세워요. 그리고 물건을 사기 전에 정말 필요한지 필요성을 생각해요. 그다음에는 여러 곳의 가격을 비교해서 가장 합리적인 것을 선택해요. 이렇게 하니까 충동구매가 많이 줄었어요.",
    },
    explanation: { en: "4-5 sentences following plan → necessity check → price comparison → personal method is enough — not a long essay yet." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L4-S4-P01", type: "vocabulary", question: '"충동구매"의 뜻은 무엇입니까?', options: ["Saving", "Impulse buying", "Refund", "Exchange"], correctAnswer: 1, explanation: { en: "충동구매 means impulse buying." } },
  { id: "L4-S4-P02", type: "vocabulary", question: '"물가"의 뜻은 무엇입니까?', options: ["Prices (cost of living)", "Household account book", "Consumer", "Delivery"], correctAnswer: 0, explanation: { en: "물가 means prices/cost of living." } },
  { id: "L4-S4-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n이 물건은 저 물건______ 품질이 더 좋아요.", options: ["에 비해", "는 대신에", "는 김에", "는 반면에"], correctAnswer: 0, explanation: { en: "-에 비해 compares two things: 물건에 비해." } },
  { id: "L4-S4-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n택시를 타는 ______ 지하철을 이용해요.", options: ["김에", "대신에", "반면에", "동안"], correctAnswer: 1, explanation: { en: "-는 대신에 shows one choice replaces another: 타는 대신에." } },
  { id: "L4-S4-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n저는 충동구매를 줄이려고 ______을/를 써요.", options: ["환불", "가계부", "세일", "물가"], correctAnswer: 1, explanation: { en: "가계부 (household account book) fits tracking spending." } },
  { id: "L4-S4-P06", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n그 사람은 정말 ______ 필요한 것만 사요.", options: ["알뜰해서", "낭비해서", "충동적이어서", "사치스러워서"], correctAnswer: 0, explanation: { en: "알뜰하다 (thrifty) fits buying only what's needed." } },
  { id: "L4-S4-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n사이즈가 안 맞아서 ______을/를 했어요.", options: ["저축", "예산", "교환", "지출"], correctAnswer: 2, explanation: { en: "교환 (exchange) fits swapping an item for a different size." } },
  { id: "L4-S4-P08", type: "listening", audioText: "저는 필요성을 느끼지 못하는 물건은 사지 않아요. 그래서 충동구매를 많이 줄였어요.", question: "이 사람은 어떻게 충동구매를 줄였습니까?", options: ["온라인으로만 사서", "세일할 때만 사서", "필요성을 느끼지 못하는 물건은 안 사서", "돈을 안 써서"], correctAnswer: 2, explanation: { en: "The sentence says they don't buy unnecessary items, so the answer is 필요성을 느끼지 못하는 물건은 안 사서." } },
  { id: "L4-S4-P09", type: "listening", audioText: "요즘 물가가 많이 올라서 저는 가계부를 쓰면서 소비습관을 관리해요.", question: "이 사람은 무엇을 하고 있습니까?", options: ["은행에서 일한다", "물건을 다 환불한다", "돈을 전혀 안 쓴다", "가계부를 쓰면서 소비습관을 관리한다"], correctAnswer: 3, explanation: { en: "The sentence says they manage spending with a household account book, so the answer is 가계부를 쓰면서 소비습관을 관리한다." } },
  { id: "L4-S4-P10", type: "reading", passage: "저는 물건을 사기 전에 필요성을 먼저 생각하고 가격을 비교한 후에 가장 합리적인 것을 선택해요.", question: "이 사람은 소비습관을 어떻게 바꿨습니까?", options: ["온라인쇼핑만 한다", "더 많이 샀다", "필요성을 생각하고 가격을 비교한 후에 산다", "저축을 그만뒀다"], correctAnswer: 2, explanation: { en: "The passage says they think about necessity and compare prices, so the answer is 필요성을 생각하고 가격을 비교한 후에 산다." } },
  { id: "L4-S4-P11", type: "reading", passage: "온라인쇼핑은 매장 쇼핑에 비해 편리하지만 물건을 직접 보지 못해서 교환이나 환불이 필요한 경우도 있어요.", question: "이 글에 따르면 온라인쇼핑의 단점은 무엇입니까?", options: ["가격이 비싸다", "배송이 느리다", "세일을 안 한다", "물건을 직접 보지 못한다"], correctAnswer: 3, explanation: { en: "The passage says you can't see the item in person, so the answer is 물건을 직접 보지 못한다." } },
  { id: "L4-S4-P12", type: "sentence", question: "다음 중 자연스러운 문장은?", options: ["새 물건 사는 대신 중고 물건을 샀어요.", "새 물건을 사대신에 중고 물건을 샀어요.", "새 물건을 사는 대신에 중고 물건을 샀어요.", "새 물건을 산 대신에서 중고 물건을 샀어요."], correctAnswer: 2, explanation: { en: "-는 대신에 attaches to the verb stem: 사는 대신에." } },
];

export const STEP_4_4: StepContent = {
  level: 4,
  step: 4,
  title: "소비와 경제생활 (Spending and Economic Life)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
