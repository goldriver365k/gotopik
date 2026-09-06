// TOPIK 2 STEP 14 — TOPIK 2 Review (TOPIK 2 종합복습).
// Comprehensive review STEP, not a new exam engine. Every word below is
// already "new" somewhere in TOPIK 2 STEP 1-13 (see the file comment next
// to each) and is recorded here as an independent Word object with
// status "review" — no ID is reused, and no existing STEP file is
// modified. 0 new words are introduced in this STEP.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  // Daily life (STEP 1)
  { id: "L2-S14-W01", korean: "준비하다", partOfSpeech: "verb", translations: { en: "to prepare" }, example: "저는 아침마다 출근을 준비해요.", exampleTranslations: { en: "I get ready for work every morning." }, audioUrl: null, status: "review" },
  { id: "L2-S14-W02", korean: "도착하다", partOfSpeech: "verb", translations: { en: "to arrive" }, example: "기차가 곧 도착해요.", exampleTranslations: { en: "The train arrives soon." }, audioUrl: null, status: "review" },
  { id: "L2-S14-W03", korean: "자주", partOfSpeech: "noun", translations: { en: "often" }, example: "저는 공원에 자주 가요.", exampleTranslations: { en: "I often go to the park." }, audioUrl: null, status: "review" },
  // Hobbies (STEP 2)
  { id: "L2-S14-W04", korean: "취미", partOfSpeech: "noun", translations: { en: "hobby" }, example: "제 취미는 사진이에요.", exampleTranslations: { en: "My hobby is photography." }, audioUrl: null, status: "review" },
  { id: "L2-S14-W05", korean: "여행", partOfSpeech: "noun", translations: { en: "travel" }, example: "저는 여행을 자주 가요.", exampleTranslations: { en: "I travel often." }, audioUrl: null, status: "review" },
  { id: "L2-S14-W06", korean: "운동", partOfSpeech: "noun", translations: { en: "exercise" }, example: "저는 주말마다 운동을 해요.", exampleTranslations: { en: "I exercise every weekend." }, audioUrl: null, status: "review" },
  // People (STEP 3)
  { id: "L2-S14-W07", korean: "동료", partOfSpeech: "noun", translations: { en: "coworker" }, example: "동료하고 점심을 먹었어요.", exampleTranslations: { en: "I had lunch with my coworker." }, audioUrl: null, status: "review" },
  { id: "L2-S14-W08", korean: "초대하다", partOfSpeech: "verb", translations: { en: "to invite" }, example: "저는 동료를 집에 초대했어요.", exampleTranslations: { en: "I invited my coworker to my house." }, audioUrl: null, status: "review" },
  { id: "L2-S14-W09", korean: "연락하다", partOfSpeech: "verb", translations: { en: "to contact" }, example: "도착하면 연락하세요.", exampleTranslations: { en: "Please contact me when you arrive." }, audioUrl: null, status: "review" },
  // Home (STEP 4)
  { id: "L2-S14-W10", korean: "거실", partOfSpeech: "noun", translations: { en: "living room" }, example: "거실을 청소했어요.", exampleTranslations: { en: "I cleaned the living room." }, audioUrl: null, status: "review" },
  { id: "L2-S14-W11", korean: "청소하다", partOfSpeech: "verb", translations: { en: "to clean" }, example: "저는 주말마다 집을 청소해요.", exampleTranslations: { en: "I clean my house every weekend." }, audioUrl: null, status: "review" },
  // Transportation (STEP 5)
  { id: "L2-S14-W12", korean: "정류장", partOfSpeech: "noun", translations: { en: "bus stop" }, example: "정류장에서 버스를 기다려요.", exampleTranslations: { en: "I wait for the bus at the bus stop." }, audioUrl: null, status: "review" },
  { id: "L2-S14-W13", korean: "갈아타다", partOfSpeech: "verb", translations: { en: "to transfer" }, example: "여기에서 버스로 갈아타세요.", exampleTranslations: { en: "Please transfer to the bus here." }, audioUrl: null, status: "review" },
  // Travel (STEP 6)
  { id: "L2-S14-W14", korean: "예약하다", partOfSpeech: "verb", translations: { en: "to reserve" }, example: "숙소를 미리 예약했어요.", exampleTranslations: { en: "I reserved accommodation in advance." }, audioUrl: null, status: "review" },
  { id: "L2-S14-W15", korean: "숙소", partOfSpeech: "noun", translations: { en: "accommodation" }, example: "숙소가 역 근처예요.", exampleTranslations: { en: "The accommodation is near the station." }, audioUrl: null, status: "review" },
  // Shopping (STEP 7)
  { id: "L2-S14-W16", korean: "할인", partOfSpeech: "noun", translations: { en: "discount" }, example: "오늘은 할인을 해요.", exampleTranslations: { en: "There's a discount today." }, audioUrl: null, status: "review" },
  { id: "L2-S14-W17", korean: "교환하다", partOfSpeech: "verb", translations: { en: "to exchange" }, example: "작아서 교환하고 싶어요.", exampleTranslations: { en: "It's small, so I want to exchange it." }, audioUrl: null, status: "review" },
  // Cooking (STEP 8)
  { id: "L2-S14-W18", korean: "재료", partOfSpeech: "noun", translations: { en: "ingredient" }, example: "요리 재료를 준비했어요.", exampleTranslations: { en: "I prepared the cooking ingredients." }, audioUrl: null, status: "review" },
  { id: "L2-S14-W19", korean: "끓이다", partOfSpeech: "verb", translations: { en: "to boil" }, example: "물을 끓여서 요리해요.", exampleTranslations: { en: "I boil water to cook." }, audioUrl: null, status: "review" },
  // Health (STEP 9)
  { id: "L2-S14-W20", korean: "건강", partOfSpeech: "noun", translations: { en: "health" }, example: "건강을 위해서 운동해요.", exampleTranslations: { en: "I exercise for my health." }, audioUrl: null, status: "review" },
  { id: "L2-S14-W21", korean: "습관", partOfSpeech: "noun", translations: { en: "habit" }, example: "규칙적인 습관이 중요해요.", exampleTranslations: { en: "A regular habit is important." }, audioUrl: null, status: "review" },
  // School/Work (STEP 10)
  { id: "L2-S14-W22", korean: "회의", partOfSpeech: "noun", translations: { en: "meeting" }, example: "지금 회의를 하고 있어요.", exampleTranslations: { en: "We're having a meeting right now." }, audioUrl: null, status: "review" },
  { id: "L2-S14-W23", korean: "과제", partOfSpeech: "noun", translations: { en: "assignment" }, example: "과제를 제출해야 해요.", exampleTranslations: { en: "I have to submit the assignment." }, audioUrl: null, status: "review" },
  // Public services (STEP 11)
  { id: "L2-S14-W24", korean: "신청하다", partOfSpeech: "verb", translations: { en: "to apply" }, example: "여기에서 신청할 수 있어요.", exampleTranslations: { en: "You can apply here." }, audioUrl: null, status: "review" },
  { id: "L2-S14-W25", korean: "서류", partOfSpeech: "noun", translations: { en: "document" }, example: "서류를 작성해야 해요.", exampleTranslations: { en: "I have to fill out the document." }, audioUrl: null, status: "review" },
  // Culture and events (STEP 12)
  { id: "L2-S14-W26", korean: "축제", partOfSpeech: "noun", translations: { en: "festival" }, example: "축제에 참가해 봤어요.", exampleTranslations: { en: "I've participated in the festival before." }, audioUrl: null, status: "review" },
  { id: "L2-S14-W27", korean: "참가하다", partOfSpeech: "verb", translations: { en: "to participate" }, example: "행사에 참가하고 싶어요.", exampleTranslations: { en: "I want to participate in the event." }, audioUrl: null, status: "review" },
  // Notices (STEP 13)
  { id: "L2-S14-W28", korean: "기간", partOfSpeech: "noun", translations: { en: "period" }, example: "신청 기간을 확인하세요.", exampleTranslations: { en: "Please check the application period." }, audioUrl: null, status: "review" },
  { id: "L2-S14-W29", korean: "변경", partOfSpeech: "noun", translations: { en: "change" }, example: "일정 변경이 있어요.", exampleTranslations: { en: "There's a schedule change." }, audioUrl: null, status: "review" },
  { id: "L2-S14-W30", korean: "마감", partOfSpeech: "noun", translations: { en: "deadline" }, example: "신청 마감이 내일이에요.", exampleTranslations: { en: "The application deadline is tomorrow." }, audioUrl: null, status: "review" },
];

