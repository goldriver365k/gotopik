// TOPIK 3 STEP 16 — TOPIK 3 Review (TOPIK 3 종합복습).
// Comprehensive review STEP, same role as TOPIK 1 STEP 12 / TOPIK 2
// STEP 14: 0 new words, no new grammar, heavier Practice weighting, and
// a Writing summary. Every word below is already "new" somewhere in
// TOPIK 1-3 (see the file comment next to each) and is recorded here as
// an independent Word object with status "review" — no ID is reused,
// and no existing STEP file is modified.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  // Experience (STEP 1)
  { id: "L3-S16-W01", korean: "경험", partOfSpeech: "noun", translations: { en: "experience" }, example: "좋은 경험이었어요.", exampleTranslations: { en: "It was a good experience." }, audioUrl: null, status: "review" },
  { id: "L3-S16-W02", korean: "기억", partOfSpeech: "noun", translations: { en: "memory" }, example: "그 여행은 좋은 기억이에요.", exampleTranslations: { en: "That trip is a good memory." }, audioUrl: null, status: "review" },
  // Plans and goals (STEP 2)
  { id: "L3-S16-W03", korean: "목표", partOfSpeech: "noun", translations: { en: "goal" }, example: "저는 새로운 목표가 있어요.", exampleTranslations: { en: "I have a new goal." }, audioUrl: null, status: "review" },
  { id: "L3-S16-W04", korean: "계획", partOfSpeech: "noun", translations: { en: "plan" }, example: "이번 달 계획을 세웠어요.", exampleTranslations: { en: "I set a plan for this month." }, audioUrl: null, status: "review" },
  { id: "L3-S16-W05", korean: "노력하다", partOfSpeech: "verb", translations: { en: "to make an effort" }, example: "목표를 위해 노력해요.", exampleTranslations: { en: "I make an effort for my goal." }, audioUrl: null, status: "review" },
  // Reasons and results (STEP 3)
  { id: "L3-S16-W06", korean: "이유", partOfSpeech: "noun", translations: { en: "reason" }, example: "늦은 이유를 말했어요.", exampleTranslations: { en: "I explained the reason I was late." }, audioUrl: null, status: "review" },
  { id: "L3-S16-W07", korean: "결과", partOfSpeech: "noun", translations: { en: "result" }, example: "좋은 결과가 나왔어요.", exampleTranslations: { en: "A good result came out." }, audioUrl: null, status: "review" },
  // Comparison and choice (STEP 4)
  { id: "L3-S16-W08", korean: "장점", partOfSpeech: "noun", translations: { en: "advantage" }, example: "이 방법의 장점이에요.", exampleTranslations: { en: "This is the method's advantage." }, audioUrl: null, status: "review" },
  { id: "L3-S16-W09", korean: "단점", partOfSpeech: "noun", translations: { en: "disadvantage" }, example: "단점도 있어요.", exampleTranslations: { en: "There are disadvantages too." }, audioUrl: null, status: "review" },
  { id: "L3-S16-W10", korean: "차이", partOfSpeech: "noun", translations: { en: "difference" }, example: "가격 차이가 커요.", exampleTranslations: { en: "The price difference is big." }, audioUrl: null, status: "review" },
  // Problems and solutions (STEP 5)
  { id: "L3-S16-W11", korean: "해결", partOfSpeech: "noun", translations: { en: "solution" }, example: "빠른 해결이 필요해요.", exampleTranslations: { en: "A quick solution is needed." }, audioUrl: null, status: "review" },
  { id: "L3-S16-W12", korean: "방법", partOfSpeech: "noun", translations: { en: "method" }, example: "해결 방법을 찾았어요.", exampleTranslations: { en: "I found a solution method." }, audioUrl: null, status: "review" },
  // Health (STEP 6)
  { id: "L3-S16-W13", korean: "생활습관", partOfSpeech: "noun", translations: { en: "lifestyle habit" }, example: "좋은 생활습관을 만들어요.", exampleTranslations: { en: "I build good lifestyle habits." }, audioUrl: null, status: "review" },
  { id: "L3-S16-W14", korean: "관리하다", partOfSpeech: "verb", translations: { en: "to manage" }, example: "건강을 관리해요.", exampleTranslations: { en: "I manage my health." }, audioUrl: null, status: "review" },
  // School (STEP 7)
  { id: "L3-S16-W15", korean: "복습", partOfSpeech: "noun", translations: { en: "review (studying)" }, example: "매일 복습을 해요.", exampleTranslations: { en: "I do review every day." }, audioUrl: null, status: "review" },
  { id: "L3-S16-W16", korean: "집중", partOfSpeech: "noun", translations: { en: "concentration" }, example: "집중이 잘 안 돼요.", exampleTranslations: { en: "I can't concentrate well." }, audioUrl: null, status: "review" },
  // Work (STEP 8)
  { id: "L3-S16-W17", korean: "업무", partOfSpeech: "noun", translations: { en: "work / duties" }, example: "오늘 업무가 많아요.", exampleTranslations: { en: "I have a lot of work today." }, audioUrl: null, status: "review" },
  { id: "L3-S16-W18", korean: "회의", partOfSpeech: "noun", translations: { en: "meeting" }, example: "내일 회의가 있어요.", exampleTranslations: { en: "There's a meeting tomorrow." }, audioUrl: null, status: "review" },
  // Transit and city life (STEP 9)
  { id: "L3-S16-W19", korean: "교통", partOfSpeech: "noun", translations: { en: "traffic / transportation" }, example: "이 지역은 교통이 편리해요.", exampleTranslations: { en: "This area has convenient transportation." }, audioUrl: null, status: "review" },
  { id: "L3-S16-W20", korean: "혼잡", partOfSpeech: "noun", translations: { en: "congestion" }, example: "출근 시간에는 혼잡이 심해요.", exampleTranslations: { en: "Congestion is bad during rush hour." }, audioUrl: null, status: "review" },
  // Travel and regions (STEP 10)
  { id: "L3-S16-W21", korean: "지역", partOfSpeech: "noun", translations: { en: "region / area" }, example: "이 지역은 경치가 좋아요.", exampleTranslations: { en: "This region has good scenery." }, audioUrl: null, status: "review" },
  { id: "L3-S16-W22", korean: "추천하다", partOfSpeech: "verb", translations: { en: "to recommend" }, example: "이 장소를 추천해요.", exampleTranslations: { en: "I recommend this place." }, audioUrl: null, status: "review" },
  // Cultural differences (STEP 11)
  { id: "L3-S16-W23", korean: "문화", partOfSpeech: "noun", translations: { en: "culture" }, example: "다른 문화를 배우는 게 재미있어요.", exampleTranslations: { en: "Learning about a different culture is fun." }, audioUrl: null, status: "review" },
  { id: "L3-S16-W24", korean: "적응하다", partOfSpeech: "verb", translations: { en: "to adapt" }, example: "새 생활에 적응했어요.", exampleTranslations: { en: "I adapted to the new life." }, audioUrl: null, status: "review" },
  // Spending (STEP 12)
  { id: "L3-S16-W25", korean: "절약", partOfSpeech: "noun", translations: { en: "saving / frugality" }, example: "절약이 중요해요.", exampleTranslations: { en: "Saving is important." }, audioUrl: null, status: "review" },
  { id: "L3-S16-W26", korean: "소비", partOfSpeech: "noun", translations: { en: "consumption / spending" }, example: "계획적으로 소비해요.", exampleTranslations: { en: "I spend in a planned way." }, audioUrl: null, status: "review" },
  // Media and information (STEP 13)
  { id: "L3-S16-W27", korean: "정보", partOfSpeech: "noun", translations: { en: "information" }, example: "유용한 정보를 얻었어요.", exampleTranslations: { en: "I got useful information." }, audioUrl: null, status: "review" },
  { id: "L3-S16-W28", korean: "확인하다", partOfSpeech: "verb", translations: { en: "to check / confirm" }, example: "정보를 확인해요.", exampleTranslations: { en: "I check the information." }, audioUrl: null, status: "review" },
  // Environment (STEP 14)
  { id: "L3-S16-W29", korean: "재활용", partOfSpeech: "noun", translations: { en: "recycling" }, example: "재활용을 열심히 해요.", exampleTranslations: { en: "I recycle diligently." }, audioUrl: null, status: "review" },
  { id: "L3-S16-W30", korean: "보호하다", partOfSpeech: "verb", translations: { en: "to protect" }, example: "환경을 보호해요.", exampleTranslations: { en: "I protect the environment." }, audioUrl: null, status: "review" },
  // Opinions (STEP 15)
  { id: "L3-S16-W31", korean: "의견", partOfSpeech: "noun", translations: { en: "opinion" }, example: "제 의견을 말씀드릴게요.", exampleTranslations: { en: "Let me tell you my opinion." }, audioUrl: null, status: "review" },
  { id: "L3-S16-W32", korean: "동의하다", partOfSpeech: "verb", translations: { en: "to agree" }, example: "저도 그 의견에 동의해요.", exampleTranslations: { en: "I also agree with that opinion." }, audioUrl: null, status: "review" },
];

