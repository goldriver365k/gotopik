// TOPIK 3 STEP 14 — Environment and Public Life (환경과 공공생활).
// Independent of TOPIK1/TOPIK2/TOPIK3 STEP1-13's data files.
// 환경, 물, 아끼다, 줄이다, 깨끗하다, 필요하다, 실천하다 already exist
// as "new" — recorded here with status "review".
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L3-S14-W01", korean: "쓰레기", partOfSpeech: "noun", translations: { en: "trash" }, example: "쓰레기를 버렸어요.", exampleTranslations: { en: "I threw away the trash." }, audioUrl: null, status: "new" },
  { id: "L3-S14-W02", korean: "재활용", partOfSpeech: "noun", translations: { en: "recycling" }, example: "재활용을 열심히 해요.", exampleTranslations: { en: "I recycle diligently." }, audioUrl: null, status: "new" },
  { id: "L3-S14-W03", korean: "분리수거", partOfSpeech: "noun", translations: { en: "waste separation" }, example: "분리수거를 꼭 해야 해요.", exampleTranslations: { en: "You must separate your waste." }, audioUrl: null, status: "new" },
  { id: "L3-S14-W04", korean: "공공장소", partOfSpeech: "noun", translations: { en: "public place" }, example: "공공장소에서는 조용히 해요.", exampleTranslations: { en: "Be quiet in public places." }, audioUrl: null, status: "new" },
  { id: "L3-S14-W05", korean: "규칙", partOfSpeech: "noun", translations: { en: "rule" }, example: "규칙을 지켜야 해요.", exampleTranslations: { en: "You have to follow the rules." }, audioUrl: null, status: "new" },
  { id: "L3-S14-W06", korean: "에너지", partOfSpeech: "noun", translations: { en: "energy" }, example: "에너지를 아껴 써요.", exampleTranslations: { en: "I use energy sparingly." }, audioUrl: null, status: "new" },
  { id: "L3-S14-W07", korean: "전기", partOfSpeech: "noun", translations: { en: "electricity" }, example: "전기를 아껴야 해요.", exampleTranslations: { en: "You have to save electricity." }, audioUrl: null, status: "new" },
  { id: "L3-S14-W08", korean: "버리다", partOfSpeech: "verb", translations: { en: "to throw away" }, example: "쓰레기를 버려요.", exampleTranslations: { en: "I throw away trash." }, audioUrl: null, status: "new" },
  { id: "L3-S14-W09", korean: "보호하다", partOfSpeech: "verb", translations: { en: "to protect" }, example: "환경을 보호해요.", exampleTranslations: { en: "I protect the environment." }, audioUrl: null, status: "new" },
  { id: "L3-S14-W10", korean: "지키다", partOfSpeech: "verb", translations: { en: "to keep / observe (rules)" }, example: "규칙을 지켜요.", exampleTranslations: { en: "I observe the rules." }, audioUrl: null, status: "new" },
  { id: "L3-S14-W11", korean: "오염", partOfSpeech: "noun", translations: { en: "pollution" }, example: "환경 오염이 심각해요.", exampleTranslations: { en: "Environmental pollution is serious." }, audioUrl: null, status: "new" },
  { id: "L3-S14-W12", korean: "사용량", partOfSpeech: "noun", translations: { en: "amount used" }, example: "전기 사용량을 줄였어요.", exampleTranslations: { en: "I reduced my electricity usage." }, audioUrl: null, status: "new" },
  { id: "L3-S14-W13", korean: "절전", partOfSpeech: "noun", translations: { en: "power saving" }, example: "절전을 실천해요.", exampleTranslations: { en: "I practice power saving." }, audioUrl: null, status: "new" },
  { id: "L3-S14-W14", korean: "질서", partOfSpeech: "noun", translations: { en: "order (public order)" }, example: "질서를 지켜야 해요.", exampleTranslations: { en: "You have to maintain order." }, audioUrl: null, status: "new" },
  { id: "L3-S14-W15", korean: "쓰레기통", partOfSpeech: "noun", translations: { en: "trash can" }, example: "쓰레기통에 버리세요.", exampleTranslations: { en: "Please throw it in the trash can." }, audioUrl: null, status: "new" },
  { id: "L3-S14-W16", korean: "친환경", partOfSpeech: "noun", translations: { en: "eco-friendly" }, example: "친환경 제품을 사용해요.", exampleTranslations: { en: "I use eco-friendly products." }, audioUrl: null, status: "new" },
  { id: "L3-S14-W17", korean: "소중하다", partOfSpeech: "adjective", translations: { en: "precious / valuable" }, example: "물은 소중한 자원이에요.", exampleTranslations: { en: "Water is a precious resource." }, audioUrl: null, status: "new" },
  { id: "L3-S14-W18", korean: "지구", partOfSpeech: "noun", translations: { en: "earth / globe" }, example: "지구를 보호해야 해요.", exampleTranslations: { en: "We have to protect the earth." }, audioUrl: null, status: "new" },
  { id: "L3-S14-W19", korean: "환경", partOfSpeech: "noun", translations: { en: "environment" }, example: "환경을 위해 노력해요.", exampleTranslations: { en: "I make an effort for the environment." }, audioUrl: null, status: "review" },
  { id: "L3-S14-W20", korean: "물", partOfSpeech: "noun", translations: { en: "water" }, example: "물을 아껴 써요.", exampleTranslations: { en: "I use water sparingly." }, audioUrl: null, status: "review" },
  { id: "L3-S14-W21", korean: "아끼다", partOfSpeech: "verb", translations: { en: "to save / be frugal with" }, example: "전기를 아껴요.", exampleTranslations: { en: "I save electricity." }, audioUrl: null, status: "review" },
  { id: "L3-S14-W22", korean: "줄이다", partOfSpeech: "verb", translations: { en: "to reduce" }, example: "쓰레기를 줄여요.", exampleTranslations: { en: "I reduce trash." }, audioUrl: null, status: "review" },
  { id: "L3-S14-W23", korean: "깨끗하다", partOfSpeech: "adjective", translations: { en: "clean" }, example: "거리가 깨끗해요.", exampleTranslations: { en: "The street is clean." }, audioUrl: null, status: "review" },
  { id: "L3-S14-W24", korean: "필요하다", partOfSpeech: "adjective", translations: { en: "to be necessary" }, example: "모두의 노력이 필요해요.", exampleTranslations: { en: "Everyone's effort is necessary." }, audioUrl: null, status: "review" },
  { id: "L3-S14-W25", korean: "실천하다", partOfSpeech: "verb", translations: { en: "to put into practice" }, example: "분리수거를 실천해요.", exampleTranslations: { en: "I practice waste separation." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L3-S14-S01", korean: "환경을 위해서 쓰레기를 줄여야 해요.", translations: { en: "We should reduce trash for the environment." }, keyExpression: "-아/어야 하다", relatedWords: ["환경", "쓰레기", "줄이다"], audioUrl: null },
  { id: "L3-S14-S02", korean: "분리수거는 반드시 지키지 않으면 안 돼요.", translations: { en: "You must not fail to follow waste separation." }, keyExpression: "-지 않으면 안 되다", relatedWords: ["분리수거", "지키다"], audioUrl: null },
  { id: "L3-S14-S03", korean: "공공장소에서는 쓰레기를 쓰레기통에 버려야 해요.", translations: { en: "In public places, you have to throw trash in the trash can." }, keyExpression: "-아/어야 하다", relatedWords: ["공공장소", "쓰레기통", "버리다"], audioUrl: null },
  { id: "L3-S14-S04", korean: "전기를 아끼지 않으면 안 돼요. 사용량이 너무 많아요.", translations: { en: "We must save electricity. The usage is too high." }, keyExpression: "-지 않으면 안 되다", relatedWords: ["전기", "아끼다", "사용량"], audioUrl: null },
  { id: "L3-S14-S05", korean: "물은 소중한 자원이라서 아껴 써야 해요.", translations: { en: "Water is a precious resource, so we have to use it sparingly." }, keyExpression: "-아/어야 하다", relatedWords: ["물", "소중하다"], audioUrl: null },
  { id: "L3-S14-S06", korean: "지구를 보호하기 위해서 친환경 제품을 사용해요.", translations: { en: "I use eco-friendly products in order to protect the earth." }, keyExpression: "-기 위해서", relatedWords: ["지구", "보호하다", "친환경"], audioUrl: null },
  { id: "L3-S14-S07", korean: "공공장소에서는 질서를 지켜야 하고, 규칙을 실천하지 않으면 안 돼요.", translations: { en: "In public places, you have to keep order, and you must put the rules into practice." }, keyExpression: "-지 않으면 안 되다", relatedWords: ["질서", "규칙", "실천하다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L3-S14-G01",
    pattern: "-아/어야 하다 (복습/활용)",
    meanings: { en: "must / have to (review, applied to environment/public-life topics)" },
    explanations: {
      en: "Keep using -아/어야 하다 to state what's necessary — now for environmental care and public rules rather than daily routines.",
    },
    examples: [
      { korean: "환경을 위해서 쓰레기를 줄여야 해요.", translations: { en: "We should reduce trash for the environment." } },
      { korean: "공공장소에서는 쓰레기를 쓰레기통에 버려야 해요.", translations: { en: "In public places, you have to throw trash in the trash can." } },
    ],
  },
  {
    id: "L3-S14-G02",
    pattern: "-지 않으면 안 되다",
    meanings: { en: "must (not) / cannot avoid doing" },
    explanations: {
      en: "Attach -지 않으면 안 되다 to a verb stem for a stronger, double-negative way of saying something absolutely must be done — literally \"it's not okay if you don't.\"",
    },
    examples: [
      { korean: "분리수거는 반드시 지키지 않으면 안 돼요.", translations: { en: "You must not fail to follow waste separation." } },
      { korean: "전기를 아끼지 않으면 안 돼요. 사용량이 너무 많아요.", translations: { en: "We must save electricity. The usage is too high." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L3-S14-L01",
    audioText: "쓰레기를 버릴 때는 분리수거를 지키지 않으면 안 돼요.",
    audioUrl: null,
    question: "쓰레기를 버릴 때 무엇을 해야 합니까?",
    options: ["빨리 버려야 해요", "분리수거를 지켜야 해요", "쓰레기통을 사야 해요", "밤에 버려야 해요"],
    correctAnswer: 1,
    translations: { en: { question: "What should be done when throwing away trash?", explanation: 'The sentence says "you must follow waste separation," so the correct answer is 분리수거를 지켜야 해요.' } },
  },
  {
    id: "L3-S14-L02",
    audioText: "요즘 전기 사용량이 많아서 절전을 실천하려고 해요.",
    audioUrl: null,
    question: "이 사람은 왜 절전을 실천하려고 합니까?",
    options: ["정전이 돼서", "돈이 없어서", "전기 사용량이 많아서", "새 제품을 사려고"],
    correctAnswer: 2,
    translations: { en: { question: "Why are they trying to save power?", explanation: 'The sentence says "electricity usage is high," so the correct answer is 전기 사용량이 많아서.' } },
  },
  {
    id: "L3-S14-L03",
    audioText: "공공장소에서는 질서를 지키지 않으면 안 돼요. 모두가 규칙을 지켜야 편해요.",
    audioUrl: null,
    question: "공공장소에서 왜 규칙을 지켜야 합니까?",
    options: ["모두가 편하기 위해서", "돈을 아끼기 위해서", "시간을 줄이기 위해서", "친구를 만나기 위해서"],
    correctAnswer: 0,
    translations: { en: { question: "Why should rules be kept in public places?", explanation: 'The sentence says "so everyone is comfortable," so the correct answer is 모두가 편하기 위해서.' } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L3-S14-R01",
    passage:
      "저는 환경을 보호하기 위해서 몇 가지를 실천하고 있어요.\n먼저 쓰레기를 줄이고 꼭 분리수거를 해요.\n또 전기와 물을 아껴 쓰려고 노력해요.\n작은 습관이지만 지구를 위해 꼭 필요하다고 생각해요.",
    question: "이 사람이 환경을 위해 하는 일이 아닌 것은 무엇입니까?",
    options: ["분리수거하기", "전기와 물 아끼기", "친환경 제품만 사기", "쓰레기 줄이기"],
    correctAnswer: 2,
    translations: { en: { question: "Which is NOT something this person does for the environment?", explanation: "The passage mentions recycling, saving electricity/water, and reducing trash, but not only buying eco-friendly products, so the correct answer is 친환경 제품만 사기." } },
  },
  {
    id: "L3-S14-R02",
    passage:
      "공공장소에서는 다른 사람을 위해 질서를 지켜야 해요.\n쓰레기는 반드시 쓰레기통에 버려야 하고, 큰 소리로 이야기하면 안 돼요.\n이런 규칙을 지키지 않으면 다른 사람들이 불편해져요.\n모두가 규칙을 실천하면 더 깨끗하고 편한 공간이 돼요.",
    question: "규칙을 지키지 않으면 어떻게 됩니까?",
    options: ["쓰레기가 줄어들어요", "다른 사람들이 불편해져요", "공간이 넓어져요", "질서가 좋아져요"],
    correctAnswer: 1,
    translations: { en: { question: "What happens if the rules aren't followed?", explanation: "The passage says other people become inconvenienced, so the correct answer is 다른 사람들이 불편해져요." } },
  },
  {
    id: "L3-S14-R03",
    passage:
      "요즘 환경 오염 문제가 심각해지고 있어요.\n그래서 저는 일상생활에서 할 수 있는 작은 일부터 실천해요.\n예를 들어 전기 사용량을 줄이고 친환경 제품을 사용해요.\n지구는 소중하니까 모두 함께 노력하지 않으면 안 된다고 생각해요.",
    question: "이 사람은 환경을 위해 어떤 노력을 합니까?",
    options: ["전기 사용량을 줄이고 친환경 제품을 사용해요", "매일 새 물건을 사요", "쓰레기를 아무 곳에나 버려요", "물을 많이 사용해요"],
    correctAnswer: 0,
    translations: { en: { question: "What effort does this person make for the environment?", explanation: "The passage says they reduce electricity usage and use eco-friendly products, so the correct answer is 전기 사용량을 줄이고 친환경 제품을 사용해요." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L3-S14-WR01",
    type: "sentence-completion",
    prompt: { en: "Complete the sentence: 환경을 위해서 ______해야 합니다." },
    sampleAnswer: { en: "환경을 위해서 쓰레기를 줄여야 합니다." },
    explanation: { en: "-아/어야 하다 states what's necessary: 줄여야 합니다." },
  },
  {
    id: "L3-S14-WR02",
    type: "short-response",
    prompt: { en: "Write 3-4 sentences about things you can do for the environment." },
    keywords: ["환경", "아끼다", "실천하다"],
    sampleAnswer: {
      en: "저는 환경을 보호하기 위해서 몇 가지를 실천해요. 전기와 물을 아껴 쓰고 쓰레기도 줄이려고 노력해요. 그리고 분리수거를 꼭 지키지 않으면 안 된다고 생각해요. 작은 습관이지만 지구를 위해 필요하다고 생각해요.",
    },
    explanation: { en: "List 2-3 concrete actions and connect them with -고, then close with a -다고 생각해요 opinion sentence." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L3-S14-P01", type: "vocabulary", question: '"분리수거"의 뜻은 무엇입니까?', options: ["Pollution", "Waste separation", "Public place", "Rule"], correctAnswer: 1, explanation: { en: "분리수거 means waste separation." } },
  { id: "L3-S14-P02", type: "vocabulary", question: '"보호하다"의 뜻은 무엇입니까?', options: ["To pollute", "To protect", "To waste", "To throw away"], correctAnswer: 1, explanation: { en: "보호하다 means to protect." } },
  { id: "L3-S14-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n환경을 위해서 쓰레기를 ______.", options: ["줄이고 나서예요", "줄여야 해요", "줄이는 동안이에요", "줄이지 마세요"], correctAnswer: 1, explanation: { en: "-아/어야 하다 states necessity: 줄여야 해요." } },
  { id: "L3-S14-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n분리수거를 ______.", options: ["지키는 편이에요", "지키기 좋아요", "지키지 않으면 안 돼요", "지킨 적이 있어요"], correctAnswer: 2, explanation: { en: "-지 않으면 안 되다 means \"must\": 지키지 않으면 안 돼요." } },
  { id: "L3-S14-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n물은 ______ 자원이에요.", options: ["낯선", "복잡한", "소중한", "충동적인"], correctAnswer: 2, explanation: { en: "소중한 (precious) fits describing a valuable resource." } },
  { id: "L3-S14-P06", type: "vocabulary", question: "공기나 물이 더러워지는 것을 무엇이라고 합니까?", options: ["재활용", "절전", "질서", "오염"], correctAnswer: 3, explanation: { en: "오염 means pollution." } },
  { id: "L3-S14-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n쓰레기는 ______에 버리세요.", options: ["질서", "공공장소", "규칙", "쓰레기통"], correctAnswer: 3, explanation: { en: "쓰레기통 means trash can." } },
  { id: "L3-S14-P08", type: "listening", audioText: "쓰레기를 버릴 때는 분리수거를 지키지 않으면 안 돼요.", question: "쓰레기를 버릴 때 무엇을 해야 합니까?", options: ["분리수거를 지켜야 해요", "빨리 버려야 해요", "밤에 버려야 해요", "쓰레기통을 사야 해요"], correctAnswer: 0, explanation: { en: 'The sentence says you must follow waste separation, so the answer is 분리수거를 지켜야 해요.' } },
  { id: "L3-S14-P09", type: "reading", passage: "규칙을 지키지 않으면 다른 사람들이 불편해져요.", question: "규칙을 지키지 않으면 어떻게 됩니까?", options: ["다른 사람들이 불편해져요", "공간이 넓어져요", "쓰레기가 줄어들어요", "질서가 좋아져요"], correctAnswer: 0, explanation: { en: 'The passage says other people become inconvenienced, so the answer is 다른 사람들이 불편해져요.' } },
  { id: "L3-S14-P10", type: "reading", passage: "전기 사용량을 줄이고 친환경 제품을 사용해서 환경을 지켜요.", question: "이 사람은 환경을 위해 무엇을 합니까?", options: ["전기 사용량을 줄이고 친환경 제품을 사용해요", "물건을 많이 사요", "쓰레기를 아무 곳에나 버려요", "전기를 많이 써요"], correctAnswer: 0, explanation: { en: 'The passage says they reduce electricity usage and use eco-friendly products, so the answer is 전기 사용량을 줄이고 친환경 제품을 사용해요.' } },
];

export const STEP_3_14: StepContent = {
  level: 3,
  step: 14,
  title: "환경과 공공생활 (Environment and Public Life)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