// Combines TOPIK 1 basics (같이, 가족, 먹다, 가다, 있다 …) with TOPIK 2
// grammar/vocabulary in one natural sentence each.
const SENTENCES: Sentence[] = [
  { id: "L2-S14-S01", korean: "어제 친구를 만나서 같이 저녁을 먹었어요.", translations: { en: "I met my friend yesterday and we ate dinner together." }, keyExpression: "-아서/어서", relatedWords: ["친구", "같이", "저녁", "먹다"], audioUrl: null },
  { id: "L2-S14-S02", korean: "주말에는 가족하고 여행을 갈 거예요.", translations: { en: "I'm going to travel with my family this weekend." }, keyExpression: "-(으)ㄹ 거예요", relatedWords: ["가족", "여행"], audioUrl: null },
  { id: "L2-S14-S03", korean: "지하철에서 내린 후에 버스로 갈아타세요.", translations: { en: "Please transfer to the bus after getting off the subway." }, keyExpression: "-(으)ㄴ 후에", relatedWords: ["지하철", "갈아타다"], audioUrl: null },
  { id: "L2-S14-S04", korean: "건강을 위해서 매일 운동해야 해요.", translations: { en: "You should exercise every day for your health." }, keyExpression: "-아/어야 하다", relatedWords: ["건강", "매일", "운동"], audioUrl: null },
  { id: "L2-S14-S05", korean: "이 가방이 저 가방보다 싸서 사고 싶어요.", translations: { en: "This bag is cheaper than that one, so I want to buy it." }, keyExpression: "-보다", relatedWords: ["가방", "싸다", "사다"], audioUrl: null },
  { id: "L2-S14-S06", korean: "지금 회사에서 회의를 하고 있어요.", translations: { en: "I'm having a meeting at the office right now." }, keyExpression: "-고 있다", relatedWords: ["회사", "회의"], audioUrl: null },
  { id: "L2-S14-S07", korean: "여기에서는 인터넷으로 신청할 수 있어요.", translations: { en: "You can apply online here." }, keyExpression: "-(으)ㄹ 수 있다", relatedWords: ["인터넷", "신청하다"], audioUrl: null },
  { id: "L2-S14-S08", korean: "비 때문에 행사 시간이 변경됐어요.", translations: { en: "The event time changed because of rain." }, keyExpression: "때문에", relatedWords: ["행사", "변경"], audioUrl: null },
];

