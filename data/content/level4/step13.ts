// TOPIK 4 STEP 13 — Cultural Events and Leisure (문화행사와 여가).
// Independent of TOPIK1/TOPIK2/TOPIK3/TOPIK4 STEP1-12's data files.
// 공연, 축제, 참가, 취미, 만족, 예약하다, 즐기다, 참여하다 already
// exist as "new" elsewhere (TOPIK2/TOPIK3/TOPIK4) — recorded here with
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
  { id: "L4-S13-W01", korean: "문화행사", partOfSpeech: "noun", translations: { en: "cultural event" }, example: "이번 주말에 문화행사가 있어요.", exampleTranslations: { en: "There's a cultural event this weekend." }, audioUrl: null, status: "new" },
  { id: "L4-S13-W02", korean: "전시", partOfSpeech: "noun", translations: { en: "exhibition" }, example: "미술 전시를 보러 갔어요.", exampleTranslations: { en: "I went to see an art exhibition." }, audioUrl: null, status: "new" },
  { id: "L4-S13-W03", korean: "프로그램", partOfSpeech: "noun", translations: { en: "program" }, example: "다양한 프로그램이 준비되어 있어요.", exampleTranslations: { en: "Various programs are prepared." }, audioUrl: null, status: "new" },
  { id: "L4-S13-W04", korean: "행사장", partOfSpeech: "noun", translations: { en: "event venue" }, example: "행사장이 사람들로 가득했어요.", exampleTranslations: { en: "The event venue was full of people." }, audioUrl: null, status: "new" },
  { id: "L4-S13-W05", korean: "입장", partOfSpeech: "noun", translations: { en: "entry / admission" }, example: "입장은 무료예요.", exampleTranslations: { en: "Admission is free." }, audioUrl: null, status: "new" },
  { id: "L4-S13-W06", korean: "여가", partOfSpeech: "noun", translations: { en: "leisure" }, example: "여가 시간에 뭐 하세요?", exampleTranslations: { en: "What do you do in your leisure time?" }, audioUrl: null, status: "new" },
  { id: "L4-S13-W07", korean: "감상", partOfSpeech: "noun", translations: { en: "appreciation (of art, etc.)" }, example: "작품을 천천히 감상했어요.", exampleTranslations: { en: "I appreciated the artwork slowly." }, audioUrl: null, status: "new" },
  { id: "L4-S13-W08", korean: "개최하다", partOfSpeech: "verb", translations: { en: "to hold / host (an event)" }, example: "매년 축제를 개최해요.", exampleTranslations: { en: "They hold a festival every year." }, audioUrl: null, status: "new" },
  { id: "L4-S13-W09", korean: "기억에 남다", partOfSpeech: "verb", translations: { en: "to remain memorable" }, example: "그 공연은 정말 기억에 남아요.", exampleTranslations: { en: "That performance really remains memorable." }, audioUrl: null, status: "new" },
  { id: "L4-S13-W10", korean: "전시회", partOfSpeech: "noun", translations: { en: "exhibition (event)" }, example: "사진 전시회에 다녀왔어요.", exampleTranslations: { en: "I went to a photo exhibition." }, audioUrl: null, status: "new" },
  { id: "L4-S13-W11", korean: "관객", partOfSpeech: "noun", translations: { en: "audience" }, example: "관객이 아주 많았어요.", exampleTranslations: { en: "There was a large audience." }, audioUrl: null, status: "new" },
  { id: "L4-S13-W12", korean: "티켓", partOfSpeech: "noun", translations: { en: "ticket" }, example: "미리 티켓을 샀어요.", exampleTranslations: { en: "I bought a ticket in advance." }, audioUrl: null, status: "new" },
  { id: "L4-S13-W13", korean: "입장료", partOfSpeech: "noun", translations: { en: "admission fee" }, example: "입장료가 생각보다 비쌌어요.", exampleTranslations: { en: "The admission fee was more expensive than I thought." }, audioUrl: null, status: "new" },
  { id: "L4-S13-W14", korean: "무대", partOfSpeech: "noun", translations: { en: "stage" }, example: "무대가 정말 화려했어요.", exampleTranslations: { en: "The stage was really spectacular." }, audioUrl: null, status: "new" },
  { id: "L4-S13-W15", korean: "관람객", partOfSpeech: "noun", translations: { en: "visitor / viewer" }, example: "관람객이 줄을 서서 기다렸어요.", exampleTranslations: { en: "Visitors stood in line waiting." }, audioUrl: null, status: "new" },
  { id: "L4-S13-W16", korean: "여가활동", partOfSpeech: "noun", translations: { en: "leisure activity" }, example: "저는 여가활동으로 그림을 그려요.", exampleTranslations: { en: "I draw as a leisure activity." }, audioUrl: null, status: "new" },
  { id: "L4-S13-W17", korean: "공연", partOfSpeech: "noun", translations: { en: "performance" }, example: "공연을 보러 가요.", exampleTranslations: { en: "I'm going to see a performance." }, audioUrl: null, status: "review" },
  { id: "L4-S13-W18", korean: "축제", partOfSpeech: "noun", translations: { en: "festival" }, example: "축제에 참가해 봤어요.", exampleTranslations: { en: "I've participated in the festival before." }, audioUrl: null, status: "review" },
  { id: "L4-S13-W19", korean: "참가", partOfSpeech: "noun", translations: { en: "participation" }, example: "참가 신청이 필요해요.", exampleTranslations: { en: "Participation requires an application." }, audioUrl: null, status: "review" },
  { id: "L4-S13-W20", korean: "취미", partOfSpeech: "noun", translations: { en: "hobby" }, example: "제 취미는 사진이에요.", exampleTranslations: { en: "My hobby is photography." }, audioUrl: null, status: "review" },
  { id: "L4-S13-W21", korean: "만족", partOfSpeech: "noun", translations: { en: "satisfaction" }, example: "이 일에 만족을 느껴요.", exampleTranslations: { en: "I feel satisfaction with this work." }, audioUrl: null, status: "review" },
  { id: "L4-S13-W22", korean: "예약하다", partOfSpeech: "verb", translations: { en: "to reserve" }, example: "숙소를 미리 예약했어요.", exampleTranslations: { en: "I reserved accommodation in advance." }, audioUrl: null, status: "review" },
  { id: "L4-S13-W23", korean: "즐기다", partOfSpeech: "verb", translations: { en: "to enjoy" }, example: "여행을 즐겼어요.", exampleTranslations: { en: "I enjoyed the trip." }, audioUrl: null, status: "review" },
  { id: "L4-S13-W24", korean: "참여하다", partOfSpeech: "verb", translations: { en: "to participate" }, example: "수업에 적극적으로 참여해요.", exampleTranslations: { en: "I actively participate in class." }, audioUrl: null, status: "review" },
];

