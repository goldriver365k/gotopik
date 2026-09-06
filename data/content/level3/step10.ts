// TOPIK 3 STEP 10 — Travel and Regions (여행과 지역).
// Independent of TOPIK1/TOPIK2/TOPIK3 STEP1-9's data files.
// 추천하다, 방문하다, 경험, 특별하다, 전통 already exist as "new" —
// recorded here with status "review".
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L3-S10-W01", korean: "지역", partOfSpeech: "noun", translations: { en: "region / area" }, example: "이 지역은 경치가 좋아요.", exampleTranslations: { en: "This region has good scenery." }, audioUrl: null, status: "new" },
  { id: "L3-S10-W02", korean: "관광지", partOfSpeech: "noun", translations: { en: "tourist site" }, example: "유명한 관광지에 갔어요.", exampleTranslations: { en: "I went to a famous tourist site." }, audioUrl: null, status: "new" },
  { id: "L3-S10-W03", korean: "풍경", partOfSpeech: "noun", translations: { en: "landscape" }, example: "풍경이 정말 아름다워요.", exampleTranslations: { en: "The landscape is really beautiful." }, audioUrl: null, status: "new" },
  { id: "L3-S10-W04", korean: "경치", partOfSpeech: "noun", translations: { en: "view / scenery" }, example: "이곳은 경치가 좋아요.", exampleTranslations: { en: "This place has a good view." }, audioUrl: null, status: "new" },
  { id: "L3-S10-W05", korean: "해변", partOfSpeech: "noun", translations: { en: "beach" }, example: "해변을 따라 걸었어요.", exampleTranslations: { en: "I walked along the beach." }, audioUrl: null, status: "new" },
  { id: "L3-S10-W06", korean: "산", partOfSpeech: "noun", translations: { en: "mountain" }, example: "산에 올라갔어요.", exampleTranslations: { en: "I climbed the mountain." }, audioUrl: null, status: "new" },
  { id: "L3-S10-W07", korean: "박물관", partOfSpeech: "noun", translations: { en: "museum" }, example: "박물관을 구경했어요.", exampleTranslations: { en: "I looked around the museum." }, audioUrl: null, status: "new" },
  { id: "L3-S10-W08", korean: "유명하다", partOfSpeech: "adjective", translations: { en: "famous" }, example: "이 식당은 유명해요.", exampleTranslations: { en: "This restaurant is famous." }, audioUrl: null, status: "new" },
  { id: "L3-S10-W09", korean: "구경하다", partOfSpeech: "verb", translations: { en: "to look around / sightsee" }, example: "시장을 구경했어요.", exampleTranslations: { en: "I looked around the market." }, audioUrl: null, status: "new" },
  { id: "L3-S10-W10", korean: "머물다", partOfSpeech: "verb", translations: { en: "to stay" }, example: "삼 일 동안 머물렀어요.", exampleTranslations: { en: "I stayed for three days." }, audioUrl: null, status: "new" },
  { id: "L3-S10-W11", korean: "자연", partOfSpeech: "noun", translations: { en: "nature" }, example: "자연이 아름다운 곳이에요.", exampleTranslations: { en: "It's a place with beautiful nature." }, audioUrl: null, status: "new" },
  { id: "L3-S10-W12", korean: "여행객", partOfSpeech: "noun", translations: { en: "traveler / tourist" }, example: "여행객이 많이 와요.", exampleTranslations: { en: "Many tourists come." }, audioUrl: null, status: "new" },
  { id: "L3-S10-W13", korean: "분위기", partOfSpeech: "noun", translations: { en: "atmosphere / mood" }, example: "분위기가 아주 좋아요.", exampleTranslations: { en: "The atmosphere is very good." }, audioUrl: null, status: "new" },
  { id: "L3-S10-W14", korean: "남다", partOfSpeech: "verb", translations: { en: "to remain / be left" }, example: "그 여행은 기억에 남아요.", exampleTranslations: { en: "That trip stays in my memory." }, audioUrl: null, status: "new" },
  { id: "L3-S10-W15", korean: "숙박", partOfSpeech: "noun", translations: { en: "lodging" }, example: "숙박 시설이 편해요.", exampleTranslations: { en: "The lodging facility is comfortable." }, audioUrl: null, status: "new" },
  { id: "L3-S10-W16", korean: "특징", partOfSpeech: "noun", translations: { en: "feature / characteristic" }, example: "이 지역의 특징을 소개할게요.", exampleTranslations: { en: "Let me introduce this region's features." }, audioUrl: null, status: "new" },
  { id: "L3-S10-W17", korean: "즐기다", partOfSpeech: "verb", translations: { en: "to enjoy" }, example: "여행을 즐겼어요.", exampleTranslations: { en: "I enjoyed the trip." }, audioUrl: null, status: "new" },
  { id: "L3-S10-W18", korean: "명소", partOfSpeech: "noun", translations: { en: "famous spot / landmark" }, example: "이곳은 사진 명소예요.", exampleTranslations: { en: "This place is a famous photo spot." }, audioUrl: null, status: "new" },
  { id: "L3-S10-W19", korean: "추천하다", partOfSpeech: "verb", translations: { en: "to recommend" }, example: "이 관광지를 추천해요.", exampleTranslations: { en: "I recommend this tourist site." }, audioUrl: null, status: "review" },
  { id: "L3-S10-W20", korean: "방문하다", partOfSpeech: "verb", translations: { en: "to visit" }, example: "여러 지역을 방문했어요.", exampleTranslations: { en: "I visited several regions." }, audioUrl: null, status: "review" },
  { id: "L3-S10-W21", korean: "경험", partOfSpeech: "noun", translations: { en: "experience" }, example: "좋은 여행 경험이었어요.", exampleTranslations: { en: "It was a good travel experience." }, audioUrl: null, status: "review" },
  { id: "L3-S10-W22", korean: "특별하다", partOfSpeech: "adjective", translations: { en: "special" }, example: "이번 여행은 특별했어요.", exampleTranslations: { en: "This trip was special." }, audioUrl: null, status: "review" },
  { id: "L3-S10-W23", korean: "전통", partOfSpeech: "noun", translations: { en: "tradition" }, example: "전통 시장을 구경했어요.", exampleTranslations: { en: "I looked around a traditional market." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L3-S10-S01", korean: "음악을 들으면서 산책했어요.", translations: { en: "I took a walk while listening to music." }, keyExpression: "-(으)면서", relatedWords: ["산책"], audioUrl: null },
  { id: "L3-S10-S02", korean: "이곳은 사진을 찍기 좋아요.", translations: { en: "This place is good for taking photos." }, keyExpression: "-기 좋다", relatedWords: ["사진"], audioUrl: null },
  { id: "L3-S10-S03", korean: "경치를 구경하면서 커피를 마셨어요.", translations: { en: "I drank coffee while enjoying the view." }, keyExpression: "-(으)면서", relatedWords: ["경치", "구경하다", "커피"], audioUrl: null },
  { id: "L3-S10-S04", korean: "이 해변은 산책하기 좋아요.", translations: { en: "This beach is good for taking a walk." }, keyExpression: "-기 좋다", relatedWords: ["해변"], audioUrl: null },
  { id: "L3-S10-S05", korean: "저는 이 지역에서 삼 일 동안 머물면서 여러 명소를 구경했어요.", translations: { en: "I stayed in this region for three days while sightseeing at several landmarks." }, keyExpression: "-(으)면서", relatedWords: ["지역", "머물다", "명소", "구경하다"], audioUrl: null },
  { id: "L3-S10-S06", korean: "이 박물관은 한국 전통 문화를 배우기 좋아요.", translations: { en: "This museum is good for learning Korean traditional culture." }, keyExpression: "-기 좋다", relatedWords: ["박물관", "전통"], audioUrl: null },
  { id: "L3-S10-S07", korean: "자연 풍경을 즐기면서 좋은 경험을 했어요. 이 여행은 기억에 남을 거예요.", translations: { en: "I enjoyed the natural landscape and had a good experience. This trip will stay in my memory." }, keyExpression: "즐기다", relatedWords: ["자연", "풍경", "즐기다", "경험", "남다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L3-S10-G01",
    pattern: "-(으)면서",
    meanings: { en: "while (doing two things at the same time)" },
    explanations: {
      en: "Attach -(으)면서 to a verb stem to say two actions happen at the same time, done by the same person.",
    },
    examples: [
      { korean: "음악을 들으면서 산책했어요.", translations: { en: "I took a walk while listening to music." } },
      { korean: "경치를 구경하면서 커피를 마셨어요.", translations: { en: "I drank coffee while enjoying the view." } },
    ],
  },
  {
    id: "L3-S10-G02",
    pattern: "-기 좋다",
    meanings: { en: "good for (doing something)" },
    explanations: {
      en: "Attach -기 좋다 to a verb stem to say a place or thing is good for a particular purpose.",
    },
    examples: [
      { korean: "이곳은 사진을 찍기 좋아요.", translations: { en: "This place is good for taking photos." } },
      { korean: "이 해변은 산책하기 좋아요.", translations: { en: "This beach is good for taking a walk." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L3-S10-L01",
    audioText: "이 지역은 경치가 정말 아름다워요. 산책하면서 사진을 찍기 좋아요.",
    audioUrl: null,
    question: "이 지역은 무엇을 하기 좋습니까?",
    options: ["산책하면서 사진을 찍기", "쇼핑하기", "회의하기", "공부하기"],
    correctAnswer: 0,
    translations: { en: { question: "What is this region good for doing?", explanation: 'The sentence says "good for walking and taking photos," so the correct answer is 산책하면서 사진을 찍기.' } },
  },
  {
    id: "L3-S10-L02",
    audioText: "저는 이번 여행에서 박물관을 구경하면서 그 지역의 전통 문화를 배웠어요.",
    audioUrl: null,
    question: "이 사람은 박물관에서 무엇을 했습니까?",
    options: ["쇼핑을 했어요", "전통 문화를 배웠어요", "친구를 만났어요", "잠을 잤어요"],
    correctAnswer: 1,
    translations: { en: { question: "What did they do at the museum?", explanation: "The sentence says they learned the region's traditional culture, so the correct answer is 전통 문화를 배웠어요." } },
  },
  {
    id: "L3-S10-L03",
    audioText: "이 해변은 여행객들에게 유명해요. 조용히 쉬기 좋고 분위기도 좋아요.",
    audioUrl: null,
    question: "이 해변은 왜 유명합니까?",
    options: ["가깝고 편리해서", "가격이 싸서", "쉬기 좋고 분위기가 좋아서", "음식이 맛있어서"],
    correctAnswer: 2,
    translations: { en: { question: "Why is this beach famous?", explanation: "The sentence says it's good for resting and has a good atmosphere, so the correct answer is 쉬기 좋고 분위기가 좋아서." } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L3-S10-R01",
    passage:
      "저는 지난주에 유명한 관광지를 방문했어요.\n그곳은 자연 풍경이 아름다워서 사진을 찍기 좋았어요.\n전통 시장을 구경하면서 지역 음식도 먹었어요.\n정말 특별한 경험이어서 오래 기억에 남을 것 같아요.",
    question: "이 사람은 관광지에서 무엇을 하면서 지역 음식을 먹었습니까?",
    options: ["숙소에서 쉬면서", "박물관을 구경하면서", "산책하면서", "전통 시장을 구경하면서"],
    correctAnswer: 3,
    translations: { en: { question: "What were they doing when they ate local food?", explanation: "The passage says they looked around the traditional market, so the correct answer is 전통 시장을 구경하면서." } },
  },
  {
    id: "L3-S10-R02",
    passage:
      "이 지역은 산과 바다가 모두 있어서 여행하기 좋아요.\n산에서는 자연 경치를 즐길 수 있고, 해변에서는 편하게 쉴 수 있어요.\n숙박 시설도 다양해서 여행객들이 머물기 편해요.\n그래서 매년 많은 사람들이 이 지역을 방문해요.",
    question: "이 지역의 특징은 무엇입니까?",
    options: ["박물관만 있어요", "산과 바다가 모두 있어요", "숙박 시설이 부족해요", "인구가 매우 적어요"],
    correctAnswer: 1,
    translations: { en: { question: "What is a feature of this region?", explanation: "The passage says it has both mountains and the sea, so the correct answer is 산과 바다가 모두 있어요." } },
  },
  {
    id: "L3-S10-R03",
    passage:
      "친구에게 추천하고 싶은 장소가 있어요.\n바로 우리 동네 근처의 작은 마을이에요.\n조용한 분위기에서 산책하면서 자연을 즐길 수 있어요.\n복잡한 도시를 떠나 쉬고 싶은 사람에게 추천해요.",
    question: "이 글쓴이는 어떤 사람에게 이 장소를 추천합니까?",
    options: ["박물관을 좋아하는 사람", "쇼핑을 좋아하는 사람", "복잡한 도시를 떠나 쉬고 싶은 사람", "혼잡한 곳을 좋아하는 사람"],
    correctAnswer: 2,
    translations: { en: { question: "Who does the writer recommend this place to?", explanation: "The passage recommends it to people who want to leave the crowded city and rest, so the correct answer is 복잡한 도시를 떠나 쉬고 싶은 사람." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L3-S10-WR01",
    type: "sentence-completion",
    prompt: { en: "Complete the sentence: 이곳은 ______기 좋아요." },
    sampleAnswer: { en: "이곳은 사진을 찍기 좋아요." },
    explanation: { en: "-기 좋다 attaches to a verb stem: 찍기 좋아요, 쉬기 좋아요, 걷기 좋아요, etc." },
  },
  {
    id: "L3-S10-WR02",
    type: "short-response",
    prompt: {
      en: "Introduce a place you'd like to recommend to a friend in 3-4 sentences. Include: the place, its features, what you can do there, and why you recommend it.",
    },
    keywords: ["추천하다", "특징", "즐기다"],
    sampleAnswer: {
      en: "저는 제주도를 추천하고 싶어요. 이곳은 자연 경치가 아름다운 게 특징이에요. 바다를 보면서 산책도 하고 맛있는 음식도 즐길 수 있어요. 그래서 쉬고 싶은 사람에게 추천해요.",
    },
    explanation: { en: "Structure: place → feature → activity (using -(으)면서 or -기 좋다) → reason for recommending." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L3-S10-P01", type: "vocabulary", question: '"경치"의 뜻은 무엇입니까?', options: ["Lodging", "Museum", "View / scenery", "Landmark"], correctAnswer: 2, explanation: { en: "경치 means view/scenery." } },
  { id: "L3-S10-P02", type: "vocabulary", question: '"구경하다"의 뜻은 무엇입니까?', options: ["To stay", "To enjoy", "To recommend", "To look around"], correctAnswer: 3, explanation: { en: "구경하다 means to look around/sightsee." } },
  { id: "L3-S10-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n음악을 들______ 산책했어요.", options: ["으면서", "고 나서", "기 때문에", "는 동안이라서"], correctAnswer: 0, explanation: { en: "-(으)면서 shows two simultaneous actions: 들으면서." } },
  { id: "L3-S10-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n이곳은 사진을 찍______.", options: ["기 좋아요", "는 동안이에요", "기 때문이에요", "고 나서예요"], correctAnswer: 0, explanation: { en: "-기 좋다 means \"good for doing\": 찍기 좋아요." } },
  { id: "L3-S10-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n이 지역은 자연 ______이 아름다워요.", options: ["명소", "풍경", "숙박", "여행객"], correctAnswer: 1, explanation: { en: "풍경 means landscape." } },
  { id: "L3-S10-P06", type: "vocabulary", question: "많은 사람들이 아는 유명한 곳을 무엇이라고 합니까?", options: ["숙박", "명소", "특징", "분위기"], correctAnswer: 1, explanation: { en: "명소 means famous spot/landmark." } },
  { id: "L3-S10-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n이번 여행은 정말 ______ 경험이었어요.", options: ["막힌", "복잡한", "줄어든", "특별한"], correctAnswer: 3, explanation: { en: "특별한 (special) fits describing a memorable trip." } },
  { id: "L3-S10-P08", type: "listening", audioText: "이 해변은 조용히 쉬기 좋고 분위기도 좋아요.", question: "이 해변은 왜 좋습니까?", options: ["가까워서", "가격이 싸서", "음식이 맛있어서", "쉬기 좋고 분위기가 좋아서"], correctAnswer: 3, explanation: { en: 'The sentence says it\'s good for resting with a nice atmosphere, so the answer is 쉬기 좋고 분위기가 좋아서.' } },
  { id: "L3-S10-P09", type: "reading", passage: "이 지역은 산과 바다가 모두 있어서 여행하기 좋아요.", question: "이 지역의 특징은 무엇입니까?", options: ["숙박 시설이 없어요", "박물관만 있어요", "산과 바다가 모두 있어요", "복잡해요"], correctAnswer: 2, explanation: { en: 'The passage says it has both mountains and the sea, so the answer is 산과 바다가 모두 있어요.' } },
  { id: "L3-S10-P10", type: "reading", passage: "이 장소는 조용한 분위기에서 산책하면서 자연을 즐길 수 있어요.", question: "이 장소에서 할 수 있는 것은 무엇입니까?", options: ["회의하기", "쇼핑하기", "산책하면서 자연을 즐기기", "공부하기"], correctAnswer: 2, explanation: { en: 'The passage says you can walk and enjoy nature, so the answer is 산책하면서 자연을 즐기기.' } },
];

export const STEP_3_10: StepContent = {
  level: 3,
  step: 10,
  title: "여행과 지역 (Travel and Regions)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