// Combines TOPIK 3 grammar patterns from across STEP 1-15 in one natural
// sentence each — no new vocabulary or grammar introduced.
const SENTENCES: Sentence[] = [
  { id: "L3-S16-S01", korean: "지난달에 제주도에 가 본 적이 있어요.", translations: { en: "I've been to Jeju Island last month." }, keyExpression: "-아/어 본 적이 있다", relatedWords: ["지난"], audioUrl: null },
  { id: "L3-S16-S02", korean: "건강을 위해서 매일 운동하려고 해요.", translations: { en: "I intend to exercise every day for my health." }, keyExpression: "-(으)려고 하다", relatedWords: ["건강", "운동"], audioUrl: null },
  { id: "L3-S16-S03", korean: "비가 많이 왔기 때문에 행사가 취소됐어요.", translations: { en: "The event was canceled because it rained a lot." }, keyExpression: "-기 때문에", relatedWords: ["행사", "취소하다"], audioUrl: null },
  { id: "L3-S16-S04", korean: "버스보다 지하철을 이용하는 것이 더 편리해요.", translations: { en: "Using the subway is more convenient than the bus." }, keyExpression: "-는 것이 더", relatedWords: ["버스", "지하철", "이용하다", "편리하다"], audioUrl: null },
  { id: "L3-S16-S05", korean: "문제가 생기면 직원에게 연락하는 게 좋아요.", translations: { en: "If a problem comes up, it's good to contact the staff." }, keyExpression: "-는 게 좋다", relatedWords: ["문제", "생기다", "직원", "연락하다"], audioUrl: null },
  { id: "L3-S16-S06", korean: "시험을 준비하는 동안 매일 복습했어요.", translations: { en: "While preparing for the exam, I reviewed every day." }, keyExpression: "-는 동안", relatedWords: ["시험", "준비하다", "복습"], audioUrl: null },
  { id: "L3-S16-S07", korean: "인터넷이 편리한 반면에 잘못된 정보도 있을 수 있어요.", translations: { en: "The internet is convenient, but on the other hand, there can be incorrect information too." }, keyExpression: "-는 반면에", relatedWords: ["인터넷", "편리하다", "정보"], audioUrl: null },
  { id: "L3-S16-S08", korean: "환경을 보호하기 위해서 쓰레기를 줄여야 한다고 생각해요.", translations: { en: "I think we should reduce trash in order to protect the environment." }, keyExpression: "-다고 생각하다", relatedWords: ["환경", "보호하다", "쓰레기", "줄이다"], audioUrl: null },
];

