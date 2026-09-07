// TOPIK 4 STEP 17 — Opinions and Arguments (의견과 주장).
// Final general TOPIK 4 STEP before the STEP 18 comprehensive review.
// Independent of TOPIK1/TOPIK2/TOPIK3/TOPIK4 STEP1-16's data files.
// Most candidate vocabulary already exists as "new" in TOPIK3 STEP15
// (의견과 선택) — per this stage's own brief, new-word count is not
// forced; review dominates instead. No new advanced grammar is added;
// -다고 생각하다 and -는 반면에 are reused, and only -기 때문이다 (a
// sentence-final nominal form distinct from the connector -기 때문에)
// is genuinely new. Topic stays familiar/intermediate — no political
// or religious debate topics.
// 입장 ("position/stance", 立場) here is a homonym of TOPIK4 STEP13's
// 입장 ("admission/entry", 入場) — different Sino-Korean words that
// share the same Hangul spelling, kept as its own "new" entry the same
// way 눈(snow)/눈(eye) was accepted as an exception since Stage 15.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L4-S17-W01", korean: "주장", partOfSpeech: "noun", translations: { en: "argument / claim" }, example: "그 사람의 주장에는 근거가 있어요.", exampleTranslations: { en: "That person's argument has grounds." }, audioUrl: null, status: "new" },
  { id: "L4-S17-W02", korean: "입장", partOfSpeech: "noun", translations: { en: "position / stance" }, example: "저는 반대하는 입장이에요.", exampleTranslations: { en: "I'm in a position of opposing it." }, audioUrl: null, status: "new" },
  { id: "L4-S17-W03", korean: "동의", partOfSpeech: "noun", translations: { en: "agreement" }, example: "많은 사람이 동의를 표했어요.", exampleTranslations: { en: "Many people expressed agreement." }, audioUrl: null, status: "new" },
  { id: "L4-S17-W04", korean: "고려하다", partOfSpeech: "verb", translations: { en: "to consider" }, example: "여러 상황을 고려해야 해요.", exampleTranslations: { en: "You have to consider various situations." }, audioUrl: null, status: "new" },
  { id: "L4-S17-W05", korean: "설득하다", partOfSpeech: "verb", translations: { en: "to persuade" }, example: "친구를 설득했어요.", exampleTranslations: { en: "I persuaded my friend." }, audioUrl: null, status: "new" },
  { id: "L4-S17-W06", korean: "타당하다", partOfSpeech: "adjective", translations: { en: "valid / reasonable" }, example: "그 주장은 타당해 보여요.", exampleTranslations: { en: "That argument seems valid." }, audioUrl: null, status: "new" },
  { id: "L4-S17-W07", korean: "논리적", partOfSpeech: "noun", translations: { en: "logical" }, example: "논리적으로 설명했어요.", exampleTranslations: { en: "I explained it logically." }, audioUrl: null, status: "new" },
  { id: "L4-S17-W08", korean: "확신하다", partOfSpeech: "verb", translations: { en: "to be convinced / sure" }, example: "저는 제 의견을 확신해요.", exampleTranslations: { en: "I'm convinced of my opinion." }, audioUrl: null, status: "new" },
  { id: "L4-S17-W09", korean: "견해", partOfSpeech: "noun", translations: { en: "view / perspective" }, example: "각자 다른 견해를 가지고 있어요.", exampleTranslations: { en: "Everyone has a different view." }, audioUrl: null, status: "new" },
  { id: "L4-S17-W10", korean: "의견", partOfSpeech: "noun", translations: { en: "opinion" }, example: "제 의견을 말씀드릴게요.", exampleTranslations: { en: "Let me tell you my opinion." }, audioUrl: null, status: "review" },
  { id: "L4-S17-W11", korean: "근거", partOfSpeech: "noun", translations: { en: "grounds / basis (for an argument)" }, example: "근거를 들어서 설명했어요.", exampleTranslations: { en: "I explained by giving grounds." }, audioUrl: null, status: "review" },
  { id: "L4-S17-W12", korean: "이유", partOfSpeech: "noun", translations: { en: "reason" }, example: "저는 이유를 몰라요.", exampleTranslations: { en: "I don't know the reason." }, audioUrl: null, status: "review" },
  { id: "L4-S17-W13", korean: "장점", partOfSpeech: "noun", translations: { en: "advantage" }, example: "이 방법의 장점이에요.", exampleTranslations: { en: "This is the method's advantage." }, audioUrl: null, status: "review" },
  { id: "L4-S17-W14", korean: "단점", partOfSpeech: "noun", translations: { en: "disadvantage" }, example: "단점도 있어요.", exampleTranslations: { en: "There are disadvantages too." }, audioUrl: null, status: "review" },
  { id: "L4-S17-W15", korean: "선택", partOfSpeech: "noun", translations: { en: "choice" }, example: "좋은 선택이었어요.", exampleTranslations: { en: "It was a good choice." }, audioUrl: null, status: "review" },
  { id: "L4-S17-W16", korean: "반대", partOfSpeech: "noun", translations: { en: "opposition" }, example: "저는 반대 의견이 있어요.", exampleTranslations: { en: "I have an opposing opinion." }, audioUrl: null, status: "review" },
  { id: "L4-S17-W17", korean: "찬성", partOfSpeech: "noun", translations: { en: "agreement / approval" }, example: "저는 그 의견에 찬성해요.", exampleTranslations: { en: "I agree with that opinion." }, audioUrl: null, status: "review" },
  { id: "L4-S17-W18", korean: "판단", partOfSpeech: "noun", translations: { en: "judgment" }, example: "스스로 판단해야 해요.", exampleTranslations: { en: "You have to judge for yourself." }, audioUrl: null, status: "review" },
  { id: "L4-S17-W19", korean: "주장하다", partOfSpeech: "verb", translations: { en: "to argue / claim" }, example: "그는 자기 생각을 주장해요.", exampleTranslations: { en: "He argues for his own idea." }, audioUrl: null, status: "review" },
  { id: "L4-S17-W20", korean: "동의하다", partOfSpeech: "verb", translations: { en: "to agree" }, example: "저도 그 의견에 동의해요.", exampleTranslations: { en: "I also agree with that opinion." }, audioUrl: null, status: "review" },
  { id: "L4-S17-W21", korean: "반대하다", partOfSpeech: "verb", translations: { en: "to oppose" }, example: "저는 그 계획에 반대해요.", exampleTranslations: { en: "I oppose that plan." }, audioUrl: null, status: "review" },
  { id: "L4-S17-W22", korean: "판단하다", partOfSpeech: "verb", translations: { en: "to judge / determine" }, example: "상황을 잘 판단해야 해요.", exampleTranslations: { en: "You have to judge the situation well." }, audioUrl: null, status: "review" },
  { id: "L4-S17-W23", korean: "중요하다", partOfSpeech: "adjective", translations: { en: "important" }, example: "가격보다 품질이 중요해요.", exampleTranslations: { en: "Quality is more important than price." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L4-S17-S01", korean: "저는 온라인 수업을 계속 확대하는 것이 좋다고 생각해요.", translations: { en: "I think it's good to keep expanding online classes." }, keyExpression: "-다고 생각하다", relatedWords: [], audioUrl: null },
  { id: "L4-S17-S02", korean: "시간을 아낄 수 있기 때문이에요.", translations: { en: "It's because you can save time." }, keyExpression: "-기 때문이다", relatedWords: [], audioUrl: null },
  { id: "L4-S17-S03", korean: "온라인 수업은 편리한 반면에 집중하기 어려운 사람도 있어요.", translations: { en: "Online classes are convenient, while some people find it hard to concentrate." }, keyExpression: "-는 반면에", relatedWords: [], audioUrl: null },
  { id: "L4-S17-S04", korean: "도시에서는 대중교통을 더 많이 이용해야 한다고 생각해요.", translations: { en: "I think public transportation should be used more in cities." }, keyExpression: "-다고 생각하다", relatedWords: [], audioUrl: null },
  { id: "L4-S17-S05", korean: "교통체증과 환경문제를 줄일 수 있기 때문이에요.", translations: { en: "It's because you can reduce traffic congestion and environmental problems." }, keyExpression: "-기 때문이다", relatedWords: [], audioUrl: null },
  { id: "L4-S17-S06", korean: "자가용은 편리한 반면에 비용이 많이 들 수 있어요.", translations: { en: "A private car is convenient, while it can cost a lot." }, keyExpression: "-는 반면에", relatedWords: [], audioUrl: null },
  { id: "L4-S17-S07", korean: "저는 상대방의 입장도 고려해서 의견을 말하려고 해요.", translations: { en: "I try to state my opinion while also considering the other person's position." }, keyExpression: "고려하다", relatedWords: ["입장", "고려하다"], audioUrl: null },
  { id: "L4-S17-S08", korean: "타당한 근거가 있으면 상대방을 설득하기가 더 쉬워요.", translations: { en: "If you have valid grounds, it's easier to persuade the other person." }, keyExpression: "타당하다", relatedWords: ["타당하다", "근거", "설득하다"], audioUrl: null },
  { id: "L4-S17-S09", korean: "사람마다 견해가 다를 수 있지만 저는 제 의견을 확신해요.", translations: { en: "Views can differ from person to person, but I'm convinced of my opinion." }, keyExpression: "확신하다", relatedWords: ["견해", "확신하다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L4-S17-G01",
    pattern: "-다고 생각하다 (복습)",
    meanings: { en: "to think that (review, for stating opinions)" },
    explanations: {
      en: "Keep using -다고 생각하다 (TOPIK3 STEP13) as the core building block for stating a clear opinion at an intermediate level.",
    },
    examples: [
      { korean: "저는 온라인 수업을 계속 확대하는 것이 좋다고 생각해요.", translations: { en: "I think it's good to keep expanding online classes." } },
      { korean: "도시에서는 대중교통을 더 많이 이용해야 한다고 생각해요.", translations: { en: "I think public transportation should be used more in cities." } },
    ],
  },
  {
    id: "L4-S17-G02",
    pattern: "-는 반면에 (복습)",
    meanings: { en: "while, on the other hand (review)" },
    explanations: {
      en: "Keep using -는 반면에 (TOPIK3 STEP9) to briefly acknowledge a different or opposing point after stating your opinion.",
    },
    examples: [
      { korean: "온라인 수업은 편리한 반면에 집중하기 어려운 사람도 있어요.", translations: { en: "Online classes are convenient, while some people find it hard to concentrate." } },
      { korean: "자가용은 편리한 반면에 비용이 많이 들 수 있어요.", translations: { en: "A private car is convenient, while it can cost a lot." } },
    ],
  },
  {
    id: "L4-S17-G03",
    pattern: "-기 때문이다",
    meanings: { en: "it is because ~ (sentence-final reason, distinct from the connector -기 때문에)" },
    explanations: {
      en: "Attach -기 때문이다 to a clause to give the reason as its own separate sentence, right after stating an opinion — a more written/formal way to justify a claim than the mid-sentence connector -기 때문에.",
    },
    examples: [
      { korean: "시간을 아낄 수 있기 때문이에요.", translations: { en: "It's because you can save time." } },
      { korean: "교통체증과 환경문제를 줄일 수 있기 때문이에요.", translations: { en: "It's because you can reduce traffic congestion and environmental problems." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L4-S17-L01",
    audioText: "저는 온라인 수업을 계속 확대하는 것이 좋다고 생각해요. 시간과 장소에 상관없이 들을 수 있기 때문이에요. 물론 집중하기 어려운 사람도 있는 반면에, 저는 장점이 더 크다고 봐요.",
    audioUrl: null,
    question: "이 사람은 온라인 수업에 대해 어떤 입장입니까?",
    options: ["찬성하는 입장", "반대하는 입장", "관심이 없는 입장", "판단을 유보하는 입장"],
    correctAnswer: 0,
    translations: { en: { question: "What is this person's stance on online classes?", explanation: 'The sentence says they think expanding online classes is good, so the correct answer is 찬성하는 입장.' } },
  },
  {
    id: "L4-S17-L02",
    audioText: "도시에서는 대중교통을 더 많이 이용해야 한다고 생각해요. 교통체증과 환경문제를 줄일 수 있기 때문이에요. 자가용이 편한 반면에 비용도 많이 들잖아요.",
    audioUrl: null,
    question: "이 사람이 대중교통 이용을 주장하는 이유는 무엇입니까?",
    options: ["요금이 비싸서", "교통체증과 환경문제를 줄일 수 있어서", "자가용이 없어서", "친구들이 이용해서"],
    correctAnswer: 1,
    translations: { en: { question: "Why does this person argue for using public transportation?", explanation: "The sentence says it can reduce traffic congestion and environmental problems, so the correct answer is 교통체증과 환경문제를 줄일 수 있어서." } },
  },
  {
    id: "L4-S17-L03",
    audioText: "저는 상대방의 입장도 고려해서 의견을 말하려고 해요. 제 주장만 옳다고 생각하지 않아요.",
    audioUrl: null,
    question: "이 사람의 태도는 어떻습니까?",
    options: ["자기 의견만 옳다고 주장한다", "의견을 아예 말하지 않는다", "상대방의 입장도 고려한다", "항상 반대만 한다"],
    correctAnswer: 2,
    translations: { en: { question: "What is this person's attitude?", explanation: "The sentence says they consider the other person's position too, so the correct answer is 상대방의 입장도 고려한다." } },
  },
  {
    id: "L4-S17-L04",
    audioText: "타당한 근거가 있으면 상대방을 설득하기가 더 쉬워요. 그래서 저는 의견을 말할 때 항상 근거를 함께 제시하려고 해요.",
    audioUrl: null,
    question: "이 사람은 의견을 말할 때 무엇을 함께 제시하려고 합니까?",
    options: ["시간", "감정", "가격", "근거"],
    correctAnswer: 3,
    translations: { en: { question: "What does this person try to present along with their opinion?", explanation: "The sentence says they present grounds together, so the correct answer is 근거." } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L4-S17-R01",
    passage:
      "저는 온라인 수업을 계속 확대하는 것이 좋다고 생각해요.\n첫 번째 이유는 시간과 장소에 상관없이 들을 수 있기 때문이에요.\n두 번째 이유는 반복해서 들을 수 있어서 학습 효과도 크기 때문이에요.\n물론 직접 만나는 수업이 집중하기 더 좋다는 반대 의견도 이해하지만, 저는 온라인 수업의 장점이 더 크다고 확신해요.",
    question: "이 사람이 온라인 수업을 찬성하는 두 번째 이유는 무엇입니까?",
    options: ["반복해서 들을 수 있어서", "시간과 장소에 상관없어서", "가격이 싸서", "친구들이 좋아해서"],
    correctAnswer: 0,
    translations: { en: { question: "What is this person's second reason for supporting online classes?", explanation: "The passage says you can listen repeatedly and the learning effect is large, so the correct answer is 반복해서 들을 수 있어서." } },
  },
  {
    id: "L4-S17-R02",
    passage:
      "도시에서는 자가용보다 대중교통을 더 많이 이용해야 한다고 생각합니다.\n첫째, 대중교통은 교통체증을 줄이는 데 도움이 되기 때문입니다.\n둘째, 환경문제를 줄이는 효과도 있기 때문입니다.\n물론 자가용이 더 편리한 경우도 있는 반면에, 도시 전체를 생각하면 대중교통 이용이 더 타당하다고 봅니다.",
    question: "이 글의 주장은 무엇입니까?",
    options: ["자가용을 더 많이 타야 한다", "도시에서 대중교통을 더 많이 이용해야 한다", "교통수단을 아예 없애야 한다", "환경문제는 상관없다"],
    correctAnswer: 1,
    translations: { en: { question: "What is the argument of this passage?", explanation: "The passage argues for using public transportation more in cities, so the correct answer is 도시에서 대중교통을 더 많이 이용해야 한다." } },
  },
  {
    id: "L4-S17-R03",
    passage:
      "저는 어떤 주제에 대해 의견을 말할 때 먼저 근거를 정리해요.\n근거가 타당해야 상대방을 설득할 수 있다고 생각하기 때문이에요.\n또한 저와 다른 견해도 미리 고려하면 더 논리적인 주장을 만들 수 있어요.\n이런 방식으로 의견을 말하면 상대방도 제 주장에 좀 더 동의하기 쉬워지는 것 같아요.",
    question: "이 사람은 의견을 말하기 전에 무엇을 합니까?",
    options: ["아무 준비도 안 한다", "무조건 자기 생각만 말한다", "근거를 정리하고 다른 견해도 고려한다", "상대방을 무시한다"],
    correctAnswer: 2,
    translations: { en: { question: "What does this person do before stating an opinion?", explanation: "The passage says they organize grounds and consider other views, so the correct answer is 근거를 정리하고 다른 견해도 고려한다." } },
  },
  {
    id: "L4-S17-R04",
    passage:
      "찬성과 반대 의견이 있는 주제에 대해 이야기할 때는 상대방의 입장을 이해하는 것도 중요해요.\n제 주장만 타당하다고 생각하면 대화가 어려워질 수 있기 때문이에요.\n저는 먼저 제 의견과 이유를 말한 다음, 다른 관점도 짧게 언급하는 편이에요.\n이렇게 하면 서로의 견해를 존중하면서도 제 의견을 분명히 전달할 수 있어요.",
    question: "이 사람이 의견을 말하는 방식은 무엇입니까?",
    options: ["자기 의견만 말하고 끝낸다", "아무 이유 없이 주장만 한다", "다른 사람의 의견만 따른다", "의견과 이유를 말한 후 다른 관점도 언급한다"],
    correctAnswer: 3,
    translations: { en: { question: "What is this person's way of stating opinions?", explanation: "The passage says they state their opinion and reason, then briefly mention another viewpoint, so the correct answer is 의견과 이유를 말한 후 다른 관점도 언급한다." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L4-S17-WR01",
    type: "keyword-writing",
    prompt: { en: "Write one sentence using all of the following words." },
    keywords: ["생각하다", "이유", "장점", "반면에"],
    sampleAnswer: { en: "저는 이 방법이 좋다고 생각해요. 이유는 장점이 많은 반면에 단점은 적기 때문이에요." },
    explanation: { en: "Combine -다고 생각하다 for the opinion, 이유/장점 for the support, and -는 반면에 for a brief contrast." },
  },
  {
    id: "L4-S17-WR02",
    type: "short-response",
    prompt: {
      en: "Choose one familiar topic below and write your opinion in 6-7 sentences.\n- Do you think online classes should keep expanding?\n- Do you think cities should use public transportation more than private cars?\nStructure: 1) your position, 2) reason 1, 3) explanation/example, 4) reason 2, 5) explanation, 6) brief mention of another view, 7) conclusion.",
    },
    keywords: ["의견", "이유", "근거", "반면에", "생각하다"],
    sampleAnswer: {
      en: "저는 도시에서 대중교통을 더 많이 이용해야 한다고 생각해요. 첫 번째 이유는 교통체증을 줄일 수 있기 때문이에요. 자가용이 늘어날수록 도로는 더 막히기 마련이에요. 두 번째 이유는 환경문제를 줄이는 효과가 있기 때문이에요. 대중교통을 이용하면 탄소 배출도 줄어들어요. 물론 자가용이 더 편리한 경우도 있는 반면에, 도시 전체를 생각하면 대중교통 이용이 더 타당하다고 확신해요. 그래서 저는 이 의견에 찬성해요.",
    },
    explanation: { en: "7 sentences following position → reason 1 → example → reason 2 → explanation → other view → conclusion is enough at this stage — not a long TOPIK 5 essay yet." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L4-S17-P01", type: "vocabulary", question: '"주장"의 뜻은 무엇입니까?', options: ["Argument / claim", "Agreement", "Judgment", "View"], correctAnswer: 0, explanation: { en: "주장 means argument/claim." } },
  { id: "L4-S17-P02", type: "vocabulary", question: '"타당하다"의 뜻은 무엇입니까?', options: ["Logical", "Valid / reasonable", "Convinced", "Persuaded"], correctAnswer: 1, explanation: { en: "타당하다 means valid/reasonable." } },
  { id: "L4-S17-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n저는 이 방법이 좋______.", options: ["다고 생각해요", "은 반면이에요", "기 나름이에요", "은 대신이에요"], correctAnswer: 0, explanation: { en: "-다고 생각하다 states an opinion: 좋다고 생각해요." } },
  { id: "L4-S17-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n시간을 아낄 수 있______.", options: ["기 때문이에요", "는 김이에요", "기 나름이에요", "는 대신이에요"], correctAnswer: 0, explanation: { en: "-기 때문이다 gives the reason as its own sentence: 아낄 수 있기 때문이에요." } },
  { id: "L4-S17-P05", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n온라인 수업은 편리한 ______ 집중하기 어려운 사람도 있어요.", options: ["대신에", "반면에", "김에", "동안"], correctAnswer: 1, explanation: { en: "-는 반면에 contrasts an advantage and disadvantage: 편리한 반면에." } },
  { id: "L4-S17-P06", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n저는 상대방의 ______도 고려해서 의견을 말해요.", options: ["판단", "입장", "확신", "주장"], correctAnswer: 1, explanation: { en: "입장 (position/stance) fits considering another person's viewpoint." } },
  { id: "L4-S17-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n타당한 근거가 있으면 상대방을 ______ 쉬워요.", options: ["확신하기가", "설득하기가", "고려하기가", "판단하기가"], correctAnswer: 1, explanation: { en: "설득하다 (to persuade) fits convincing someone with valid grounds." } },
  { id: "L4-S17-P08", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n사람마다 ______이/가 다를 수 있어요.", options: ["선택", "동의", "견해", "설득"], correctAnswer: 2, explanation: { en: "견해 (view/perspective) fits describing how opinions vary." } },
  { id: "L4-S17-P09", type: "listening", audioText: "저는 온라인 수업을 계속 확대하는 것이 좋다고 생각해요. 시간과 장소에 상관없이 들을 수 있기 때문이에요.", question: "이 사람은 온라인 수업에 대해 어떤 입장입니까?", options: ["반대하는 입장", "관심이 없는 입장", "판단을 유보하는 입장", "찬성하는 입장"], correctAnswer: 3, explanation: { en: "The sentence supports expanding online classes, so the answer is 찬성하는 입장." } },
  { id: "L4-S17-P10", type: "listening", audioText: "도시에서는 대중교통을 더 많이 이용해야 한다고 생각해요. 교통체증과 환경문제를 줄일 수 있기 때문이에요.", question: "이 사람이 대중교통 이용을 주장하는 이유는 무엇입니까?", options: ["요금이 비싸서", "자가용이 없어서", "친구들이 이용해서", "교통체증과 환경문제를 줄일 수 있어서"], correctAnswer: 3, explanation: { en: "The sentence says it can reduce traffic congestion and environmental problems, so the answer is 교통체증과 환경문제를 줄일 수 있어서." } },
  { id: "L4-S17-P11", type: "reading", passage: "첫 번째 이유는 시간과 장소에 상관없이 들을 수 있기 때문이에요. 두 번째 이유는 반복해서 들을 수 있어서 학습 효과도 크기 때문이에요.", question: "이 사람이 온라인 수업을 찬성하는 두 번째 이유는 무엇입니까?", options: ["시간과 장소에 상관없어서", "가격이 싸서", "친구들이 좋아해서", "반복해서 들을 수 있어서"], correctAnswer: 3, explanation: { en: "The passage says you can listen repeatedly, so the answer is 반복해서 들을 수 있어서." } },
  { id: "L4-S17-P12", type: "reading", passage: "저는 어떤 주제에 대해 의견을 말할 때 먼저 근거를 정리해요. 또한 저와 다른 견해도 미리 고려하면 더 논리적인 주장을 만들 수 있어요.", question: "이 사람은 의견을 말하기 전에 무엇을 합니까?", options: ["아무 준비도 안 한다", "무조건 자기 생각만 말한다", "근거를 정리하고 다른 견해도 고려한다", "상대방을 무시한다"], correctAnswer: 2, explanation: { en: "The passage says they organize grounds and consider other views, so the answer is 근거를 정리하고 다른 견해도 고려한다." } },
  { id: "L4-S17-P13", type: "sentence", question: "다음 중 자연스러운 문장은?", options: ["시간을 아낄 수 있어서 때문이에요.", "시간을 아낄 수 있기 때문에요.", "시간을 아낄 수 있기 때문이에요.", "시간을 아낄 수 있는 때문이에요."], correctAnswer: 2, explanation: { en: "-기 때문이다 attaches to the clause as a full sentence-final form: 있기 때문이에요." } },
];

export const STEP_4_17: StepContent = {
  level: 4,
  step: 17,
  title: "의견과 주장 (Opinions and Arguments)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
