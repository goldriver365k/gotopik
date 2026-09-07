// TOPIK 4 STEP 5 — Health and Modern Life (건강과 현대생활).
// Independent of TOPIK1/TOPIK2/TOPIK3/TOPIK4 STEP1-4's data files.
// 건강관리, 생활습관, 스트레스, 균형, 규칙적, 충분하다 already exist
// as "new" elsewhere (TOPIK2/TOPIK3) — recorded here with status "review".
// No medical/technical vocabulary — everyday health/lifestyle words only.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L4-S5-W01", korean: "현대인", partOfSpeech: "noun", translations: { en: "modern person" }, example: "현대인은 바쁘게 살아요.", exampleTranslations: { en: "Modern people live busily." }, audioUrl: null, status: "new" },
  { id: "L4-S5-W02", korean: "수면부족", partOfSpeech: "noun", translations: { en: "lack of sleep" }, example: "수면부족이 건강에 안 좋아요.", exampleTranslations: { en: "Lack of sleep is bad for health." }, audioUrl: null, status: "new" },
  { id: "L4-S5-W03", korean: "운동부족", partOfSpeech: "noun", translations: { en: "lack of exercise" }, example: "운동부족도 문제예요.", exampleTranslations: { en: "Lack of exercise is also a problem." }, audioUrl: null, status: "new" },
  { id: "L4-S5-W04", korean: "영향", partOfSpeech: "noun", translations: { en: "influence / effect" }, example: "스트레스가 건강에 영향을 줘요.", exampleTranslations: { en: "Stress affects health." }, audioUrl: null, status: "new" },
  { id: "L4-S5-W05", korean: "개선", partOfSpeech: "noun", translations: { en: "improvement" }, example: "생활습관 개선이 필요해요.", exampleTranslations: { en: "Improvement of lifestyle habits is needed." }, audioUrl: null, status: "new" },
  { id: "L4-S5-W06", korean: "야식", partOfSpeech: "noun", translations: { en: "late-night snack" }, example: "야식을 자주 먹어요.", exampleTranslations: { en: "I often eat late-night snacks." }, audioUrl: null, status: "new" },
  { id: "L4-S5-W07", korean: "다이어트", partOfSpeech: "noun", translations: { en: "diet" }, example: "저는 다이어트를 시작했어요.", exampleTranslations: { en: "I started a diet." }, audioUrl: null, status: "new" },
  { id: "L4-S5-W08", korean: "체중", partOfSpeech: "noun", translations: { en: "body weight" }, example: "체중이 늘었어요.", exampleTranslations: { en: "My weight increased." }, audioUrl: null, status: "new" },
  { id: "L4-S5-W09", korean: "비만", partOfSpeech: "noun", translations: { en: "obesity" }, example: "비만은 여러 문제의 원인이 돼요.", exampleTranslations: { en: "Obesity is a cause of various problems." }, audioUrl: null, status: "new" },
  { id: "L4-S5-W10", korean: "면역력", partOfSpeech: "noun", translations: { en: "immunity" }, example: "면역력이 약해졌어요.", exampleTranslations: { en: "My immunity has weakened." }, audioUrl: null, status: "new" },
  { id: "L4-S5-W11", korean: "활력", partOfSpeech: "noun", translations: { en: "vitality" }, example: "운동을 하면 활력이 생겨요.", exampleTranslations: { en: "Exercise gives you vitality." }, audioUrl: null, status: "new" },
  { id: "L4-S5-W12", korean: "컨디션", partOfSpeech: "noun", translations: { en: "condition (physical)" }, example: "오늘 컨디션이 안 좋아요.", exampleTranslations: { en: "My condition is bad today." }, audioUrl: null, status: "new" },
  { id: "L4-S5-W13", korean: "무리하다", partOfSpeech: "verb", translations: { en: "to overdo / overexert oneself" }, example: "일을 너무 무리하지 마세요.", exampleTranslations: { en: "Don't overexert yourself with work." }, audioUrl: null, status: "new" },
  { id: "L4-S5-W14", korean: "지치다", partOfSpeech: "verb", translations: { en: "to get exhausted" }, example: "요즘 너무 지쳐요.", exampleTranslations: { en: "I'm really exhausted these days." }, audioUrl: null, status: "new" },
  { id: "L4-S5-W15", korean: "불규칙하다", partOfSpeech: "adjective", translations: { en: "irregular" }, example: "식사 시간이 불규칙해요.", exampleTranslations: { en: "My meal times are irregular." }, audioUrl: null, status: "new" },
  { id: "L4-S5-W16", korean: "늦잠", partOfSpeech: "noun", translations: { en: "oversleeping" }, example: "주말에는 늦잠을 자요.", exampleTranslations: { en: "I oversleep on weekends." }, audioUrl: null, status: "new" },
  { id: "L4-S5-W17", korean: "심각하다", partOfSpeech: "adjective", translations: { en: "serious" }, example: "수면부족 문제가 심각해요.", exampleTranslations: { en: "The sleep-deprivation problem is serious." }, audioUrl: null, status: "new" },
  { id: "L4-S5-W18", korean: "나른하다", partOfSpeech: "adjective", translations: { en: "languid / drowsy" }, example: "오후에는 항상 나른해요.", exampleTranslations: { en: "I always feel drowsy in the afternoon." }, audioUrl: null, status: "new" },
  { id: "L4-S5-W19", korean: "건강관리", partOfSpeech: "noun", translations: { en: "health management" }, example: "건강관리가 중요해요.", exampleTranslations: { en: "Health management is important." }, audioUrl: null, status: "review" },
  { id: "L4-S5-W20", korean: "생활습관", partOfSpeech: "noun", translations: { en: "lifestyle habit" }, example: "좋은 생활습관을 만들어요.", exampleTranslations: { en: "I build good lifestyle habits." }, audioUrl: null, status: "review" },
  { id: "L4-S5-W21", korean: "스트레스", partOfSpeech: "noun", translations: { en: "stress" }, example: "스트레스가 많아요.", exampleTranslations: { en: "I have a lot of stress." }, audioUrl: null, status: "review" },
  { id: "L4-S5-W22", korean: "균형", partOfSpeech: "noun", translations: { en: "balance" }, example: "균형 잡힌 식습관이 중요해요.", exampleTranslations: { en: "A balanced eating habit is important." }, audioUrl: null, status: "review" },
  { id: "L4-S5-W23", korean: "규칙적", partOfSpeech: "noun", translations: { en: "regular / regularly" }, example: "규칙적으로 운동해요.", exampleTranslations: { en: "I exercise regularly." }, audioUrl: null, status: "review" },
  { id: "L4-S5-W24", korean: "충분하다", partOfSpeech: "adjective", translations: { en: "sufficient / enough" }, example: "잠을 충분히 자요.", exampleTranslations: { en: "I sleep sufficiently." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L4-S5-S01", korean: "밤늦게까지 일하다 보니 피곤한 날이 많아졌어요.", translations: { en: "As I kept working late into the night, I ended up tired many days." }, keyExpression: "-다 보니", relatedWords: [], audioUrl: null },
  { id: "L4-S5-S02", korean: "야식을 자주 먹다 보니 체중이 늘었어요.", translations: { en: "As I kept eating late-night snacks often, my weight increased." }, keyExpression: "-다 보니", relatedWords: ["야식", "체중"], audioUrl: null },
  { id: "L4-S5-S03", korean: "규칙적으로 운동하는 것이 중요해요.", translations: { en: "Exercising regularly is important." }, keyExpression: "-는 것이 중요하다", relatedWords: ["규칙적"], audioUrl: null },
  { id: "L4-S5-S04", korean: "충분히 자는 것이 중요해요.", translations: { en: "Sleeping enough is important." }, keyExpression: "-는 것이 중요하다", relatedWords: ["충분하다"], audioUrl: null },
  { id: "L4-S5-S05", korean: "현대인은 스트레스로 인해 면역력이 약해지기 쉬워요.", translations: { en: "Modern people's immunity easily weakens due to stress." }, keyExpression: "면역력", relatedWords: ["현대인", "스트레스", "면역력"], audioUrl: null },
  { id: "L4-S5-S06", korean: "수면부족과 운동부족이 계속되면 건강에 심각한 영향을 줘요.", translations: { en: "If lack of sleep and lack of exercise continue, it seriously affects health." }, keyExpression: "영향", relatedWords: ["수면부족", "운동부족", "심각하다", "영향"], audioUrl: null },
  { id: "L4-S5-S07", korean: "저는 불규칙한 생활습관을 개선하려고 노력해요.", translations: { en: "I try to improve my irregular lifestyle habits." }, keyExpression: "개선", relatedWords: ["불규칙하다", "생활습관", "개선"], audioUrl: null },
  { id: "L4-S5-S08", korean: "무리하지 않고 휴식을 취하면 활력을 되찾을 수 있어요.", translations: { en: "If you rest without overexerting yourself, you can regain your vitality." }, keyExpression: "활력", relatedWords: ["무리하다", "활력"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L4-S5-G01",
    pattern: "-다 보니",
    meanings: { en: "as I kept doing (something), (a result naturally followed)" },
    explanations: {
      en: "Attach -다 보니 to a verb stem to show a result that naturally came about from repeating or continuing an action.",
    },
    examples: [
      { korean: "밤늦게까지 일하다 보니 피곤한 날이 많아졌어요.", translations: { en: "As I kept working late into the night, I ended up tired many days." } },
      { korean: "야식을 자주 먹다 보니 체중이 늘었어요.", translations: { en: "As I kept eating late-night snacks often, my weight increased." } },
    ],
  },
  {
    id: "L4-S5-G02",
    pattern: "-는 것이 중요하다",
    meanings: { en: "doing (something) is important" },
    explanations: {
      en: "Attach -는 것이 중요하다 to a verb stem to state that an action is important to do.",
    },
    examples: [
      { korean: "규칙적으로 운동하는 것이 중요해요.", translations: { en: "Exercising regularly is important." } },
      { korean: "충분히 자는 것이 중요해요.", translations: { en: "Sleeping enough is important." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L4-S5-L01",
    audioText: "밤늦게까지 일하다 보니 피곤한 날이 많아졌어요. 그래서 요즘 컨디션이 안 좋아요.",
    audioUrl: null,
    question: "이 사람은 왜 피곤합니까?",
    options: ["운동을 너무 많이 해서", "밤늦게까지 일해서", "야식을 안 먹어서", "휴가를 가서"],
    correctAnswer: 1,
    translations: { en: { question: "Why is this person tired?", explanation: 'The sentence says "working late into the night," so the correct answer is 밤늦게까지 일해서.' } },
  },
  {
    id: "L4-S5-L02",
    audioText: "저는 야식을 자주 먹다 보니 체중이 많이 늘었어요. 그래서 다이어트를 시작했어요.",
    audioUrl: null,
    question: "이 사람은 왜 다이어트를 시작했습니까?",
    options: ["친구가 시켜서", "운동이 좋아서", "체중이 많이 늘어서", "돈을 아끼려고"],
    correctAnswer: 2,
    translations: { en: { question: "Why did this person start a diet?", explanation: 'The sentence says "weight increased a lot," so the correct answer is 체중이 많이 늘어서.' } },
  },
  {
    id: "L4-S5-L03",
    audioText: "규칙적으로 운동하고 충분히 자는 것이 중요해요. 그래야 면역력이 좋아져요.",
    audioUrl: null,
    question: "이 사람이 중요하다고 말하는 것은 무엇입니까?",
    options: ["돈을 많이 버는 것", "늦잠을 자는 것", "매일 야식을 먹는 것", "규칙적인 운동과 충분한 수면"],
    correctAnswer: 3,
    translations: { en: { question: "What does this person say is important?", explanation: "The sentence says regular exercise and enough sleep are important, so the correct answer is 규칙적인 운동과 충분한 수면." } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L4-S5-R01",
    passage:
      "현대인은 바쁘게 살다 보니 건강관리에 소홀해지기 쉬워요.\n수면부족과 운동부족이 계속되면 면역력이 약해지고 쉽게 지쳐요.\n특히 스트레스가 많으면 이런 문제가 더 심각해질 수 있어요.\n그래서 바쁜 생활 속에서도 규칙적인 생활습관을 유지하는 것이 중요해요.",
    question: "이 글에서 건강 문제를 심각하게 만드는 것은 무엇입니까?",
    options: ["규칙적인 운동", "스트레스", "충분한 수면", "균형 잡힌 식사"],
    correctAnswer: 1,
    translations: { en: { question: "According to the passage, what makes health problems worse?", explanation: "The passage says a lot of stress can make these problems more serious, so the correct answer is 스트레스." } },
  },
  {
    id: "L4-S5-R02",
    passage:
      "저는 요즘 야식을 자주 먹다 보니 체중이 많이 늘었어요.\n게다가 운동부족까지 겹쳐서 몸이 무겁고 나른하게 느껴져요.\n그래서 이제부터는 야식을 줄이고 규칙적으로 운동하려고 해요.\n무리하지 않고 조금씩 습관을 개선할 계획이에요.",
    question: "이 사람은 앞으로 어떻게 하려고 합니까?",
    options: ["야식을 계속 먹는다", "운동을 그만둔다", "야식을 줄이고 규칙적으로 운동한다", "잠을 안 잔다"],
    correctAnswer: 2,
    translations: { en: { question: "What does this person plan to do going forward?", explanation: "The passage says they will reduce late-night snacks and exercise regularly, so the correct answer is 야식을 줄이고 규칙적으로 운동한다." } },
  },
  {
    id: "L4-S5-R03",
    passage:
      "건강한 생활을 위해서는 몇 가지 습관이 중요해요.\n첫째, 규칙적으로 운동하는 것이 중요해요.\n둘째, 충분히 자고 무리하지 않는 것도 필요해요.\n마지막으로 균형 잡힌 식습관을 유지하면 면역력과 활력을 지킬 수 있어요.",
    question: "이 글에서 말하는 건강한 생활 습관이 아닌 것은 무엇입니까?",
    options: ["규칙적인 운동", "충분한 수면", "균형 잡힌 식습관", "잦은 야식"],
    correctAnswer: 3,
    translations: { en: { question: "Which is NOT one of the healthy habits mentioned in the passage?", explanation: "Frequent late-night snacking is not listed, so the correct answer is 잦은 야식." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L4-S5-WR01",
    type: "sentence-completion",
    prompt: { en: "Complete the sentence: 잠을 충분히 자지 않다 보니 ______." },
    sampleAnswer: { en: "잠을 충분히 자지 않다 보니 낮에 계속 나른해요." },
    explanation: { en: "-다 보니 shows a result that naturally followed from not sleeping enough." },
  },
  {
    id: "L4-S5-WR02",
    type: "short-response",
    prompt: {
      en: "Write about 5 sentences on habits needed for a healthy life.\nStructure: 1) the problem or why it matters, 2) method 1, 3) reason, 4) method 2, 5) closing.",
    },
    keywords: ["수면부족", "규칙적", "개선", "활력"],
    sampleAnswer: {
      en: "요즘 현대인들에게 수면부족과 운동부족이 심각한 문제예요. 그래서 저는 규칙적으로 운동하는 것이 중요하다고 생각해요. 운동을 하면 스트레스도 줄고 면역력도 좋아지기 때문이에요. 또한 야식을 줄이고 충분히 자는 것도 필요해요. 이렇게 생활습관을 개선하면 활력 있게 지낼 수 있어요.",
    },
    explanation: { en: "5 sentences following problem → method 1 → reason → method 2 → closing is enough at this stage." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L4-S5-P01", type: "vocabulary", question: '"수면부족"의 뜻은 무엇입니까?', options: ["Lack of exercise", "Lack of sleep", "Body weight", "Immunity"], correctAnswer: 1, explanation: { en: "수면부족 means lack of sleep." } },
  { id: "L4-S5-P02", type: "vocabulary", question: '"면역력"의 뜻은 무엇입니까?', options: ["Vitality", "Condition", "Immunity", "Obesity"], correctAnswer: 2, explanation: { en: "면역력 means immunity." } },
  { id: "L4-S5-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n야식을 자주 먹______ 체중이 늘었어요.", options: ["다 보니", "는 대신에", "기 때문에", "는 반면에"], correctAnswer: 0, explanation: { en: "-다 보니 shows a natural result: 먹다 보니." } },
  { id: "L4-S5-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n충분히 자______.", options: ["는 것이 중요해요", "기 나름이에요", "는 데다가요", "는 김에요"], correctAnswer: 0, explanation: { en: "-는 것이 중요하다 states something is important: 자는 것이 중요해요." } },
  { id: "L4-S5-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n요즘 너무 ______ 쉬고 싶어요.", options: ["지쳐서", "활력 있어서", "충분해서", "규칙적이어서"], correctAnswer: 0, explanation: { en: "지치다 (to get exhausted) fits wanting to rest." } },
  { id: "L4-S5-P06", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n식사 시간이 ______ 건강에 안 좋아요.", options: ["규칙적이어서", "불규칙해서", "충분해서", "심각해서"], correctAnswer: 1, explanation: { en: "불규칙하다 (irregular) fits describing bad meal timing." } },
  { id: "L4-S5-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n일을 너무 ______ 마세요.", options: ["무리하지", "개선하지", "지치지", "예방하지"], correctAnswer: 0, explanation: { en: "무리하다 (to overexert) fits telling someone not to push too hard." } },
  { id: "L4-S5-P08", type: "listening", audioText: "밤늦게까지 일하다 보니 피곤한 날이 많아졌어요.", question: "이 사람은 왜 피곤합니까?", options: ["운동을 너무 많이 해서", "휴가를 가서", "밤늦게까지 일해서", "야식을 안 먹어서"], correctAnswer: 2, explanation: { en: "The sentence says they work late into the night, so the answer is 밤늦게까지 일해서." } },
  { id: "L4-S5-P09", type: "listening", audioText: "저는 야식을 자주 먹다 보니 체중이 많이 늘었어요. 그래서 다이어트를 시작했어요.", question: "이 사람은 왜 다이어트를 시작했습니까?", options: ["친구가 시켜서", "돈을 아끼려고", "운동이 좋아서", "체중이 많이 늘어서"], correctAnswer: 3, explanation: { en: "The sentence says their weight increased a lot, so the answer is 체중이 많이 늘어서." } },
  { id: "L4-S5-P10", type: "reading", passage: "현대인은 바쁘게 살다 보니 건강관리에 소홀해지기 쉬워요. 수면부족과 운동부족이 계속되면 면역력이 약해져요.", question: "이 글에서 면역력을 약하게 만드는 것은 무엇입니까?", options: ["균형 잡힌 식사", "충분한 수면", "규칙적인 운동", "수면부족과 운동부족"], correctAnswer: 3, explanation: { en: "The passage names lack of sleep and lack of exercise, so the answer is 수면부족과 운동부족." } },
  { id: "L4-S5-P11", type: "reading", passage: "저는 야식을 줄이고 규칙적으로 운동하려고 해요. 무리하지 않고 조금씩 습관을 개선할 계획이에요.", question: "이 사람은 앞으로 어떻게 하려고 합니까?", options: ["잠을 안 잔다", "운동을 그만둔다", "야식을 줄이고 규칙적으로 운동한다", "야식을 계속 먹는다"], correctAnswer: 2, explanation: { en: "The passage says they will reduce late-night snacks and exercise regularly, so the answer is 야식을 줄이고 규칙적으로 운동한다." } },
  { id: "L4-S5-P12", type: "sentence", question: "다음 중 자연스러운 문장은?", options: ["야식을 자주 먹다보니가 체중이 늘었어요.", "야식을 자주 먹다 보니 체중이 늘었어요.", "야식을 자주 먹은 보니 체중이 늘었어요.", "야식을 자주 먹기 보니 체중이 늘었어요."], correctAnswer: 1, explanation: { en: "-다 보니 attaches directly to the verb stem: 먹다 보니." } },
];

export const STEP_4_5: StepContent = {
  level: 4,
  step: 5,
  title: "건강과 현대생활 (Health and Modern Life)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
