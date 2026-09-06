// TOPIK 3 STEP 8 — Work (직장과 업무).
// Independent of TOPIK1/TOPIK2/TOPIK3 STEP1-7's data files.
// 회의, 일정, 자료, 마감, 동료, 계획, 확인하다, 작성하다, 결정하다
// already exist as "new" — recorded here with status "review".
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L3-S8-W01", korean: "업무", partOfSpeech: "noun", translations: { en: "work / duties" }, example: "오늘 업무가 많아요.", exampleTranslations: { en: "I have a lot of work today." }, audioUrl: null, status: "new" },
  { id: "L3-S8-W02", korean: "담당", partOfSpeech: "noun", translations: { en: "being in charge (of)" }, example: "이 업무는 제 담당이에요.", exampleTranslations: { en: "This task is my responsibility." }, audioUrl: null, status: "new" },
  { id: "L3-S8-W03", korean: "보고", partOfSpeech: "noun", translations: { en: "report (the act of reporting)" }, example: "먼저 보고를 해야 해요.", exampleTranslations: { en: "I have to report first." }, audioUrl: null, status: "new" },
  { id: "L3-S8-W04", korean: "보고서", partOfSpeech: "noun", translations: { en: "report (document)" }, example: "보고서를 작성해요.", exampleTranslations: { en: "I write a report." }, audioUrl: null, status: "new" },
  { id: "L3-S8-W05", korean: "출장", partOfSpeech: "noun", translations: { en: "business trip" }, example: "다음 주에 출장을 가요.", exampleTranslations: { en: "I'm going on a business trip next week." }, audioUrl: null, status: "new" },
  { id: "L3-S8-W06", korean: "팀", partOfSpeech: "noun", translations: { en: "team" }, example: "저는 새 팀으로 옮겼어요.", exampleTranslations: { en: "I moved to a new team." }, audioUrl: null, status: "new" },
  { id: "L3-S8-W07", korean: "진행하다", partOfSpeech: "verb", translations: { en: "to proceed / carry out" }, example: "프로젝트를 진행해요.", exampleTranslations: { en: "I'm carrying out the project." }, audioUrl: null, status: "new" },
  { id: "L3-S8-W08", korean: "전달하다", partOfSpeech: "verb", translations: { en: "to convey / pass along" }, example: "팀장님께 내용을 전달했어요.", exampleTranslations: { en: "I conveyed the content to the team leader." }, audioUrl: null, status: "new" },
  { id: "L3-S8-W09", korean: "맡다", partOfSpeech: "verb", translations: { en: "to take charge of / be responsible for" }, example: "제가 이 일을 맡았어요.", exampleTranslations: { en: "I took charge of this task." }, audioUrl: null, status: "new" },
  { id: "L3-S8-W10", korean: "완료하다", partOfSpeech: "verb", translations: { en: "to complete" }, example: "업무를 완료했어요.", exampleTranslations: { en: "I completed the task." }, audioUrl: null, status: "new" },
  { id: "L3-S8-W11", korean: "상사", partOfSpeech: "noun", translations: { en: "boss / superior" }, example: "상사에게 보고했어요.", exampleTranslations: { en: "I reported to my boss." }, audioUrl: null, status: "new" },
  { id: "L3-S8-W12", korean: "부서", partOfSpeech: "noun", translations: { en: "department" }, example: "다른 부서와 협력해요.", exampleTranslations: { en: "I cooperate with another department." }, audioUrl: null, status: "new" },
  { id: "L3-S8-W13", korean: "협력하다", partOfSpeech: "verb", translations: { en: "to cooperate" }, example: "동료와 협력해서 일해요.", exampleTranslations: { en: "I work cooperating with my coworker." }, audioUrl: null, status: "new" },
  { id: "L3-S8-W14", korean: "책임", partOfSpeech: "noun", translations: { en: "responsibility" }, example: "이 일은 제 책임이에요.", exampleTranslations: { en: "This task is my responsibility." }, audioUrl: null, status: "new" },
  { id: "L3-S8-W15", korean: "성과", partOfSpeech: "noun", translations: { en: "achievement / result" }, example: "좋은 성과를 냈어요.", exampleTranslations: { en: "I produced good results." }, audioUrl: null, status: "new" },
  { id: "L3-S8-W16", korean: "야근하다", partOfSpeech: "verb", translations: { en: "to work overtime" }, example: "어제 야근했어요.", exampleTranslations: { en: "I worked overtime yesterday." }, audioUrl: null, status: "new" },
  { id: "L3-S8-W17", korean: "휴가", partOfSpeech: "noun", translations: { en: "vacation / leave" }, example: "다음 달에 휴가를 가요.", exampleTranslations: { en: "I'm taking a vacation next month." }, audioUrl: null, status: "new" },
  { id: "L3-S8-W18", korean: "연장하다", partOfSpeech: "verb", translations: { en: "to extend" }, example: "마감을 연장했어요.", exampleTranslations: { en: "I extended the deadline." }, audioUrl: null, status: "new" },
  { id: "L3-S8-W19", korean: "회의", partOfSpeech: "noun", translations: { en: "meeting" }, example: "내일 회의를 하기로 했어요.", exampleTranslations: { en: "We decided to have a meeting tomorrow." }, audioUrl: null, status: "review" },
  { id: "L3-S8-W20", korean: "일정", partOfSpeech: "noun", translations: { en: "schedule" }, example: "일정을 확인해야 돼요.", exampleTranslations: { en: "I have to check the schedule." }, audioUrl: null, status: "review" },
  { id: "L3-S8-W21", korean: "자료", partOfSpeech: "noun", translations: { en: "material / data" }, example: "회의 자료를 준비했어요.", exampleTranslations: { en: "I prepared the meeting materials." }, audioUrl: null, status: "review" },
  { id: "L3-S8-W22", korean: "마감", partOfSpeech: "noun", translations: { en: "deadline" }, example: "보고서 마감이 내일이에요.", exampleTranslations: { en: "The report deadline is tomorrow." }, audioUrl: null, status: "review" },
  { id: "L3-S8-W23", korean: "동료", partOfSpeech: "noun", translations: { en: "coworker" }, example: "동료와 함께 일해요.", exampleTranslations: { en: "I work together with my coworker." }, audioUrl: null, status: "review" },
  { id: "L3-S8-W24", korean: "계획", partOfSpeech: "noun", translations: { en: "plan" }, example: "업무 계획을 세웠어요.", exampleTranslations: { en: "I set a work plan." }, audioUrl: null, status: "review" },
  { id: "L3-S8-W25", korean: "확인하다", partOfSpeech: "verb", translations: { en: "to check / confirm" }, example: "일정을 확인해야 돼요.", exampleTranslations: { en: "I have to check the schedule." }, audioUrl: null, status: "review" },
  { id: "L3-S8-W26", korean: "작성하다", partOfSpeech: "verb", translations: { en: "to write up / draft" }, example: "보고서를 작성해야 돼요.", exampleTranslations: { en: "I have to write up a report." }, audioUrl: null, status: "review" },
  { id: "L3-S8-W27", korean: "결정하다", partOfSpeech: "verb", translations: { en: "to decide" }, example: "일정을 다시 결정했어요.", exampleTranslations: { en: "I decided on the schedule again." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L3-S8-S01", korean: "내일 회의를 하기로 했어요.", translations: { en: "We decided to have a meeting tomorrow." }, keyExpression: "-기로 하다", relatedWords: ["회의"], audioUrl: null },
  { id: "L3-S8-S02", korean: "오늘 보고서를 작성해야 돼요.", translations: { en: "I have to write up a report today." }, keyExpression: "-아/어야 되다", relatedWords: ["보고서", "작성하다"], audioUrl: null },
  { id: "L3-S8-S03", korean: "이번 프로젝트는 제가 맡기로 했어요.", translations: { en: "I decided to take charge of this project." }, keyExpression: "-기로 하다", relatedWords: ["맡다"], audioUrl: null },
  { id: "L3-S8-S04", korean: "마감이 얼마 안 남아서 오늘까지 완료해야 돼요.", translations: { en: "The deadline is close, so I have to finish by today." }, keyExpression: "-아/어야 되다", relatedWords: ["마감", "완료하다"], audioUrl: null },
  { id: "L3-S8-S05", korean: "다른 부서와 협력해서 이 업무를 진행해요.", translations: { en: "I carry out this task by cooperating with another department." }, keyExpression: "협력하다", relatedWords: ["부서", "협력하다", "업무", "진행하다"], audioUrl: null },
  { id: "L3-S8-S06", korean: "상사에게 결과를 전달하기로 했어요.", translations: { en: "I decided to convey the results to my boss." }, keyExpression: "-기로 하다", relatedWords: ["상사", "전달하다"], audioUrl: null },
  { id: "L3-S8-S07", korean: "일이 많아서 어제 야근했어요.", translations: { en: "I had a lot of work, so I worked overtime yesterday." }, keyExpression: "-아서/어서", relatedWords: ["야근하다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L3-S8-G01",
    pattern: "-기로 하다",
    meanings: { en: "to decide to / agree to (do something)" },
    explanations: {
      en: "Attach -기로 하다 to a verb stem to say you've decided or agreed to do something.",
    },
    examples: [
      { korean: "내일 회의를 하기로 했어요.", translations: { en: "We decided to have a meeting tomorrow." } },
      { korean: "이번 프로젝트는 제가 맡기로 했어요.", translations: { en: "I decided to take charge of this project." } },
    ],
  },
  {
    id: "L3-S8-G02",
    pattern: "-아/어야 되다 (복습 변형)",
    meanings: { en: "must / have to (a spoken variant of -아/어야 하다)" },
    explanations: {
      en: "-아/어야 되다 means the same thing as -아/어야 하다 (already learned) — 되다 is simply the more common choice in everyday speech.",
    },
    examples: [
      { korean: "오늘 보고서를 작성해야 돼요.", translations: { en: "I have to write up a report today." } },
      { korean: "마감이 얼마 안 남아서 오늘까지 완료해야 돼요.", translations: { en: "The deadline is close, so I have to finish by today." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L3-S8-L01",
    audioText: "가: 회의 시간이 바뀌었어요? 나: 네, 두 시에서 세 시로 변경하기로 했어요.",
    audioUrl: null,
    question: "회의 시간이 어떻게 바뀌었습니까?",
    options: ["두 시에서 세 시로", "세 시에서 네 시로", "한 시에서 두 시로", "취소됐어요"],
    correctAnswer: 0,
    translations: { en: { question: "How was the meeting time changed?", explanation: 'The reply says "changed from two to three," so the correct answer is 두 시에서 세 시로.' } },
  },
  {
    id: "L3-S8-L02",
    audioText: "오늘까지 보고서를 제출해야 돼요. 그래서 지금 열심히 작성하고 있어요.",
    audioUrl: null,
    question: "이 사람은 지금 무엇을 하고 있습니까?",
    options: ["보고서를 작성하고 있어요", "회의를 하고 있어요", "출장을 가고 있어요", "휴가를 가고 있어요"],
    correctAnswer: 0,
    translations: { en: { question: "What are they doing right now?", explanation: 'The sentence says "writing the report," so the correct answer is 보고서를 작성하고 있어요.' } },
  },
  {
    id: "L3-S8-L03",
    audioText: "이번 프로젝트는 다른 부서와 협력하기로 했어요. 그래서 다음 주에 같이 회의를 할 거예요.",
    audioUrl: null,
    question: "다음 주에 무엇을 할 겁니까?",
    options: ["다른 부서와 회의를 할 거예요", "혼자 일할 거예요", "출장을 갈 거예요", "휴가를 갈 거예요"],
    correctAnswer: 0,
    translations: { en: { question: "What will they do next week?", explanation: "The sentence says they'll have a meeting with another department, so the correct answer is 다른 부서와 회의를 할 거예요." } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L3-S8-R01",
    passage:
      "메모: 내일 오전 열 시에 팀 회의가 있습니다.\n회의 자료는 오늘까지 준비해 주세요.\n회의 장소는 삼 층 회의실로 변경됐습니다.",
    question: "회의 장소는 어디로 바뀌었습니까?",
    options: ["삼 층 회의실", "이 층 회의실", "사무실", "휴게실"],
    correctAnswer: 0,
    translations: { en: { question: "Where was the meeting moved to?", explanation: "The memo says the third floor meeting room, so the correct answer is 삼 층 회의실." } },
  },
  {
    id: "L3-S8-R02",
    passage:
      "저는 이번 프로젝트를 맡기로 했어요.\n마감이 얼마 안 남아서 동료와 협력해서 진행하고 있어요.\n각자 담당한 부분을 완료한 후에 자료를 모으기로 했어요.",
    question: "이 사람은 프로젝트를 어떻게 진행하고 있습니까?",
    options: ["동료와 협력해서", "혼자서", "다른 팀에게 맡겨서", "상사에게 부탁해서"],
    correctAnswer: 0,
    translations: { en: { question: "How are they carrying out the project?", explanation: "The passage says they cooperate with a coworker, so the correct answer is 동료와 협력해서." } },
  },
  {
    id: "L3-S8-R03",
    passage:
      "요즘 업무가 많아서 야근하는 날이 늘었어요.\n그래서 상사에게 마감을 연장해 달라고 요청했어요.\n다행히 마감이 일주일 연장돼서 조금 여유가 생겼어요.\n앞으로는 일정을 더 잘 관리하려고 해요.",
    question: "마감이 연장된 후 이 사람은 어떻게 됐습니까?",
    options: ["조금 여유가 생겼어요", "일이 더 많아졌어요", "휴가를 갔어요", "팀을 옮겼어요"],
    correctAnswer: 0,
    translations: { en: { question: "What happened after the deadline was extended?", explanation: "The passage says they got a bit of breathing room, so the correct answer is 조금 여유가 생겼어요." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L3-S8-WR01",
    type: "keyword-writing",
    prompt: { en: "Write one sentence using all of the following words." },
    keywords: ["내일", "회의", "하기로 하다"],
    sampleAnswer: { en: "내일 회의를 하기로 했어요." },
    explanation: { en: "-기로 하다 attaches to the verb stem to show a decision: 하기로 했어요." },
  },
  {
    id: "L3-S8-WR02",
    type: "short-response",
    prompt: { en: "Write 3 sentences about what you need to do today or tomorrow at work or school." },
    keywords: ["오늘", "내일", "해야 되다"],
    sampleAnswer: { en: "오늘 보고서를 작성해야 돼요. 그리고 오후에 팀 회의가 있어요. 회의 전에 자료를 준비하기로 했어요." },
    explanation: { en: "Combine -아/어야 되다 (must) with -기로 하다 (decided to) to list tasks naturally." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L3-S8-P01", type: "vocabulary", question: '"담당"의 뜻은 무엇입니까?', options: ["Being in charge (of)", "Deadline", "Report", "Team"], correctAnswer: 0, explanation: { en: "담당 means being in charge (of)." } },
  { id: "L3-S8-P02", type: "vocabulary", question: '"완료하다"의 뜻은 무엇입니까?', options: ["To start", "To complete", "To delay", "To cancel"], correctAnswer: 1, explanation: { en: "완료하다 means to complete." } },
  { id: "L3-S8-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n내일 회의를 ______.", options: ["하기로 했어요", "하는 동안이에요", "하기 쉬워요", "하지 마세요"], correctAnswer: 0, explanation: { en: "-기로 하다 shows a decision: 하기로 했어요." } },
  { id: "L3-S8-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n오늘 보고서를 ______.", options: ["작성해야 돼요", "작성하기로 해요", "작성하는 게 좋아요", "작성해 봤어요"], correctAnswer: 0, explanation: { en: "-아/어야 되다 means \"must\": 작성해야 돼요." } },
  { id: "L3-S8-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n이번 프로젝트는 제가 ______.", options: ["맡기로 했어요", "맡는 동안이에요", "맡기 쉬워요", "맡지 마세요"], correctAnswer: 0, explanation: { en: "맡기로 했어요 means \"decided to take charge of.\"" } },
  { id: "L3-S8-P06", type: "vocabulary", question: "회사에서 나보다 직급이 높은 사람을 무엇이라고 합니까?", options: ["동료", "상사", "팀", "부서"], correctAnswer: 1, explanation: { en: "상사 means boss/superior." } },
  { id: "L3-S8-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n마감을 일주일 ______.", options: ["연장했어요", "완료했어요", "전달했어요", "맡았어요"], correctAnswer: 0, explanation: { en: "연장했어요 means \"extended.\"" } },
  { id: "L3-S8-P08", type: "listening", audioText: "회의 시간을 두 시에서 세 시로 변경하기로 했어요.", question: "회의 시간이 어떻게 바뀌었습니까?", options: ["두 시에서 세 시로", "세 시에서 네 시로", "취소됐어요", "한 시로 당겨졌어요"], correctAnswer: 0, explanation: { en: 'The sentence says "changed from two to three," so the answer is 두 시에서 세 시로.' } },
  { id: "L3-S8-P09", type: "reading", passage: "동료와 협력해서 이번 프로젝트를 진행하고 있어요.", question: "이 사람은 프로젝트를 어떻게 진행하고 있습니까?", options: ["동료와 협력해서", "혼자서", "다른 팀에게 맡겨서", "상사가 대신해서"], correctAnswer: 0, explanation: { en: 'The passage says they cooperate with a coworker, so the answer is 동료와 협력해서.' } },
  { id: "L3-S8-P10", type: "reading", passage: "마감이 일주일 연장돼서 조금 여유가 생겼어요.", question: "마감이 연장된 후 어떻게 됐습니까?", options: ["조금 여유가 생겼어요", "더 바빠졌어요", "휴가를 갔어요", "일을 그만뒀어요"], correctAnswer: 0, explanation: { en: 'The passage says they got some breathing room, so the answer is 조금 여유가 생겼어요.' } },
];

export const STEP_3_8: StepContent = {
  level: 3,
  step: 8,
  title: "직장과 업무 (Work)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
