// TOPIK 1 STEP 12 — TOPIK 1 Review (TOPIK 1 종합복습).
// Not a normal new-content STEP: this recombines vocabulary and grammar
// already taught in STEP 1-11 to check readiness for TOPIK 2. All 21 words
// below are status "review" (0 new words) — each is a fresh Word object
// with its own L1-S12-W* id (this project's StepContent has no
// cross-file word-sharing mechanism), but the Korean text/meaning matches
// an existing STEP 1-11 word exactly, so nothing here is newly "taught".
// Grammar likewise reviews (does not add) STEP 1-11 patterns.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  // 사람 / 가족 (STEP 1-2)
  { id: "L1-S12-W01", korean: "가족", partOfSpeech: "noun", translations: { en: "family" }, example: "우리 가족은 네 명이에요.", exampleTranslations: { en: "Our family has four people." }, audioUrl: null, status: "review" },
  { id: "L1-S12-W02", korean: "친구", partOfSpeech: "noun", translations: { en: "friend" }, example: "친구를 만났어요.", exampleTranslations: { en: "I met my friend." }, audioUrl: null, status: "review" },
  // 학교 (STEP 1, 3)
  { id: "L1-S12-W03", korean: "학교", partOfSpeech: "noun", translations: { en: "school" }, example: "저는 학교에 가요.", exampleTranslations: { en: "I go to school." }, audioUrl: null, status: "review" },
  { id: "L1-S12-W04", korean: "선생님", partOfSpeech: "noun", translations: { en: "teacher" }, example: "선생님이 질문을 해요.", exampleTranslations: { en: "The teacher asks a question." }, audioUrl: null, status: "review" },
  { id: "L1-S12-W05", korean: "공부하다", partOfSpeech: "verb", translations: { en: "to study" }, example: "저는 교실에서 공부해요.", exampleTranslations: { en: "I study in the classroom." }, audioUrl: null, status: "review" },
  // 음식 (STEP 4)
  { id: "L1-S12-W06", korean: "밥", partOfSpeech: "noun", translations: { en: "rice / a meal" }, example: "저는 밥을 먹어요.", exampleTranslations: { en: "I eat a meal." }, audioUrl: null, status: "review" },
  { id: "L1-S12-W07", korean: "먹다", partOfSpeech: "verb", translations: { en: "to eat" }, example: "친구와 밥을 먹어요.", exampleTranslations: { en: "I eat a meal with my friend." }, audioUrl: null, status: "review" },
  { id: "L1-S12-W08", korean: "마시다", partOfSpeech: "verb", translations: { en: "to drink" }, example: "저는 물을 마셔요.", exampleTranslations: { en: "I drink water." }, audioUrl: null, status: "review" },
  // 시간 (STEP 5)
  { id: "L1-S12-W09", korean: "오늘", partOfSpeech: "noun", translations: { en: "today" }, example: "저는 오늘 학교에 가요.", exampleTranslations: { en: "I go to school today." }, audioUrl: null, status: "review" },
  { id: "L1-S12-W10", korean: "아침", partOfSpeech: "noun", translations: { en: "morning" }, example: "아침에 일어나요.", exampleTranslations: { en: "I wake up in the morning." }, audioUrl: null, status: "review" },
  { id: "L1-S12-W11", korean: "시간", partOfSpeech: "noun", translations: { en: "time" }, example: "시간이 없어요.", exampleTranslations: { en: "I don't have time." }, audioUrl: null, status: "review" },
  // 이동 (STEP 1, 6)
  { id: "L1-S12-W12", korean: "버스", partOfSpeech: "noun", translations: { en: "bus" }, example: "저는 버스를 타요.", exampleTranslations: { en: "I take the bus." }, audioUrl: null, status: "review" },
  { id: "L1-S12-W13", korean: "지하철", partOfSpeech: "noun", translations: { en: "subway" }, example: "저는 지하철을 타요.", exampleTranslations: { en: "I take the subway." }, audioUrl: null, status: "review" },
  { id: "L1-S12-W14", korean: "가다", partOfSpeech: "verb", translations: { en: "to go" }, example: "저는 회사에 가요.", exampleTranslations: { en: "I go to the company." }, audioUrl: null, status: "review" },
  // 쇼핑 (STEP 7)
  { id: "L1-S12-W15", korean: "가격", partOfSpeech: "noun", translations: { en: "price" }, example: "가격이 싸요.", exampleTranslations: { en: "The price is cheap." }, audioUrl: null, status: "review" },
  { id: "L1-S12-W16", korean: "얼마", partOfSpeech: "noun", translations: { en: "how much" }, example: "이 가방은 얼마예요?", exampleTranslations: { en: "How much is this bag?" }, audioUrl: null, status: "review" },
  { id: "L1-S12-W17", korean: "사다", partOfSpeech: "verb", translations: { en: "to buy" }, example: "저는 옷을 사요.", exampleTranslations: { en: "I buy clothes." }, audioUrl: null, status: "review" },
  // 날씨 (STEP 8)
  { id: "L1-S12-W18", korean: "날씨", partOfSpeech: "noun", translations: { en: "weather" }, example: "오늘은 날씨가 좋아요.", exampleTranslations: { en: "The weather is nice today." }, audioUrl: null, status: "review" },
  { id: "L1-S12-W19", korean: "춥다", partOfSpeech: "adjective", translations: { en: "cold" }, example: "겨울은 추워요.", exampleTranslations: { en: "Winter is cold." }, audioUrl: null, status: "review" },
  // 생활 (STEP 11)
  { id: "L1-S12-W20", korean: "화장실", partOfSpeech: "noun", translations: { en: "bathroom" }, example: "화장실이 어디에 있어요?", exampleTranslations: { en: "Where is the bathroom?" }, audioUrl: null, status: "review" },
  { id: "L1-S12-W21", korean: "입구", partOfSpeech: "noun", translations: { en: "entrance" }, example: "입구는 오른쪽에 있어요.", exampleTranslations: { en: "The entrance is on the right." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L1-S12-S01", korean: "저는 아침에 학교에 가요.", translations: { en: "I go to school in the morning." }, keyExpression: "에", relatedWords: ["아침", "학교", "가다"], audioUrl: null },
  { id: "L1-S12-S02", korean: "학교에서 친구하고 공부해요.", translations: { en: "I study with my friend at school." }, keyExpression: "에서 / 하고", relatedWords: ["학교", "친구", "공부하다"], audioUrl: null },
  { id: "L1-S12-S03", korean: "점심에는 식당에서 밥을 먹어요.", translations: { en: "I eat a meal at the restaurant at lunch." }, keyExpression: "에는 / 에서", relatedWords: ["밥", "먹다"], audioUrl: null },
  { id: "L1-S12-S04", korean: "오늘은 날씨가 추워요.", translations: { en: "The weather is cold today." }, keyExpression: "-아요/어요", relatedWords: ["오늘", "날씨", "춥다"], audioUrl: null },
  { id: "L1-S12-S05", korean: "주말에 친구를 만나고 싶어요.", translations: { en: "I want to meet my friend on the weekend." }, keyExpression: "-고 싶어요", relatedWords: ["친구"], audioUrl: null },
  { id: "L1-S12-S06", korean: "화장실은 입구 옆에 있어요.", translations: { en: "The bathroom is next to the entrance." }, keyExpression: "옆에 있어요", relatedWords: ["화장실", "입구"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L1-S12-G01",
    pattern: "에 vs 에서",
    meanings: { en: "time/destination vs. where an action happens" },
    explanations: { en: "에 marks a time or a destination; 에서 marks the place where an action happens." },
    examples: [
      { korean: "아홉 시에 학교에 가요.", translations: { en: "I go to school at nine o'clock." } },
      { korean: "학교에서 공부해요.", translations: { en: "I study at school." } },
    ],
  },
  {
    id: "L1-S12-G02",
    pattern: "이/가 vs 을/를",
    meanings: { en: "subject marker vs. object marker" },
    explanations: { en: "이/가 marks the subject of a sentence; 을/를 marks the object of a verb." },
    examples: [
      { korean: "친구가 있어요.", translations: { en: "I have a friend." } },
      { korean: "밥을 먹어요.", translations: { en: "I eat a meal." } },
    ],
  },
  {
    id: "L1-S12-G03",
    pattern: "하고/와/과 vs 도",
    meanings: { en: "with/and (people) vs. also/too" },
    explanations: { en: "하고, 와, and 과 mean 'with' or 'and' for people; 도 means 'also' or 'too'." },
    examples: [
      { korean: "친구하고 만나요.", translations: { en: "I meet with my friend." } },
      { korean: "저도 좋아요.", translations: { en: "I like it too." } },
    ],
  },
  {
    id: "L1-S12-G04",
    pattern: "있다/없다 vs 안",
    meanings: { en: "existence/possession vs. negation" },
    explanations: { en: "있다/없다 say something exists or that you have it; 안 negates a verb or adjective." },
    examples: [
      { korean: "동생이 있어요.", translations: { en: "I have a younger sibling." } },
      { korean: "오늘 학교에 안 가요.", translations: { en: "I'm not going to school today." } },
    ],
  },
  {
    id: "L1-S12-G05",
    pattern: "-고 싶어요 vs -(으)세요",
    meanings: { en: "wanting to do something vs. a polite request" },
    explanations: { en: "-고 싶어요 says what you want to do; -(으)세요 politely asks or tells someone to do something." },
    examples: [
      { korean: "옷을 사고 싶어요.", translations: { en: "I want to buy clothes." } },
      { korean: "여기에서 기다리세요.", translations: { en: "Please wait here." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L1-S12-L01",
    audioText: "저는 아침에 학교에 가요.",
    audioUrl: null,
    question: "언제 학교에 가요?",
    options: ["아침", "점심", "저녁", "밤"],
    correctAnswer: 0,
    translations: { en: { question: "When do they go to school?", explanation: 'The sentence says "in the morning," so the correct answer is 아침.' } },
  },
  {
    id: "L1-S12-L02",
    audioText: "가방이 얼마예요? 이만 원이에요.",
    audioUrl: null,
    question: "가방은 얼마입니까?",
    options: ["일만 원", "이만 원", "삼만 원", "사만 원"],
    correctAnswer: 1,
    translations: { en: { question: "How much is the bag?", explanation: 'The answer says "20,000 won," so the correct answer is 이만 원.' } },
  },
  {
    id: "L1-S12-L03",
    audioText: "오늘은 날씨가 추워요. 그래서 저는 따뜻한 옷을 입어요.",
    audioUrl: null,
    question: "오늘 날씨가 어떻습니까?",
    options: ["더워요", "맑아요", "추워요", "좋아요"],
    correctAnswer: 2,
    translations: { en: { question: "How is the weather today?", explanation: 'The sentence says "it\'s cold today," so the correct answer is 추워요.' } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L1-S12-R01",
    passage: "식당 운영시간\n오전 11시 ~ 오후 9시",
    question: "식당은 오전 몇 시에 문을 엽니까?",
    options: ["12시", "10시", "9시", "11시"],
    correctAnswer: 3,
    translations: { en: { question: "What time does the restaurant open?", explanation: 'The sign says "11:00 AM - 9:00 PM," so the correct answer is 11시.' } },
  },
  {
    id: "L1-S12-R02",
    passage: "민수 씨, 우리 토요일 세 시에 학교 앞에서 만나요.",
    question: "약속은 언제입니까?",
    options: ["금요일", "토요일", "일요일", "월요일"],
    correctAnswer: 1,
    translations: { en: { question: "When is the appointment?", explanation: 'The note says "let\'s meet on Saturday," so the answer is 토요일.' } },
  },
  {
    id: "L1-S12-R03",
    passage: "저는 아침에 학교에 가요.\n점심에는 식당에서 밥을 먹어요.\n저녁에는 집에서 쉬어요.",
    question: "저는 저녁에 무엇을 합니까?",
    options: ["학교에 가요", "밥을 먹어요", "집에서 쉬어요", "친구를 만나요"],
    correctAnswer: 2,
    translations: { en: { question: "What do they do in the evening?", explanation: 'The passage says "I rest at home in the evening," so the answer is 집에서 쉬어요.' } },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L1-S12-P01", type: "vocabulary", question: '"가족"의 뜻은 무엇입니까?', options: ["Family", "Friend", "Teacher", "Money"], correctAnswer: 0, explanation: { en: "가족 means family." } },
  { id: "L1-S12-P02", type: "vocabulary", question: '"마시다"의 뜻은 무엇입니까?', options: ["To eat", "To drink", "To buy", "To sell"], correctAnswer: 1, explanation: { en: "마시다 means to drink." } },
  { id: "L1-S12-P03", type: "vocabulary", question: '"가격"의 뜻은 무엇입니까?', options: ["Weather", "Time", "Price", "Place"], correctAnswer: 2, explanation: { en: "가격 means price." } },
  { id: "L1-S12-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n학교___ 가요.", options: ["가", "를", "와", "에"], correctAnswer: 3, explanation: { en: "에 marks a destination: 학교에 가요." } },
  { id: "L1-S12-P05", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n책___ 읽어요.", options: ["을", "이", "에서", "도"], correctAnswer: 0, explanation: { en: "을 marks the object: 책을 읽어요." } },
  { id: "L1-S12-P06", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n저는 커피를 ___ 마셔요.", options: ["도", "안", "를", "가"], correctAnswer: 1, explanation: { en: "안 negates the verb: 커피를 안 마셔요." } },
  { id: "L1-S12-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n저는 친구를 만나고 ______.", options: ["있어요", "좋아요", "싶어요", "가요"], correctAnswer: 2, explanation: { en: "-고 싶어요 says what you want to do: 만나고 싶어요." } },
  { id: "L1-S12-P08", type: "sentence", question: "가게에서 가격을 물을 때 무엇이라고 말합니까?", options: ["안녕하세요", "감사합니다", "맛있어요", "얼마예요?"], correctAnswer: 3, explanation: { en: "얼마예요? is used to ask the price of an item." } },
  { id: "L1-S12-P09", type: "listening", audioText: "저는 아침에 일어나요.", question: "언제 일어납니까?", options: ["아침", "저녁", "점심", "밤"], correctAnswer: 0, explanation: { en: 'The sentence says "in the morning," so the answer is 아침.' } },
  { id: "L1-S12-P10", type: "listening", audioText: "저는 지하철을 타고 회사에 가요.", question: "무엇을 타고 회사에 갑니까?", options: ["버스", "지하철", "택시", "자전거"], correctAnswer: 1, explanation: { en: 'The sentence says "I take the subway," so the answer is 지하철.' } },
  { id: "L1-S12-P11", type: "reading", passage: "화장실은 입구 옆에 있어요.", question: "화장실은 어디에 있습니까?", options: ["출구 옆", "입구 안", "입구 옆", "출구 안"], correctAnswer: 2, explanation: { en: 'The passage says "next to the entrance," so the answer is 입구 옆.' } },
  { id: "L1-S12-P12", type: "reading", passage: "오늘은 날씨가 추워요.", question: "오늘 날씨는 어떻습니까?", options: ["더워요", "맑아요", "좋아요", "추워요"], correctAnswer: 3, explanation: { en: 'The passage says "it\'s cold today," so the answer is 추워요.' } },
];

export const STEP_1_12: StepContent = {
  level: 1,
  step: 12,
  title: "TOPIK 1 Review (TOPIK 1 종합복습)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  practice: PRACTICE,
};
