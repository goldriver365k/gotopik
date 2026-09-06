// TOPIK 3 STEP 12 — Spending (소비와 생활경제).
// Independent of TOPIK1/TOPIK2/TOPIK3 STEP1-11's data files.
// 가격, 할인, 선택 already exist as "new" — recorded here with status
// "review".
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L3-S12-W01", korean: "소비", partOfSpeech: "noun", translations: { en: "consumption / spending" }, example: "소비 습관을 점검해요.", exampleTranslations: { en: "I check my spending habits." }, audioUrl: null, status: "new" },
  { id: "L3-S12-W02", korean: "생활비", partOfSpeech: "noun", translations: { en: "living expenses" }, example: "생활비가 많이 들어요.", exampleTranslations: { en: "Living expenses cost a lot." }, audioUrl: null, status: "new" },
  { id: "L3-S12-W03", korean: "지출", partOfSpeech: "noun", translations: { en: "expenditure" }, example: "이번 달 지출을 확인했어요.", exampleTranslations: { en: "I checked this month's expenditure." }, audioUrl: null, status: "new" },
  { id: "L3-S12-W04", korean: "절약", partOfSpeech: "noun", translations: { en: "saving / frugality" }, example: "절약이 중요해요.", exampleTranslations: { en: "Saving is important." }, audioUrl: null, status: "new" },
  { id: "L3-S12-W05", korean: "예산", partOfSpeech: "noun", translations: { en: "budget" }, example: "예산을 세웠어요.", exampleTranslations: { en: "I set a budget." }, audioUrl: null, status: "new" },
  { id: "L3-S12-W06", korean: "비용", partOfSpeech: "noun", translations: { en: "cost" }, example: "여행 비용이 많이 나왔어요.", exampleTranslations: { en: "The travel cost came out to a lot." }, audioUrl: null, status: "new" },
  { id: "L3-S12-W07", korean: "상품", partOfSpeech: "noun", translations: { en: "product / goods" }, example: "이 상품이 인기가 많아요.", exampleTranslations: { en: "This product is very popular." }, audioUrl: null, status: "new" },
  { id: "L3-S12-W08", korean: "온라인", partOfSpeech: "noun", translations: { en: "online" }, example: "온라인으로 구매해요.", exampleTranslations: { en: "I buy things online." }, audioUrl: null, status: "new" },
  { id: "L3-S12-W09", korean: "구매하다", partOfSpeech: "verb", translations: { en: "to purchase" }, example: "새 상품을 구매했어요.", exampleTranslations: { en: "I purchased a new product." }, audioUrl: null, status: "new" },
  { id: "L3-S12-W10", korean: "아끼다", partOfSpeech: "verb", translations: { en: "to save / be frugal with" }, example: "돈을 아껴 써요.", exampleTranslations: { en: "I spend money frugally." }, audioUrl: null, status: "new" },
  { id: "L3-S12-W11", korean: "사용하다", partOfSpeech: "verb", translations: { en: "to use" }, example: "카드를 사용해요.", exampleTranslations: { en: "I use a card." }, audioUrl: null, status: "new" },
  { id: "L3-S12-W12", korean: "비교하다", partOfSpeech: "verb", translations: { en: "to compare" }, example: "가격을 비교하고 사요.", exampleTranslations: { en: "I compare prices before buying." }, audioUrl: null, status: "new" },
  { id: "L3-S12-W13", korean: "계획적", partOfSpeech: "noun", translations: { en: "planned / systematic" }, example: "계획적으로 소비해요.", exampleTranslations: { en: "I spend in a planned way." }, audioUrl: null, status: "new" },
  { id: "L3-S12-W14", korean: "필요", partOfSpeech: "noun", translations: { en: "necessity / need" }, example: "필요 없는 물건은 안 사요.", exampleTranslations: { en: "I don't buy things I don't need." }, audioUrl: null, status: "new" },
  { id: "L3-S12-W15", korean: "충동", partOfSpeech: "noun", translations: { en: "impulse" }, example: "충동적으로 사면 후회해요.", exampleTranslations: { en: "If you buy on impulse, you regret it." }, audioUrl: null, status: "new" },
  { id: "L3-S12-W16", korean: "저축", partOfSpeech: "noun", translations: { en: "savings (banking)" }, example: "매달 저축을 해요.", exampleTranslations: { en: "I save money every month." }, audioUrl: null, status: "new" },
  { id: "L3-S12-W17", korean: "소비하다", partOfSpeech: "verb", translations: { en: "to spend / consume" }, example: "돈을 계획적으로 소비해요.", exampleTranslations: { en: "I spend money in a planned way." }, audioUrl: null, status: "new" },
  { id: "L3-S12-W18", korean: "낭비하다", partOfSpeech: "verb", translations: { en: "to waste (money, time)" }, example: "돈을 낭비하지 않아요.", exampleTranslations: { en: "I don't waste money." }, audioUrl: null, status: "new" },
  { id: "L3-S12-W19", korean: "가격", partOfSpeech: "noun", translations: { en: "price" }, example: "가격을 비교했어요.", exampleTranslations: { en: "I compared prices." }, audioUrl: null, status: "review" },
  { id: "L3-S12-W20", korean: "할인", partOfSpeech: "noun", translations: { en: "discount" }, example: "할인 상품을 샀어요.", exampleTranslations: { en: "I bought a discounted product." }, audioUrl: null, status: "review" },
  { id: "L3-S12-W21", korean: "선택", partOfSpeech: "noun", translations: { en: "choice" }, example: "좋은 선택이었어요.", exampleTranslations: { en: "It was a good choice." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L3-S12-S01", korean: "택시를 타기보다는 지하철을 타요.", translations: { en: "Rather than taking a taxi, I take the subway." }, keyExpression: "-기보다는", relatedWords: ["지하철"], audioUrl: null },
  { id: "L3-S12-S02", korean: "가격만큼 품질도 중요해요.", translations: { en: "Quality is as important as price." }, keyExpression: "-만큼", relatedWords: ["가격", "품질"], audioUrl: null },
  { id: "L3-S12-S03", korean: "충동적으로 사기보다는 필요한 것만 사요.", translations: { en: "Rather than buying on impulse, I only buy what I need." }, keyExpression: "-기보다는", relatedWords: ["충동", "필요"], audioUrl: null },
  { id: "L3-S12-S04", korean: "이번 달 생활비만큼 저축도 신경 써요.", translations: { en: "I pay as much attention to savings as I do to this month's living expenses." }, keyExpression: "-만큼", relatedWords: ["생활비", "저축"], audioUrl: null },
  { id: "L3-S12-S05", korean: "저는 온라인에서 상품 가격을 비교하고 구매해요.", translations: { en: "I compare product prices online and then purchase." }, keyExpression: "비교하다", relatedWords: ["온라인", "상품", "비교하다", "구매하다"], audioUrl: null },
  { id: "L3-S12-S06", korean: "돈을 낭비하기보다는 계획적으로 소비하는 게 좋아요.", translations: { en: "Rather than wasting money, it's good to spend in a planned way." }, keyExpression: "-기보다는", relatedWords: ["낭비하다", "계획적", "소비하다"], audioUrl: null },
  { id: "L3-S12-S07", korean: "저는 예산을 세워서 지출을 아끼려고 노력해요.", translations: { en: "I set a budget and try to save on expenditures." }, keyExpression: "아끼다", relatedWords: ["예산", "지출", "아끼다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L3-S12-G01",
    pattern: "-기보다는",
    meanings: { en: "rather than (doing something)" },
    explanations: {
      en: "Attach -기보다는 to a verb stem to say one option is preferred over another.",
    },
    examples: [
      { korean: "택시를 타기보다는 지하철을 타요.", translations: { en: "Rather than taking a taxi, I take the subway." } },
      { korean: "충동적으로 사기보다는 필요한 것만 사요.", translations: { en: "Rather than buying on impulse, I only buy what I need." } },
    ],
  },
  {
    id: "L3-S12-G02",
    pattern: "-만큼",
    meanings: { en: "as much as" },
    explanations: {
      en: "Attach -만큼 to a noun to say something is equal to or as much as that noun.",
    },
    examples: [
      { korean: "가격만큼 품질도 중요해요.", translations: { en: "Quality is as important as price." } },
      { korean: "이번 달 생활비만큼 저축도 신경 써요.", translations: { en: "I pay as much attention to savings as I do to this month's living expenses." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L3-S12-L01",
    audioText: "저는 택시를 타기보다는 지하철을 타요. 요금이 훨씬 싸거든요.",
    audioUrl: null,
    question: "이 사람은 왜 지하철을 탑니까?",
    options: ["친구가 있어서", "더 빨라서", "요금이 싸서", "택시가 없어서"],
    correctAnswer: 2,
    translations: { en: { question: "Why does this person take the subway?", explanation: 'The sentence says "the fare is much cheaper," so the correct answer is 요금이 싸서.' } },
  },
  {
    id: "L3-S12-L02",
    audioText: "이번 달 예산을 세웠어요. 필요한 물건만 사고 충동적으로 사지 않으려고 해요.",
    audioUrl: null,
    question: "이 사람은 무엇을 하려고 합니까?",
    options: ["충동적으로 사지 않으려고", "돈을 더 많이 쓰려고", "새 카드를 만들려고", "예산을 없애려고"],
    correctAnswer: 0,
    translations: { en: { question: "What does this person intend to do?", explanation: 'The sentence says "not buy on impulse," so the correct answer is 충동적으로 사지 않으려고.' } },
  },
  {
    id: "L3-S12-L03",
    audioText: "저는 온라인에서 가격을 비교한 후에 제일 싼 상품을 구매해요.",
    audioUrl: null,
    question: "이 사람은 상품을 사기 전에 무엇을 합니까?",
    options: ["리뷰를 써요", "가격을 비교해요", "친구에게 물어봐요", "매장에 가요"],
    correctAnswer: 1,
    translations: { en: { question: "What do they do before buying a product?", explanation: "The sentence says they compare prices, so the correct answer is 가격을 비교해요." } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L3-S12-R01",
    passage:
      "요즘 저는 생활비를 아끼려고 노력해요.\n먼저 이번 달 예산을 정하고 지출을 계획적으로 관리해요.\n또 물건을 살 때는 온라인에서 가격을 비교해요.\n충동적으로 사기보다는 정말 필요한 것만 사려고 해요.",
    question: "이 사람은 생활비를 아끼기 위해 무엇을 합니까?",
    options: ["물건을 자주 사요", "카드를 여러 개 만들어요", "예산을 정하고 계획적으로 지출을 관리해요", "저축을 그만해요"],
    correctAnswer: 2,
    translations: { en: { question: "What does this person do to save on living expenses?", explanation: "The passage says they set a budget and manage spending in a planned way, so the correct answer is 예산을 정하고 계획적으로 지출을 관리해요." } },
  },
  {
    id: "L3-S12-R02",
    passage:
      "온라인 쇼핑은 편리하지만 충동구매를 하기 쉬워요.\n그래서 저는 물건을 사기 전에 꼭 필요한지 다시 생각해요.\n가격만큼 품질도 확인하고 구매를 결정해요.\n이렇게 하면 돈을 낭비하지 않을 수 있어요.",
    question: "이 사람은 구매 전에 무엇을 확인합니까?",
    options: ["필요성과 품질", "브랜드 이름", "배송 속도", "포장 디자인"],
    correctAnswer: 0,
    translations: { en: { question: "What does this person check before buying?", explanation: "The passage says they check necessity and quality, so the correct answer is 필요성과 품질." } },
  },
  {
    id: "L3-S12-R03",
    passage:
      "저는 매달 일정 금액을 저축하기로 했어요.\n생활비를 줄이기 위해서 외식을 줄이고 직접 요리를 해요.\n또 필요 없는 물건을 사기보다는 꼭 필요한 것만 사요.\n이렇게 절약한 돈으로 조금씩 저축이 늘고 있어요.",
    question: "이 사람은 생활비를 줄이기 위해 무엇을 합니까?",
    options: ["온라인으로만 구매해요", "외식을 줄이고 직접 요리해요", "저축을 그만둬요", "물건을 더 많이 사요"],
    correctAnswer: 1,
    translations: { en: { question: "What does this person do to reduce living expenses?", explanation: "The passage says they reduce eating out and cook themselves, so the correct answer is 외식을 줄이고 직접 요리해요." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L3-S12-WR01",
    type: "sentence-order",
    prompt: {
      en: "Put these two fragments in order to make a sentence about saving vs. spending, then write the full sentence: 「계획적으로 소비하는 게 좋아요」 / 「돈을 낭비하기보다는」",
    },
    keywords: ["돈을 낭비하기보다는", "계획적으로 소비하는 게 좋아요"],
    sampleAnswer: { en: "돈을 낭비하기보다는 계획적으로 소비하는 게 좋아요." },
    explanation: { en: "-기보다는 marks what's being set aside, and the preferred option comes after." },
  },
  {
    id: "L3-S12-WR02",
    type: "short-response",
    prompt: { en: "Write 3-4 sentences about ways you save on living expenses." },
    keywords: ["절약", "아끼다", "예산"],
    sampleAnswer: {
      en: "저는 매달 예산을 세워서 지출을 관리해요. 외식을 줄이고 직접 요리를 하면서 생활비를 아껴요. 또 물건을 살 때는 가격을 비교하고 나서 사요. 이렇게 절약하면 저축도 늘릴 수 있어요.",
    },
    explanation: { en: "List 2-3 concrete saving habits and connect them with -고, -아서/어서, or -기보다는." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L3-S12-P01", type: "vocabulary", question: '"절약"의 뜻은 무엇입니까?', options: ["Saving / frugality", "Waste", "Purchase", "Budget"], correctAnswer: 0, explanation: { en: "절약 means saving/frugality." } },
  { id: "L3-S12-P02", type: "vocabulary", question: '"충동"의 뜻은 무엇입니까?', options: ["Plan", "Impulse", "Comparison", "Discount"], correctAnswer: 1, explanation: { en: "충동 means impulse." } },
  { id: "L3-S12-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n택시를 타______ 지하철을 타요.", options: ["기보다는", "고 나서", "기 때문에", "는 동안"], correctAnswer: 0, explanation: { en: "-기보다는 means \"rather than\": 타기보다는." } },
  { id: "L3-S12-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n가격______ 품질도 중요해요.", options: ["만큼", "보다", "때문에", "부터"], correctAnswer: 0, explanation: { en: "-만큼 means \"as much as\": 가격만큼." } },
  { id: "L3-S12-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n저는 매달 일정 금액을 ______.", options: ["비교해요", "저축해요", "구매해요", "낭비해요"], correctAnswer: 1, explanation: { en: "저축해요 means \"I save (money).\"" } },
  { id: "L3-S12-P06", type: "vocabulary", question: "필요 없는 곳에 돈이나 시간을 쓰는 것을 무엇이라고 합니까?", options: ["절약", "낭비", "저축", "예산"], correctAnswer: 1, explanation: { en: "낭비 means waste." } },
  { id: "L3-S12-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n저는 물건을 사기 전에 가격을 ______.", options: ["저축해요", "낭비해요", "비교해요", "절약해요"], correctAnswer: 2, explanation: { en: "비교해요 means \"I compare.\"" } },
  { id: "L3-S12-P08", type: "listening", audioText: "저는 택시를 타기보다는 지하철을 타요. 요금이 싸거든요.", question: "이 사람은 왜 지하철을 탑니까?", options: ["친구와 함께라서", "더 빨라서", "요금이 싸서", "가까워서"], correctAnswer: 2, explanation: { en: 'The sentence says the fare is cheaper, so the answer is 요금이 싸서.' } },
  { id: "L3-S12-P09", type: "reading", passage: "예산을 정하고 지출을 계획적으로 관리해서 생활비를 아껴요.", question: "이 사람은 생활비를 아끼기 위해 무엇을 합니까?", options: ["저축을 그만해요", "카드를 여러 개 만들어요", "물건을 자주 사요", "예산을 정하고 계획적으로 관리해요"], correctAnswer: 3, explanation: { en: 'The passage says they set a budget and manage spending, so the answer is 예산을 정하고 계획적으로 관리해요.' } },
  { id: "L3-S12-P10", type: "reading", passage: "외식을 줄이고 직접 요리를 하면서 생활비를 아껴요.", question: "이 사람은 생활비를 줄이기 위해 무엇을 합니까?", options: ["온라인으로만 구매해요", "물건을 더 많이 사요", "저축을 그만둬요", "외식을 줄이고 직접 요리해요"], correctAnswer: 3, explanation: { en: 'The passage says they reduce eating out and cook themselves, so the answer is 외식을 줄이고 직접 요리해요.' } },
];

export const STEP_3_12: StepContent = {
  level: 3,
  step: 12,
  title: "소비와 생활경제 (Spending)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
