// TOPIK 4 STEP 8 — Korean Culture and Life (한국 문화와 생활).
// Independent of TOPIK1/TOPIK2/TOPIK3/TOPIK4 STEP1-7's data files.
// 생활방식, 예절, 전통, 공통점, 익숙하다, 낯설다 already exist as "new"
// elsewhere (TOPIK3) — recorded here with status "review". Stays with
// everyday lifestyle/culture content — no political, religious, or
// ethnic-comparison topics.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L4-S8-W01", korean: "문화생활", partOfSpeech: "noun", translations: { en: "cultural life" }, example: "저는 문화생활을 즐겨요.", exampleTranslations: { en: "I enjoy cultural life." }, audioUrl: null, status: "new" },
  { id: "L4-S8-W02", korean: "관습", partOfSpeech: "noun", translations: { en: "custom" }, example: "나라마다 관습이 달라요.", exampleTranslations: { en: "Customs differ by country." }, audioUrl: null, status: "new" },
  { id: "L4-S8-W03", korean: "세대", partOfSpeech: "noun", translations: { en: "generation" }, example: "세대에 따라 생각이 달라요.", exampleTranslations: { en: "Thinking differs by generation." }, audioUrl: null, status: "new" },
  { id: "L4-S8-W04", korean: "가치", partOfSpeech: "noun", translations: { en: "value" }, example: "저마다 중요하게 생각하는 가치가 달라요.", exampleTranslations: { en: "Everyone values different things." }, audioUrl: null, status: "new" },
  { id: "L4-S8-W05", korean: "적응", partOfSpeech: "noun", translations: { en: "adaptation" }, example: "새 생활에 적응이 필요해요.", exampleTranslations: { en: "Adaptation to new life is needed." }, audioUrl: null, status: "new" },
  { id: "L4-S8-W06", korean: "변화", partOfSpeech: "noun", translations: { en: "change" }, example: "요즘 큰 변화가 생겼어요.", exampleTranslations: { en: "There's been a big change lately." }, audioUrl: null, status: "new" },
  { id: "L4-S8-W07", korean: "풍습", partOfSpeech: "noun", translations: { en: "custom / folkway" }, example: "이 지역만의 풍습이 있어요.", exampleTranslations: { en: "There's a custom unique to this region." }, audioUrl: null, status: "new" },
  { id: "L4-S8-W08", korean: "정체성", partOfSpeech: "noun", translations: { en: "identity" }, example: "문화적 정체성을 지키고 싶어요.", exampleTranslations: { en: "I want to keep my cultural identity." }, audioUrl: null, status: "new" },
  { id: "L4-S8-W09", korean: "세대차이", partOfSpeech: "noun", translations: { en: "generation gap" }, example: "세대차이를 느낄 때가 있어요.", exampleTranslations: { en: "There are times I feel a generation gap." }, audioUrl: null, status: "new" },
  { id: "L4-S8-W10", korean: "다양성", partOfSpeech: "noun", translations: { en: "diversity" }, example: "문화의 다양성을 존중해요.", exampleTranslations: { en: "I respect cultural diversity." }, audioUrl: null, status: "new" },
  { id: "L4-S8-W11", korean: "편견", partOfSpeech: "noun", translations: { en: "prejudice / bias" }, example: "편견 없이 사람을 대해요.", exampleTranslations: { en: "I treat people without prejudice." }, audioUrl: null, status: "new" },
  { id: "L4-S8-W12", korean: "개방적이다", partOfSpeech: "adjective", translations: { en: "open-minded" }, example: "그 사람은 생각이 개방적이에요.", exampleTranslations: { en: "That person's thinking is open-minded." }, audioUrl: null, status: "new" },
  { id: "L4-S8-W13", korean: "보수적이다", partOfSpeech: "adjective", translations: { en: "conservative" }, example: "저희 부모님은 조금 보수적이세요.", exampleTranslations: { en: "My parents are a bit conservative." }, audioUrl: null, status: "new" },
  { id: "L4-S8-W14", korean: "어색하다", partOfSpeech: "adjective", translations: { en: "awkward" }, example: "처음에는 조금 어색했어요.", exampleTranslations: { en: "At first it was a bit awkward." }, audioUrl: null, status: "new" },
  { id: "L4-S8-W15", korean: "인식", partOfSpeech: "noun", translations: { en: "awareness / perception" }, example: "문화에 대한 인식이 달라졌어요.", exampleTranslations: { en: "Perceptions of culture have changed." }, audioUrl: null, status: "new" },
  { id: "L4-S8-W16", korean: "사고방식", partOfSpeech: "noun", translations: { en: "way of thinking" }, example: "사람마다 사고방식이 달라요.", exampleTranslations: { en: "Everyone has a different way of thinking." }, audioUrl: null, status: "new" },
  { id: "L4-S8-W17", korean: "거부감", partOfSpeech: "noun", translations: { en: "sense of resistance / aversion" }, example: "새로운 것에 거부감이 없어요.", exampleTranslations: { en: "I have no resistance to new things." }, audioUrl: null, status: "new" },
  { id: "L4-S8-W18", korean: "융화되다", partOfSpeech: "verb", translations: { en: "to blend in / assimilate" }, example: "새 문화에 잘 융화됐어요.", exampleTranslations: { en: "I blended well into the new culture." }, audioUrl: null, status: "new" },
  { id: "L4-S8-W19", korean: "생활방식", partOfSpeech: "noun", translations: { en: "way of life / lifestyle" }, example: "나라마다 생활방식이 달라요.", exampleTranslations: { en: "Lifestyles differ by country." }, audioUrl: null, status: "review" },
  { id: "L4-S8-W20", korean: "예절", partOfSpeech: "noun", translations: { en: "etiquette / manners" }, example: "식사 예절이 나라마다 달라요.", exampleTranslations: { en: "Table manners differ by country." }, audioUrl: null, status: "review" },
  { id: "L4-S8-W21", korean: "전통", partOfSpeech: "noun", translations: { en: "tradition" }, example: "한국 전통 음식이에요.", exampleTranslations: { en: "It's a traditional Korean food." }, audioUrl: null, status: "review" },
  { id: "L4-S8-W22", korean: "공통점", partOfSpeech: "noun", translations: { en: "common point / similarity" }, example: "두 나라는 공통점이 많아요.", exampleTranslations: { en: "The two countries have many things in common." }, audioUrl: null, status: "review" },
  { id: "L4-S8-W23", korean: "익숙하다", partOfSpeech: "adjective", translations: { en: "familiar / used to" }, example: "이제 한국 생활이 익숙해요.", exampleTranslations: { en: "I'm used to life in Korea now." }, audioUrl: null, status: "review" },
  { id: "L4-S8-W24", korean: "낯설다", partOfSpeech: "adjective", translations: { en: "unfamiliar / strange" }, example: "처음에는 모든 게 낯설었어요.", exampleTranslations: { en: "At first, everything was unfamiliar." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L4-S8-S01", korean: "새로운 생활에 적응하는 것은 노력하기 나름이에요.", translations: { en: "Adapting to a new life depends on how much effort you make." }, keyExpression: "-기 나름이다", relatedWords: ["적응"], audioUrl: null },
  { id: "L4-S8-S02", korean: "관습을 이해하는 것도 생각하기 나름이에요.", translations: { en: "Understanding a custom also depends on how you think about it." }, keyExpression: "-기 나름이다", relatedWords: ["관습"], audioUrl: null },
  { id: "L4-S8-S03", korean: "저는 새로운 것에 비교적 개방적인 편이에요.", translations: { en: "I'm relatively open-minded about new things." }, keyExpression: "-는 편이다", relatedWords: ["개방적이다"], audioUrl: null },
  { id: "L4-S8-S04", korean: "저희 부모님 세대는 조금 보수적인 편이에요.", translations: { en: "My parents' generation is a bit on the conservative side." }, keyExpression: "-는 편이다", relatedWords: ["세대", "보수적이다"], audioUrl: null },
  { id: "L4-S8-S05", korean: "처음에는 이 나라의 풍습이 낯설고 어색했어요.", translations: { en: "At first, this country's customs felt unfamiliar and awkward." }, keyExpression: "어색하다", relatedWords: ["풍습", "낯설다", "어색하다"], audioUrl: null },
  { id: "L4-S8-S06", korean: "세대차이 때문에 사고방식이 다를 수 있어요.", translations: { en: "Because of the generation gap, ways of thinking can differ." }, keyExpression: "세대차이", relatedWords: ["세대차이", "사고방식"], audioUrl: null },
  { id: "L4-S8-S07", korean: "저는 다양성을 존중하고 편견 없이 사람을 대하려고 해요.", translations: { en: "I try to respect diversity and treat people without prejudice." }, keyExpression: "편견", relatedWords: ["다양성", "편견"], audioUrl: null },
  { id: "L4-S8-S08", korean: "시간이 지나면서 새로운 문화에 자연스럽게 융화됐어요.", translations: { en: "As time passed, I naturally blended into the new culture." }, keyExpression: "융화되다", relatedWords: ["융화되다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L4-S8-G01",
    pattern: "-기 나름이다",
    meanings: { en: "it depends on how (something is done)" },
    explanations: {
      en: "Attach -기 나름이다 to a verb stem to say the outcome depends entirely on how one approaches or does something.",
    },
    examples: [
      { korean: "새로운 생활에 적응하는 것은 노력하기 나름이에요.", translations: { en: "Adapting to a new life depends on how much effort you make." } },
      { korean: "관습을 이해하는 것도 생각하기 나름이에요.", translations: { en: "Understanding a custom also depends on how you think about it." } },
    ],
  },
  {
    id: "L4-S8-G02",
    pattern: "-는 편이다 (복습)",
    meanings: { en: "tends to be / is on the ~ side (review)" },
    explanations: {
      en: "Keep using -는 편이다 (TOPIK3 STEP11) to describe a general tendency rather than an absolute fact.",
    },
    examples: [
      { korean: "저는 새로운 것에 비교적 개방적인 편이에요.", translations: { en: "I'm relatively open-minded about new things." } },
      { korean: "저희 부모님 세대는 조금 보수적인 편이에요.", translations: { en: "My parents' generation is a bit on the conservative side." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L4-S8-L01",
    audioText: "새로운 생활에 적응하는 것은 노력하기 나름이에요. 저는 열심히 노력해서 잘 적응했어요.",
    audioUrl: null,
    question: "이 사람은 어떻게 잘 적응했습니까?",
    options: ["열심히 노력해서", "아무것도 안 해서", "돈이 많아서", "혼자 살아서"],
    correctAnswer: 0,
    translations: { en: { question: "How did this person adapt well?", explanation: 'The sentence says "by making a lot of effort," so the correct answer is 열심히 노력해서.' } },
  },
  {
    id: "L4-S8-L02",
    audioText: "저는 새로운 것에 비교적 개방적인 편이에요. 그래서 다른 나라 문화도 쉽게 받아들여요.",
    audioUrl: null,
    question: "이 사람의 성격은 어떻습니까?",
    options: ["보수적이다", "개방적인 편이다", "소극적이다", "무관심하다"],
    correctAnswer: 1,
    translations: { en: { question: "What is this person's personality like?", explanation: "The sentence says they're relatively open-minded, so the correct answer is 개방적인 편이다." } },
  },
  {
    id: "L4-S8-L03",
    audioText: "처음에는 이 나라의 풍습이 낯설고 어색했지만 시간이 지나면서 자연스럽게 융화됐어요.",
    audioUrl: null,
    question: "이 사람은 지금 어떤 상태입니까?",
    options: ["여전히 어색하다", "떠나고 싶다", "새 문화에 잘 융화됐다", "적응을 포기했다"],
    correctAnswer: 2,
    translations: { en: { question: "What state is this person in now?", explanation: "The sentence says they naturally blended into the new culture, so the correct answer is 새 문화에 잘 융화됐다." } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L4-S8-R01",
    passage:
      "저는 처음 이 나라에 왔을 때 모든 풍습이 낯설고 어색했어요.\n하지만 새로운 생활에 적응하는 것은 마음가짐하기 나름이라고 생각해요.\n그래서 관습을 이해하려고 노력하고 사람들과 자주 대화했어요.\n지금은 이곳 생활방식에 익숙해져서 편하게 지내고 있어요.",
    question: "이 사람은 어떻게 이곳 생활에 익숙해졌습니까?",
    options: ["관습을 이해하려고 노력하고 대화해서", "집에만 있어서", "고향으로 돌아가서", "아무 노력도 안 해서"],
    correctAnswer: 0,
    translations: { en: { question: "How did this person become familiar with life here?", explanation: "The passage says they tried to understand customs and talked with people often, so the correct answer is 관습을 이해하려고 노력하고 대화해서." } },
  },
  {
    id: "L4-S8-R02",
    passage:
      "세대차이는 어느 사회에나 있는 자연스러운 현상이에요.\n부모님 세대는 보수적인 편이고 젊은 세대는 개방적인 편인 경우가 많아요.\n서로 다른 가치와 사고방식을 편견 없이 이해하려는 노력이 필요해요.\n그래야 세대 간의 거리를 줄이고 좋은 관계를 유지할 수 있어요.",
    question: "이 글에서 세대차이를 줄이기 위해 필요한 것은 무엇입니까?",
    options: ["서로 무시하기", "편견 없이 이해하려는 노력", "만나지 않기", "같은 생각 강요하기"],
    correctAnswer: 1,
    translations: { en: { question: "According to the passage, what is needed to reduce the generation gap?", explanation: "The passage says an effort to understand without prejudice is needed, so the correct answer is 편견 없이 이해하려는 노력." } },
  },
  {
    id: "L4-S8-R03",
    passage:
      "다양성을 존중하는 사회에서는 서로 다른 문화가 자연스럽게 융화될 수 있어요.\n하지만 편견이나 거부감이 있으면 그 과정이 더 어려워져요.\n중요한 것은 다른 사람의 정체성과 사고방식을 있는 그대로 인정하는 인식이에요.\n이런 인식이 넓어질수록 사회는 더 개방적으로 변화할 수 있어요.",
    question: "이 글에서 문화 융화를 어렵게 만드는 것은 무엇입니까?",
    options: ["개방적인 사회", "다양성 존중", "편견과 거부감", "넓은 인식"],
    correctAnswer: 2,
    translations: { en: { question: "According to the passage, what makes cultural blending difficult?", explanation: "The passage says prejudice or a sense of resistance makes it harder, so the correct answer is 편견과 거부감." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L4-S8-WR01",
    type: "keyword-writing",
    prompt: { en: "Write one sentence using all of the following words." },
    keywords: ["문화", "차이", "적응하다"],
    sampleAnswer: { en: "문화 차이가 있었지만 저는 잘 적응했어요." },
    explanation: { en: "Combine 문화 and 차이 as the topic, then 적응하다 to state the outcome." },
  },
  {
    id: "L4-S8-WR02",
    type: "short-response",
    prompt: {
      en: "Write about 5 sentences about an experience of adapting to a new culture or way of life.\nInclude: your first impression, the difference, what was hard, how you adapted, and your current thoughts.",
    },
    keywords: ["낯설다", "어색하다", "적응", "익숙하다"],
    sampleAnswer: {
      en: "처음 새로운 곳에서 생활을 시작했을 때 모든 것이 낯설고 어색했어요. 특히 식사 예절이나 관습이 제 고향과 많이 달랐어요. 처음에는 그 차이 때문에 힘든 점도 있었어요. 하지만 사람들과 자주 대화하면서 조금씩 적응해 나갔어요. 지금은 이곳 생활방식에 익숙해져서 편안하게 지내고 있어요.",
    },
    explanation: { en: "5 sentences following first impression → difference → difficulty → adaptation → current thoughts is enough at this stage." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L4-S8-P01", type: "vocabulary", question: '"세대차이"의 뜻은 무엇입니까?', options: ["Diversity", "Generation gap", "Identity", "Prejudice"], correctAnswer: 1, explanation: { en: "세대차이 means generation gap." } },
  { id: "L4-S8-P02", type: "vocabulary", question: '"편견"의 뜻은 무엇입니까?', options: ["Awareness", "Custom", "Prejudice / bias", "Change"], correctAnswer: 2, explanation: { en: "편견 means prejudice/bias." } },
  { id: "L4-S8-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n새로운 생활에 적응하는 것은 노력하______.", options: ["기 나름이에요", "는 편이에요", "는 대신이에요", "는 반면이에요"], correctAnswer: 0, explanation: { en: "-기 나름이다 says the result depends on effort: 노력하기 나름이에요." } },
  { id: "L4-S8-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n저희 부모님 세대는 조금 보수적인 ______.", options: ["편이에요", "나름이에요", "덕분이에요", "김이에요"], correctAnswer: 0, explanation: { en: "-는 편이다 describes a tendency: 보수적인 편이에요." } },
  { id: "L4-S8-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n처음에는 이 나라의 풍습이 낯설고 ______.", options: ["어색했어요", "익숙했어요", "개방적이었어요", "매력적이었어요"], correctAnswer: 0, explanation: { en: "어색하다 (awkward) fits describing an unfamiliar custom." } },
  { id: "L4-S8-P06", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n시간이 지나면서 새 문화에 자연스럽게 ______.", options: ["융화됐어요", "거부했어요", "편견했어요", "낯설었어요"], correctAnswer: 0, explanation: { en: "융화되다 (to blend in) fits gradually adapting to a new culture." } },
  { id: "L4-S8-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n저는 문화의 ______을/를 존중해요.", options: ["다양성", "거부감", "편견", "세대차이"], correctAnswer: 0, explanation: { en: "다양성 (diversity) fits respecting different cultures." } },
  { id: "L4-S8-P08", type: "listening", audioText: "새로운 생활에 적응하는 것은 노력하기 나름이에요. 저는 열심히 노력해서 잘 적응했어요.", question: "이 사람은 어떻게 잘 적응했습니까?", options: ["돈이 많아서", "아무것도 안 해서", "열심히 노력해서", "혼자 살아서"], correctAnswer: 2, explanation: { en: "The sentence says by making a lot of effort, so the answer is 열심히 노력해서." } },
  { id: "L4-S8-P09", type: "listening", audioText: "저는 새로운 것에 비교적 개방적인 편이에요.", question: "이 사람의 성격은 어떻습니까?", options: ["보수적이다", "소극적이다", "무관심하다", "개방적인 편이다"], correctAnswer: 3, explanation: { en: "The sentence says they're relatively open-minded, so the answer is 개방적인 편이다." } },
  { id: "L4-S8-P10", type: "reading", passage: "관습을 이해하려고 노력하고 사람들과 자주 대화하면서 지금은 이곳 생활방식에 익숙해졌어요.", question: "이 사람은 어떻게 이곳 생활에 익숙해졌습니까?", options: ["집에만 있어서", "고향으로 돌아가서", "아무 노력도 안 해서", "관습을 이해하려고 노력하고 대화해서"], correctAnswer: 3, explanation: { en: "The passage says they tried to understand customs and talked with people, so the answer is 관습을 이해하려고 노력하고 대화해서." } },
  { id: "L4-S8-P11", type: "reading", passage: "서로 다른 가치와 사고방식을 편견 없이 이해하려는 노력이 필요해요. 그래야 세대 간의 거리를 줄일 수 있어요.", question: "세대차이를 줄이기 위해 필요한 것은 무엇입니까?", options: ["서로 무시하기", "만나지 않기", "같은 생각 강요하기", "편견 없이 이해하려는 노력"], correctAnswer: 3, explanation: { en: "The passage says an effort to understand without prejudice is needed, so the answer is 편견 없이 이해하려는 노력." } },
  { id: "L4-S8-P12", type: "sentence", question: "다음 중 자연스러운 문장은?", options: ["관습을 이해하는 것도 생각하나름이에요.", "관습을 이해하는 것도 생각하기 나름이에요.", "관습을 이해하는 것도 생각한 나름이에요.", "관습을 이해하는 것도 생각 나름이에요."], correctAnswer: 1, explanation: { en: "-기 나름이다 attaches to the verb stem: 생각하기 나름이에요." } },
];

export const STEP_4_8: StepContent = {
  level: 4,
  step: 8,
  title: "한국 문화와 생활 (Korean Culture and Life)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
