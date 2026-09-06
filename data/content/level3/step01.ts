// TOPIK 3 STEP 1 — Recent Experiences (경험과 최근 일).
// First TOPIK 3 STEP, and the first STEP anywhere in the app with a
// WRITING section (see types/content.ts's WritingItem). Independent of
// TOPIK1/TOPIK2's data files.
// 경험, 마지막, 특별하다, 참가하다, 시작하다, 배우다 already exist as
// "new" (TOPIK1/TOPIK2) — recorded here with status "review".
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L3-S1-W01", korean: "최근", partOfSpeech: "noun", translations: { en: "recently" }, example: "최근에 새로운 취미를 시작했어요.", exampleTranslations: { en: "I recently started a new hobby." }, audioUrl: null, status: "new" },
  { id: "L3-S1-W02", korean: "처음", partOfSpeech: "noun", translations: { en: "first time" }, example: "저는 처음 한국에 왔어요.", exampleTranslations: { en: "This is my first time in Korea." }, audioUrl: null, status: "new" },
  { id: "L3-S1-W03", korean: "기억", partOfSpeech: "noun", translations: { en: "memory" }, example: "그 여행은 좋은 기억이에요.", exampleTranslations: { en: "That trip is a good memory." }, audioUrl: null, status: "new" },
  { id: "L3-S1-W04", korean: "방문하다", partOfSpeech: "verb", translations: { en: "to visit" }, example: "저는 할머니 댁을 방문했어요.", exampleTranslations: { en: "I visited my grandmother's house." }, audioUrl: null, status: "new" },
  { id: "L3-S1-W05", korean: "방문", partOfSpeech: "noun", translations: { en: "a visit" }, example: "이번 방문은 특별했어요.", exampleTranslations: { en: "This visit was special." }, audioUrl: null, status: "new" },
  { id: "L3-S1-W06", korean: "끝내다", partOfSpeech: "verb", translations: { en: "to finish (something)" }, example: "숙제를 끝냈어요.", exampleTranslations: { en: "I finished my homework." }, audioUrl: null, status: "new" },
  { id: "L3-S1-W07", korean: "성공하다", partOfSpeech: "verb", translations: { en: "to succeed" }, example: "이번 시험에 성공했어요.", exampleTranslations: { en: "I succeeded on this exam." }, audioUrl: null, status: "new" },
  { id: "L3-S1-W08", korean: "실패하다", partOfSpeech: "verb", translations: { en: "to fail" }, example: "처음에는 실패했어요.", exampleTranslations: { en: "I failed at first." }, audioUrl: null, status: "new" },
  { id: "L3-S1-W09", korean: "느끼다", partOfSpeech: "verb", translations: { en: "to feel" }, example: "저는 기쁨을 느꼈어요.", exampleTranslations: { en: "I felt joy." }, audioUrl: null, status: "new" },
  { id: "L3-S1-W10", korean: "기억하다", partOfSpeech: "verb", translations: { en: "to remember" }, example: "저는 그 날을 기억해요.", exampleTranslations: { en: "I remember that day." }, audioUrl: null, status: "new" },
  { id: "L3-S1-W11", korean: "잊다", partOfSpeech: "verb", translations: { en: "to forget" }, example: "저는 그 일을 잊지 않아요.", exampleTranslations: { en: "I don't forget that thing." }, audioUrl: null, status: "new" },
  { id: "L3-S1-W12", korean: "지난", partOfSpeech: "noun", translations: { en: "last / past" }, example: "지난주에 여행을 갔어요.", exampleTranslations: { en: "I went on a trip last week." }, audioUrl: null, status: "new" },
  { id: "L3-S1-W13", korean: "전에", partOfSpeech: "noun", translations: { en: "before / ago" }, example: "일 년 전에 한국어를 배우기 시작했어요.", exampleTranslations: { en: "I started learning Korean a year ago." }, audioUrl: null, status: "new" },
  { id: "L3-S1-W14", korean: "후에", partOfSpeech: "noun", translations: { en: "after / later" }, example: "그 후에 자주 만났어요.", exampleTranslations: { en: "We met often after that." }, audioUrl: null, status: "new" },
  { id: "L3-S1-W15", korean: "놀라다", partOfSpeech: "verb", translations: { en: "to be surprised" }, example: "저는 그 소식을 듣고 놀랐어요.", exampleTranslations: { en: "I was surprised to hear that news." }, audioUrl: null, status: "new" },
  { id: "L3-S1-W16", korean: "신기하다", partOfSpeech: "adjective", translations: { en: "amazing / novel" }, example: "이 경험은 정말 신기했어요.", exampleTranslations: { en: "This experience was really amazing." }, audioUrl: null, status: "new" },
  { id: "L3-S1-W17", korean: "작년", partOfSpeech: "noun", translations: { en: "last year" }, example: "작년에 처음 한국에 왔어요.", exampleTranslations: { en: "I came to Korea for the first time last year." }, audioUrl: null, status: "new" },
  { id: "L3-S1-W18", korean: "그때", partOfSpeech: "noun", translations: { en: "at that time" }, example: "그때는 정말 힘들었어요.", exampleTranslations: { en: "At that time it was really hard." }, audioUrl: null, status: "new" },
  { id: "L3-S1-W19", korean: "경험", partOfSpeech: "noun", translations: { en: "experience" }, example: "좋은 경험을 했어요.", exampleTranslations: { en: "I had a good experience." }, audioUrl: null, status: "review" },
  { id: "L3-S1-W20", korean: "마지막", partOfSpeech: "noun", translations: { en: "the last (one)" }, example: "이번이 마지막 기회예요.", exampleTranslations: { en: "This is the last chance." }, audioUrl: null, status: "review" },
  { id: "L3-S1-W21", korean: "특별하다", partOfSpeech: "adjective", translations: { en: "special" }, example: "이 경험은 특별했어요.", exampleTranslations: { en: "This experience was special." }, audioUrl: null, status: "review" },
  { id: "L3-S1-W22", korean: "참가하다", partOfSpeech: "verb", translations: { en: "to participate" }, example: "처음으로 대회에 참가했어요.", exampleTranslations: { en: "I participated in a competition for the first time." }, audioUrl: null, status: "review" },
  { id: "L3-S1-W23", korean: "시작하다", partOfSpeech: "verb", translations: { en: "to start" }, example: "작년에 한국어 공부를 시작했어요.", exampleTranslations: { en: "I started studying Korean last year." }, audioUrl: null, status: "review" },
  { id: "L3-S1-W24", korean: "배우다", partOfSpeech: "verb", translations: { en: "to learn" }, example: "저는 최근에 요리를 배웠어요.", exampleTranslations: { en: "I recently learned cooking." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L3-S1-S01", korean: "저는 한국 음식을 먹어 본 적이 있어요.", translations: { en: "I have tried Korean food before." }, keyExpression: "-아/어 본 적이 있다", relatedWords: ["음식", "먹다"], audioUrl: null },
  { id: "L3-S1-S02", korean: "저는 이 공연을 본 적이 있어요.", translations: { en: "I have seen this performance before." }, keyExpression: "-아/어 본 적이 있다", relatedWords: ["공연"], audioUrl: null },
  { id: "L3-S1-S03", korean: "저는 작년에 처음 한국을 방문했어요.", translations: { en: "I visited Korea for the first time last year." }, keyExpression: "처음", relatedWords: ["작년", "처음", "방문하다"], audioUrl: null },
  { id: "L3-S1-S04", korean: "친구를 만나고 나서 영화를 봤어요.", translations: { en: "I met my friend and then watched a movie." }, keyExpression: "-고 나서", relatedWords: ["친구", "영화"], audioUrl: null },
  { id: "L3-S1-S05", korean: "숙제를 끝내고 나서 쉬었어요.", translations: { en: "I finished my homework and then rested." }, keyExpression: "-고 나서", relatedWords: ["숙제", "끝내다", "쉬다"], audioUrl: null },
  { id: "L3-S1-S06", korean: "저는 그 일을 잊지 않고 기억해요.", translations: { en: "I don't forget that thing — I remember it." }, keyExpression: "기억하다", relatedWords: ["잊다", "기억하다"], audioUrl: null },
  { id: "L3-S1-S07", korean: "처음에는 실패했지만 나중에 성공했어요.", translations: { en: "I failed at first, but succeeded later." }, keyExpression: "-지만", relatedWords: ["처음", "실패하다", "성공하다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L3-S1-G01",
    pattern: "-아/어 본 적이 있다",
    meanings: { en: "have done (something) before" },
    explanations: {
      en: "Attach -아/어 본 적이 있다 to a verb stem to say you have had the experience of doing something.",
    },
    examples: [
      { korean: "한국 음식을 먹어 본 적이 있어요.", translations: { en: "I have tried Korean food before." } },
      { korean: "이 공연을 본 적이 있어요.", translations: { en: "I have seen this performance before." } },
    ],
  },
  {
    id: "L3-S1-G02",
    pattern: "-고 나서",
    meanings: { en: "after doing (something)" },
    explanations: {
      en: "Attach -고 나서 to a verb stem to show one action finishes completely before the next one starts.",
    },
    examples: [
      { korean: "친구를 만나고 나서 영화를 봤어요.", translations: { en: "I met my friend and then watched a movie." } },
      { korean: "숙제를 끝내고 나서 쉬었어요.", translations: { en: "I finished my homework and then rested." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L3-S1-L01",
    audioText: "저는 한국 음식을 먹어 본 적이 있어요. 정말 맛있었어요.",
    audioUrl: null,
    question: "이 사람은 무엇을 해 본 적이 있습니까?",
    options: ["한국어 배우기", "한국 여행 가기", "한국 음식 먹기", "한국 영화 보기"],
    correctAnswer: 2,
    translations: { en: { question: "What has this person tried before?", explanation: 'The sentence says "have tried Korean food," so the correct answer is 한국 음식 먹기.' } },
  },
  {
    id: "L3-S1-L02",
    audioText: "숙제를 끝내고 나서 친구를 만났어요.",
    audioUrl: null,
    question: "숙제를 끝내고 나서 무엇을 했습니까?",
    options: ["친구를 만났어요", "잠을 잤어요", "요리를 했어요", "책을 읽었어요"],
    correctAnswer: 0,
    translations: { en: { question: "What did they do after finishing homework?", explanation: 'The sentence says "then met my friend," so the correct answer is 친구를 만났어요.' } },
  },
  {
    id: "L3-S1-L03",
    audioText: "저는 작년에 처음 이 회사에 왔어요. 그리고 지금까지 일하고 있어요.",
    audioUrl: null,
    question: "이 사람은 언제 처음 이 회사에 왔습니까?",
    options: ["올해", "내년", "지난주", "작년"],
    correctAnswer: 3,
    translations: { en: { question: "When did this person first come to this company?", explanation: 'The sentence says "last year," so the correct answer is 작년.' } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L3-S1-R01",
    passage:
      "저는 지난주에 처음 등산을 해 봤어요.\n정말 힘들었지만 재미있었어요.\n산 위에서 본 경치가 기억에 남아요.\n다음에 또 가고 싶어요.",
    question: "이 사람은 무엇을 처음 해 봤습니까?",
    options: ["등산", "수영", "여행", "요리"],
    correctAnswer: 0,
    translations: { en: { question: "What did this person try for the first time?", explanation: "The passage says they tried hiking for the first time, so the correct answer is 등산." } },
  },
  {
    id: "L3-S1-R02",
    passage:
      "저는 처음 한국 음식을 먹었을 때를 아직도 기억해요.\n너무 매워서 놀랐어요.\n하지만 지금은 매운 음식을 좋아해요.",
    question: "이 사람은 처음 한국 음식을 먹었을 때 어땠습니까?",
    options: ["맛이 없었어요", "너무 싱거웠어요", "차가웠어요", "매워서 놀랐어요"],
    correctAnswer: 3,
    translations: { en: { question: "How did they feel eating Korean food for the first time?", explanation: 'The passage says they were surprised because it was spicy, so the correct answer is 매워서 놀랐어요.' } },
  },
  {
    id: "L3-S1-R03",
    passage:
      "저는 처음 한 발표에서 실패했어요.\n그때는 정말 속상했어요.\n하지만 계속 연습해서 다음 발표에서는 성공했어요.\n그 경험은 저에게 특별한 기억이 됐어요.",
    question: "이 사람은 처음 발표에서 어땠습니까?",
    options: ["성공했어요", "실패했어요", "참가하지 않았어요", "기억이 안 나요"],
    correctAnswer: 1,
    translations: { en: { question: "How did the first presentation go?", explanation: "The passage says they failed at first, so the correct answer is 실패했어요." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L3-S1-WR01",
    type: "sentence-completion",
    prompt: { en: "Complete the sentence: 한국에 가 본 적이 ______." },
    sampleAnswer: { en: "한국에 가 본 적이 있어요." },
    explanation: { en: "-아/어 본 적이 있다 attaches to the verb stem 가- (from 가다) to say you have had the experience of going." },
  },
  {
    id: "L3-S1-WR02",
    type: "short-response",
    prompt: { en: "Write 2-3 sentences about something you did for the first time recently." },
    keywords: ["처음", "지난주", "친구", "재미있다"],
    sampleAnswer: { en: "저는 지난주에 친구와 함께 처음 등산을 했어요. 정말 힘들었지만 재미있었어요. 다음에 또 가고 싶어요." },
    explanation: { en: "Try using 처음 to mark the first-time experience and -아서/어서 or -지만 to connect how it felt." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L3-S1-P01", type: "vocabulary", question: '"경험"의 뜻은 무엇입니까?', options: ["Experience", "Memory", "Visit", "Success"], correctAnswer: 0, explanation: { en: "경험 means experience." } },
  { id: "L3-S1-P02", type: "vocabulary", question: '"잊다"의 뜻은 무엇입니까?', options: ["To remember", "To forget", "To feel", "To visit"], correctAnswer: 1, explanation: { en: "잊다 means to forget." } },
  { id: "L3-S1-P03", type: "vocabulary", question: "어떤 일에 실패하지 않고 잘 됐을 때 쓰는 말은?", options: ["실패하다", "성공하다", "시작하다", "끝내다"], correctAnswer: 1, explanation: { en: "성공하다 means to succeed." } },
  { id: "L3-S1-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n한국 음식을 ______.", options: ["먹어 본 적이 있어요", "먹고 있어요", "먹을 거예요", "먹지 마세요"], correctAnswer: 0, explanation: { en: "-아/어 본 적이 있다 shows a past experience: 먹어 본 적이 있어요." } },
  { id: "L3-S1-P05", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n숙제를 ______ 쉬었어요.", options: ["끝내고 나서", "끝내야 해서", "끝내려고", "끝내는데"], correctAnswer: 0, explanation: { en: "-고 나서 shows one action finishes before the next: 끝내고 나서." } },
  { id: "L3-S1-P06", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n친구를 ______ 영화를 봤어요.", options: ["만나는 동안", "만나기 때문에", "만나 보다", "만나고 나서"], correctAnswer: 3, explanation: { en: "-고 나서 connects two sequential actions: 만나고 나서." } },
  { id: "L3-S1-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n저는 작년에 ______ 한국을 방문했어요.", options: ["가끔", "마지막", "자주", "처음"], correctAnswer: 3, explanation: { en: "처음 means \"the first time.\"" } },
  { id: "L3-S1-P08", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n그 경험은 저에게 ______ 기억이 됐어요.", options: ["잊은", "실패한", "특별한", "끝낸"], correctAnswer: 2, explanation: { en: "특별한 (special) fits describing a meaningful memory." } },
  { id: "L3-S1-P09", type: "listening", audioText: "저는 처음 한국 음식을 먹어 봤어요. 매워서 놀랐어요.", question: "이 사람은 왜 놀랐습니까?", options: ["맛이 없어서", "싸서", "매워서", "차가워서"], correctAnswer: 2, explanation: { en: 'The sentence says "surprised because it was spicy," so the answer is 매워서.' } },
  { id: "L3-S1-P10", type: "reading", passage: "저는 지난주에 처음 등산을 해 봤어요. 정말 재미있었어요.", question: "이 사람은 무엇을 처음 해 봤습니까?", options: ["요리", "수영", "등산", "여행"], correctAnswer: 2, explanation: { en: 'The passage says "tried hiking for the first time," so the answer is 등산.' } },
  { id: "L3-S1-P11", type: "reading", passage: "처음에는 실패했지만 계속 연습해서 나중에 성공했어요.", question: "이 사람은 처음에 어땠습니까?", options: ["성공했어요", "실패했어요", "참가하지 않았어요", "포기했어요"], correctAnswer: 1, explanation: { en: 'The passage says "failed at first," so the answer is 실패했어요.' } },
  { id: "L3-S1-P12", type: "sentence", question: "다음 중 자연스러운 문장은?", options: ["저는 이 노래를 듣본 적이 있어요.", "저는 이 노래를 듣어 본 적이 있어요.", "저는 이 노래를 들은 본 적이 있어요.", "저는 이 노래를 들어 본 적이 있어요."], correctAnswer: 3, explanation: { en: "듣다 becomes 들어 before -본 적이 있다 (irregular ㄷ verb)." } },
];

export const STEP_3_1: StepContent = {
  level: 3,
  step: 1,
  title: "경험과 최근 일 (Recent Experiences)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
