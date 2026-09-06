// TOPIK 3 STEP 15 — Opinions and Choice (의견과 선택).
// Independent of TOPIK1/TOPIK2/TOPIK3 STEP1-14's data files.
// 이유, 선택, 필요, 장점, 단점, 결정하다 already exist as "new" —
// recorded here with status "review". No new core grammar this STEP —
// both GRAMMAR entries review previously taught patterns (-다고
// 생각하다 from STEP13, -기 때문에 from STEP3), applied here to build
// full opinion statements; -지만 (already reviewed multiple times since
// TOPIK2) is used in sentences without its own GRAMMAR entry.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L3-S15-W01", korean: "의견", partOfSpeech: "noun", translations: { en: "opinion" }, example: "제 의견을 말씀드릴게요.", exampleTranslations: { en: "Let me tell you my opinion." }, audioUrl: null, status: "new" },
  { id: "L3-S15-W02", korean: "생각", partOfSpeech: "noun", translations: { en: "thought / idea" }, example: "제 생각은 조금 달라요.", exampleTranslations: { en: "My thinking is a bit different." }, audioUrl: null, status: "new" },
  { id: "L3-S15-W03", korean: "찬성", partOfSpeech: "noun", translations: { en: "agreement / approval" }, example: "저는 그 의견에 찬성해요.", exampleTranslations: { en: "I agree with that opinion." }, audioUrl: null, status: "new" },
  { id: "L3-S15-W04", korean: "반대", partOfSpeech: "noun", translations: { en: "opposition" }, example: "저는 반대 의견이 있어요.", exampleTranslations: { en: "I have an opposing opinion." }, audioUrl: null, status: "new" },
  { id: "L3-S15-W05", korean: "동의하다", partOfSpeech: "verb", translations: { en: "to agree" }, example: "저도 그 의견에 동의해요.", exampleTranslations: { en: "I also agree with that opinion." }, audioUrl: null, status: "new" },
  { id: "L3-S15-W06", korean: "반대하다", partOfSpeech: "verb", translations: { en: "to oppose" }, example: "저는 그 계획에 반대해요.", exampleTranslations: { en: "I oppose that plan." }, audioUrl: null, status: "new" },
  { id: "L3-S15-W07", korean: "주장하다", partOfSpeech: "verb", translations: { en: "to argue / claim" }, example: "그는 자기 생각을 주장해요.", exampleTranslations: { en: "He argues for his own idea." }, audioUrl: null, status: "new" },
  { id: "L3-S15-W08", korean: "생각하다", partOfSpeech: "verb", translations: { en: "to think" }, example: "저는 이렇게 생각해요.", exampleTranslations: { en: "I think this way." }, audioUrl: null, status: "new" },
  { id: "L3-S15-W09", korean: "판단하다", partOfSpeech: "verb", translations: { en: "to judge / determine" }, example: "상황을 잘 판단해야 해요.", exampleTranslations: { en: "You have to judge the situation well." }, audioUrl: null, status: "new" },
  { id: "L3-S15-W10", korean: "개인적", partOfSpeech: "noun", translations: { en: "personal" }, example: "이건 개인적인 생각이에요.", exampleTranslations: { en: "This is a personal opinion." }, audioUrl: null, status: "new" },
  { id: "L3-S15-W11", korean: "사회", partOfSpeech: "noun", translations: { en: "society" }, example: "사회에는 다양한 의견이 있어요.", exampleTranslations: { en: "Society has various opinions." }, audioUrl: null, status: "new" },
  { id: "L3-S15-W12", korean: "경우", partOfSpeech: "noun", translations: { en: "case / situation" }, example: "그런 경우도 있어요.", exampleTranslations: { en: "There are cases like that too." }, audioUrl: null, status: "new" },
  { id: "L3-S15-W13", korean: "관점", partOfSpeech: "noun", translations: { en: "point of view" }, example: "다른 관점에서 보면 달라요.", exampleTranslations: { en: "It looks different from another point of view." }, audioUrl: null, status: "new" },
  { id: "L3-S15-W14", korean: "근거", partOfSpeech: "noun", translations: { en: "grounds / basis (for an argument)" }, example: "근거를 들어서 설명했어요.", exampleTranslations: { en: "I explained by giving grounds." }, audioUrl: null, status: "new" },
  { id: "L3-S15-W15", korean: "결론", partOfSpeech: "noun", translations: { en: "conclusion" }, example: "결론은 이렇게 났어요.", exampleTranslations: { en: "The conclusion came out this way." }, audioUrl: null, status: "new" },
  { id: "L3-S15-W16", korean: "옳다", partOfSpeech: "adjective", translations: { en: "right / correct" }, example: "그 말이 옳다고 생각해요.", exampleTranslations: { en: "I think that statement is right." }, audioUrl: null, status: "new" },
  { id: "L3-S15-W17", korean: "차이점", partOfSpeech: "noun", translations: { en: "point of difference" }, example: "두 의견의 차이점을 설명했어요.", exampleTranslations: { en: "I explained the difference between the two opinions." }, audioUrl: null, status: "new" },
  { id: "L3-S15-W18", korean: "공감하다", partOfSpeech: "verb", translations: { en: "to empathize / relate to" }, example: "그 의견에 공감해요.", exampleTranslations: { en: "I relate to that opinion." }, audioUrl: null, status: "new" },
  { id: "L3-S15-W19", korean: "이유", partOfSpeech: "noun", translations: { en: "reason" }, example: "제 의견에는 이유가 있어요.", exampleTranslations: { en: "My opinion has a reason." }, audioUrl: null, status: "review" },
  { id: "L3-S15-W20", korean: "선택", partOfSpeech: "noun", translations: { en: "choice" }, example: "각자의 선택이에요.", exampleTranslations: { en: "It's each person's choice." }, audioUrl: null, status: "review" },
  { id: "L3-S15-W21", korean: "필요", partOfSpeech: "noun", translations: { en: "necessity / need" }, example: "온라인 수업은 필요가 있다고 생각해요.", exampleTranslations: { en: "I think online classes are needed." }, audioUrl: null, status: "review" },
  { id: "L3-S15-W22", korean: "장점", partOfSpeech: "noun", translations: { en: "advantage" }, example: "이 방법의 장점을 말씀드릴게요.", exampleTranslations: { en: "Let me tell you this method's advantage." }, audioUrl: null, status: "review" },
  { id: "L3-S15-W23", korean: "단점", partOfSpeech: "noun", translations: { en: "disadvantage" }, example: "단점도 있다고 생각해요.", exampleTranslations: { en: "I think there are disadvantages too." }, audioUrl: null, status: "review" },
  { id: "L3-S15-W24", korean: "결정하다", partOfSpeech: "verb", translations: { en: "to decide" }, example: "제 의견을 결정했어요.", exampleTranslations: { en: "I decided on my opinion." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L3-S15-S01", korean: "저는 온라인 수업이 편리하다고 생각해요.", translations: { en: "I think online classes are convenient." }, keyExpression: "-다고 생각하다", relatedWords: ["생각하다"], audioUrl: null },
  { id: "L3-S15-S02", korean: "시간을 아낄 수 있기 때문에 저는 이 방법에 찬성해요.", translations: { en: "Because it saves time, I agree with this method." }, keyExpression: "-기 때문에", relatedWords: ["찬성"], audioUrl: null },
  { id: "L3-S15-S03", korean: "직접 만나는 것이 좋지만 온라인 수업도 장점이 있어요.", translations: { en: "Meeting in person is good, but online classes have advantages too." }, keyExpression: "-지만", relatedWords: ["장점"], audioUrl: null },
  { id: "L3-S15-S04", korean: "저는 그 의견에 동의하지만 개인적으로 다른 생각도 있어요.", translations: { en: "I agree with that opinion, but personally I have other thoughts too." }, keyExpression: "-지만", relatedWords: ["동의하다", "개인적", "생각"], audioUrl: null },
  { id: "L3-S15-S05", korean: "대중교통을 이용하는 것이 환경에 좋기 때문에 저는 이 의견에 찬성해요.", translations: { en: "Because using public transportation is good for the environment, I agree with this opinion." }, keyExpression: "-기 때문에", relatedWords: ["찬성"], audioUrl: null },
  { id: "L3-S15-S06", korean: "사람마다 관점이 다르기 때문에 의견 차이가 생길 수 있어요.", translations: { en: "Because everyone's point of view is different, opinion differences can arise." }, keyExpression: "-기 때문에", relatedWords: ["관점", "차이점"], audioUrl: null },
  { id: "L3-S15-S07", korean: "저는 근거를 가지고 제 의견이 옳다고 생각하지만 다른 사람의 생각도 존중해요.", translations: { en: "I think my opinion is right with my own grounds, but I also respect other people's thoughts." }, keyExpression: "-지만", relatedWords: ["근거", "옳다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L3-S15-G01",
    pattern: "-다고 생각하다 (복습)",
    meanings: { en: "to think that (review, for stating opinions)" },
    explanations: {
      en: "Keep using -다고 생각하다 (STEP 13) as the core building block for stating your own opinion on a topic.",
    },
    examples: [
      { korean: "저는 온라인 수업이 편리하다고 생각해요.", translations: { en: "I think online classes are convenient." } },
    ],
  },
  {
    id: "L3-S15-G02",
    pattern: "-기 때문에 (복습)",
    meanings: { en: "because (review, for giving a reason behind an opinion)" },
    explanations: {
      en: "Keep using -기 때문에 (STEP 3) to give the reason behind an opinion, then -지만 (already familiar since TOPIK 2) to add a contrasting point — together these combine into a full opinion: 의견 + 이유 + 반대 의견 고려.",
    },
    examples: [
      { korean: "시간을 아낄 수 있기 때문에 저는 이 방법에 찬성해요.", translations: { en: "Because it saves time, I agree with this method." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L3-S15-L01",
    audioText: "저는 온라인 수업이 편리하다고 생각해요. 시간과 장소에 상관없이 들을 수 있기 때문이에요.",
    audioUrl: null,
    question: "이 사람은 왜 온라인 수업이 편리하다고 생각합니까?",
    options: ["선생님이 좋아서", "친구를 만날 수 있어서", "숙제가 없어서", "시간과 장소에 상관없이 들을 수 있어서"],
    correctAnswer: 3,
    translations: { en: { question: "Why does this person think online classes are convenient?", explanation: 'The sentence says "can attend regardless of time and place," so the correct answer is 시간과 장소에 상관없이 들을 수 있어서.' } },
  },
  {
    id: "L3-S15-L02",
    audioText: "저는 그 의견에 반대해요. 직접 만나서 이야기하는 것이 더 좋다고 생각하기 때문이에요.",
    audioUrl: null,
    question: "이 사람은 왜 반대합니까?",
    options: ["돈이 없어서", "시간이 없어서", "직접 만나서 이야기하는 것이 좋다고 생각해서", "친구가 없어서"],
    correctAnswer: 2,
    translations: { en: { question: "Why do they oppose it?", explanation: 'The sentence says "because they think meeting in person is better," so the correct answer is 직접 만나서 이야기하는 것이 좋다고 생각해서.' } },
  },
  {
    id: "L3-S15-L03",
    audioText: "사람마다 생각이 다르기 때문에 의견 차이가 있을 수 있어요. 하지만 서로의 의견을 존중하는 것이 중요해요.",
    audioUrl: null,
    question: "이 사람이 중요하다고 말한 것은 무엇입니까?",
    options: ["서로의 의견을 존중하는 것", "빨리 결정하는 것", "많이 주장하는 것", "혼자 판단하는 것"],
    correctAnswer: 0,
    translations: { en: { question: "What did this person say is important?", explanation: "The sentence says respecting each other's opinions is important, so the correct answer is 서로의 의견을 존중하는 것." } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L3-S15-R01",
    passage:
      "저는 대중교통을 이용하는 것이 좋다고 생각해요.\n환경에도 좋고 비용도 아낄 수 있기 때문이에요.\n물론 자동차가 더 편한 경우도 있지만, 저는 대중교통의 장점이 더 크다고 생각해요.\n그래서 저는 가능하면 대중교통을 이용하려고 해요.",
    question: "이 사람은 왜 대중교통이 좋다고 생각합니까?",
    options: ["더 빨라서", "환경에 좋고 비용을 아낄 수 있어서", "더 편해서", "친구들이 이용해서"],
    correctAnswer: 1,
    translations: { en: { question: "Why does this person think public transportation is good?", explanation: "The passage says it's good for the environment and saves cost, so the correct answer is 환경에 좋고 비용을 아낄 수 있어서." } },
  },
  {
    id: "L3-S15-R02",
    passage:
      "온라인 수업에 대한 의견은 사람마다 달라요.\n어떤 사람들은 시간을 아낄 수 있어서 찬성해요.\n반면에 어떤 사람들은 집중하기 어렵다는 이유로 반대해요.\n저는 개인적으로 두 방법을 상황에 따라 같이 이용하는 것이 좋다고 생각해요.",
    question: "이 글쓴이의 개인적인 생각은 무엇입니까?",
    options: ["온라인 수업은 필요 없다", "온라인 수업만 해야 한다", "직접 수업만 해야 한다", "두 방법을 상황에 따라 같이 이용하는 것이 좋다"],
    correctAnswer: 3,
    translations: { en: { question: "What is the writer's personal opinion?", explanation: "The passage says it's good to use both depending on the situation, so the correct answer is 두 방법을 상황에 따라 같이 이용하는 것이 좋다." } },
  },
  {
    id: "L3-S15-R03",
    passage:
      "저는 이 주제에 대해 찬성하는 입장이에요.\n첫 번째 이유는 시간을 절약할 수 있기 때문이에요.\n두 번째 이유는 비용도 줄일 수 있다는 점이에요.\n물론 단점도 있지만, 장점이 더 크다고 결론을 내렸어요.",
    question: "이 글의 구조는 어떻게 됩니까?",
    options: ["의견 → 이유 → 결론", "결론 → 이유 → 의견", "반대 의견만 설명", "이유 없이 결론만 제시"],
    correctAnswer: 0,
    translations: { en: { question: "What is the structure of this passage?", explanation: "The passage states an opinion, then gives reasons, then a conclusion, so the correct answer is 의견 → 이유 → 결론." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L3-S15-WR01",
    type: "keyword-writing",
    prompt: { en: "Write one sentence using all of the following words." },
    keywords: ["필요하다", "생각하다", "이유"],
    sampleAnswer: { en: "저는 규칙적인 운동이 필요하다고 생각해요. 건강에 좋다는 이유 때문이에요." },
    explanation: { en: "-다고 생각하다 states the opinion, and 이유 introduces the reason behind it." },
  },
  {
    id: "L3-S15-WR02",
    type: "short-response",
    prompt: {
      en: "Choose one everyday topic below and write your opinion in 4-5 sentences.\n- Do you think online classes are convenient?\n- Do you think using public transportation is good?\nStructure: 1) my opinion, 2) reason 1, 3) reason 2 or example, 4) closing.",
    },
    keywords: ["의견", "생각하다", "이유", "그래서"],
    sampleAnswer: {
      en: "저는 대중교통을 이용하는 것이 좋다고 생각해요. 첫 번째 이유는 환경에 도움이 되기 때문이에요. 두 번째 이유는 비용도 아낄 수 있다는 점이에요. 물론 가끔 불편할 때도 있지만, 장점이 더 크다고 생각해요. 그래서 저는 앞으로도 대중교통을 이용하려고 해요.",
    },
    explanation: { en: "Not a long essay yet — 4-5 clear sentences following opinion → reason 1 → reason 2 → closing is enough at this stage." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L3-S15-P01", type: "vocabulary", question: '"찬성"의 뜻은 무엇입니까?', options: ["Opposition", "Judgment", "Conclusion", "Agreement / approval"], correctAnswer: 3, explanation: { en: "찬성 means agreement/approval." } },
  { id: "L3-S15-P02", type: "vocabulary", question: '"근거"의 뜻은 무엇입니까?', options: ["Conclusion", "Grounds / basis", "Opinion", "Point of view"], correctAnswer: 1, explanation: { en: "근거 means grounds/basis." } },
  { id: "L3-S15-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n저는 온라인 수업이 편리______ 생각해요.", options: ["해서", "하다고", "하는데", "하니까"], correctAnswer: 1, explanation: { en: "-다고 생각하다 states an opinion: 편리하다고 생각해요." } },
  { id: "L3-S15-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n시간을 아낄 수 있______ 저는 찬성해요.", options: ["는 동안", "고 나서", "기 때문에", "기 위해서는"], correctAnswer: 2, explanation: { en: "-기 때문에 gives a reason: 아낄 수 있기 때문에." } },
  { id: "L3-S15-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n저는 그 의견에 ______.", options: ["결정해요", "판단해요", "동의해요", "공감해요"], correctAnswer: 2, explanation: { en: "동의해요 means \"I agree.\"" } },
  { id: "L3-S15-P06", type: "vocabulary", question: "다른 사람의 감정이나 생각을 이해하고 같이 느끼는 것을 무엇이라고 합니까?", options: ["판단하다", "반대하다", "주장하다", "공감하다"], correctAnswer: 3, explanation: { en: "공감하다 means to empathize/relate to." } },
  { id: "L3-S15-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n직접 만나는 것이 좋______ 온라인 수업도 장점이 있어요.", options: ["고 나서", "기 때문에", "는 동안", "지만"], correctAnswer: 3, explanation: { en: "-지만 connects a contrast: 좋지만." } },
  { id: "L3-S15-P08", type: "listening", audioText: "저는 그 의견에 반대해요. 직접 만나는 것이 더 좋다고 생각하기 때문이에요.", question: "이 사람은 왜 반대합니까?", options: ["직접 만나는 것이 좋다고 생각해서", "시간이 없어서", "돈이 없어서", "친구가 없어서"], correctAnswer: 0, explanation: { en: 'The sentence says they think meeting in person is better, so the answer is 직접 만나는 것이 좋다고 생각해서.' } },
  { id: "L3-S15-P09", type: "reading", passage: "저는 대중교통을 이용하는 것이 환경에도 좋고 비용도 아낄 수 있어서 좋다고 생각해요.", question: "이 사람은 왜 대중교통이 좋다고 생각합니까?", options: ["환경에 좋고 비용을 아낄 수 있어서", "더 빨라서", "더 편해서", "친구들이 이용해서"], correctAnswer: 0, explanation: { en: 'The passage says it\'s good for the environment and saves cost, so the answer is 환경에 좋고 비용을 아낄 수 있어서.' } },
  { id: "L3-S15-P10", type: "reading", passage: "의견 → 이유 → 결론 순서로 글을 썼어요.", question: "이 글의 구조로 알맞은 순서는 무엇입니까?", options: ["의견 → 이유 → 결론", "결론 → 이유 → 의견", "이유 → 결론 → 의견", "결론만 제시"], correctAnswer: 0, explanation: { en: 'The passage lists opinion then reason then conclusion, so the answer is 의견 → 이유 → 결론.' } },
];

export const STEP_3_15: StepContent = {
  level: 3,
  step: 15,
  title: "의견과 선택 (Opinions and Choice)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
