export type DiagnosticQuestionType = "vocabulary" | "grammar" | "reading";

export type DiagnosticQuestion = {
  id: number;
  type: DiagnosticQuestionType;
  difficulty: number; // 1 = beginner ... 4 = upper-intermediate sample
  question: string;
  passage?: string;
  options: string[];
  correctAnswer: number;
};

// Development sample only — not real TOPIK exam questions.
// Reuses vocabulary already introduced elsewhere in GO TOPIK (학교, 친구, 먹다, 가다).
export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: 1,
    type: "vocabulary",
    difficulty: 1,
    question: '"학교"의 뜻은 무엇입니까?',
    options: ["School", "Hospital", "Restaurant", "Bank"],
    correctAnswer: 0,
  },
  {
    id: 2,
    type: "vocabulary",
    difficulty: 1,
    question: '"먹다"와 가장 가까운 뜻은?',
    options: ["to eat", "to sleep", "to study", "to buy"],
    correctAnswer: 0,
  },
  {
    id: 3,
    type: "vocabulary",
    difficulty: 1,
    question: '"친구"의 뜻은 무엇입니까?',
    options: ["Friend", "Family", "Teacher", "Stranger"],
    correctAnswer: 0,
  },
  {
    id: 4,
    type: "vocabulary",
    difficulty: 2,
    question: '"가다"와 가장 가까운 뜻은?',
    options: ["to go", "to come", "to stay", "to buy"],
    correctAnswer: 0,
  },
  {
    id: 5,
    type: "grammar",
    difficulty: 2,
    question: "저는 학교___ 가요.",
    options: ["에", "를", "와", "가"],
    correctAnswer: 0,
  },
  {
    id: 6,
    type: "grammar",
    difficulty: 2,
    question: "저는 친구___ 밥을 먹어요.",
    options: ["와", "을", "가", "도"],
    correctAnswer: 0,
  },
  {
    id: 7,
    type: "grammar",
    difficulty: 3,
    question: "다음 중 알맞은 문장을 고르세요.",
    options: [
      "저는 학교에 가요.",
      "저는 학교를 가요.",
      "저는 학교와 가요.",
      "저는 학교가 가요.",
    ],
    correctAnswer: 0,
  },
  {
    id: 8,
    type: "reading",
    difficulty: 3,
    passage: "민수 씨는 아침 8시에 학교에 갑니다. 학교에서 한국어를 공부합니다.",
    question: "민수 씨는 어디에서 한국어를 공부합니까?",
    options: ["집", "학교", "회사", "식당"],
    correctAnswer: 1,
  },
  {
    id: 9,
    type: "reading",
    difficulty: 4,
    passage:
      "저는 학생이에요. 아침에 학교에 가요. 학교에서 친구를 만나요.",
    question: "이 사람은 아침에 무엇을 합니까?",
    options: ["잠을 잡니다", "학교에 갑니다", "밥을 먹습니다", "친구를 만납니다"],
    correctAnswer: 1,
  },
  {
    id: 10,
    type: "reading",
    difficulty: 4,
    passage:
      "민수 씨는 친구와 함께 학교 식당에서 밥을 먹습니다. 그 다음에 학교에서 한국어를 공부합니다.",
    question: "민수 씨는 누구와 밥을 먹습니까?",
    options: ["선생님", "친구", "가족", "학생"],
    correctAnswer: 1,
  },
];
