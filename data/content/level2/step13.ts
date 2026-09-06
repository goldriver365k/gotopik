// TOPIK 2 STEP 13 — Notices and Information (생활 정보와 공지).
// Real STEP content, independent of TOPIK1 and TOPIK2 STEP1-12's data files.
// 안내, 시간 already exist as "new" — recorded here with status "review".
// 신청 (noun) and 참가 (noun) are distinct words from 신청하다/참가하다
// (verbs, already "new" in this same stage's STEP 11/12) and are treated
// as new here, matching the existing noun/verb-pair precedent.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L2-S13-W01", korean: "공지", partOfSpeech: "noun", translations: { en: "notice" }, example: "공지를 확인하세요.", exampleTranslations: { en: "Please check the notice." }, audioUrl: null, status: "new" },
  { id: "L2-S13-W02", korean: "기간", partOfSpeech: "noun", translations: { en: "period" }, example: "신청 기간이에요.", exampleTranslations: { en: "It's the application period." }, audioUrl: null, status: "new" },
  { id: "L2-S13-W03", korean: "변경", partOfSpeech: "noun", translations: { en: "change" }, example: "일정 변경이 있어요.", exampleTranslations: { en: "There's a schedule change." }, audioUrl: null, status: "new" },
  { id: "L2-S13-W04", korean: "이용", partOfSpeech: "noun", translations: { en: "use" }, example: "이용 시간을 확인하세요.", exampleTranslations: { en: "Please check the hours of use." }, audioUrl: null, status: "new" },
  { id: "L2-S13-W05", korean: "무료", partOfSpeech: "noun", translations: { en: "free (no charge)" }, example: "이 서비스는 무료예요.", exampleTranslations: { en: "This service is free." }, audioUrl: null, status: "new" },
  { id: "L2-S13-W06", korean: "유료", partOfSpeech: "noun", translations: { en: "paid (with charge)" }, example: "주차는 유료예요.", exampleTranslations: { en: "Parking is paid." }, audioUrl: null, status: "new" },
  { id: "L2-S13-W07", korean: "가능", partOfSpeech: "noun", translations: { en: "possible" }, example: "예약 변경이 가능해요.", exampleTranslations: { en: "Changing the reservation is possible." }, audioUrl: null, status: "new" },
  { id: "L2-S13-W08", korean: "불가능", partOfSpeech: "noun", translations: { en: "impossible" }, example: "오늘은 이용이 불가능해요.", exampleTranslations: { en: "Use is not possible today." }, audioUrl: null, status: "new" },
  { id: "L2-S13-W09", korean: "마감", partOfSpeech: "noun", translations: { en: "deadline" }, example: "신청 마감이 내일이에요.", exampleTranslations: { en: "The application deadline is tomorrow." }, audioUrl: null, status: "new" },
  { id: "L2-S13-W10", korean: "장소", partOfSpeech: "noun", translations: { en: "place / venue" }, example: "행사 장소를 확인하세요.", exampleTranslations: { en: "Please check the event venue." }, audioUrl: null, status: "new" },
  { id: "L2-S13-W11", korean: "휴무", partOfSpeech: "noun", translations: { en: "closed (day off)" }, example: "월요일은 휴무예요.", exampleTranslations: { en: "It's closed on Mondays." }, audioUrl: null, status: "new" },
  { id: "L2-S13-W12", korean: "운영", partOfSpeech: "noun", translations: { en: "operation" }, example: "운영 시간이 바뀌었어요.", exampleTranslations: { en: "The operating hours have changed." }, audioUrl: null, status: "new" },
  { id: "L2-S13-W13", korean: "금지", partOfSpeech: "noun", translations: { en: "prohibition" }, example: "여기는 사진 금지예요.", exampleTranslations: { en: "Photos are prohibited here." }, audioUrl: null, status: "new" },
  { id: "L2-S13-W14", korean: "신청", partOfSpeech: "noun", translations: { en: "application" }, example: "신청 기간을 확인하세요.", exampleTranslations: { en: "Please check the application period." }, audioUrl: null, status: "new" },
  { id: "L2-S13-W15", korean: "참가", partOfSpeech: "noun", translations: { en: "participation" }, example: "참가 신청이 필요해요.", exampleTranslations: { en: "Participation requires an application." }, audioUrl: null, status: "new" },
  { id: "L2-S13-W16", korean: "안내", partOfSpeech: "noun", translations: { en: "information / guide" }, example: "안내를 잘 읽으세요.", exampleTranslations: { en: "Please read the information carefully." }, audioUrl: null, status: "review" },
  { id: "L2-S13-W17", korean: "시간", partOfSpeech: "noun", translations: { en: "time" }, example: "이용 시간이 바뀌었어요.", exampleTranslations: { en: "The hours of use have changed." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L2-S13-S01", korean: "비 때문에 행사가 취소됐어요.", translations: { en: "The event was canceled because of rain." }, keyExpression: "때문에", relatedWords: ["행사"], audioUrl: null },
  { id: "L2-S13-S02", korean: "공사 때문에 이용이 불가능해요.", translations: { en: "Use is impossible because of construction." }, keyExpression: "때문에", relatedWords: ["이용", "불가능"], audioUrl: null },
  { id: "L2-S13-S03", korean: "이용 시간은 아홉 시부터 여섯 시까지예요.", translations: { en: "The hours of use are from nine to six." }, keyExpression: "부터 ~ 까지", relatedWords: ["이용", "시간"], audioUrl: null },
  { id: "L2-S13-S04", korean: "신청 기간은 월요일부터 금요일까지예요.", translations: { en: "The application period is from Monday to Friday." }, keyExpression: "부터 ~ 까지", relatedWords: ["신청", "기간"], audioUrl: null },
  { id: "L2-S13-S05", korean: "이 서비스는 무료지만 저 서비스는 유료예요.", translations: { en: "This service is free, but that service is paid." }, keyExpression: "-지만", relatedWords: ["무료", "유료"], audioUrl: null },
  { id: "L2-S13-S06", korean: "신청 마감이 지나서 참가가 불가능해요.", translations: { en: "The application deadline has passed, so participation is impossible." }, keyExpression: "때문에", relatedWords: ["마감", "참가", "불가능"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L2-S13-G01",
    pattern: "때문에",
    meanings: { en: "because of" },
    explanations: {
      en: "때문에 follows a noun to give the reason for something, often a problem or change.",
    },
    examples: [
      { korean: "비 때문에 행사가 취소됐어요.", translations: { en: "The event was canceled because of rain." } },
      { korean: "공사 때문에 이용이 불가능해요.", translations: { en: "Use is impossible because of construction." } },
    ],
  },
  {
    id: "L2-S13-G02",
    pattern: "부터 ~ 까지",
    meanings: { en: "from ~ to (time or place range)" },
    explanations: {
      en: "부터 marks the starting point and 까지 the ending point of a range of time or place.",
    },
    examples: [
      { korean: "이용 시간은 아홉 시부터 여섯 시까지예요.", translations: { en: "The hours of use are from nine to six." } },
      { korean: "신청 기간은 월요일부터 금요일까지예요.", translations: { en: "The application period is from Monday to Friday." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L2-S13-L01",
    audioText: "오늘 행사 장소가 변경됐어요.",
    audioUrl: null,
    question: "오늘 무엇이 바뀌었습니까?",
    options: ["시간", "장소", "가격", "이름"],
    correctAnswer: 1,
    translations: { en: { question: "What changed today?", explanation: 'The sentence says the venue changed, so the correct answer is 장소.' } },
  },
  {
    id: "L2-S13-L02",
    audioText: "이 서비스는 무료지만 주차는 유료예요.",
    audioUrl: null,
    question: "주차는 어떻습니까?",
    options: ["무료예요", "유료예요", "금지예요", "불가능해요"],
    correctAnswer: 1,
    translations: { en: { question: "What about parking?", explanation: "The sentence says parking is paid, so the correct answer is 유료예요." } },
  },
  {
    id: "L2-S13-L03",
    audioText: "신청 마감은 이번 주 금요일까지예요.",
    audioUrl: null,
    question: "신청 마감은 언제까지입니까?",
    options: ["이번 주 월요일", "이번 주 금요일", "다음 주 월요일", "다음 달"],
    correctAnswer: 1,
    translations: { en: { question: "When is the application deadline?", explanation: "The sentence says this Friday, so the correct answer is 이번 주 금요일." } },
  },
  {
    id: "L2-S13-L04",
    audioText: "안내: 공사 때문에 이번 주는 이용이 불가능합니다. 다음 주부터 다시 운영합니다.",
    audioUrl: null,
    question: "이번 주는 왜 이용할 수 없습니까?",
    options: ["휴무라서", "공사 때문에", "마감이라서", "행사 때문에"],
    correctAnswer: 1,
    translations: { en: { question: "Why can't it be used this week?", explanation: "The notice says because of construction, so the correct answer is 공사 때문에." } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L2-S13-R01",
    passage: "메모: 오늘 오후 세 시에 회의 장소가 변경됐어요.\n새 장소는 이 층 회의실이에요.",
    question: "회의 장소는 어디로 바뀌었습니까?",
    options: ["일 층 회의실", "이 층 회의실", "사무실", "식당"],
    correctAnswer: 1,
    translations: { en: { question: "Where was the meeting moved to?", explanation: "The memo says the second floor meeting room, so the correct answer is 이 층 회의실." } },
  },
  {
    id: "L2-S13-R02",
    passage: "신청 기간: 이번 달 1일부터 15일까지\n신청 방법: 인터넷으로 신청",
    question: "신청 기간은 언제까지입니까?",
    options: ["1일", "10일", "15일", "30일"],
    correctAnswer: 2,
    translations: { en: { question: "Until when is the application period?", explanation: "The information says until the 15th, so the correct answer is 15일." } },
  },
  {
    id: "L2-S13-R03",
    passage: "공지: 이번 주는 공사 때문에 이용이 불가능합니다.\n다음 주 월요일부터 다시 운영합니다.\n이용 시간은 아홉 시부터 여섯 시까지입니다.",
    question: "언제부터 다시 이용할 수 있습니까?",
    options: ["이번 주 월요일", "다음 주 월요일", "이번 주 금요일", "다음 달"],
    correctAnswer: 1,
    translations: { en: { question: "From when can it be used again?", explanation: "The notice says starting next Monday, so the correct answer is 다음 주 월요일." } },
  },
  {
    id: "L2-S13-R04",
    passage: "이 축제는 무료로 참가할 수 있어요.\n하지만 신청 기간 안에 신청해야 해요.\n신청 마감은 이번 주 금요일까지예요.\n마감이 지나면 참가가 불가능해요.",
    question: "이 축제에 참가하려면 무엇을 해야 합니까?",
    options: ["돈을 내야 해요", "기간 안에 신청해야 해요", "서류를 작성하면 안 돼요", "금요일 이후에 신청해야 해요"],
    correctAnswer: 1,
    translations: { en: { question: "What must you do to participate in this festival?", explanation: "The passage says you must apply within the period, so the correct answer is 기간 안에 신청해야 해요." } },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L2-S13-P01", type: "vocabulary", question: '"공지"의 뜻은 무엇입니까?', options: ["Notice", "Gift", "Meeting", "Document"], correctAnswer: 0, explanation: { en: "공지 means notice." } },
  { id: "L2-S13-P02", type: "vocabulary", question: '"마감"의 뜻은 무엇입니까?', options: ["Start", "Deadline", "Change", "Place"], correctAnswer: 1, explanation: { en: "마감 means deadline." } },
  { id: "L2-S13-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n비 ______ 행사가 취소됐어요.", options: ["때문에", "동안", "부터", "보다"], correctAnswer: 0, explanation: { en: "때문에 means \"because of\": 비 때문에." } },
  { id: "L2-S13-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n이용 시간은 아홉 시 ______ 여섯 시까지예요.", options: ["부터", "때문에", "동안", "보다"], correctAnswer: 0, explanation: { en: "부터 ~ 까지 marks a range: 아홉 시부터 여섯 시까지." } },
  { id: "L2-S13-P05", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n공사 ______ 이용이 불가능해요.", options: ["때문에", "후에", "동안에", "보다"], correctAnswer: 0, explanation: { en: "때문에 gives the reason: 공사 때문에." } },
  { id: "L2-S13-P06", type: "vocabulary", question: "돈을 안 내도 될 때 쓰는 말은?", options: ["유료", "무료", "휴무", "금지"], correctAnswer: 1, explanation: { en: "무료 means free (no charge)." } },
  { id: "L2-S13-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n오늘은 문을 닫는 ______ 날이에요.", options: ["휴무", "운영", "이용", "가능"], correctAnswer: 0, explanation: { en: "휴무 means closed / day off." } },
  { id: "L2-S13-P08", type: "listening", audioText: "신청 마감은 이번 주 금요일까지예요.", question: "신청 마감은 언제입니까?", options: ["이번 주 월요일", "이번 주 금요일", "다음 주", "다음 달"], correctAnswer: 1, explanation: { en: 'The sentence says this Friday, so the answer is 이번 주 금요일.' } },
  { id: "L2-S13-P09", type: "reading", passage: "공지: 이번 주는 공사 때문에 이용이 불가능합니다.", question: "왜 이용할 수 없습니까?", options: ["휴무라서", "공사 때문에", "마감이라서", "요금 때문에"], correctAnswer: 1, explanation: { en: 'The notice says because of construction, so the answer is 공사 때문에.' } },
  { id: "L2-S13-P10", type: "reading", passage: "신청 기간: 1일부터 15일까지. 신청 방법: 인터넷.", question: "신청은 어떻게 합니까?", options: ["전화로", "인터넷으로", "방문해서", "우편으로"], correctAnswer: 1, explanation: { en: 'The notice says online, so the answer is 인터넷으로.' } },
  { id: "L2-S13-P11", type: "reading", passage: "이 장소는 사진 촬영이 금지입니다.", question: "이 장소에서 할 수 없는 것은?", options: ["이야기하기", "사진 찍기", "앉기", "기다리기"], correctAnswer: 1, explanation: { en: 'The notice says photography is prohibited, so the answer is 사진 찍기.' } },
  { id: "L2-S13-P12", type: "reading", passage: "행사 장소가 변경됐습니다. 새 장소는 이 층 회의실입니다.", question: "행사 장소는 어디로 바뀌었습니까?", options: ["일 층 회의실", "이 층 회의실", "사무실", "식당"], correctAnswer: 1, explanation: { en: 'The notice says the second floor meeting room, so the answer is 이 층 회의실.' } },
  { id: "L2-S13-P13", type: "vocabulary", question: "예약을 바꿀 수 있을 때 쓰는 말은?", options: ["불가능", "가능", "금지", "마감"], correctAnswer: 1, explanation: { en: "가능 means possible." } },
  { id: "L2-S13-P14", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n마감이 지나서 ______ 이 불가능해요.", options: ["참가", "무료", "안내", "운영"], correctAnswer: 0, explanation: { en: "참가 (participation) fits: 참가가 불가능해요." } },
  { id: "L2-S13-P15", type: "reading", passage: "신청 기간 안에 신청해야 참가할 수 있어요. 마감 후에는 참가가 불가능해요.", question: "언제까지 신청해야 참가할 수 있습니까?", options: ["신청 기간 안에", "마감 후에", "행사 당일에", "언제든지"], correctAnswer: 0, explanation: { en: 'The passage says within the application period, so the answer is 신청 기간 안에.' } },
];

export const STEP_2_13: StepContent = {
  level: 2,
  step: 13,
  title: "생활 정보와 공지 (Notices and Information)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  practice: PRACTICE,
};
