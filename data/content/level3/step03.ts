// TOPIK 3 STEP 3 — Reasons and Results (이유와 결과).
// Independent of TOPIK1/TOPIK2/TOPIK3 STEP1-2's data files.
// 이유, 늦다 already exist as "new" (TOPIK2, TOPIK1) — recorded here with
// status "review". 때문에 is taught as a grammar pattern (TOPIK2 STEP13,
// and again below as "-기 때문에"), not re-listed as a WORDS entry.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L3-S3-W01", korean: "원인", partOfSpeech: "noun", translations: { en: "cause" }, example: "문제의 원인을 찾았어요.", exampleTranslations: { en: "I found the cause of the problem." }, audioUrl: null, status: "new" },
  { id: "L3-S3-W02", korean: "결과", partOfSpeech: "noun", translations: { en: "result" }, example: "좋은 결과가 나왔어요.", exampleTranslations: { en: "A good result came out." }, audioUrl: null, status: "new" },
  { id: "L3-S3-W03", korean: "문제", partOfSpeech: "noun", translations: { en: "problem" }, example: "문제가 생겼어요.", exampleTranslations: { en: "A problem came up." }, audioUrl: null, status: "new" },
  { id: "L3-S3-W04", korean: "상황", partOfSpeech: "noun", translations: { en: "situation" }, example: "지금 상황이 복잡해요.", exampleTranslations: { en: "The situation is complicated right now." }, audioUrl: null, status: "new" },
  { id: "L3-S3-W05", korean: "그래서", partOfSpeech: "noun", translations: { en: "so / therefore" }, example: "비가 왔어요. 그래서 늦었어요.", exampleTranslations: { en: "It rained. So I was late." }, audioUrl: null, status: "new" },
  { id: "L3-S3-W06", korean: "생기다", partOfSpeech: "verb", translations: { en: "to arise / come up" }, example: "갑자기 문제가 생겼어요.", exampleTranslations: { en: "A problem suddenly came up." }, audioUrl: null, status: "new" },
  { id: "L3-S3-W07", korean: "발생하다", partOfSpeech: "verb", translations: { en: "to occur" }, example: "사고가 발생했어요.", exampleTranslations: { en: "An accident occurred." }, audioUrl: null, status: "new" },
  { id: "L3-S3-W08", korean: "취소하다", partOfSpeech: "verb", translations: { en: "to cancel" }, example: "회의를 취소했어요.", exampleTranslations: { en: "I canceled the meeting." }, audioUrl: null, status: "new" },
  { id: "L3-S3-W09", korean: "변경하다", partOfSpeech: "verb", translations: { en: "to change" }, example: "일정을 변경했어요.", exampleTranslations: { en: "I changed the schedule." }, audioUrl: null, status: "new" },
  { id: "L3-S3-W10", korean: "결정", partOfSpeech: "noun", translations: { en: "decision" }, example: "중요한 결정을 했어요.", exampleTranslations: { en: "I made an important decision." }, audioUrl: null, status: "new" },
  { id: "L3-S3-W11", korean: "선택", partOfSpeech: "noun", translations: { en: "choice" }, example: "좋은 선택이었어요.", exampleTranslations: { en: "It was a good choice." }, audioUrl: null, status: "new" },
  { id: "L3-S3-W12", korean: "실수", partOfSpeech: "noun", translations: { en: "mistake" }, example: "제가 실수를 했어요.", exampleTranslations: { en: "I made a mistake." }, audioUrl: null, status: "new" },
  { id: "L3-S3-W13", korean: "해결하다", partOfSpeech: "verb", translations: { en: "to resolve / solve" }, example: "문제를 해결했어요.", exampleTranslations: { en: "I solved the problem." }, audioUrl: null, status: "new" },
  { id: "L3-S3-W14", korean: "설명하다", partOfSpeech: "verb", translations: { en: "to explain" }, example: "다시 설명해 주세요.", exampleTranslations: { en: "Please explain again." }, audioUrl: null, status: "new" },
  { id: "L3-S3-W15", korean: "이해하다", partOfSpeech: "verb", translations: { en: "to understand" }, example: "이제 이해했어요.", exampleTranslations: { en: "I understand now." }, audioUrl: null, status: "new" },
  { id: "L3-S3-W16", korean: "갑자기", partOfSpeech: "noun", translations: { en: "suddenly" }, example: "갑자기 비가 왔어요.", exampleTranslations: { en: "It suddenly rained." }, audioUrl: null, status: "new" },
  { id: "L3-S3-W17", korean: "미리", partOfSpeech: "noun", translations: { en: "in advance" }, example: "미리 연락해 주세요.", exampleTranslations: { en: "Please contact me in advance." }, audioUrl: null, status: "new" },
  { id: "L3-S3-W18", korean: "다시", partOfSpeech: "noun", translations: { en: "again" }, example: "다시 한번 설명해 주세요.", exampleTranslations: { en: "Please explain one more time." }, audioUrl: null, status: "new" },
  { id: "L3-S3-W19", korean: "이유", partOfSpeech: "noun", translations: { en: "reason" }, example: "늦은 이유를 말해 주세요.", exampleTranslations: { en: "Please tell me the reason you're late." }, audioUrl: null, status: "review" },
  { id: "L3-S3-W20", korean: "늦다", partOfSpeech: "adjective", translations: { en: "late" }, example: "길이 막혀서 늦었어요.", exampleTranslations: { en: "I was late because the road was jammed." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L3-S3-S01", korean: "길이 막혀서 늦었어요.", translations: { en: "I was late because the road was jammed." }, keyExpression: "-아서/어서", relatedWords: ["늦다"], audioUrl: null },
  { id: "L3-S3-S02", korean: "차가 막혔기 때문에 늦었어요.", translations: { en: "I was late because the traffic was jammed." }, keyExpression: "-기 때문에", relatedWords: ["늦다"], audioUrl: null },
  { id: "L3-S3-S03", korean: "갑자기 문제가 생겨서 회의가 취소됐어요.", translations: { en: "A problem suddenly came up, so the meeting was canceled." }, keyExpression: "-아서/어서", relatedWords: ["갑자기", "생기다", "취소하다"], audioUrl: null },
  { id: "L3-S3-S04", korean: "실수했기 때문에 다시 설명해야 해요.", translations: { en: "Because I made a mistake, I have to explain again." }, keyExpression: "-기 때문에", relatedWords: ["실수", "다시", "설명하다"], audioUrl: null },
  { id: "L3-S3-S05", korean: "이 문제의 원인을 이해했어요.", translations: { en: "I understood the cause of this problem." }, keyExpression: "이해하다", relatedWords: ["문제", "원인", "이해하다"], audioUrl: null },
  { id: "L3-S3-S06", korean: "일정을 미리 변경했어요.", translations: { en: "I changed the schedule in advance." }, keyExpression: "미리", relatedWords: ["미리", "변경하다"], audioUrl: null },
  { id: "L3-S3-S07", korean: "그 상황을 해결하기 위해서 노력했어요.", translations: { en: "I made an effort in order to resolve that situation." }, keyExpression: "-기 위해서", relatedWords: ["상황", "해결하다", "노력하다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L3-S3-G01",
    pattern: "-기 때문에",
    meanings: { en: "because (of the fact that)" },
    explanations: {
      en: "Attach -기 때문에 to a verb/adjective stem to give the reason behind a result, a little more formal than -아서/어서.",
    },
    examples: [
      { korean: "차가 막혔기 때문에 늦었어요.", translations: { en: "I was late because the traffic was jammed." } },
      { korean: "실수했기 때문에 다시 설명해야 해요.", translations: { en: "Because I made a mistake, I have to explain again." } },
    ],
  },
  {
    id: "L3-S3-G02",
    pattern: "-아서/어서 (복습 및 비교)",
    meanings: { en: "so / because (review, compared with -기 때문에)" },
    explanations: {
      en: "-아서/어서 and -기 때문에 both give a reason, but -아서/어서 also connects two actions in sequence and can't be followed by a command or suggestion, while -기 때문에 states a reason more directly and can end a clause on its own.",
    },
    examples: [
      { korean: "길이 막혀서 늦었어요.", translations: { en: "I was late because the road was jammed." } },
      { korean: "갑자기 문제가 생겨서 회의가 취소됐어요.", translations: { en: "A problem suddenly came up, so the meeting was canceled." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L3-S3-L01",
    audioText: "차가 막혔기 때문에 늦었어요.",
    audioUrl: null,
    question: "왜 늦었습니까?",
    options: ["길을 몰라서", "버스를 놓쳐서", "늦게 일어나서", "차가 막혀서"],
    correctAnswer: 3,
    translations: { en: { question: "Why were they late?", explanation: 'The sentence says "because the traffic was jammed," so the correct answer is 차가 막혀서.' } },
  },
  {
    id: "L3-S3-L02",
    audioText: "갑자기 문제가 생겨서 회의가 취소됐어요.",
    audioUrl: null,
    question: "회의가 왜 취소됐습니까?",
    options: ["장소가 없어서", "사람이 없어서", "갑자기 문제가 생겨서", "시간이 늦어서"],
    correctAnswer: 2,
    translations: { en: { question: "Why was the meeting canceled?", explanation: 'The sentence says "a problem suddenly came up," so the correct answer is 갑자기 문제가 생겨서.' } },
  },
  {
    id: "L3-S3-L03",
    audioText: "저는 실수를 했기 때문에 다시 설명했어요.",
    audioUrl: null,
    question: "왜 다시 설명했습니까?",
    options: ["실수를 해서", "시간이 남아서", "재미있어서", "부탁받아서"],
    correctAnswer: 0,
    translations: { en: { question: "Why did they explain again?", explanation: 'The sentence says "because I made a mistake," so the correct answer is 실수를 해서.' } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L3-S3-R01",
    passage:
      "오늘 아침에 길이 많이 막혔어요.\n그래서 학교에 늦게 도착했어요.\n선생님께 늦은 이유를 설명했어요.\n다음부터는 더 일찍 나오려고 해요.",
    question: "이 사람은 왜 학교에 늦었습니까?",
    options: ["버스를 놓쳐서", "길이 막혀서", "늦게 일어나서", "숙제를 못 해서"],
    correctAnswer: 1,
    translations: { en: { question: "Why were they late for school?", explanation: "The passage says the road was jammed, so the correct answer is 길이 막혀서." } },
  },
  {
    id: "L3-S3-R02",
    passage:
      "저는 발표에서 실수를 했어요.\n그 실수 때문에 사람들이 이해하지 못했어요.\n그래서 발표가 끝난 후에 다시 설명했어요.",
    question: "왜 다시 설명했습니까?",
    options: ["선생님이 시켜서", "시간이 남아서", "재미있어서", "실수 때문에 사람들이 이해하지 못해서"],
    correctAnswer: 3,
    translations: { en: { question: "Why did they explain again?", explanation: "The passage says people didn't understand because of the mistake, so the correct answer is 실수 때문에 사람들이 이해하지 못해서." } },
  },
  {
    id: "L3-S3-R03",
    passage:
      "회사에서 문제가 발생했어요.\n먼저 문제의 원인을 찾았어요.\n원인을 이해한 후에 해결 방법을 결정했어요.\n결국 문제를 잘 해결했어요.",
    question: "문제를 해결하기 위해 가장 먼저 무엇을 했습니까?",
    options: ["원인을 찾았어요", "회의를 취소했어요", "일정을 변경했어요", "다른 사람에게 물어봤어요"],
    correctAnswer: 0,
    translations: { en: { question: "What did they do first to solve the problem?", explanation: "The passage says they first found the cause, so the correct answer is 원인을 찾았어요." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L3-S3-WR01",
    type: "sentence-order",
    prompt: {
      en: "Put these two fragments in the correct order to make one reason + result sentence, then write the full sentence: 「학교에 늦게 도착했어요」 / 「길이 막혀서」",
    },
    keywords: ["길이 막혀서", "학교에 늦게 도착했어요"],
    sampleAnswer: { en: "길이 막혀서 학교에 늦게 도착했어요." },
    explanation: { en: "The reason clause with -아서/어서 comes first, and the result comes second." },
  },
  {
    id: "L3-S3-WR02",
    type: "short-response",
    prompt: { en: "Write 2-3 sentences explaining a reason you were late (real or made up)." },
    keywords: ["길", "막히다", "그래서", "때문에"],
    sampleAnswer: { en: "오늘 길이 많이 막혔어요. 그래서 회사에 늦게 도착했어요. 늦은 이유를 팀장님께 설명했어요." },
    explanation: { en: "Use 그래서 or -기 때문에 to connect the reason to what happened as a result." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L3-S3-P01", type: "vocabulary", question: '"원인"의 뜻은 무엇입니까?', options: ["Decision", "Result", "Problem", "Cause"], correctAnswer: 3, explanation: { en: "원인 means cause." } },
  { id: "L3-S3-P02", type: "vocabulary", question: '"해결하다"의 뜻은 무엇입니까?', options: ["To cancel", "To resolve/solve", "To explain", "To change"], correctAnswer: 1, explanation: { en: "해결하다 means to resolve/solve." } },
  { id: "L3-S3-P03", type: "vocabulary", question: "잘못해서 생긴 작은 잘못을 무엇이라고 합니까?", options: ["결과", "실수", "선택", "상황"], correctAnswer: 1, explanation: { en: "실수 means mistake." } },
  { id: "L3-S3-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n차가 막혔______ 늦었어요.", options: ["고 나서", "기 때문에", "는 동안", "기 위해서"], correctAnswer: 1, explanation: { en: "-기 때문에 gives the reason: 막혔기 때문에." } },
  { id: "L3-S3-P05", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n실수했______ 다시 설명해야 해요.", options: ["기 위해서", "고 나서", "는데", "기 때문에"], correctAnswer: 3, explanation: { en: "-기 때문에 gives the reason: 실수했기 때문에." } },
  { id: "L3-S3-P06", type: "grammar", question: "다음 중 두 가지 행동을 순서대로 연결할 때 더 자연스러운 것은?", options: ["길이 막혔지만 늦었어요.", "길이 막히기 때문에 늦었어요만.", "길이 막혀서 늦었어요.", "길이 막히려고 늦었어요."], correctAnswer: 2, explanation: { en: "-아서/어서 naturally connects a reason to its direct result: 막혀서 늦었어요." } },
  { id: "L3-S3-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n비가 왔어요. ______ 우산을 샀어요.", options: ["그런데", "그러면", "그래서", "그리고"], correctAnswer: 2, explanation: { en: "그래서 means \"so/therefore.\"" } },
  { id: "L3-S3-P08", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n다음부터는 ______ 연락해 주세요.", options: ["마지막으로", "갑자기", "다시", "미리"], correctAnswer: 3, explanation: { en: "미리 means \"in advance.\"" } },
  { id: "L3-S3-P09", type: "listening", audioText: "갑자기 문제가 생겨서 일정을 변경했어요.", question: "왜 일정을 변경했습니까?", options: ["갑자기 문제가 생겨서", "시간이 남아서", "장소가 바뀌어서", "사람이 많아서"], correctAnswer: 0, explanation: { en: 'The sentence says "a problem suddenly came up," so the answer is 갑자기 문제가 생겨서.' } },
  { id: "L3-S3-P10", type: "reading", passage: "회사에서 문제가 발생했어요. 원인을 찾은 후에 해결했어요.", question: "문제를 해결하기 전에 먼저 무엇을 했습니까?", options: ["원인을 찾았어요", "회의를 취소했어요", "휴가를 갔어요", "다른 일을 시작했어요"], correctAnswer: 0, explanation: { en: 'The passage says they found the cause first, so the answer is 원인을 찾았어요.' } },
  { id: "L3-S3-P11", type: "reading", passage: "실수 때문에 사람들이 이해하지 못해서 다시 설명했어요.", question: "왜 다시 설명했습니까?", options: ["사람들이 이해하지 못해서", "시간이 남아서", "재미있어서", "부탁받아서"], correctAnswer: 0, explanation: { en: 'The passage says people did not understand, so the answer is 사람들이 이해하지 못해서.' } },
];

export const STEP_3_3: StepContent = {
  level: 3,
  step: 3,
  title: "이유와 결과 (Reasons and Results)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
