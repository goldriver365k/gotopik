// TOPIK 3 STEP 13 — Media and Information (미디어와 정보).
// Independent of TOPIK1/TOPIK2/TOPIK3 STEP1-12's data files.
// 자료, 확인하다, 이용하다, 빠르다 already exist as "new" — recorded
// here with status "review".
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L3-S13-W01", korean: "미디어", partOfSpeech: "noun", translations: { en: "media" }, example: "요즘 다양한 미디어를 이용해요.", exampleTranslations: { en: "These days I use various media." }, audioUrl: null, status: "new" },
  { id: "L3-S13-W02", korean: "인터넷", partOfSpeech: "noun", translations: { en: "internet" }, example: "인터넷으로 정보를 찾아요.", exampleTranslations: { en: "I look for information on the internet." }, audioUrl: null, status: "new" },
  { id: "L3-S13-W03", korean: "뉴스", partOfSpeech: "noun", translations: { en: "news" }, example: "아침에 뉴스를 봐요.", exampleTranslations: { en: "I watch the news in the morning." }, audioUrl: null, status: "new" },
  { id: "L3-S13-W04", korean: "기사", partOfSpeech: "noun", translations: { en: "article" }, example: "이 기사를 읽었어요.", exampleTranslations: { en: "I read this article." }, audioUrl: null, status: "new" },
  { id: "L3-S13-W05", korean: "정보", partOfSpeech: "noun", translations: { en: "information" }, example: "유용한 정보를 얻었어요.", exampleTranslations: { en: "I got useful information." }, audioUrl: null, status: "new" },
  { id: "L3-S13-W06", korean: "검색", partOfSpeech: "noun", translations: { en: "search" }, example: "검색 결과가 많아요.", exampleTranslations: { en: "There are many search results." }, audioUrl: null, status: "new" },
  { id: "L3-S13-W07", korean: "SNS", partOfSpeech: "noun", translations: { en: "social media" }, example: "SNS로 친구와 연락해요.", exampleTranslations: { en: "I contact friends through social media." }, audioUrl: null, status: "new" },
  { id: "L3-S13-W08", korean: "방송", partOfSpeech: "noun", translations: { en: "broadcast" }, example: "이 방송이 재미있어요.", exampleTranslations: { en: "This broadcast is interesting." }, audioUrl: null, status: "new" },
  { id: "L3-S13-W09", korean: "내용", partOfSpeech: "noun", translations: { en: "content" }, example: "기사 내용이 어려워요.", exampleTranslations: { en: "The article's content is difficult." }, audioUrl: null, status: "new" },
  { id: "L3-S13-W10", korean: "사실", partOfSpeech: "noun", translations: { en: "fact" }, example: "그건 사실이 아니에요.", exampleTranslations: { en: "That's not a fact." }, audioUrl: null, status: "new" },
  { id: "L3-S13-W11", korean: "소식", partOfSpeech: "noun", translations: { en: "news / word (of something)" }, example: "좋은 소식을 들었어요.", exampleTranslations: { en: "I heard good news." }, audioUrl: null, status: "new" },
  { id: "L3-S13-W12", korean: "공유하다", partOfSpeech: "verb", translations: { en: "to share" }, example: "친구와 정보를 공유해요.", exampleTranslations: { en: "I share information with friends." }, audioUrl: null, status: "new" },
  { id: "L3-S13-W13", korean: "검색하다", partOfSpeech: "verb", translations: { en: "to search" }, example: "인터넷에서 검색해요.", exampleTranslations: { en: "I search on the internet." }, audioUrl: null, status: "new" },
  { id: "L3-S13-W14", korean: "정확하다", partOfSpeech: "adjective", translations: { en: "accurate" }, example: "이 정보가 정확해요.", exampleTranslations: { en: "This information is accurate." }, audioUrl: null, status: "new" },
  { id: "L3-S13-W15", korean: "믿다", partOfSpeech: "verb", translations: { en: "to believe / trust" }, example: "이 뉴스를 믿어요.", exampleTranslations: { en: "I trust this news." }, audioUrl: null, status: "new" },
  { id: "L3-S13-W16", korean: "출처", partOfSpeech: "noun", translations: { en: "source" }, example: "정보의 출처를 확인해요.", exampleTranslations: { en: "I check the source of the information." }, audioUrl: null, status: "new" },
  { id: "L3-S13-W17", korean: "댓글", partOfSpeech: "noun", translations: { en: "comment (online)" }, example: "기사에 댓글을 달았어요.", exampleTranslations: { en: "I left a comment on the article." }, audioUrl: null, status: "new" },
  { id: "L3-S13-W18", korean: "동영상", partOfSpeech: "noun", translations: { en: "video" }, example: "동영상을 보면서 배워요.", exampleTranslations: { en: "I learn while watching videos." }, audioUrl: null, status: "new" },
  { id: "L3-S13-W19", korean: "자료", partOfSpeech: "noun", translations: { en: "material / data" }, example: "인터넷에서 자료를 찾았어요.", exampleTranslations: { en: "I found materials on the internet." }, audioUrl: null, status: "review" },
  { id: "L3-S13-W20", korean: "확인하다", partOfSpeech: "verb", translations: { en: "to check / confirm" }, example: "정보를 확인해요.", exampleTranslations: { en: "I check the information." }, audioUrl: null, status: "review" },
  { id: "L3-S13-W21", korean: "이용하다", partOfSpeech: "verb", translations: { en: "to use" }, example: "SNS를 자주 이용해요.", exampleTranslations: { en: "I often use social media." }, audioUrl: null, status: "review" },
  { id: "L3-S13-W22", korean: "빠르다", partOfSpeech: "adjective", translations: { en: "fast" }, example: "인터넷 뉴스는 빨라요.", exampleTranslations: { en: "Internet news is fast." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L3-S13-S01", korean: "인터넷이 편리하다고 생각해요.", translations: { en: "I think the internet is convenient." }, keyExpression: "-다고 생각하다", relatedWords: ["인터넷"], audioUrl: null },
  { id: "L3-S13-S02", korean: "뉴스에 따르면 내일 비가 온다고 합니다.", translations: { en: "According to the news, it's going to rain tomorrow." }, keyExpression: "-에 따르면", relatedWords: ["뉴스"], audioUrl: null },
  { id: "L3-S13-S03", korean: "저는 이 기사가 정확하다고 생각해요.", translations: { en: "I think this article is accurate." }, keyExpression: "-다고 생각하다", relatedWords: ["기사", "정확하다"], audioUrl: null },
  { id: "L3-S13-S04", korean: "이 방송에 따르면 그 소식은 사실이 아니에요.", translations: { en: "According to this broadcast, that news isn't a fact." }, keyExpression: "-에 따르면", relatedWords: ["방송", "소식", "사실"], audioUrl: null },
  { id: "L3-S13-S05", korean: "저는 정보를 검색한 후에 출처를 꼭 확인해요.", translations: { en: "After searching for information, I always check the source." }, keyExpression: "-(으)ㄴ 후에", relatedWords: ["검색하다", "출처", "확인하다"], audioUrl: null },
  { id: "L3-S13-S06", korean: "SNS로 정보를 공유하는 것이 빠르다고 생각해요.", translations: { en: "I think sharing information through social media is fast." }, keyExpression: "-다고 생각하다", relatedWords: ["공유하다", "빠르다"], audioUrl: null },
  { id: "L3-S13-S07", korean: "댓글을 보면 사람들이 이 동영상 내용을 믿지 않는 것 같아요.", translations: { en: "Looking at the comments, it seems people don't believe this video's content." }, keyExpression: "믿다", relatedWords: ["댓글", "동영상", "내용", "믿다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L3-S13-G01",
    pattern: "-다고 생각하다",
    meanings: { en: "to think that" },
    explanations: {
      en: "Attach -다고 생각하다 after a verb/adjective (in its plain form) to state your own opinion or thought.",
    },
    examples: [
      { korean: "인터넷이 편리하다고 생각해요.", translations: { en: "I think the internet is convenient." } },
      { korean: "저는 이 기사가 정확하다고 생각해요.", translations: { en: "I think this article is accurate." } },
    ],
  },
  {
    id: "L3-S13-G02",
    pattern: "-에 따르면",
    meanings: { en: "according to" },
    explanations: {
      en: "Attach -에 따르면 to a noun naming a source to introduce information reported from that source.",
    },
    examples: [
      { korean: "뉴스에 따르면 내일 비가 온다고 합니다.", translations: { en: "According to the news, it's going to rain tomorrow." } },
      { korean: "이 방송에 따르면 그 소식은 사실이 아니에요.", translations: { en: "According to this broadcast, that news isn't a fact." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L3-S13-L01",
    audioText: "뉴스에 따르면 내일부터 날씨가 추워진다고 합니다.",
    audioUrl: null,
    question: "뉴스에 따르면 내일부터 어떻게 됩니까?",
    options: ["날씨가 추워져요", "비가 와요", "눈이 와요", "바람이 불어요"],
    correctAnswer: 0,
    translations: { en: { question: "According to the news, what will happen starting tomorrow?", explanation: 'The sentence says "it will get cold," so the correct answer is 날씨가 추워져요.' } },
  },
  {
    id: "L3-S13-L02",
    audioText: "저는 SNS에서 본 정보를 바로 믿지 않아요. 먼저 출처를 확인해요.",
    audioUrl: null,
    question: "이 사람은 SNS 정보를 어떻게 이용합니까?",
    options: ["다른 사람에게 물어봐요", "출처를 먼저 확인해요", "무시해요", "바로 믿어요"],
    correctAnswer: 1,
    translations: { en: { question: "How does this person use SNS information?", explanation: "The sentence says they check the source first, so the correct answer is 출처를 먼저 확인해요." } },
  },
  {
    id: "L3-S13-L03",
    audioText: "이 기사는 내용이 정확하다고 생각해요. 그래서 친구들에게 공유했어요.",
    audioUrl: null,
    question: "이 사람은 왜 기사를 공유했습니까?",
    options: ["길이가 짧아서", "재미있어서", "내용이 정확하다고 생각해서", "친구가 부탁해서"],
    correctAnswer: 2,
    translations: { en: { question: "Why did they share the article?", explanation: 'The sentence says "because they think the content is accurate," so the correct answer is 내용이 정확하다고 생각해서.' } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L3-S13-R01",
    passage:
      "저는 궁금한 것이 있으면 먼저 인터넷에서 검색해요.\n검색 결과가 많으면 여러 기사를 비교하면서 읽어요.\n정보가 정확한지 확인하기 위해서 출처도 꼭 봐요.\n이렇게 하면 잘못된 정보를 믿지 않을 수 있어요.",
    question: "이 사람은 정보를 확인하기 위해 무엇을 봅니까?",
    options: ["작성 날짜", "출처", "글자 크기", "댓글 수"],
    correctAnswer: 1,
    translations: { en: { question: "What does this person check to verify information?", explanation: "The passage says they check the source, so the correct answer is 출처." } },
  },
  {
    id: "L3-S13-R02",
    passage:
      "요즘 사람들은 뉴스보다 SNS로 소식을 더 빨리 접해요.\n하지만 SNS의 정보는 사실이 아닐 때도 있어요.\n그래서 정보를 공유하기 전에 사실인지 확인하는 것이 중요해요.\n저도 공유하기 전에 항상 다시 한번 확인해요.",
    question: "이 글에 따르면 무엇이 중요합니까?",
    options: ["동영상을 만드는 것", "빨리 공유하는 것", "공유하기 전에 사실인지 확인하는 것", "댓글을 많이 다는 것"],
    correctAnswer: 2,
    translations: { en: { question: "According to this passage, what is important?", explanation: "The passage says checking facts before sharing is important, so the correct answer is 공유하기 전에 사실인지 확인하는 것." } },
  },
  {
    id: "L3-S13-R03",
    passage:
      "저는 매일 아침 뉴스 기사를 확인하는 습관이 있어요.\n뉴스에 따르면 요즘 가짜 정보가 많다고 해요.\n그래서 저는 여러 출처의 기사를 비교하면서 읽어요.\n이렇게 하는 것이 정확한 정보를 얻는 좋은 방법이라고 생각해요.",
    question: "이 사람은 정확한 정보를 얻기 위해 어떻게 합니까?",
    options: ["여러 출처의 기사를 비교해요", "SNS만 봐요", "댓글만 읽어요", "기사를 읽지 않아요"],
    correctAnswer: 0,
    translations: { en: { question: "How does this person get accurate information?", explanation: "The passage says they compare articles from several sources, so the correct answer is 여러 출처의 기사를 비교해요." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L3-S13-WR01",
    type: "keyword-writing",
    prompt: { en: "Write one sentence using all of the following words." },
    keywords: ["인터넷", "정보", "편리하다", "생각하다"],
    sampleAnswer: { en: "인터넷으로 정보를 찾는 것이 편리하다고 생각해요." },
    explanation: { en: "-다고 생각하다 attaches after the plain form of an adjective/verb: 편리하다고 생각해요." },
  },
  {
    id: "L3-S13-WR02",
    type: "short-response",
    prompt: { en: "Write about 4 sentences about a media/information source you use often and why." },
    keywords: ["자주", "이용하다", "이유"],
    sampleAnswer: {
      en: "저는 인터넷 뉴스를 자주 이용해요. 뉴스에 따르면 최신 소식을 가장 빨리 알 수 있어서예요. 그리고 궁금한 것이 있으면 바로 검색할 수 있어서 편리해요. 그래서 저는 인터넷이 가장 편리한 정보 매체라고 생각해요.",
    },
    explanation: { en: "Name the media source, then give a reason using -아서/어서 or -기 때문에, and close with -다고 생각해요." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L3-S13-P01", type: "vocabulary", question: '"출처"의 뜻은 무엇입니까?', options: ["Source", "Comment", "Content", "Fact"], correctAnswer: 0, explanation: { en: "출처 means source." } },
  { id: "L3-S13-P02", type: "vocabulary", question: '"공유하다"의 뜻은 무엇입니까?', options: ["To search", "To share", "To believe", "To check"], correctAnswer: 1, explanation: { en: "공유하다 means to share." } },
  { id: "L3-S13-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n인터넷이 편리______ 생각해요.", options: ["하다고", "해서", "하니까", "하는데"], correctAnswer: 0, explanation: { en: "-다고 생각하다 states an opinion: 편리하다고 생각해요." } },
  { id: "L3-S13-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n뉴스______ 내일 비가 온다고 합니다.", options: ["에 따르면", "때문에", "보다", "동안"], correctAnswer: 0, explanation: { en: "-에 따르면 introduces a source: 뉴스에 따르면." } },
  { id: "L3-S13-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n저는 이 정보가 ______ 생각해요.", options: ["믿는다고", "정확하다고", "공유한다고", "검색한다고"], correctAnswer: 1, explanation: { en: "정확하다고 생각해요 means \"I think it's accurate.\"" } },
  { id: "L3-S13-P06", type: "vocabulary", question: "인터넷에서 원하는 것을 찾을 때 하는 행동은?", options: ["확인하다", "검색하다", "믿다", "공유하다"], correctAnswer: 1, explanation: { en: "검색하다 means to search." } },
  { id: "L3-S13-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n정보를 믿기 전에 ______를 확인해야 해요.", options: ["방송", "댓글", "출처", "동영상"], correctAnswer: 2, explanation: { en: "출처 (source) is checked to verify information." } },
  { id: "L3-S13-P08", type: "listening", audioText: "저는 SNS에서 본 정보를 바로 믿지 않고 출처를 먼저 확인해요.", question: "이 사람은 SNS 정보를 어떻게 이용합니까?", options: ["친구에게 물어봐요", "바로 믿어요", "출처를 먼저 확인해요", "무시해요"], correctAnswer: 2, explanation: { en: 'The sentence says they check the source first, so the answer is 출처를 먼저 확인해요.' } },
  { id: "L3-S13-P09", type: "reading", passage: "정보를 공유하기 전에 사실인지 확인하는 것이 중요해요.", question: "이 글에서 중요하다고 말하는 것은 무엇입니까?", options: ["동영상 만들기", "빨리 공유하기", "댓글 많이 달기", "공유 전에 사실 확인하기"], correctAnswer: 3, explanation: { en: 'The passage says checking facts before sharing is important, so the answer is 공유 전에 사실 확인하기.' } },
  { id: "L3-S13-P10", type: "reading", passage: "정확한 정보를 얻기 위해 여러 출처의 기사를 비교해요.", question: "이 사람은 정확한 정보를 얻기 위해 어떻게 합니까?", options: ["기사를 안 읽어요", "SNS만 봐요", "댓글만 읽어요", "여러 출처의 기사를 비교해요"], correctAnswer: 3, explanation: { en: 'The passage says they compare articles from multiple sources, so the answer is 여러 출처의 기사를 비교해요.' } },
];

export const STEP_3_13: StepContent = {
  level: 3,
  step: 13,
  title: "미디어와 정보 (Media and Information)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
