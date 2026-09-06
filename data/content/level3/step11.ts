// TOPIK 3 STEP 11 — Cultural Differences (문화와 생활 차이).
// Independent of TOPIK1/TOPIK2/TOPIK3 STEP1-10's data files.
// 문화, 습관, 차이, 전통, 함께, 비슷하다 already exist as "new" —
// recorded here with status "review". 다르다 shares its root with 다른
// (already "new" in TOPIK1), so it is recorded as "review" too.
// Per this stage's instruction, comparisons here stay everyday and
// personal — no sensitive or political cultural comparisons.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L3-S11-W01", korean: "생활방식", partOfSpeech: "noun", translations: { en: "way of life / lifestyle" }, example: "나라마다 생활방식이 달라요.", exampleTranslations: { en: "Lifestyles differ by country." }, audioUrl: null, status: "new" },
  { id: "L3-S11-W02", korean: "예절", partOfSpeech: "noun", translations: { en: "etiquette / manners" }, example: "식사 예절이 나라마다 달라요.", exampleTranslations: { en: "Table manners differ by country." }, audioUrl: null, status: "new" },
  { id: "L3-S11-W03", korean: "공통점", partOfSpeech: "noun", translations: { en: "common point / similarity" }, example: "두 나라는 공통점이 많아요.", exampleTranslations: { en: "The two countries have many things in common." }, audioUrl: null, status: "new" },
  { id: "L3-S11-W04", korean: "식사", partOfSpeech: "noun", translations: { en: "meal" }, example: "식사 예절을 배웠어요.", exampleTranslations: { en: "I learned meal etiquette." }, audioUrl: null, status: "new" },
  { id: "L3-S11-W05", korean: "인사", partOfSpeech: "noun", translations: { en: "greeting" }, example: "인사 방법이 달라요.", exampleTranslations: { en: "The way of greeting is different." }, audioUrl: null, status: "new" },
  { id: "L3-S11-W06", korean: "관계", partOfSpeech: "noun", translations: { en: "relationship" }, example: "가족 관계를 중요하게 생각해요.", exampleTranslations: { en: "I think family relationships are important." }, audioUrl: null, status: "new" },
  { id: "L3-S11-W07", korean: "개인", partOfSpeech: "noun", translations: { en: "individual" }, example: "개인의 생각이 달라요.", exampleTranslations: { en: "Each individual's thoughts differ." }, audioUrl: null, status: "new" },
  { id: "L3-S11-W08", korean: "자연스럽다", partOfSpeech: "adjective", translations: { en: "natural" }, example: "그 인사가 자연스러워요.", exampleTranslations: { en: "That greeting feels natural." }, audioUrl: null, status: "new" },
  { id: "L3-S11-W09", korean: "익숙하다", partOfSpeech: "adjective", translations: { en: "familiar / used to" }, example: "이제 한국 생활이 익숙해요.", exampleTranslations: { en: "I'm used to life in Korea now." }, audioUrl: null, status: "new" },
  { id: "L3-S11-W10", korean: "낯설다", partOfSpeech: "adjective", translations: { en: "unfamiliar / strange" }, example: "처음에는 모든 게 낯설었어요.", exampleTranslations: { en: "At first, everything was unfamiliar." }, audioUrl: null, status: "new" },
  { id: "L3-S11-W11", korean: "적응하다", partOfSpeech: "verb", translations: { en: "to adapt" }, example: "새 생활에 적응했어요.", exampleTranslations: { en: "I adapted to the new life." }, audioUrl: null, status: "new" },
  { id: "L3-S11-W12", korean: "존중하다", partOfSpeech: "verb", translations: { en: "to respect" }, example: "서로의 문화를 존중해요.", exampleTranslations: { en: "We respect each other's culture." }, audioUrl: null, status: "new" },
  { id: "L3-S11-W13", korean: "말투", partOfSpeech: "noun", translations: { en: "tone of speech" }, example: "말투가 나라마다 달라요.", exampleTranslations: { en: "Tone of speech differs by country." }, audioUrl: null, status: "new" },
  { id: "L3-S11-W14", korean: "표현하다", partOfSpeech: "verb", translations: { en: "to express" }, example: "감정을 표현하는 방식이 달라요.", exampleTranslations: { en: "The way of expressing emotions is different." }, audioUrl: null, status: "new" },
  { id: "L3-S11-W15", korean: "받아들이다", partOfSpeech: "verb", translations: { en: "to accept" }, example: "새로운 문화를 받아들였어요.", exampleTranslations: { en: "I accepted the new culture." }, audioUrl: null, status: "new" },
  { id: "L3-S11-W16", korean: "여유", partOfSpeech: "noun", translations: { en: "leisure / ease" }, example: "이곳 사람들은 여유가 있어요.", exampleTranslations: { en: "People here have a sense of ease." }, audioUrl: null, status: "new" },
  { id: "L3-S11-W17", korean: "속도", partOfSpeech: "noun", translations: { en: "speed / pace" }, example: "생활 속도가 빨라요.", exampleTranslations: { en: "The pace of life is fast." }, audioUrl: null, status: "new" },
  { id: "L3-S11-W18", korean: "환영하다", partOfSpeech: "verb", translations: { en: "to welcome" }, example: "이웃이 저를 환영해 줬어요.", exampleTranslations: { en: "My neighbor welcomed me." }, audioUrl: null, status: "new" },
  { id: "L3-S11-W19", korean: "문화", partOfSpeech: "noun", translations: { en: "culture" }, example: "다른 문화를 배우는 게 재미있어요.", exampleTranslations: { en: "Learning about a different culture is fun." }, audioUrl: null, status: "review" },
  { id: "L3-S11-W20", korean: "습관", partOfSpeech: "noun", translations: { en: "habit" }, example: "생활 습관이 조금 달라요.", exampleTranslations: { en: "Lifestyle habits are a bit different." }, audioUrl: null, status: "review" },
  { id: "L3-S11-W21", korean: "차이", partOfSpeech: "noun", translations: { en: "difference" }, example: "문화 차이를 느꼈어요.", exampleTranslations: { en: "I felt a cultural difference." }, audioUrl: null, status: "review" },
  { id: "L3-S11-W22", korean: "전통", partOfSpeech: "noun", translations: { en: "tradition" }, example: "전통 인사법을 배웠어요.", exampleTranslations: { en: "I learned the traditional way of greeting." }, audioUrl: null, status: "review" },
  { id: "L3-S11-W23", korean: "함께", partOfSpeech: "noun", translations: { en: "together" }, example: "가족이 함께 식사해요.", exampleTranslations: { en: "The family eats together." }, audioUrl: null, status: "review" },
  { id: "L3-S11-W24", korean: "비슷하다", partOfSpeech: "adjective", translations: { en: "similar" }, example: "두 나라의 인사법이 비슷해요.", exampleTranslations: { en: "The two countries' greeting styles are similar." }, audioUrl: null, status: "review" },
  { id: "L3-S11-W25", korean: "다르다", partOfSpeech: "adjective", translations: { en: "different" }, example: "생활방식이 서로 달라요.", exampleTranslations: { en: "The lifestyles are different from each other." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L3-S11-S01", korean: "도시에 비해서 시골은 조용해요.", translations: { en: "Compared to the city, the countryside is quiet." }, keyExpression: "-에 비해서", relatedWords: ["도시"], audioUrl: null },
  { id: "L3-S11-S02", korean: "저는 아침에 일찍 일어나는 편이에요.", translations: { en: "I tend to wake up early in the morning." }, keyExpression: "-는 편이다", relatedWords: ["아침", "일어나다"], audioUrl: null },
  { id: "L3-S11-S03", korean: "제 나라에 비해서 한국은 식사 예절이 조금 달라요.", translations: { en: "Compared to my country, Korea's table manners are a bit different." }, keyExpression: "-에 비해서", relatedWords: ["식사", "예절", "다르다"], audioUrl: null },
  { id: "L3-S11-S04", korean: "한국 사람들은 인사할 때 고개를 숙이는 편이에요.", translations: { en: "Korean people tend to bow their heads when greeting." }, keyExpression: "-는 편이다", relatedWords: ["인사"], audioUrl: null },
  { id: "L3-S11-S05", korean: "처음에는 낯설었지만 지금은 이곳 생활에 익숙해요.", translations: { en: "At first it was unfamiliar, but now I'm used to living here." }, keyExpression: "익숙하다", relatedWords: ["낯설다", "익숙하다"], audioUrl: null },
  { id: "L3-S11-S06", korean: "서로 다른 문화를 존중하면 관계가 더 좋아져요.", translations: { en: "If we respect each other's different cultures, our relationship gets better." }, keyExpression: "존중하다", relatedWords: ["다르다", "문화", "존중하다", "관계"], audioUrl: null },
  { id: "L3-S11-S07", korean: "제 나라에 비해서 한국 사람들은 빨리빨리 하는 편이에요. 그래서 처음에는 적응하기 힘들었어요.", translations: { en: "Compared to my country, Korean people tend to do things quickly. So it was hard to adapt at first." }, keyExpression: "-는 편이다", relatedWords: ["속도", "적응하다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L3-S11-G01",
    pattern: "-에 비해서",
    meanings: { en: "compared to" },
    explanations: {
      en: "Attach -에 비해서 to a noun to compare it against something else.",
    },
    examples: [
      { korean: "도시에 비해서 시골은 조용해요.", translations: { en: "Compared to the city, the countryside is quiet." } },
      { korean: "제 나라에 비해서 한국은 식사 예절이 조금 달라요.", translations: { en: "Compared to my country, Korea's table manners are a bit different." } },
    ],
  },
  {
    id: "L3-S11-G02",
    pattern: "-는 편이다",
    meanings: { en: "tend to be / relatively" },
    explanations: {
      en: "Attach -는 편이다 to a verb/adjective stem to describe a general tendency rather than an absolute fact.",
    },
    examples: [
      { korean: "저는 아침에 일찍 일어나는 편이에요.", translations: { en: "I tend to wake up early in the morning." } },
      { korean: "한국 사람들은 인사할 때 고개를 숙이는 편이에요.", translations: { en: "Korean people tend to bow their heads when greeting." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L3-S11-L01",
    audioText: "제 나라에 비해서 한국은 식사 예절이 조금 달라요. 예를 들어 어른이 먼저 드셔야 해요.",
    audioUrl: null,
    question: "한국 식사 예절의 예로 무엇을 말했습니까?",
    options: ["어른이 먼저 드셔야 해요", "빨리 먹어야 해요", "혼자 먹어야 해요", "서서 먹어야 해요"],
    correctAnswer: 0,
    translations: { en: { question: "What example of Korean table manners was mentioned?", explanation: 'The sentence says "elders eat first," so the correct answer is 어른이 먼저 드셔야 해요.' } },
  },
  {
    id: "L3-S11-L02",
    audioText: "처음에는 모든 것이 낯설었어요. 하지만 시간이 지나면서 점점 익숙해졌어요.",
    audioUrl: null,
    question: "이 사람은 지금 어떻습니까?",
    options: ["적응하지 못했어요", "돌아가고 싶어해요", "아직도 낯설어요", "익숙해졌어요"],
    correctAnswer: 3,
    translations: { en: { question: "How does this person feel now?", explanation: 'The sentence says "gradually became familiar," so the correct answer is 익숙해졌어요.' } },
  },
  {
    id: "L3-S11-L03",
    audioText: "저는 사람들과 어울리는 것을 좋아하는 편이에요. 그래서 이곳 사람들이 함께 밥을 먹는 문화가 좋아요.",
    audioUrl: null,
    question: "이 사람은 어떤 문화를 좋아합니까?",
    options: ["빨리 일하는 문화", "혼자 지내는 문화", "함께 밥을 먹는 문화", "말을 적게 하는 문화"],
    correctAnswer: 2,
    translations: { en: { question: "What culture does this person like?", explanation: "The sentence says they like the culture of eating together, so the correct answer is 함께 밥을 먹는 문화." } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L3-S11-R01",
    passage:
      "제 나라에 비해서 한국은 인사하는 방법이 조금 달라요.\n한국에서는 고개를 숙이면서 인사하는 편이에요.\n처음에는 낯설었지만 지금은 자연스럽게 하고 있어요.\n서로 다른 예절을 이해하면 관계가 더 편해져요.",
    question: "이 사람은 한국의 인사 방법에 대해 지금 어떻게 느낍니까?",
    options: ["자연스럽게 느껴요", "여전히 어려워요", "이상하다고 생각해요", "싫어해요"],
    correctAnswer: 0,
    translations: { en: { question: "How does this person feel about the Korean greeting style now?", explanation: "The passage says they now do it naturally, so the correct answer is 자연스럽게 느껴요." } },
  },
  {
    id: "L3-S11-R02",
    passage:
      "제 나라와 한국은 공통점도 있고 차이점도 있어요.\n두 나라 모두 가족 관계를 중요하게 생각해요.\n하지만 식사 예절이나 인사하는 방식은 조금 달라요.\n저는 이런 차이를 존중하면서 배우려고 해요.",
    question: "두 나라의 공통점은 무엇입니까?",
    options: ["인사 방식이 같아요", "가족 관계를 중요하게 생각해요", "식사 예절이 똑같아요", "말투가 비슷해요"],
    correctAnswer: 1,
    translations: { en: { question: "What is the common point between the two countries?", explanation: "The passage says both value family relationships, so the correct answer is 가족 관계를 중요하게 생각해요." } },
  },
  {
    id: "L3-S11-R03",
    passage:
      "한국에 처음 왔을 때는 생활 속도가 빨라서 적응하기 힘들었어요.\n제 나라에 비해서 사람들이 여유가 없어 보였어요.\n하지만 시간이 지나면서 이런 생활방식에도 익숙해졌어요.\n지금은 오히려 이 속도가 편하게 느껴져요.",
    question: "이 사람은 처음에 왜 적응하기 힘들었습니까?",
    options: ["음식이 안 맞아서", "말투가 낯설어서", "친구가 없어서", "생활 속도가 빨라서"],
    correctAnswer: 3,
    translations: { en: { question: "Why was it hard to adapt at first?", explanation: "The passage says the pace of life was fast, so the correct answer is 생활 속도가 빨라서." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L3-S11-WR01",
    type: "keyword-writing",
    prompt: { en: "Write one sentence comparing Korea and your country, using all of the following words." },
    keywords: ["한국", "내 나라", "다르다"],
    sampleAnswer: { en: "한국은 내 나라에 비해서 인사하는 방법이 달라요." },
    explanation: { en: "-에 비해서 sets up the comparison: 내 나라에 비해서 한국은 …" },
  },
  {
    id: "L3-S11-WR02",
    type: "short-response",
    prompt: {
      en: "Write 3-4 sentences about a difference in everyday lifestyle you've personally experienced (e.g. meals, greetings, daily pace). Keep it to everyday life, not sensitive or political topics.",
    },
    keywords: ["예절", "익숙하다", "적응하다"],
    sampleAnswer: {
      en: "제 나라에 비해서 한국은 식사 예절이 조금 달라요. 처음에는 낯설었지만 지금은 익숙해졌어요. 예를 들어 어른이 먼저 드신 후에 저도 먹기 시작해요. 이제는 이 방식이 자연스럽게 느껴져요.",
    },
    explanation: { en: "Use -에 비해서 for the comparison and 익숙하다/적응하다 to describe how you got used to it." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L3-S11-P01", type: "vocabulary", question: '"예절"의 뜻은 무엇입니까?', options: ["Etiquette / manners", "Habit", "Relationship", "Tradition"], correctAnswer: 0, explanation: { en: "예절 means etiquette/manners." } },
  { id: "L3-S11-P02", type: "vocabulary", question: '"적응하다"의 뜻은 무엇입니까?', options: ["To respect", "To express", "To welcome", "To adapt"], correctAnswer: 3, explanation: { en: "적응하다 means to adapt." } },
  { id: "L3-S11-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n도시______ 시골은 조용해요.", options: ["에 비해서", "때문에", "덕분에", "동안에"], correctAnswer: 0, explanation: { en: "-에 비해서 sets up a comparison: 도시에 비해서." } },
  { id: "L3-S11-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n저는 아침에 일찍 일어나는 ______.", options: ["편이에요", "동안이에요", "김에요", "적이에요"], correctAnswer: 0, explanation: { en: "-는 편이다 describes a tendency: 일어나는 편이에요." } },
  { id: "L3-S11-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n처음에는 모든 것이 ______.", options: ["존중했어요", "낯설었어요", "익숙했어요", "환영했어요"], correctAnswer: 1, explanation: { en: "낯설었어요 means \"it was unfamiliar.\"" } },
  { id: "L3-S11-P06", type: "vocabulary", question: "서로 같은 점을 무엇이라고 합니까?", options: ["차이점", "공통점", "생활방식", "말투"], correctAnswer: 1, explanation: { en: "공통점 means common point/similarity." } },
  { id: "L3-S11-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n서로 다른 문화를 ______ 관계가 좋아져요.", options: ["반대하면", "포기하면", "비교하면", "존중하면"], correctAnswer: 3, explanation: { en: "존중하면 (\"if we respect\") fits improving relationships." } },
  { id: "L3-S11-P08", type: "listening", audioText: "처음에는 낯설었지만 지금은 이곳 생활에 익숙해졌어요.", question: "이 사람은 지금 어떻습니까?", options: ["돌아가고 싶어해요", "여전히 낯설어요", "적응하지 못했어요", "익숙해졌어요"], correctAnswer: 3, explanation: { en: 'The sentence says they became familiar, so the answer is 익숙해졌어요.' } },
  { id: "L3-S11-P09", type: "reading", passage: "두 나라 모두 가족 관계를 중요하게 생각하는 공통점이 있어요.", question: "두 나라의 공통점은 무엇입니까?", options: ["식사 예절이 같아요", "인사 방식이 같아요", "가족 관계를 중요하게 생각해요", "말투가 비슷해요"], correctAnswer: 2, explanation: { en: 'The passage says both value family relationships, so the answer is 가족 관계를 중요하게 생각해요.' } },
  { id: "L3-S11-P10", type: "reading", passage: "생활 속도가 빨라서 처음에는 적응하기 힘들었지만 지금은 편해요.", question: "이 사람은 처음에 왜 힘들었습니까?", options: ["친구가 없어서", "음식이 안 맞아서", "생활 속도가 빨라서", "날씨가 달라서"], correctAnswer: 2, explanation: { en: 'The passage says the pace of life was fast, so the answer is 생활 속도가 빨라서.' } },
];

export const STEP_3_11: StepContent = {
  level: 3,
  step: 11,
  title: "문화와 생활 차이 (Cultural Differences)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