const SENTENCES: Sentence[] = [
  { id: "L4-S13-S01", korean: "시내에 간 김에 전시회도 봤어요.", translations: { en: "Since I was already downtown, I saw an exhibition too." }, keyExpression: "-는 김에", relatedWords: ["전시회"], audioUrl: null },
  { id: "L4-S13-S02", korean: "티켓을 사는 김에 친구 것도 같이 샀어요.", translations: { en: "Since I was buying a ticket, I bought one for my friend too." }, keyExpression: "-는 김에", relatedWords: ["티켓"], audioUrl: null },
  { id: "L4-S13-S03", korean: "공연을 보는 동안 사진을 찍지 않았어요.", translations: { en: "While watching the performance, I didn't take photos." }, keyExpression: "-는 동안", relatedWords: ["공연"], audioUrl: null },
  { id: "L4-S13-S04", korean: "전시를 감상하는 동안 조용히 이동했어요.", translations: { en: "While appreciating the exhibition, I moved around quietly." }, keyExpression: "-는 동안", relatedWords: ["전시", "감상"], audioUrl: null },
  { id: "L4-S13-S05", korean: "이 지역에서는 매년 큰 축제를 개최해요.", translations: { en: "This region holds a big festival every year." }, keyExpression: "개최하다", relatedWords: ["축제", "개최하다"], audioUrl: null },
  { id: "L4-S13-S06", korean: "무대 위 공연이 정말 기억에 남았어요.", translations: { en: "The performance on stage really remained memorable." }, keyExpression: "기억에 남다", relatedWords: ["무대", "기억에 남다"], audioUrl: null },
  { id: "L4-S13-S07", korean: "행사장에 관객과 관람객이 정말 많았어요.", translations: { en: "There were really a lot of audience members and visitors at the event venue." }, keyExpression: "행사장", relatedWords: ["행사장", "관객", "관람객"], audioUrl: null },
  { id: "L4-S13-S08", korean: "저는 여가활동으로 이런 문화행사에 참여하는 것을 좋아해요.", translations: { en: "I like participating in cultural events like this as a leisure activity." }, keyExpression: "여가활동", relatedWords: ["여가활동", "문화행사", "참여하다"], audioUrl: null },
];

