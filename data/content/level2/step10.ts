// TOPIK 2 STEP 10 — School and Work (학교와 직장).
// Real STEP content, independent of TOPIK1 and TOPIK2 STEP1-9's data files.
// 시작하다, 끝나다, 바쁘다 already exist as "new" — recorded here with
// status "review", not re-created as new.
// QA fix (Stage 21): -고 있다 was already introduced as core grammar in
// STEP 1 — relabeled here as "-고 있다 (복습)" instead of a second new
// introduction; 동안 remains this STEP's one genuinely new pattern.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L2-S10-W01", korean: "수업", partOfSpeech: "noun", translations: { en: "class / lesson" }, example: "수업이 곧 시작해요.", exampleTranslations: { en: "Class starts soon." }, audioUrl: null, status: "new" },
  { id: "L2-S10-W02", korean: "과제", partOfSpeech: "noun", translations: { en: "assignment" }, example: "과제가 많아요.", exampleTranslations: { en: "I have a lot of assignments." }, audioUrl: null, status: "new" },
  { id: "L2-S10-W03", korean: "회의", partOfSpeech: "noun", translations: { en: "meeting" }, example: "지금 회의를 해요.", exampleTranslations: { en: "We're having a meeting now." }, audioUrl: null, status: "new" },
  { id: "L2-S10-W04", korean: "출근하다", partOfSpeech: "verb", translations: { en: "to go to work" }, example: "저는 아침에 출근해요.", exampleTranslations: { en: "I go to work in the morning." }, audioUrl: null, status: "new" },
  { id: "L2-S10-W05", korean: "퇴근하다", partOfSpeech: "verb", translations: { en: "to leave work" }, example: "저는 저녁에 퇴근해요.", exampleTranslations: { en: "I leave work in the evening." }, audioUrl: null, status: "new" },
  { id: "L2-S10-W06", korean: "회사원", partOfSpeech: "noun", translations: { en: "office worker" }, example: "저는 회사원이에요.", exampleTranslations: { en: "I am an office worker." }, audioUrl: null, status: "new" },
  { id: "L2-S10-W07", korean: "직원", partOfSpeech: "noun", translations: { en: "employee / staff" }, example: "직원이 친절해요.", exampleTranslations: { en: "The staff is kind." }, audioUrl: null, status: "new" },
  { id: "L2-S10-W08", korean: "사무실", partOfSpeech: "noun", translations: { en: "office" }, example: "사무실에서 일해요.", exampleTranslations: { en: "I work in an office." }, audioUrl: null, status: "new" },
  { id: "L2-S10-W09", korean: "발표", partOfSpeech: "noun", translations: { en: "presentation" }, example: "발표를 준비해요.", exampleTranslations: { en: "I'm preparing a presentation." }, audioUrl: null, status: "new" },
  { id: "L2-S10-W10", korean: "자료", partOfSpeech: "noun", translations: { en: "material / data" }, example: "자료를 확인해요.", exampleTranslations: { en: "I check the materials." }, audioUrl: null, status: "new" },
  { id: "L2-S10-W11", korean: "제출하다", partOfSpeech: "verb", translations: { en: "to submit" }, example: "과제를 제출해요.", exampleTranslations: { en: "I submit the assignment." }, audioUrl: null, status: "new" },
  { id: "L2-S10-W12", korean: "일정", partOfSpeech: "noun", translations: { en: "schedule" }, example: "일정을 확인해요.", exampleTranslations: { en: "I check the schedule." }, audioUrl: null, status: "new" },
  { id: "L2-S10-W13", korean: "확인하다", partOfSpeech: "verb", translations: { en: "to check / confirm" }, example: "일정을 확인해요.", exampleTranslations: { en: "I check the schedule." }, audioUrl: null, status: "new" },
  { id: "L2-S10-W14", korean: "시작하다", partOfSpeech: "verb", translations: { en: "to start" }, example: "수업이 아홉 시에 시작해요.", exampleTranslations: { en: "Class starts at nine." }, audioUrl: null, status: "review" },
  { id: "L2-S10-W15", korean: "끝나다", partOfSpeech: "verb", translations: { en: "to end" }, example: "수업이 여섯 시에 끝나요.", exampleTranslations: { en: "Class ends at six." }, audioUrl: null, status: "review" },
  { id: "L2-S10-W16", korean: "바쁘다", partOfSpeech: "adjective", translations: { en: "busy" }, example: "요즘 회사 일이 바빠요.", exampleTranslations: { en: "Work is busy these days." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L2-S10-S01", korean: "지금 회의를 하고 있어요.", translations: { en: "I'm having a meeting right now." }, keyExpression: "-고 있다", relatedWords: ["회의"], audioUrl: null },
  { id: "L2-S10-S02", korean: "저는 회의 동안 자료를 확인해요.", translations: { en: "I check the materials during the meeting." }, keyExpression: "동안", relatedWords: ["회의", "자료", "확인하다"], audioUrl: null },
  { id: "L2-S10-S03", korean: "저는 아침에 출근해서 저녁에 퇴근해요.", translations: { en: "I go to work in the morning and leave work in the evening." }, keyExpression: "-아서/어서", relatedWords: ["출근하다", "퇴근하다"], audioUrl: null },
  { id: "L2-S10-S04", korean: "수업이 끝난 후에 과제를 해요.", translations: { en: "I do my assignment after class ends." }, keyExpression: "-(으)ㄴ 후에", relatedWords: ["수업", "끝나다", "과제"], audioUrl: null },
  { id: "L2-S10-S05", korean: "발표 자료를 준비하고 있어요.", translations: { en: "I'm preparing the presentation materials." }, keyExpression: "-고 있다", relatedWords: ["발표", "자료", "준비하다"], audioUrl: null },
  { id: "L2-S10-S06", korean: "저는 요즘 바빠서 늦게까지 사무실에 있어요.", translations: { en: "I'm busy these days, so I stay in the office until late." }, keyExpression: "-아서/어서", relatedWords: ["바쁘다", "사무실"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L2-S10-G01",
    pattern: "-고 있다 (복습)",
    meanings: { en: "to be doing (ongoing action, review)" },
    explanations: {
      en: "Keep using -고 있다 to describe an action in progress, now at the office.",
    },
    examples: [
      { korean: "지금 회의를 하고 있어요.", translations: { en: "I'm having a meeting right now." } },
      { korean: "발표 자료를 준비하고 있어요.", translations: { en: "I'm preparing the presentation materials." } },
    ],
  },
  {
    id: "L2-S10-G02",
    pattern: "동안",
    meanings: { en: "during / while" },
    explanations: {
      en: "동안 follows a noun or time period to show something happens over that span of time.",
    },
    examples: [
      { korean: "저는 회의 동안 자료를 확인해요.", translations: { en: "I check the materials during the meeting." } },
      { korean: "방학 동안 여행을 갔어요.", translations: { en: "I went traveling during vacation." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L2-S10-L01",
    audioText: "저는 지금 사무실에서 회의를 하고 있어요.",
    audioUrl: null,
    question: "지금 무엇을 하고 있습니까?",
    options: ["회의", "발표", "과제", "식사"],
    correctAnswer: 0,
    translations: { en: { question: "What are they doing right now?", explanation: 'The sentence says "having a meeting," so the correct answer is 회의.' } },
  },
  {
    id: "L2-S10-L02",
    audioText: "저는 아침 아홉 시에 출근해서 저녁 여섯 시에 퇴근해요.",
    audioUrl: null,
    question: "언제 퇴근합니까?",
    options: ["아침 아홉 시", "저녁 여섯 시", "점심 열두 시", "밤 열 시"],
    correctAnswer: 1,
    translations: { en: { question: "When do they leave work?", explanation: "The sentence says they leave work at six in the evening, so the correct answer is 저녁 여섯 시." } },
  },
  {
    id: "L2-S10-L03",
    audioText: "수업이 끝난 후에 과제를 제출해야 해요.",
    audioUrl: null,
    question: "언제 과제를 제출해야 합니까?",
    options: ["수업 전에", "수업 동안", "수업이 끝난 후에", "내일"],
    correctAnswer: 2,
    translations: { en: { question: "When should the assignment be submitted?", explanation: 'The sentence says "after class ends," so the correct answer is 수업이 끝난 후에.' } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L2-S10-R01",
    passage: "저는 회사원이에요.\n저는 아침에 출근해서 사무실에서 일해요.",
    question: "이 사람은 어디에서 일합니까?",
    options: ["학교", "식당", "사무실", "병원"],
    correctAnswer: 2,
    translations: { en: { question: "Where does this person work?", explanation: "The passage says they work in an office, so the correct answer is 사무실." } },
  },
  {
    id: "L2-S10-R02",
    passage: "오늘 회의 일정을 확인하세요.\n회의는 두 시입니다.",
    question: "회의는 몇 시입니까?",
    options: ["한 시", "두 시", "세 시", "네 시"],
    correctAnswer: 1,
    translations: { en: { question: "What time is the meeting?", explanation: "The passage says the meeting is at two o'clock, so the correct answer is 두 시." } },
  },
  {
    id: "L2-S10-R03",
    passage: "저는 내일 발표가 있어요.\n그래서 오늘 발표 자료를 준비하고 있어요.\n준비가 끝나면 직원들에게 자료를 보여 줄 거예요.",
    question: "이 사람은 오늘 무엇을 하고 있습니까?",
    options: ["퇴근", "과제 제출", "회의 참석", "발표 자료 준비"],
    correctAnswer: 3,
    translations: { en: { question: "What is this person doing today?", explanation: "The passage says they are preparing presentation materials, so the correct answer is 발표 자료 준비." } },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L2-S10-P01", type: "vocabulary", question: '"회의"의 뜻은 무엇입니까?', options: ["Class", "Schedule", "Assignment", "Meeting"], correctAnswer: 3, explanation: { en: "회의 means meeting." } },
  { id: "L2-S10-P02", type: "vocabulary", question: '"제출하다"의 뜻은 무엇입니까?', options: ["To start", "To confirm", "To submit", "To end"], correctAnswer: 2, explanation: { en: "제출하다 means to submit." } },
  { id: "L2-S10-P03", type: "vocabulary", question: "회사에서 일하는 사람은?", options: ["학생", "회사원", "선생님", "의사"], correctAnswer: 1, explanation: { en: "회사원 means office worker." } },
  { id: "L2-S10-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n지금 회의를 ______.", options: ["해요", "했어요", "하고 있어요", "할 거예요"], correctAnswer: 2, explanation: { en: "-고 있다 shows an ongoing action: 하고 있어요." } },
  { id: "L2-S10-P05", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n회의 ______ 자료를 확인해요.", options: ["보다", "후에", "때문에", "동안"], correctAnswer: 3, explanation: { en: "동안 means \"during\": 회의 동안." } },
  { id: "L2-S10-P06", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n수업이 ______ 과제를 해요.", options: ["끝나서", "끝난 후에", "끝나고 있어요", "끝날 거예요"], correctAnswer: 1, explanation: { en: "-(으)ㄴ 후에 means \"after\": 끝난 후에." } },
  { id: "L2-S10-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n저는 요즘 회사 일이 ______.", options: ["바빠요", "쉬워요", "느려요", "가까워요"], correctAnswer: 0, explanation: { en: "바빠요 means busy." } },
  { id: "L2-S10-P08", type: "listening", audioText: "저는 아침에 출근해서 저녁에 퇴근해요.", question: "이 사람은 언제 출근합니까?", options: ["저녁에", "아침에", "밤에", "점심에"], correctAnswer: 1, explanation: { en: 'The sentence says "in the morning," so the answer is 아침에.' } },
  { id: "L2-S10-P09", type: "reading", passage: "저는 사무실에서 발표 자료를 준비하고 있어요.", question: "이 사람은 지금 무엇을 하고 있습니까?", options: ["발표 자료 준비", "회의 참석", "과제 제출", "퇴근"], correctAnswer: 0, explanation: { en: 'The passage says "preparing presentation materials," so the answer is 발표 자료 준비.' } },
  { id: "L2-S10-P10", type: "reading", passage: "직원들이 오늘 일정을 확인하고 있어요.", question: "직원들은 무엇을 확인하고 있습니까?", options: ["일정", "자료", "발표", "회의실"], correctAnswer: 0, explanation: { en: 'The passage says "checking the schedule," so the answer is 일정.' } },
];

export const STEP_2_10: StepContent = {
  level: 2,
  step: 10,
  title: "학교와 직장 (School and Work)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  practice: PRACTICE,
};
