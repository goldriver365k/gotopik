// TOPIK 1 STEP 11 — Everyday Services and Signs (생활 서비스와 안내).
// Real STEP 11 curriculum content, independent of STEP 1-10's data files.
// Checked against all STEP 1-10 words for duplicates — none found; every
// word below is genuinely new. 은행/식당/가게 (STEP 6/4) are reused in
// sentences/reading below, not re-carded as new WORD entries.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L1-S11-W01", korean: "우체국", partOfSpeech: "noun", translations: { en: "post office" }, example: "저기에 우체국이 있어요.", exampleTranslations: { en: "The post office is over there." }, audioUrl: null, status: "new" },
  { id: "L1-S11-W02", korean: "화장실", partOfSpeech: "noun", translations: { en: "bathroom" }, example: "화장실이 어디에 있어요?", exampleTranslations: { en: "Where is the bathroom?" }, audioUrl: null, status: "new" },
  { id: "L1-S11-W03", korean: "입구", partOfSpeech: "noun", translations: { en: "entrance" }, example: "입구는 오른쪽에 있어요.", exampleTranslations: { en: "The entrance is on the right." }, audioUrl: null, status: "new" },
  { id: "L1-S11-W04", korean: "출구", partOfSpeech: "noun", translations: { en: "exit" }, example: "출구는 왼쪽에 있어요.", exampleTranslations: { en: "The exit is on the left." }, audioUrl: null, status: "new" },
  { id: "L1-S11-W05", korean: "안내", partOfSpeech: "noun", translations: { en: "information / guide" }, example: "안내를 잘 읽으세요.", exampleTranslations: { en: "Please read the information carefully." }, audioUrl: null, status: "new" },
  { id: "L1-S11-W06", korean: "층", partOfSpeech: "noun", translations: { en: "floor (of a building)" }, example: "화장실은 이 층에 없어요.", exampleTranslations: { en: "The bathroom isn't on this floor." }, audioUrl: null, status: "new" },
  { id: "L1-S11-W07", korean: "여기", partOfSpeech: "noun", translations: { en: "here" }, example: "여기에서 기다리세요.", exampleTranslations: { en: "Please wait here." }, audioUrl: null, status: "new" },
  { id: "L1-S11-W08", korean: "저기", partOfSpeech: "noun", translations: { en: "there / over there" }, example: "저기에 우체국이 있어요.", exampleTranslations: { en: "The post office is over there." }, audioUrl: null, status: "new" },
  { id: "L1-S11-W09", korean: "왼쪽", partOfSpeech: "noun", translations: { en: "left side" }, example: "출구는 왼쪽에 있어요.", exampleTranslations: { en: "The exit is on the left." }, audioUrl: null, status: "new" },
  { id: "L1-S11-W10", korean: "오른쪽", partOfSpeech: "noun", translations: { en: "right side" }, example: "오른쪽으로 가세요.", exampleTranslations: { en: "Please go to the right." }, audioUrl: null, status: "new" },
  { id: "L1-S11-W11", korean: "열다", partOfSpeech: "verb", translations: { en: "to open" }, example: "문을 여세요.", exampleTranslations: { en: "Please open the door." }, audioUrl: null, status: "new" },
  { id: "L1-S11-W12", korean: "닫다", partOfSpeech: "verb", translations: { en: "to close" }, example: "문을 닫아요.", exampleTranslations: { en: "I close the door." }, audioUrl: null, status: "new" },
  { id: "L1-S11-W13", korean: "들어가다", partOfSpeech: "verb", translations: { en: "to go in / enter" }, example: "은행 입구로 들어가세요.", exampleTranslations: { en: "Please go in through the bank entrance." }, audioUrl: null, status: "new" },
  { id: "L1-S11-W14", korean: "나오다", partOfSpeech: "verb", translations: { en: "to come out" }, example: "출구로 나와요.", exampleTranslations: { en: "I come out through the exit." }, audioUrl: null, status: "new" },
  { id: "L1-S11-W15", korean: "기다리다", partOfSpeech: "verb", translations: { en: "to wait" }, example: "여기에서 기다리세요.", exampleTranslations: { en: "Please wait here." }, audioUrl: null, status: "new" },
];