// Short review format only: pattern → core meaning → one example.
// No new grammar points are introduced in this STEP.
const GRAMMAR: Grammar[] = [
  { id: "L2-S14-G01", pattern: "-았/었어요 (복습)", meanings: { en: "past tense — something already finished" }, explanations: { en: "Compare with -(으)ㄹ 거예요: -았/었어요 is for finished actions, -(으)ㄹ 거예요 is for future plans." }, examples: [{ korean: "어제 친구를 만났어요.", translations: { en: "I met my friend yesterday." } }] },
  { id: "L2-S14-G02", pattern: "-(으)ㄹ 거예요 (복습)", meanings: { en: "future tense — something planned" }, explanations: { en: "Use for things you will do, as opposed to -았/었어요 for things already done." }, examples: [{ korean: "주말에 여행을 갈 거예요.", translations: { en: "I'm going to travel this weekend." } }] },
  { id: "L2-S14-G03", pattern: "-고 (복습)", meanings: { en: "and (connecting actions)" }, explanations: { en: "Connects two actions or facts in order, with no strong cause-effect link." }, examples: [{ korean: "청소하고 요리해요.", translations: { en: "I clean and then cook." } }] },
  { id: "L2-S14-G04", pattern: "-아서/어서 (복습)", meanings: { en: "so / because (reason or sequence)" }, explanations: { en: "Connects a reason or an earlier action to what follows." }, examples: [{ korean: "친구를 만나서 저녁을 먹었어요.", translations: { en: "I met my friend, so we ate dinner." } }] },
  { id: "L2-S14-G05", pattern: "-(으)ㄴ 후에 (복습)", meanings: { en: "after doing something" }, explanations: { en: "Marks that one action happens after another finishes." }, examples: [{ korean: "도착한 후에 연락하세요.", translations: { en: "Please contact me after you arrive." } }] },
  { id: "L2-S14-G06", pattern: "-(으)려고 (복습)", meanings: { en: "in order to / intending to" }, explanations: { en: "Shows the intention behind an action." }, examples: [{ korean: "숙소를 예약하려고 전화했어요.", translations: { en: "I called in order to reserve accommodation." } }] },
  { id: "L2-S14-G07", pattern: "-보다 (복습)", meanings: { en: "than (comparison)" }, explanations: { en: "Marks the thing being compared against." }, examples: [{ korean: "이 가방이 저 가방보다 싸요.", translations: { en: "This bag is cheaper than that one." } }] },
  { id: "L2-S14-G08", pattern: "-아/어 보다 (복습)", meanings: { en: "to try doing something" }, explanations: { en: "Talks about trying or having tried an experience." }, examples: [{ korean: "축제에 참가해 봤어요.", translations: { en: "I've participated in the festival before." } }] },
  { id: "L2-S14-G09", pattern: "-아/어야 하다 (복습)", meanings: { en: "must / have to" }, explanations: { en: "Compare with -지 마세요: -아/어야 해요 is for what you should do, -지 마세요 is for what you should not do." }, examples: [{ korean: "매일 운동해야 해요.", translations: { en: "You have to exercise every day." } }] },
  { id: "L2-S14-G10", pattern: "-지 마세요 (복습)", meanings: { en: "please don't (negative command)" }, explanations: { en: "Tells someone not to do something, the opposite of -아/어야 해요." }, examples: [{ korean: "너무 늦게 자지 마세요.", translations: { en: "Please don't sleep too late." } }] },
  { id: "L2-S14-G11", pattern: "-고 있다 (복습)", meanings: { en: "to be doing (ongoing action)" }, explanations: { en: "Describes an action currently in progress." }, examples: [{ korean: "지금 회의를 하고 있어요.", translations: { en: "I'm having a meeting right now." } }] },
  { id: "L2-S14-G12", pattern: "-(으)ㄹ 수 있다/없다 (복습)", meanings: { en: "can / cannot" }, explanations: { en: "Shows whether something is possible or not." }, examples: [{ korean: "인터넷으로 신청할 수 있어요.", translations: { en: "You can apply online." } }] },
  { id: "L2-S14-G13", pattern: "때문에 (복습)", meanings: { en: "because of" }, explanations: { en: "Gives the reason for a problem or change, often unplanned." }, examples: [{ korean: "비 때문에 행사 시간이 변경됐어요.", translations: { en: "The event time changed because of rain." } }] },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L2-S14-L01",
    audioText: "가: 주말에 뭐 할 거예요? 나: 가족하고 여행을 갈 거예요.",
    audioUrl: null,
    question: "이 사람은 주말에 무엇을 할 겁니까?",
    options: ["집을 청소할 거예요", "가족하고 여행을 갈 거예요", "회의를 할 거예요", "숙소를 예약할 거예요"],
    correctAnswer: 1,
    translations: { en: { question: "What will this person do this weekend?", explanation: 'The answer says "travel with family," so the correct answer is 가족하고 여행을 갈 거예요.' } },
  },
  {
    id: "L2-S14-L02",
    audioText: "이 가방이 저 가방보다 싸요. 그런데 할인도 받을 수 있어요.",
    audioUrl: null,
    question: "이 가방은 어떻습니까?",
    options: ["더 비싸요", "더 싸고 할인도 받을 수 있어요", "교환할 수 없어요", "할인이 없어요"],
    correctAnswer: 1,
    translations: { en: { question: "What is this bag like?", explanation: "The sentence says it's cheaper and can get a discount, so the correct answer is 더 싸고 할인도 받을 수 있어요." } },
  },
  {
    id: "L2-S14-L03",
    audioText: "저는 지금 회사에서 회의를 하고 있어요. 회의가 끝난 후에 과제를 제출할 거예요.",
    audioUrl: null,
    question: "회의가 끝난 후에 무엇을 할 겁니까?",
    options: ["여행을 갈 거예요", "과제를 제출할 거예요", "숙소를 예약할 거예요", "축제에 참가할 거예요"],
    correctAnswer: 1,
    translations: { en: { question: "What will they do after the meeting ends?", explanation: "The sentence says they'll submit the assignment, so the correct answer is 과제를 제출할 거예요." } },
  },
  {
    id: "L2-S14-L04",
    audioText: "안내: 비 때문에 오늘 행사 시간이 변경됐습니다. 참가 신청 기간은 그대로입니다.",
    audioUrl: null,
    question: "무엇이 변경됐습니까?",
    options: ["신청 기간", "행사 시간", "행사 장소", "참가 인원"],
    correctAnswer: 1,
    translations: { en: { question: "What was changed?", explanation: "The notice says the event time changed, so the correct answer is 행사 시간." } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L2-S14-R01",
    passage: "메모: 도착하면 연락하세요.\n숙소 주소는 문자로 보낼게요.",
    question: "도착하면 무엇을 해야 합니까?",
    options: ["연락하기", "청소하기", "신청하기", "예약하기"],
    correctAnswer: 0,
    translations: { en: { question: "What should be done upon arrival?", explanation: "The memo says to contact them, so the correct answer is 연락하기." } },
  },
  {
    id: "L2-S14-R02",
    passage: "일정: 오전 아홉 시 회의, 오후 두 시 발표\n회의 자료는 미리 준비하세요.",
    question: "오후 두 시에는 무엇을 합니까?",
    options: ["회의", "발표", "청소", "여행"],
    correctAnswer: 1,
    translations: { en: { question: "What happens at two in the afternoon?", explanation: "The schedule says a presentation at two, so the correct answer is 발표." } },
  },
  {
    id: "L2-S14-R03",
    passage: "공지: 신청 기간은 이번 달 마감입니다.\n기간 안에 서류를 제출하지 않으면 참가가 불가능합니다.",
    question: "참가하려면 무엇을 해야 합니까?",
    options: ["할인을 받아야 해요", "기간 안에 서류를 제출해야 해요", "축제에 가야 해요", "동료에게 연락해야 해요"],
    correctAnswer: 1,
    translations: { en: { question: "What must be done to participate?", explanation: "The notice says the document must be submitted within the period, so the correct answer is 기간 안에 서류를 제출해야 해요." } },
  },
  {
    id: "L2-S14-R04",
    passage: "저는 취미로 여행을 자주 가요.\n지난주에는 동료를 초대해서 같이 여행을 갔어요.\n숙소를 미리 예약해서 편하게 쉬었어요.\n건강을 위해서 아침마다 운동도 했어요.\n정말 즐거운 여행이었어요.",
    question: "이 사람은 여행에서 무엇을 했습니까?",
    options: ["숙소 예약과 아침 운동", "서류 제출", "회의 참석", "물건 교환"],
    correctAnswer: 0,
    translations: { en: { question: "What did this person do on the trip?", explanation: "The passage mentions reserving accommodation and morning exercise, so the correct answer is 숙소 예약과 아침 운동." } },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L2-S14-P01", type: "vocabulary", question: '"습관"의 뜻은 무엇입니까?', options: ["Habit", "Meeting", "Discount", "Deadline"], correctAnswer: 0, explanation: { en: "습관 means habit." } },
  { id: "L2-S14-P02", type: "vocabulary", question: '"서류"의 뜻은 무엇입니까?', options: ["Festival", "Document", "Period", "Hobby"], correctAnswer: 1, explanation: { en: "서류 means document." } },
  { id: "L2-S14-P03", type: "vocabulary", question: '"마감"의 뜻은 무엇입니까?', options: ["Discount", "Ingredient", "Deadline", "Change"], correctAnswer: 2, explanation: { en: "마감 means deadline." } },
  { id: "L2-S14-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n어제 친구를 ______.", options: ["만나요", "만날 거예요", "만났어요", "만나고 있어요"], correctAnswer: 2, explanation: { en: "-았/었어요 marks a finished past action: 만났어요." } },
  { id: "L2-S14-P05", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n이 가방이 저 가방______ 싸요.", options: ["보다", "부터", "동안", "때문에"], correctAnswer: 0, explanation: { en: "-보다 marks comparison: 저 가방보다." } },
  { id: "L2-S14-P06", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n비 ______ 행사 시간이 변경됐어요.", options: ["보다", "동안", "때문에", "후에"], correctAnswer: 2, explanation: { en: "때문에 gives the reason: 비 때문에." } },
  { id: "L2-S14-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n건강을 위해서 매일 ______.", options: ["운동해야 해요", "운동하지 마세요", "운동했어요", "운동할 수 없어요"], correctAnswer: 0, explanation: { en: "-아/어야 하다 shows necessity: 운동해야 해요." } },
  { id: "L2-S14-P08", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n지하철에서 내린 ______ 버스로 갈아타세요.", options: ["후에", "동안에", "때문에", "보다"], correctAnswer: 0, explanation: { en: "-(으)ㄴ 후에 means \"after\": 내린 후에." } },
  { id: "L2-S14-P09", type: "sentence", question: "친구 생일에 어울리는 표현은?", options: ["생일을 축하해요", "생일을 청소해요", "생일을 교환해요", "생일을 접수해요"], correctAnswer: 0, explanation: { en: "생일을 축하해요 (\"happy birthday\") fits a birthday situation." } },
  { id: "L2-S14-P10", type: "listening", audioText: "지금 회사에서 회의를 하고 있어요.", question: "지금 무엇을 하고 있습니까?", options: ["회의", "여행", "청소", "운동"], correctAnswer: 0, explanation: { en: 'The sentence says "having a meeting," so the answer is 회의.' } },
  { id: "L2-S14-P11", type: "listening", audioText: "여기에서는 인터넷으로 신청할 수 있어요.", question: "어떻게 신청할 수 있습니까?", options: ["전화로", "방문해서", "인터넷으로", "우편으로"], correctAnswer: 2, explanation: { en: 'The sentence says "online," so the answer is 인터넷으로.' } },
  { id: "L2-S14-P12", type: "reading", passage: "숙소를 미리 예약해서 편하게 쉬었어요.", question: "이 사람은 숙소를 어떻게 했습니까?", options: ["미리 예약했어요", "취소했어요", "청소했어요", "교환했어요"], correctAnswer: 0, explanation: { en: 'The passage says "reserved in advance," so the answer is 미리 예약했어요.' } },
  { id: "L2-S14-P13", type: "reading", passage: "동료를 초대해서 같이 저녁을 먹었어요.", question: "누구를 초대했습니까?", options: ["동료", "가족", "선생님", "의사"], correctAnswer: 0, explanation: { en: 'The passage says "invited a coworker," so the answer is 동료.' } },
  { id: "L2-S14-P14", type: "reading", passage: "공지: 신청 기간은 이번 달 마감입니다. 기간 안에 서류를 제출하세요.", question: "이 공지는 무엇에 대한 내용입니까?", options: ["신청 기간과 서류 제출", "할인 정보", "여행 일정", "요리 방법"], correctAnswer: 0, explanation: { en: 'The notice is about the application period and document submission, so the answer is 신청 기간과 서류 제출.' } },
  { id: "L2-S14-P15", type: "reading", passage: "저는 취미로 여행을 자주 가요. 건강을 위해서 아침마다 운동도 해요. 회사에서는 회의와 과제가 많아서 바빠요. 그래도 동료들과 자주 연락하면서 즐겁게 지내요.", question: "이 사람에 대해 맞는 것은?", options: ["여행을 싫어해요", "운동을 전혀 안 해요", "동료들과 자주 연락해요", "회사 일이 없어요"], correctAnswer: 2, explanation: { en: 'The passage says they often stay in touch with coworkers, so the answer is 동료들과 자주 연락해요.' } },
];

export const STEP_2_14: StepContent = {
  level: 2,
  step: 14,
  title: "TOPIK 2 Review",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  practice: PRACTICE,
};
