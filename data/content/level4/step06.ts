// TOPIK 4 STEP 6 — Traffic and City Problems (교통과 도시 문제).
// Independent of TOPIK1/TOPIK2/TOPIK3/TOPIK4 STEP1-5's data files.
// 대중교통, 출퇴근, 혼잡, 주차, 해결, 이용하다, 줄이다 already exist as
// "new" elsewhere (TOPIK3); 개선 was newly introduced at TOPIK4 STEP5 —
// all recorded here with status "review".
// Grammar follows docs/topik4-curriculum.md's finalized STEP6 pair
// (-에 의해, -고 말다) rather than "-도록 하다", which duplicates
// -도록 (TOPIK3 STEP6) too closely — see that doc's §4.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L4-S6-W01", korean: "교통체증", partOfSpeech: "noun", translations: { en: "traffic congestion" }, example: "출근 시간에 교통체증이 심해요.", exampleTranslations: { en: "Traffic congestion is bad during commute time." }, audioUrl: null, status: "new" },
  { id: "L4-S6-W02", korean: "차량", partOfSpeech: "noun", translations: { en: "vehicle" }, example: "도로에 차량이 많아요.", exampleTranslations: { en: "There are many vehicles on the road." }, audioUrl: null, status: "new" },
  { id: "L4-S6-W03", korean: "도로", partOfSpeech: "noun", translations: { en: "road" }, example: "이 도로는 항상 막혀요.", exampleTranslations: { en: "This road is always jammed." }, audioUrl: null, status: "new" },
  { id: "L4-S6-W04", korean: "이용객", partOfSpeech: "noun", translations: { en: "user / passenger" }, example: "버스 이용객이 늘었어요.", exampleTranslations: { en: "Bus passengers have increased." }, audioUrl: null, status: "new" },
  { id: "L4-S6-W05", korean: "이동", partOfSpeech: "noun", translations: { en: "movement / moving" }, example: "이동 시간이 오래 걸려요.", exampleTranslations: { en: "The travel time takes long." }, audioUrl: null, status: "new" },
  { id: "L4-S6-W06", korean: "사고", partOfSpeech: "noun", translations: { en: "accident" }, example: "오늘 아침에 사고가 났어요.", exampleTranslations: { en: "There was an accident this morning." }, audioUrl: null, status: "new" },
  { id: "L4-S6-W07", korean: "증가", partOfSpeech: "noun", translations: { en: "increase" }, example: "차량 증가가 문제예요.", exampleTranslations: { en: "The increase in vehicles is a problem." }, audioUrl: null, status: "new" },
  { id: "L4-S6-W08", korean: "감소", partOfSpeech: "noun", translations: { en: "decrease" }, example: "이용객이 감소했어요.", exampleTranslations: { en: "The number of users decreased." }, audioUrl: null, status: "new" },
  { id: "L4-S6-W09", korean: "확대", partOfSpeech: "noun", translations: { en: "expansion" }, example: "대중교통 확대가 필요해요.", exampleTranslations: { en: "Expansion of public transportation is needed." }, audioUrl: null, status: "new" },
  { id: "L4-S6-W10", korean: "제한", partOfSpeech: "noun", translations: { en: "restriction / limit" }, example: "차량 운행을 제한해요.", exampleTranslations: { en: "They restrict vehicle operation." }, audioUrl: null, status: "new" },
  { id: "L4-S6-W11", korean: "운영하다", partOfSpeech: "verb", translations: { en: "to operate / run" }, example: "버스를 24시간 운영해요.", exampleTranslations: { en: "They operate buses 24 hours." }, audioUrl: null, status: "new" },
  { id: "L4-S6-W12", korean: "편리성", partOfSpeech: "noun", translations: { en: "convenience" }, example: "대중교통의 편리성이 좋아요.", exampleTranslations: { en: "Public transportation's convenience is good." }, audioUrl: null, status: "new" },
  { id: "L4-S6-W13", korean: "노선", partOfSpeech: "noun", translations: { en: "route / line" }, example: "새로운 지하철 노선이 생겼어요.", exampleTranslations: { en: "A new subway line was created." }, audioUrl: null, status: "new" },
  { id: "L4-S6-W14", korean: "시내", partOfSpeech: "noun", translations: { en: "downtown / city center" }, example: "시내는 항상 복잡해요.", exampleTranslations: { en: "Downtown is always crowded." }, audioUrl: null, status: "new" },
  { id: "L4-S6-W15", korean: "원활하다", partOfSpeech: "adjective", translations: { en: "smooth (flowing)" }, example: "교통이 원활해요.", exampleTranslations: { en: "Traffic is smooth." }, audioUrl: null, status: "new" },
  { id: "L4-S6-W16", korean: "붐비다", partOfSpeech: "verb", translations: { en: "to be crowded" }, example: "출퇴근 시간에는 지하철이 붐벼요.", exampleTranslations: { en: "The subway is crowded during commute time." }, audioUrl: null, status: "new" },
  { id: "L4-S6-W17", korean: "대중교통", partOfSpeech: "noun", translations: { en: "public transportation" }, example: "저는 대중교통을 이용해요.", exampleTranslations: { en: "I use public transportation." }, audioUrl: null, status: "review" },
  { id: "L4-S6-W18", korean: "출퇴근", partOfSpeech: "noun", translations: { en: "commute" }, example: "출퇴근 시간이 한 시간이에요.", exampleTranslations: { en: "My commute time is one hour." }, audioUrl: null, status: "review" },
  { id: "L4-S6-W19", korean: "혼잡", partOfSpeech: "noun", translations: { en: "congestion" }, example: "출근 시간에는 혼잡이 심해요.", exampleTranslations: { en: "Congestion is bad during rush hour." }, audioUrl: null, status: "review" },
  { id: "L4-S6-W20", korean: "주차", partOfSpeech: "noun", translations: { en: "parking" }, example: "이 근처는 주차가 어려워요.", exampleTranslations: { en: "Parking is hard near here." }, audioUrl: null, status: "review" },
  { id: "L4-S6-W21", korean: "해결", partOfSpeech: "noun", translations: { en: "solution" }, example: "빠른 해결이 필요해요.", exampleTranslations: { en: "A quick solution is needed." }, audioUrl: null, status: "review" },
  { id: "L4-S6-W22", korean: "이용하다", partOfSpeech: "verb", translations: { en: "to use" }, example: "SNS를 자주 이용해요.", exampleTranslations: { en: "I often use social media." }, audioUrl: null, status: "review" },
  { id: "L4-S6-W23", korean: "줄이다", partOfSpeech: "verb", translations: { en: "to reduce" }, example: "쓰레기를 줄여요.", exampleTranslations: { en: "I reduce trash." }, audioUrl: null, status: "review" },
  { id: "L4-S6-W24", korean: "개선", partOfSpeech: "noun", translations: { en: "improvement" }, example: "생활습관 개선이 필요해요.", exampleTranslations: { en: "Improvement of lifestyle habits is needed." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L4-S6-S01", korean: "많은 교통 문제가 차량 증가에 의해 발생합니다.", translations: { en: "Many traffic problems occur due to the increase in vehicles." }, keyExpression: "-에 의해", relatedWords: ["증가"], audioUrl: null },
  { id: "L4-S6-S02", korean: "이 도로는 오래된 계획에 의해 만들어졌어요.", translations: { en: "This road was built based on an old plan." }, keyExpression: "-에 의해", relatedWords: ["도로"], audioUrl: null },
  { id: "L4-S6-S03", korean: "길이 막혀서 결국 약속 시간에 늦고 말았어요.", translations: { en: "The road was jammed, so I ended up being late to the appointment." }, keyExpression: "-고 말다", relatedWords: [], audioUrl: null },
  { id: "L4-S6-S04", korean: "버스를 놓쳐서 한 시간을 기다리고 말았어요.", translations: { en: "I missed the bus, so I ended up waiting an hour." }, keyExpression: "-고 말다", relatedWords: [], audioUrl: null },
  { id: "L4-S6-S05", korean: "시내에 차량이 늘면서 교통체증이 심해졌어요.", translations: { en: "As vehicles increased downtown, traffic congestion got worse." }, keyExpression: "교통체증", relatedWords: ["시내", "차량", "증가", "교통체증"], audioUrl: null },
  { id: "L4-S6-S06", korean: "대중교통 노선을 확대하면 이용객이 늘어날 거예요.", translations: { en: "If public transportation routes are expanded, the number of users will increase." }, keyExpression: "확대", relatedWords: ["노선", "확대", "이용객"], audioUrl: null },
  { id: "L4-S6-S07", korean: "출퇴근 시간에는 지하철이 너무 붐벼서 이동이 불편해요.", translations: { en: "During commute time, the subway is so crowded that moving around is inconvenient." }, keyExpression: "붐비다", relatedWords: ["출퇴근", "붐비다", "이동"], audioUrl: null },
  { id: "L4-S6-S08", korean: "차량 운행을 제한하면 도로가 더 원활해질 수 있어요.", translations: { en: "If vehicle operation is restricted, the roads can flow more smoothly." }, keyExpression: "원활하다", relatedWords: ["제한", "원활하다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L4-S6-G01",
    pattern: "-에 의해",
    meanings: { en: "by / due to (a cause or agent, more formal)" },
    explanations: {
      en: "Attach -에 의해 to a noun to name the cause or agent behind a result, often in more formal or written contexts.",
    },
    examples: [
      { korean: "많은 교통 문제가 차량 증가에 의해 발생합니다.", translations: { en: "Many traffic problems occur due to the increase in vehicles." } },
      { korean: "이 도로는 오래된 계획에 의해 만들어졌어요.", translations: { en: "This road was built based on an old plan." } },
    ],
  },
  {
    id: "L4-S6-G02",
    pattern: "-고 말다",
    meanings: { en: "to end up doing (something), often regrettably" },
    explanations: {
      en: "Attach -고 말다 to a verb stem to show an outcome that finally happened, usually one the speaker didn't want.",
    },
    examples: [
      { korean: "길이 막혀서 결국 약속 시간에 늦고 말았어요.", translations: { en: "The road was jammed, so I ended up being late to the appointment." } },
      { korean: "버스를 놓쳐서 한 시간을 기다리고 말았어요.", translations: { en: "I missed the bus, so I ended up waiting an hour." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L4-S6-L01",
    audioText: "많은 교통 문제가 차량 증가에 의해 발생합니다. 그래서 시에서는 대중교통 노선을 확대하려고 합니다.",
    audioUrl: null,
    question: "시에서 하려는 것은 무엇입니까?",
    options: ["도로를 더 만들려고 한다", "주차장을 없애려고 한다", "대중교통 노선을 확대하려고 한다", "차량을 더 팔려고 한다"],
    correctAnswer: 2,
    translations: { en: { question: "What is the city trying to do?", explanation: 'The sentence says "trying to expand public transportation routes," so the correct answer is 대중교통 노선을 확대하려고 한다.' } },
  },
  {
    id: "L4-S6-L02",
    audioText: "길이 너무 막혀서 저는 결국 약속 시간에 늦고 말았어요.",
    audioUrl: null,
    question: "이 사람은 어떻게 됐습니까?",
    options: ["일찍 도착했다", "버스를 잘 탔다", "약속을 취소했다", "약속 시간에 늦고 말았다"],
    correctAnswer: 3,
    translations: { en: { question: "What happened to this person?", explanation: 'The sentence says "ended up being late to the appointment," so the correct answer is 약속 시간에 늦고 말았다.' } },
  },
  {
    id: "L4-S6-L03",
    audioText: "출퇴근 시간에는 지하철이 너무 붐벼서 타기가 힘들어요. 그래서 저는 시간을 조금 앞당겨서 이동해요.",
    audioUrl: null,
    question: "이 사람은 문제를 어떻게 해결합니까?",
    options: ["시간을 앞당겨서 이동한다", "택시를 탄다", "회사를 옮긴다", "걸어서 출근한다"],
    correctAnswer: 0,
    translations: { en: { question: "How does this person solve the problem?", explanation: 'The sentence says "moving a bit earlier," so the correct answer is 시간을 앞당겨서 이동한다.' } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L4-S6-R01",
    passage:
      "요즘 시내에서는 교통체증이 큰 문제가 되고 있어요.\n이 문제는 주로 차량 증가에 의해 발생해요.\n출퇴근 시간에는 도로가 붐벼서 이동 시간이 두 배로 늘어나기도 해요.\n그래서 시에서는 대중교통을 확대해서 이 문제를 해결하려고 하고 있어요.",
    question: "시내 교통체증의 주요 원인은 무엇입니까?",
    options: ["대중교통 확대", "도로 공사", "차량 증가", "날씨"],
    correctAnswer: 2,
    translations: { en: { question: "What is the main cause of downtown traffic congestion?", explanation: "The passage says it mainly occurs due to the increase in vehicles, so the correct answer is 차량 증가." } },
  },
  {
    id: "L4-S6-R02",
    passage:
      "도시의 교통 문제를 해결하기 위해 여러 정책이 시행되고 있어요.\n첫째, 대중교통 노선을 확대해서 이용객의 편리성을 높이고 있어요.\n둘째, 시내 일부 지역에서는 차량 운행을 제한하고 있어요.\n이런 노력 덕분에 도로가 조금씩 원활해지고 있어요.",
    question: "이 글에서 소개하는 정책이 아닌 것은 무엇입니까?",
    options: ["대중교통 노선 확대", "차량 운행 제한", "이용객 편리성 개선", "주차장 확대"],
    correctAnswer: 3,
    translations: { en: { question: "Which policy is NOT introduced in the passage?", explanation: "Parking lot expansion is not mentioned, so the correct answer is 주차장 확대." } },
  },
  {
    id: "L4-S6-R03",
    passage:
      "저는 어제 길이 너무 막혀서 결국 중요한 약속에 늦고 말았어요.\n그 후로는 출퇴근 시간을 피해서 이동하려고 노력해요.\n대중교통을 이용하면 주차 걱정도 없고 사고 위험도 줄어들어요.\n앞으로는 차량 대신 대중교통을 더 이용할 계획이에요.",
    question: "이 사람은 앞으로 어떻게 하려고 합니까?",
    options: ["대중교통을 더 이용한다", "차를 더 많이 산다", "출퇴근 시간에만 이동한다", "약속을 안 잡는다"],
    correctAnswer: 0,
    translations: { en: { question: "What does this person plan to do going forward?", explanation: "The passage says they plan to use public transportation more instead of a car, so the correct answer is 대중교통을 더 이용한다." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L4-S6-WR01",
    type: "keyword-writing",
    prompt: { en: "Write one sentence using all of the following words." },
    keywords: ["교통", "문제", "대중교통", "줄이다"],
    sampleAnswer: { en: "대중교통을 이용하면 교통 문제를 줄일 수 있어요." },
    explanation: { en: "Combine 교통 and 문제 as the topic, 대중교통 as the method, and 줄이다 as the result." },
  },
  {
    id: "L4-S6-WR02",
    type: "short-response",
    prompt: {
      en: "Write about 5 sentences on ways to reduce a city's traffic problems.\nStructure: problem → cause → solution 1 → solution 2 → conclusion.",
    },
    keywords: ["교통체증", "차량 증가", "대중교통", "확대"],
    sampleAnswer: {
      en: "요즘 시내에서는 교통체증이 큰 문제가 되고 있어요. 이 문제는 주로 차량 증가에 의해 발생해요. 이를 해결하려면 첫째, 대중교통 노선을 확대해야 해요. 둘째, 일부 지역에서는 차량 운행을 제한하는 것도 필요해요. 이런 방법들을 함께 실천하면 도로가 더 원활해질 거예요.",
    },
    explanation: { en: "5 sentences following problem → cause → solution 1 → solution 2 → conclusion is enough at this stage." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L4-S6-P01", type: "vocabulary", question: '"교통체증"의 뜻은 무엇입니까?', options: ["Public transportation", "Traffic congestion", "Parking", "Accident"], correctAnswer: 1, explanation: { en: "교통체증 means traffic congestion." } },
  { id: "L4-S6-P02", type: "vocabulary", question: '"확대"의 뜻은 무엇입니까?', options: ["Decrease", "Restriction", "Expansion", "Operation"], correctAnswer: 2, explanation: { en: "확대 means expansion." } },
  { id: "L4-S6-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n많은 교통 문제가 차량 증가______ 발생합니다.", options: ["에 의해", "는 대신에", "는 김에", "기 나름으로"], correctAnswer: 0, explanation: { en: "-에 의해 names the cause: 증가에 의해." } },
  { id: "L4-S6-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n길이 막혀서 결국 약속 시간에 늦______.", options: ["고 말았어요", "는 대신이에요", "기 나름이에요", "는 반면이에요"], correctAnswer: 0, explanation: { en: "-고 말다 shows a regrettable final result: 늦고 말았어요." } },
  { id: "L4-S6-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n출퇴근 시간에는 지하철이 너무 ______.", options: ["원활해요", "붐벼요", "제한돼요", "운영돼요"], correctAnswer: 1, explanation: { en: "붐비다 (to be crowded) fits describing a packed subway." } },
  { id: "L4-S6-P06", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n차량 운행을 ______ 도로가 더 원활해졌어요.", options: ["제한해서", "증가해서", "운영해서", "감소해서"], correctAnswer: 0, explanation: { en: "제한하다 (to restrict) fits limiting vehicle operation." } },
  { id: "L4-S6-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n새로운 지하철 ______이/가 생겨서 편리해졌어요.", options: ["노선", "사고", "이동", "제한"], correctAnswer: 0, explanation: { en: "노선 (route/line) fits a new subway line." } },
  { id: "L4-S6-P08", type: "listening", audioText: "많은 교통 문제가 차량 증가에 의해 발생합니다. 그래서 시에서는 대중교통 노선을 확대하려고 합니다.", question: "시에서 하려는 것은 무엇입니까?", options: ["차량을 더 팔려고 한다", "주차장을 없애려고 한다", "대중교통 노선을 확대하려고 한다", "도로를 더 만들려고 한다"], correctAnswer: 2, explanation: { en: "The sentence says the city wants to expand public transportation routes, so the answer is 대중교통 노선을 확대하려고 한다." } },
  { id: "L4-S6-P09", type: "listening", audioText: "길이 너무 막혀서 저는 결국 약속 시간에 늦고 말았어요.", question: "이 사람은 어떻게 됐습니까?", options: ["약속을 취소했다", "버스를 잘 탔다", "일찍 도착했다", "약속 시간에 늦고 말았다"], correctAnswer: 3, explanation: { en: "The sentence says they ended up being late, so the answer is 약속 시간에 늦고 말았다." } },
  { id: "L4-S6-P10", type: "reading", passage: "요즘 시내에서는 교통체증이 큰 문제가 되고 있어요. 이 문제는 주로 차량 증가에 의해 발생해요.", question: "시내 교통체증의 주요 원인은 무엇입니까?", options: ["날씨", "도로 공사", "차량 증가", "대중교통 확대"], correctAnswer: 2, explanation: { en: "The passage says it occurs mainly due to increasing vehicles, so the answer is 차량 증가." } },
  { id: "L4-S6-P11", type: "reading", passage: "대중교통을 이용하면 주차 걱정도 없고 사고 위험도 줄어들어요. 앞으로는 차량 대신 대중교통을 더 이용할 계획이에요.", question: "이 사람은 앞으로 어떻게 하려고 합니까?", options: ["차를 더 많이 산다", "약속을 안 잡는다", "출퇴근 시간에만 이동한다", "대중교통을 더 이용한다"], correctAnswer: 3, explanation: { en: "The passage says they plan to use public transportation more, so the answer is 대중교통을 더 이용한다." } },
  { id: "L4-S6-P12", type: "sentence", question: "다음 중 자연스러운 문장은?", options: ["버스를 놓쳐서 한 시간을 기다리 말았어요.", "버스를 놓쳐서 한 시간을 기다리고 말았어요.", "버스를 놓쳐서 한 시간을 기다려서 말았어요.", "버스를 놓쳐서 한 시간을 기다린 말았어요."], correctAnswer: 1, explanation: { en: "-고 말다 attaches to the verb stem: 기다리고 말았어요." } },
];

export const STEP_4_6: StepContent = {
  level: 4,
  step: 6,
  title: "교통과 도시 문제 (Traffic and City Problems)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
