// TOPIK 2 STEP 3 — Friends and Relationships (친구와 인간관계).
// Real STEP content, independent of TOPIK1 and TOPIK2 STEP1-2's data files.
// 기다리다 (TOPIK1 L1-S11-W15), 만나다 (TOPIK1 L1-S9-W12), 시간
// (TOPIK1 L1-S5-W07), and 같이 (TOPIK1 L1-S9-W14) already exist as "new"
// words — recarded here with status "review", not re-created as new.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L2-S3-W01", korean: "동료", partOfSpeech: "noun", translations: { en: "coworker" }, example: "저는 회사 동료와 점심을 먹어요.", exampleTranslations: { en: "I eat lunch with my coworker." }, audioUrl: null, status: "new" },
  { id: "L2-S3-W02", korean: "초대하다", partOfSpeech: "verb", translations: { en: "to invite" }, example: "저는 친구를 초대했어요.", exampleTranslations: { en: "I invited my friend." }, audioUrl: null, status: "new" },
  { id: "L2-S3-W03", korean: "연락하다", partOfSpeech: "verb", translations: { en: "to contact" }, example: "저는 친구에게 연락했어요.", exampleTranslations: { en: "I contacted my friend." }, audioUrl: null, status: "new" },
  { id: "L2-S3-W04", korean: "이야기하다", partOfSpeech: "verb", translations: { en: "to talk" }, example: "저는 친구와 이야기해요.", exampleTranslations: { en: "I talk with my friend." }, audioUrl: null, status: "new" },
  { id: "L2-S3-W05", korean: "친하다", partOfSpeech: "adjective", translations: { en: "to be close (with someone)" }, example: "저는 그 친구와 친해요.", exampleTranslations: { en: "I am close with that friend." }, audioUrl: null, status: "new" },
  { id: "L2-S3-W06", korean: "약속하다", partOfSpeech: "verb", translations: { en: "to make an appointment / promise" }, example: "저는 친구와 약속했어요.", exampleTranslations: { en: "I made an appointment with my friend." }, audioUrl: null, status: "new" },
  { id: "L2-S3-W07", korean: "바쁘다", partOfSpeech: "adjective", translations: { en: "busy" }, example: "저는 요즘 바빠요.", exampleTranslations: { en: "I am busy these days." }, audioUrl: null, status: "new" },
  { id: "L2-S3-W08", korean: "생일", partOfSpeech: "noun", translations: { en: "birthday" }, example: "오늘은 제 생일이에요.", exampleTranslations: { en: "Today is my birthday." }, audioUrl: null, status: "new" },
  { id: "L2-S3-W09", korean: "모임", partOfSpeech: "noun", translations: { en: "gathering / meetup" }, example: "저는 모임에 갔어요.", exampleTranslations: { en: "I went to a gathering." }, audioUrl: null, status: "new" },
  { id: "L2-S3-W10", korean: "오랜만", partOfSpeech: "noun", translations: { en: "a long time (since last time)" }, example: "오랜만이에요!", exampleTranslations: { en: "It's been a while!" }, audioUrl: null, status: "new" },
  { id: "L2-S3-W11", korean: "이유", partOfSpeech: "noun", translations: { en: "reason" }, example: "저는 이유를 몰라요.", exampleTranslations: { en: "I don't know the reason." }, audioUrl: null, status: "new" },
  { id: "L2-S3-W12", korean: "사이", partOfSpeech: "noun", translations: { en: "relationship / between" }, example: "저와 친구는 사이가 좋아요.", exampleTranslations: { en: "My friend and I have a good relationship." }, audioUrl: null, status: "new" },
  { id: "L2-S3-W13", korean: "기다리다", partOfSpeech: "verb", translations: { en: "to wait" }, example: "저는 친구를 기다렸어요.", exampleTranslations: { en: "I waited for my friend." }, audioUrl: null, status: "review" },
  { id: "L2-S3-W14", korean: "만나다", partOfSpeech: "verb", translations: { en: "to meet" }, example: "친구를 만나서 같이 밥을 먹었어요.", exampleTranslations: { en: "I met my friend and ate a meal together." }, audioUrl: null, status: "review" },
  { id: "L2-S3-W15", korean: "시간", partOfSpeech: "noun", translations: { en: "time" }, example: "저는 시간이 없어요.", exampleTranslations: { en: "I don't have time." }, audioUrl: null, status: "review" },
  { id: "L2-S3-W16", korean: "같이", partOfSpeech: "noun", translations: { en: "together" }, example: "친구와 같이 밥을 먹었어요.", exampleTranslations: { en: "I ate a meal together with my friend." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L2-S3-S01", korean: "친구를 만나서 같이 밥을 먹었어요.", translations: { en: "I met my friend and ate a meal together." }, keyExpression: "-아서/어서", relatedWords: ["친구", "만나다", "같이", "밥", "먹다"], audioUrl: null },
  { id: "L2-S3-S02", korean: "비가 와서 집에 있었어요.", translations: { en: "It rained, so I stayed home." }, keyExpression: "-아서/어서", relatedWords: ["비", "오다", "집"], audioUrl: null },
  { id: "L2-S3-S03", korean: "저는 회사 동료와 이야기했어요.", translations: { en: "I talked with my coworker." }, keyExpression: "-았/었어요", relatedWords: ["회사", "동료", "이야기하다"], audioUrl: null },
  { id: "L2-S3-S04", korean: "저는 친구를 생일 파티에 초대했어요.", translations: { en: "I invited my friend to my birthday party." }, keyExpression: "-았/었어요", relatedWords: ["친구", "생일", "초대하다"], audioUrl: null },
  { id: "L2-S3-S05", korean: "저는 그 친구와 친해요.", translations: { en: "I am close with that friend." }, keyExpression: "친하다", relatedWords: ["친하다"], audioUrl: null },
  { id: "L2-S3-S06", korean: "오랜만에 친구에게 연락했어요.", translations: { en: "I contacted my friend after a long time." }, keyExpression: "오랜만에", relatedWords: ["오랜만", "친구", "연락하다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L2-S3-G01",
    pattern: "-아서/어서",
    meanings: { en: "reason / sequence (and so)" },
    explanations: {
      en: "Attach -아서/어서 to a verb/adjective stem to give a reason, or to show one action leads into the next.",
    },
    examples: [
      { korean: "친구를 만나서 같이 밥을 먹었어요.", translations: { en: "I met my friend and ate a meal together." } },
      { korean: "비가 와서 집에 있었어요.", translations: { en: "It rained, so I stayed home." } },
      { korean: "바빠서 연락을 못 했어요.", translations: { en: "I was busy, so I couldn't get in touch." } },
    ],
  },
  {
    id: "L2-S3-G02",
    pattern: "-지만",
    meanings: { en: "but / although" },
    explanations: {
      en: "Attach -지만 to a verb/adjective stem to contrast two ideas, similar to 'but' in English.",
    },
    examples: [
      { korean: "바쁘지만 친구를 만났어요.", translations: { en: "I was busy, but I met my friend." } },
      { korean: "오랜만이지만 반가워요.", translations: { en: "It's been a while, but I'm glad to see you." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L2-S3-L01",
    audioText: "저는 회사 동료와 점심을 먹었어요.",
    audioUrl: null,
    question: "누구와 점심을 먹었습니까?",
    options: ["가족", "선생님", "회사 동료", "이웃"],
    correctAnswer: 2,
    translations: { en: { question: "Who did they eat lunch with?", explanation: 'The sentence says "with my coworker," so the correct answer is 회사 동료.' } },
  },
  {
    id: "L2-S3-L02",
    audioText: "바빠서 친구를 못 만났어요.",
    audioUrl: null,
    question: "왜 친구를 못 만났습니까?",
    options: ["바빠서", "아파서", "피곤해서", "늦어서"],
    correctAnswer: 0,
    translations: { en: { question: "Why couldn't they meet their friend?", explanation: 'The sentence says "because I was busy," so the correct answer is 바빠서.' } },
  },
  {
    id: "L2-S3-L03",
    audioText: "오랜만에 친구를 만나서 이야기했어요. 우리는 두 시간 동안 이야기했어요.",
    audioUrl: null,
    question: "친구를 얼마 만에 만났습니까?",
    options: ["매일", "가끔", "오랜만에", "자주"],
    correctAnswer: 2,
    translations: { en: { question: "How long had it been since they met their friend?", explanation: 'The sentence says "after a long time," so the correct answer is 오랜만에.' } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L2-S3-R01",
    passage: "저는 회사 동료와 친해요.\n우리는 자주 같이 점심을 먹어요.",
    question: "이 사람은 동료와 무엇을 자주 합니까?",
    options: ["같이 점심을 먹어요", "운동해요", "여행해요", "공부해요"],
    correctAnswer: 0,
    translations: { en: { question: "What do they often do with their coworker?", explanation: 'The passage says "we often eat lunch together," so the correct answer is 같이 점심을 먹어요.' } },
  },
  {
    id: "L2-S3-R02",
    passage: "오늘은 제 생일이에요.\n친구들을 모임에 초대했어요.",
    question: "오늘 무슨 날입니까?",
    options: ["제 생일", "친구 생일", "회사 모임", "동료 생일"],
    correctAnswer: 0,
    translations: { en: { question: "What day is today?", explanation: 'The passage says "today is my birthday," so the correct answer is 제 생일.' } },
  },
  {
    id: "L2-S3-R03",
    passage: "저는 어제 친구를 만났어요.\n오랜만에 만나서 정말 반가웠어요.\n우리는 이야기를 많이 했어요.",
    question: "이 사람은 언제 친구를 만났습니까?",
    options: ["오늘", "내일", "어제", "주말"],
    correctAnswer: 2,
    translations: { en: { question: "When did they meet their friend?", explanation: 'The passage says "yesterday I met my friend," so the correct answer is 어제.' } },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L2-S3-P01", type: "vocabulary", question: '"동료"의 뜻은 무엇입니까?', options: ["Teacher", "Neighbor", "Coworker", "Family"], correctAnswer: 2, explanation: { en: "동료 means coworker." } },
  { id: "L2-S3-P02", type: "vocabulary", question: '"친하다"의 뜻은 무엇입니까?', options: ["Busy", "Strange", "Far", "Close/friendly"], correctAnswer: 3, explanation: { en: "친하다 means to be close with someone." } },
  { id: "L2-S3-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n비가 ______ 집에 있었어요.", options: ["오고", "오지만", "와서", "오려고"], correctAnswer: 2, explanation: { en: "-아서/어서 gives a reason: 비가 와서 집에 있었어요." } },
  { id: "L2-S3-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n친구를 만나서 같이 밥을 ______.", options: ["먹어요", "먹을 거예요", "먹고 있어요", "먹었어요"], correctAnswer: 3, explanation: { en: "-았/었어요 marks the past tense: 먹었어요." } },
  { id: "L2-S3-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n오늘은 제 ______이에요.", options: ["약속", "모임", "생일", "동료"], correctAnswer: 2, explanation: { en: "생일 means birthday." } },
  { id: "L2-S3-P06", type: "sentence", question: "오랜만에 친구를 만났을 때 할 수 있는 말은?", options: ["안녕히 가세요", "괜찮아요", "죄송합니다", "오랜만이에요!"], correctAnswer: 3, explanation: { en: "오랜만이에요! is used when seeing someone after a long time." } },
  { id: "L2-S3-P07", type: "vocabulary", question: "바빠서 못 만났을 때 이유를 물으면?", options: ["어디에 있어요?", "뭐 먹었어요?", "왜 못 만났어요?", "언제 가요?"], correctAnswer: 2, explanation: { en: "왜 못 만났어요? asks for the reason." } },
  { id: "L2-S3-P08", type: "listening", audioText: "저는 친구를 기다렸어요.", question: "저는 누구를 기다렸습니까?", options: ["가족", "선생님", "동료", "친구"], correctAnswer: 3, explanation: { en: 'The sentence says "I waited for my friend," so the answer is 친구.' } },
  { id: "L2-S3-P09", type: "reading", passage: "저는 친구를 생일 파티에 초대했어요.", question: "저는 무엇을 했습니까?", options: ["기다렸어요", "연락했어요", "초대했어요", "이야기했어요"], correctAnswer: 2, explanation: { en: 'The passage says "I invited," so the correct answer is 초대했어요.' } },
  { id: "L2-S3-P10", type: "reading", passage: "저는 회사 동료와 친해요.", question: "저는 동료와 어떤 사이입니까?", options: ["안 친해요", "바빠요", "몰라요", "친해요"], correctAnswer: 3, explanation: { en: 'The passage says "I am close with my coworker," so the answer is 친해요.' } },
];

export const STEP_2_3: StepContent = {
  level: 2,
  step: 3,
  title: "친구와 인간관계 (Friends and Relationships)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  practice: PRACTICE,
};
