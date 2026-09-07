// TOPIK 4 STEP 7 — Travel and Regional Culture (여행과 지역문화).
// Independent of TOPIK1/TOPIK2/TOPIK3/TOPIK4 STEP1-6's data files.
// 관광, 명소, 풍경, 숙박, 유명하다, 즐기다 already exist as "new"
// elsewhere (TOPIK2/TOPIK3) — recorded here with status "review".
// -는 데 (nominalizer, "in doing/for") is spaced apart from the
// unrelated connector -는데 ("but/while") already taught since
// TOPIK2 — its explanation calls the distinction out explicitly so
// the two are never confused as the same pattern.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L4-S7-W01", korean: "지역문화", partOfSpeech: "noun", translations: { en: "regional / local culture" }, example: "이 지역문화가 특별해요.", exampleTranslations: { en: "This region's local culture is special." }, audioUrl: null, status: "new" },
  { id: "L4-S7-W02", korean: "관광객", partOfSpeech: "noun", translations: { en: "tourist" }, example: "이곳에는 관광객이 많아요.", exampleTranslations: { en: "There are many tourists here." }, audioUrl: null, status: "new" },
  { id: "L4-S7-W03", korean: "문화유산", partOfSpeech: "noun", translations: { en: "cultural heritage" }, example: "이 건물은 문화유산이에요.", exampleTranslations: { en: "This building is a cultural heritage." }, audioUrl: null, status: "new" },
  { id: "L4-S7-W04", korean: "체험", partOfSpeech: "noun", translations: { en: "hands-on experience" }, example: "전통 문화 체험을 했어요.", exampleTranslations: { en: "I did a traditional culture experience." }, audioUrl: null, status: "new" },
  { id: "L4-S7-W05", korean: "지역특산물", partOfSpeech: "noun", translations: { en: "regional specialty product" }, example: "이 지역특산물이 유명해요.", exampleTranslations: { en: "This region's specialty product is famous." }, audioUrl: null, status: "new" },
  { id: "L4-S7-W06", korean: "전통시장", partOfSpeech: "noun", translations: { en: "traditional market" }, example: "전통시장에서 장을 봤어요.", exampleTranslations: { en: "I went shopping at the traditional market." }, audioUrl: null, status: "new" },
  { id: "L4-S7-W07", korean: "보존하다", partOfSpeech: "verb", translations: { en: "to preserve" }, example: "문화유산을 보존해야 해요.", exampleTranslations: { en: "We must preserve cultural heritage." }, audioUrl: null, status: "new" },
  { id: "L4-S7-W08", korean: "소개하다", partOfSpeech: "verb", translations: { en: "to introduce" }, example: "제 고향을 소개할게요.", exampleTranslations: { en: "I'll introduce my hometown." }, audioUrl: null, status: "new" },
  { id: "L4-S7-W09", korean: "향토음식", partOfSpeech: "noun", translations: { en: "local food" }, example: "이 지역 향토음식을 먹어 봤어요.", exampleTranslations: { en: "I tried this region's local food." }, audioUrl: null, status: "new" },
  { id: "L4-S7-W10", korean: "기념품", partOfSpeech: "noun", translations: { en: "souvenir" }, example: "기념품을 샀어요.", exampleTranslations: { en: "I bought a souvenir." }, audioUrl: null, status: "new" },
  { id: "L4-S7-W11", korean: "관람하다", partOfSpeech: "verb", translations: { en: "to view / watch (an exhibit, show)" }, example: "박물관을 관람했어요.", exampleTranslations: { en: "I viewed the museum." }, audioUrl: null, status: "new" },
  { id: "L4-S7-W12", korean: "둘러보다", partOfSpeech: "verb", translations: { en: "to look around" }, example: "시장을 천천히 둘러봤어요.", exampleTranslations: { en: "I looked around the market slowly." }, audioUrl: null, status: "new" },
  { id: "L4-S7-W13", korean: "매력적이다", partOfSpeech: "adjective", translations: { en: "attractive / charming" }, example: "이 도시는 매력적이에요.", exampleTranslations: { en: "This city is attractive." }, audioUrl: null, status: "new" },
  { id: "L4-S7-W14", korean: "이색적이다", partOfSpeech: "adjective", translations: { en: "exotic / unusual" }, example: "이색적인 경험을 했어요.", exampleTranslations: { en: "I had an exotic experience." }, audioUrl: null, status: "new" },
  { id: "L4-S7-W15", korean: "여정", partOfSpeech: "noun", translations: { en: "journey" }, example: "긴 여정이었어요.", exampleTranslations: { en: "It was a long journey." }, audioUrl: null, status: "new" },
  { id: "L4-S7-W16", korean: "코스", partOfSpeech: "noun", translations: { en: "course / route" }, example: "여행 코스를 짰어요.", exampleTranslations: { en: "I planned a travel route." }, audioUrl: null, status: "new" },
  { id: "L4-S7-W17", korean: "야경", partOfSpeech: "noun", translations: { en: "night view" }, example: "이곳의 야경이 아름다워요.", exampleTranslations: { en: "This place's night view is beautiful." }, audioUrl: null, status: "new" },
  { id: "L4-S7-W18", korean: "색다르다", partOfSpeech: "adjective", translations: { en: "novel / different" }, example: "색다른 경험이었어요.", exampleTranslations: { en: "It was a novel experience." }, audioUrl: null, status: "new" },
  { id: "L4-S7-W19", korean: "관광", partOfSpeech: "noun", translations: { en: "sightseeing" }, example: "관광을 좋아해요.", exampleTranslations: { en: "I like sightseeing." }, audioUrl: null, status: "review" },
  { id: "L4-S7-W20", korean: "명소", partOfSpeech: "noun", translations: { en: "famous spot / landmark" }, example: "이곳은 사진 명소예요.", exampleTranslations: { en: "This place is a famous photo spot." }, audioUrl: null, status: "review" },
  { id: "L4-S7-W21", korean: "풍경", partOfSpeech: "noun", translations: { en: "landscape" }, example: "풍경이 정말 아름다워요.", exampleTranslations: { en: "The landscape is really beautiful." }, audioUrl: null, status: "review" },
  { id: "L4-S7-W22", korean: "숙박", partOfSpeech: "noun", translations: { en: "lodging" }, example: "숙박 시설이 편해요.", exampleTranslations: { en: "The lodging facility is comfortable." }, audioUrl: null, status: "review" },
  { id: "L4-S7-W23", korean: "유명하다", partOfSpeech: "adjective", translations: { en: "famous" }, example: "이 식당은 유명해요.", exampleTranslations: { en: "This restaurant is famous." }, audioUrl: null, status: "review" },
  { id: "L4-S7-W24", korean: "즐기다", partOfSpeech: "verb", translations: { en: "to enjoy" }, example: "여행을 즐겼어요.", exampleTranslations: { en: "I enjoyed the trip." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L4-S7-S01", korean: "이 지역을 여행하는 데 이틀 정도가 필요해요.", translations: { en: "It takes about two days to travel this region." }, keyExpression: "-는 데", relatedWords: [], audioUrl: null },
  { id: "L4-S7-S02", korean: "이 문화유산을 관람하는 데 한 시간이 걸려요.", translations: { en: "It takes an hour to view this cultural heritage site." }, keyExpression: "-는 데", relatedWords: ["문화유산", "관람하다"], audioUrl: null },
  { id: "L4-S7-S03", korean: "좋은 안내자를 만난 덕분에 여행을 즐겁게 했어요.", translations: { en: "Thanks to meeting a good guide, I had an enjoyable trip." }, keyExpression: "-(으)ㄴ 덕분에", relatedWords: ["즐기다"], audioUrl: null },
  { id: "L4-S7-S04", korean: "친구가 추천해 준 덕분에 좋은 코스로 여행했어요.", translations: { en: "Thanks to my friend's recommendation, I traveled a good route." }, keyExpression: "-(으)ㄴ 덕분에", relatedWords: ["코스"], audioUrl: null },
  { id: "L4-S7-S05", korean: "저는 전통시장을 둘러보면서 지역특산물을 구경했어요.", translations: { en: "I looked around the traditional market and looked at the regional specialty products." }, keyExpression: "둘러보다", relatedWords: ["전통시장", "둘러보다", "지역특산물"], audioUrl: null },
  { id: "L4-S7-S06", korean: "관광객들에게 이 지역문화를 소개하는 일이 즐거워요.", translations: { en: "Introducing this region's culture to tourists is enjoyable." }, keyExpression: "소개하다", relatedWords: ["관광객", "지역문화", "소개하다"], audioUrl: null },
  { id: "L4-S7-S07", korean: "향토음식을 맛보고 기념품도 사는 이색적인 여행이었어요.", translations: { en: "It was an unusual trip where I tasted local food and bought souvenirs too." }, keyExpression: "이색적이다", relatedWords: ["향토음식", "기념품", "이색적이다"], audioUrl: null },
  { id: "L4-S7-S08", korean: "이 도시는 아름다운 야경 덕분에 정말 매력적이에요.", translations: { en: "Thanks to its beautiful night view, this city is really attractive." }, keyExpression: "매력적이다", relatedWords: ["야경", "매력적이다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L4-S7-G01",
    pattern: "-는 데",
    meanings: { en: "in doing (something) / for (a purpose) — note: spaced apart from the connector -는데 (\"but/while\")" },
    explanations: {
      en: "Attach -는 데 (with a space before 데) to a verb stem to name the activity that something (time, effort, money) is needed for — different from the connector -는데, which is written with no space and means \"but/while.\"",
    },
    examples: [
      { korean: "이 지역을 여행하는 데 이틀 정도가 필요해요.", translations: { en: "It takes about two days to travel this region." } },
      { korean: "이 문화유산을 관람하는 데 한 시간이 걸려요.", translations: { en: "It takes an hour to view this cultural heritage site." } },
    ],
  },
  {
    id: "L4-S7-G02",
    pattern: "-(으)ㄴ 덕분에",
    meanings: { en: "thanks to" },
    explanations: {
      en: "Attach -(으)ㄴ 덕분에 to a verb stem to credit a good result to someone or something's help.",
    },
    examples: [
      { korean: "좋은 안내자를 만난 덕분에 여행을 즐겁게 했어요.", translations: { en: "Thanks to meeting a good guide, I had an enjoyable trip." } },
      { korean: "친구가 추천해 준 덕분에 좋은 코스로 여행했어요.", translations: { en: "Thanks to my friend's recommendation, I traveled a good route." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L4-S7-L01",
    audioText: "이 지역을 여행하는 데 이틀 정도가 필요해요. 볼 것이 많거든요.",
    audioUrl: null,
    question: "이 지역을 여행하는 데 얼마나 걸립니까?",
    options: ["하루", "한 달", "일주일", "이틀 정도"],
    correctAnswer: 3,
    translations: { en: { question: "How long does it take to travel this region?", explanation: 'The sentence says "about two days," so the correct answer is 이틀 정도.' } },
  },
  {
    id: "L4-S7-L02",
    audioText: "좋은 안내자를 만난 덕분에 여행을 정말 즐겁게 했어요.",
    audioUrl: null,
    question: "이 사람은 왜 여행을 즐겁게 했습니까?",
    options: ["좋은 안내자를 만난 덕분에", "날씨가 좋아서", "돈이 많아서", "혼자 여행해서"],
    correctAnswer: 0,
    translations: { en: { question: "Why did this person enjoy the trip?", explanation: 'The sentence says "thanks to meeting a good guide," so the correct answer is 좋은 안내자를 만난 덕분에.' } },
  },
  {
    id: "L4-S7-L03",
    audioText: "저는 전통시장을 둘러보면서 지역특산물도 사고 향토음식도 먹었어요.",
    audioUrl: null,
    question: "이 사람은 전통시장에서 무엇을 했습니까?",
    options: ["잠만 잤다", "지역특산물을 사고 향토음식을 먹었다", "사진만 찍었다", "아무것도 안 샀다"],
    correctAnswer: 1,
    translations: { en: { question: "What did this person do at the traditional market?", explanation: "The sentence says they bought regional specialty products and ate local food, so the correct answer is 지역특산물을 사고 향토음식을 먹었다." } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L4-S7-R01",
    passage:
      "제가 추천하고 싶은 곳은 작은 지역문화가 살아 있는 도시예요.\n이곳에는 오래된 문화유산이 잘 보존되어 있어요.\n전통시장에서는 향토음식을 맛보고 지역특산물도 살 수 있어요.\n밤에는 아름다운 야경도 볼 수 있어서 정말 매력적인 곳이에요.",
    question: "이 지역이 매력적인 이유가 아닌 것은 무엇입니까?",
    options: ["잘 보존된 문화유산", "향토음식과 지역특산물", "아름다운 야경", "저렴한 항공권"],
    correctAnswer: 3,
    translations: { en: { question: "Which is NOT a reason this region is attractive?", explanation: "Cheap airfare is not mentioned, so the correct answer is 저렴한 항공권." } },
  },
  {
    id: "L4-S7-R02",
    passage:
      "지역의 문화유산을 보존하는 일은 쉽지 않아요.\n하지만 관광객들에게 지역문화를 소개하면서 자연스럽게 관심을 높일 수 있어요.\n체험 프로그램을 통해 전통을 직접 느끼게 하는 것도 좋은 방법이에요.\n이런 노력 덕분에 많은 문화유산이 지금까지 남아 있어요.",
    question: "문화유산을 보존하는 데 도움이 되는 방법은 무엇입니까?",
    options: ["체험 프로그램으로 관심을 높인다", "관광객을 막는다", "시장을 없앤다", "숙박비를 올린다"],
    correctAnswer: 0,
    translations: { en: { question: "What method helps preserve cultural heritage?", explanation: "The passage says experience programs raise interest, so the correct answer is 체험 프로그램으로 관심을 높인다." } },
  },
  {
    id: "L4-S7-R03",
    passage:
      "저는 지난주에 색다른 여정을 다녀왔어요.\n친구가 추천해 준 덕분에 유명하지 않지만 정말 매력적인 지역을 발견했어요.\n전통시장을 둘러보고 향토음식도 먹고 기념품도 샀어요.\n다음에는 다른 사람들에게도 이 코스를 소개해 주고 싶어요.",
    question: "이 사람은 이번 여행을 어떻게 하게 됐습니까?",
    options: ["혼자 계획해서", "친구의 추천 덕분에", "여행사를 통해서", "우연히 길을 잃어서"],
    correctAnswer: 1,
    translations: { en: { question: "How did this person come to take this trip?", explanation: "The passage says thanks to a friend's recommendation, so the correct answer is 친구의 추천 덕분에." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L4-S7-WR01",
    type: "sentence-completion",
    prompt: { en: "Complete the sentence: 친구가 도와준 덕분에 ______." },
    sampleAnswer: { en: "친구가 도와준 덕분에 여행을 편하게 했어요." },
    explanation: { en: "-(으)ㄴ 덕분에 credits the good result (a comfortable trip) to the friend's help." },
  },
  {
    id: "L4-S7-WR02",
    type: "short-response",
    prompt: {
      en: "Introduce a region or travel destination you'd recommend in about 5 sentences.\nInclude: the place, its features, activities you can do there, its good points, and why you recommend it.",
    },
    keywords: ["지역문화", "체험", "매력적이다", "추천"],
    sampleAnswer: {
      en: "제가 추천하고 싶은 곳은 지역문화가 잘 남아 있는 작은 도시예요. 이곳에는 오래된 문화유산과 전통시장이 있어요. 전통시장에서는 향토음식을 맛보고 다양한 체험도 할 수 있어요. 밤에는 야경도 아름다워서 정말 매력적이에요. 그래서 저는 이 도시를 여행지로 추천하고 싶어요.",
    },
    explanation: { en: "5 sentences covering place → features → activity → good point → recommendation reason is enough at this stage." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L4-S7-P01", type: "vocabulary", question: '"문화유산"의 뜻은 무엇입니까?', options: ["Souvenir", "Cultural heritage", "Local food", "Night view"], correctAnswer: 1, explanation: { en: "문화유산 means cultural heritage." } },
  { id: "L4-S7-P02", type: "vocabulary", question: '"기념품"의 뜻은 무엇입니까?', options: ["Souvenir", "Journey", "Route", "Tourist"], correctAnswer: 0, explanation: { en: "기념품 means souvenir." } },
  { id: "L4-S7-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n이 지역을 여행하______ 이틀 정도가 필요해요.", options: ["는데", "는 데", "는 김에", "는 반면에"], correctAnswer: 1, explanation: { en: "-는 데 (with a space) names what the time is needed for: 여행하는 데." } },
  { id: "L4-S7-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n좋은 안내자를 만난 ______ 여행을 즐겁게 했어요.", options: ["김에", "대신에", "덕분에", "반면에"], correctAnswer: 2, explanation: { en: "-(으)ㄴ 덕분에 credits a good result: 만난 덕분에." } },
  { id: "L4-S7-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n저는 전통시장을 ______ 지역특산물을 구경했어요.", options: ["둘러보면서", "보존하면서", "관람하면서", "소개하면서"], correctAnswer: 0, explanation: { en: "둘러보다 (to look around) fits walking through a market." } },
  { id: "L4-S7-P06", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n이 도시는 아름다운 야경 덕분에 정말 ______.", options: ["이색적이에요", "매력적이에요", "색다르요", "체험이에요"], correctAnswer: 1, explanation: { en: "매력적이다 (attractive) fits describing a city with a beautiful night view." } },
  { id: "L4-S7-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n오래된 건물을 문화유산으로 ______ 있어요.", options: ["체험하고", "소개하고", "관람하고", "보존하고"], correctAnswer: 3, explanation: { en: "보존하다 (to preserve) fits keeping an old building as cultural heritage." } },
  { id: "L4-S7-P08", type: "listening", audioText: "이 지역을 여행하는 데 이틀 정도가 필요해요. 볼 것이 많거든요.", question: "이 지역을 여행하는 데 얼마나 걸립니까?", options: ["하루", "일주일", "이틀 정도", "한 달"], correctAnswer: 2, explanation: { en: "The sentence says about two days, so the answer is 이틀 정도." } },
  { id: "L4-S7-P09", type: "listening", audioText: "좋은 안내자를 만난 덕분에 여행을 정말 즐겁게 했어요.", question: "이 사람은 왜 여행을 즐겁게 했습니까?", options: ["날씨가 좋아서", "돈이 많아서", "혼자 여행해서", "좋은 안내자를 만난 덕분에"], correctAnswer: 3, explanation: { en: "The sentence says thanks to meeting a good guide, so the answer is 좋은 안내자를 만난 덕분에." } },
  { id: "L4-S7-P10", type: "reading", passage: "이곳에는 오래된 문화유산이 잘 보존되어 있어요. 전통시장에서는 향토음식을 맛보고 지역특산물도 살 수 있어요.", question: "이 지역이 매력적인 이유가 아닌 것은 무엇입니까?", options: ["잘 보존된 문화유산", "향토음식과 지역특산물", "저렴한 항공권", "아름다운 야경"], correctAnswer: 2, explanation: { en: "Cheap airfare isn't mentioned, so the answer is 저렴한 항공권." } },
  { id: "L4-S7-P11", type: "reading", passage: "관광객들에게 지역문화를 소개하면서 관심을 높일 수 있어요. 체험 프로그램을 통해 전통을 직접 느끼게 하는 것도 좋은 방법이에요.", question: "문화유산을 보존하는 데 도움이 되는 방법은 무엇입니까?", options: ["관광객을 막는다", "시장을 없앤다", "숙박비를 올린다", "체험 프로그램으로 관심을 높인다"], correctAnswer: 3, explanation: { en: "The passage says experience programs raise interest, so the answer is 체험 프로그램으로 관심을 높인다." } },
  { id: "L4-S7-P12", type: "sentence", question: "다음 중 자연스러운 문장은?", options: ["친구가 추천해 준 덕분에 좋은 코스로 여행했어요.", "친구가 추천해 준 덕분 좋은 코스로 여행했어요.", "친구가 추천한 덕분에서 좋은 코스로 여행했어요.", "친구가 추천해 준 덕분이 좋은 코스로 여행했어요."], correctAnswer: 0, explanation: { en: "-(으)ㄴ 덕분에 attaches to the past-tense modifier form: 준 덕분에." } },
];

export const STEP_4_7: StepContent = {
  level: 4,
  step: 7,
  title: "여행과 지역문화 (Travel and Regional Culture)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
