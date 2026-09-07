// TOPIK 4 STEP 10 — Environment and Life (환경과 생활).
// Independent of TOPIK1/TOPIK2/TOPIK3/TOPIK4 STEP1-9's data files.
// 에너지, 재활용, 분리수거, 사용량, 오염, 절약, 실천하다, 개선하다
// already exist as "new" elsewhere (TOPIK3/TOPIK4 STEP3) — recorded
// here with status "review". -기 위해서는 is an extension of TOPIK3
// STEP2's -기 위해서 — labeled "(복습)" rather than re-taught as new,
// per docs/topik4-curriculum.md §4.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L4-S10-W01", korean: "환경문제", partOfSpeech: "noun", translations: { en: "environmental problem" }, example: "환경문제가 점점 심각해지고 있어요.", exampleTranslations: { en: "Environmental problems are becoming more serious." }, audioUrl: null, status: "new" },
  { id: "L4-S10-W02", korean: "환경보호", partOfSpeech: "noun", translations: { en: "environmental protection" }, example: "환경보호에 관심이 많아요.", exampleTranslations: { en: "I'm very interested in environmental protection." }, audioUrl: null, status: "new" },
  { id: "L4-S10-W03", korean: "기후", partOfSpeech: "noun", translations: { en: "climate" }, example: "요즘 기후가 많이 변했어요.", exampleTranslations: { en: "The climate has changed a lot these days." }, audioUrl: null, status: "new" },
  { id: "L4-S10-W04", korean: "자원", partOfSpeech: "noun", translations: { en: "resource" }, example: "자원을 아껴 써야 해요.", exampleTranslations: { en: "We must use resources sparingly." }, audioUrl: null, status: "new" },
  { id: "L4-S10-W05", korean: "일회용품", partOfSpeech: "noun", translations: { en: "disposable product" }, example: "일회용품 사용을 줄이고 있어요.", exampleTranslations: { en: "I'm reducing my use of disposable products." }, audioUrl: null, status: "new" },
  { id: "L4-S10-W06", korean: "대기", partOfSpeech: "noun", translations: { en: "atmosphere / air" }, example: "대기가 많이 오염됐어요.", exampleTranslations: { en: "The atmosphere is heavily polluted." }, audioUrl: null, status: "new" },
  { id: "L4-S10-W07", korean: "보호", partOfSpeech: "noun", translations: { en: "protection" }, example: "환경 보호를 위해 노력해요.", exampleTranslations: { en: "I make an effort for environmental protection." }, audioUrl: null, status: "new" },
  { id: "L4-S10-W08", korean: "재사용하다", partOfSpeech: "verb", translations: { en: "to reuse" }, example: "쇼핑백을 재사용해요.", exampleTranslations: { en: "I reuse shopping bags." }, audioUrl: null, status: "new" },
  { id: "L4-S10-W09", korean: "기후변화", partOfSpeech: "noun", translations: { en: "climate change" }, example: "기후변화가 큰 문제예요.", exampleTranslations: { en: "Climate change is a big problem." }, audioUrl: null, status: "new" },
  { id: "L4-S10-W10", korean: "온실가스", partOfSpeech: "noun", translations: { en: "greenhouse gas" }, example: "온실가스를 줄여야 해요.", exampleTranslations: { en: "We must reduce greenhouse gases." }, audioUrl: null, status: "new" },
  { id: "L4-S10-W11", korean: "탄소", partOfSpeech: "noun", translations: { en: "carbon" }, example: "탄소 배출을 줄이려고 해요.", exampleTranslations: { en: "I try to reduce carbon emissions." }, audioUrl: null, status: "new" },
  { id: "L4-S10-W12", korean: "미세먼지", partOfSpeech: "noun", translations: { en: "fine dust" }, example: "오늘은 미세먼지가 심해요.", exampleTranslations: { en: "Fine dust is bad today." }, audioUrl: null, status: "new" },
  { id: "L4-S10-W13", korean: "폐기물", partOfSpeech: "noun", translations: { en: "waste (material)" }, example: "폐기물을 줄이는 것이 중요해요.", exampleTranslations: { en: "Reducing waste is important." }, audioUrl: null, status: "new" },
  { id: "L4-S10-W14", korean: "지구온난화", partOfSpeech: "noun", translations: { en: "global warming" }, example: "지구온난화를 막아야 해요.", exampleTranslations: { en: "We must stop global warming." }, audioUrl: null, status: "new" },
  { id: "L4-S10-W15", korean: "자연보호", partOfSpeech: "noun", translations: { en: "nature conservation" }, example: "자연보호에 동참했어요.", exampleTranslations: { en: "I joined in nature conservation." }, audioUrl: null, status: "new" },
  { id: "L4-S10-W16", korean: "물자원", partOfSpeech: "noun", translations: { en: "water resources" }, example: "물자원을 아껴야 해요.", exampleTranslations: { en: "We must conserve water resources." }, audioUrl: null, status: "new" },
  { id: "L4-S10-W17", korean: "에너지", partOfSpeech: "noun", translations: { en: "energy" }, example: "에너지를 아껴 써요.", exampleTranslations: { en: "I use energy sparingly." }, audioUrl: null, status: "review" },
  { id: "L4-S10-W18", korean: "재활용", partOfSpeech: "noun", translations: { en: "recycling" }, example: "재활용을 열심히 해요.", exampleTranslations: { en: "I recycle diligently." }, audioUrl: null, status: "review" },
  { id: "L4-S10-W19", korean: "분리수거", partOfSpeech: "noun", translations: { en: "waste separation" }, example: "분리수거를 꼭 해야 해요.", exampleTranslations: { en: "You must separate your waste." }, audioUrl: null, status: "review" },
  { id: "L4-S10-W20", korean: "사용량", partOfSpeech: "noun", translations: { en: "amount used" }, example: "전기 사용량을 줄였어요.", exampleTranslations: { en: "I reduced my electricity usage." }, audioUrl: null, status: "review" },
  { id: "L4-S10-W21", korean: "오염", partOfSpeech: "noun", translations: { en: "pollution" }, example: "환경 오염이 심각해요.", exampleTranslations: { en: "Environmental pollution is serious." }, audioUrl: null, status: "review" },
  { id: "L4-S10-W22", korean: "절약", partOfSpeech: "noun", translations: { en: "saving / frugality" }, example: "절약이 중요해요.", exampleTranslations: { en: "Saving is important." }, audioUrl: null, status: "review" },
  { id: "L4-S10-W23", korean: "실천하다", partOfSpeech: "verb", translations: { en: "to put into practice" }, example: "분리수거를 실천해요.", exampleTranslations: { en: "I practice waste separation." }, audioUrl: null, status: "review" },
  { id: "L4-S10-W24", korean: "개선하다", partOfSpeech: "verb", translations: { en: "to improve" }, example: "업무환경을 개선하려고 해요.", exampleTranslations: { en: "We're trying to improve the work environment." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L4-S10-S01", korean: "환경을 보호하기 위해서는 일회용품 사용을 줄여야 합니다.", translations: { en: "In order to protect the environment, we must reduce the use of disposable products." }, keyExpression: "-기 위해서는", relatedWords: ["환경보호", "일회용품"], audioUrl: null },
  { id: "L4-S10-S02", korean: "기후변화를 막기 위해서는 온실가스를 줄여야 합니다.", translations: { en: "In order to stop climate change, we must reduce greenhouse gases." }, keyExpression: "-기 위해서는", relatedWords: ["기후변화", "온실가스"], audioUrl: null },
  { id: "L4-S10-S03", korean: "에너지를 아끼지 않으면 환경 문제가 더 심해질 수 있어요.", translations: { en: "If we don't conserve energy, environmental problems can get worse." }, keyExpression: "-지 않으면", relatedWords: ["에너지"], audioUrl: null },
  { id: "L4-S10-S04", korean: "자원을 재사용하지 않으면 폐기물이 계속 늘어날 거예요.", translations: { en: "If we don't reuse resources, waste will keep increasing." }, keyExpression: "-지 않으면", relatedWords: ["자원", "재사용하다", "폐기물"], audioUrl: null },
  { id: "L4-S10-S05", korean: "미세먼지와 대기 오염은 우리 건강에도 나쁜 영향을 줘요.", translations: { en: "Fine dust and air pollution also have a bad effect on our health." }, keyExpression: "대기", relatedWords: ["미세먼지", "대기", "오염"], audioUrl: null },
  { id: "L4-S10-S06", korean: "저는 자연보호를 위해 물자원을 아끼려고 노력해요.", translations: { en: "I try to conserve water resources for nature conservation." }, keyExpression: "자연보호", relatedWords: ["자연보호", "물자원"], audioUrl: null },
  { id: "L4-S10-S07", korean: "지구온난화를 늦추려면 탄소 배출을 줄이는 것이 중요해요.", translations: { en: "To slow global warming, reducing carbon emissions is important." }, keyExpression: "지구온난화", relatedWords: ["지구온난화", "탄소"], audioUrl: null },
  { id: "L4-S10-S08", korean: "저는 작은 것부터 환경 보호를 실천하려고 노력해요.", translations: { en: "I try to put environmental protection into practice, starting with small things." }, keyExpression: "실천하다", relatedWords: ["보호", "실천하다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L4-S10-G01",
    pattern: "-기 위해서는 (복습)",
    meanings: { en: "in order to (review, topic-marked extension of -기 위해서)" },
    explanations: {
      en: "Keep using -기 위해서는 (an extension of -기 위해서, TOPIK3 STEP2) to emphasize the goal before explaining what's required to reach it.",
    },
    examples: [
      { korean: "환경을 보호하기 위해서는 일회용품 사용을 줄여야 합니다.", translations: { en: "In order to protect the environment, we must reduce the use of disposable products." } },
      { korean: "기후변화를 막기 위해서는 온실가스를 줄여야 합니다.", translations: { en: "In order to stop climate change, we must reduce greenhouse gases." } },
    ],
  },
  {
    id: "L4-S10-G02",
    pattern: "-지 않으면",
    meanings: { en: "if (something) doesn't happen / unless" },
    explanations: {
      en: "Attach -지 않으면 to a verb/adjective stem to describe a negative condition and what follows if it isn't met.",
    },
    examples: [
      { korean: "에너지를 아끼지 않으면 환경 문제가 더 심해질 수 있어요.", translations: { en: "If we don't conserve energy, environmental problems can get worse." } },
      { korean: "자원을 재사용하지 않으면 폐기물이 계속 늘어날 거예요.", translations: { en: "If we don't reuse resources, waste will keep increasing." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L4-S10-L01",
    audioText: "환경을 보호하기 위해서는 일회용품 사용을 줄여야 합니다. 작은 습관부터 바꾸는 것이 중요합니다.",
    audioUrl: null,
    question: "환경을 보호하기 위해 무엇을 해야 합니까?",
    options: ["일회용품 사용을 줄인다", "에너지를 더 쓴다", "자동차를 더 산다", "물건을 더 많이 산다"],
    correctAnswer: 0,
    translations: { en: { question: "What must be done to protect the environment?", explanation: 'The sentence says "reduce the use of disposable products," so the correct answer is 일회용품 사용을 줄인다.' } },
  },
  {
    id: "L4-S10-L02",
    audioText: "에너지를 아끼지 않으면 환경 문제가 더 심해질 수 있어요. 그래서 저는 전기를 절약하려고 노력해요.",
    audioUrl: null,
    question: "이 사람은 무엇을 하려고 노력합니까?",
    options: ["전기를 더 많이 쓰려고", "전기를 절약하려고", "차를 사려고", "여행을 가려고"],
    correctAnswer: 1,
    translations: { en: { question: "What is this person trying to do?", explanation: 'The sentence says "trying to save electricity," so the correct answer is 전기를 절약하려고.' } },
  },
  {
    id: "L4-S10-L03",
    audioText: "요즘 미세먼지와 대기 오염이 심해서 밖에 나가기 힘든 날이 많아요. 저는 그래서 대중교통을 더 이용해요.",
    audioUrl: null,
    question: "이 사람은 왜 대중교통을 더 이용합니까?",
    options: ["돈이 없어서", "차가 없어서", "미세먼지와 대기 오염이 심해서", "친구가 없어서"],
    correctAnswer: 2,
    translations: { en: { question: "Why does this person use public transportation more?", explanation: "The sentence says fine dust and air pollution are bad, so the correct answer is 미세먼지와 대기 오염이 심해서." } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L4-S10-R01",
    passage:
      "요즘 환경문제가 점점 심각해지고 있어요.\n기후변화와 지구온난화로 날씨도 예전과 많이 달라졌어요.\n이 문제를 해결하기 위해서는 개인의 작은 노력도 중요해요.\n저는 일회용품 사용을 줄이고 자원을 재사용하려고 노력하고 있어요.",
    question: "이 사람은 환경문제를 위해 무엇을 하고 있습니까?",
    options: ["일회용품 사용을 줄이고 자원을 재사용한다", "아무것도 안 한다", "물건을 더 많이 산다", "차를 새로 산다"],
    correctAnswer: 0,
    translations: { en: { question: "What is this person doing for environmental problems?", explanation: "The passage says they reduce disposable product use and reuse resources, so the correct answer is 일회용품 사용을 줄이고 자원을 재사용한다." } },
  },
  {
    id: "L4-S10-R02",
    passage:
      "미세먼지와 대기 오염은 우리 건강뿐만 아니라 환경 전체에도 나쁜 영향을 줘요.\n이 문제를 줄이기 위해서는 자동차 이용을 줄이고 대중교통을 이용하는 것이 좋아요.\n또한 온실가스와 탄소 배출을 줄이는 정책도 필요해요.\n개인과 정부가 함께 노력하지 않으면 이 문제는 해결되기 어려워요.",
    question: "이 글에서 대기 오염을 줄이는 방법이 아닌 것은 무엇입니까?",
    options: ["대중교통 이용", "자동차 이용 확대", "온실가스 감소", "탄소 배출 감소"],
    correctAnswer: 1,
    translations: { en: { question: "Which is NOT a way to reduce air pollution mentioned in the passage?", explanation: "Expanding car use is not mentioned as a solution, so the correct answer is 자동차 이용 확대." } },
  },
  {
    id: "L4-S10-R03",
    passage:
      "저는 예전에는 환경문제에 별로 관심이 없었어요.\n하지만 기후변화로 인한 이상 기후를 직접 경험하면서 생각이 바뀌었어요.\n지금은 분리수거를 철저히 하고 일회용품 대신 재사용할 수 있는 물건을 사용해요.\n작은 실천이지만 이렇게 하나씩 바꿔 나가는 것이 중요하다고 생각해요.",
    question: "이 사람의 생각은 어떻게 바뀌었습니까?",
    options: ["환경문제에 더 무관심해졌다", "환경문제는 해결할 수 없다고 생각한다", "이상 기후를 경험하고 환경문제에 관심을 갖게 됐다", "다른 사람에게 관심이 없다"],
    correctAnswer: 2,
    translations: { en: { question: "How did this person's thinking change?", explanation: "The passage says they became interested in environmental issues after experiencing unusual weather, so the correct answer is 이상 기후를 경험하고 환경문제에 관심을 갖게 됐다." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L4-S10-WR01",
    type: "keyword-writing",
    prompt: { en: "Write one sentence using all of the following words." },
    keywords: ["환경", "줄이다", "실천하다"],
    sampleAnswer: { en: "저는 환경을 위해 일회용품 사용을 줄이는 것을 실천하고 있어요." },
    explanation: { en: "Combine 환경 as the topic, 줄이다 as the action, and 실천하다 to state it's an ongoing practice." },
  },
  {
    id: "L4-S10-WR02",
    type: "short-response",
    prompt: {
      en: "Write 5-6 sentences about things you can do in daily life to protect the environment.\nStructure: 1) why environmental protection is needed, 2) method 1, 3) reason, 4) method 2, 5) your own practice, 6) closing.",
    },
    keywords: ["환경보호", "일회용품", "재사용하다", "실천하다"],
    sampleAnswer: {
      en: "요즘 환경문제가 심각해지고 있어서 환경보호가 꼭 필요하다고 생각해요. 첫 번째 방법은 일회용품 사용을 줄이는 거예요. 일회용품은 한 번 쓰고 버려져서 폐기물을 많이 만들기 때문이에요. 두 번째 방법은 물건을 재사용하는 거예요. 저는 텀블러를 가지고 다니고 분리수거를 철저히 실천하고 있어요. 작은 실천이지만 이런 노력이 모이면 환경을 지킬 수 있다고 생각해요.",
    },
    explanation: { en: "6 sentences following necessity → method 1 → reason → method 2 → personal practice → closing is enough at this stage." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L4-S10-P01", type: "vocabulary", question: '"기후변화"의 뜻은 무엇입니까?', options: ["Climate change", "Fine dust", "Recycling", "Waste separation"], correctAnswer: 0, explanation: { en: "기후변화 means climate change." } },
  { id: "L4-S10-P02", type: "vocabulary", question: '"일회용품"의 뜻은 무엇입니까?', options: ["Resource", "Disposable product", "Carbon", "Atmosphere"], correctAnswer: 1, explanation: { en: "일회용품 means disposable product." } },
  { id: "L4-S10-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n환경을 보호하______ 일회용품 사용을 줄여야 합니다.", options: ["기 위해서는", "는 대신에", "는 김에", "기 나름으로"], correctAnswer: 0, explanation: { en: "-기 위해서는 emphasizes the goal: 보호하기 위해서는." } },
  { id: "L4-S10-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n에너지를 아끼______ 환경 문제가 더 심해질 수 있어요.", options: ["는 반면에", "는 대신에", "지 않으면", "기 나름이면"], correctAnswer: 2, explanation: { en: "-지 않으면 states a negative condition: 아끼지 않으면." } },
  { id: "L4-S10-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n저는 쇼핑백을 ______ 자원을 아껴요.", options: ["확대해서", "오염해서", "발생해서", "재사용해서"], correctAnswer: 3, explanation: { en: "재사용하다 (to reuse) fits reusing a shopping bag." } },
  { id: "L4-S10-P06", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n오늘은 ______이/가 심해서 밖에 나가기 힘들어요.", options: ["자원", "재활용", "미세먼지", "탄소"], correctAnswer: 2, explanation: { en: "미세먼지 (fine dust) fits describing bad outdoor air quality." } },
  { id: "L4-S10-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n지구온난화를 늦추려면 ______ 배출을 줄여야 해요.", options: ["탄소", "자원", "폐기물", "물자원"], correctAnswer: 0, explanation: { en: "탄소 (carbon) fits reducing carbon emissions." } },
  { id: "L4-S10-P08", type: "listening", audioText: "환경을 보호하기 위해서는 일회용품 사용을 줄여야 합니다.", question: "환경을 보호하기 위해 무엇을 해야 합니까?", options: ["자동차를 더 산다", "일회용품 사용을 줄인다", "에너지를 더 쓴다", "물건을 더 많이 산다"], correctAnswer: 1, explanation: { en: "The sentence says reduce disposable product use, so the answer is 일회용품 사용을 줄인다." } },
  { id: "L4-S10-P09", type: "listening", audioText: "에너지를 아끼지 않으면 환경 문제가 더 심해질 수 있어요. 그래서 저는 전기를 절약하려고 노력해요.", question: "이 사람은 무엇을 하려고 노력합니까?", options: ["차를 사려고", "여행을 가려고", "전기를 절약하려고", "전기를 더 많이 쓰려고"], correctAnswer: 2, explanation: { en: "The sentence says trying to save electricity, so the answer is 전기를 절약하려고." } },
  { id: "L4-S10-P10", type: "reading", passage: "이 문제를 해결하기 위해서는 개인의 작은 노력도 중요해요. 저는 일회용품 사용을 줄이고 자원을 재사용하려고 노력하고 있어요.", question: "이 사람은 환경문제를 위해 무엇을 하고 있습니까?", options: ["아무것도 안 한다", "차를 새로 산다", "물건을 더 많이 산다", "일회용품 사용을 줄이고 자원을 재사용한다"], correctAnswer: 3, explanation: { en: "The passage says they reduce disposable use and reuse resources, so the answer is 일회용품 사용을 줄이고 자원을 재사용한다." } },
  { id: "L4-S10-P11", type: "reading", passage: "이 문제를 줄이기 위해서는 자동차 이용을 줄이고 대중교통을 이용하는 것이 좋아요. 온실가스와 탄소 배출을 줄이는 정책도 필요해요.", question: "이 글에서 대기 오염을 줄이는 방법이 아닌 것은 무엇입니까?", options: ["대중교통 이용", "온실가스 감소", "탄소 배출 감소", "자동차 이용 확대"], correctAnswer: 3, explanation: { en: "Expanding car use is not mentioned as a solution, so the answer is 자동차 이용 확대." } },
  { id: "L4-S10-P12", type: "sentence", question: "다음 중 자연스러운 문장은?", options: ["에너지를 아끼않으면 문제가 심해져요.", "에너지를 아끼지 않으면 문제가 심해져요.", "에너지를 아낀지 않으면 문제가 심해져요.", "에너지를 아끼지 안 하면 문제가 심해져요."], correctAnswer: 1, explanation: { en: "-지 않으면 attaches to the verb stem: 아끼지 않으면." } },
];

export const STEP_4_10: StepContent = {
  level: 4,
  step: 10,
  title: "환경과 생활 (Environment and Life)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
