// TOPIK 4 STEP 12 — Public Services and Systems (공공서비스와 제도).
// Independent of TOPIK1/TOPIK2/TOPIK3/TOPIK4 STEP1-11's data files.
// 신청, 서류, 확인, 기간, 안내, 방문하다, 신청하다, 제출하다 already
// exist as "new" elsewhere (TOPIK1/TOPIK2/TOPIK3) — recorded here with
// status "review".
import type { StepContent } from "@/types/content";
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { WritingItem } from "@/types/content";
import type { PracticeQuestionData } from "@/data/samplePractice";

const WORDS: Word[] = [
  { id: "L4-S12-W01", korean: "공공기관", partOfSpeech: "noun", translations: { en: "public institution" }, example: "이 서비스는 공공기관에서 운영해요.", exampleTranslations: { en: "This service is run by a public institution." }, audioUrl: null, status: "new" },
  { id: "L4-S12-W02", korean: "공공서비스", partOfSpeech: "noun", translations: { en: "public service" }, example: "다양한 공공서비스를 이용할 수 있어요.", exampleTranslations: { en: "You can use various public services." }, audioUrl: null, status: "new" },
  { id: "L4-S12-W03", korean: "절차", partOfSpeech: "noun", translations: { en: "procedure" }, example: "신청 절차가 간단해요.", exampleTranslations: { en: "The application procedure is simple." }, audioUrl: null, status: "new" },
  { id: "L4-S12-W04", korean: "이용방법", partOfSpeech: "noun", translations: { en: "how to use / usage method" }, example: "이용방법을 먼저 확인하세요.", exampleTranslations: { en: "Please check the usage method first." }, audioUrl: null, status: "new" },
  { id: "L4-S12-W05", korean: "자격", partOfSpeech: "noun", translations: { en: "qualification" }, example: "신청 자격을 확인해야 해요.", exampleTranslations: { en: "You must check the application qualifications." }, audioUrl: null, status: "new" },
  { id: "L4-S12-W06", korean: "접수", partOfSpeech: "noun", translations: { en: "reception (of an application)" }, example: "접수는 온라인으로만 가능해요.", exampleTranslations: { en: "Reception is only possible online." }, audioUrl: null, status: "new" },
  { id: "L4-S12-W07", korean: "발급", partOfSpeech: "noun", translations: { en: "issuance" }, example: "카드 발급에 일주일이 걸려요.", exampleTranslations: { en: "Card issuance takes a week." }, audioUrl: null, status: "new" },
  { id: "L4-S12-W08", korean: "제출", partOfSpeech: "noun", translations: { en: "submission" }, example: "서류 제출 기한이 내일이에요.", exampleTranslations: { en: "The document submission deadline is tomorrow." }, audioUrl: null, status: "new" },
  { id: "L4-S12-W09", korean: "신청서", partOfSpeech: "noun", translations: { en: "application form" }, example: "신청서를 작성해 주세요.", exampleTranslations: { en: "Please fill out the application form." }, audioUrl: null, status: "new" },
  { id: "L4-S12-W10", korean: "이용시간", partOfSpeech: "noun", translations: { en: "hours of use" }, example: "이용시간을 확인하고 방문하세요.", exampleTranslations: { en: "Please check the hours of use before visiting." }, audioUrl: null, status: "new" },
  { id: "L4-S12-W11", korean: "대상", partOfSpeech: "noun", translations: { en: "target / eligible group" }, example: "이 서비스는 학생이 대상이에요.", exampleTranslations: { en: "This service targets students." }, audioUrl: null, status: "new" },
  { id: "L4-S12-W12", korean: "문의", partOfSpeech: "noun", translations: { en: "inquiry" }, example: "문의는 전화로 하세요.", exampleTranslations: { en: "Please make inquiries by phone." }, audioUrl: null, status: "new" },
  { id: "L4-S12-W13", korean: "처리", partOfSpeech: "noun", translations: { en: "processing" }, example: "처리에 며칠 걸려요.", exampleTranslations: { en: "Processing takes a few days." }, audioUrl: null, status: "new" },
  { id: "L4-S12-W14", korean: "등록", partOfSpeech: "noun", translations: { en: "registration" }, example: "미리 등록해야 이용할 수 있어요.", exampleTranslations: { en: "You must register in advance to use it." }, audioUrl: null, status: "new" },
  { id: "L4-S12-W15", korean: "민원", partOfSpeech: "noun", translations: { en: "civil complaint / civil affairs" }, example: "민원은 이 창구에서 처리해요.", exampleTranslations: { en: "Civil affairs are handled at this counter." }, audioUrl: null, status: "new" },
  { id: "L4-S12-W16", korean: "담당자", partOfSpeech: "noun", translations: { en: "person in charge" }, example: "담당자에게 문의하세요.", exampleTranslations: { en: "Please inquire with the person in charge." }, audioUrl: null, status: "new" },
  { id: "L4-S12-W17", korean: "신청", partOfSpeech: "noun", translations: { en: "application" }, example: "신청 기간을 확인하세요.", exampleTranslations: { en: "Please check the application period." }, audioUrl: null, status: "review" },
  { id: "L4-S12-W18", korean: "서류", partOfSpeech: "noun", translations: { en: "document" }, example: "서류를 작성해야 해요.", exampleTranslations: { en: "I have to fill out the document." }, audioUrl: null, status: "review" },
  { id: "L4-S12-W19", korean: "확인", partOfSpeech: "noun", translations: { en: "check / confirmation" }, example: "확인 후에 연락드릴게요.", exampleTranslations: { en: "I'll contact you after checking." }, audioUrl: null, status: "review" },
  { id: "L4-S12-W20", korean: "기간", partOfSpeech: "noun", translations: { en: "period" }, example: "신청 기간이에요.", exampleTranslations: { en: "It's the application period." }, audioUrl: null, status: "review" },
  { id: "L4-S12-W21", korean: "안내", partOfSpeech: "noun", translations: { en: "information / guide" }, example: "안내를 잘 읽으세요.", exampleTranslations: { en: "Please read the information carefully." }, audioUrl: null, status: "review" },
  { id: "L4-S12-W22", korean: "방문하다", partOfSpeech: "verb", translations: { en: "to visit" }, example: "여러 지역을 방문했어요.", exampleTranslations: { en: "I visited several regions." }, audioUrl: null, status: "review" },
  { id: "L4-S12-W23", korean: "신청하다", partOfSpeech: "verb", translations: { en: "to apply" }, example: "여기에서 신청할 수 있어요.", exampleTranslations: { en: "You can apply here." }, audioUrl: null, status: "review" },
  { id: "L4-S12-W24", korean: "제출하다", partOfSpeech: "verb", translations: { en: "to submit" }, example: "과제를 제출해요.", exampleTranslations: { en: "I submit the assignment." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L4-S12-S01", korean: "서비스를 이용하려면 먼저 신청서를 작성해야 합니다.", translations: { en: "To use the service, you must first fill out an application form." }, keyExpression: "-(으)려면", relatedWords: ["신청서"], audioUrl: null },
  { id: "L4-S12-S02", korean: "카드를 발급받으려면 신분증과 자격을 확인하는 서류가 필요해요.", translations: { en: "To be issued a card, you need an ID and a document confirming your qualification." }, keyExpression: "-(으)려면", relatedWords: ["발급", "자격", "서류"], audioUrl: null },
  { id: "L4-S12-S03", korean: "신청서는 온라인으로 제출하도록 되어 있습니다.", translations: { en: "Application forms are set up to be submitted online." }, keyExpression: "-도록 되어 있다", relatedWords: ["신청서", "제출하다"], audioUrl: null },
  { id: "L4-S12-S04", korean: "이 공공기관은 평일에만 이용하도록 되어 있어요.", translations: { en: "This public institution is set up to be used only on weekdays." }, keyExpression: "-도록 되어 있다", relatedWords: ["공공기관"], audioUrl: null },
  { id: "L4-S12-S05", korean: "접수 절차와 필요한 서류를 미리 확인하는 것이 좋아요.", translations: { en: "It's good to check the reception procedure and necessary documents in advance." }, keyExpression: "절차", relatedWords: ["접수", "절차", "서류", "확인"], audioUrl: null },
  { id: "L4-S12-S06", korean: "이용방법과 이용시간을 안내에서 확인할 수 있어요.", translations: { en: "You can check the usage method and hours of use in the information." }, keyExpression: "이용방법", relatedWords: ["이용방법", "이용시간", "안내"], audioUrl: null },
  { id: "L4-S12-S07", korean: "이 서비스는 학생을 대상으로 하며 담당자에게 문의할 수 있어요.", translations: { en: "This service targets students, and you can inquire with the person in charge." }, keyExpression: "대상", relatedWords: ["대상", "담당자", "문의"], audioUrl: null },
  { id: "L4-S12-S08", korean: "민원 처리와 등록은 이 창구에서 담당해요.", translations: { en: "Civil affairs processing and registration are handled at this counter." }, keyExpression: "처리", relatedWords: ["민원", "처리", "등록"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L4-S12-G01",
    pattern: "-(으)려면",
    meanings: { en: "if you want to / in order to (do something)" },
    explanations: {
      en: "Attach -(으)려면 to a verb stem to name a goal, then explain what's required to achieve it.",
    },
    examples: [
      { korean: "서비스를 이용하려면 먼저 신청서를 작성해야 합니다.", translations: { en: "To use the service, you must first fill out an application form." } },
      { korean: "카드를 발급받으려면 신분증과 자격을 확인하는 서류가 필요해요.", translations: { en: "To be issued a card, you need an ID and a document confirming your qualification." } },
    ],
  },
  {
    id: "L4-S12-G02",
    pattern: "-도록 되어 있다",
    meanings: { en: "to be set up so that / to be designed to" },
    explanations: {
      en: "Attach -도록 되어 있다 to a verb stem to describe a system or rule that is fixed to work a certain way.",
    },
    examples: [
      { korean: "신청서는 온라인으로 제출하도록 되어 있습니다.", translations: { en: "Application forms are set up to be submitted online." } },
      { korean: "이 공공기관은 평일에만 이용하도록 되어 있어요.", translations: { en: "This public institution is set up to be used only on weekdays." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L4-S12-L01",
    audioText: "서비스를 이용하려면 먼저 신청서를 작성해야 합니다. 그다음 필요한 서류를 제출하면 됩니다.",
    audioUrl: null,
    question: "서비스를 이용하려면 가장 먼저 무엇을 해야 합니까?",
    options: ["전화를 건다", "돈을 낸다", "신청서를 작성한다", "담당자를 만난다"],
    correctAnswer: 2,
    translations: { en: { question: "What must be done first to use the service?", explanation: 'The sentence says "fill out an application form first," so the correct answer is 신청서를 작성한다.' } },
  },
  {
    id: "L4-S12-L02",
    audioText: "신청서는 온라인으로 제출하도록 되어 있습니다. 방문 접수는 받지 않습니다.",
    audioUrl: null,
    question: "신청서는 어떻게 제출해야 합니까?",
    options: ["방문해서", "우편으로", "전화로", "온라인으로"],
    correctAnswer: 3,
    translations: { en: { question: "How must the application be submitted?", explanation: 'The sentence says "set up to submit online," so the correct answer is 온라인으로.' } },
  },
  {
    id: "L4-S12-L03",
    audioText: "이 공공서비스는 학생을 대상으로 합니다. 자세한 내용은 담당자에게 문의하시기 바랍니다.",
    audioUrl: null,
    question: "이 공공서비스는 누구를 대상으로 합니까?",
    options: ["학생", "직장인", "노인", "외국인"],
    correctAnswer: 0,
    translations: { en: { question: "Who is this public service targeted at?", explanation: "The sentence says it targets students, so the correct answer is 학생." } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L4-S12-R01",
    passage:
      "이 공공서비스를 이용하려면 몇 가지 절차를 따라야 해요.\n먼저 홈페이지에서 신청서를 작성하고 필요한 서류를 준비해요.\n그다음 서류를 온라인으로 제출하도록 되어 있어요.\n접수가 완료되면 담당자가 확인 후 처리 결과를 안내해 줘요.",
    question: "이 글에서 서류는 어떻게 제출해야 합니까?",
    options: ["방문해서 제출한다", "우편으로 제출한다", "온라인으로 제출한다", "전화로 제출한다"],
    correctAnswer: 2,
    translations: { en: { question: "How must documents be submitted, according to the passage?", explanation: "The passage says they are set up to be submitted online, so the correct answer is 온라인으로 제출한다." } },
  },
  {
    id: "L4-S12-R02",
    passage:
      "공공기관의 서비스를 이용할 때는 이용방법과 자격을 미리 확인하는 것이 중요해요.\n서비스마다 대상과 이용시간이 다르기 때문이에요.\n또한 신청 기간을 놓치면 다시 신청하기 어려운 경우도 있어요.\n그래서 문의사항이 있으면 담당자에게 미리 확인하는 것이 좋아요.",
    question: "이 글에서 서비스 이용 전에 확인해야 할 것이 아닌 것은 무엇입니까?",
    options: ["이용방법", "자격", "신청 기간", "담당자의 개인정보"],
    correctAnswer: 3,
    translations: { en: { question: "Which is NOT something to check before using the service, according to the passage?", explanation: "The person in charge's personal information is not mentioned, so the correct answer is 담당자의 개인정보." } },
  },
  {
    id: "L4-S12-R03",
    passage:
      "저는 얼마 전에 공공기관에서 서류를 발급받았어요.\n먼저 홈페이지에서 신청 절차와 필요한 서류를 확인했어요.\n신청서를 제출하려면 자격을 증명하는 서류도 함께 내야 했어요.\n생각보다 절차가 복잡했지만 안내에 따라 차근차근 진행하니 어렵지 않았어요.",
    question: "이 사람은 서류를 어떻게 발급받았습니까?",
    options: ["절차와 안내에 따라 신청해서 받았다", "아무 서류 없이 바로 받았다", "전화만 해서 받았다", "친구에게 부탁해서 받았다"],
    correctAnswer: 0,
    translations: { en: { question: "How did this person get the document issued?", explanation: "The passage says they applied following the procedure and information, so the correct answer is 절차와 안내에 따라 신청해서 받았다." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L4-S12-WR01",
    type: "sentence-order",
    prompt: {
      en: "Put the fragments in the correct application order.\n① 서류를 준비해요\n② 신청서를 작성해요\n③ 온라인으로 제출해요\n④ 접수 결과를 확인해요",
    },
    sampleAnswer: { en: "신청서를 작성해요. 서류를 준비해요. 온라인으로 제출해요. 접수 결과를 확인해요." },
    explanation: { en: "A typical application procedure goes: fill out the form → prepare documents → submit → check the result." },
  },
  {
    id: "L4-S12-WR02",
    type: "short-response",
    prompt: {
      en: "Explain how to use a public service or facility in about 5 sentences.\nStructure: 1) purpose, 2) preparation, 3) applying/using, 4) confirmation, 5) things to be careful of.",
    },
    keywords: ["신청서", "절차", "제출하다", "확인"],
    sampleAnswer: {
      en: "저는 얼마 전에 도서관 이용증을 신청했어요. 먼저 홈페이지에서 이용방법과 필요한 서류를 확인했어요. 그다음 신청서를 작성하고 신분증과 함께 제출했어요. 며칠 후 발급 여부를 다시 확인했어요. 신청 기간과 자격을 미리 확인하지 않으면 다시 신청해야 할 수도 있으니 주의해야 해요.",
    },
    explanation: { en: "5 sentences following purpose → preparation → application → confirmation → caution is enough at this stage." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L4-S12-P01", type: "vocabulary", question: '"절차"의 뜻은 무엇입니까?', options: ["Procedure", "Qualification", "Registration", "Inquiry"], correctAnswer: 0, explanation: { en: "절차 means procedure." } },
  { id: "L4-S12-P02", type: "vocabulary", question: '"발급"의 뜻은 무엇입니까?', options: ["Submission", "Issuance", "Reception", "Processing"], correctAnswer: 1, explanation: { en: "발급 means issuance." } },
  { id: "L4-S12-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n서비스를 이용하______ 먼저 신청서를 작성해야 합니다.", options: ["려면", "는 대신에", "는 김에", "기 나름으로"], correctAnswer: 0, explanation: { en: "-(으)려면 names a goal before the requirement: 이용하려면." } },
  { id: "L4-S12-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n신청서는 온라인으로 제출하______.", options: ["도록 되어 있습니다", "는 편입니다", "기 나름입니다", "는 반면입니다"], correctAnswer: 0, explanation: { en: "-도록 되어 있다 describes a fixed system: 제출하도록 되어 있습니다." } },
  { id: "L4-S12-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n이 서비스는 학생을 ______으로 해요.", options: ["자격", "대상", "절차", "문의"], correctAnswer: 1, explanation: { en: "대상 (target) fits describing who a service is for." } },
  { id: "L4-S12-P06", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n자세한 내용은 ______에게 문의하세요.", options: ["이용자", "신청자", "담당자", "발급자"], correctAnswer: 2, explanation: { en: "담당자 (person in charge) fits directing an inquiry." } },
  { id: "L4-S12-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n민원 ______은/는 이 창구에서 담당해요.", options: ["접수", "발급", "처리", "등록"], correctAnswer: 2, explanation: { en: "처리 (processing) fits handling civil affairs at a counter." } },
  { id: "L4-S12-P08", type: "listening", audioText: "서비스를 이용하려면 먼저 신청서를 작성해야 합니다. 그다음 필요한 서류를 제출하면 됩니다.", question: "서비스를 이용하려면 가장 먼저 무엇을 해야 합니까?", options: ["전화를 건다", "돈을 낸다", "담당자를 만난다", "신청서를 작성한다"], correctAnswer: 3, explanation: { en: "The sentence says fill out an application form first, so the answer is 신청서를 작성한다." } },
  { id: "L4-S12-P09", type: "listening", audioText: "이 공공서비스는 학생을 대상으로 합니다. 자세한 내용은 담당자에게 문의하시기 바랍니다.", question: "이 공공서비스는 누구를 대상으로 합니까?", options: ["직장인", "노인", "외국인", "학생"], correctAnswer: 3, explanation: { en: "The sentence says it targets students, so the answer is 학생." } },
  { id: "L4-S12-P10", type: "reading", passage: "먼저 홈페이지에서 신청서를 작성하고 필요한 서류를 준비해요. 그다음 서류를 온라인으로 제출하도록 되어 있어요.", question: "이 글에서 서류는 어떻게 제출해야 합니까?", options: ["방문해서 제출한다", "우편으로 제출한다", "전화로 제출한다", "온라인으로 제출한다"], correctAnswer: 3, explanation: { en: "The passage says documents are submitted online, so the answer is 온라인으로 제출한다." } },
  { id: "L4-S12-P11", type: "reading", passage: "서비스마다 대상과 이용시간이 다르기 때문에 이용방법과 자격을 미리 확인하는 것이 중요해요.", question: "이 글에서 서비스 이용 전에 확인해야 할 것이 아닌 것은 무엇입니까?", options: ["이용방법", "자격", "담당자의 개인정보", "신청 기간"], correctAnswer: 2, explanation: { en: "The person in charge's personal information is not mentioned, so the answer is 담당자의 개인정보." } },
  { id: "L4-S12-P12", type: "sentence", question: "다음 중 자연스러운 문장은?", options: ["신청서는 온라인으로 제출하도록 돼요 있습니다.", "신청서는 온라인으로 제출하도록 되어 있습니다.", "신청서는 온라인으로 제출하게 되어 있습니다만.", "신청서는 온라인으로 제출한 되어 있습니다."], correctAnswer: 1, explanation: { en: "-도록 되어 있다 attaches to the verb stem: 제출하도록 되어 있습니다." } },
];

export const STEP_4_12: StepContent = {
  level: 4,
  step: 12,
  title: "공공서비스와 제도 (Public Services and Systems)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
