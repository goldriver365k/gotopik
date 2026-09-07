// TOPIK 4 STEP 11 — Science and Technology (과학과 기술생활).
// Independent of TOPIK1/TOPIK2/TOPIK3/TOPIK4 STEP1-10's data files.
// 인터넷, 온라인, 변화, 장점, 단점, 영향, 증가하다, 편리하다 already
// exist as "new" elsewhere (TOPIK3/TOPIK4) — recorded here with status
// "review". No overly specialized technical jargon.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L4-S11-W01", korean: "기술", partOfSpeech: "noun", translations: { en: "technology" }, example: "기술이 정말 빠르게 발전해요.", exampleTranslations: { en: "Technology is developing really fast." }, audioUrl: null, status: "new" },
  { id: "L4-S11-W02", korean: "과학", partOfSpeech: "noun", translations: { en: "science" }, example: "저는 과학에 관심이 많아요.", exampleTranslations: { en: "I'm very interested in science." }, audioUrl: null, status: "new" },
  { id: "L4-S11-W03", korean: "스마트기기", partOfSpeech: "noun", translations: { en: "smart device" }, example: "요즘 스마트기기를 많이 사용해요.", exampleTranslations: { en: "These days I use smart devices a lot." }, audioUrl: null, status: "new" },
  { id: "L4-S11-W04", korean: "인공지능", partOfSpeech: "noun", translations: { en: "artificial intelligence" }, example: "인공지능이 생활 곳곳에 쓰여요.", exampleTranslations: { en: "Artificial intelligence is used everywhere in life." }, audioUrl: null, status: "new" },
  { id: "L4-S11-W05", korean: "자동화", partOfSpeech: "noun", translations: { en: "automation" }, example: "공장에 자동화가 늘고 있어요.", exampleTranslations: { en: "Automation is increasing in factories." }, audioUrl: null, status: "new" },
  { id: "L4-S11-W06", korean: "기능", partOfSpeech: "noun", translations: { en: "function / feature" }, example: "이 기기는 기능이 다양해요.", exampleTranslations: { en: "This device has various functions." }, audioUrl: null, status: "new" },
  { id: "L4-S11-W07", korean: "발전", partOfSpeech: "noun", translations: { en: "development / advancement" }, example: "기술 발전이 정말 빨라요.", exampleTranslations: { en: "Technological development is really fast." }, audioUrl: null, status: "new" },
  { id: "L4-S11-W08", korean: "편리함", partOfSpeech: "noun", translations: { en: "convenience" }, example: "기술의 편리함을 느껴요.", exampleTranslations: { en: "I feel technology's convenience." }, audioUrl: null, status: "new" },
  { id: "L4-S11-W09", korean: "활용", partOfSpeech: "noun", translations: { en: "utilization" }, example: "기술 활용 능력이 중요해요.", exampleTranslations: { en: "The ability to utilize technology is important." }, audioUrl: null, status: "new" },
  { id: "L4-S11-W10", korean: "의존", partOfSpeech: "noun", translations: { en: "dependence" }, example: "스마트폰 의존이 심해요.", exampleTranslations: { en: "Smartphone dependence is severe." }, audioUrl: null, status: "new" },
  { id: "L4-S11-W11", korean: "발전하다", partOfSpeech: "verb", translations: { en: "to develop / advance" }, example: "기술이 계속 발전하고 있어요.", exampleTranslations: { en: "Technology keeps developing." }, audioUrl: null, status: "new" },
  { id: "L4-S11-W12", korean: "가능하다", partOfSpeech: "adjective", translations: { en: "to be possible" }, example: "이제 영상통화가 쉽게 가능해요.", exampleTranslations: { en: "Video calls are now easily possible." }, audioUrl: null, status: "new" },
  { id: "L4-S11-W13", korean: "디지털", partOfSpeech: "noun", translations: { en: "digital" }, example: "디지털 기기가 생활을 바꿨어요.", exampleTranslations: { en: "Digital devices changed our lives." }, audioUrl: null, status: "new" },
  { id: "L4-S11-W14", korean: "스마트폰", partOfSpeech: "noun", translations: { en: "smartphone" }, example: "스마트폰 없이는 생활하기 힘들어요.", exampleTranslations: { en: "It's hard to live without a smartphone." }, audioUrl: null, status: "new" },
  { id: "L4-S11-W15", korean: "혁신", partOfSpeech: "noun", translations: { en: "innovation" }, example: "이 제품은 혁신적이에요.", exampleTranslations: { en: "This product is innovative." }, audioUrl: null, status: "new" },
  { id: "L4-S11-W16", korean: "첨단", partOfSpeech: "noun", translations: { en: "cutting-edge" }, example: "첨단 기술을 활용한 제품이에요.", exampleTranslations: { en: "It's a product using cutting-edge technology." }, audioUrl: null, status: "new" },
  { id: "L4-S11-W17", korean: "인터넷", partOfSpeech: "noun", translations: { en: "internet" }, example: "인터넷으로 정보를 찾아요.", exampleTranslations: { en: "I look for information on the internet." }, audioUrl: null, status: "review" },
  { id: "L4-S11-W18", korean: "온라인", partOfSpeech: "noun", translations: { en: "online" }, example: "온라인으로 구매해요.", exampleTranslations: { en: "I buy things online." }, audioUrl: null, status: "review" },
  { id: "L4-S11-W19", korean: "변화", partOfSpeech: "noun", translations: { en: "change" }, example: "요즘 큰 변화가 생겼어요.", exampleTranslations: { en: "There's been a big change lately." }, audioUrl: null, status: "review" },
  { id: "L4-S11-W20", korean: "장점", partOfSpeech: "noun", translations: { en: "advantage" }, example: "이 방법의 장점이에요.", exampleTranslations: { en: "This is the method's advantage." }, audioUrl: null, status: "review" },
  { id: "L4-S11-W21", korean: "단점", partOfSpeech: "noun", translations: { en: "disadvantage" }, example: "단점도 있어요.", exampleTranslations: { en: "There are disadvantages too." }, audioUrl: null, status: "review" },
  { id: "L4-S11-W22", korean: "영향", partOfSpeech: "noun", translations: { en: "influence / effect" }, example: "스트레스가 건강에 영향을 줘요.", exampleTranslations: { en: "Stress affects health." }, audioUrl: null, status: "review" },
  { id: "L4-S11-W23", korean: "증가하다", partOfSpeech: "verb", translations: { en: "to increase" }, example: "자동차가 증가했어요.", exampleTranslations: { en: "The number of cars increased." }, audioUrl: null, status: "review" },
  { id: "L4-S11-W24", korean: "편리하다", partOfSpeech: "adjective", translations: { en: "convenient" }, example: "대중교통이 편리해요.", exampleTranslations: { en: "Public transportation is convenient." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L4-S11-S01", korean: "스마트폰이 발전하면서 언제 어디서나 정보를 찾을 수 있게 되었어요.", translations: { en: "As smartphones developed, we became able to find information anytime, anywhere." }, keyExpression: "-게 되다", relatedWords: ["스마트폰", "발전하다"], audioUrl: null },
  { id: "L4-S11-S02", korean: "인공지능 기술 덕분에 어려운 일도 쉽게 할 수 있게 됐어요.", translations: { en: "Thanks to AI technology, we became able to do difficult tasks easily." }, keyExpression: "-게 되다", relatedWords: ["인공지능"], audioUrl: null },
  { id: "L4-S11-S03", korean: "기술은 생활을 편리하게 하는 반면에 새로운 문제를 만들기도 합니다.", translations: { en: "Technology makes life convenient, while also creating new problems." }, keyExpression: "-는 반면에", relatedWords: ["기술"], audioUrl: null },
  { id: "L4-S11-S04", korean: "스마트기기는 편리한 반면에 의존을 만들 수도 있어요.", translations: { en: "Smart devices are convenient, while they can also create dependence." }, keyExpression: "-는 반면에", relatedWords: ["스마트기기", "의존"], audioUrl: null },
  { id: "L4-S11-S05", korean: "이 기기는 다양한 기능을 활용할 수 있어서 정말 편리함을 느껴요.", translations: { en: "This device lets you use various functions, so I really feel its convenience." }, keyExpression: "편리함", relatedWords: ["기능", "활용", "편리함"], audioUrl: null },
  { id: "L4-S11-S06", korean: "첨단 기술을 활용한 자동화 시스템이 늘어나고 있어요.", translations: { en: "Automation systems using cutting-edge technology are increasing." }, keyExpression: "자동화", relatedWords: ["첨단", "활용", "자동화"], audioUrl: null },
  { id: "L4-S11-S07", korean: "디지털 기술의 혁신 덕분에 예전에는 불가능했던 일이 가능해졌어요.", translations: { en: "Thanks to innovation in digital technology, things that were once impossible became possible." }, keyExpression: "가능하다", relatedWords: ["디지털", "혁신", "가능하다"], audioUrl: null },
  { id: "L4-S11-S08", korean: "저는 스마트폰 의존을 줄이려고 사용 시간을 관리하고 있어요.", translations: { en: "I'm managing my usage time to reduce my smartphone dependence." }, keyExpression: "의존", relatedWords: ["스마트폰", "의존"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L4-S11-G01",
    pattern: "-게 되다",
    meanings: { en: "to come to (do something) / to end up (in a state)" },
    explanations: {
      en: "Attach -게 되다 to a verb stem to show a change in situation or ability that happened gradually or naturally, not by the speaker's own direct choice.",
    },
    examples: [
      { korean: "스마트폰이 발전하면서 언제 어디서나 정보를 찾을 수 있게 되었어요.", translations: { en: "As smartphones developed, we became able to find information anytime, anywhere." } },
      { korean: "인공지능 기술 덕분에 어려운 일도 쉽게 할 수 있게 됐어요.", translations: { en: "Thanks to AI technology, we became able to do difficult tasks easily." } },
    ],
  },
  {
    id: "L4-S11-G02",
    pattern: "-는 반면에 (복습)",
    meanings: { en: "while, on the other hand (review)" },
    explanations: {
      en: "Keep using -는 반면에 (TOPIK3 STEP9) to contrast an advantage with a disadvantage of the same thing.",
    },
    examples: [
      { korean: "기술은 생활을 편리하게 하는 반면에 새로운 문제를 만들기도 합니다.", translations: { en: "Technology makes life convenient, while also creating new problems." } },
      { korean: "스마트기기는 편리한 반면에 의존을 만들 수도 있어요.", translations: { en: "Smart devices are convenient, while they can also create dependence." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L4-S11-L01",
    audioText: "스마트폰이 발전하면서 언제 어디서나 정보를 찾을 수 있게 되었어요. 정말 편리한 세상이에요.",
    audioUrl: null,
    question: "스마트폰이 발전하면서 무엇이 가능해졌습니까?",
    options: ["돈을 안 쓰는 것", "언제 어디서나 정보를 찾는 것", "잠을 안 자는 것", "일을 안 하는 것"],
    correctAnswer: 1,
    translations: { en: { question: "What became possible as smartphones developed?", explanation: 'The sentence says "finding information anytime, anywhere," so the correct answer is 언제 어디서나 정보를 찾는 것.' } },
  },
  {
    id: "L4-S11-L02",
    audioText: "기술은 생활을 편리하게 하는 반면에 새로운 문제를 만들기도 합니다. 예를 들어 스마트폰 의존이 심해지고 있어요.",
    audioUrl: null,
    question: "기술 발전의 문제점으로 언급된 것은 무엇입니까?",
    options: ["편리함이 사라진다", "일자리가 늘어난다", "스마트폰 의존이 심해진다", "정보가 줄어든다"],
    correctAnswer: 2,
    translations: { en: { question: "What problem of technological development is mentioned?", explanation: "The sentence says smartphone dependence is getting worse, so the correct answer is 스마트폰 의존이 심해진다." } },
  },
  {
    id: "L4-S11-L03",
    audioText: "인공지능 기술 덕분에 어려운 일도 쉽게 할 수 있게 됐어요. 하지만 모든 것을 기술에만 의존하면 안 된다고 생각해요.",
    audioUrl: null,
    question: "이 사람의 생각은 무엇입니까?",
    options: ["기술에 모두 의존해야 한다", "기술을 쓰지 말아야 한다", "인공지능은 필요 없다", "기술에만 의존하면 안 된다"],
    correctAnswer: 3,
    translations: { en: { question: "What does this person think?", explanation: "The sentence says we shouldn't rely on technology alone, so the correct answer is 기술에만 의존하면 안 된다." } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L4-S11-R01",
    passage:
      "최근 몇 년 사이 기술이 정말 빠르게 발전했어요.\n스마트기기와 인공지능 덕분에 생활이 훨씬 편리해졌어요.\n예를 들어 예전에는 불가능했던 일들이 이제는 쉽게 가능해졌어요.\n하지만 이런 편리함 뒤에는 스마트폰 의존이라는 문제도 함께 커지고 있어요.",
    question: "이 글에서 기술 발전의 문제점으로 언급된 것은 무엇입니까?",
    options: ["일자리 감소", "스마트폰 의존", "인터넷 속도 저하", "가격 상승"],
    correctAnswer: 1,
    translations: { en: { question: "What problem of technological development is mentioned?", explanation: "The passage mentions smartphone dependence as a growing problem, so the correct answer is 스마트폰 의존." } },
  },
  {
    id: "L4-S11-R02",
    passage:
      "인공지능과 자동화 기술은 여러 분야에서 활용되고 있어요.\n공장에서는 자동화 덕분에 생산 속도가 빨라졌고, 사람들은 더 편리한 서비스를 이용할 수 있게 됐어요.\n하지만 기술이 발전하는 반면에 사람이 하던 일이 줄어드는 부작용도 있어요.\n그래서 기술을 어떻게 활용할지에 대한 고민이 필요해요.",
    question: "이 글에서 자동화의 장점은 무엇입니까?",
    options: ["일자리가 늘어난다", "가격이 비싸진다", "생산 속도가 빨라진다", "기술이 사라진다"],
    correctAnswer: 2,
    translations: { en: { question: "According to the passage, what is an advantage of automation?", explanation: "The passage says production speed became faster, so the correct answer is 생산 속도가 빨라진다." } },
  },
  {
    id: "L4-S11-R03",
    passage:
      "저는 최신 스마트기기의 다양한 기능을 활용하는 것을 좋아해요.\n디지털 기술의 혁신 덕분에 일과 생활이 훨씬 편리해졌다고 느껴요.\n하지만 최근에는 스마트폰을 너무 많이 사용하게 돼서 의존이 심해진 것 같아요.\n그래서 요즘은 사용 시간을 스스로 관리하려고 노력하고 있어요.",
    question: "이 사람은 요즘 무엇을 하려고 노력합니까?",
    options: ["스마트폰을 더 많이 쓰려고", "인터넷을 끊으려고", "새 기기를 사려고", "사용 시간을 관리하려고"],
    correctAnswer: 3,
    translations: { en: { question: "What is this person trying to do these days?", explanation: "The passage says they're trying to manage their usage time, so the correct answer is 사용 시간을 관리하려고." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L4-S11-WR01",
    type: "sentence-completion",
    prompt: { en: "Complete the sentence: 기술이 발전하면서 ______게 되었습니다." },
    sampleAnswer: { en: "기술이 발전하면서 집에서도 세계 여러 나라와 쉽게 연락할 수 있게 되었습니다." },
    explanation: { en: "-게 되다 shows an ability or situation that came about gradually as technology developed." },
  },
  {
    id: "L4-S11-WR02",
    type: "short-response",
    prompt: {
      en: "Write 5-6 sentences about the changes technological development has brought to life.\nInclude: the change, an advantage, a disadvantage, and your own thoughts.",
    },
    keywords: ["발전하다", "편리함", "의존", "반면에"],
    sampleAnswer: {
      en: "기술이 발전하면서 생활에 많은 변화가 생겼어요. 스마트기기 덕분에 언제 어디서나 정보를 찾고 사람들과 연락할 수 있게 되었어요. 이런 편리함은 기술 발전의 큰 장점이라고 생각해요. 하지만 기술이 편리한 반면에 스마트폰 의존이라는 문제도 생겼어요. 그래서 저는 기술을 활용하되 적절하게 사용 시간을 관리하는 것이 중요하다고 생각해요.",
    },
    explanation: { en: "5-6 sentences following change → advantage → disadvantage → own thoughts is enough at this stage." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L4-S11-P01", type: "vocabulary", question: '"인공지능"의 뜻은 무엇입니까?', options: ["Artificial intelligence", "Automation", "Innovation", "Dependence"], correctAnswer: 0, explanation: { en: "인공지능 means artificial intelligence." } },
  { id: "L4-S11-P02", type: "vocabulary", question: '"의존"의 뜻은 무엇입니까?', options: ["Function", "Dependence", "Development", "Convenience"], correctAnswer: 1, explanation: { en: "의존 means dependence." } },
  { id: "L4-S11-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n스마트폰이 발전하면서 정보를 쉽게 찾을 수 있______.", options: ["게 됐어요", "는 반면이에요", "기 나름이에요", "는 대신이에요"], correctAnswer: 0, explanation: { en: "-게 되다 shows a gradual change: 찾을 수 있게 됐어요." } },
  { id: "L4-S11-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n기술은 편리한 ______ 새로운 문제를 만들기도 해요.", options: ["대신에", "반면에", "김에", "동안"], correctAnswer: 1, explanation: { en: "-는 반면에 contrasts an advantage and disadvantage: 편리한 반면에." } },
  { id: "L4-S11-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n이 기기는 다양한 ______을/를 활용할 수 있어요.", options: ["기능", "의존", "발전", "혁신"], correctAnswer: 0, explanation: { en: "기능 (function) fits describing a device's various features." } },
  { id: "L4-S11-P06", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n첨단 기술을 활용한 ______ 시스템이 늘고 있어요.", options: ["혁신", "편리함", "자동화", "온라인"], correctAnswer: 2, explanation: { en: "자동화 (automation) fits describing a system using cutting-edge technology." } },
  { id: "L4-S11-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n저는 스마트폰 ______을/를 줄이려고 사용 시간을 관리해요.", options: ["혁신", "발전", "의존", "기능"], correctAnswer: 2, explanation: { en: "의존 (dependence) fits managing smartphone usage." } },
  { id: "L4-S11-P08", type: "listening", audioText: "스마트폰이 발전하면서 언제 어디서나 정보를 찾을 수 있게 되었어요.", question: "스마트폰이 발전하면서 무엇이 가능해졌습니까?", options: ["잠을 안 자는 것", "돈을 안 쓰는 것", "언제 어디서나 정보를 찾는 것", "일을 안 하는 것"], correctAnswer: 2, explanation: { en: "The sentence says finding information anytime, anywhere, so the answer is 언제 어디서나 정보를 찾는 것." } },
  { id: "L4-S11-P09", type: "listening", audioText: "기술은 생활을 편리하게 하는 반면에 새로운 문제를 만들기도 합니다. 예를 들어 스마트폰 의존이 심해지고 있어요.", question: "기술 발전의 문제점으로 언급된 것은 무엇입니까?", options: ["일자리가 늘어난다", "정보가 줄어든다", "편리함이 사라진다", "스마트폰 의존이 심해진다"], correctAnswer: 3, explanation: { en: "The sentence says smartphone dependence is getting worse, so the answer is 스마트폰 의존이 심해진다." } },
  { id: "L4-S11-P10", type: "reading", passage: "스마트기기와 인공지능 덕분에 생활이 훨씬 편리해졌어요. 하지만 이런 편리함 뒤에는 스마트폰 의존이라는 문제도 함께 커지고 있어요.", question: "이 글에서 기술 발전의 문제점으로 언급된 것은 무엇입니까?", options: ["일자리 감소", "가격 상승", "인터넷 속도 저하", "스마트폰 의존"], correctAnswer: 3, explanation: { en: "The passage mentions smartphone dependence, so the answer is 스마트폰 의존." } },
  { id: "L4-S11-P11", type: "reading", passage: "공장에서는 자동화 덕분에 생산 속도가 빨라졌고, 사람들은 더 편리한 서비스를 이용할 수 있게 됐어요.", question: "이 글에서 자동화의 장점은 무엇입니까?", options: ["일자리가 늘어난다", "가격이 비싸진다", "기술이 사라진다", "생산 속도가 빨라진다"], correctAnswer: 3, explanation: { en: "The passage says production speed became faster, so the answer is 생산 속도가 빨라진다." } },
  { id: "L4-S11-P12", type: "sentence", question: "다음 중 자연스러운 문장은?", options: ["정보를 찾을 수 있어 되었어요.", "정보를 찾을 수 있게 되었어요.", "정보를 찾을 수 있는 되었어요.", "정보를 찾을 수 있다 되었어요."], correctAnswer: 1, explanation: { en: "-게 되다 attaches to the verb phrase: 찾을 수 있게 되었어요." } },
];

export const STEP_4_11: StepContent = {
  level: 4,
  step: 11,
  title: "과학과 기술생활 (Science and Technology)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
