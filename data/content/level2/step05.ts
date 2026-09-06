// TOPIK 2 STEP 5 — Transportation and Directions (교통과 길찾기).
// Real STEP content, independent of TOPIK1 and TOPIK2 STEP1-4's data files.
// Checked against all existing words — every word below is genuinely new.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L2-S5-W01", korean: "길", partOfSpeech: "noun", translations: { en: "road / way" }, example: "이 길로 가세요.", exampleTranslations: { en: "Please go this way." }, audioUrl: null, status: "new" },
  { id: "L2-S5-W02", korean: "정류장", partOfSpeech: "noun", translations: { en: "bus stop" }, example: "버스 정류장이 어디에 있어요?", exampleTranslations: { en: "Where is the bus stop?" }, audioUrl: null, status: "new" },
  { id: "L2-S5-W03", korean: "사거리", partOfSpeech: "noun", translations: { en: "intersection" }, example: "사거리에서 오른쪽으로 가세요.", exampleTranslations: { en: "Please go right at the intersection." }, audioUrl: null, status: "new" },
  { id: "L2-S5-W04", korean: "신호등", partOfSpeech: "noun", translations: { en: "traffic light" }, example: "신호등 앞에서 기다리세요.", exampleTranslations: { en: "Please wait in front of the traffic light." }, audioUrl: null, status: "new" },
  { id: "L2-S5-W05", korean: "건너다", partOfSpeech: "verb", translations: { en: "to cross" }, example: "길을 건너세요.", exampleTranslations: { en: "Please cross the street." }, audioUrl: null, status: "new" },
  { id: "L2-S5-W06", korean: "돌다", partOfSpeech: "verb", translations: { en: "to turn" }, example: "왼쪽으로 도세요.", exampleTranslations: { en: "Please turn left." }, audioUrl: null, status: "new" },
  { id: "L2-S5-W07", korean: "직진하다", partOfSpeech: "verb", translations: { en: "to go straight" }, example: "여기에서 직진하세요.", exampleTranslations: { en: "Please go straight from here." }, audioUrl: null, status: "new" },
  { id: "L2-S5-W08", korean: "방향", partOfSpeech: "noun", translations: { en: "direction" }, example: "이 방향으로 가세요.", exampleTranslations: { en: "Please go in this direction." }, audioUrl: null, status: "new" },
  { id: "L2-S5-W09", korean: "출발", partOfSpeech: "noun", translations: { en: "departure" }, example: "출발 시간이 언제예요?", exampleTranslations: { en: "When is the departure time?" }, audioUrl: null, status: "new" },
  { id: "L2-S5-W10", korean: "도착", partOfSpeech: "noun", translations: { en: "arrival" }, example: "도착 시간이 몇 시예요?", exampleTranslations: { en: "What time is the arrival?" }, audioUrl: null, status: "new" },
  { id: "L2-S5-W11", korean: "갈아타다", partOfSpeech: "verb", translations: { en: "to transfer" }, example: "여기에서 지하철을 갈아타세요.", exampleTranslations: { en: "Please transfer to the subway here." }, audioUrl: null, status: "new" },
  { id: "L2-S5-W12", korean: "내리다", partOfSpeech: "verb", translations: { en: "to get off" }, example: "다음 정류장에서 내리세요.", exampleTranslations: { en: "Please get off at the next stop." }, audioUrl: null, status: "new" },
  { id: "L2-S5-W13", korean: "걸어가다", partOfSpeech: "verb", translations: { en: "to walk (to a place)" }, example: "학교까지 걸어가요.", exampleTranslations: { en: "I walk to school." }, audioUrl: null, status: "new" },
  { id: "L2-S5-W14", korean: "가까이", partOfSpeech: "noun", translations: { en: "close by / nearby" }, example: "학교 가까이에 살아요.", exampleTranslations: { en: "I live close to school." }, audioUrl: null, status: "new" },
  { id: "L2-S5-W15", korean: "멀리", partOfSpeech: "noun", translations: { en: "far away" }, example: "회사가 멀리 있어요.", exampleTranslations: { en: "The company is far away." }, audioUrl: null, status: "new" },
  { id: "L2-S5-W16", korean: "맞은편", partOfSpeech: "noun", translations: { en: "across from" }, example: "은행 맞은편에 있어요.", exampleTranslations: { en: "It's across from the bank." }, audioUrl: null, status: "new" },
  { id: "L2-S5-W17", korean: "근처", partOfSpeech: "noun", translations: { en: "nearby / vicinity" }, example: "학교 근처에 식당이 있어요.", exampleTranslations: { en: "There is a restaurant near the school." }, audioUrl: null, status: "new" },
];

