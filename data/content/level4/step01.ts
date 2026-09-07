// TOPIK 4 STEP 1 — Social Life and Relationships (사회생활과 인간관계).
// First TOPIK 4 STEP. Reuses TOPIK 3's WORDS→SENTENCES→GRAMMAR→
// LISTENING→READING→WRITING→PRACTICE→COMPLETE flow and WritingItem
// structure unchanged. Independent of TOPIK1/TOPIK2/TOPIK3's data files.
// 관계, 이해, 의견, 해결, 조심하다, 유지하다 already exist as "new"
// elsewhere (TOPIK2/TOPIK3) — recorded here with status "review".
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L4-S1-W01", korean: "인간관계", partOfSpeech: "noun", translations: { en: "interpersonal relationships" }, example: "직장에서 좋은 인간관계를 맺고 싶어요.", exampleTranslations: { en: "I want to build good relationships at work." }, audioUrl: null, status: "new" },
  { id: "L4-S1-W02", korean: "갈등", partOfSpeech: "noun", translations: { en: "conflict" }, example: "동료와 갈등이 생겼어요.", exampleTranslations: { en: "A conflict arose with my coworker." }, audioUrl: null, status: "new" },
  { id: "L4-S1-W03", korean: "배려", partOfSpeech: "noun", translations: { en: "consideration (for others)" }, example: "그 사람은 배려가 많아요.", exampleTranslations: { en: "That person is very considerate." }, audioUrl: null, status: "new" },
  { id: "L4-S1-W04", korean: "협력", partOfSpeech: "noun", translations: { en: "cooperation" }, example: "문제를 해결하려면 협력이 필요해요.", exampleTranslations: { en: "Cooperation is needed to solve the problem." }, audioUrl: null, status: "new" },
  { id: "L4-S1-W05", korean: "신뢰", partOfSpeech: "noun", translations: { en: "trust" }, example: "동료 사이에 신뢰가 중요해요.", exampleTranslations: { en: "Trust between coworkers is important." }, audioUrl: null, status: "new" },
  { id: "L4-S1-W06", korean: "오해", partOfSpeech: "noun", translations: { en: "misunderstanding" }, example: "작은 오해가 생겼어요.", exampleTranslations: { en: "A small misunderstanding arose." }, audioUrl: null, status: "new" },
  { id: "L4-S1-W07", korean: "대화", partOfSpeech: "noun", translations: { en: "conversation" }, example: "서로 대화를 많이 하는 게 중요해요.", exampleTranslations: { en: "It's important to talk with each other a lot." }, audioUrl: null, status: "new" },
  { id: "L4-S1-W08", korean: "태도", partOfSpeech: "noun", translations: { en: "attitude" }, example: "상대방에게 좋은 태도를 보였어요.", exampleTranslations: { en: "I showed a good attitude to the other person." }, audioUrl: null, status: "new" },
  { id: "L4-S1-W09", korean: "감정", partOfSpeech: "noun", translations: { en: "emotion / feeling" }, example: "저는 제 감정을 솔직하게 말했어요.", exampleTranslations: { en: "I honestly expressed my feelings." }, audioUrl: null, status: "new" },
  { id: "L4-S1-W10", korean: "존중", partOfSpeech: "noun", translations: { en: "respect" }, example: "관계에서 존중이 가장 중요해요.", exampleTranslations: { en: "Respect is the most important thing in a relationship." }, audioUrl: null, status: "new" },
  { id: "L4-S1-W11", korean: "상대방", partOfSpeech: "noun", translations: { en: "the other person / counterpart" }, example: "상대방의 마음을 이해하려고 노력해요.", exampleTranslations: { en: "I try to understand the other person's feelings." }, audioUrl: null, status: "new" },
  { id: "L4-S1-W12", korean: "노력", partOfSpeech: "noun", translations: { en: "effort" }, example: "좋은 관계를 위해 노력이 필요해요.", exampleTranslations: { en: "Effort is needed for a good relationship." }, audioUrl: null, status: "new" },
  { id: "L4-S1-W13", korean: "친밀하다", partOfSpeech: "adjective", translations: { en: "close / intimate" }, example: "저는 그 친구와 친밀해요.", exampleTranslations: { en: "I am close with that friend." }, audioUrl: null, status: "new" },
  { id: "L4-S1-W14", korean: "솔직하다", partOfSpeech: "adjective", translations: { en: "honest / frank" }, example: "저는 솔직하게 말했어요.", exampleTranslations: { en: "I spoke honestly." }, audioUrl: null, status: "new" },
  { id: "L4-S1-W15", korean: "양보하다", partOfSpeech: "verb", translations: { en: "to yield / give way" }, example: "저는 친구에게 자리를 양보했어요.", exampleTranslations: { en: "I gave up my seat for my friend." }, audioUrl: null, status: "new" },
  { id: "L4-S1-W16", korean: "화해하다", partOfSpeech: "verb", translations: { en: "to make up / reconcile" }, example: "우리는 오해를 풀고 화해했어요.", exampleTranslations: { en: "We cleared up the misunderstanding and made up." }, audioUrl: null, status: "new" },
  { id: "L4-S1-W17", korean: "관계", partOfSpeech: "noun", translations: { en: "relationship" }, example: "가족 관계를 중요하게 생각해요.", exampleTranslations: { en: "I think family relationships are important." }, audioUrl: null, status: "review" },
  { id: "L4-S1-W18", korean: "이해", partOfSpeech: "noun", translations: { en: "understanding" }, example: "이해가 안 돼요.", exampleTranslations: { en: "I don't understand." }, audioUrl: null, status: "review" },
  { id: "L4-S1-W19", korean: "의견", partOfSpeech: "noun", translations: { en: "opinion" }, example: "제 의견을 말씀드릴게요.", exampleTranslations: { en: "Let me tell you my opinion." }, audioUrl: null, status: "review" },
  { id: "L4-S1-W20", korean: "해결", partOfSpeech: "noun", translations: { en: "solution" }, example: "빠른 해결이 필요해요.", exampleTranslations: { en: "A quick solution is needed." }, audioUrl: null, status: "review" },
  { id: "L4-S1-W21", korean: "조심하다", partOfSpeech: "verb", translations: { en: "to be careful" }, example: "건강을 조심하세요.", exampleTranslations: { en: "Please take care of your health." }, audioUrl: null, status: "review" },
  { id: "L4-S1-W22", korean: "유지하다", partOfSpeech: "verb", translations: { en: "to maintain" }, example: "건강을 유지하고 싶어요.", exampleTranslations: { en: "I want to maintain my health." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L4-S1-S01", korean: "서로 오해가 생기는 바람에 사이가 안 좋아졌어요.", translations: { en: "Because a misunderstanding arose between us, our relationship became bad." }, keyExpression: "-는 바람에", relatedWords: ["오해"], audioUrl: null },
  { id: "L4-S1-S02", korean: "제가 실수를 하는 바람에 동료와 갈등이 생겼어요.", translations: { en: "Because I made a mistake, a conflict arose with my coworker." }, keyExpression: "-는 바람에", relatedWords: ["갈등"], audioUrl: null },
  { id: "L4-S1-S03", korean: "대화를 많이 할수록 서로를 더 잘 이해할 수 있어요.", translations: { en: "The more we talk, the better we can understand each other." }, keyExpression: "-(으)ㄹ수록", relatedWords: ["대화", "이해"], audioUrl: null },
  { id: "L4-S1-S04", korean: "서로 배려할수록 관계가 더 좋아져요.", translations: { en: "The more we consider each other, the better the relationship gets." }, keyExpression: "-(으)ㄹ수록", relatedWords: ["배려", "관계"], audioUrl: null },
  { id: "L4-S1-S05", korean: "저는 상대방의 감정을 이해하려고 노력해요.", translations: { en: "I try to understand the other person's feelings." }, keyExpression: "노력", relatedWords: ["상대방", "감정", "노력"], audioUrl: null },
  { id: "L4-S1-S06", korean: "좋은 인간관계를 위해서는 신뢰가 가장 중요해요.", translations: { en: "For good relationships, trust is the most important thing." }, keyExpression: "신뢰", relatedWords: ["인간관계", "신뢰"], audioUrl: null },
  { id: "L4-S1-S07", korean: "저는 솔직하게 제 생각을 말했지만 오해를 풀지 못했어요.", translations: { en: "I honestly said what I thought, but I couldn't clear up the misunderstanding." }, keyExpression: "-지만", relatedWords: ["솔직하다", "오해"], audioUrl: null },
  { id: "L4-S1-S08", korean: "우리는 서로 양보하고 대화를 하면서 결국 화해했어요.", translations: { en: "We yielded to each other and talked, and eventually made up." }, keyExpression: "화해하다", relatedWords: ["양보하다", "대화", "화해하다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L4-S1-G01",
    pattern: "-는 바람에",
    meanings: { en: "because of (an unintended, often negative cause)" },
    explanations: {
      en: "Attach -는 바람에 to a verb stem to explain an unexpected or unintended reason behind a usually negative result.",
    },
    examples: [
      { korean: "서로 오해가 생기는 바람에 사이가 안 좋아졌어요.", translations: { en: "Because a misunderstanding arose between us, our relationship became bad." } },
      { korean: "제가 실수를 하는 바람에 동료와 갈등이 생겼어요.", translations: { en: "Because I made a mistake, a conflict arose with my coworker." } },
    ],
  },
  {
    id: "L4-S1-G02",
    pattern: "-(으)ㄹ수록",
    meanings: { en: "the more ~, the more ~" },
    explanations: {
      en: "Attach -(으)ㄹ수록 to a verb/adjective stem to show that as one thing increases, another changes along with it.",
    },
    examples: [
      { korean: "대화를 많이 할수록 서로를 더 잘 이해할 수 있어요.", translations: { en: "The more we talk, the better we can understand each other." } },
      { korean: "서로 배려할수록 관계가 더 좋아져요.", translations: { en: "The more we consider each other, the better the relationship gets." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L4-S1-L01",
    audioText: "저는 동료와 오해가 생기는 바람에 사이가 안 좋아졌어요. 그래서 대화를 많이 하려고 노력하고 있어요.",
    audioUrl: null,
    question: "이 사람은 왜 동료와 사이가 안 좋아졌습니까?",
    options: ["오해가 생기는 바람에", "시간이 없어서", "회사를 옮겨서", "일이 많아서"],
    correctAnswer: 0,
    translations: { en: { question: "Why did this person's relationship with their coworker get worse?", explanation: 'The sentence says "because a misunderstanding arose," so the correct answer is 오해가 생기는 바람에.' } },
  },
  {
    id: "L4-S1-L02",
    audioText: "저는 친구와 갈등이 있었지만 서로 조금씩 양보해서 잘 해결했어요.",
    audioUrl: null,
    question: "두 사람은 갈등을 어떻게 해결했습니까?",
    options: ["대화를 안 해서", "서로 양보해서", "선생님한테 물어봐서", "혼자 참아서"],
    correctAnswer: 1,
    translations: { en: { question: "How did the two of them resolve the conflict?", explanation: 'The sentence says they resolved it by "yielding to each other a little," so the correct answer is 서로 양보해서.' } },
  },
  {
    id: "L4-S1-L03",
    audioText: "저는 동료를 믿을수록 일이 더 편해진다고 생각해요. 그래서 신뢰를 쌓으려고 노력해요.",
    audioUrl: null,
    question: "이 사람은 무엇을 하려고 노력합니까?",
    options: ["돈을 모으려고", "빨리 퇴근하려고", "신뢰를 쌓으려고", "혼자 일하려고"],
    correctAnswer: 2,
    translations: { en: { question: "What is this person trying to do?", explanation: 'The sentence says "trying to build trust," so the correct answer is 신뢰를 쌓으려고.' } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L4-S1-R01",
    passage:
      "저는 회사에서 새로운 동료와 일하게 됐어요.\n처음에는 서로 오해가 생겨서 사이가 안 좋았어요.\n하지만 대화를 많이 하면 할수록 서로를 더 잘 이해하게 됐어요.\n지금은 그 동료와 아주 친밀하게 지내요.\n저는 이 경험을 통해 배려와 대화가 정말 중요하다는 것을 느꼈어요.",
    question: "이 사람은 이 경험을 통해 무엇을 느꼈습니까?",
    options: ["배려와 대화가 중요하다", "돈이 가장 중요하다", "혼자 일하는 것이 편하다", "동료는 필요 없다"],
    correctAnswer: 0,
    translations: { en: { question: "What did this person realize through this experience?", explanation: "The passage says they realized consideration and conversation are truly important, so the correct answer is 배려와 대화가 중요하다." } },
  },
  {
    id: "L4-S1-R02",
    passage:
      "인간관계에서 갈등은 누구에게나 생길 수 있어요.\n중요한 것은 갈등이 생겼을 때 어떻게 해결하느냐예요.\n서로 솔직하게 이야기하고 상대방의 입장을 이해하려고 노력하면 대부분의 갈등은 풀려요.\n반대로 오해를 풀지 않고 그대로 두면 관계가 더 나빠질 수 있어요.",
    question: "이 글에 따르면 갈등을 해결하는 방법은 무엇입니까?",
    options: ["갈등을 무시한다", "솔직하게 이야기하고 이해하려고 노력한다", "상대방을 피한다", "혼자 참는다"],
    correctAnswer: 1,
    translations: { en: { question: "According to the passage, how should conflict be resolved?", explanation: "The passage says talking honestly and trying to understand each other resolves most conflict, so the correct answer is 솔직하게 이야기하고 이해하려고 노력한다." } },
  },
  {
    id: "L4-S1-R03",
    passage:
      "저는 직장 동료와 작은 오해가 생기는 바람에 며칠 동안 서먹하게 지냈어요.\n그런데 먼저 용기를 내서 솔직하게 제 생각을 말했어요.\n동료도 자신의 입장을 이야기해 줘서 우리는 서로를 더 잘 이해하게 됐어요.\n결국 우리는 예전보다 더 신뢰하는 사이가 됐어요.\n작은 노력이 관계를 더 좋게 만든다는 것을 배웠어요.",
    question: "두 사람의 관계는 어떻게 변했습니까?",
    options: ["더 나빠졌다", "예전과 똑같다", "더 신뢰하는 사이가 됐다", "완전히 멀어졌다"],
    correctAnswer: 2,
    translations: { en: { question: "How did the relationship between the two people change?", explanation: "The passage says they became a more trusting pair than before, so the correct answer is 더 신뢰하는 사이가 됐다." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L4-S1-WR01",
    type: "keyword-writing",
    prompt: { en: "Write one sentence using all of the following words." },
    keywords: ["인간관계", "대화", "중요하다"],
    sampleAnswer: { en: "좋은 인간관계를 위해서는 대화가 중요하다고 생각해요." },
    explanation: { en: "Combine 인간관계 and 대화 as the topic, then 중요하다 to state why it matters." },
  },
  {
    id: "L4-S1-WR02",
    type: "short-response",
    prompt: {
      en: "Write 4-5 sentences about what you think is important for good relationships.\nStructure: 1) the important point, 2) reason, 3) example, 4) additional detail, 5) closing.",
    },
    keywords: ["신뢰", "배려", "대화", "노력"],
    sampleAnswer: {
      en: "저는 좋은 인간관계를 위해 신뢰가 가장 중요하다고 생각해요. 서로 믿지 못하면 작은 오해도 큰 갈등이 될 수 있기 때문이에요. 예를 들어 회사에서 동료와 신뢰가 있으면 문제가 생겨도 쉽게 해결할 수 있어요. 그래서 저는 평소에 솔직하게 대화하려고 노력해요. 신뢰와 대화가 있으면 어떤 관계도 좋아질 수 있다고 생각해요.",
    },
    explanation: { en: "5 clear sentences following point → reason → example → additional detail → closing is enough at this stage — not a long essay yet." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L4-S1-P01", type: "vocabulary", question: '"갈등"의 뜻은 무엇입니까?', options: ["Trust", "Conflict", "Effort", "Misunderstanding"], correctAnswer: 1, explanation: { en: "갈등 means conflict." } },
  { id: "L4-S1-P02", type: "vocabulary", question: '"배려"의 뜻은 무엇입니까?', options: ["Consideration (for others)", "Emotion", "Attitude", "Argument"], correctAnswer: 0, explanation: { en: "배려 means consideration for others." } },
  { id: "L4-S1-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n갑자기 비가 오는 ______ 우산을 샀어요.", options: ["동안", "바람에", "김에", "반면에"], correctAnswer: 1, explanation: { en: "-는 바람에 explains an unintended cause: 오는 바람에." } },
  { id: "L4-S1-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n연습을 많이 할______ 실력이 좋아져요.", options: ["때문에", "려고", "면서", "수록"], correctAnswer: 3, explanation: { en: "-(으)ㄹ수록 shows a proportional change: 할수록." } },
  { id: "L4-S1-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n저는 제 ______을/를 솔직하게 말했어요.", options: ["일정", "감정", "분위기", "교육"], correctAnswer: 1, explanation: { en: "감정 (feelings) fits with 솔직하게 말하다 (speak honestly about)." } },
  { id: "L4-S1-P06", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n저는 친구에게 자리를 ______.", options: ["향상했어요", "참여했어요", "양보했어요", "개선했어요"], correctAnswer: 2, explanation: { en: "양보하다 (to yield) fits giving up a seat for someone." } },
  { id: "L4-S1-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n______의 마음을 이해하려고 노력해요.", options: ["상대방", "성과", "일정", "분위기"], correctAnswer: 0, explanation: { en: "상대방 (the other person) fits understanding someone else's feelings." } },
  { id: "L4-S1-P08", type: "listening", audioText: "저는 친구와 갈등이 있었지만 서로 조금씩 양보해서 잘 해결했어요.", question: "두 사람은 갈등을 어떻게 해결했습니까?", options: ["대화를 안 해서", "혼자 참아서", "서로 양보해서", "선생님한테 물어봐서"], correctAnswer: 2, explanation: { en: 'The sentence says they resolved it by yielding to each other, so the answer is 서로 양보해서.' } },
  { id: "L4-S1-P09", type: "listening", audioText: "저는 동료를 믿을수록 일이 더 편해진다고 생각해요.", question: "이 사람이 이야기하는 것은 무엇입니까?", options: ["일의 어려움", "월급 문제", "퇴근 시간", "신뢰의 중요성"], correctAnswer: 3, explanation: { en: 'The sentence is about trust making work easier, so the answer is 신뢰의 중요성.' } },
  { id: "L4-S1-P10", type: "reading", passage: "저는 회사에서 새로운 동료와 일하게 됐어요. 처음에는 오해가 있었지만 대화를 많이 하면서 서로를 이해하게 됐어요.", question: "두 사람의 관계는 어떻게 변했습니까?", options: ["서로 이해하게 됐다", "한 사람이 퇴사했다", "계속 오해했다", "더 멀어졌다"], correctAnswer: 0, explanation: { en: 'The passage says they came to understand each other, so the answer is 서로 이해하게 됐다.' } },
  { id: "L4-S1-P11", type: "reading", passage: "인간관계에서 갈등은 누구에게나 생길 수 있어요. 솔직하게 이야기하면 대부분 풀려요.", question: "이 글의 중심 내용은 무엇입니까?", options: ["갈등은 나쁜 것이다", "갈등은 피해야 한다", "갈등은 절대 풀리지 않는다", "갈등은 솔직한 대화로 풀 수 있다"], correctAnswer: 3, explanation: { en: "The passage's main point is that honest conversation resolves conflict, so the answer is 갈등은 솔직한 대화로 풀 수 있다." } },
  { id: "L4-S1-P12", type: "sentence", question: "다음 중 자연스러운 문장은?", options: ["오해가 생기바람에 사이가 안 좋아졌어요.", "오해가 생긴 바람에서 사이가 안 좋아졌어요.", "오해가 생기는 바람에 사이가 안 좋아졌어요.", "오해 생기는 바람에 사이 안 좋아졌어요."], correctAnswer: 2, explanation: { en: "-는 바람에 attaches directly to the verb stem: 생기는 바람에." } },
];

export const STEP_4_1: StepContent = {
  level: 4,
  step: 1,
  title: "사회생활과 인간관계 (Social Life and Relationships)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
