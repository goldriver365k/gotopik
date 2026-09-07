// TOPIK 4 STEP 14 — Social Rules and Public Order (사회 규칙과 공공질서).
// Independent of TOPIK1/TOPIK2/TOPIK3/TOPIK4 STEP1-13's data files.
// 규칙, 책임, 배려, 금지, 질서, 지키다, 조심하다, 존중하다 already
// exist as "new" elsewhere (TOPIK2/TOPIK3/TOPIK4) — recorded here with
// status "review". -아/어야만 하다 is an emphatic form of -아/어야 하다
// (already taught since TOPIK1/TOPIK2) — labeled "(복습)" rather than
// re-taught as new, per docs/topik4-curriculum.md §4.
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L4-S14-W01", korean: "공공질서", partOfSpeech: "noun", translations: { en: "public order" }, example: "공공질서를 지키는 것이 중요해요.", exampleTranslations: { en: "Keeping public order is important." }, audioUrl: null, status: "new" },
  { id: "L4-S14-W02", korean: "의무", partOfSpeech: "noun", translations: { en: "duty / obligation" }, example: "규칙을 지키는 것은 시민의 의무예요.", exampleTranslations: { en: "Following rules is a citizen's duty." }, audioUrl: null, status: "new" },
  { id: "L4-S14-W03", korean: "안전", partOfSpeech: "noun", translations: { en: "safety" }, example: "안전을 위해 규칙이 필요해요.", exampleTranslations: { en: "Rules are needed for safety." }, audioUrl: null, status: "new" },
  { id: "L4-S14-W04", korean: "허용", partOfSpeech: "noun", translations: { en: "permission / allowance" }, example: "여기는 흡연이 허용되지 않아요.", exampleTranslations: { en: "Smoking is not allowed here." }, audioUrl: null, status: "new" },
  { id: "L4-S14-W05", korean: "피해", partOfSpeech: "noun", translations: { en: "damage / harm" }, example: "다른 사람에게 피해를 주면 안 돼요.", exampleTranslations: { en: "You must not cause harm to others." }, audioUrl: null, status: "new" },
  { id: "L4-S14-W06", korean: "행동", partOfSpeech: "noun", translations: { en: "behavior / action" }, example: "공공장소에서는 행동을 조심해야 해요.", exampleTranslations: { en: "You must be careful with your behavior in public places." }, audioUrl: null, status: "new" },
  { id: "L4-S14-W07", korean: "공동", partOfSpeech: "noun", translations: { en: "shared / communal" }, example: "이곳은 공동 이용 공간이에요.", exampleTranslations: { en: "This is a shared-use space." }, audioUrl: null, status: "new" },
  { id: "L4-S14-W08", korean: "시민", partOfSpeech: "noun", translations: { en: "citizen" }, example: "시민이라면 규칙을 지켜야 해요.", exampleTranslations: { en: "As a citizen, you should follow the rules." }, audioUrl: null, status: "new" },
  { id: "L4-S14-W09", korean: "준수", partOfSpeech: "noun", translations: { en: "compliance / observance" }, example: "규칙 준수가 필요해요.", exampleTranslations: { en: "Rule compliance is needed." }, audioUrl: null, status: "new" },
  { id: "L4-S14-W10", korean: "위반하다", partOfSpeech: "verb", translations: { en: "to violate" }, example: "규칙을 위반하면 안 돼요.", exampleTranslations: { en: "You must not violate the rules." }, audioUrl: null, status: "new" },
  { id: "L4-S14-W11", korean: "책임지다", partOfSpeech: "verb", translations: { en: "to take responsibility" }, example: "자기 행동은 스스로 책임져야 해요.", exampleTranslations: { en: "You must take responsibility for your own actions." }, audioUrl: null, status: "new" },
  { id: "L4-S14-W12", korean: "공중도덕", partOfSpeech: "noun", translations: { en: "public morals / etiquette" }, example: "공중도덕을 지켜야 해요.", exampleTranslations: { en: "You must keep public morals." }, audioUrl: null, status: "new" },
  { id: "L4-S14-W13", korean: "매너", partOfSpeech: "noun", translations: { en: "manners" }, example: "그 사람은 매너가 좋아요.", exampleTranslations: { en: "That person has good manners." }, audioUrl: null, status: "new" },
  { id: "L4-S14-W14", korean: "소음", partOfSpeech: "noun", translations: { en: "noise" }, example: "밤에는 소음을 줄여야 해요.", exampleTranslations: { en: "You must reduce noise at night." }, audioUrl: null, status: "new" },
  { id: "L4-S14-W15", korean: "타인", partOfSpeech: "noun", translations: { en: "other people" }, example: "타인에게 피해를 주지 않도록 조심해요.", exampleTranslations: { en: "I'm careful not to cause harm to other people." }, audioUrl: null, status: "new" },
  { id: "L4-S14-W16", korean: "위반", partOfSpeech: "noun", translations: { en: "violation" }, example: "규칙 위반은 처벌받을 수 있어요.", exampleTranslations: { en: "A rule violation can be punished." }, audioUrl: null, status: "new" },
  { id: "L4-S14-W17", korean: "규칙", partOfSpeech: "noun", translations: { en: "rule" }, example: "규칙을 지켜야 해요.", exampleTranslations: { en: "You have to follow the rules." }, audioUrl: null, status: "review" },
  { id: "L4-S14-W18", korean: "책임", partOfSpeech: "noun", translations: { en: "responsibility" }, example: "이 일은 제 책임이에요.", exampleTranslations: { en: "This task is my responsibility." }, audioUrl: null, status: "review" },
  { id: "L4-S14-W19", korean: "배려", partOfSpeech: "noun", translations: { en: "consideration (for others)" }, example: "그 사람은 배려가 많아요.", exampleTranslations: { en: "That person is very considerate." }, audioUrl: null, status: "review" },
  { id: "L4-S14-W20", korean: "금지", partOfSpeech: "noun", translations: { en: "prohibition" }, example: "여기는 사진 금지예요.", exampleTranslations: { en: "Photos are prohibited here." }, audioUrl: null, status: "review" },
  { id: "L4-S14-W21", korean: "질서", partOfSpeech: "noun", translations: { en: "order (public order)" }, example: "질서를 지켜야 해요.", exampleTranslations: { en: "You have to maintain order." }, audioUrl: null, status: "review" },
  { id: "L4-S14-W22", korean: "지키다", partOfSpeech: "verb", translations: { en: "to keep / observe (rules)" }, example: "규칙을 지켜요.", exampleTranslations: { en: "I observe the rules." }, audioUrl: null, status: "review" },
  { id: "L4-S14-W23", korean: "조심하다", partOfSpeech: "verb", translations: { en: "to be careful" }, example: "건강을 조심하세요.", exampleTranslations: { en: "Please take care of your health." }, audioUrl: null, status: "review" },
  { id: "L4-S14-W24", korean: "존중하다", partOfSpeech: "verb", translations: { en: "to respect" }, example: "서로의 문화를 존중해요.", exampleTranslations: { en: "We respect each other's culture." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L4-S14-S01", korean: "공공장소에서는 기본적인 규칙을 지켜야만 합니다.", translations: { en: "In public places, you must keep basic rules." }, keyExpression: "-아/어야만 하다", relatedWords: ["규칙"], audioUrl: null },
  { id: "L4-S14-S02", korean: "타인에게 피해를 주지 않도록 항상 조심해야만 해요.", translations: { en: "You must always be careful not to cause harm to others." }, keyExpression: "-아/어야만 하다", relatedWords: ["타인", "피해", "조심하다"], audioUrl: null },
  { id: "L4-S14-S03", korean: "다른 사람을 배려하는 것이 바람직합니다.", translations: { en: "It's desirable to be considerate of others." }, keyExpression: "-는 것이 바람직하다", relatedWords: ["배려"], audioUrl: null },
  { id: "L4-S14-S04", korean: "공공질서를 위해 시민 모두가 규칙을 준수하는 것이 바람직해요.", translations: { en: "It's desirable for all citizens to comply with the rules for public order." }, keyExpression: "-는 것이 바람직하다", relatedWords: ["공공질서", "시민", "준수"], audioUrl: null },
  { id: "L4-S14-S05", korean: "규칙을 위반하면 다른 사람에게 피해를 줄 수 있어요.", translations: { en: "If you violate the rules, you can cause harm to others." }, keyExpression: "위반하다", relatedWords: ["위반하다", "피해"], audioUrl: null },
  { id: "L4-S14-S06", korean: "밤에는 소음을 줄이는 것이 공동생활의 매너예요.", translations: { en: "Reducing noise at night is manners for communal living." }, keyExpression: "매너", relatedWords: ["소음", "공동", "매너"], audioUrl: null },
  { id: "L4-S14-S07", korean: "자기 행동에 대해서는 스스로 책임지는 것이 중요해요.", translations: { en: "It's important to take responsibility for your own actions yourself." }, keyExpression: "책임지다", relatedWords: ["행동", "책임지다"], audioUrl: null },
  { id: "L4-S14-S08", korean: "공중도덕을 지키는 것은 모든 시민의 의무예요.", translations: { en: "Keeping public morals is every citizen's duty." }, keyExpression: "의무", relatedWords: ["공중도덕", "시민", "의무"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L4-S14-G01",
    pattern: "-아/어야만 하다 (복습)",
    meanings: { en: "must absolutely do (review, emphatic form of -아/어야 하다)" },
    explanations: {
      en: "Keep using -아/어야만 하다 as a stronger, more emphatic version of -아/어야 하다 to stress that something is absolutely required.",
    },
    examples: [
      { korean: "공공장소에서는 기본적인 규칙을 지켜야만 합니다.", translations: { en: "In public places, you must keep basic rules." } },
      { korean: "타인에게 피해를 주지 않도록 항상 조심해야만 해요.", translations: { en: "You must always be careful not to cause harm to others." } },
    ],
  },
  {
    id: "L4-S14-G02",
    pattern: "-는 것이 바람직하다",
    meanings: { en: "it is desirable to (do something)" },
    explanations: {
      en: "Attach -는 것이 바람직하다 to a verb stem to recommend an action as the desirable, right thing to do.",
    },
    examples: [
      { korean: "다른 사람을 배려하는 것이 바람직합니다.", translations: { en: "It's desirable to be considerate of others." } },
      { korean: "공공질서를 위해 시민 모두가 규칙을 준수하는 것이 바람직해요.", translations: { en: "It's desirable for all citizens to comply with the rules for public order." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L4-S14-L01",
    audioText: "공공장소에서는 기본적인 규칙을 지켜야만 합니다. 그래야 모두가 안전하고 편하게 지낼 수 있어요.",
    audioUrl: null,
    question: "공공장소에서 규칙을 지켜야 하는 이유는 무엇입니까?",
    options: ["모두가 안전하고 편하게 지내기 위해서", "돈을 아끼기 위해서", "빨리 끝내기 위해서", "혼자 있기 위해서"],
    correctAnswer: 0,
    translations: { en: { question: "Why must rules be kept in public places?", explanation: 'The sentence says "so everyone can be safe and comfortable," so the correct answer is 모두가 안전하고 편하게 지내기 위해서.' } },
  },
  {
    id: "L4-S14-L02",
    audioText: "밤에는 소음을 줄이는 것이 바람직해요. 이웃에게 피해를 줄 수 있기 때문이에요.",
    audioUrl: null,
    question: "왜 밤에 소음을 줄여야 합니까?",
    options: ["잠을 안 자려고", "이웃에게 피해를 줄 수 있어서", "돈을 아끼려고", "규칙이 없어서"],
    correctAnswer: 1,
    translations: { en: { question: "Why should noise be reduced at night?", explanation: "The sentence says it can cause harm to neighbors, so the correct answer is 이웃에게 피해를 줄 수 있어서." } },
  },
  {
    id: "L4-S14-L03",
    audioText: "공중도덕을 지키는 것은 시민의 의무예요. 규칙을 위반하면 다른 사람에게 피해를 줄 수 있습니다.",
    audioUrl: null,
    question: "이 사람이 강조하는 것은 무엇입니까?",
    options: ["규칙을 무시해도 된다", "혼자 살면 규칙이 필요 없다", "공중도덕을 지키는 것이 의무다", "피해는 상관없다"],
    correctAnswer: 2,
    translations: { en: { question: "What does this person emphasize?", explanation: "The sentence says keeping public morals is a duty, so the correct answer is 공중도덕을 지키는 것이 의무다." } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L4-S14-R01",
    passage:
      "공공장소에서는 여러 사람이 함께 생활하기 때문에 지켜야 할 규칙이 있어요.\n예를 들어 큰 소리로 떠들거나 소음을 내면 타인에게 피해를 줄 수 있어요.\n또한 금지된 장소에서 흡연하는 것도 다른 사람에게 피해를 주는 행동이에요.\n이런 규칙을 지키지 않으면 공공질서가 무너질 수 있어요.",
    question: "이 글에서 공공장소의 규칙을 지켜야 하는 이유는 무엇입니까?",
    options: ["타인에게 피해를 주지 않기 위해서", "규칙이 재미있어서", "시간을 아끼기 위해서", "돈을 절약하기 위해서"],
    correctAnswer: 0,
    translations: { en: { question: "Why must public place rules be kept, according to the passage?", explanation: "The passage says to avoid causing harm to others, so the correct answer is 타인에게 피해를 주지 않기 위해서." } },
  },
  {
    id: "L4-S14-R02",
    passage:
      "공동 생활 공간에서는 서로를 배려하는 매너가 중요해요.\n밤늦게 소음을 내지 않는 것, 공용 공간을 깨끗이 사용하는 것 모두 기본적인 매너예요.\n이런 매너를 지키지 않으면 이웃과 갈등이 생길 수도 있어요.\n그래서 시민 모두가 공중도덕을 지키려고 노력하는 것이 바람직해요.",
    question: "이 글에서 공동 생활의 기본 매너가 아닌 것은 무엇입니까?",
    options: ["소음을 내지 않는 것", "이웃과 갈등을 만드는 것", "공용 공간을 깨끗이 쓰는 것", "서로 배려하는 것"],
    correctAnswer: 1,
    translations: { en: { question: "Which is NOT a basic manner for communal living, according to the passage?", explanation: "Creating conflict with neighbors is not a manner, so the correct answer is 이웃과 갈등을 만드는 것." } },
  },
  {
    id: "L4-S14-R03",
    passage:
      "저는 예전에 공공장소에서 규칙을 위반해서 다른 사람에게 피해를 준 적이 있어요.\n그 후로는 제 행동이 타인에게 어떤 영향을 주는지 항상 생각하게 됐어요.\n지금은 공중도덕과 매너를 지키려고 스스로 노력하고 있어요.\n작은 행동 하나도 책임지는 자세가 중요하다는 것을 배웠어요.",
    question: "이 사람은 그 일 이후 어떻게 바뀌었습니까?",
    options: ["규칙에 더 무관심해졌다", "공공장소를 피한다", "자기 행동의 영향을 생각하고 책임지려고 노력한다", "다른 사람을 신경 쓰지 않는다"],
    correctAnswer: 2,
    translations: { en: { question: "How did this person change after that experience?", explanation: "The passage says they now think about the effect of their actions and try to take responsibility, so the correct answer is 자기 행동의 영향을 생각하고 책임지려고 노력한다." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L4-S14-WR01",
    type: "sentence-completion",
    prompt: { en: "Complete the sentence: 공공장소에서는 반드시 ______해야 합니다." },
    sampleAnswer: { en: "공공장소에서는 반드시 다른 사람을 배려해야 합니다." },
    explanation: { en: "-아/어야 하다 (or the emphatic -아/어야만 하다) states a required action in public places." },
  },
  {
    id: "L4-S14-WR02",
    type: "short-response",
    prompt: {
      en: "Write 5-6 sentences about rules people should follow in public places and why.",
    },
    keywords: ["공공질서", "타인", "피해", "지키다"],
    sampleAnswer: {
      en: "공공장소에서는 여러 사람이 함께 지내기 때문에 지켜야 할 규칙이 있다고 생각해요. 첫째, 큰 소리로 떠들거나 소음을 내지 않아야 해요. 이런 행동은 타인에게 피해를 줄 수 있기 때문이에요. 둘째, 금지된 장소에서 흡연을 하지 않는 것도 중요해요. 이런 규칙을 시민 모두가 지켜야만 공공질서가 유지될 수 있어요. 그래서 저는 작은 행동부터 책임지는 자세가 필요하다고 생각해요.",
    },
    explanation: { en: "5-6 sentences following rule 1 → reason → rule 2 → why it matters → closing thought is enough at this stage." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L4-S14-P01", type: "vocabulary", question: '"공공질서"의 뜻은 무엇입니까?', options: ["Public order", "Public morals", "Duty", "Safety"], correctAnswer: 0, explanation: { en: "공공질서 means public order." } },
  { id: "L4-S14-P02", type: "vocabulary", question: '"위반하다"의 뜻은 무엇입니까?', options: ["To respect", "To violate", "To protect", "To keep"], correctAnswer: 1, explanation: { en: "위반하다 means to violate." } },
  { id: "L4-S14-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n공공장소에서는 기본적인 규칙을 지켜______.", options: ["야만 합니다", "는 반면입니다", "기 나름입니다", "는 대신입니다"], correctAnswer: 0, explanation: { en: "-아/어야만 하다 emphasizes an absolute requirement: 지켜야만 합니다." } },
  { id: "L4-S14-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n다른 사람을 배려하는 것이 ______.", options: ["바람직합니다", "나름입니다", "덕분입니다", "김입니다"], correctAnswer: 0, explanation: { en: "-는 것이 바람직하다 recommends an action: 배려하는 것이 바람직합니다." } },
  { id: "L4-S14-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n규칙을 ______ 다른 사람에게 피해를 줄 수 있어요.", options: ["존중하면", "위반하면", "준수하면", "책임지면"], correctAnswer: 1, explanation: { en: "위반하다 (to violate) fits causing harm by breaking rules." } },
  { id: "L4-S14-P06", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n밤에는 ______을/를 줄이는 것이 공동생활의 매너예요.", options: ["허용", "안전", "소음", "의무"], correctAnswer: 2, explanation: { en: "소음 (noise) fits being considerate at night." } },
  { id: "L4-S14-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n자기 행동에 대해서는 스스로 ______ 것이 중요해요.", options: ["준수하는", "허용하는", "책임지는", "위반하는"], correctAnswer: 2, explanation: { en: "책임지다 (to take responsibility) fits owning one's own actions." } },
  { id: "L4-S14-P08", type: "listening", audioText: "공공장소에서는 기본적인 규칙을 지켜야만 합니다. 그래야 모두가 안전하고 편하게 지낼 수 있어요.", question: "공공장소에서 규칙을 지켜야 하는 이유는 무엇입니까?", options: ["돈을 아끼기 위해서", "빨리 끝내기 위해서", "혼자 있기 위해서", "모두가 안전하고 편하게 지내기 위해서"], correctAnswer: 3, explanation: { en: "The sentence says so everyone can be safe and comfortable, so the answer is 모두가 안전하고 편하게 지내기 위해서." } },
  { id: "L4-S14-P09", type: "listening", audioText: "밤에는 소음을 줄이는 것이 바람직해요. 이웃에게 피해를 줄 수 있기 때문이에요.", question: "왜 밤에 소음을 줄여야 합니까?", options: ["잠을 안 자려고", "돈을 아끼려고", "규칙이 없어서", "이웃에게 피해를 줄 수 있어서"], correctAnswer: 3, explanation: { en: "The sentence says it can cause harm to neighbors, so the answer is 이웃에게 피해를 줄 수 있어서." } },
  { id: "L4-S14-P10", type: "reading", passage: "큰 소리로 떠들거나 소음을 내면 타인에게 피해를 줄 수 있어요. 금지된 장소에서 흡연하는 것도 다른 사람에게 피해를 주는 행동이에요.", question: "이 글에서 공공장소의 규칙을 지켜야 하는 이유는 무엇입니까?", options: ["규칙이 재미있어서", "시간을 아끼기 위해서", "돈을 절약하기 위해서", "타인에게 피해를 주지 않기 위해서"], correctAnswer: 3, explanation: { en: "The passage says to avoid causing harm to others, so the answer is 타인에게 피해를 주지 않기 위해서." } },
  { id: "L4-S14-P11", type: "reading", passage: "밤늦게 소음을 내지 않는 것, 공용 공간을 깨끗이 사용하는 것 모두 기본적인 매너예요. 이런 매너를 지키지 않으면 이웃과 갈등이 생길 수도 있어요.", question: "이 글에서 공동 생활의 기본 매너가 아닌 것은 무엇입니까?", options: ["소음을 내지 않는 것", "서로 배려하는 것", "이웃과 갈등을 만드는 것", "공용 공간을 깨끗이 쓰는 것"], correctAnswer: 2, explanation: { en: "Creating conflict with neighbors is not a manner, so the answer is 이웃과 갈등을 만드는 것." } },
  { id: "L4-S14-P12", type: "sentence", question: "다음 중 자연스러운 문장은?", options: ["규칙을 지켜야만이 합니다.", "규칙을 지켜야만 합니다.", "규칙을 지킨야만 합니다.", "규칙을 지키야만 합니다."], correctAnswer: 1, explanation: { en: "-아/어야만 하다 attaches to the verb stem: 지켜야만 합니다." } },
];

export const STEP_4_14: StepContent = {
  level: 4,
  step: 14,
  title: "사회 규칙과 공공질서 (Social Rules and Public Order)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
