// TOPIK 3 STEP 5 — Problems and Solutions (문제와 해결).
// Independent of TOPIK1/TOPIK2/TOPIK3 STEP1-4's data files.
// 문제, 방법, 실수, 해결하다, 생기다, 찾다, 필요하다 already exist as
// "new" — recorded here with status "review".
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L3-S5-W01", korean: "해결", partOfSpeech: "noun", translations: { en: "solution / resolution" }, example: "빠른 해결이 필요해요.", exampleTranslations: { en: "A quick solution is needed." }, audioUrl: null, status: "new" },
  { id: "L3-S5-W02", korean: "고장", partOfSpeech: "noun", translations: { en: "breakdown / malfunction" }, example: "세탁기가 고장이 났어요.", exampleTranslations: { en: "The washing machine broke down." }, audioUrl: null, status: "new" },
  { id: "L3-S5-W03", korean: "고장나다", partOfSpeech: "verb", translations: { en: "to break down" }, example: "컴퓨터가 고장났어요.", exampleTranslations: { en: "The computer broke down." }, audioUrl: null, status: "new" },
  { id: "L3-S5-W04", korean: "불편", partOfSpeech: "noun", translations: { en: "inconvenience" }, example: "불편을 드려서 죄송합니다.", exampleTranslations: { en: "I'm sorry for the inconvenience." }, audioUrl: null, status: "new" },
  { id: "L3-S5-W05", korean: "도움", partOfSpeech: "noun", translations: { en: "help" }, example: "도움이 필요해요.", exampleTranslations: { en: "I need help." }, audioUrl: null, status: "new" },
  { id: "L3-S5-W06", korean: "도와주다", partOfSpeech: "verb", translations: { en: "to help (someone)" }, example: "친구가 저를 도와줬어요.", exampleTranslations: { en: "My friend helped me." }, audioUrl: null, status: "new" },
  { id: "L3-S5-W07", korean: "연락", partOfSpeech: "noun", translations: { en: "contact" }, example: "연락을 기다리고 있어요.", exampleTranslations: { en: "I'm waiting for contact." }, audioUrl: null, status: "new" },
  { id: "L3-S5-W08", korean: "수리", partOfSpeech: "noun", translations: { en: "repair" }, example: "수리 센터에 갔어요.", exampleTranslations: { en: "I went to the repair center." }, audioUrl: null, status: "new" },
  { id: "L3-S5-W09", korean: "확인", partOfSpeech: "noun", translations: { en: "check / confirmation" }, example: "확인 후에 연락드릴게요.", exampleTranslations: { en: "I'll contact you after checking." }, audioUrl: null, status: "new" },
  { id: "L3-S5-W10", korean: "고치다", partOfSpeech: "verb", translations: { en: "to fix" }, example: "휴대전화를 고쳤어요.", exampleTranslations: { en: "I fixed my phone." }, audioUrl: null, status: "new" },
  { id: "L3-S5-W11", korean: "잃어버리다", partOfSpeech: "verb", translations: { en: "to lose (something)" }, example: "지갑을 잃어버렸어요.", exampleTranslations: { en: "I lost my wallet." }, audioUrl: null, status: "new" },
  { id: "L3-S5-W12", korean: "요청하다", partOfSpeech: "verb", translations: { en: "to request" }, example: "수리를 요청했어요.", exampleTranslations: { en: "I requested a repair." }, audioUrl: null, status: "new" },
  { id: "L3-S5-W13", korean: "부탁하다", partOfSpeech: "verb", translations: { en: "to ask a favor" }, example: "동료에게 부탁했어요.", exampleTranslations: { en: "I asked my coworker for a favor." }, audioUrl: null, status: "new" },
  { id: "L3-S5-W14", korean: "걱정하다", partOfSpeech: "verb", translations: { en: "to worry" }, example: "너무 걱정하지 마세요.", exampleTranslations: { en: "Please don't worry too much." }, audioUrl: null, status: "new" },
  { id: "L3-S5-W15", korean: "해결책", partOfSpeech: "noun", translations: { en: "solution (a way to solve)" }, example: "좋은 해결책을 찾았어요.", exampleTranslations: { en: "I found a good solution." }, audioUrl: null, status: "new" },
  { id: "L3-S5-W16", korean: "다행이다", partOfSpeech: "adjective", translations: { en: "to be fortunate / a relief" }, example: "고장이 아니라서 다행이에요.", exampleTranslations: { en: "It's a relief that it's not broken." }, audioUrl: null, status: "new" },
  { id: "L3-S5-W17", korean: "늦어지다", partOfSpeech: "verb", translations: { en: "to be delayed" }, example: "수리가 늦어지고 있어요.", exampleTranslations: { en: "The repair is being delayed." }, audioUrl: null, status: "new" },
  { id: "L3-S5-W18", korean: "바꾸다", partOfSpeech: "verb", translations: { en: "to change / replace" }, example: "부품을 새것으로 바꿨어요.", exampleTranslations: { en: "I replaced the part with a new one." }, audioUrl: null, status: "new" },
  { id: "L3-S5-W19", korean: "문제", partOfSpeech: "noun", translations: { en: "problem" }, example: "문제가 생겼어요.", exampleTranslations: { en: "A problem came up." }, audioUrl: null, status: "review" },
  { id: "L3-S5-W20", korean: "방법", partOfSpeech: "noun", translations: { en: "method" }, example: "다른 방법을 찾아봐요.", exampleTranslations: { en: "Let's look for another method." }, audioUrl: null, status: "review" },
  { id: "L3-S5-W21", korean: "실수", partOfSpeech: "noun", translations: { en: "mistake" }, example: "제 실수였어요.", exampleTranslations: { en: "It was my mistake." }, audioUrl: null, status: "review" },
  { id: "L3-S5-W22", korean: "해결하다", partOfSpeech: "verb", translations: { en: "to resolve / solve" }, example: "문제를 빨리 해결했어요.", exampleTranslations: { en: "I resolved the problem quickly." }, audioUrl: null, status: "review" },
  { id: "L3-S5-W23", korean: "생기다", partOfSpeech: "verb", translations: { en: "to arise / come up" }, example: "갑자기 고장이 생겼어요.", exampleTranslations: { en: "A malfunction suddenly came up." }, audioUrl: null, status: "review" },
  { id: "L3-S5-W24", korean: "찾다", partOfSpeech: "verb", translations: { en: "to find" }, example: "해결 방법을 찾았어요.", exampleTranslations: { en: "I found a solution." }, audioUrl: null, status: "review" },
  { id: "L3-S5-W25", korean: "필요하다", partOfSpeech: "adjective", translations: { en: "to be necessary" }, example: "도움이 필요해요.", exampleTranslations: { en: "Help is needed." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L3-S5-S01", korean: "버스를 놓치면 지하철을 타세요.", translations: { en: "If you miss the bus, take the subway." }, keyExpression: "-(으)면", relatedWords: ["버스", "지하철"], audioUrl: null },
  { id: "L3-S5-S02", korean: "문제가 있으면 직원에게 물어보는 게 좋아요.", translations: { en: "If there's a problem, it's good to ask the staff." }, keyExpression: "-는 게 좋다", relatedWords: ["문제"], audioUrl: null },
  { id: "L3-S5-S03", korean: "컴퓨터가 고장나서 수리를 요청했어요.", translations: { en: "The computer broke down, so I requested a repair." }, keyExpression: "-아서/어서", relatedWords: ["고장나다", "수리", "요청하다"], audioUrl: null },
  { id: "L3-S5-S04", korean: "지갑을 잃어버리면 먼저 연락하는 게 좋아요.", translations: { en: "If you lose your wallet, it's good to contact someone first." }, keyExpression: "-는 게 좋다", relatedWords: ["잃어버리다", "연락"], audioUrl: null },
  { id: "L3-S5-S05", korean: "동료에게 부탁하면 도와줄 거예요.", translations: { en: "If you ask your coworker, they'll help you." }, keyExpression: "-(으)면", relatedWords: ["부탁하다", "도와주다"], audioUrl: null },
  { id: "L3-S5-S06", korean: "너무 걱정하지 마세요. 좋은 해결책이 있을 거예요.", translations: { en: "Don't worry too much. There will be a good solution." }, keyExpression: "-지 마세요", relatedWords: ["걱정하다", "해결책"], audioUrl: null },
  { id: "L3-S5-S07", korean: "부품을 바꾼 후에 고장이 안 나서 다행이에요.", translations: { en: "After replacing the part, it's a relief it doesn't break down anymore." }, keyExpression: "-(으)ㄴ 후에", relatedWords: ["바꾸다", "다행이다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L3-S5-G01",
    pattern: "-(으)면",
    meanings: { en: "if / when" },
    explanations: {
      en: "Attach -(으)면 to a verb/adjective stem to state a condition — if that happens, the following clause follows.",
    },
    examples: [
      { korean: "버스를 놓치면 지하철을 타세요.", translations: { en: "If you miss the bus, take the subway." } },
      { korean: "동료에게 부탁하면 도와줄 거예요.", translations: { en: "If you ask your coworker, they'll help you." } },
    ],
  },
  {
    id: "L3-S5-G02",
    pattern: "-는 게 좋다",
    meanings: { en: "it's better to / it would be good to" },
    explanations: {
      en: "Attach -는 게 좋다 to a verb stem to gently suggest or advise doing something. 게 is the everyday spoken contraction of 것이.",
    },
    examples: [
      { korean: "문제가 있으면 직원에게 물어보는 게 좋아요.", translations: { en: "If there's a problem, it's good to ask the staff." } },
      { korean: "지갑을 잃어버리면 먼저 연락하는 게 좋아요.", translations: { en: "If you lose your wallet, it's good to contact someone first." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L3-S5-L01",
    audioText: "컴퓨터가 갑자기 고장났어요. 그래서 수리 센터에 연락했어요.",
    audioUrl: null,
    question: "이 사람은 왜 수리 센터에 연락했습니까?",
    options: ["수리비를 물어보려고", "컴퓨터를 사려고", "컴퓨터가 고장나서", "새 컴퓨터가 필요해서"],
    correctAnswer: 2,
    translations: { en: { question: "Why did they contact the repair center?", explanation: 'The sentence says "the computer broke down," so the correct answer is 컴퓨터가 고장나서.' } },
  },
  {
    id: "L3-S5-L02",
    audioText: "지갑을 잃어버렸어요. 그런데 친구가 찾아 줘서 다행이에요.",
    audioUrl: null,
    question: "왜 다행이라고 했습니까?",
    options: ["친구가 찾아 줘서", "지갑을 새로 사서", "돈이 많아서", "지갑이 필요 없어서"],
    correctAnswer: 0,
    translations: { en: { question: "Why did they say it was a relief?", explanation: 'The sentence says "my friend found it," so the correct answer is 친구가 찾아 줘서.' } },
  },
  {
    id: "L3-S5-L03",
    audioText: "세탁기에 문제가 생기면 먼저 전원을 확인하는 게 좋아요. 그래도 안 되면 수리를 요청하세요.",
    audioUrl: null,
    question: "세탁기에 문제가 생기면 먼저 무엇을 해야 합니까?",
    options: ["새 것을 사요", "그냥 기다려요", "수리를 요청해요", "전원을 확인해요"],
    correctAnswer: 3,
    translations: { en: { question: "What should be done first if there's a problem with the washing machine?", explanation: 'The sentence says to check the power first, so the correct answer is 전원을 확인해요.' } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L3-S5-R01",
    passage:
      "어제 냉장고가 고장났어요.\n음식이 상할까 봐 걱정했어요.\n바로 수리 센터에 연락해서 요청했어요.\n오늘 아침에 수리 기사님이 오셔서 고쳐 주셨어요.",
    question: "이 사람은 냉장고가 고장난 후에 무엇을 했습니까?",
    options: ["수리 센터에 연락했어요", "새 냉장고를 샀어요", "그냥 기다렸어요", "음식을 버렸어요"],
    correctAnswer: 0,
    translations: { en: { question: "What did they do after the fridge broke down?", explanation: "The passage says they contacted the repair center, so the correct answer is 수리 센터에 연락했어요." } },
  },
  {
    id: "L3-S5-R02",
    passage:
      "지하철에서 지갑을 잃어버렸어요.\n너무 걱정이 됐지만 역무원에게 상황을 설명했어요.\n역무원이 도와줘서 지갑을 다시 찾았어요.\n정말 다행이었어요.",
    question: "지갑을 찾을 수 있었던 이유는 무엇입니까?",
    options: ["혼자 다시 찾아서", "역무원이 도와줘서", "경찰에게 연락해서", "친구가 찾아 줘서"],
    correctAnswer: 1,
    translations: { en: { question: "Why were they able to find the wallet?", explanation: "The passage says the station staff helped, so the correct answer is 역무원이 도와줘서." } },
  },
  {
    id: "L3-S5-R03",
    passage:
      "요즘 회사 프린터가 자주 고장나요.\n먼저 원인을 확인했더니 부품이 오래됐어요.\n그래서 부품을 새것으로 바꾸기로 했어요.\n문제가 생기면 참지 말고 바로 요청하는 게 좋아요.",
    question: "프린터가 고장나는 원인은 무엇이었습니까?",
    options: ["종이 부족", "전기 문제", "사용자의 실수", "오래된 부품"],
    correctAnswer: 3,
    translations: { en: { question: "What was the cause of the printer breaking down?", explanation: "The passage says the part was old, so the correct answer is 오래된 부품." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L3-S5-WR01",
    type: "sentence-completion",
    prompt: { en: "Complete the sentence: 시간이 없으면 ______." },
    sampleAnswer: { en: "시간이 없으면 다음에 다시 연락하세요." },
    explanation: { en: "-(으)면 states a condition, and the second clause gives what to do if it's true." },
  },
  {
    id: "L3-S5-WR02",
    type: "short-response",
    prompt: {
      en: "Write 3 sentences about a small problem you've had in daily life and how you solved it. Structure: problem → reason/situation → solution.",
    },
    keywords: ["문제", "그래서", "해결하다"],
    sampleAnswer: {
      en: "지난주에 휴대전화가 고장났어요. 화면이 갑자기 안 켜져서 정말 당황했어요. 그래서 수리 센터에 가서 고쳤어요.",
    },
    explanation: { en: "Describe the problem, explain why it happened or how it felt, then say how you resolved it." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L3-S5-P01", type: "vocabulary", question: '"고장나다"의 뜻은 무엇입니까?', options: ["To help", "To fix", "To break down", "To request"], correctAnswer: 2, explanation: { en: "고장나다 means to break down." } },
  { id: "L3-S5-P02", type: "vocabulary", question: '"해결책"의 뜻은 무엇입니까?', options: ["Problem", "Solution", "Mistake", "Request"], correctAnswer: 1, explanation: { en: "해결책 means solution." } },
  { id: "L3-S5-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n버스를 놓치______ 지하철을 타세요.", options: ["으면", "기 때문에", "고 나서", "는 동안"], correctAnswer: 0, explanation: { en: "-(으)면 states a condition: 놓치면." } },
  { id: "L3-S5-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n문제가 있으면 직원에게 ______.", options: ["물어보는 게 좋아요", "물어봤어요", "물어볼 거예요", "물어보지 마세요"], correctAnswer: 0, explanation: { en: "-는 게 좋다 gives gentle advice: 물어보는 게 좋아요." } },
  { id: "L3-S5-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n지갑을 ______ 역무원에게 물어보세요.", options: ["잃어버리고 나서", "잃어버리면", "잃어버려서", "잃어버리는 동안"], correctAnswer: 1, explanation: { en: "-(으)면 fits a conditional situation: 잃어버리면." } },
  { id: "L3-S5-P06", type: "vocabulary", question: "무엇이 필요할 때 다른 사람에게 부탁하는 말은?", options: ["확인했어요", "도와주세요", "고쳤어요", "바꿨어요"], correctAnswer: 1, explanation: { en: "도와주세요 means \"please help me.\"" } },
  { id: "L3-S5-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n고장이 아니라서 정말 ______.", options: ["불편해요", "걱정이에요", "필요해요", "다행이에요"], correctAnswer: 3, explanation: { en: "다행이에요 means \"it's a relief.\"" } },
  { id: "L3-S5-P08", type: "listening", audioText: "컴퓨터가 고장나서 수리 센터에 연락했어요.", question: "왜 수리 센터에 연락했습니까?", options: ["가격을 물어보려고", "컴퓨터를 사려고", "친구를 만나려고", "컴퓨터가 고장나서"], correctAnswer: 3, explanation: { en: 'The sentence says "the computer broke down," so the answer is 컴퓨터가 고장나서.' } },
  { id: "L3-S5-P09", type: "reading", passage: "지갑을 잃어버렸지만 역무원이 도와줘서 다시 찾았어요.", question: "지갑을 찾을 수 있었던 이유는 무엇입니까?", options: ["경찰에게 연락해서", "친구가 찾아서", "역무원이 도와줘서", "혼자 찾아서"], correctAnswer: 2, explanation: { en: 'The passage says the station staff helped, so the answer is 역무원이 도와줘서.' } },
  { id: "L3-S5-P10", type: "reading", passage: "프린터가 고장나는 원인은 오래된 부품이었어요.", question: "프린터가 고장난 원인은 무엇입니까?", options: ["종이 부족", "전기 문제", "오래된 부품", "사용자 실수"], correctAnswer: 2, explanation: { en: 'The passage says the cause was an old part, so the answer is 오래된 부품.' } },
];

export const STEP_3_5: StepContent = {
  level: 3,
  step: 5,
  title: "문제와 해결 (Problems and Solutions)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