const GRAMMAR: Grammar[] = [
  {
    id: "L4-S13-G01",
    pattern: "-는 김에",
    meanings: { en: "while already doing (something), also ~" },
    explanations: {
      en: "Attach -는 김에 to a verb stem to add an extra action taken advantage of an existing opportunity.",
    },
    examples: [
      { korean: "시내에 간 김에 전시회도 봤어요.", translations: { en: "Since I was already downtown, I saw an exhibition too." } },
      { korean: "티켓을 사는 김에 친구 것도 같이 샀어요.", translations: { en: "Since I was buying a ticket, I bought one for my friend too." } },
    ],
  },
  {
    id: "L4-S13-G02",
    pattern: "-는 동안 (복습)",
    meanings: { en: "while (review)" },
    explanations: {
      en: "Keep using -는 동안 (TOPIK3 STEP7) to describe something happening during the same time as another action.",
    },
    examples: [
      { korean: "공연을 보는 동안 사진을 찍지 않았어요.", translations: { en: "While watching the performance, I didn't take photos." } },
      { korean: "전시를 감상하는 동안 조용히 이동했어요.", translations: { en: "While appreciating the exhibition, I moved around quietly." } },
    ],
  },
];

const LISTENING: ListeningQuestionData[] = [
  {
    id: "L4-S13-L01",
    audioText: "시내에 간 김에 전시회도 봤어요. 생각보다 정말 좋았어요.",
    audioUrl: null,
    question: "이 사람은 시내에서 무엇을 했습니까?",
    options: ["쇼핑만 했다", "집에만 있었다", "일만 했다", "전시회를 봤다"],
    correctAnswer: 3,
    translations: { en: { question: "What did this person do downtown?", explanation: 'The sentence says "saw an exhibition too," so the correct answer is 전시회를 봤다.' } },
  },
  {
    id: "L4-S13-L02",
    audioText: "공연을 보는 동안 휴대폰을 꺼 두었어요. 다른 관객들에게 방해가 되지 않기 위해서예요.",
    audioUrl: null,
    question: "이 사람은 왜 휴대폰을 껐습니까?",
    options: ["다른 관객들에게 방해가 되지 않기 위해서", "배터리가 없어서", "전화가 안 와서", "공연이 재미없어서"],
    correctAnswer: 0,
    translations: { en: { question: "Why did this person turn off their phone?", explanation: "The sentence says so as not to disturb other audience members, so the correct answer is 다른 관객들에게 방해가 되지 않기 위해서." } },
  },
  {
    id: "L4-S13-L03",
    audioText: "이 지역에서는 매년 큰 문화행사를 개최합니다. 다양한 프로그램이 준비되어 있어서 여가를 즐기기에 좋습니다.",
    audioUrl: null,
    question: "이 지역의 행사는 어떻습니까?",
    options: ["프로그램이 하나뿐이다", "다양한 프로그램이 준비되어 있다", "매년 취소된다", "입장료가 매우 비싸다"],
    correctAnswer: 1,
    translations: { en: { question: "What is this region's event like?", explanation: "The sentence says various programs are prepared, so the correct answer is 다양한 프로그램이 준비되어 있다." } },
  },
];

