// TOPIK 2 STEP 11 — Public Services (공공기관과 생활서비스).
// Real STEP content, independent of TOPIK1 and TOPIK2 STEP1-10's data files.
// 필요하다, 기다리다 already exist as "new" — recorded here with status
// "review". 제출하다/확인하다 were introduced as "new" in this same stage's
// STEP 10, so they are recorded here with status "review" too.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L2-S11-W01", korean: "신청하다", partOfSpeech: "verb", translations: { en: "to apply" }, example: "여기에서 신청하세요.", exampleTranslations: { en: "Please apply here." }, audioUrl: null, status: "new" },
  { id: "L2-S11-W02", korean: "접수하다", partOfSpeech: "verb", translations: { en: "to receive / process an application" }, example: "서류를 접수해요.", exampleTranslations: { en: "I process the documents." }, audioUrl: null, status: "new" },
  { id: "L2-S11-W03", korean: "서류", partOfSpeech: "noun", translations: { en: "document" }, example: "서류를 준비하세요.", exampleTranslations: { en: "Please prepare the documents." }, audioUrl: null, status: "new" },
  { id: "L2-S11-W04", korean: "번호", partOfSpeech: "noun", translations: { en: "number" }, example: "번호를 확인하세요.", exampleTranslations: { en: "Please check the number." }, audioUrl: null, status: "new" },
  { id: "L2-S11-W05", korean: "번호표", partOfSpeech: "noun", translations: { en: "number ticket" }, example: "번호표를 뽑으세요.", exampleTranslations: { en: "Please take a number ticket." }, audioUrl: null, status: "new" },
  { id: "L2-S11-W06", korean: "창구", partOfSpeech: "noun", translations: { en: "counter / window" }, example: "삼 번 창구로 가세요.", exampleTranslations: { en: "Please go to window number three." }, audioUrl: null, status: "new" },
  { id: "L2-S11-W07", korean: "주소", partOfSpeech: "noun", translations: { en: "address" }, example: "주소를 써 주세요.", exampleTranslations: { en: "Please write your address." }, audioUrl: null, status: "new" },
  { id: "L2-S11-W08", korean: "이름", partOfSpeech: "noun", translations: { en: "name" }, example: "이름을 써 주세요.", exampleTranslations: { en: "Please write your name." }, audioUrl: null, status: "new" },
  { id: "L2-S11-W09", korean: "작성하다", partOfSpeech: "verb", translations: { en: "to fill out / write" }, example: "서류를 작성하세요.", exampleTranslations: { en: "Please fill out the document." }, audioUrl: null, status: "new" },
  { id: "L2-S11-W10", korean: "찾다", partOfSpeech: "verb", translations: { en: "to find / to pick up" }, example: "서류를 찾으러 왔어요.", exampleTranslations: { en: "I came to pick up the documents." }, audioUrl: null, status: "new" },
  { id: "L2-S11-W11", korean: "보내다", partOfSpeech: "verb", translations: { en: "to send" }, example: "서류를 보내 주세요.", exampleTranslations: { en: "Please send the documents." }, audioUrl: null, status: "new" },
  { id: "L2-S11-W12", korean: "받다", partOfSpeech: "verb", translations: { en: "to receive" }, example: "번호표를 받으세요.", exampleTranslations: { en: "Please take a number ticket." }, audioUrl: null, status: "new" },
  { id: "L2-S11-W13", korean: "서비스", partOfSpeech: "noun", translations: { en: "service" }, example: "이 서비스는 무료예요.", exampleTranslations: { en: "This service is free." }, audioUrl: null, status: "new" },
  { id: "L2-S11-W14", korean: "제출하다", partOfSpeech: "verb", translations: { en: "to submit" }, example: "서류를 제출하세요.", exampleTranslations: { en: "Please submit the documents." }, audioUrl: null, status: "review" },
  { id: "L2-S11-W15", korean: "확인하다", partOfSpeech: "verb", translations: { en: "to check / confirm" }, example: "번호를 확인하세요.", exampleTranslations: { en: "Please check your number." }, audioUrl: null, status: "review" },
  { id: "L2-S11-W16", korean: "필요하다", partOfSpeech: "adjective", translations: { en: "to be necessary" }, example: "이 서류가 필요해요.", exampleTranslations: { en: "This document is necessary." }, audioUrl: null, status: "review" },
  { id: "L2-S11-W17", korean: "기다리다", partOfSpeech: "verb", translations: { en: "to wait" }, example: "번호표를 받고 기다리세요.", exampleTranslations: { en: "Please take a number and wait." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L2-S11-S01", korean: "여기에서 인터넷으로 신청할 수 있어요.", translations: { en: "You can apply online here." }, keyExpression: "-(으)ㄹ 수 있다", relatedWords: ["신청하다"], audioUrl: null },
  { id: "L2-S11-S02", korean: "이 창구에서는 접수할 수 없어요.", translations: { en: "You can't apply at this counter." }, keyExpression: "-(으)ㄹ 수 없다", relatedWords: ["창구", "접수하다"], audioUrl: null },
  { id: "L2-S11-S03", korean: "서류를 작성해야 해요.", translations: { en: "You have to fill out the document." }, keyExpression: "-아/어야 하다", relatedWords: ["서류", "작성하다"], audioUrl: null },
  { id: "L2-S11-S04", korean: "이름과 주소를 써야 해요.", translations: { en: "You have to write your name and address." }, keyExpression: "-아/어야 하다", relatedWords: ["이름", "주소"], audioUrl: null },
  { id: "L2-S11-S05", korean: "번호표를 받고 기다릴 수 있어요.", translations: { en: "You can take a number ticket and wait." }, keyExpression: "-(으)ㄹ 수 있다", relatedWords: ["번호표", "받다", "기다리다"], audioUrl: null },
  { id: "L2-S11-S06", korean: "서류를 제출한 후에 결과를 받을 수 있어요.", translations: { en: "You can receive the result after submitting the documents." }, keyExpression: "-(으)ㄴ 후에", relatedWords: ["서류", "제출하다", "받다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L2-S11-G01",
    pattern: "-(으)ㄹ 수 있다/없다",
    meanings: { en: "can / cannot" },
    explanations: {
      en: "Attach -(으)ㄹ 수 있다 to a verb stem to say something is possible, or -(으)ㄹ 수 없다 to say it isn't.",
    },
    examples: [
      { korean: "여기에서 인터넷으로 신청할 수 있어요.", translations: { en: "You can apply online here." } },
      { korean: "이 창구에서는 접수할 수 없어요.", translations: { en: "You can't apply at this counter." } },
    ],
  },
  {
    id: "L2-S11-G02",
    pattern: "-아/어야 하다 (복습)",
    meanings: { en: "must / have to (review)" },
    explanations: {
      en: "Keep using -아/어야 하다 for the documents and steps required at an office.",
    },
    examples: [
      { korean: "서류를 작성해야 해요.", translations: { en: "You have to fill out the document." } },
      { korean: "이름과 주소를 써야 해요.", translations: { en: "You have to write your name and address." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L2-S11-L01",
    audioText: "여기에서 인터넷으로 신청할 수 있어요.",
    audioUrl: null,
    question: "어떻게 신청할 수 있습니까?",
    options: ["전화로", "직접 방문해서", "우편으로", "인터넷으로"],
    correctAnswer: 3,
    translations: { en: { question: "How can you apply?", explanation: 'The sentence says "online," so the correct answer is 인터넷으로.' } },
  },
  {
    id: "L2-S11-L02",
    audioText: "번호표를 받고 창구 앞에서 기다리세요.",
    audioUrl: null,
    question: "무엇을 먼저 해야 합니까?",
    options: ["서류 작성", "돈 내기", "이름 쓰기", "번호표 받기"],
    correctAnswer: 3,
    translations: { en: { question: "What should be done first?", explanation: 'The sentence says "take a number ticket," so the correct answer is 번호표 받기.' } },
  },
  {
    id: "L2-S11-L03",
    audioText: "이름과 주소를 쓰고 서류를 창구에 제출하세요.",
    audioUrl: null,
    question: "서류는 어디에 제출해야 합니까?",
    options: ["창구", "우체국", "은행", "학교"],
    correctAnswer: 0,
    translations: { en: { question: "Where should the document be submitted?", explanation: "The sentence says to submit it at the counter, so the correct answer is 창구." } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L2-S11-R01",
    passage: "이 서비스는 인터넷으로 신청할 수 있어요.\n서류는 필요 없어요.",
    question: "이 서비스를 신청할 때 무엇이 필요합니까?",
    options: ["서류", "번호표", "인터넷", "이름과 주소만"],
    correctAnswer: 2,
    translations: { en: { question: "What is needed to apply for this service?", explanation: "The passage says you can apply online with no documents needed, so the correct answer is 인터넷." } },
  },
  {
    id: "L2-S11-R02",
    passage: "번호표를 받으세요.\n번호를 부르면 창구로 가세요.",
    question: "번호를 부르면 무엇을 해야 합니까?",
    options: ["집에 가기", "창구로 가기", "서류 작성하기", "돈 내기"],
    correctAnswer: 1,
    translations: { en: { question: "What should you do when your number is called?", explanation: "The passage says to go to the counter, so the correct answer is 창구로 가기." } },
  },
  {
    id: "L2-S11-R03",
    passage: "이름, 주소, 전화번호를 서류에 작성하세요.\n작성한 후에 창구에 제출하세요.\n서류를 제출하면 번호표를 받을 수 있어요.",
    question: "서류를 제출한 후에 무엇을 받을 수 있습니까?",
    options: ["번호표", "주소", "이름", "전화번호"],
    correctAnswer: 0,
    translations: { en: { question: "What can you receive after submitting the document?", explanation: "The passage says you can receive a number ticket, so the correct answer is 번호표." } },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L2-S11-P01", type: "vocabulary", question: '"서류"의 뜻은 무엇입니까?', options: ["Number", "Document", "Address", "Name"], correctAnswer: 1, explanation: { en: "서류 means document." } },
  { id: "L2-S11-P02", type: "vocabulary", question: '"작성하다"의 뜻은 무엇입니까?', options: ["To send", "To receive", "To fill out", "To find"], correctAnswer: 2, explanation: { en: "작성하다 means to fill out / write." } },
  { id: "L2-S11-P03", type: "vocabulary", question: "번호를 뽑고 순서를 기다릴 때 받는 것은?", options: ["서류", "번호표", "주소", "이름"], correctAnswer: 1, explanation: { en: "번호표 means number ticket." } },
  { id: "L2-S11-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n인터넷으로 신청 ______.", options: ["할 수 있어요", "했어요", "하지 마세요", "할 거예요"], correctAnswer: 0, explanation: { en: "-(으)ㄹ 수 있다 shows possibility: 할 수 있어요." } },
  { id: "L2-S11-P05", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n이 창구에서는 접수 ______.", options: ["할 수 있어요", "할 수 없어요", "하고 있어요", "했어요"], correctAnswer: 1, explanation: { en: "-(으)ㄹ 수 없다 shows impossibility: 할 수 없어요." } },
  { id: "L2-S11-P06", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n이름과 주소를 ______.", options: ["써야 해요", "써 보세요", "쓰고 있어요", "쓸 거예요"], correctAnswer: 0, explanation: { en: "-아/어야 하다 shows necessity: 써야 해요." } },
  { id: "L2-S11-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n번호표를 ______ 기다리세요.", options: ["받고", "받아서", "받는데", "받으면서"], correctAnswer: 0, explanation: { en: "받고 connects two actions in order: 받고 기다리세요." } },
  { id: "L2-S11-P08", type: "listening", audioText: "서류를 창구에 제출하세요.", question: "서류는 어디에 제출해야 합니까?", options: ["은행", "창구", "학교", "우체국"], correctAnswer: 1, explanation: { en: 'The sentence says "at the counter," so the answer is 창구.' } },
  { id: "L2-S11-P09", type: "reading", passage: "이 서비스는 인터넷으로 신청할 수 있어요.", question: "이 서비스는 어떻게 신청합니까?", options: ["전화로", "인터넷으로", "우편으로", "방문해서"], correctAnswer: 1, explanation: { en: 'The passage says "online," so the answer is 인터넷으로.' } },
  { id: "L2-S11-P10", type: "reading", passage: "서류를 제출하면 번호표를 받을 수 있어요.", question: "번호표는 언제 받을 수 있습니까?", options: ["서류를 제출한 후에", "서류를 작성하기 전에", "창구에 가기 전에", "이름을 쓰기 전에"], correctAnswer: 0, explanation: { en: 'The passage says "after submitting the document," so the answer is 서류를 제출한 후에.' } },
];

export const STEP_2_11: StepContent = {
  level: 2,
  step: 11,
  title: "공공기관과 생활서비스 (Public Services)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  practice: PRACTICE,
};
