// TOPIK 4 STEP 2 — School and Education (학교와 교육).
// Independent of TOPIK1/TOPIK2/TOPIK3/TOPIK4 STEP1's data files.
// 복습, 예습, 방법, 선택 already exist as "new" elsewhere (TOPIK3) —
// recorded here with status "review".
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L4-S2-W01", korean: "교육", partOfSpeech: "noun", translations: { en: "education" }, example: "저는 교육에 관심이 많아요.", exampleTranslations: { en: "I'm very interested in education." }, audioUrl: null, status: "new" },
  { id: "L4-S2-W02", korean: "교육환경", partOfSpeech: "noun", translations: { en: "educational environment" }, example: "이 학교는 교육환경이 좋아요.", exampleTranslations: { en: "This school has a good educational environment." }, audioUrl: null, status: "new" },
  { id: "L4-S2-W03", korean: "학습법", partOfSpeech: "noun", translations: { en: "study method" }, example: "저는 새로운 학습법을 시도했어요.", exampleTranslations: { en: "I tried a new study method." }, audioUrl: null, status: "new" },
  { id: "L4-S2-W04", korean: "집중력", partOfSpeech: "noun", translations: { en: "concentration (ability)" }, example: "이 방법은 집중력에 도움이 돼요.", exampleTranslations: { en: "This method helps with concentration." }, audioUrl: null, status: "new" },
  { id: "L4-S2-W05", korean: "효율", partOfSpeech: "noun", translations: { en: "efficiency" }, example: "효율을 높이려고 계획을 세웠어요.", exampleTranslations: { en: "I made a plan to increase efficiency." }, audioUrl: null, status: "new" },
  { id: "L4-S2-W06", korean: "성취", partOfSpeech: "noun", translations: { en: "achievement" }, example: "작은 성취도 중요해요.", exampleTranslations: { en: "Even small achievements matter." }, audioUrl: null, status: "new" },
  { id: "L4-S2-W07", korean: "평가", partOfSpeech: "noun", translations: { en: "evaluation" }, example: "선생님이 평가를 해 주셨어요.", exampleTranslations: { en: "The teacher gave an evaluation." }, audioUrl: null, status: "new" },
  { id: "L4-S2-W08", korean: "수업방식", partOfSpeech: "noun", translations: { en: "class style / format" }, example: "이 수업방식이 저한테 잘 맞아요.", exampleTranslations: { en: "This class format suits me well." }, audioUrl: null, status: "new" },
  { id: "L4-S2-W09", korean: "온라인수업", partOfSpeech: "noun", translations: { en: "online class" }, example: "온라인수업은 시간을 아낄 수 있어요.", exampleTranslations: { en: "Online classes can save time." }, audioUrl: null, status: "new" },
  { id: "L4-S2-W10", korean: "대면수업", partOfSpeech: "noun", translations: { en: "in-person class" }, example: "대면수업에서는 친구를 만날 수 있어요.", exampleTranslations: { en: "In in-person classes, you can meet friends." }, audioUrl: null, status: "new" },
  { id: "L4-S2-W11", korean: "자기주도", partOfSpeech: "noun", translations: { en: "self-direction" }, example: "자기주도 학습이 중요해요.", exampleTranslations: { en: "Self-directed learning is important." }, audioUrl: null, status: "new" },
  { id: "L4-S2-W12", korean: "이해력", partOfSpeech: "noun", translations: { en: "comprehension ability" }, example: "이해력이 좋아졌어요.", exampleTranslations: { en: "My comprehension has improved." }, audioUrl: null, status: "new" },
  { id: "L4-S2-W13", korean: "학습효과", partOfSpeech: "noun", translations: { en: "learning effect" }, example: "복습을 하면 학습효과가 커져요.", exampleTranslations: { en: "If you review, the learning effect increases." }, audioUrl: null, status: "new" },
  { id: "L4-S2-W14", korean: "적절하다", partOfSpeech: "adjective", translations: { en: "appropriate / suitable" }, example: "적절한 방법을 선택했어요.", exampleTranslations: { en: "I chose an appropriate method." }, audioUrl: null, status: "new" },
  { id: "L4-S2-W15", korean: "효과적이다", partOfSpeech: "adjective", translations: { en: "effective" }, example: "이 방법은 효과적이에요.", exampleTranslations: { en: "This method is effective." }, audioUrl: null, status: "new" },
  { id: "L4-S2-W16", korean: "향상되다", partOfSpeech: "verb", translations: { en: "to improve" }, example: "실력이 많이 향상됐어요.", exampleTranslations: { en: "My skills improved a lot." }, audioUrl: null, status: "new" },
  { id: "L4-S2-W17", korean: "참여하다", partOfSpeech: "verb", translations: { en: "to participate" }, example: "수업에 적극적으로 참여해요.", exampleTranslations: { en: "I actively participate in class." }, audioUrl: null, status: "new" },
  { id: "L4-S2-W18", korean: "복습", partOfSpeech: "noun", translations: { en: "review (studying)" }, example: "매일 복습을 해요.", exampleTranslations: { en: "I do review every day." }, audioUrl: null, status: "review" },
  { id: "L4-S2-W19", korean: "예습", partOfSpeech: "noun", translations: { en: "preview (studying ahead)" }, example: "수업 전에 예습을 해요.", exampleTranslations: { en: "I preview before class." }, audioUrl: null, status: "review" },
  { id: "L4-S2-W20", korean: "방법", partOfSpeech: "noun", translations: { en: "method" }, example: "더 좋은 방법이 있어요.", exampleTranslations: { en: "There's a better method." }, audioUrl: null, status: "review" },
  { id: "L4-S2-W21", korean: "선택", partOfSpeech: "noun", translations: { en: "choice" }, example: "좋은 선택이었어요.", exampleTranslations: { en: "It was a good choice." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L4-S2-S01", korean: "공부 방법에 따라 학습효과가 달라질 수 있어요.", translations: { en: "Depending on the study method, the learning effect can vary." }, keyExpression: "-에 따라", relatedWords: ["방법", "학습효과"], audioUrl: null },
  { id: "L4-S2-S02", korean: "수업방식에 따라 집중력이 달라져요.", translations: { en: "Depending on the class format, concentration changes." }, keyExpression: "-에 따라", relatedWords: ["수업방식", "집중력"], audioUrl: null },
  { id: "L4-S2-S03", korean: "처음에는 누구나 실수하기 마련이에요.", translations: { en: "At first, everyone is bound to make mistakes." }, keyExpression: "-기 마련이다", relatedWords: [], audioUrl: null },
  { id: "L4-S2-S04", korean: "새로운 것을 배울 때는 어려움이 있기 마련이에요.", translations: { en: "When learning something new, there are bound to be difficulties." }, keyExpression: "-기 마련이다", relatedWords: [], audioUrl: null },
  { id: "L4-S2-S05", korean: "저는 온라인수업보다 대면수업이 더 효과적이라고 생각해요.", translations: { en: "I think in-person classes are more effective than online classes." }, keyExpression: "효과적이다", relatedWords: ["온라인수업", "대면수업", "효과적이다"], audioUrl: null },
  { id: "L4-S2-S06", korean: "자기주도 학습 능력을 키우면 성취가 더 커져요.", translations: { en: "If you build self-directed learning ability, your sense of achievement grows more." }, keyExpression: "성취", relatedWords: ["자기주도", "성취"], audioUrl: null },
  { id: "L4-S2-S07", korean: "저는 저한테 적절한 학습법을 찾으려고 노력해요.", translations: { en: "I try to find a study method that's suitable for me." }, keyExpression: "적절하다", relatedWords: ["학습법", "적절하다"], audioUrl: null },
  { id: "L4-S2-S08", korean: "수업에 열심히 참여하면 이해력이 향상돼요.", translations: { en: "If you participate actively in class, your comprehension improves." }, keyExpression: "참여하다", relatedWords: ["참여하다", "이해력", "향상되다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L4-S2-G01",
    pattern: "-에 따라",
    meanings: { en: "depending on / according to" },
    explanations: {
      en: "Attach -에 따라 to a noun to show that a result changes depending on that thing.",
    },
    examples: [
      { korean: "공부 방법에 따라 학습효과가 달라질 수 있어요.", translations: { en: "Depending on the study method, the learning effect can vary." } },
      { korean: "수업방식에 따라 집중력이 달라져요.", translations: { en: "Depending on the class format, concentration changes." } },
    ],
  },
  {
    id: "L4-S2-G02",
    pattern: "-기 마련이다",
    meanings: { en: "it's only natural that / bound to happen" },
    explanations: {
      en: "Attach -기 마련이다 to a verb stem to say something is a natural, expected part of a situation.",
    },
    examples: [
      { korean: "처음에는 누구나 실수하기 마련이에요.", translations: { en: "At first, everyone is bound to make mistakes." } },
      { korean: "새로운 것을 배울 때는 어려움이 있기 마련이에요.", translations: { en: "When learning something new, there are bound to be difficulties." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L4-S2-L01",
    audioText: "저는 온라인수업보다 대면수업이 저한테 더 효과적이에요. 집중이 더 잘 되기 때문이에요.",
    audioUrl: null,
    question: "이 사람은 왜 대면수업이 더 좋다고 생각합니까?",
    options: ["더 싸서", "숙제가 없어서", "집중이 더 잘 돼서", "친구가 많아서"],
    correctAnswer: 2,
    translations: { en: { question: "Why does this person think in-person classes are better?", explanation: 'The sentence says "because concentration is better," so the correct answer is 집중이 더 잘 돼서.' } },
  },
  {
    id: "L4-S2-L02",
    audioText: "공부 방법에 따라 학습 효과가 많이 달라져요. 그래서 저는 저한테 맞는 방법을 찾고 있어요.",
    audioUrl: null,
    question: "이 사람은 지금 무엇을 하고 있습니까?",
    options: ["시험을 보고 있다", "자기한테 맞는 공부 방법을 찾고 있다", "휴식을 취하고 있다", "학교를 옮기고 있다"],
    correctAnswer: 1,
    translations: { en: { question: "What is this person doing right now?", explanation: 'The sentence says "looking for a study method that suits me," so the correct answer is 자기한테 맞는 공부 방법을 찾고 있다.' } },
  },
  {
    id: "L4-S2-L03",
    audioText: "처음 한국어를 배울 때는 실수하기 마련이에요. 저도 처음에는 실수를 많이 했지만 꾸준히 복습해서 실력이 향상됐어요.",
    audioUrl: null,
    question: "이 사람의 실력이 향상된 이유는 무엇입니까?",
    options: ["학원을 옮겨서", "친구가 도와줘서", "시험을 많이 봐서", "꾸준히 복습해서"],
    correctAnswer: 3,
    translations: { en: { question: "Why did this person's skill improve?", explanation: 'The sentence says "because I reviewed consistently," so the correct answer is 꾸준히 복습해서.' } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L4-S2-R01",
    passage:
      "저는 요즘 새로운 학습법을 시도하고 있어요.\n예전에는 그냥 책만 읽었는데 지금은 예습과 복습을 같이 해요.\n공부 방법에 따라 학습효과가 이렇게 다를 줄 몰랐어요.\n요즘은 이해력도 좋아지고 성취감도 느껴요.",
    question: "이 사람은 요즘 무엇을 하고 있습니까?",
    options: ["학교를 그만뒀다", "새로운 학습법을 시도하고 있다", "시험을 포기했다", "혼자만 공부한다"],
    correctAnswer: 1,
    translations: { en: { question: "What is this person doing these days?", explanation: "The passage says they are trying a new study method, so the correct answer is 새로운 학습법을 시도하고 있다." } },
  },
  {
    id: "L4-S2-R02",
    passage:
      "온라인수업과 대면수업은 각각 장단점이 있어요.\n온라인수업은 시간과 장소에 상관없이 들을 수 있어서 편리해요.\n하지만 대면수업은 선생님, 친구들과 직접 소통할 수 있어서 집중력이 더 좋아져요.\n그래서 학생들은 자기한테 맞는 수업방식을 선택하는 것이 중요해요.",
    question: "이 글에 따르면 대면수업의 장점은 무엇입니까?",
    options: ["시간과 장소에 상관없다", "숙제가 없다", "직접 소통할 수 있어서 집중력이 좋아진다", "비용이 싸다"],
    correctAnswer: 2,
    translations: { en: { question: "According to the passage, what is the advantage of in-person classes?", explanation: "The passage says direct communication improves concentration, so the correct answer is 직접 소통할 수 있어서 집중력이 좋아진다." } },
  },
  {
    id: "L4-S2-R03",
    passage:
      "저는 자기주도 학습이 중요하다고 생각해요.\n스스로 계획을 세우고 적절한 방법을 선택해서 공부하면 학습효과가 커져요.\n처음에는 실수하기 마련이지만 꾸준히 하면 이해력도 향상돼요.\n저는 앞으로도 자기주도적으로 공부에 참여하려고 해요.",
    question: "이 사람이 중요하다고 생각하는 것은 무엇입니까?",
    options: ["시험 점수", "친구와의 경쟁", "선생님의 설명", "자기주도 학습"],
    correctAnswer: 3,
    translations: { en: { question: "What does this person think is important?", explanation: "The passage says self-directed learning is important, so the correct answer is 자기주도 학습." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L4-S2-WR01",
    type: "sentence-completion",
    prompt: { en: "Complete the sentence: 학습 방법에 따라 ______." },
    sampleAnswer: { en: "학습 방법에 따라 학습효과가 달라질 수 있어요." },
    explanation: { en: "-에 따라 shows that the result changes depending on something — here, the study method." },
  },
  {
    id: "L4-S2-WR02",
    type: "short-response",
    prompt: {
      en: "Write 4-5 sentences about a study method that's effective for you.\nInclude: the study method, its advantage, the reason, and a real experience or example.",
    },
    keywords: ["학습법", "효과적이다", "이유", "경험"],
    sampleAnswer: {
      en: "저에게 가장 효과적인 학습법은 예습과 복습을 같이 하는 거예요. 이 방법의 장점은 수업 내용을 훨씬 잘 이해할 수 있다는 거예요. 이유는 미리 내용을 보고 수업을 들으면 집중력이 더 좋아지기 때문이에요. 예를 들어 지난주에 예습을 하고 수업에 참여했을 때 이해력이 많이 향상된 것을 느꼈어요. 그래서 저는 앞으로도 이 방법을 계속 사용하려고 해요.",
    },
    explanation: { en: "4-5 sentences following method → advantage → reason → example is enough — not a long essay yet." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L4-S2-P01", type: "vocabulary", question: '"집중력"의 뜻은 무엇입니까?', options: ["Achievement", "Concentration (ability)", "Evaluation", "Efficiency"], correctAnswer: 1, explanation: { en: "집중력 means concentration (ability)." } },
  { id: "L4-S2-P02", type: "vocabulary", question: '"성취"의 뜻은 무엇입니까?', options: ["Achievement", "Comprehension", "Evaluation", "Participation"], correctAnswer: 0, explanation: { en: "성취 means achievement." } },
  { id: "L4-S2-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n공부 방법______ 학습효과가 달라져요.", options: ["에 따라", "는 동안", "기 때문에", "는 김에"], correctAnswer: 0, explanation: { en: "-에 따라 shows the result depends on something: 방법에 따라." } },
  { id: "L4-S2-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n처음에는 누구나 실수하______.", options: ["는 편이다", "기 마련이다", "기로 하다", "는 반면에"], correctAnswer: 1, explanation: { en: "-기 마련이다 says something is only natural: 실수하기 마련이다." } },
  { id: "L4-S2-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n저는 온라인수업보다 대면수업이 더 ______ 생각해요.", options: ["효과적이라고", "적절하다고", "성실하다고", "친밀하다고"], correctAnswer: 0, explanation: { en: "효과적이다 (effective) fits comparing two class formats." } },
  { id: "L4-S2-P06", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n꾸준히 복습해서 실력이 많이 ______.", options: ["개선했어요", "참여했어요", "향상됐어요", "평가했어요"], correctAnswer: 2, explanation: { en: "향상되다 (to improve) fits describing skill getting better." } },
  { id: "L4-S2-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n수업에 적극적으로 ______ 이해력이 좋아져요.", options: ["평가하면", "참여하면", "향상되면", "선택하면"], correctAnswer: 1, explanation: { en: "참여하다 (to participate) fits joining a class actively." } },
  { id: "L4-S2-P08", type: "listening", audioText: "저는 온라인수업보다 대면수업이 저한테 더 효과적이에요. 집중이 더 잘 되기 때문이에요.", question: "이 사람은 왜 대면수업이 더 좋다고 생각합니까?", options: ["숙제가 없어서", "친구가 많아서", "집중이 더 잘 돼서", "더 싸서"], correctAnswer: 2, explanation: { en: 'The sentence says concentration is better, so the answer is 집중이 더 잘 돼서.' } },
  { id: "L4-S2-P09", type: "listening", audioText: "공부 방법에 따라 학습 효과가 많이 달라져요.", question: "이 사람이 이야기하는 것은 무엇입니까?", options: ["시험 날짜", "학교 위치", "공부 방법과 학습효과의 관계", "수업 시간표"], correctAnswer: 2, explanation: { en: "The sentence is about how study method affects learning effect, so the answer is 공부 방법과 학습효과의 관계." } },
  { id: "L4-S2-P10", type: "reading", passage: "저는 요즘 새로운 학습법을 시도하고 있어요. 예습과 복습을 같이 하니까 학습효과가 좋아졌어요.", question: "이 사람은 요즘 무엇을 하고 있습니까?", options: ["학교를 그만뒀다", "혼자만 공부한다", "새로운 학습법을 시도하고 있다", "시험을 포기했다"], correctAnswer: 2, explanation: { en: "The passage says they're trying a new study method, so the answer is 새로운 학습법을 시도하고 있다." } },
  { id: "L4-S2-P11", type: "reading", passage: "온라인수업은 편리하지만 대면수업은 직접 소통할 수 있어서 집중력이 더 좋아져요.", question: "이 글에 따르면 대면수업의 장점은 무엇입니까?", options: ["숙제가 없다", "비용이 싸다", "시간이 자유롭다", "직접 소통할 수 있어서 집중력이 좋아진다"], correctAnswer: 3, explanation: { en: "The passage says direct communication improves concentration, so the answer is 직접 소통할 수 있어서 집중력이 좋아진다." } },
  { id: "L4-S2-P12", type: "sentence", question: "다음 중 자연스러운 문장은?", options: ["처음에는 실수하기가 마련이에요.", "처음에는 실수하마련이에요.", "처음에는 실수한 마련이에요.", "처음에는 실수하기 마련이에요."], correctAnswer: 3, explanation: { en: "-기 마련이다 attaches directly to the verb stem: 실수하기 마련이에요." } },
];

export const STEP_4_2: StepContent = {
  level: 4,
  step: 2,
  title: "학교와 교육 (School and Education)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