const READING: ReadingQuestionData[] = [
  {
    id: "L4-S13-R01",
    passage:
      "지난 주말에 시내에 간 김에 유명한 전시회를 보러 갔어요.\n입장료는 조금 비쌌지만 작품을 천천히 감상할 수 있어서 만족스러웠어요.\n전시를 감상하는 동안 조용한 분위기 속에서 관람객들이 집중하고 있었어요.\n오랜만에 기억에 남는 여가활동을 한 것 같아요.",
    question: "이 사람은 전시회에서 어떤 경험을 했습니까?",
    options: ["실망스러운 경험", "지루하기만 한 경험", "위험한 경험", "만족스럽고 기억에 남는 경험"],
    correctAnswer: 3,
    translations: { en: { question: "What kind of experience did this person have at the exhibition?", explanation: "The passage describes it as satisfying and memorable, so the correct answer is 만족스럽고 기억에 남는 경험." } },
  },
  {
    id: "L4-S13-R02",
    passage:
      "이번 지역 축제는 다양한 프로그램으로 큰 인기를 얻었어요.\n행사장에는 공연 무대뿐만 아니라 전통 체험 프로그램도 마련되어 있었어요.\n입장은 무료였지만 일부 체험 프로그램은 티켓을 미리 예약해야 했어요.\n관객과 관람객 모두 즐거운 시간을 보낼 수 있었다고 해요.",
    question: "이 축제에서 티켓이 필요했던 것은 무엇입니까?",
    options: ["일부 체험 프로그램", "행사장 입장", "공연 관람", "주차"],
    correctAnswer: 0,
    translations: { en: { question: "What required a ticket at this festival?", explanation: "The passage says some experience programs required reserved tickets, so the correct answer is 일부 체험 프로그램." } },
  },
  {
    id: "L4-S13-R03",
    passage:
      "저는 여가 시간에 다양한 문화행사에 참여하는 것을 좋아해요.\n최근에는 작은 공연을 보러 갔다가 좋은 프로그램을 알게 되어 다음 전시회도 예약했어요.\n행사장 분위기를 즐기는 동안 스트레스가 많이 풀리는 느낌이었어요.\n앞으로도 이런 여가활동을 계속 즐기고 싶어요.",
    question: "이 사람은 문화행사에 참여하면서 어떤 느낌을 받았습니까?",
    options: ["더 피곤해졌다", "스트레스가 풀리는 느낌을 받았다", "돈이 아까웠다", "지루했다"],
    correctAnswer: 1,
    translations: { en: { question: "What did this person feel while participating in cultural events?", explanation: "The passage says they felt their stress relieved, so the correct answer is 스트레스가 풀리는 느낌을 받았다." } },
  },
];

const WRITING: WritingItem[] = [
  {
    id: "L4-S13-WR01",
    type: "keyword-writing",
    prompt: { en: "Write one sentence using all of the following words." },
    keywords: ["행사", "참여하다", "기억에 남다"],
    sampleAnswer: { en: "지난주에 참여한 행사가 정말 기억에 남아요." },
    explanation: { en: "Combine 행사 as the topic, 참여하다 for the action, and 기억에 남다 for the outcome." },
  },
  {
    id: "L4-S13-WR02",
    type: "short-response",
    prompt: {
      en: "Introduce a cultural event you attended or would like to attend in 5-6 sentences.\nInclude: the type of event, location, activities, good points, and why you recommend it.",
    },
    keywords: ["문화행사", "전시", "프로그램", "기억에 남다"],
    sampleAnswer: {
      en: "제가 소개하고 싶은 문화행사는 지역 예술 전시회예요. 이 전시회는 시내 문화센터에서 열려요. 다양한 작품을 감상할 수 있고 체험 프로그램도 함께 있어요. 입장료가 무료여서 부담 없이 즐길 수 있어요. 저는 이 전시회를 본 후 정말 기억에 남아서 다른 사람들에게도 추천하고 싶어요. 여가 시간에 가 보면 좋을 것 같아요.",
    },
    explanation: { en: "5-6 sentences following event type → location → activity → good point → recommendation is enough at this stage." },
  },
];