const SENTENCES: Sentence[] = [
  { id: "L2-S5-S01", korean: "정류장에서 내린 후에 걸어가세요.", translations: { en: "After getting off at the stop, please walk." }, keyExpression: "-(으)ㄴ 후에", relatedWords: ["정류장", "내리다", "걸어가다"], audioUrl: null },
  { id: "L2-S5-S02", korean: "사거리에서 오른쪽으로 도세요.", translations: { en: "Please turn right at the intersection." }, keyExpression: "-(으)세요", relatedWords: ["사거리", "오른쪽", "돌다"], audioUrl: null },
  { id: "L2-S5-S03", korean: "길을 건넌 후에 직진하세요.", translations: { en: "After crossing the street, please go straight." }, keyExpression: "-(으)ㄴ 후에", relatedWords: ["길", "건너다", "직진하다"], audioUrl: null },
  { id: "L2-S5-S04", korean: "은행은 학교 맞은편에 있어요.", translations: { en: "The bank is across from the school." }, keyExpression: "맞은편에", relatedWords: ["은행", "학교", "맞은편"], audioUrl: null },
  { id: "L2-S5-S05", korean: "저는 역 근처에 살아요.", translations: { en: "I live near the station." }, keyExpression: "근처에", relatedWords: ["역", "근처"], audioUrl: null },
  { id: "L2-S5-S06", korean: "지하철을 갈아탄 후에 두 번째 역에서 내리세요.", translations: { en: "After transferring subways, please get off at the second station." }, keyExpression: "-(으)ㄴ 후에", relatedWords: ["지하철", "갈아타다", "역", "내리다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L2-S5-G01",
    pattern: "-(으)ㄴ 후에",
    meanings: { en: "after doing something" },
    explanations: {
      en: "Attach -(으)ㄴ 후에 to a verb stem to say something happens after another action.",
    },
    examples: [
      { korean: "정류장에서 내린 후에 걸어가세요.", translations: { en: "After getting off at the stop, please walk." } },
      { korean: "길을 건넌 후에 직진하세요.", translations: { en: "After crossing the street, please go straight." } },
      { korean: "지하철을 갈아탄 후에 내리세요.", translations: { en: "After transferring subways, please get off." } },
    ],
  },
  {
    id: "L2-S5-G02",
    pattern: "-(으)세요 (복습)",
    meanings: { en: "polite request (review)" },
    explanations: {
      en: "Keep using -(으)세요 to give directions and polite requests.",
    },
    examples: [
      { korean: "오른쪽으로 도세요.", translations: { en: "Please turn right." } },
      { korean: "여기에서 직진하세요.", translations: { en: "Please go straight from here." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L2-S5-L01",
    audioText: "버스 정류장이 어디에 있어요?",
    audioUrl: null,
    question: "무엇을 묻습니까?",
    options: ["시간", "가격", "정류장 위치", "이름"],
    correctAnswer: 2,
    translations: { en: { question: "What are they asking?", explanation: 'The sentence asks "where is the bus stop," so the correct answer is 정류장 위치.' } },
  },
  {
    id: "L2-S5-L02",
    audioText: "사거리에서 오른쪽으로 도세요.",
    audioUrl: null,
    question: "어디에서 돌아야 합니까?",
    options: ["역", "정류장", "사거리", "은행"],
    correctAnswer: 2,
    translations: { en: { question: "Where should they turn?", explanation: 'The sentence says "at the intersection," so the correct answer is 사거리.' } },
  },
  {
    id: "L2-S5-L03",
    audioText: "지하철을 갈아탄 후에 두 번째 역에서 내리세요. 은행은 역 근처에 있어요.",
    audioUrl: null,
    question: "은행은 어디에 있습니까?",
    options: ["역 근처", "학교 근처", "정류장 안", "사거리 옆"],
    correctAnswer: 0,
    translations: { en: { question: "Where is the bank?", explanation: 'The sentence says "the bank is near the station," so the correct answer is 역 근처.' } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L2-S5-R01",
    passage: "학교 근처에 식당이 있어요.\n식당은 은행 맞은편에 있어요.",
    question: "식당은 어디에 있습니까?",
    options: ["학교 안", "역 근처", "은행 맞은편", "사거리 옆"],
    correctAnswer: 2,
    translations: { en: { question: "Where is the restaurant?", explanation: 'The passage says it is across from the bank, so the correct answer is 은행 맞은편.' } },
  },
  {
    id: "L2-S5-R02",
    passage: "버스 정류장에서 내리세요.\n그 다음에 직진하세요.\n사거리에서 오른쪽으로 도세요.",
    question: "사거리에서 어떻게 가야 합니까?",
    options: ["직진해요", "왼쪽으로 가요", "오른쪽으로 가요", "다시 타요"],
    correctAnswer: 2,
    translations: { en: { question: "How should they go at the intersection?", explanation: 'The passage says "turn right," so the correct answer is 오른쪽으로 가요.' } },
  },
  {
    id: "L2-S5-R03",
    passage: "저는 회사가 멀어서 지하철을 타요.\n지하철을 한 번 갈아타요.\n그 다음에 회사 근처 역에서 내려요.",
    question: "이 사람은 회사에 어떻게 갑니까?",
    options: ["버스만 타요", "걸어가요", "지하철을 갈아타요", "택시를 타요"],
    correctAnswer: 2,
    translations: { en: { question: "How does this person go to work?", explanation: 'The passage says they transfer subways, so the correct answer is 지하철을 갈아타요.' } },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L2-S5-P01", type: "vocabulary", question: '"정류장"의 뜻은 무엇입니까?', options: ["Station", "Intersection", "Traffic light", "Bus stop"], correctAnswer: 3, explanation: { en: "정류장 means bus stop." } },
  { id: "L2-S5-P02", type: "vocabulary", question: '"근처"의 뜻은 무엇입니까?', options: ["Far", "Nearby", "Across", "Straight"], correctAnswer: 1, explanation: { en: "근처 means nearby." } },
  { id: "L2-S5-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n길을 건넌 ______ 직진하세요.", options: ["전에", "고", "후에", "려고"], correctAnswer: 2, explanation: { en: "-(으)ㄴ 후에 means 'after': 건넌 후에." } },
  { id: "L2-S5-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n사거리에서 오른쪽으로 ______.", options: ["돌아요", "돌았어요", "돌 거예요", "도세요"], correctAnswer: 3, explanation: { en: "-(으)세요 makes a polite request: 도세요." } },
  { id: "L2-S5-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n학교 ______에 식당이 있어요.", options: ["도착", "방향", "출발", "근처"], correctAnswer: 3, explanation: { en: "근처 means nearby." } },
  { id: "L2-S5-P06", type: "sentence", question: "버스에서 내려야 할 때 하는 말은?", options: ["어디예요?", "여기에서 내려 주세요", "얼마예요?", "안녕하세요"], correctAnswer: 1, explanation: { en: "여기에서 내려 주세요 asks to get off here." } },
  { id: "L2-S5-P07", type: "vocabulary", question: "지하철에서 다른 노선으로 바꿀 때 하는 것은?", options: ["내려요", "기다려요", "갈아타요", "건너요"], correctAnswer: 2, explanation: { en: "갈아타요 means to transfer." } },
  { id: "L2-S5-P08", type: "listening", audioText: "사거리에서 오른쪽으로 도세요.", question: "어디에서 돌아야 합니까?", options: ["역", "정류장", "은행", "사거리"], correctAnswer: 3, explanation: { en: 'The sentence says "at the intersection," so the answer is 사거리.' } },
  { id: "L2-S5-P09", type: "reading", passage: "은행은 학교 맞은편에 있어요.", question: "은행은 어디에 있습니까?", options: ["학교 옆", "학교 안", "학교 뒤", "학교 맞은편"], correctAnswer: 3, explanation: { en: 'The passage says it is across from the school, so the answer is 학교 맞은편.' } },
  { id: "L2-S5-P10", type: "reading", passage: "저는 역 근처에 살아요.", question: "저는 어디에 삽니까?", options: ["학교 근처", "역 근처", "은행 근처", "회사 근처"], correctAnswer: 1, explanation: { en: 'The passage says "near the station," so the answer is 역 근처.' } },
];

export const STEP_2_5: StepContent = {
  level: 2,
  step: 5,
  title: "교통과 길찾기 (Transportation and Directions)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  practice: PRACTICE,
};
