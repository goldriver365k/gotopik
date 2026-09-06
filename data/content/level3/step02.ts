// TOPIK 3 STEP 2 — Plans and Goals (계획과 목표).
// Independent of TOPIK1/TOPIK2/TOPIK3 STEP1's data files.
// 계획 already exists as "new" (TOPIK2 STEP6) — recorded here with status
// "review", not re-created as new.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L3-S2-W01", korean: "목표", partOfSpeech: "noun", translations: { en: "goal" }, example: "저는 새로운 목표가 있어요.", exampleTranslations: { en: "I have a new goal." }, audioUrl: null, status: "new" },
  { id: "L3-S2-W02", korean: "계획", partOfSpeech: "noun", translations: { en: "plan" }, example: "이번 주말 계획이 있어요?", exampleTranslations: { en: "Do you have a plan for this weekend?" }, audioUrl: null, status: "review" },
  { id: "L3-S2-W03", korean: "미래", partOfSpeech: "noun", translations: { en: "future" }, example: "미래를 위해 준비해요.", exampleTranslations: { en: "I'm preparing for the future." }, audioUrl: null, status: "new" },
  { id: "L3-S2-W04", korean: "준비", partOfSpeech: "noun", translations: { en: "preparation" }, example: "시험 준비가 끝났어요.", exampleTranslations: { en: "The exam preparation is done." }, audioUrl: null, status: "new" },
  { id: "L3-S2-W05", korean: "결정하다", partOfSpeech: "verb", translations: { en: "to decide" }, example: "저는 유학을 결정했어요.", exampleTranslations: { en: "I decided to study abroad." }, audioUrl: null, status: "new" },
  { id: "L3-S2-W06", korean: "노력하다", partOfSpeech: "verb", translations: { en: "to make an effort" }, example: "목표를 위해 노력해요.", exampleTranslations: { en: "I make an effort for my goal." }, audioUrl: null, status: "new" },
  { id: "L3-S2-W07", korean: "계속하다", partOfSpeech: "verb", translations: { en: "to continue (doing something)" }, example: "저는 운동을 계속할 거예요.", exampleTranslations: { en: "I will continue exercising." }, audioUrl: null, status: "new" },
  { id: "L3-S2-W08", korean: "이루다", partOfSpeech: "verb", translations: { en: "to achieve" }, example: "꿈을 이루고 싶어요.", exampleTranslations: { en: "I want to achieve my dream." }, audioUrl: null, status: "new" },
  { id: "L3-S2-W09", korean: "세우다", partOfSpeech: "verb", translations: { en: "to set (a plan/goal)" }, example: "새 계획을 세웠어요.", exampleTranslations: { en: "I set a new plan." }, audioUrl: null, status: "new" },
  { id: "L3-S2-W10", korean: "계획하다", partOfSpeech: "verb", translations: { en: "to plan" }, example: "여행을 계획하고 있어요.", exampleTranslations: { en: "I'm planning a trip." }, audioUrl: null, status: "new" },
  { id: "L3-S2-W11", korean: "연습하다", partOfSpeech: "verb", translations: { en: "to practice" }, example: "매일 한국어를 연습해요.", exampleTranslations: { en: "I practice Korean every day." }, audioUrl: null, status: "new" },
  { id: "L3-S2-W12", korean: "선택하다", partOfSpeech: "verb", translations: { en: "to choose" }, example: "저는 이 방법을 선택했어요.", exampleTranslations: { en: "I chose this method." }, audioUrl: null, status: "new" },
  { id: "L3-S2-W13", korean: "도전하다", partOfSpeech: "verb", translations: { en: "to try / to challenge oneself" }, example: "새로운 일에 도전해요.", exampleTranslations: { en: "I'm taking on something new." }, audioUrl: null, status: "new" },
  { id: "L3-S2-W14", korean: "예정", partOfSpeech: "noun", translations: { en: "being scheduled to" }, example: "다음 주에 떠날 예정이에요.", exampleTranslations: { en: "I'm scheduled to leave next week." }, audioUrl: null, status: "new" },
  { id: "L3-S2-W15", korean: "올해", partOfSpeech: "noun", translations: { en: "this year" }, example: "올해 목표를 세웠어요.", exampleTranslations: { en: "I set a goal for this year." }, audioUrl: null, status: "new" },
  { id: "L3-S2-W16", korean: "다음", partOfSpeech: "noun", translations: { en: "next" }, example: "다음 달에 시험이 있어요.", exampleTranslations: { en: "There's an exam next month." }, audioUrl: null, status: "new" },
  { id: "L3-S2-W17", korean: "앞으로", partOfSpeech: "noun", translations: { en: "from now on" }, example: "앞으로 더 열심히 할 거예요.", exampleTranslations: { en: "I will try harder from now on." }, audioUrl: null, status: "new" },
  { id: "L3-S2-W18", korean: "매년", partOfSpeech: "noun", translations: { en: "every year" }, example: "저는 매년 새 목표를 세워요.", exampleTranslations: { en: "I set a new goal every year." }, audioUrl: null, status: "new" },
  { id: "L3-S2-W19", korean: "꾸준히", partOfSpeech: "noun", translations: { en: "steadily / consistently" }, example: "꾸준히 연습하면 실력이 늘어요.", exampleTranslations: { en: "If you practice steadily, your skills improve." }, audioUrl: null, status: "new" },
];

