// TOPIK 3 STEP 9 — Transit and City Life (교통과 도시생활).
// Independent of TOPIK1/TOPIK2/TOPIK3 STEP1-8's data files.
// 편리하다, 불편하다 already exist as "new" (TOPIK3 STEP4) — recorded
// here with status "review".
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L3-S9-W01", korean: "도시", partOfSpeech: "noun", translations: { en: "city" }, example: "저는 큰 도시에 살아요.", exampleTranslations: { en: "I live in a big city." }, audioUrl: null, status: "new" },
  { id: "L3-S9-W02", korean: "교통", partOfSpeech: "noun", translations: { en: "traffic / transportation" }, example: "이 지역은 교통이 편리해요.", exampleTranslations: { en: "This area has convenient transportation." }, audioUrl: null, status: "new" },
  { id: "L3-S9-W03", korean: "혼잡", partOfSpeech: "noun", translations: { en: "congestion" }, example: "출근 시간에는 혼잡이 심해요.", exampleTranslations: { en: "Congestion is bad during rush hour." }, audioUrl: null, status: "new" },
  { id: "L3-S9-W04", korean: "출퇴근", partOfSpeech: "noun", translations: { en: "commute" }, example: "출퇴근 시간이 한 시간이에요.", exampleTranslations: { en: "My commute time is one hour." }, audioUrl: null, status: "new" },
  { id: "L3-S9-W05", korean: "편의시설", partOfSpeech: "noun", translations: { en: "convenience facilities" }, example: "이 동네는 편의시설이 많아요.", exampleTranslations: { en: "This neighborhood has many convenience facilities." }, audioUrl: null, status: "new" },
  { id: "L3-S9-W06", korean: "거리", partOfSpeech: "noun", translations: { en: "street / distance" }, example: "거리에 사람이 많아요.", exampleTranslations: { en: "There are many people on the street." }, audioUrl: null, status: "new" },
  { id: "L3-S9-W07", korean: "중심", partOfSpeech: "noun", translations: { en: "center" }, example: "도시 중심에 살아요.", exampleTranslations: { en: "I live in the city center." }, audioUrl: null, status: "new" },
  { id: "L3-S9-W08", korean: "주변", partOfSpeech: "noun", translations: { en: "surroundings / nearby" }, example: "역 주변에 가게가 많아요.", exampleTranslations: { en: "There are many shops around the station." }, audioUrl: null, status: "new" },
  { id: "L3-S9-W09", korean: "복잡하다", partOfSpeech: "adjective", translations: { en: "crowded / complicated" }, example: "지하철이 너무 복잡해요.", exampleTranslations: { en: "The subway is too crowded." }, audioUrl: null, status: "new" },
  { id: "L3-S9-W10", korean: "막히다", partOfSpeech: "verb", translations: { en: "to be jammed / blocked" }, example: "길이 많이 막혀요.", exampleTranslations: { en: "The road is very jammed." }, audioUrl: null, status: "new" },
  { id: "L3-S9-W11", korean: "이용하다", partOfSpeech: "verb", translations: { en: "to use" }, example: "저는 지하철을 자주 이용해요.", exampleTranslations: { en: "I often use the subway." }, audioUrl: null, status: "new" },
  { id: "L3-S9-W12", korean: "이동하다", partOfSpeech: "verb", translations: { en: "to move / travel (from place to place)" }, example: "버스로 이동해요.", exampleTranslations: { en: "I travel by bus." }, audioUrl: null, status: "new" },
  { id: "L3-S9-W13", korean: "증가하다", partOfSpeech: "verb", translations: { en: "to increase" }, example: "자동차가 증가했어요.", exampleTranslations: { en: "The number of cars increased." }, audioUrl: null, status: "new" },
  { id: "L3-S9-W14", korean: "줄어들다", partOfSpeech: "verb", translations: { en: "to decrease" }, example: "대중교통 이용자가 줄어들었어요.", exampleTranslations: { en: "The number of public transit users decreased." }, audioUrl: null, status: "new" },
  { id: "L3-S9-W15", korean: "환경", partOfSpeech: "noun", translations: { en: "environment" }, example: "환경을 위해 자전거를 타요.", exampleTranslations: { en: "I ride a bike for the environment." }, audioUrl: null, status: "new" },
  { id: "L3-S9-W16", korean: "주차", partOfSpeech: "noun", translations: { en: "parking" }, example: "이 근처는 주차가 어려워요.", exampleTranslations: { en: "Parking is hard near here." }, audioUrl: null, status: "new" },
  { id: "L3-S9-W17", korean: "대중교통", partOfSpeech: "noun", translations: { en: "public transportation" }, example: "저는 대중교통을 이용해요.", exampleTranslations: { en: "I use public transportation." }, audioUrl: null, status: "new" },
  { id: "L3-S9-W18", korean: "인구", partOfSpeech: "noun", translations: { en: "population" }, example: "이 도시는 인구가 많아요.", exampleTranslations: { en: "This city has a large population." }, audioUrl: null, status: "new" },
  { id: "L3-S9-W19", korean: "편리하다", partOfSpeech: "adjective", translations: { en: "convenient" }, example: "대중교통이 편리해요.", exampleTranslations: { en: "Public transportation is convenient." }, audioUrl: null, status: "review" },
  { id: "L3-S9-W20", korean: "불편하다", partOfSpeech: "adjective", translations: { en: "inconvenient" }, example: "주차가 불편해요.", exampleTranslations: { en: "Parking is inconvenient." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L3-S9-S01", korean: "버스가 편리한데 사람이 많아요.", translations: { en: "The bus is convenient, but it has a lot of people." }, keyExpression: "-는데", relatedWords: ["편리하다"], audioUrl: null },
  { id: "L3-S9-S02", korean: "도시는 편리한 반면에 교통이 복잡해요.", translations: { en: "Cities are convenient, but on the other hand, traffic is complicated." }, keyExpression: "-는 반면에", relatedWords: ["도시", "교통", "복잡하다"], audioUrl: null },
  { id: "L3-S9-S03", korean: "출퇴근 시간에는 길이 많이 막혀요.", translations: { en: "During commute hours, the road is very jammed." }, keyExpression: "막히다", relatedWords: ["출퇴근", "막히다"], audioUrl: null },
  { id: "L3-S9-S04", korean: "저는 대중교통을 이용하는 반면에 친구는 자동차를 이용해요.", translations: { en: "I use public transportation, but on the other hand, my friend uses a car." }, keyExpression: "-는 반면에", relatedWords: ["대중교통", "이용하다"], audioUrl: null },
  { id: "L3-S9-S05", korean: "이 동네는 편의시설이 많은데 집값이 비싸요.", translations: { en: "This neighborhood has a lot of convenience facilities, but housing prices are expensive." }, keyExpression: "-는데", relatedWords: ["편의시설", "비싸다"], audioUrl: null },
  { id: "L3-S9-S06", korean: "도시 중심은 복잡한데 주변 지역은 조용해요.", translations: { en: "The city center is crowded, but the surrounding area is quiet." }, keyExpression: "-는데", relatedWords: ["중심", "복잡하다", "주변"], audioUrl: null },
  { id: "L3-S9-S07", korean: "최근에 도시 인구가 증가해서 주차 공간이 줄어들었어요.", translations: { en: "The city's population has increased recently, so parking space has decreased." }, keyExpression: "증가하다", relatedWords: ["인구", "증가하다", "주차", "줄어들다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L3-S9-G01",
    pattern: "-는데",
    meanings: { en: "but / and (background before a contrast or related comment)" },
    explanations: {
      en: "Attach -는데 to a verb stem to give background information before adding a related comment or a mild contrast.",
    },
    examples: [
      { korean: "버스가 편리한데 사람이 많아요.", translations: { en: "The bus is convenient, but it has a lot of people." } },
      { korean: "이 동네는 편의시설이 많은데 집값이 비싸요.", translations: { en: "This neighborhood has a lot of convenience facilities, but housing prices are expensive." } },
    ],
  },
  {
    id: "L3-S9-G02",
    pattern: "-는 반면에",
    meanings: { en: "while, on the other hand" },
    explanations: {
      en: "Attach -는 반면에 to a verb/adjective stem to contrast two clearly opposite sides of the same situation.",
    },
    examples: [
      { korean: "도시는 편리한 반면에 교통이 복잡해요.", translations: { en: "Cities are convenient, but on the other hand, traffic is complicated." } },
      { korean: "저는 대중교통을 이용하는 반면에 친구는 자동차를 이용해요.", translations: { en: "I use public transportation, but on the other hand, my friend uses a car." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L3-S9-L01",
    audioText: "저는 지하철을 자주 이용해요. 빠르고 편리한데 출퇴근 시간에는 너무 복잡해요.",
    audioUrl: null,
    question: "이 사람은 지하철에 대해 어떻게 생각합니까?",
    options: ["편리하지만 출퇴근 시간에 복잡해요", "느리고 불편해요", "이용하지 않아요", "요금이 비싸요"],
    correctAnswer: 0,
    translations: { en: { question: "What does this person think about the subway?", explanation: 'The sentence says "convenient but crowded during commute hours," so the correct answer is 편리하지만 출퇴근 시간에 복잡해요.' } },
  },
  {
    id: "L3-S9-L02",
    audioText: "도시 인구가 늘어나면서 자동차도 증가했어요. 그래서 요즘 주차 공간이 많이 줄어들었어요.",
    audioUrl: null,
    question: "왜 주차 공간이 줄어들었습니까?",
    options: ["도로 공사 때문에", "주차장이 문을 닫아서", "자동차가 증가해서", "새 건물이 생겨서"],
    correctAnswer: 2,
    translations: { en: { question: "Why has parking space decreased?", explanation: 'The sentence says "cars increased," so the correct answer is 자동차가 증가해서.' } },
  },
  {
    id: "L3-S9-L03",
    audioText: "저는 대중교통을 이용하는 반면에 제 동료는 매일 자동차로 출퇴근해요.",
    audioUrl: null,
    question: "동료는 어떻게 출퇴근합니까?",
    options: ["지하철로", "자동차로", "버스로", "걸어서"],
    correctAnswer: 1,
    translations: { en: { question: "How does the coworker commute?", explanation: "The sentence says the coworker commutes by car every day, so the correct answer is 자동차로." } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L3-S9-R01",
    passage:
      "저는 도시 중심에 살아요.\n편의시설이 많아서 생활이 편리한데 집값이 비싸요.\n또 거리에 사람과 차가 많아서 복잡해요.\n그래도 대중교통이 편리해서 이동하기는 좋아요.",
    question: "이 사람이 사는 곳의 불편한 점은 무엇입니까?",
    options: ["집값이 비싸고 복잡해요", "편의시설이 없어요", "교통이 불편해요", "인구가 적어요"],
    correctAnswer: 0,
    translations: { en: { question: "What is inconvenient about where this person lives?", explanation: "The passage says housing is expensive and it's crowded, so the correct answer is 집값이 비싸고 복잡해요." } },
  },
  {
    id: "L3-S9-R02",
    passage:
      "최근 도시 인구가 계속 증가하고 있어요.\n그 결과 자동차도 늘어나서 도로가 자주 막혀요.\n반면에 대중교통을 이용하는 사람은 크게 늘지 않았어요.\n그래서 시에서는 대중교통 이용을 늘리려고 노력하고 있어요.",
    question: "시에서는 무엇을 하려고 노력하고 있습니까?",
    options: ["도로를 넓히려고", "주차장을 없애려고", "대중교통 이용을 늘리려고", "인구를 줄이려고"],
    correctAnswer: 2,
    translations: { en: { question: "What is the city trying to do?", explanation: "The passage says the city is trying to increase public transit use, so the correct answer is 대중교통 이용을 늘리려고." } },
  },
  {
    id: "L3-S9-R03",
    passage:
      "도시 생활은 편리한 반면에 몇 가지 불편한 점도 있어요.\n출퇴근 시간에는 지하철과 도로가 모두 혼잡해요.\n또 주차 공간이 부족해서 차를 세우기 어려워요.\n하지만 편의시설이 가까이 있어서 생활하기는 편해요.",
    question: "출퇴근 시간에 어떤 문제가 있습니까?",
    options: ["편의시설이 문을 닫아요", "지하철과 도로가 혼잡해요", "버스가 안 다녀요", "길을 잃어버려요"],
    correctAnswer: 1,
    translations: { en: { question: "What problem occurs during commute hours?", explanation: "The passage says the subway and roads are both congested, so the correct answer is 지하철과 도로가 혼잡해요." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L3-S9-WR01",
    type: "keyword-writing",
    prompt: { en: "Write one sentence using all of the following words." },
    keywords: ["도시", "교통", "편리하다"],
    sampleAnswer: { en: "도시는 교통이 편리해서 살기 좋아요." },
    explanation: { en: "편리하다 (convenient) can describe 교통 (transportation) directly: 교통이 편리해요." },
  },
  {
    id: "L3-S9-WR02",
    type: "short-response",
    prompt: { en: "Write 3-4 sentences about a good point or an inconvenient point of city life." },
    keywords: ["도시", "편리하다", "반면에", "복잡하다"],
    sampleAnswer: {
      en: "저는 도시에 살아요. 도시는 편의시설이 많아서 생활이 편리해요. 하지만 사람과 차가 많은 반면에 조용한 곳을 찾기는 어려워요. 그래도 저는 도시 생활이 편리해서 좋아요.",
    },
    explanation: { en: "Use -는 반면에 or 하지만 to contrast the convenient and inconvenient sides of city life." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L3-S9-P01", type: "vocabulary", question: '"혼잡"의 뜻은 무엇입니까?', options: ["Congestion", "Convenience", "Population", "Environment"], correctAnswer: 0, explanation: { en: "혼잡 means congestion." } },
  { id: "L3-S9-P02", type: "vocabulary", question: '"대중교통"의 뜻은 무엇입니까?', options: ["Public transportation", "Private car", "Parking", "Bicycle"], correctAnswer: 0, explanation: { en: "대중교통 means public transportation." } },
  { id: "L3-S9-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n버스가 편리______ 사람이 많아요.", options: ["한데", "기 때문에", "고 나서", "는 동안"], correctAnswer: 0, explanation: { en: "-는데 gives background before a comment: 편리한데." } },
  { id: "L3-S9-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n도시는 편리한 ______ 교통이 복잡해요.", options: ["때문에", "동안에", "반면에", "덕분에"], correctAnswer: 2, explanation: { en: "-는 반면에 contrasts two sides: 편리한 반면에." } },
  { id: "L3-S9-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n출퇴근 시간에는 길이 많이 ______.", options: ["늘어나요", "지켜요", "이용해요", "막혀요"], correctAnswer: 3, explanation: { en: "길이 막히다 means \"the road is jammed.\"" } },
  { id: "L3-S9-P06", type: "vocabulary", question: "사람이나 차가 늘어나는 것을 무엇이라고 합니까?", options: ["줄어들다", "이용하다", "이동하다", "증가하다"], correctAnswer: 3, explanation: { en: "증가하다 means to increase." } },
  { id: "L3-S9-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n저는 회사에 갈 때 지하철을 ______.", options: ["증가해요", "이용해요", "복잡해요", "막혀요"], correctAnswer: 1, explanation: { en: "이용해요 means \"I use (it).\"" } },
  { id: "L3-S9-P08", type: "listening", audioText: "저는 대중교통을 이용하는 반면에 동료는 자동차로 출퇴근해요.", question: "동료는 어떻게 출퇴근합니까?", options: ["지하철로", "자동차로", "버스로", "자전거로"], correctAnswer: 1, explanation: { en: 'The sentence says by car, so the answer is 자동차로.' } },
  { id: "L3-S9-P09", type: "reading", passage: "도시 인구가 증가해서 자동차도 늘어나고 주차 공간이 줄어들었어요.", question: "왜 주차 공간이 줄어들었습니까?", options: ["도로 공사 때문에", "자동차가 증가해서", "새 건물이 생겨서", "주차장이 문을 닫아서"], correctAnswer: 1, explanation: { en: 'The passage says cars increased, so the answer is 자동차가 증가해서.' } },
  { id: "L3-S9-P10", type: "reading", passage: "도시 생활은 편리한 반면에 출퇴근 시간에는 혼잡해요.", question: "도시 생활의 단점은 무엇입니까?", options: ["물가가 싸요", "편의시설이 없어요", "출퇴근 시간에 혼잡해요", "인구가 적어요"], correctAnswer: 2, explanation: { en: 'The passage says commute hours are congested, so the answer is 출퇴근 시간에 혼잡해요.' } },
];

export const STEP_3_9: StepContent = {
  level: 3,
  step: 9,
  title: "교통과 도시생활 (Transit and City Life)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
