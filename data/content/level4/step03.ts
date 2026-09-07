// TOPIK 4 STEP 3 — Work and the Workplace (직장과 업무환경).
// Independent of TOPIK1/TOPIK2/TOPIK3/TOPIK4 STEP1-2's data files.
// 책임, 의견, 결정, 보고, 성과, 목표, 협력하다 already exist as "new"
// elsewhere (TOPIK2/TOPIK3) — recorded here with status "review".
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L4-S3-W01", korean: "업무환경", partOfSpeech: "noun", translations: { en: "work environment" }, example: "이 회사는 업무환경이 좋아요.", exampleTranslations: { en: "This company has a good work environment." }, audioUrl: null, status: "new" },
  { id: "L4-S3-W02", korean: "협업", partOfSpeech: "noun", translations: { en: "collaboration" }, example: "팀 간의 협업이 중요해요.", exampleTranslations: { en: "Collaboration between teams is important." }, audioUrl: null, status: "new" },
  { id: "L4-S3-W03", korean: "조직", partOfSpeech: "noun", translations: { en: "organization" }, example: "우리 조직은 사람이 많아요.", exampleTranslations: { en: "Our organization has a lot of people." }, audioUrl: null, status: "new" },
  { id: "L4-S3-W04", korean: "역할", partOfSpeech: "noun", translations: { en: "role" }, example: "저마다 역할이 달라요.", exampleTranslations: { en: "Everyone has a different role." }, audioUrl: null, status: "new" },
  { id: "L4-S3-W05", korean: "업무분담", partOfSpeech: "noun", translations: { en: "division of work" }, example: "업무분담을 명확하게 했어요.", exampleTranslations: { en: "We clearly divided up the work." }, audioUrl: null, status: "new" },
  { id: "L4-S3-W06", korean: "소통", partOfSpeech: "noun", translations: { en: "communication" }, example: "동료와의 소통이 중요해요.", exampleTranslations: { en: "Communication with coworkers is important." }, audioUrl: null, status: "new" },
  { id: "L4-S3-W07", korean: "능력", partOfSpeech: "noun", translations: { en: "ability" }, example: "그 사람은 업무 능력이 뛰어나요.", exampleTranslations: { en: "That person has excellent work ability." }, audioUrl: null, status: "new" },
  { id: "L4-S3-W08", korean: "지원", partOfSpeech: "noun", translations: { en: "support" }, example: "회사의 지원이 필요해요.", exampleTranslations: { en: "The company's support is needed." }, audioUrl: null, status: "new" },
  { id: "L4-S3-W09", korean: "만족", partOfSpeech: "noun", translations: { en: "satisfaction" }, example: "이 일에 만족을 느껴요.", exampleTranslations: { en: "I feel satisfaction with this work." }, audioUrl: null, status: "new" },
  { id: "L4-S3-W10", korean: "부담", partOfSpeech: "noun", translations: { en: "burden" }, example: "업무가 많아서 부담이 커요.", exampleTranslations: { en: "There's a lot of work, so the burden is heavy." }, audioUrl: null, status: "new" },
  { id: "L4-S3-W11", korean: "개선하다", partOfSpeech: "verb", translations: { en: "to improve" }, example: "업무환경을 개선하려고 해요.", exampleTranslations: { en: "We're trying to improve the work environment." }, audioUrl: null, status: "new" },
  { id: "L4-S3-W12", korean: "담당하다", partOfSpeech: "verb", translations: { en: "to be in charge of" }, example: "저는 이 업무를 담당하고 있어요.", exampleTranslations: { en: "I'm in charge of this task." }, audioUrl: null, status: "new" },
  { id: "L4-S3-W13", korean: "처리하다", partOfSpeech: "verb", translations: { en: "to handle / process" }, example: "일을 빨리 처리했어요.", exampleTranslations: { en: "I handled the work quickly." }, audioUrl: null, status: "new" },
  { id: "L4-S3-W14", korean: "근무", partOfSpeech: "noun", translations: { en: "work / duty" }, example: "저는 오전에 근무해요.", exampleTranslations: { en: "I work in the morning." }, audioUrl: null, status: "new" },
  { id: "L4-S3-W15", korean: "성실하다", partOfSpeech: "adjective", translations: { en: "diligent / sincere" }, example: "그 직원은 정말 성실해요.", exampleTranslations: { en: "That employee is really diligent." }, audioUrl: null, status: "new" },
  { id: "L4-S3-W16", korean: "후배", partOfSpeech: "noun", translations: { en: "junior colleague" }, example: "후배에게 일을 가르쳐 줬어요.", exampleTranslations: { en: "I taught a junior colleague the work." }, audioUrl: null, status: "new" },
  { id: "L4-S3-W17", korean: "적극적이다", partOfSpeech: "adjective", translations: { en: "proactive / positive" }, example: "저는 업무에 적극적이에요.", exampleTranslations: { en: "I'm proactive about my work." }, audioUrl: null, status: "new" },
  { id: "L4-S3-W18", korean: "책임", partOfSpeech: "noun", translations: { en: "responsibility" }, example: "이 일은 제 책임이에요.", exampleTranslations: { en: "This task is my responsibility." }, audioUrl: null, status: "review" },
  { id: "L4-S3-W19", korean: "의견", partOfSpeech: "noun", translations: { en: "opinion" }, example: "제 의견을 말씀드릴게요.", exampleTranslations: { en: "Let me tell you my opinion." }, audioUrl: null, status: "review" },
  { id: "L4-S3-W20", korean: "결정", partOfSpeech: "noun", translations: { en: "decision" }, example: "중요한 결정을 했어요.", exampleTranslations: { en: "I made an important decision." }, audioUrl: null, status: "review" },
  { id: "L4-S3-W21", korean: "보고", partOfSpeech: "noun", translations: { en: "report (the act of reporting)" }, example: "먼저 보고를 해야 해요.", exampleTranslations: { en: "I have to report first." }, audioUrl: null, status: "review" },
  { id: "L4-S3-W22", korean: "성과", partOfSpeech: "noun", translations: { en: "achievement / result" }, example: "좋은 성과를 냈어요.", exampleTranslations: { en: "I produced good results." }, audioUrl: null, status: "review" },
  { id: "L4-S3-W23", korean: "목표", partOfSpeech: "noun", translations: { en: "goal" }, example: "저는 새로운 목표가 있어요.", exampleTranslations: { en: "I have a new goal." }, audioUrl: null, status: "review" },
  { id: "L4-S3-W24", korean: "협력하다", partOfSpeech: "verb", translations: { en: "to cooperate" }, example: "동료와 협력해서 일해요.", exampleTranslations: { en: "I work cooperating with my coworker." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L4-S3-S01", korean: "이 회사는 업무환경이 좋은 데다가 교통도 편리해요.", translations: { en: "This company has a good work environment, and on top of that, transportation is convenient." }, keyExpression: "-는 데다가", relatedWords: ["업무환경"], audioUrl: null },
  { id: "L4-S3-S02", korean: "이 팀은 소통이 잘 되는 데다가 분위기도 좋아요.", translations: { en: "This team communicates well, and on top of that, the atmosphere is good." }, keyExpression: "-는 데다가", relatedWords: ["소통"], audioUrl: null },
  { id: "L4-S3-S03", korean: "업무 능력뿐만 아니라 소통 능력도 중요해요.", translations: { en: "Not only work ability but also communication ability is important." }, keyExpression: "-(으)ㄹ 뿐만 아니라", relatedWords: ["능력", "소통"], audioUrl: null },
  { id: "L4-S3-S04", korean: "이 직원은 성실할 뿐만 아니라 적극적이에요.", translations: { en: "This employee is not only diligent but also proactive." }, keyExpression: "-(으)ㄹ 뿐만 아니라", relatedWords: ["성실하다", "적극적이다"], audioUrl: null },
  { id: "L4-S3-S05", korean: "저는 새 프로젝트에서 중요한 역할을 담당하게 됐어요.", translations: { en: "I ended up being in charge of an important role in the new project." }, keyExpression: "담당하다", relatedWords: ["역할", "담당하다"], audioUrl: null },
  { id: "L4-S3-S06", korean: "업무분담이 잘 되면 부담이 줄어들어요.", translations: { en: "If the division of work is done well, the burden decreases." }, keyExpression: "부담", relatedWords: ["업무분담", "부담"], audioUrl: null },
  { id: "L4-S3-S07", korean: "우리 조직은 협업을 통해 문제를 처리해요.", translations: { en: "Our organization handles problems through collaboration." }, keyExpression: "처리하다", relatedWords: ["조직", "협업", "처리하다"], audioUrl: null },
  { id: "L4-S3-S08", korean: "회사의 지원 덕분에 업무환경이 많이 개선됐어요.", translations: { en: "Thanks to the company's support, the work environment improved a lot." }, keyExpression: "개선하다", relatedWords: ["지원", "개선하다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L4-S3-G01",
    pattern: "-는 데다가",
    meanings: { en: "on top of / in addition to" },
    explanations: {
      en: "Attach -는 데다가 to a verb/adjective stem to add a second fact on top of the first, both usually pointing the same direction (both good or both bad).",
    },
    examples: [
      { korean: "이 회사는 업무환경이 좋은 데다가 교통도 편리해요.", translations: { en: "This company has a good work environment, and on top of that, transportation is convenient." } },
      { korean: "이 팀은 소통이 잘 되는 데다가 분위기도 좋아요.", translations: { en: "This team communicates well, and on top of that, the atmosphere is good." } },
    ],
  },
  {
    id: "L4-S3-G02",
    pattern: "-(으)ㄹ 뿐만 아니라",
    meanings: { en: "not only ~ but also ~" },
    explanations: {
      en: "Attach -(으)ㄹ 뿐만 아니라 to a verb/adjective stem to say one thing is true, and something else is true as well.",
    },
    examples: [
      { korean: "업무 능력뿐만 아니라 소통 능력도 중요해요.", translations: { en: "Not only work ability but also communication ability is important." } },
      { korean: "이 직원은 성실할 뿐만 아니라 적극적이에요.", translations: { en: "This employee is not only diligent but also proactive." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L4-S3-L01",
    audioText: "이 회사는 업무환경이 좋은 데다가 동료들도 친절해요. 그래서 저는 이 회사에 만족해요.",
    audioUrl: null,
    question: "이 사람은 왜 회사에 만족합니까?",
    options: ["월급이 많아서", "일이 적어서", "업무환경이 좋고 동료들이 친절해서", "집에서 가까워서"],
    correctAnswer: 2,
    translations: { en: { question: "Why is this person satisfied with the company?", explanation: 'The sentence says the work environment is good and coworkers are kind, so the correct answer is 업무환경이 좋고 동료들이 친절해서.' } },
  },
  {
    id: "L4-S3-L02",
    audioText: "저는 이번 프로젝트에서 중요한 역할을 담당하게 됐어요. 부담도 되지만 열심히 해 보려고 해요.",
    audioUrl: null,
    question: "이 사람의 기분은 어떻습니까?",
    options: ["전혀 관심이 없다", "포기하고 싶다", "화가 난다", "부담되지만 열심히 하려고 한다"],
    correctAnswer: 3,
    translations: { en: { question: "How does this person feel?", explanation: 'The sentence says it\'s a burden but they\'ll try their best, so the correct answer is 부담되지만 열심히 하려고 한다.' } },
  },
  {
    id: "L4-S3-L03",
    audioText: "업무 능력뿐만 아니라 소통 능력도 중요해요. 그래서 저는 동료들과 대화를 많이 하려고 노력해요.",
    audioUrl: null,
    question: "이 사람이 노력하는 것은 무엇입니까?",
    options: ["동료들과 대화를 많이 하는 것", "혼자 일하는 것", "빨리 퇴근하는 것", "다른 회사로 옮기는 것"],
    correctAnswer: 0,
    translations: { en: { question: "What is this person trying to do?", explanation: 'The sentence says "trying to talk with coworkers a lot," so the correct answer is 동료들과 대화를 많이 하는 것.' } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L4-S3-R01",
    passage:
      "저는 얼마 전에 새 회사로 옮겼어요.\n이 회사는 업무환경이 좋은 데다가 동료들도 친절해요.\n또한 회사의 지원 덕분에 새로운 것을 배울 기회도 많아요.\n그래서 저는 지금 회사 생활에 아주 만족해요.",
    question: "이 사람은 왜 회사 생활에 만족합니까?",
    options: ["월급이 높아서", "일이 쉬워서", "업무환경이 좋고 배울 기회가 많아서", "휴가가 많아서"],
    correctAnswer: 2,
    translations: { en: { question: "Why is this person satisfied with their company life?", explanation: "The passage says the work environment is good and there are many chances to learn, so the correct answer is 업무환경이 좋고 배울 기회가 많아서." } },
  },
  {
    id: "L4-S3-R02",
    passage:
      "좋은 업무환경을 만들려면 몇 가지 조건이 필요해요.\n첫째, 조직 안에서 소통이 잘 되어야 해요.\n둘째, 업무분담이 명확해서 한 사람에게 부담이 몰리지 않아야 해요.\n마지막으로 서로 협력하고 존중하는 분위기가 있어야 해요.",
    question: "이 글에서 좋은 업무환경의 조건이 아닌 것은 무엇입니까?",
    options: ["원활한 소통", "명확한 업무분담", "서로 협력하는 분위기", "높은 월급"],
    correctAnswer: 3,
    translations: { en: { question: "According to the passage, which is NOT a condition for a good work environment?", explanation: "The passage lists communication, division of work, and a cooperative atmosphere, but not salary, so the correct answer is 높은 월급." } },
  },
  {
    id: "L4-S3-R03",
    passage:
      "저는 요즘 팀에서 새로운 역할을 담당하게 됐어요.\n처음에는 부담이 컸지만 선배들의 지원 덕분에 잘 적응했어요.\n업무를 처리하면서 제 능력도 향상됐다고 느껴요.\n앞으로도 적극적으로 참여해서 좋은 성과를 내고 싶어요.",
    question: "이 사람은 새로운 역할에 어떻게 적응했습니까?",
    options: ["선배들의 지원 덕분에 잘 적응했다", "혼자 힘들게 적응했다", "적응하지 못했다", "역할을 그만뒀다"],
    correctAnswer: 0,
    translations: { en: { question: "How did this person adjust to the new role?", explanation: "The passage says they adjusted well thanks to senior colleagues' support, so the correct answer is 선배들의 지원 덕분에 잘 적응했다." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L4-S3-WR01",
    type: "sentence-order",
    prompt: {
      en: "Put the two fragments in order to make one natural sentence.\n① 소통 능력도 중요해요\n② 업무 능력뿐만 아니라",
    },
    sampleAnswer: { en: "업무 능력뿐만 아니라 소통 능력도 중요해요." },
    explanation: { en: "-(으)ㄹ 뿐만 아니라 introduces the first point, then the sentence adds a second point with 도." },
  },
  {
    id: "L4-S3-WR02",
    type: "short-response",
    prompt: {
      en: "Write 4-5 sentences about what a good workplace or good work environment needs.\nStructure: 1) your opinion, 2) condition 1, 3) reason, 4) condition 2, 5) closing.",
    },
    keywords: ["업무환경", "소통", "협업", "만족"],
    sampleAnswer: {
      en: "저는 좋은 업무환경을 위해 몇 가지 조건이 필요하다고 생각해요. 첫 번째 조건은 원활한 소통이에요. 소통이 잘 되어야 오해나 갈등이 줄어들기 때문이에요. 두 번째 조건은 서로 협업하는 분위기예요. 이런 조건이 갖춰지면 직원들도 일에 더 만족을 느낄 수 있을 거예요.",
    },
    explanation: { en: "4-5 sentences following opinion → condition 1 → reason → condition 2 → closing is enough at this stage." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L4-S3-P01", type: "vocabulary", question: '"협업"의 뜻은 무엇입니까?', options: ["Support", "Collaboration", "Burden", "Role"], correctAnswer: 1, explanation: { en: "협업 means collaboration." } },
  { id: "L4-S3-P02", type: "vocabulary", question: '"부담"의 뜻은 무엇입니까?', options: ["Satisfaction", "Ability", "Burden", "Organization"], correctAnswer: 2, explanation: { en: "부담 means burden." } },
  { id: "L4-S3-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n이 회사는 업무환경이 좋은 ______ 교통도 편리해요.", options: ["데다가", "동안", "반면에", "김에"], correctAnswer: 0, explanation: { en: "-는 데다가 adds a second point on top of the first: 좋은 데다가." } },
  { id: "L4-S3-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n업무 능력______ 소통 능력도 중요해요.", options: ["뿐만 아니라", "때문에", "는 동안", "기 마련이다"], correctAnswer: 0, explanation: { en: "-(으)ㄹ 뿐만 아니라 says one thing plus another: 능력뿐만 아니라." } },
  { id: "L4-S3-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n저는 새 프로젝트에서 중요한 역할을 ______ 됐어요.", options: ["담당하게", "개선하게", "처리하게", "지원하게"], correctAnswer: 0, explanation: { en: "담당하다 (to be in charge of) fits taking on a role." } },
  { id: "L4-S3-P06", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n회사의 ______ 덕분에 업무환경이 많이 개선됐어요.", options: ["부담", "성과", "지원", "역할"], correctAnswer: 2, explanation: { en: "지원 (support) fits improving the work environment thanks to the company." } },
  { id: "L4-S3-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n이 직원은 ______ 뿐만 아니라 적극적이에요.", options: ["성실할", "부담될", "만족할", "담당할"], correctAnswer: 0, explanation: { en: "성실하다 (diligent) fits describing a good employee." } },
  { id: "L4-S3-P08", type: "listening", audioText: "이 회사는 업무환경이 좋은 데다가 동료들도 친절해요. 그래서 저는 이 회사에 만족해요.", question: "이 사람은 왜 회사에 만족합니까?", options: ["월급이 많아서", "업무환경이 좋고 동료들이 친절해서", "일이 적어서", "집에서 가까워서"], correctAnswer: 1, explanation: { en: "The sentence says the work environment is good and coworkers are kind, so the answer is 업무환경이 좋고 동료들이 친절해서." } },
  { id: "L4-S3-P09", type: "listening", audioText: "업무 능력뿐만 아니라 소통 능력도 중요해요.", question: "이 사람이 이야기하는 것은 무엇입니까?", options: ["월급 문제", "능력의 두 가지 중요성", "퇴근 시간", "회사 위치"], correctAnswer: 1, explanation: { en: "The sentence names two important abilities, so the answer is 능력의 두 가지 중요성." } },
  { id: "L4-S3-P10", type: "reading", passage: "이 회사는 업무환경이 좋은 데다가 동료들도 친절해요. 그래서 저는 지금 회사 생활에 아주 만족해요.", question: "이 사람은 왜 회사 생활에 만족합니까?", options: ["업무환경이 좋고 동료들이 친절해서", "월급이 높아서", "일이 쉬워서", "휴가가 많아서"], correctAnswer: 0, explanation: { en: "The passage says the work environment is good and coworkers are kind, so the answer is 업무환경이 좋고 동료들이 친절해서." } },
  { id: "L4-S3-P11", type: "reading", passage: "좋은 업무환경을 만들려면 소통, 명확한 업무분담, 서로 협력하는 분위기가 필요해요.", question: "이 글에서 좋은 업무환경의 조건이 아닌 것은 무엇입니까?", options: ["원활한 소통", "높은 월급", "명확한 업무분담", "서로 협력하는 분위기"], correctAnswer: 1, explanation: { en: "Salary is not listed as a condition, so the answer is 높은 월급." } },
  { id: "L4-S3-P12", type: "sentence", question: "다음 중 자연스러운 문장은?", options: ["업무 능력뿐만 아니라도 소통 능력이 중요해요.", "업무 능력만 아니라 소통 능력도 중요해요.", "업무 능력뿐만 아니라 소통 능력도 중요해요.", "업무 능력뿐 아니라서 소통 능력도 중요해요."], correctAnswer: 2, explanation: { en: "-(으)ㄹ 뿐만 아니라 combines with 도 on the second clause: 뿐만 아니라 소통 능력도." } },
];

export const STEP_4_3: StepContent = {
  level: 4,
  step: 3,
  title: "직장과 업무환경 (Work and the Workplace)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
