// TOPIK 4 STEP 9 — Media and Information (미디어와 정보).
// Independent of TOPIK1/TOPIK2/TOPIK3/TOPIK4 STEP1-8's data files.
// 미디어, 뉴스, 기사, SNS, 출처, 검색, 확인 already exist as "new"
// elsewhere (TOPIK3); 영향 was newly introduced at TOPIK4 STEP5 — all
// recorded here with status "review". -에 따르면 (TOPIK3 STEP13) is
// reused at a higher difficulty (survey/statistics language) rather
// than re-taught as new, per docs/topik4-curriculum.md §4.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L4-S9-W01", korean: "보도", partOfSpeech: "noun", translations: { en: "news report / coverage" }, example: "이 사건이 뉴스로 보도됐어요.", exampleTranslations: { en: "This incident was reported in the news." }, audioUrl: null, status: "new" },
  { id: "L4-S9-W02", korean: "광고", partOfSpeech: "noun", translations: { en: "advertisement" }, example: "인터넷에 광고가 많아요.", exampleTranslations: { en: "There are many ads on the internet." }, audioUrl: null, status: "new" },
  { id: "L4-S9-W03", korean: "정확성", partOfSpeech: "noun", translations: { en: "accuracy" }, example: "정보의 정확성이 중요해요.", exampleTranslations: { en: "The accuracy of information is important." }, audioUrl: null, status: "new" },
  { id: "L4-S9-W04", korean: "공유", partOfSpeech: "noun", translations: { en: "sharing" }, example: "이 글을 친구와 공유했어요.", exampleTranslations: { en: "I shared this post with a friend." }, audioUrl: null, status: "new" },
  { id: "L4-S9-W05", korean: "전달", partOfSpeech: "noun", translations: { en: "delivery / conveying" }, example: "정보 전달이 빨라졌어요.", exampleTranslations: { en: "Information delivery has become fast." }, audioUrl: null, status: "new" },
  { id: "L4-S9-W06", korean: "판단", partOfSpeech: "noun", translations: { en: "judgment" }, example: "스스로 판단해야 해요.", exampleTranslations: { en: "You have to judge for yourself." }, audioUrl: null, status: "new" },
  { id: "L4-S9-W07", korean: "이용자", partOfSpeech: "noun", translations: { en: "user" }, example: "SNS 이용자가 많아요.", exampleTranslations: { en: "There are many SNS users." }, audioUrl: null, status: "new" },
  { id: "L4-S9-W08", korean: "믿을 만하다", partOfSpeech: "adjective", translations: { en: "trustworthy / reliable" }, example: "이 뉴스는 믿을 만해요.", exampleTranslations: { en: "This news is trustworthy." }, audioUrl: null, status: "new" },
  { id: "L4-S9-W09", korean: "가짜뉴스", partOfSpeech: "noun", translations: { en: "fake news" }, example: "가짜뉴스를 조심해야 해요.", exampleTranslations: { en: "You must be careful of fake news." }, audioUrl: null, status: "new" },
  { id: "L4-S9-W10", korean: "허위정보", partOfSpeech: "noun", translations: { en: "false information" }, example: "허위정보가 퍼지고 있어요.", exampleTranslations: { en: "False information is spreading." }, audioUrl: null, status: "new" },
  { id: "L4-S9-W11", korean: "왜곡되다", partOfSpeech: "verb", translations: { en: "to be distorted" }, example: "사실이 왜곡됐어요.", exampleTranslations: { en: "The facts were distorted." }, audioUrl: null, status: "new" },
  { id: "L4-S9-W12", korean: "편향되다", partOfSpeech: "verb", translations: { en: "to be biased" }, example: "이 기사는 편향된 것 같아요.", exampleTranslations: { en: "This article seems biased." }, audioUrl: null, status: "new" },
  { id: "L4-S9-W13", korean: "구독하다", partOfSpeech: "verb", translations: { en: "to subscribe" }, example: "이 채널을 구독해요.", exampleTranslations: { en: "I subscribe to this channel." }, audioUrl: null, status: "new" },
  { id: "L4-S9-W14", korean: "게시물", partOfSpeech: "noun", translations: { en: "post (online)" }, example: "게시물을 올렸어요.", exampleTranslations: { en: "I uploaded a post." }, audioUrl: null, status: "new" },
  { id: "L4-S9-W15", korean: "조회수", partOfSpeech: "noun", translations: { en: "view count" }, example: "조회수가 많아요.", exampleTranslations: { en: "The view count is high." }, audioUrl: null, status: "new" },
  { id: "L4-S9-W16", korean: "확산되다", partOfSpeech: "verb", translations: { en: "to spread" }, example: "소문이 빠르게 확산됐어요.", exampleTranslations: { en: "The rumor spread quickly." }, audioUrl: null, status: "new" },
  { id: "L4-S9-W17", korean: "신중하다", partOfSpeech: "adjective", translations: { en: "cautious / prudent" }, example: "정보를 믿기 전에 신중해야 해요.", exampleTranslations: { en: "You must be cautious before believing information." }, audioUrl: null, status: "new" },
  { id: "L4-S9-W18", korean: "노출되다", partOfSpeech: "verb", translations: { en: "to be exposed" }, example: "거짓 정보에 쉽게 노출돼요.", exampleTranslations: { en: "You're easily exposed to false information." }, audioUrl: null, status: "new" },
  { id: "L4-S9-W19", korean: "미디어", partOfSpeech: "noun", translations: { en: "media" }, example: "요즘 다양한 미디어를 이용해요.", exampleTranslations: { en: "These days I use various media." }, audioUrl: null, status: "review" },
  { id: "L4-S9-W20", korean: "뉴스", partOfSpeech: "noun", translations: { en: "news" }, example: "아침에 뉴스를 봐요.", exampleTranslations: { en: "I watch the news in the morning." }, audioUrl: null, status: "review" },
  { id: "L4-S9-W21", korean: "기사", partOfSpeech: "noun", translations: { en: "article" }, example: "이 기사를 읽었어요.", exampleTranslations: { en: "I read this article." }, audioUrl: null, status: "review" },
  { id: "L4-S9-W22", korean: "SNS", partOfSpeech: "noun", translations: { en: "social media" }, example: "SNS로 친구와 연락해요.", exampleTranslations: { en: "I contact friends through social media." }, audioUrl: null, status: "review" },
  { id: "L4-S9-W23", korean: "출처", partOfSpeech: "noun", translations: { en: "source" }, example: "정보의 출처를 확인해요.", exampleTranslations: { en: "I check the source of the information." }, audioUrl: null, status: "review" },
  { id: "L4-S9-W24", korean: "검색", partOfSpeech: "noun", translations: { en: "search" }, example: "검색 결과가 많아요.", exampleTranslations: { en: "There are many search results." }, audioUrl: null, status: "review" },
  { id: "L4-S9-W25", korean: "확인", partOfSpeech: "noun", translations: { en: "check / confirmation" }, example: "확인 후에 연락드릴게요.", exampleTranslations: { en: "I'll contact you after checking." }, audioUrl: null, status: "review" },
  { id: "L4-S9-W26", korean: "영향", partOfSpeech: "noun", translations: { en: "influence / effect" }, example: "스트레스가 건강에 영향을 줘요.", exampleTranslations: { en: "Stress affects health." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L4-S9-S01", korean: "조사 결과에 따르면 많은 사람들이 인터넷으로 뉴스를 봅니다.", translations: { en: "According to the survey results, many people watch news on the internet." }, keyExpression: "-에 따르면", relatedWords: ["뉴스"], audioUrl: null },
  { id: "L4-S9-S02", korean: "최근 자료에 따르면 SNS 이용자가 계속 늘고 있습니다.", translations: { en: "According to recent data, the number of SNS users keeps increasing." }, keyExpression: "-에 따르면", relatedWords: ["이용자"], audioUrl: null },
  { id: "L4-S9-S03", korean: "이 결과를 보면 온라인 정보 이용이 증가하고 있다고 볼 수 있습니다.", translations: { en: "Looking at this result, it can be seen that online information use is increasing." }, keyExpression: "-다고 볼 수 있다", relatedWords: [], audioUrl: null },
  { id: "L4-S9-S04", korean: "조회수가 많다고 해서 그 정보가 정확하다고 볼 수는 없습니다.", translations: { en: "Just because the view count is high doesn't mean the information can be seen as accurate." }, keyExpression: "-다고 볼 수 있다", relatedWords: ["조회수", "정확성"], audioUrl: null },
  { id: "L4-S9-S05", korean: "저는 정보를 공유하기 전에 출처와 정확성을 확인해요.", translations: { en: "I check the source and accuracy before sharing information." }, keyExpression: "정확성", relatedWords: ["공유", "출처", "확인", "정확성"], audioUrl: null },
  { id: "L4-S9-S06", korean: "가짜뉴스와 허위정보가 빠르게 확산되고 있어요.", translations: { en: "Fake news and false information are spreading quickly." }, keyExpression: "확산되다", relatedWords: ["가짜뉴스", "허위정보", "확산되다"], audioUrl: null },
  { id: "L4-S9-S07", korean: "편향되거나 왜곡된 기사인지 신중하게 판단해야 해요.", translations: { en: "You have to carefully judge whether an article is biased or distorted." }, keyExpression: "신중하다", relatedWords: ["편향되다", "왜곡되다", "신중하다", "판단"], audioUrl: null },
  { id: "L4-S9-S08", korean: "저는 믿을 만한 채널만 구독해서 이용자로서 신뢰할 수 있는 정보를 얻어요.", translations: { en: "As a user, I only subscribe to trustworthy channels to get reliable information." }, keyExpression: "믿을 만하다", relatedWords: ["믿을 만하다", "구독하다", "이용자"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L4-S9-G01",
    pattern: "-에 따르면 (복습)",
    meanings: { en: "according to (review, used here with surveys/statistics)" },
    explanations: {
      en: "Keep using -에 따르면 (TOPIK3 STEP13) to introduce a source, now with more formal survey/data language rather than simple hearsay.",
    },
    examples: [
      { korean: "조사 결과에 따르면 많은 사람들이 인터넷으로 뉴스를 봅니다.", translations: { en: "According to the survey results, many people watch news on the internet." } },
      { korean: "최근 자료에 따르면 SNS 이용자가 계속 늘고 있습니다.", translations: { en: "According to recent data, the number of SNS users keeps increasing." } },
    ],
  },
  {
    id: "L4-S9-G02",
    pattern: "-다고 볼 수 있다",
    meanings: { en: "it can be seen/regarded as ~" },
    explanations: {
      en: "Attach -다고 볼 수 있다 to a clause to state a careful judgment based on evidence, rather than a plain fact.",
    },
    examples: [
      { korean: "이 결과를 보면 온라인 정보 이용이 증가하고 있다고 볼 수 있습니다.", translations: { en: "Looking at this result, it can be seen that online information use is increasing." } },
      { korean: "조회수가 많다고 해서 그 정보가 정확하다고 볼 수는 없습니다.", translations: { en: "Just because the view count is high doesn't mean the information can be seen as accurate." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L4-S9-L01",
    audioText: "조사 결과에 따르면 많은 사람들이 인터넷으로 뉴스를 봅니다. 텔레비전보다 훨씬 빠르기 때문입니다.",
    audioUrl: null,
    question: "이 조사 결과는 무엇을 보여줍니까?",
    options: ["텔레비전 이용자가 늘고 있다", "많은 사람들이 인터넷으로 뉴스를 본다", "뉴스를 안 보는 사람이 늘고 있다", "신문 판매량이 늘고 있다"],
    correctAnswer: 1,
    translations: { en: { question: "What does this survey result show?", explanation: 'The sentence says "many people watch news on the internet," so the correct answer is 많은 사람들이 인터넷으로 뉴스를 본다.' } },
  },
  {
    id: "L4-S9-L02",
    audioText: "조회수가 많다고 해서 그 정보가 항상 정확하다고 볼 수는 없습니다. 그래서 출처를 꼭 확인해야 합니다.",
    audioUrl: null,
    question: "이 사람이 강조하는 것은 무엇입니까?",
    options: ["조회수가 높으면 믿어도 된다", "뉴스를 안 봐야 한다", "출처를 꼭 확인해야 한다", "광고를 봐야 한다"],
    correctAnswer: 2,
    translations: { en: { question: "What does this person emphasize?", explanation: 'The sentence says "you must check the source," so the correct answer is 출처를 꼭 확인해야 한다.' } },
  },
  {
    id: "L4-S9-L03",
    audioText: "가짜뉴스와 허위정보가 SNS를 통해 빠르게 확산되고 있습니다. 이용자들은 신중하게 판단해야 합니다.",
    audioUrl: null,
    question: "이용자들에게 필요한 태도는 무엇입니까?",
    options: ["빠르게 공유하는 태도", "SNS를 끊는 태도", "무조건 믿는 태도", "신중하게 판단하는 태도"],
    correctAnswer: 3,
    translations: { en: { question: "What attitude do users need?", explanation: "The sentence says users must judge carefully, so the correct answer is 신중하게 판단하는 태도." } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L4-S9-R01",
    passage:
      "최근 조사 자료에 따르면 SNS 이용자의 대부분이 뉴스를 SNS를 통해 접한다고 합니다.\n하지만 이 결과가 SNS 뉴스가 항상 정확하다는 뜻은 아니에요.\n오히려 출처가 불분명한 정보나 편향된 기사도 많이 섞여 있다고 볼 수 있습니다.\n그래서 이용자들은 정보를 그대로 믿기보다 출처와 정확성을 확인하는 습관이 필요해요.",
    question: "이 글에 따르면 이용자들에게 필요한 습관은 무엇입니까?",
    options: ["SNS를 더 많이 이용하는 것", "정보의 출처와 정확성을 확인하는 것", "뉴스를 안 보는 것", "광고를 클릭하는 것"],
    correctAnswer: 1,
    translations: { en: { question: "According to the passage, what habit do users need?", explanation: "The passage says checking the source and accuracy of information is needed, so the correct answer is 정보의 출처와 정확성을 확인하는 것." } },
  },
  {
    id: "L4-S9-R02",
    passage:
      "가짜뉴스와 허위정보는 한번 확산되면 사실을 바로잡기가 매우 어려워요.\n특히 자극적인 제목의 게시물은 조회수가 높아서 더 빠르게 전달되는 경향이 있어요.\n이런 정보에 반복적으로 노출되면 사람들의 판단이 왜곡될 수 있다고 볼 수 있습니다.\n그래서 정보를 공유하기 전에 신중하게 확인하는 것이 중요해요.",
    question: "자극적인 제목의 게시물이 빨리 퍼지는 이유는 무엇입니까?",
    options: ["출처가 확실해서", "광고가 없어서", "조회수가 높아서", "글이 짧아서"],
    correctAnswer: 2,
    translations: { en: { question: "Why do posts with sensational titles spread quickly?", explanation: "The passage says such posts have a high view count, so the correct answer is 조회수가 높아서." } },
  },
  {
    id: "L4-S9-R03",
    passage:
      "저는 예전에 확인하지 않고 정보를 공유했다가 그것이 허위정보였던 적이 있어요.\n그 후로는 기사를 읽을 때 출처가 믿을 만한지, 내용이 편향되거나 왜곡되지 않았는지 먼저 확인해요.\n또한 여러 매체의 보도를 비교하면서 판단하려고 노력해요.\n이렇게 하니까 정보를 좀 더 정확하게 이해할 수 있게 됐다고 볼 수 있습니다.",
    question: "이 사람은 지금 정보를 확인할 때 무엇을 합니까?",
    options: ["아무것도 확인하지 않는다", "광고만 확인한다", "한 매체만 본다", "출처와 편향 여부를 확인하고 여러 매체를 비교한다"],
    correctAnswer: 3,
    translations: { en: { question: "What does this person do when checking information now?", explanation: "The passage says they check the source and bias, and compare multiple outlets, so the correct answer is 출처와 편향 여부를 확인하고 여러 매체를 비교한다." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L4-S9-WR01",
    type: "sentence-order",
    prompt: {
      en: "Put the fragments in the order 'source → content → judgment' to make one natural sequence.\n① 그 정보가 믿을 만한지 판단해요\n② 먼저 정보의 출처를 확인해요\n③ 그다음 내용이 정확한지 살펴봐요",
    },
    sampleAnswer: { en: "먼저 정보의 출처를 확인해요. 그다음 내용이 정확한지 살펴봐요. 그 정보가 믿을 만한지 판단해요." },
    explanation: { en: "Checking a source comes first, then reading the content, then making a judgment — 출처 → 내용 → 판단." },
  },
  {
    id: "L4-S9-WR02",
    type: "short-response",
    prompt: {
      en: "Write 5-6 sentences about what you think is important when checking information on the internet or SNS.\nStructure: 1) your opinion, 2) reason, 3) how you check, 4) an example, 5) something to be careful of, 6) closing.",
    },
    keywords: ["출처", "정확성", "신중하다", "판단"],
    sampleAnswer: {
      en: "저는 인터넷이나 SNS에서 정보를 볼 때 출처를 확인하는 것이 가장 중요하다고 생각해요. 출처가 불분명한 정보는 허위정보이거나 왜곡된 경우가 많기 때문이에요. 그래서 저는 기사를 읽을 때 먼저 어디에서 나온 정보인지 확인해요. 예를 들어 최근에 조회수가 높은 게시물을 봤는데 출처가 없어서 공유하지 않았어요. 조회수나 제목만 보고 신중하지 않게 판단하면 안 된다고 생각해요. 그래서 저는 정보를 접할 때마다 정확성을 먼저 확인하는 습관을 가지려고 해요.",
    },
    explanation: { en: "6 sentences following opinion → reason → method → example → caution → closing is enough at this stage." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L4-S9-P01", type: "vocabulary", question: '"가짜뉴스"의 뜻은 무엇입니까?', options: ["Fake news", "Advertisement", "View count", "Judgment"], correctAnswer: 0, explanation: { en: "가짜뉴스 means fake news." } },
  { id: "L4-S9-P02", type: "vocabulary", question: '"정확성"의 뜻은 무엇입니까?', options: ["Sharing", "Accuracy", "Delivery", "Subscription"], correctAnswer: 1, explanation: { en: "정확성 means accuracy." } },
  { id: "L4-S9-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n조사 결과______ 많은 사람들이 인터넷으로 뉴스를 봅니다.", options: ["에 따르면", "는 대신에", "는 김에", "기 나름으로"], correctAnswer: 0, explanation: { en: "-에 따르면 introduces a source of information: 결과에 따르면." } },
  { id: "L4-S9-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n온라인 정보 이용이 증가하고 있______.", options: ["는 편입니다", "다고 볼 수 있습니다", "기 나름입니다", "는 대신입니다"], correctAnswer: 1, explanation: { en: "-다고 볼 수 있다 states a careful judgment: 증가하고 있다고 볼 수 있습니다." } },
  { id: "L4-S9-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n저는 정보를 공유하기 전에 출처와 ______을/를 확인해요.", options: ["정확성", "조회수", "광고", "구독"], correctAnswer: 0, explanation: { en: "정확성 (accuracy) fits checking information before sharing." } },
  { id: "L4-S9-P06", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n가짜뉴스와 허위정보가 빠르게 ______.", options: ["판단되고 있어요", "구독되고 있어요", "확산되고 있어요", "전달자예요"], correctAnswer: 2, explanation: { en: "확산되다 (to spread) fits fake news spreading quickly." } },
  { id: "L4-S9-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n편향되거나 ______ 기사인지 신중하게 판단해야 해요.", options: ["정확한", "믿을 만한", "왜곡된", "신뢰하는"], correctAnswer: 2, explanation: { en: "왜곡되다 (to be distorted) pairs with 편향되다 to describe an unreliable article." } },
  { id: "L4-S9-P08", type: "listening", audioText: "조사 결과에 따르면 많은 사람들이 인터넷으로 뉴스를 봅니다.", question: "이 조사 결과는 무엇을 보여줍니까?", options: ["신문 판매량이 늘고 있다", "많은 사람들이 인터넷으로 뉴스를 본다", "텔레비전 이용자가 늘고 있다", "뉴스를 안 보는 사람이 늘고 있다"], correctAnswer: 1, explanation: { en: "The sentence says many people watch news on the internet, so the answer is 많은 사람들이 인터넷으로 뉴스를 본다." } },
  { id: "L4-S9-P09", type: "listening", audioText: "가짜뉴스와 허위정보가 SNS를 통해 빠르게 확산되고 있습니다. 이용자들은 신중하게 판단해야 합니다.", question: "이용자들에게 필요한 태도는 무엇입니까?", options: ["무조건 믿는 태도", "빠르게 공유하는 태도", "SNS를 끊는 태도", "신중하게 판단하는 태도"], correctAnswer: 3, explanation: { en: "The sentence says users must judge carefully, so the answer is 신중하게 판단하는 태도." } },
  { id: "L4-S9-P10", type: "reading", passage: "출처가 불분명한 정보나 편향된 기사도 많이 섞여 있다고 볼 수 있습니다. 이용자들은 정보의 출처와 정확성을 확인하는 습관이 필요해요.", question: "이 글에 따르면 이용자들에게 필요한 습관은 무엇입니까?", options: ["뉴스를 안 보는 것", "광고를 클릭하는 것", "정보의 출처와 정확성을 확인하는 것", "SNS를 더 많이 이용하는 것"], correctAnswer: 2, explanation: { en: "The passage says checking source and accuracy is needed, so the answer is 정보의 출처와 정확성을 확인하는 것." } },
  { id: "L4-S9-P11", type: "reading", passage: "자극적인 제목의 게시물은 조회수가 높아서 더 빠르게 전달되는 경향이 있어요. 이런 정보에 반복적으로 노출되면 판단이 왜곡될 수 있어요.", question: "자극적인 제목의 게시물이 빨리 퍼지는 이유는 무엇입니까?", options: ["출처가 확실해서", "광고가 없어서", "글이 짧아서", "조회수가 높아서"], correctAnswer: 3, explanation: { en: "The passage says such posts have a high view count, so the answer is 조회수가 높아서." } },
  { id: "L4-S9-P12", type: "reading", passage: "기사를 읽을 때 출처가 믿을 만한지, 내용이 편향되거나 왜곡되지 않았는지 먼저 확인해요. 또한 여러 매체의 보도를 비교하면서 판단하려고 노력해요.", question: "이 사람은 정보를 확인할 때 무엇을 합니까?", options: ["한 매체만 본다", "아무것도 확인하지 않는다", "광고만 확인한다", "출처와 편향 여부를 확인하고 여러 매체를 비교한다"], correctAnswer: 3, explanation: { en: "The passage says they check source and bias, and compare multiple outlets, so the answer is 출처와 편향 여부를 확인하고 여러 매체를 비교한다." } },
];

export const STEP_4_9: StepContent = {
  level: 4,
  step: 9,
  title: "미디어와 정보 (Media and Information)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