const SENTENCES: Sentence[] = [
  { id: "L3-S2-S01", korean: "저는 올해 한국어 시험을 보려고 해요.", translations: { en: "I intend to take the Korean exam this year." }, keyExpression: "-(으)려고 하다", relatedWords: ["올해", "시험"], audioUrl: null },
  { id: "L3-S2-S02", korean: "저는 다음 달에 여행을 가려고 해요.", translations: { en: "I intend to go on a trip next month." }, keyExpression: "-(으)려고 하다", relatedWords: ["다음", "여행"], audioUrl: null },
  { id: "L3-S2-S03", korean: "시험에 합격하기 위해서 매일 연습해요.", translations: { en: "I practice every day in order to pass the exam." }, keyExpression: "-기 위해서", relatedWords: ["매일", "연습하다"], audioUrl: null },
  { id: "L3-S2-S04", korean: "목표를 이루기 위해서 계속 노력해요.", translations: { en: "I keep making an effort in order to achieve my goal." }, keyExpression: "-기 위해서", relatedWords: ["목표", "이루다", "계속하다", "노력하다"], audioUrl: null },
  { id: "L3-S2-S05", korean: "저는 새로운 계획을 세웠어요.", translations: { en: "I set a new plan." }, keyExpression: "세우다", relatedWords: ["계획", "세우다"], audioUrl: null },
  { id: "L3-S2-S06", korean: "앞으로 더 좋은 습관을 만들고 싶어요.", translations: { en: "I want to build better habits from now on." }, keyExpression: "앞으로", relatedWords: ["앞으로", "습관"], audioUrl: null },
  { id: "L3-S2-S07", korean: "저는 이 일을 끝까지 계속하려고 해요.", translations: { en: "I intend to keep doing this until the end." }, keyExpression: "-(으)려고 하다", relatedWords: ["계속하다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L3-S2-G01",
    pattern: "-(으)려고 하다",
    meanings: { en: "to intend to / plan to" },
    explanations: {
      en: "Attach -(으)려고 하다 to a verb stem to say you intend to do something.",
    },
    examples: [
      { korean: "저는 올해 한국어 시험을 보려고 해요.", translations: { en: "I intend to take the Korean exam this year." } },
      { korean: "저는 다음 달에 여행을 가려고 해요.", translations: { en: "I intend to go on a trip next month." } },
    ],
  },
  {
    id: "L3-S2-G02",
    pattern: "-기 위해서",
    meanings: { en: "in order to" },
    explanations: {
      en: "Attach -기 위해서 to a verb stem to show the purpose behind an action.",
    },
    examples: [
      { korean: "시험에 합격하기 위해서 매일 연습해요.", translations: { en: "I practice every day in order to pass the exam." } },
      { korean: "목표를 이루기 위해서 계속 노력해요.", translations: { en: "I keep making an effort in order to achieve my goal." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L3-S2-L01",
    audioText: "저는 올해 한국어 시험을 보려고 해요.",
    audioUrl: null,
    question: "이 사람은 무엇을 하려고 합니까?",
    options: ["회사를 그만두려고 해요", "여행을 가려고 해요", "한국어 시험을 보려고 해요", "이사하려고 해요"],
    correctAnswer: 2,
    translations: { en: { question: "What does this person intend to do?", explanation: 'The sentence says "intend to take the Korean exam," so the correct answer is 한국어 시험을 보려고 해요.' } },
  },
  {
    id: "L3-S2-L02",
    audioText: "목표를 이루기 위해서 매일 연습하고 있어요.",
    audioUrl: null,
    question: "왜 매일 연습합니까?",
    options: ["목표를 이루기 위해서", "시간이 많아서", "친구가 있어서", "재미있어서"],
    correctAnswer: 0,
    translations: { en: { question: "Why do they practice every day?", explanation: 'The sentence says "in order to achieve their goal," so the correct answer is 목표를 이루기 위해서.' } },
  },
  {
    id: "L3-S2-L03",
    audioText: "저는 다음 달에 계획을 세우고 새로운 것에 도전하려고 해요.",
    audioUrl: null,
    question: "다음 달에 무엇을 하려고 합니까?",
    options: ["집을 옮기려고 해요", "새로운 것에 도전하려고 해요", "일을 그만두려고 해요", "여행지를 결정하려고 해요"],
    correctAnswer: 1,
    translations: { en: { question: "What do they intend to do next month?", explanation: 'The sentence says "try something new," so the correct answer is 새로운 것에 도전하려고 해요.' } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L3-S2-R01",
    passage:
      "저는 매년 새해에 목표를 세워요.\n올해 목표는 한국어 시험에 합격하는 거예요.\n목표를 이루기 위해서 매일 연습할 거예요.",
    question: "올해 목표는 무엇입니까?",
    options: ["취업하기", "여행 가기", "한국어 시험 합격", "이사하기"],
    correctAnswer: 2,
    translations: { en: { question: "What is this year's goal?", explanation: "The passage says the goal is to pass the Korean exam, so the correct answer is 한국어 시험 합격." } },
  },
  {
    id: "L3-S2-R02",
    passage:
      "다음 달에 중요한 시험이 있어요.\n시험 준비를 위해서 계획을 세웠어요.\n매일 두 시간씩 연습하기로 결정했어요.",
    question: "이 사람은 무엇을 하기로 결정했습니까?",
    options: ["친구를 만나기", "시험을 미루기", "여행 가기", "매일 두 시간씩 연습하기"],
    correctAnswer: 3,
    translations: { en: { question: "What did this person decide to do?", explanation: "The passage says they decided to practice two hours every day, so the correct answer is 매일 두 시간씩 연습하기." } },
  },
  {
    id: "L3-S2-R03",
    passage:
      "저는 작년에 새로운 일에 도전하기로 결정했어요.\n처음에는 힘들었지만 계속 노력했어요.\n앞으로도 계속 노력해서 제 목표를 이루고 싶어요.",
    question: "이 사람은 앞으로 무엇을 하고 싶습니까?",
    options: ["쉬고 싶어요", "계속 노력해서 목표를 이루고 싶어요", "새 계획을 취소하고 싶어요", "도전을 그만두고 싶어요"],
    correctAnswer: 1,
    translations: { en: { question: "What does this person want to do going forward?", explanation: "The passage says they want to keep making an effort to achieve their goal, so the correct answer is 계속 노력해서 목표를 이루고 싶어요." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L3-S2-WR01",
    type: "keyword-writing",
    prompt: { en: "Write one sentence using all of the following words." },
    keywords: ["목표", "공부하다", "위해서"],
    sampleAnswer: { en: "목표를 이루기 위해서 열심히 공부해요." },
    explanation: { en: "-기 위해서 attaches to a verb stem to show purpose: 이루기 위해서, 공부하기 위해서." },
  },
  {
    id: "L3-S2-WR02",
    type: "short-response",
    prompt: { en: "Write 2-3 sentences about something you want to do this month." },
    keywords: ["이번 달", "계획", "목표"],
    sampleAnswer: { en: "이번 달에 새로운 계획을 세웠어요. 매일 한국어를 연습하려고 해요. 이 목표를 꼭 이루고 싶어요." },
    explanation: { en: "Try combining -(으)려고 하다 (intend to) with -고 싶다 (want to) to describe both the plan and the wish behind it." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L3-S2-P01", type: "vocabulary", question: '"목표"의 뜻은 무엇입니까?', options: ["Goal", "Plan", "Future", "Preparation"], correctAnswer: 0, explanation: { en: "목표 means goal." } },
  { id: "L3-S2-P02", type: "vocabulary", question: '"도전하다"의 뜻은 무엇입니까?', options: ["To try/challenge oneself", "To decide", "To continue", "To achieve"], correctAnswer: 0, explanation: { en: "도전하다 means to try/challenge oneself." } },
  { id: "L3-S2-P03", type: "vocabulary", question: "꿈이나 목표를 실제로 해냈을 때 쓰는 말은?", options: ["세우다", "선택하다", "결정하다", "이루다"], correctAnswer: 3, explanation: { en: "이루다 means to achieve." } },
  { id: "L3-S2-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n저는 올해 시험을 ______.", options: ["보려고 해요", "보고 있어요", "본 적이 있어요", "보지 마세요"], correctAnswer: 0, explanation: { en: "-(으)려고 하다 shows intention: 보려고 해요." } },
  { id: "L3-S2-P05", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n시험에 합격하______ 매일 연습해요.", options: ["는 동안", "고 나서", "기 위해서", "기 때문에"], correctAnswer: 2, explanation: { en: "-기 위해서 shows purpose: 합격하기 위해서." } },
  { id: "L3-S2-P06", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n목표를 ______ 계속 노력해요.", options: ["이루는 동안", "이루고 나서", "이루기 위해서", "이루기 때문에"], correctAnswer: 2, explanation: { en: "-기 위해서 shows purpose: 이루기 위해서." } },
  { id: "L3-S2-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n저는 새로운 계획을 ______.", options: ["느꼈어요", "잊었어요", "실패했어요", "세웠어요"], correctAnswer: 3, explanation: { en: "계획을 세우다 means to set a plan." } },
  { id: "L3-S2-P08", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n______ 더 열심히 할 거예요.", options: ["마지막으로", "지난주", "그때", "앞으로"], correctAnswer: 3, explanation: { en: "앞으로 means \"from now on.\"" } },
  { id: "L3-S2-P09", type: "listening", audioText: "저는 다음 달에 여행을 가려고 해요.", question: "이 사람은 무엇을 하려고 합니까?", options: ["시험을 보려고 해요", "여행을 가려고 해요", "이사하려고 해요", "일을 그만두려고 해요"], correctAnswer: 1, explanation: { en: 'The sentence says "intend to travel," so the answer is 여행을 가려고 해요.' } },
  { id: "L3-S2-P10", type: "reading", passage: "올해 목표는 한국어 시험에 합격하는 거예요.", question: "올해 목표는 무엇입니까?", options: ["여행 가기", "한국어 시험 합격", "취업하기", "이사하기"], correctAnswer: 1, explanation: { en: 'The passage says the goal is passing the exam, so the answer is 한국어 시험 합격.' } },
  { id: "L3-S2-P11", type: "reading", passage: "매일 두 시간씩 연습하기로 결정했어요.", question: "이 사람은 무엇을 하기로 결정했습니까?", options: ["여행 가기", "쉬기", "매일 두 시간씩 연습하기", "시험 미루기"], correctAnswer: 2, explanation: { en: 'The passage says they decided to practice two hours daily, so the answer is 매일 두 시간씩 연습하기.' } },
];

export const STEP_3_2: StepContent = {
  level: 3,
  step: 2,
  title: "계획과 목표 (Plans and Goals)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