// Short review format only, following the same pattern as TOPIK 1 STEP 12
// and TOPIK 2 STEP 14: pattern → core meaning → one example, no new
// grammar introduced. A few entries note how their pattern compares to a
// commonly confused one, per this stage's request — no new comparison UI.
const GRAMMAR: Grammar[] = [
  { id: "L3-S16-G01", pattern: "-아/어 본 적이 있다 (복습)", meanings: { en: "have done (something) before" }, explanations: { en: "You have had the experience of doing something." }, examples: [{ korean: "제주도에 가 본 적이 있어요.", translations: { en: "I've been to Jeju Island before." } }] },
  { id: "L3-S16-G02", pattern: "-(으)려고 하다 (복습)", meanings: { en: "to intend to / plan to" }, explanations: { en: "Compare with -기로 하다: -(으)려고 하다 is an intention you're considering, while -기로 하다 is a decision already settled." }, examples: [{ korean: "매일 운동하려고 해요.", translations: { en: "I intend to exercise every day." } }] },
  { id: "L3-S16-G03", pattern: "-기 위해서 (복습)", meanings: { en: "in order to" }, explanations: { en: "States the purpose behind an action." }, examples: [{ korean: "건강을 위해서 운동해요.", translations: { en: "I exercise for my health." } }] },
  { id: "L3-S16-G04", pattern: "-기 때문에 (복습)", meanings: { en: "because (a clear, direct reason)" }, explanations: { en: "Compare with -아서/어서: -기 때문에 states a reason more directly and can end a clause on its own, while -아서/어서 is the everyday choice and also connects two actions in sequence." }, examples: [{ korean: "비가 왔기 때문에 취소됐어요.", translations: { en: "It was canceled because it rained." } }] },
  { id: "L3-S16-G05", pattern: "-(으)면 (복습)", meanings: { en: "if / when" }, explanations: { en: "States a condition — if that happens, the following clause follows." }, examples: [{ korean: "문제가 생기면 연락하세요.", translations: { en: "If a problem comes up, contact me." } }] },
  { id: "L3-S16-G06", pattern: "-는 게 좋다 (복습)", meanings: { en: "it's better to / it would be good to" }, explanations: { en: "A gentle suggestion or piece of advice." }, examples: [{ korean: "직원에게 물어보는 게 좋아요.", translations: { en: "It's good to ask the staff." } }] },
  { id: "L3-S16-G07", pattern: "-도록 (복습)", meanings: { en: "so that / in order to" }, explanations: { en: "Doing something so that a certain result happens." }, examples: [{ korean: "건강하도록 운동해요.", translations: { en: "I exercise so that I stay healthy." } }] },
  { id: "L3-S16-G08", pattern: "-기 쉽다/어렵다 (복습)", meanings: { en: "easy/hard to (do something)" }, explanations: { en: "Describes how easy or hard an action is." }, examples: [{ korean: "이 단어는 외우기 어려워요.", translations: { en: "This word is hard to memorize." } }] },
  { id: "L3-S16-G09", pattern: "-기로 하다 (복습)", meanings: { en: "to decide to / agree to" }, explanations: { en: "A settled decision — see -(으)려고 하다 above for the comparison." }, examples: [{ korean: "내일 회의를 하기로 했어요.", translations: { en: "We decided to have a meeting tomorrow." } }] },
  { id: "L3-S16-G10", pattern: "-는데 (복습)", meanings: { en: "but / and (background before a comment)" }, explanations: { en: "Gives background before adding a related comment or mild contrast." }, examples: [{ korean: "버스가 편리한데 사람이 많아요.", translations: { en: "The bus is convenient, but crowded." } }] },
  { id: "L3-S16-G11", pattern: "-는 반면에 (복습)", meanings: { en: "while, on the other hand" }, explanations: { en: "Compare with -보다: -보다 is a simple comparison between two things, while -는 반면에 contrasts two clearly opposite sides of the same situation." }, examples: [{ korean: "편리한 반면에 복잡해요.", translations: { en: "It's convenient, but on the other hand, it's complicated." } }] },
  { id: "L3-S16-G12", pattern: "-(으)면서 (복습)", meanings: { en: "while (doing two things at once)" }, explanations: { en: "Two actions happen at the same time, done by the same person." }, examples: [{ korean: "음악을 들으면서 걸었어요.", translations: { en: "I walked while listening to music." } }] },
  { id: "L3-S16-G13", pattern: "-에 비해서 (복습)", meanings: { en: "compared to" }, explanations: { en: "Compares one thing against another named source." }, examples: [{ korean: "도시에 비해서 시골은 조용해요.", translations: { en: "Compared to the city, the countryside is quiet." } }] },
  { id: "L3-S16-G14", pattern: "-는 편이다 (복습)", meanings: { en: "tend to be / relatively" }, explanations: { en: "A general tendency rather than an absolute fact." }, examples: [{ korean: "일찍 일어나는 편이에요.", translations: { en: "I tend to wake up early." } }] },
  { id: "L3-S16-G15", pattern: "-기보다는 (복습)", meanings: { en: "rather than (doing something)" }, explanations: { en: "One option is preferred over another." }, examples: [{ korean: "택시보다는 지하철을 타요.", translations: { en: "Rather than a taxi, I take the subway." } }] },
  { id: "L3-S16-G16", pattern: "-다고 생각하다 (복습)", meanings: { en: "to think that" }, explanations: { en: "States your own opinion or thought." }, examples: [{ korean: "인터넷이 편리하다고 생각해요.", translations: { en: "I think the internet is convenient." } }] },
  { id: "L3-S16-G17", pattern: "-에 따르면 (복습)", meanings: { en: "according to" }, explanations: { en: "Introduces information reported from a named source." }, examples: [{ korean: "뉴스에 따르면 내일 비가 와요.", translations: { en: "According to the news, it will rain tomorrow." } }] },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L3-S16-L01",
    audioText: "가: 제주도에 가 본 적이 있어요? 나: 네, 작년에 가 봤어요. 이번에 또 가려고 계획하고 있어요.",
    audioUrl: null,
    question: "이 사람은 왜 제주도에 또 가려고 합니까?",
    options: ["다시 가고 싶어서 계획하고 있어요", "일 때문에 가야 해서", "친구가 불러서", "처음 가 보려고"],
    correctAnswer: 0,
    translations: { en: { question: "Why does this person plan to go to Jeju again?", explanation: 'The reply says they are planning to go again, so the correct answer is 다시 가고 싶어서 계획하고 있어요.' } },
  },
  {
    id: "L3-S16-L02",
    audioText: "컴퓨터에 갑자기 문제가 생겼어요. 그래서 직원에게 연락해서 도움을 요청했어요. 다행히 금방 해결됐어요.",
    audioUrl: null,
    question: "문제는 어떻게 해결됐습니까?",
    options: ["직원에게 연락해서 도움을 받아서", "새 컴퓨터를 사서", "혼자 고쳐서", "포기해서"],
    correctAnswer: 1,
    translations: { en: { question: "How was the problem resolved?", explanation: "The sentence says they contacted staff and got help, so the correct answer is 직원에게 연락해서 도움을 받아서." } },
  },
  {
    id: "L3-S16-L03",
    audioText: "안내 말씀드립니다. 내일 회의는 오전 열 시에서 오후 두 시로 변경됐습니다. 회의 자료는 미리 확인해 주시기 바랍니다.",
    audioUrl: null,
    question: "회의 시간은 어떻게 변경됐습니까?",
    options: ["오전 열 시에서 오후 두 시로", "오후 두 시에서 오전 열 시로", "취소됐어요", "다음 주로 연기됐어요"],
    correctAnswer: 2,
    translations: { en: { question: "How was the meeting time changed?", explanation: "The announcement says it was changed from 10am to 2pm, so the correct answer is 오전 열 시에서 오후 두 시로." } },
  },
  {
    id: "L3-S16-L04",
    audioText: "저는 대중교통을 이용하는 것이 좋다고 생각해요. 환경에도 좋고 비용도 아낄 수 있기 때문이에요.",
    audioUrl: null,
    question: "이 사람은 왜 대중교통이 좋다고 생각합니까?",
    options: ["환경에 좋고 비용을 아낄 수 있어서", "더 빨라서", "더 편해서", "친구들이 이용해서"],
    correctAnswer: 3,
    translations: { en: { question: "Why does this person think public transportation is good?", explanation: "The sentence says it's good for the environment and saves cost, so the correct answer is 환경에 좋고 비용을 아낄 수 있어서." } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L3-S16-R01",
    passage:
      "공지: 이번 주말부터 도서관 운영 시간이 변경됩니다.\n평일에는 아홉 시부터 여덟 시까지 이용할 수 있습니다.\n주말에는 열 시부터 여섯 시까지 운영합니다.\n이용에 참고하시기 바랍니다.",
    question: "주말 도서관 운영 시간은 언제까지입니까?",
    options: ["아홉 시", "여덟 시", "여섯 시", "열 시"],
    correctAnswer: 2,
    translations: { en: { question: "Until when does the library operate on weekends?", explanation: "The notice says until six o'clock on weekends, so the correct answer is 여섯 시." } },
  },
  {
    id: "L3-S16-R02",
    passage:
      "지난주에 세탁기가 갑자기 고장났어요.\n먼저 원인을 확인했더니 오래된 부품 때문이었어요.\n수리 센터에 요청해서 부품을 새것으로 바꿨어요.\n지금은 문제없이 잘 사용하고 있어요.",
    question: "세탁기가 고장난 원인은 무엇이었습니까?",
    options: ["오래된 부품", "전기 문제", "물 부족", "사용자 실수"],
    correctAnswer: 1,
    translations: { en: { question: "What was the cause of the washing machine breaking down?", explanation: "The passage says it was because of an old part, so the correct answer is 오래된 부품." } },
  },
  {
    id: "L3-S16-R03",
    passage:
      "요즘 저는 생활비를 아끼기 위해 몇 가지를 실천하고 있어요.\n먼저 필요 없는 물건은 충동적으로 사지 않으려고 해요.\n또 물건을 살 때는 가격을 비교하고 나서 구매해요.\n이렇게 절약한 돈은 조금씩 저축하고 있어요.",
    question: "이 사람은 생활비를 아끼기 위해 무엇을 합니까?",
    options: ["매일 외식해요", "물건을 더 많이 사요", "저축을 그만해요", "충동구매를 피하고 가격을 비교해요"],
    correctAnswer: 3,
    translations: { en: { question: "What does this person do to save on living expenses?", explanation: "The passage says they avoid impulse buying and compare prices, so the correct answer is 충동구매를 피하고 가격을 비교해요." } },
  },
  {
    id: "L3-S16-R04",
    passage:
      "저는 온라인 수업이 필요하다고 생각해요.\n첫 번째 이유는 시간과 장소에 상관없이 들을 수 있기 때문이에요.\n두 번째 이유는 원하는 내용을 다시 볼 수 있다는 점이에요.\n물론 직접 만나는 수업의 장점도 있지만, 저는 온라인 수업의 장점이 더 크다고 생각해요.\n그래서 저는 앞으로도 온라인 수업을 계속 이용하려고 해요.",
    question: "이 글의 중심 생각은 무엇입니까?",
    options: ["온라인 수업이 필요하고 장점이 크다", "온라인 수업은 문제가 많다", "직접 만나는 수업만 좋다", "수업은 필요 없다"],
    correctAnswer: 0,
    translations: { en: { question: "What is the main idea of this passage?", explanation: "The passage argues online classes are needed and their advantages are bigger, so the correct answer is 온라인 수업이 필요하고 장점이 크다." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L3-S16-WR01",
    type: "sentence-order",
    prompt: {
      en: "Put these two fragments in the correct order to make one reason + result sentence, then write the full sentence: 「행사가 취소됐어요」 / 「비가 많이 왔기 때문에」",
    },
    keywords: ["비가 많이 왔기 때문에", "행사가 취소됐어요"],
    sampleAnswer: { en: "비가 많이 왔기 때문에 행사가 취소됐어요." },
    explanation: { en: "The reason clause with -기 때문에 comes first, and the result comes second." },
  },
  {
    id: "L3-S16-WR02",
    type: "keyword-writing",
    prompt: { en: "Write 2-3 sentences using all of the following words." },
    keywords: ["목표", "노력하다", "위해서"],
    sampleAnswer: { en: "저는 새로운 목표를 세웠어요. 목표를 이루기 위해서 매일 노력하고 있어요." },
    explanation: { en: "-기 위해서 attaches to a verb stem to show purpose: 이루기 위해서, and 노력하다 fits naturally after it." },
  },
  {
    id: "L3-S16-WR03",
    type: "short-response",
    prompt: {
      en: "Write 4-5 sentences about what you think is important for a healthy life. Structure: 1) my opinion, 2) reason 1, 3) explanation/example, 4) reason 2 or more explanation, 5) closing.",
    },
    keywords: ["건강", "생각하다", "이유", "그래서"],
    sampleAnswer: {
      en: "저는 건강한 생활을 위해 규칙적인 생활습관이 가장 중요하다고 생각해요. 첫 번째 이유는 충분한 수면과 규칙적인 식사가 몸의 상태를 안정시켜 주기 때문이에요. 예를 들어 매일 같은 시간에 자고 일어나면 피로가 덜 쌓여요. 두 번째 이유는 꾸준한 운동이 스트레스를 줄이고 체력을 늘려 주기 때문이에요. 그래서 저는 앞으로도 규칙적인 생활습관을 실천하려고 해요.",
    },
    explanation: { en: "Not a long essay yet — 4-5 clear sentences following opinion → reason 1 → example → reason 2 → closing is enough at this stage." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L3-S16-P01", type: "vocabulary", question: '"경험"의 뜻은 무엇입니까?', options: ["Memory", "Effort", "Goal", "Experience"], correctAnswer: 3, explanation: { en: "경험 means experience." } },
  { id: "L3-S16-P02", type: "vocabulary", question: '"절약"의 뜻은 무엇입니까?', options: ["Waste", "Saving / frugality", "Spending", "Purchase"], correctAnswer: 1, explanation: { en: "절약 means saving/frugality." } },
  { id: "L3-S16-P03", type: "vocabulary", question: "다른 사람의 의견에 같은 생각이라고 말할 때 쓰는 말은?", options: ["반대하다", "동의하다", "주장하다", "판단하다"], correctAnswer: 1, explanation: { en: "동의하다 means to agree." } },
  { id: "L3-S16-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n제주도에 가 ______.", options: ["야 해요", "고 있어요", "본 적이 있어요", "지 마세요"], correctAnswer: 2, explanation: { en: "-아/어 본 적이 있다 shows a past experience: 가 본 적이 있어요." } },
  { id: "L3-S16-P05", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n버스보다 지하철을 이용하는 것이 ______.", options: ["편리한 반면에", "편리하기 때문에", "더 편리해요", "편리하기로 했어요"], correctAnswer: 2, explanation: { en: "-는 것이 더 compares two actions: 이용하는 것이 더 편리해요." } },
  { id: "L3-S16-P06", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n인터넷이 편리한 ______ 잘못된 정보도 있어요.", options: ["동안에", "때문에", "반면에", "김에"], correctAnswer: 2, explanation: { en: "-는 반면에 contrasts two sides: 편리한 반면에." } },
  { id: "L3-S16-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n시험을 준비하는 ______ 매일 복습했어요.", options: ["보다", "때문에", "반면에", "동안"], correctAnswer: 3, explanation: { en: "-는 동안 means \"while\": 준비하는 동안." } },
  { id: "L3-S16-P08", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n문제가 생기면 직원에게 ______ 게 좋아요.", options: ["연락하는 동안", "연락해서", "연락하기 때문에", "연락하는"], correctAnswer: 3, explanation: { en: "-는 게 좋다 gives advice: 연락하는 게 좋아요." } },
  { id: "L3-S16-P09", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n환경을 보호하기 위해서 쓰레기를 ______ 한다고 생각해요.", options: ["줄여야", "줄이고 나서", "줄이는 동안", "줄이기 위해서"], correctAnswer: 0, explanation: { en: "-아/어야 하다 states necessity: 줄여야 한다고 생각해요." } },
  { id: "L3-S16-P10", type: "listening", audioText: "저는 대중교통을 이용하는 것이 환경에 좋고 비용도 아낄 수 있어서 좋다고 생각해요.", question: "이 사람은 왜 대중교통이 좋다고 생각합니까?", options: ["더 빨라서", "환경에 좋고 비용을 아낄 수 있어서", "더 편해서", "친구들이 이용해서"], correctAnswer: 1, explanation: { en: 'The sentence says it\'s good for the environment and saves cost, so the answer is 환경에 좋고 비용을 아낄 수 있어서.' } },
  { id: "L3-S16-P11", type: "listening", audioText: "회의 자료는 미리 확인해 주시기 바랍니다.", question: "이 안내에서 부탁하는 것은 무엇입니까?", options: ["회의 자료를 미리 확인하기", "회의를 취소하기", "회의실을 예약하기", "회의에 늦게 오기"], correctAnswer: 0, explanation: { en: 'The announcement asks people to check the materials in advance, so the answer is 회의 자료를 미리 확인하기.' } },
  { id: "L3-S16-P12", type: "reading", passage: "세탁기가 고장난 원인은 오래된 부품이었어요. 부품을 새것으로 바꿔서 해결했어요.", question: "문제는 어떻게 해결됐습니까?", options: ["새 세탁기를 사서", "부품을 새것으로 바꿔서", "그냥 참아서", "수리를 포기해서"], correctAnswer: 1, explanation: { en: 'The passage says they replaced the part, so the answer is 부품을 새것으로 바꿔서.' } },
  { id: "L3-S16-P13", type: "reading", passage: "충동구매를 피하고 가격을 비교해서 생활비를 아껴요.", question: "이 사람은 생활비를 아끼기 위해 무엇을 합니까?", options: ["충동구매를 피하고 가격을 비교해요", "물건을 더 많이 사요", "저축을 그만해요", "매일 외식해요"], correctAnswer: 0, explanation: { en: 'The passage says they avoid impulse buying and compare prices, so the answer is 충동구매를 피하고 가격을 비교해요.' } },
  { id: "L3-S16-P14", type: "reading", passage: "온라인 수업은 시간과 장소에 상관없이 들을 수 있고 다시 볼 수 있어서 장점이 크다고 생각해요.", question: "이 글쓴이가 생각하는 온라인 수업의 장점이 아닌 것은 무엇입니까?", options: ["시간과 장소에 상관없이 들을 수 있다", "다시 볼 수 있다", "무료이다", "장점이 크다"], correctAnswer: 2, explanation: { en: "The passage doesn't mention it being free, so the correct answer (not an advantage mentioned) is 무료이다." } },
  { id: "L3-S16-P15", type: "sentence", question: "의견을 말할 때 마지막에 자연스럽게 쓸 수 있는 표현은?", options: ["그래서 저는 이렇게 생각해요", "그런데 잘 모르겠어요", "왜냐하면 궁금해요", "아마 아닐 거예요"], correctAnswer: 0, explanation: { en: "그래서 저는 이렇게 생각해요 (\"so this is what I think\") works well as a closing statement of opinion." } },
];

export const STEP_3_16: StepContent = {
  level: 3,
  step: 16,
  title: "TOPIK 3 Review",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
