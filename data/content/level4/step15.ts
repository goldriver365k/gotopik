// TOPIK 4 STEP 15 — Change and Generations (변화와 세대).
// Independent of TOPIK1/TOPIK2/TOPIK3/TOPIK4 STEP1-14's data files.
// 세대, 세대차이, 생활방식, 문화, 소통, 공통점, 익숙하다, 받아들이다
// already exist as "new" elsewhere (TOPIK2/TOPIK3/TOPIK4 STEP8) —
// recorded here with status "review", actively reused as this stage's
// prompt asks. -에 비해서 (TOPIK3 STEP11) and -게 되다 (TOPIK4 STEP11)
// are both reused rather than re-taught as new.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L4-S15-W01", korean: "과거", partOfSpeech: "noun", translations: { en: "the past" }, example: "과거와 지금은 많이 달라요.", exampleTranslations: { en: "The past and now are very different." }, audioUrl: null, status: "new" },
  { id: "L4-S15-W02", korean: "현재", partOfSpeech: "noun", translations: { en: "the present" }, example: "현재 생활은 예전과 많이 바뀌었어요.", exampleTranslations: { en: "Life in the present has changed a lot from before." }, audioUrl: null, status: "new" },
  { id: "L4-S15-W03", korean: "가치관", partOfSpeech: "noun", translations: { en: "values / outlook" }, example: "세대마다 가치관이 달라요.", exampleTranslations: { en: "Values differ by generation." }, audioUrl: null, status: "new" },
  { id: "L4-S15-W04", korean: "방식", partOfSpeech: "noun", translations: { en: "way / method" }, example: "일하는 방식이 예전과 달라졌어요.", exampleTranslations: { en: "The way of working has changed from before." }, audioUrl: null, status: "new" },
  { id: "L4-S15-W05", korean: "달라지다", partOfSpeech: "verb", translations: { en: "to become different" }, example: "생활 방식이 많이 달라졌어요.", exampleTranslations: { en: "The way of life has become very different." }, audioUrl: null, status: "new" },
  { id: "L4-S15-W06", korean: "영향을 받다", partOfSpeech: "verb", translations: { en: "to be influenced by" }, example: "기술의 영향을 많이 받았어요.", exampleTranslations: { en: "We've been influenced a lot by technology." }, audioUrl: null, status: "new" },
  { id: "L4-S15-W07", korean: "시대", partOfSpeech: "noun", translations: { en: "era / times" }, example: "시대가 많이 변했어요.", exampleTranslations: { en: "The times have changed a lot." }, audioUrl: null, status: "new" },
  { id: "L4-S15-W08", korean: "옛날", partOfSpeech: "noun", translations: { en: "the old days" }, example: "옛날에는 이런 게 없었어요.", exampleTranslations: { en: "This didn't exist in the old days." }, audioUrl: null, status: "new" },
  { id: "L4-S15-W09", korean: "예전", partOfSpeech: "noun", translations: { en: "before / formerly" }, example: "예전보다 훨씬 편리해졌어요.", exampleTranslations: { en: "It's become much more convenient than before." }, audioUrl: null, status: "new" },
  { id: "L4-S15-W10", korean: "요즘", partOfSpeech: "noun", translations: { en: "these days" }, example: "요즘은 온라인으로 많이 해요.", exampleTranslations: { en: "These days, a lot is done online." }, audioUrl: null, status: "new" },
  { id: "L4-S15-W11", korean: "오늘날", partOfSpeech: "noun", translations: { en: "today / nowadays" }, example: "오늘날의 생활은 정말 편리해요.", exampleTranslations: { en: "Life today is really convenient." }, audioUrl: null, status: "new" },
  { id: "L4-S15-W12", korean: "시절", partOfSpeech: "noun", translations: { en: "the time / days (of one's life)" }, example: "학생 시절이 그리워요.", exampleTranslations: { en: "I miss my student days." }, audioUrl: null, status: "new" },
  { id: "L4-S15-W13", korean: "변모하다", partOfSpeech: "verb", translations: { en: "to transform" }, example: "동네가 완전히 변모했어요.", exampleTranslations: { en: "The neighborhood transformed completely." }, audioUrl: null, status: "new" },
  { id: "L4-S15-W14", korean: "세대교체", partOfSpeech: "noun", translations: { en: "generational change" }, example: "직장에서도 세대교체가 일어나고 있어요.", exampleTranslations: { en: "Generational change is happening at work too." }, audioUrl: null, status: "new" },
  { id: "L4-S15-W15", korean: "구세대", partOfSpeech: "noun", translations: { en: "older generation" }, example: "구세대와 신세대의 생각이 달라요.", exampleTranslations: { en: "The older and younger generations think differently." }, audioUrl: null, status: "new" },
  { id: "L4-S15-W16", korean: "신세대", partOfSpeech: "noun", translations: { en: "younger generation" }, example: "신세대는 기술을 빠르게 받아들여요.", exampleTranslations: { en: "The younger generation quickly accepts technology." }, audioUrl: null, status: "new" },
  { id: "L4-S15-W17", korean: "세대", partOfSpeech: "noun", translations: { en: "generation" }, example: "세대에 따라 생각이 달라요.", exampleTranslations: { en: "Thinking differs by generation." }, audioUrl: null, status: "review" },
  { id: "L4-S15-W18", korean: "세대차이", partOfSpeech: "noun", translations: { en: "generation gap" }, example: "세대차이를 느낄 때가 있어요.", exampleTranslations: { en: "There are times I feel a generation gap." }, audioUrl: null, status: "review" },
  { id: "L4-S15-W19", korean: "생활방식", partOfSpeech: "noun", translations: { en: "way of life / lifestyle" }, example: "나라마다 생활방식이 달라요.", exampleTranslations: { en: "Lifestyles differ by country." }, audioUrl: null, status: "review" },
  { id: "L4-S15-W20", korean: "문화", partOfSpeech: "noun", translations: { en: "culture" }, example: "한국 문화를 배워요.", exampleTranslations: { en: "I'm learning Korean culture." }, audioUrl: null, status: "review" },
  { id: "L4-S15-W21", korean: "소통", partOfSpeech: "noun", translations: { en: "communication" }, example: "동료와의 소통이 중요해요.", exampleTranslations: { en: "Communication with coworkers is important." }, audioUrl: null, status: "review" },
  { id: "L4-S15-W22", korean: "공통점", partOfSpeech: "noun", translations: { en: "common point / similarity" }, example: "두 나라는 공통점이 많아요.", exampleTranslations: { en: "The two countries have many things in common." }, audioUrl: null, status: "review" },
  { id: "L4-S15-W23", korean: "익숙하다", partOfSpeech: "adjective", translations: { en: "familiar / used to" }, example: "이제 한국 생활이 익숙해요.", exampleTranslations: { en: "I'm used to life in Korea now." }, audioUrl: null, status: "review" },
  { id: "L4-S15-W24", korean: "받아들이다", partOfSpeech: "verb", translations: { en: "to accept" }, example: "새로운 문화를 받아들였어요.", exampleTranslations: { en: "I accepted the new culture." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L4-S15-S01", korean: "요즘 생활 방식은 예전에 비해서 훨씬 편리해졌어요.", translations: { en: "Today's way of life has become much more convenient compared to before." }, keyExpression: "-에 비해서", relatedWords: ["요즘", "예전"], audioUrl: null },
  { id: "L4-S15-S02", korean: "신세대의 소통 방식은 구세대에 비해서 많이 달라요.", translations: { en: "The younger generation's way of communicating is quite different compared to the older generation." }, keyExpression: "-에 비해서", relatedWords: ["신세대", "소통", "방식", "구세대"], audioUrl: null },
  { id: "L4-S15-S03", korean: "기술이 발전하면서 소통 방식도 많이 달라지게 됐어요.", translations: { en: "As technology developed, the way of communicating also came to change a lot." }, keyExpression: "-게 되다", relatedWords: ["소통", "달라지다"], audioUrl: null },
  { id: "L4-S15-S04", korean: "시대가 변하면서 가치관도 자연스럽게 바뀌게 됐어요.", translations: { en: "As the times changed, values also naturally came to shift." }, keyExpression: "-게 되다", relatedWords: ["시대", "가치관"], audioUrl: null },
  { id: "L4-S15-S05", korean: "옛날에는 편지로 소통했지만 오늘날에는 메시지로 소통해요.", translations: { en: "In the old days people communicated by letter, but today they communicate by message." }, keyExpression: "옛날", relatedWords: ["옛날", "오늘날", "소통"], audioUrl: null },
  { id: "L4-S15-S06", korean: "학생 시절과 지금을 비교하면 정말 많은 것이 달라졌어요.", translations: { en: "Comparing my student days to now, so many things have changed." }, keyExpression: "시절", relatedWords: ["시절", "달라지다"], audioUrl: null },
  { id: "L4-S15-S07", korean: "이 동네는 몇 년 사이에 완전히 변모했어요.", translations: { en: "This neighborhood has completely transformed in just a few years." }, keyExpression: "변모하다", relatedWords: ["변모하다"], audioUrl: null },
  { id: "L4-S15-S08", korean: "직장에서도 세대교체가 일어나면서 새로운 가치관을 받아들이게 됐어요.", translations: { en: "As generational change happens at work too, we've come to accept new values." }, keyExpression: "세대교체", relatedWords: ["세대교체", "가치관", "받아들이다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L4-S15-G01",
    pattern: "-에 비해서 (복습)",
    meanings: { en: "compared to (review)" },
    explanations: {
      en: "Keep using -에 비해서 (TOPIK3 STEP11) to compare a past situation with the present, or one generation with another.",
    },
    examples: [
      { korean: "요즘 생활 방식은 예전에 비해서 훨씬 편리해졌어요.", translations: { en: "Today's way of life has become much more convenient compared to before." } },
      { korean: "신세대의 소통 방식은 구세대에 비해서 많이 달라요.", translations: { en: "The younger generation's way of communicating is quite different compared to the older generation." } },
    ],
  },
  {
    id: "L4-S15-G02",
    pattern: "-게 되다 (복습)",
    meanings: { en: "to come to (do something) (review)" },
    explanations: {
      en: "Keep using -게 되다 (TOPIK4 STEP11) to show a gradual change over time, now applied to shifts across generations.",
    },
    examples: [
      { korean: "기술이 발전하면서 소통 방식도 많이 달라지게 됐어요.", translations: { en: "As technology developed, the way of communicating also came to change a lot." } },
      { korean: "시대가 변하면서 가치관도 자연스럽게 바뀌게 됐어요.", translations: { en: "As the times changed, values also naturally came to shift." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L4-S15-L01",
    audioText: "요즘 생활 방식은 예전에 비해서 훨씬 편리해졌어요. 기술 덕분이라고 생각해요.",
    audioUrl: null,
    question: "이 사람은 생활 방식이 편리해진 이유를 무엇이라고 생각합니까?",
    options: ["날씨 덕분", "기술 덕분", "친구 덕분", "우연히"],
    correctAnswer: 1,
    translations: { en: { question: "What does this person think is the reason life has become convenient?", explanation: 'The sentence says "thanks to technology," so the correct answer is 기술 덕분.' } },
  },
  {
    id: "L4-S15-L02",
    audioText: "신세대의 소통 방식은 구세대에 비해서 많이 달라요. 그래서 서로 이해하려는 노력이 필요해요.",
    audioUrl: null,
    question: "이 사람이 필요하다고 말하는 것은 무엇입니까?",
    options: ["새 기술 구매", "세대 간의 경쟁", "서로 이해하려는 노력", "혼자 지내는 것"],
    correctAnswer: 2,
    translations: { en: { question: "What does this person say is needed?", explanation: "The sentence says an effort to understand each other is needed, so the correct answer is 서로 이해하려는 노력." } },
  },
  {
    id: "L4-S15-L03",
    audioText: "이 동네는 몇 년 사이에 완전히 변모했어요. 옛날 모습은 거의 남아 있지 않아요.",
    audioUrl: null,
    question: "이 동네는 어떻게 변했습니까?",
    options: ["옛날 모습 그대로다", "없어졌다", "더 작아졌다", "완전히 변모했다"],
    correctAnswer: 3,
    translations: { en: { question: "How has this neighborhood changed?", explanation: "The sentence says it completely transformed, so the correct answer is 완전히 변모했다." } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L4-S15-R01",
    passage:
      "옛날에는 편지나 전화로 소통했지만 오늘날에는 메시지와 영상통화로 소통해요.\n이런 변화는 기술의 발전에 큰 영향을 받았다고 볼 수 있어요.\n소통 방식뿐만 아니라 일하는 방식과 여가를 즐기는 방식도 많이 달라졌어요.\n이렇게 시대가 변하면서 사람들의 생활 방식 전체가 변모하고 있어요.",
    question: "이 글에서 소통 방식의 변화는 무엇에 영향을 받았습니까?",
    options: ["날씨", "기술의 발전", "인구 감소", "가격 상승"],
    correctAnswer: 1,
    translations: { en: { question: "What did the change in communication methods get influenced by, according to the passage?", explanation: "The passage says it was influenced by technological development, so the correct answer is 기술의 발전." } },
  },
  {
    id: "L4-S15-R02",
    passage:
      "구세대와 신세대는 가치관에서 차이가 나는 경우가 많아요.\n예를 들어 구세대는 안정적인 직장을 중요하게 생각하는 반면에 신세대는 자기 시간을 더 중요하게 생각하는 편이에요.\n이런 차이는 자연스러운 시대 변화의 결과라고 볼 수 있어요.\n서로 다른 가치관을 이해하고 존중하는 것이 세대 간의 갈등을 줄이는 방법이에요.",
    question: "이 글에 따르면 세대 간 갈등을 줄이는 방법은 무엇입니까?",
    options: ["서로 무시하기", "한쪽 생각만 따르기", "서로 다른 가치관을 이해하고 존중하기", "대화를 피하기"],
    correctAnswer: 2,
    translations: { en: { question: "According to the passage, what reduces conflict between generations?", explanation: "The passage says understanding and respecting different values, so the correct answer is 서로 다른 가치관을 이해하고 존중하기." } },
  },
  {
    id: "L4-S15-R03",
    passage:
      "저는 학생 시절과 지금의 생활을 비교해 보면 정말 많은 것이 달라졌다고 느껴요.\n예전에는 도서관에서 책을 찾아야 했지만 지금은 인터넷으로 바로 검색할 수 있게 됐어요.\n이런 변화 덕분에 시간을 많이 절약할 수 있게 됐어요.\n하지만 가끔은 예전 방식이 그리울 때도 있어요.",
    question: "이 사람은 예전과 비교해서 지금 무엇이 좋아졌다고 느낍니까?",
    options: ["친구가 더 많아졌다", "책을 더 많이 읽게 됐다", "도서관이 더 좋아졌다", "시간을 절약할 수 있게 됐다"],
    correctAnswer: 3,
    translations: { en: { question: "What does this person feel has improved compared to before?", explanation: "The passage says they can save a lot of time now, so the correct answer is 시간을 절약할 수 있게 됐다." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L4-S15-WR01",
    type: "keyword-writing",
    prompt: { en: "Write one sentence using all of the following words." },
    keywords: ["과거", "현재", "달라지다"],
    sampleAnswer: { en: "과거에 비해 현재의 생활 방식이 많이 달라졌어요." },
    explanation: { en: "Combine 과거 and 현재 for the comparison, then 달라지다 for the result." },
  },
  {
    id: "L4-S15-WR02",
    type: "short-response",
    prompt: {
      en: "Write 5-6 sentences about what has changed between the past and the present.\nStructure: past situation → present situation → the difference → reason for the change → your opinion (advantage/disadvantage).",
    },
    keywords: ["과거", "현재", "달라지다", "영향을 받다"],
    sampleAnswer: {
      en: "과거에는 사람들이 주로 직접 만나거나 편지로 소통했어요. 하지만 현재는 스마트폰과 인터넷으로 언제든지 연락할 수 있게 됐어요. 이런 차이는 기술 발전의 영향을 받았다고 볼 수 있어요. 소통이 훨씬 빠르고 편리해졌다는 점은 큰 장점이라고 생각해요. 하지만 직접 만나서 대화하는 시간이 줄어든 것은 아쉬운 점이에요. 그래도 저는 전체적으로 지금의 생활 방식이 더 편리하다고 생각해요.",
    },
    explanation: { en: "6 sentences following past → present → difference → reason → opinion is enough at this stage." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L4-S15-P01", type: "vocabulary", question: '"가치관"의 뜻은 무엇입니까?', options: ["Values / outlook", "Way of life", "Common point", "Generation"], correctAnswer: 0, explanation: { en: "가치관 means values/outlook." } },
  { id: "L4-S15-P02", type: "vocabulary", question: '"구세대"의 뜻은 무엇입니까?', options: ["Younger generation", "Older generation", "Generation gap", "Generational change"], correctAnswer: 1, explanation: { en: "구세대 means older generation." } },
  { id: "L4-S15-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n요즘 생활 방식은 예전______ 훨씬 편리해졌어요.", options: ["에 비해서", "는 대신에", "는 김에", "기 나름으로"], correctAnswer: 0, explanation: { en: "-에 비해서 compares present and past: 예전에 비해서." } },
  { id: "L4-S15-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n기술이 발전하면서 소통 방식도 달라지______.", options: ["게 됐어요", "는 반면이에요", "기 나름이에요", "는 대신이에요"], correctAnswer: 0, explanation: { en: "-게 되다 shows a gradual change: 달라지게 됐어요." } },
  { id: "L4-S15-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n옛날에는 편지로, ______에는 메시지로 소통해요.", options: ["구세대", "오늘날", "시절", "가치관"], correctAnswer: 1, explanation: { en: "오늘날 (nowadays) contrasts with 옛날 (the old days)." } },
  { id: "L4-S15-P06", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n이 동네는 몇 년 사이에 완전히 ______.", options: ["달라졌어요", "변모했어요", "익숙해졌어요", "받아들였어요"], correctAnswer: 1, explanation: { en: "변모하다 (to transform) fits describing a neighborhood's complete change." } },
  { id: "L4-S15-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n직장에서도 ______이/가 일어나면서 새로운 가치관을 받아들이게 됐어요.", options: ["공통점", "생활방식", "세대교체", "소통"], correctAnswer: 2, explanation: { en: "세대교체 (generational change) fits a workplace shift." } },
  { id: "L4-S15-P08", type: "listening", audioText: "요즘 생활 방식은 예전에 비해서 훨씬 편리해졌어요. 기술 덕분이라고 생각해요.", question: "이 사람은 생활 방식이 편리해진 이유를 무엇이라고 생각합니까?", options: ["날씨 덕분", "친구 덕분", "우연히", "기술 덕분"], correctAnswer: 3, explanation: { en: "The sentence says thanks to technology, so the answer is 기술 덕분." } },
  { id: "L4-S15-P09", type: "listening", audioText: "신세대의 소통 방식은 구세대에 비해서 많이 달라요. 그래서 서로 이해하려는 노력이 필요해요.", question: "이 사람이 필요하다고 말하는 것은 무엇입니까?", options: ["세대 간의 경쟁", "새 기술 구매", "혼자 지내는 것", "서로 이해하려는 노력"], correctAnswer: 3, explanation: { en: "The sentence says an effort to understand each other is needed, so the answer is 서로 이해하려는 노력." } },
  { id: "L4-S15-P10", type: "reading", passage: "옛날에는 편지나 전화로 소통했지만 오늘날에는 메시지와 영상통화로 소통해요. 이런 변화는 기술의 발전에 큰 영향을 받았다고 볼 수 있어요.", question: "이 글에서 소통 방식의 변화는 무엇에 영향을 받았습니까?", options: ["날씨", "인구 감소", "가격 상승", "기술의 발전"], correctAnswer: 3, explanation: { en: "The passage says it was influenced by technological development, so the answer is 기술의 발전." } },
  { id: "L4-S15-P11", type: "reading", passage: "서로 다른 가치관을 이해하고 존중하는 것이 세대 간의 갈등을 줄이는 방법이에요.", question: "이 글에 따르면 세대 간 갈등을 줄이는 방법은 무엇입니까?", options: ["서로 무시하기", "한쪽 생각만 따르기", "서로 다른 가치관을 이해하고 존중하기", "대화를 피하기"], correctAnswer: 2, explanation: { en: "The passage says understanding and respecting different values, so the answer is 서로 다른 가치관을 이해하고 존중하기." } },
  { id: "L4-S15-P12", type: "sentence", question: "다음 중 자연스러운 문장은?", options: ["예전보다에 훨씬 편리해졌어요.", "예전에 비해 훨씬은 편리해졌어요.", "예전에 비해서 훨씬 편리해졌어요.", "예전에서 비해서 훨씬 편리해졌어요."], correctAnswer: 2, explanation: { en: "-에 비해서 attaches directly to the noun: 예전에 비해서." } },
];

export const STEP_4_15: StepContent = {
  level: 4,
  step: 15,
  title: "변화와 세대 (Change and Generations)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
