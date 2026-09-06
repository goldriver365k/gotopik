// TOPIK 3 STEP 7 — School and Study (학교와 학습).
// Independent of TOPIK1/TOPIK2/TOPIK3 STEP1-6's data files.
// 방법, 시험, 과제, 발표, 질문, 정리하다, 제출하다, 노력하다 already
// exist as "new" — recorded here with status "review".
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L3-S7-W01", korean: "학습", partOfSpeech: "noun", translations: { en: "learning / study" }, example: "효과적인 학습 방법을 찾았어요.", exampleTranslations: { en: "I found an effective learning method." }, audioUrl: null, status: "new" },
  { id: "L3-S7-W02", korean: "복습", partOfSpeech: "noun", translations: { en: "review (studying)" }, example: "매일 복습을 해요.", exampleTranslations: { en: "I do review every day." }, audioUrl: null, status: "new" },
  { id: "L3-S7-W03", korean: "예습", partOfSpeech: "noun", translations: { en: "preview (studying ahead)" }, example: "수업 전에 예습을 해요.", exampleTranslations: { en: "I preview before class." }, audioUrl: null, status: "new" },
  { id: "L3-S7-W04", korean: "집중", partOfSpeech: "noun", translations: { en: "concentration" }, example: "집중이 잘 안 돼요.", exampleTranslations: { en: "I can't concentrate well." }, audioUrl: null, status: "new" },
  { id: "L3-S7-W05", korean: "성적", partOfSpeech: "noun", translations: { en: "grades" }, example: "성적이 올랐어요.", exampleTranslations: { en: "My grades went up." }, audioUrl: null, status: "new" },
  { id: "L3-S7-W06", korean: "이해", partOfSpeech: "noun", translations: { en: "understanding" }, example: "이해가 안 돼요.", exampleTranslations: { en: "I don't understand." }, audioUrl: null, status: "new" },
  { id: "L3-S7-W07", korean: "암기", partOfSpeech: "noun", translations: { en: "memorization" }, example: "암기가 어려워요.", exampleTranslations: { en: "Memorization is hard." }, audioUrl: null, status: "new" },
  { id: "L3-S7-W08", korean: "연습", partOfSpeech: "noun", translations: { en: "practice" }, example: "연습이 필요해요.", exampleTranslations: { en: "Practice is needed." }, audioUrl: null, status: "new" },
  { id: "L3-S7-W09", korean: "설명", partOfSpeech: "noun", translations: { en: "explanation" }, example: "설명이 이해하기 쉬워요.", exampleTranslations: { en: "The explanation is easy to understand." }, audioUrl: null, status: "new" },
  { id: "L3-S7-W10", korean: "외우다", partOfSpeech: "verb", translations: { en: "to memorize" }, example: "단어를 외워요.", exampleTranslations: { en: "I memorize words." }, audioUrl: null, status: "new" },
  { id: "L3-S7-W11", korean: "효과", partOfSpeech: "noun", translations: { en: "effect" }, example: "이 방법은 효과가 있어요.", exampleTranslations: { en: "This method is effective." }, audioUrl: null, status: "new" },
  { id: "L3-S7-W12", korean: "지식", partOfSpeech: "noun", translations: { en: "knowledge" }, example: "새로운 지식을 배웠어요.", exampleTranslations: { en: "I learned new knowledge." }, audioUrl: null, status: "new" },
  { id: "L3-S7-W13", korean: "필기", partOfSpeech: "noun", translations: { en: "note-taking" }, example: "수업 시간에 필기를 해요.", exampleTranslations: { en: "I take notes during class." }, audioUrl: null, status: "new" },
  { id: "L3-S7-W14", korean: "익히다", partOfSpeech: "verb", translations: { en: "to get used to / master" }, example: "문법을 익혔어요.", exampleTranslations: { en: "I mastered the grammar." }, audioUrl: null, status: "new" },
  { id: "L3-S7-W15", korean: "실력", partOfSpeech: "noun", translations: { en: "skill / ability" }, example: "한국어 실력이 늘었어요.", exampleTranslations: { en: "My Korean skill improved." }, audioUrl: null, status: "new" },
  { id: "L3-S7-W16", korean: "포기하다", partOfSpeech: "verb", translations: { en: "to give up" }, example: "어렵지만 포기하지 않아요.", exampleTranslations: { en: "It's hard, but I don't give up." }, audioUrl: null, status: "new" },
  { id: "L3-S7-W17", korean: "반복하다", partOfSpeech: "verb", translations: { en: "to repeat" }, example: "같은 문장을 반복해서 연습해요.", exampleTranslations: { en: "I practice the same sentence repeatedly." }, audioUrl: null, status: "new" },
  { id: "L3-S7-W18", korean: "효율적", partOfSpeech: "noun", translations: { en: "efficient" }, example: "효율적인 방법을 찾았어요.", exampleTranslations: { en: "I found an efficient method." }, audioUrl: null, status: "new" },
  { id: "L3-S7-W19", korean: "방법", partOfSpeech: "noun", translations: { en: "method" }, example: "새로운 공부 방법을 시도했어요.", exampleTranslations: { en: "I tried a new study method." }, audioUrl: null, status: "review" },
  { id: "L3-S7-W20", korean: "시험", partOfSpeech: "noun", translations: { en: "exam" }, example: "다음 주에 시험이 있어요.", exampleTranslations: { en: "There's an exam next week." }, audioUrl: null, status: "review" },
  { id: "L3-S7-W21", korean: "과제", partOfSpeech: "noun", translations: { en: "assignment" }, example: "과제를 끝냈어요.", exampleTranslations: { en: "I finished my assignment." }, audioUrl: null, status: "review" },
  { id: "L3-S7-W22", korean: "발표", partOfSpeech: "noun", translations: { en: "presentation" }, example: "내일 발표가 있어요.", exampleTranslations: { en: "There's a presentation tomorrow." }, audioUrl: null, status: "review" },
  { id: "L3-S7-W23", korean: "질문", partOfSpeech: "noun", translations: { en: "question" }, example: "질문이 있어요.", exampleTranslations: { en: "I have a question." }, audioUrl: null, status: "review" },
  { id: "L3-S7-W24", korean: "정리하다", partOfSpeech: "verb", translations: { en: "to organize" }, example: "노트를 정리해요.", exampleTranslations: { en: "I organize my notes." }, audioUrl: null, status: "review" },
  { id: "L3-S7-W25", korean: "제출하다", partOfSpeech: "verb", translations: { en: "to submit" }, example: "과제를 제출했어요.", exampleTranslations: { en: "I submitted my assignment." }, audioUrl: null, status: "review" },
  { id: "L3-S7-W26", korean: "노력하다", partOfSpeech: "verb", translations: { en: "to make an effort" }, example: "성적을 위해 노력해요.", exampleTranslations: { en: "I make an effort for my grades." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L3-S7-S01", korean: "이 단어는 외우기 어려워요.", translations: { en: "This word is hard to memorize." }, keyExpression: "-기 어렵다", relatedWords: ["외우다"], audioUrl: null },
  { id: "L3-S7-S02", korean: "이 문법은 이해하기 쉬워요.", translations: { en: "This grammar is easy to understand." }, keyExpression: "-기 쉽다", relatedWords: ["이해"], audioUrl: null },
  { id: "L3-S7-S03", korean: "시험을 보는 동안 휴대전화를 사용할 수 없어요.", translations: { en: "You can't use your phone while taking the exam." }, keyExpression: "-는 동안", relatedWords: ["시험"], audioUrl: null },
  { id: "L3-S7-S04", korean: "복습하는 동안 필기한 것을 다시 봐요.", translations: { en: "While reviewing, I look over what I took notes on." }, keyExpression: "-는 동안", relatedWords: ["복습", "필기"], audioUrl: null },
  { id: "L3-S7-S05", korean: "단어를 반복해서 연습하면 암기하기 쉬워져요.", translations: { en: "If you practice words repeatedly, they become easier to memorize." }, keyExpression: "-기 쉽다", relatedWords: ["반복하다", "연습", "암기"], audioUrl: null },
  { id: "L3-S7-S06", korean: "예습하고 나서 수업을 들으면 이해가 더 잘 돼요.", translations: { en: "If you preview and then attend class, you understand better." }, keyExpression: "-고 나서", relatedWords: ["예습", "이해"], audioUrl: null },
  { id: "L3-S7-S07", korean: "저는 힘들어도 포기하지 않고 계속 노력해요.", translations: { en: "Even when it's hard, I don't give up and keep making an effort." }, keyExpression: "포기하다", relatedWords: ["포기하다", "노력하다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L3-S7-G01",
    pattern: "-기 쉽다/어렵다",
    meanings: { en: "easy/hard to (do something)" },
    explanations: {
      en: "Attach -기 쉽다 or -기 어렵다 to a verb stem to say something is easy or hard to do.",
    },
    examples: [
      { korean: "이 단어는 외우기 어려워요.", translations: { en: "This word is hard to memorize." } },
      { korean: "이 문법은 이해하기 쉬워요.", translations: { en: "This grammar is easy to understand." } },
    ],
  },
  {
    id: "L3-S7-G02",
    pattern: "-는 동안",
    meanings: { en: "while (doing something)" },
    explanations: {
      en: "Attach -는 동안 to a verb stem to say something happens during the time another action is going on — extending the noun pattern 동안 (STEP 10, TOPIK 2) to full verb clauses.",
    },
    examples: [
      { korean: "시험을 보는 동안 휴대전화를 사용할 수 없어요.", translations: { en: "You can't use your phone while taking the exam." } },
      { korean: "복습하는 동안 필기한 것을 다시 봐요.", translations: { en: "While reviewing, I look over what I took notes on." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L3-S7-L01",
    audioText: "이 단어는 외우기 어려워서 저는 여러 번 반복해서 연습해요.",
    audioUrl: null,
    question: "이 사람은 단어를 외우기 위해 무엇을 합니까?",
    options: ["포기해요", "선생님께 물어봐요", "책을 사요", "여러 번 반복해서 연습해요"],
    correctAnswer: 3,
    translations: { en: { question: "What do they do to memorize words?", explanation: 'The sentence says "practice repeatedly," so the correct answer is 여러 번 반복해서 연습해요.' } },
  },
  {
    id: "L3-S7-L02",
    audioText: "시험을 보는 동안 휴대전화를 사용할 수 없어요. 그래서 미리 꺼 놓으세요.",
    audioUrl: null,
    question: "시험을 보는 동안 무엇을 할 수 없습니까?",
    options: ["질문하기", "필기하기", "휴대전화 사용하기", "물 마시기"],
    correctAnswer: 2,
    translations: { en: { question: "What can't be done during the exam?", explanation: "The sentence says phones can't be used, so the correct answer is 휴대전화 사용하기." } },
  },
  {
    id: "L3-S7-L03",
    audioText: "저는 예습을 하고 나서 수업을 들으니까 이해가 훨씬 쉬워졌어요.",
    audioUrl: null,
    question: "왜 이해가 쉬워졌습니까?",
    options: ["예습을 하고 나서 수업을 들어서", "발표를 많이 해서", "과제를 줄여서", "친구와 공부해서"],
    correctAnswer: 0,
    translations: { en: { question: "Why did understanding become easier?", explanation: 'The sentence says "because I previewed before class," so the correct answer is 예습을 하고 나서 수업을 들어서.' } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L3-S7-R01",
    passage:
      "저는 한국어 단어를 외우는 게 어려웠어요.\n그래서 매일 조금씩 반복해서 연습했어요.\n한 달 후에 실력이 많이 늘었어요.\n꾸준한 연습이 정말 효과가 있었어요.",
    question: "이 사람의 실력이 는 이유는 무엇입니까?",
    options: ["책을 많이 사서", "학원에 다녀서", "친구에게 배워서", "매일 반복해서 연습해서"],
    correctAnswer: 3,
    translations: { en: { question: "Why did this person's skill improve?", explanation: "The passage says they practiced repeatedly every day, so the correct answer is 매일 반복해서 연습해서." } },
  },
  {
    id: "L3-S7-R02",
    passage:
      "효과적으로 공부하려면 세 가지가 중요해요.\n첫째, 수업 전에 예습하는 것이 좋아요.\n둘째, 수업 시간에 필기를 잘 해야 해요.\n셋째, 수업 후에 복습하는 것을 잊지 마세요.",
    question: "이 글에서 소개하는 것은 무엇입니까?",
    options: ["선생님 소개", "시험 일정", "학교 위치", "효과적인 공부 방법"],
    correctAnswer: 3,
    translations: { en: { question: "What does this passage introduce?", explanation: "The passage introduces effective study methods, so the correct answer is 효과적인 공부 방법." } },
  },
  {
    id: "L3-S7-R03",
    passage:
      "저는 발표 준비가 어려워서 포기하고 싶었어요.\n하지만 선생님의 설명을 듣고 나서 방법을 이해했어요.\n같은 내용을 여러 번 연습하니까 자신감이 생겼어요.\n결국 발표는 성공적으로 끝났어요.",
    question: "이 사람은 발표 준비 중에 어떤 마음이었습니까?",
    options: ["포기하고 싶었어요", "재미있었어요", "쉬웠어요", "관심이 없었어요"],
    correctAnswer: 0,
    translations: { en: { question: "How did this person feel while preparing the presentation?", explanation: "The passage says they wanted to give up, so the correct answer is 포기하고 싶었어요." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L3-S7-WR01",
    type: "sentence-completion",
    prompt: { en: "Complete the sentence: 한국어 단어는 ______기 어려워요." },
    sampleAnswer: { en: "한국어 단어는 외우기 어려워요." },
    explanation: { en: "-기 어렵다 attaches to the verb stem: 외우기 어려워요." },
  },
  {
    id: "L3-S7-WR02",
    type: "short-response",
    prompt: {
      en: "Write 3 sentences about a study method that works well for you. Include: what you study, how you study, and why it's good.",
    },
    keywords: ["방법", "그래서", "효과"],
    sampleAnswer: {
      en: "저는 단어를 외울 때 카드를 만들어요. 매일 조금씩 반복해서 연습해요. 그래서 오래 기억할 수 있어서 효과가 좋아요.",
    },
    explanation: { en: "Structure the answer as: what you study → how you study → why it's effective." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L3-S7-P01", type: "vocabulary", question: '"암기"의 뜻은 무엇입니까?', options: ["Explanation", "Understanding", "Concentration", "Memorization"], correctAnswer: 3, explanation: { en: "암기 means memorization." } },
  { id: "L3-S7-P02", type: "vocabulary", question: '"포기하다"의 뜻은 무엇입니까?', options: ["To repeat", "To give up", "To master", "To submit"], correctAnswer: 1, explanation: { en: "포기하다 means to give up." } },
  { id: "L3-S7-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n이 단어는 외우______.", options: ["기 때문이에요", "고 나서 해요", "는 동안이에요", "기 어려워요"], correctAnswer: 3, explanation: { en: "-기 어렵다 means \"hard to do\": 외우기 어려워요." } },
  { id: "L3-S7-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n시험을 보는 ______ 휴대전화를 쓸 수 없어요.", options: ["보다", "후에", "때문에", "동안"], correctAnswer: 3, explanation: { en: "-는 동안 means \"while\": 보는 동안." } },
  { id: "L3-S7-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n이 문법은 정말 ______.", options: ["이해하기 쉬워요", "암기예요", "성적이에요", "제출해요"], correctAnswer: 0, explanation: { en: "이해하기 쉬워요 (\"easy to understand\") fits describing grammar." } },
  { id: "L3-S7-P06", type: "vocabulary", question: "수업 전에 미리 공부하는 것을 무엇이라고 합니까?", options: ["복습", "예습", "암기", "필기"], correctAnswer: 1, explanation: { en: "예습 means preview (studying ahead)." } },
  { id: "L3-S7-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n힘들어도 ______ 계속 노력해요.", options: ["포기하지 않고", "포기하고 나서", "포기하기 위해서", "포기하는 동안"], correctAnswer: 0, explanation: { en: "포기하지 않고 means \"without giving up.\"" } },
  { id: "L3-S7-P08", type: "listening", audioText: "예습을 하고 나서 수업을 들으니까 이해가 쉬워졌어요.", question: "왜 이해가 쉬워졌습니까?", options: ["예습을 하고 나서 수업을 들어서", "발표를 많이 해서", "친구와 공부해서", "과제가 없어서"], correctAnswer: 0, explanation: { en: 'The sentence says previewing before class helped, so the answer is 예습을 하고 나서 수업을 들어서.' } },
  { id: "L3-S7-P09", type: "reading", passage: "매일 반복해서 연습해서 한국어 실력이 많이 늘었어요.", question: "실력이 는 이유는 무엇입니까?", options: ["매일 반복해서 연습해서", "학원에 다녀서", "책을 많이 사서", "시험을 많이 봐서"], correctAnswer: 0, explanation: { en: 'The passage says they practiced repeatedly every day, so the answer is 매일 반복해서 연습해서.' } },
  { id: "L3-S7-P10", type: "reading", passage: "예습, 필기, 복습 세 가지가 효과적인 공부 방법이에요.", question: "이 글에서 소개하는 것은 무엇입니까?", options: ["효과적인 공부 방법", "학교 시설", "시험 날짜", "선생님 소개"], correctAnswer: 0, explanation: { en: 'The passage introduces effective study methods, so the answer is 효과적인 공부 방법.' } },
];

export const STEP_3_7: StepContent = {
  level: 3,
  step: 7,
  title: "학교와 학습 (School and Study)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