const PRACTICE: PracticeQuestionData[] = [
  { id: "L4-S13-P01", type: "vocabulary", question: '"전시회"의 뜻은 무엇입니까?', options: ["Exhibition", "Performance", "Festival", "Ticket"], correctAnswer: 0, explanation: { en: "전시회 means exhibition." } },
  { id: "L4-S13-P02", type: "vocabulary", question: '"입장료"의 뜻은 무엇입니까?', options: ["Ticket", "Admission fee", "Stage", "Audience"], correctAnswer: 1, explanation: { en: "입장료 means admission fee." } },
  { id: "L4-S13-P03", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n시내에 간 ______ 전시회도 봤어요.", options: ["김에", "동안", "반면에", "대신에"], correctAnswer: 0, explanation: { en: "-는 김에 adds an extra action: 간 김에." } },
  { id: "L4-S13-P04", type: "grammar", question: "빈칸에 알맞은 것을 고르세요.\n공연을 보는 ______ 휴대폰을 꺼 두었어요.", options: ["김에", "동안", "대신에", "반면에"], correctAnswer: 1, explanation: { en: "-는 동안 shows overlapping time: 보는 동안." } },
  { id: "L4-S13-P05", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n이 지역에서는 매년 큰 축제를 ______.", options: ["감상해요", "개최해요", "입장해요", "관람해요"], correctAnswer: 1, explanation: { en: "개최하다 (to hold an event) fits an annual festival." } },
  { id: "L4-S13-P06", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n무대 위 공연이 정말 ______.", options: ["예약했어요", "입장했어요", "기억에 남았어요", "개최했어요"], correctAnswer: 2, explanation: { en: "기억에 남다 (to remain memorable) fits describing a great performance." } },
  { id: "L4-S13-P07", type: "sentence", question: "빈칸에 알맞은 것을 고르세요.\n저는 ______(으)로 그림을 그려요.", options: ["무대", "행사장", "여가활동", "관객"], correctAnswer: 2, explanation: { en: "여가활동 (leisure activity) fits describing a hobby like drawing." } },
  { id: "L4-S13-P08", type: "listening", audioText: "시내에 간 김에 전시회도 봤어요. 생각보다 정말 좋았어요.", question: "이 사람은 시내에서 무엇을 했습니까?", options: ["집에만 있었다", "일만 했다", "쇼핑만 했다", "전시회를 봤다"], correctAnswer: 3, explanation: { en: "The sentence says they saw an exhibition too, so the answer is 전시회를 봤다." } },
  { id: "L4-S13-P09", type: "listening", audioText: "공연을 보는 동안 휴대폰을 꺼 두었어요. 다른 관객들에게 방해가 되지 않기 위해서예요.", question: "이 사람은 왜 휴대폰을 껐습니까?", options: ["배터리가 없어서", "전화가 안 와서", "공연이 재미없어서", "다른 관객들에게 방해가 되지 않기 위해서"], correctAnswer: 3, explanation: { en: "The sentence says so as not to disturb others, so the answer is 다른 관객들에게 방해가 되지 않기 위해서." } },
  { id: "L4-S13-P10", type: "reading", passage: "행사장에는 공연 무대뿐만 아니라 전통 체험 프로그램도 마련되어 있었어요. 일부 체험 프로그램은 티켓을 미리 예약해야 했어요.", question: "이 축제에서 티켓이 필요했던 것은 무엇입니까?", options: ["행사장 입장", "공연 관람", "주차", "일부 체험 프로그램"], correctAnswer: 3, explanation: { en: "The passage says some experience programs required tickets, so the answer is 일부 체험 프로그램." } },
  { id: "L4-S13-P11", type: "reading", passage: "행사장 분위기를 즐기는 동안 스트레스가 많이 풀리는 느낌이었어요. 앞으로도 이런 여가활동을 계속 즐기고 싶어요.", question: "이 사람은 문화행사에 참여하면서 어떤 느낌을 받았습니까?", options: ["스트레스가 풀리는 느낌을 받았다", "돈이 아까웠다", "지루했다", "더 피곤해졌다"], correctAnswer: 0, explanation: { en: "The passage says they felt their stress relieved, so the answer is 스트레스가 풀리는 느낌을 받았다." } },
  { id: "L4-S13-P12", type: "sentence", question: "다음 중 자연스러운 문장은?", options: ["티켓을 사는김에 친구 것도 샀어요.", "티켓을 산 김에서 친구 것도 샀어요.", "티켓을 사는 김에 친구 것도 샀어요.", "티켓을 사기 김에 친구 것도 샀어요."], correctAnswer: 2, explanation: { en: "-는 김에 attaches to the present-tense verb stem: 사는 김에." } },
];

export const STEP_4_13: StepContent = {
  level: 4,
  step: 13,
  title: "문화행사와 여가 (Cultural Events and Leisure)",
  words: WORDS,
  sentences: SENTENCES,
  grammar: GRAMMAR,
  listening: LISTENING,
  reading: READING,
  writing: WRITING,
  practice: PRACTICE,
};
