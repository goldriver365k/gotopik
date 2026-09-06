export type QuickCheckQuestionType = "vocabulary" | "grammar" | "reading" | "listening";

export type QuickCheckQuestion = {
  id: number;
  type: QuickCheckQuestionType;
  // Rough difficulty signal for future recommendation use — not an official
  // TOPIK grade, just an increasing hint across the 7 questions.
  levelHint: number;
  passage?: string;
  // Listening-style questions have no real audio yet — this is the sample
  // sentence shown on screen in place of a recording.
  listeningScript?: string;
  question: string;
  options: string[];
  correctAnswer: number;
};

// Development sample only — not real TOPIK exam questions.
// Vocabulary x2, Grammar x2, Reading x2, Listening-style x1, roughly
// increasing in difficulty (Quick Check is a fast correction, not a full
// level test — TOPIK 5/6 do not need to be distinguished here).
export const QUICK_CHECK_QUESTIONS: QuickCheckQuestion[] = [
  {
    id: 1,
    type: "vocabulary",
    levelHint: 1,
    question: '"학교"의 뜻은 무엇입니까?',
    options: ["School", "Hospital", "Company", "Bank"],
    correctAnswer: 0,
  },
  {
    id: 2,
    type: "vocabulary",
    levelHint: 1,
    question: '"신청하다"와 가장 가까운 뜻은?',
    options: ["to apply", "to sleep", "to close", "to forget"],
    correctAnswer: 0,
  },
  {
    id: 3,
    type: "grammar",
    levelHint: 2,
    question: "저는 학교___ 가요.",
    options: ["에", "를", "와", "가"],
    correctAnswer: 0,
  },
  {
    id: 4,
    type: "grammar",
    levelHint: 2,
    question: "비가 많이 ___ 우산을 가지고 갔어요.",
    options: ["와서", "오지만", "오거나", "오도록"],
    correctAnswer: 0,
  },
  {
    id: 5,
    type: "reading",
    levelHint: 3,
    passage:
      "민수 씨는 한국 회사에서 일합니다. 회사가 집에서 멀어서 매일 지하철을 탑니다.",
    question: "민수 씨는 왜 지하철을 탑니까?",
    options: ["회사가 멀어서", "운동을 하려고", "친구를 만나려고", "집이 가까워서"],
    correctAnswer: 0,
  },
  {
    id: 6,
    type: "reading",
    levelHint: 3,
    passage:
      "지난 주말에 저는 친구와 함께 등산을 갔습니다. 날씨가 좋아서 산 위에서 보는 경치가 정말 아름다웠습니다. 하지만 내려올 때는 다리가 아파서 조금 힘들었습니다. 그래도 오랜만에 운동을 해서 기분이 좋았습니다.",
    question: "이 사람은 왜 기분이 좋았습니까?",
    options: ["오랜만에 운동을 해서", "경치가 안 좋아서", "다리가 아파서", "집에 일찍 와서"],
    correctAnswer: 0,
  },
  {
    id: 7,
    type: "listening",
    levelHint: 4,
    listeningScript: "회의 시간이 오후 세 시로 변경되었습니다.",
    question: "회의는 몇 시에 합니까?",
    options: ["오후 세 시", "오전 세 시", "오후 다섯 시", "오전 아홉 시"],
    correctAnswer: 0,
  },
];