const SENTENCES: Sentence[] = [
  { id: "L1-S11-S01", korean: "화장실이 어디에 있어요?", translations: { en: "Where is the bathroom?" }, keyExpression: "어디에 있어요?", relatedWords: ["화장실"], audioUrl: null },
  { id: "L1-S11-S02", korean: "저기에 우체국이 있어요.", translations: { en: "The post office is over there." }, keyExpression: "저기에", relatedWords: ["우체국", "저기"], audioUrl: null },
  { id: "L1-S11-S03", korean: "오른쪽으로 가세요.", translations: { en: "Please go to the right." }, keyExpression: "-(으)세요", relatedWords: ["오른쪽", "가다"], audioUrl: null },
  { id: "L1-S11-S04", korean: "여기에서 기다리세요.", translations: { en: "Please wait here." }, keyExpression: "-(으)세요", relatedWords: ["여기", "기다리다"], audioUrl: null },
  { id: "L1-S11-S05", korean: "은행 입구로 들어가세요.", translations: { en: "Please go in through the bank entrance." }, keyExpression: "으로 들어가세요", relatedWords: ["은행", "입구", "들어가다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L1-S11-G01",
    pattern: "-(으)세요",
    meanings: { en: "polite command / suggestion" },
    explanations: { en: "Attach -(으)세요 to a verb stem to politely ask or tell someone to do something." },
    examples: [
      { korean: "여기에서 기다리세요.", translations: { en: "Please wait here." } },
      { korean: "오른쪽으로 가세요.", translations: { en: "Please go to the right." } },
      { korean: "문을 여세요.", translations: { en: "Please open the door." } },
    ],
  },
  {
    id: "L1-S11-G02",
    pattern: "여기/저기",
    meanings: { en: "here / there" },
    explanations: { en: "Use 여기 for a place near the speaker, and 저기 for a place farther away that both people can see." },
    examples: [
      { korean: "여기 앉으세요.", translations: { en: "Please sit here." } },
      { korean: "저기에 화장실이 있어요.", translations: { en: "The bathroom is over there." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L1-S11-L01",
    audioText: "화장실은 이 층에 없어요. 저 층에 있어요.",
    audioUrl: null,
    question: "화장실은 어디에 있습니까?",
    options: ["이 층", "저 층", "입구", "출구"],
    correctAnswer: 1,
    translations: { en: { question: "Where is the bathroom?", explanation: 'The sentence says "it\'s on that floor," so the correct answer is 저 층.' } },
  },
  {
    id: "L1-S11-L02",
    audioText: "우체국은 은행 옆에 있어요. 입구는 오른쪽에 있어요.",
    audioUrl: null,
    question: "우체국 입구는 어디에 있습니까?",
    options: ["왼쪽", "오른쪽", "뒤", "안"],
    correctAnswer: 1,
    translations: { en: { question: "Where is the post office entrance?", explanation: 'The sentence says "the entrance is on the right," so the answer is 오른쪽.' } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L1-S11-R01",
    passage: "이 건물 1층에 은행이 있어요.\n2층에 병원이 있어요.",
    question: "병원은 몇 층에 있습니까?",
    options: ["1층", "2층", "3층", "4층"],
    correctAnswer: 1,
    translations: { en: { question: "What floor is the hospital on?", explanation: 'The passage says the hospital is on the 2nd floor, so the answer is 2층.' } },
  },
  {
    id: "L1-S11-R02",
    passage: "화장실은 입구 오른쪽에 있어요.\n출구는 왼쪽에 있어요.",
    question: "화장실은 어디에 있습니까?",
    options: ["입구 왼쪽", "입구 오른쪽", "출구 왼쪽", "출구 오른쪽"],
    correctAnswer: 1,
    translations: { en: { question: "Where is the bathroom?", explanation: 'The passage says the bathroom is right of the entrance, so the answer is 입구 오른쪽.' } },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L1-S11-P01", type: "vocabulary", question: '"입구"의 뜻은 무엇입니까?', options: ["Entrance", "Exit", "Floor", "Sign"], correctAnswer: 0, explanation: { en: "입구 means entrance." } },
  { id: "L1-S11-P02", type: "vocabulary", question: '"오른쪽"의 뜻은 무엇입니까?', options: ["Left", "Front", "Back", "Right"], correctAnswer: 3, explanation: { en: "오른쪽 means the right side." } },
  { id: "L1-S11-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n여기에서 기다리___.", options: ["어요", "세요", "고", "지만"], correctAnswer: 1, explanation: { en: "-(으)세요 makes a polite request: 기다리세요." } },
  { id: "L1-S11-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n오른쪽으로 가___.", options: ["어요", "고", "세요", "지만"], correctAnswer: 2, explanation: { en: "-(으)세요 makes a polite request: 가세요." } },
  { id: "L1-S11-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n화장실이 ______ 있어요.", options: ["저기에", "여기가", "저기를", "여기는"], correctAnswer: 0, explanation: { en: "저기에 있어요 means it's over there." } },
  { id: "L1-S11-P06", type: "sentence", question: "길을 물어볼 때 무엇이라고 말합니까?", options: ["감사합니다", "맛있어요", "안녕하세요", "화장실이 어디에 있어요?"], correctAnswer: 3, explanation: { en: "화장실이 어디에 있어요? is used to ask for directions." } },
  { id: "L1-S11-P07", type: "reading", passage: "우체국은 저기에 있어요.", question: "우체국은 어디에 있습니까?", options: ["여기", "저기", "입구", "출구"], correctAnswer: 1, explanation: { en: 'The passage says "the post office is over there," so the answer is 저기.' } },
  { id: "L1-S11-P08", type: "listening", audioText: "출구는 왼쪽에 있어요.", question: "출구는 어디에 있습니까?", options: ["오른쪽", "앞", "왼쪽", "뒤"], correctAnswer: 2, explanation: { en: 'The sentence says "the exit is on the left," so the answer is 왼쪽.' } },
];

export const STEP_1_11: StepContent = {
  level: 1,
  step: 11,
  title: "생활 서비스와 안내 (Everyday Services and Signs)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  practice: PRACTICE,
};
