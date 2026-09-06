// TOPIK 2 STEP 2 — Hobbies and Leisure (취미와 여가).
// Real STEP content, independent of TOPIK1 and TOPIK2 STEP1's data files.
// 주말 (TOPIK1 L1-S9-W15), 자주 (TOPIK2 L2-S1-W05), and 배우다
// (TOPIK1 L1-S3-W12) already exist as "new" words — recarded here with
// status "review", not re-created as new, per the duplicate-check rule.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L2-S2-W01", korean: "취미", partOfSpeech: "noun", translations: { en: "hobby" }, example: "제 취미는 여행이에요.", exampleTranslations: { en: "My hobby is traveling." }, audioUrl: null, status: "new" },
  { id: "L2-S2-W02", korean: "운동", partOfSpeech: "noun", translations: { en: "exercise" }, example: "저는 매일 운동을 해요.", exampleTranslations: { en: "I exercise every day." }, audioUrl: null, status: "new" },
  { id: "L2-S2-W03", korean: "영화", partOfSpeech: "noun", translations: { en: "movie" }, example: "주말에 영화를 볼 거예요.", exampleTranslations: { en: "I will watch a movie on the weekend." }, audioUrl: null, status: "new" },
  { id: "L2-S2-W04", korean: "음악", partOfSpeech: "noun", translations: { en: "music" }, example: "저는 음악을 자주 들어요.", exampleTranslations: { en: "I often listen to music." }, audioUrl: null, status: "new" },
  { id: "L2-S2-W05", korean: "독서", partOfSpeech: "noun", translations: { en: "reading (as a hobby)" }, example: "제 취미는 독서예요.", exampleTranslations: { en: "My hobby is reading." }, audioUrl: null, status: "new" },
  { id: "L2-S2-W06", korean: "여행", partOfSpeech: "noun", translations: { en: "travel" }, example: "저는 여행을 좋아해요.", exampleTranslations: { en: "I like traveling." }, audioUrl: null, status: "new" },
  { id: "L2-S2-W07", korean: "사진", partOfSpeech: "noun", translations: { en: "photo" }, example: "저는 사진을 찍어요.", exampleTranslations: { en: "I take photos." }, audioUrl: null, status: "new" },
  { id: "L2-S2-W08", korean: "게임", partOfSpeech: "noun", translations: { en: "game" }, example: "저는 친구와 게임을 해요.", exampleTranslations: { en: "I play games with my friend." }, audioUrl: null, status: "new" },
  { id: "L2-S2-W09", korean: "산책", partOfSpeech: "noun", translations: { en: "a walk / stroll" }, example: "저녁에 산책을 할 거예요.", exampleTranslations: { en: "I will take a walk in the evening." }, audioUrl: null, status: "new" },
  { id: "L2-S2-W10", korean: "수영", partOfSpeech: "noun", translations: { en: "swimming" }, example: "저는 수영을 배울 거예요.", exampleTranslations: { en: "I will learn swimming." }, audioUrl: null, status: "new" },
  { id: "L2-S2-W11", korean: "축구", partOfSpeech: "noun", translations: { en: "soccer" }, example: "저는 주말에 축구를 할 거예요.", exampleTranslations: { en: "I will play soccer on the weekend." }, audioUrl: null, status: "new" },
  { id: "L2-S2-W12", korean: "재미있다", partOfSpeech: "adjective", translations: { en: "fun / interesting" }, example: "이 영화는 재미있어요.", exampleTranslations: { en: "This movie is fun." }, audioUrl: null, status: "new" },
  { id: "L2-S2-W13", korean: "함께", partOfSpeech: "noun", translations: { en: "together" }, example: "친구와 함께 여행할 거예요.", exampleTranslations: { en: "I will travel together with my friend." }, audioUrl: null, status: "new" },
  { id: "L2-S2-W14", korean: "주말", partOfSpeech: "noun", translations: { en: "weekend" }, example: "저는 주말에 쉬어요.", exampleTranslations: { en: "I rest on weekends." }, audioUrl: null, status: "review" },
  { id: "L2-S2-W15", korean: "자주", partOfSpeech: "noun", translations: { en: "often" }, example: "저는 영화를 자주 봐요.", exampleTranslations: { en: "I often watch movies." }, audioUrl: null, status: "review" },
  { id: "L2-S2-W16", korean: "배우다", partOfSpeech: "verb", translations: { en: "to learn" }, example: "저는 수영을 배워요.", exampleTranslations: { en: "I learn swimming." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L2-S2-S01", korean: "제 취미는 여행이에요.", translations: { en: "My hobby is traveling." }, keyExpression: "-이에요", relatedWords: ["취미", "여행"], audioUrl: null },
  { id: "L2-S2-S02", korean: "주말에 영화를 볼 거예요.", translations: { en: "I will watch a movie on the weekend." }, keyExpression: "-(으)ㄹ 거예요", relatedWords: ["주말", "영화"], audioUrl: null },
  { id: "L2-S2-S03", korean: "저는 음악을 자주 들어요.", translations: { en: "I often listen to music." }, keyExpression: "자주", relatedWords: ["음악", "자주"], audioUrl: null },
  { id: "L2-S2-S04", korean: "저는 친구와 함께 게임을 해요.", translations: { en: "I play games together with my friend." }, keyExpression: "함께", relatedWords: ["친구", "함께", "게임"], audioUrl: null },
  { id: "L2-S2-S05", korean: "저는 수영을 배울 거예요.", translations: { en: "I will learn swimming." }, keyExpression: "-(으)ㄹ 거예요", relatedWords: ["수영", "배우다"], audioUrl: null },
  { id: "L2-S2-S06", korean: "저는 가끔 산책을 해요.", translations: { en: "I sometimes take a walk." }, keyExpression: "가끔", relatedWords: ["가끔", "산책"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L2-S2-G01",
    pattern: "-(으)ㄹ 거예요",
    meanings: { en: "future tense / plan" },
    explanations: {
      en: "Attach -(으)ㄹ 거예요 to a verb stem to talk about something you will do or plan to do.",
    },
    examples: [
      { korean: "주말에 영화를 볼 거예요.", translations: { en: "I will watch a movie on the weekend." } },
      { korean: "수영을 배울 거예요.", translations: { en: "I will learn swimming." } },
      { korean: "친구와 함께 여행할 거예요.", translations: { en: "I will travel together with my friend." } },
    ],
  },
  {
    id: "L2-S2-G02",
    pattern: "자주 / 가끔",
    meanings: { en: "often / sometimes" },
    explanations: {
      en: "Use 자주 for something done often, and 가끔 for something done sometimes.",
    },
    examples: [
      { korean: "저는 영화를 자주 봐요.", translations: { en: "I often watch movies." } },
      { korean: "저는 가끔 산책을 해요.", translations: { en: "I sometimes take a walk." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L2-S2-L01",
    audioText: "제 취미는 독서예요.",
    audioUrl: null,
    question: "이 사람의 취미는 무엇입니까?",
    options: ["운동", "독서", "영화", "게임"],
    correctAnswer: 1,
    translations: { en: { question: "What is this person's hobby?", explanation: 'The sentence says "my hobby is reading," so the correct answer is 독서.' } },
  },
  {
    id: "L2-S2-L02",
    audioText: "저는 주말에 축구를 할 거예요.",
    audioUrl: null,
    question: "주말에 무엇을 할 겁니까?",
    options: ["축구를 할 거예요", "영화를 볼 거예요", "수영할 거예요", "산책할 거예요"],
    correctAnswer: 0,
    translations: { en: { question: "What will they do this weekend?", explanation: 'The sentence says "I will play soccer," so the correct answer is 축구를 할 거예요.' } },
  },
  {
    id: "L2-S2-L03",
    audioText: "저는 음악을 자주 들어요. 특히 저녁에 들어요.",
    audioUrl: null,
    question: "언제 음악을 듣습니까?",
    options: ["아침", "점심", "저녁", "밤"],
    correctAnswer: 2,
    translations: { en: { question: "When do they listen to music?", explanation: 'The sentence says "especially in the evening," so the correct answer is 저녁.' } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L2-S2-R01",
    passage: "제 취미는 여행이에요.\n저는 여행을 아주 좋아해요.",
    question: "이 사람의 취미는 무엇입니까?",
    options: ["운동", "여행", "독서", "게임"],
    correctAnswer: 1,
    translations: { en: { question: "What is this person's hobby?", explanation: 'The passage says their hobby is traveling, so the correct answer is 여행.' } },
  },
  {
    id: "L2-S2-R02",
    passage: "저는 이번 주말에 친구와 영화를 볼 거예요.",
    question: "주말에 누구와 무엇을 합니까?",
    options: ["혼자 독서", "가족과 운동", "친구와 영화", "동료와 게임"],
    correctAnswer: 2,
    translations: { en: { question: "Who does what on the weekend?", explanation: 'The passage says "I will watch a movie with my friend," so the correct answer is 친구와 영화.' } },
  },
  {
    id: "L2-S2-R03",
    passage: "저는 매일 아침에 운동을 해요.\n주말에는 수영을 배워요.\n저녁에는 산책을 해요.",
    question: "이 사람은 주말에 무엇을 배웁니까?",
    options: ["게임", "운동", "산책", "수영"],
    correctAnswer: 3,
    translations: { en: { question: "What does this person learn on weekends?", explanation: 'The passage says "on weekends I learn swimming," so the correct answer is 수영.' } },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L2-S2-P01", type: "vocabulary", question: '"취미"의 뜻은 무엇입니까?', options: ["Hobby", "Work", "Study", "Rest"], correctAnswer: 0, explanation: { en: "취미 means hobby." } },
  { id: "L2-S2-P02", type: "vocabulary", question: '"재미있다"의 뜻은 무엇입니까?', options: ["Fun", "Difficult", "Boring", "Easy"], correctAnswer: 0, explanation: { en: "재미있다 means fun/interesting." } },
  { id: "L2-S2-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n주말에 영화를 ______.", options: ["볼 거예요", "봤어요", "봐요", "보고 있어요"], correctAnswer: 0, explanation: { en: "-(으)ㄹ 거예요 marks a future plan: 볼 거예요." } },
  { id: "L2-S2-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n저는 수영을 ______.", options: ["배워요", "배울 거예요", "배우세요", "배웠어요"], correctAnswer: 1, explanation: { en: "-(으)ㄹ 거예요 marks a future plan: 배울 거예요." } },
  { id: "L2-S2-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n저는 영화를 ______ 봐요.", options: ["아직", "자주", "가끔", "벌써"], correctAnswer: 1, explanation: { en: "자주 means often." } },
  { id: "L2-S2-P06", type: "sentence", question: "취미가 무엇이냐고 물을 때 대답으로 알맞은 것은?", options: ["네, 맞아요", "제 취미는 여행이에요", "안녕하세요", "감사합니다"], correctAnswer: 1, explanation: { en: "제 취미는 여행이에요 answers 'what is your hobby?'." } },
  { id: "L2-S2-P07", type: "vocabulary", question: "친구와 함께 무엇을 하고 싶은지 물을 때 자연스러운 대답은?", options: ["학교에 가요", "혼자 있어요", "같이 게임해요", "일해요"], correctAnswer: 2, explanation: { en: "같이 게임해요 fits doing something together with a friend." } },
  { id: "L2-S2-P08", type: "listening", audioText: "저는 주말마다 산책을 해요.", question: "이 사람은 언제 산책을 합니까?", options: ["평일마다", "저녁마다", "아침마다", "주말마다"], correctAnswer: 3, explanation: { en: 'The sentence says "every weekend," so the correct answer is 주말마다.' } },
  { id: "L2-S2-P09", type: "reading", passage: "저는 취미로 사진을 찍어요.", question: "이 사람의 취미는 무엇입니까?", options: ["요리", "독서", "운동", "사진"], correctAnswer: 3, explanation: { en: 'The passage says their hobby is photography, so the correct answer is 사진.' } },
  { id: "L2-S2-P10", type: "reading", passage: "저는 주말에 축구를 할 거예요.", question: "주말에 무엇을 할 겁니까?", options: ["영화", "독서", "축구", "산책"], correctAnswer: 2, explanation: { en: 'The passage says "I will play soccer," so the correct answer is 축구.' } },
];

export const STEP_2_2: StepContent = {
  level: 2,
  step: 2,
  title: "취미와 여가 (Hobbies and Leisure)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  practice: PRACTICE,
};
