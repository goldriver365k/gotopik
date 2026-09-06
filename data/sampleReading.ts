export type ReadingTranslation = {
  question: string;
  explanation: string;
};

export type ReadingQuestionData = {
  id: string;
  passage: string;
  question: string;
  options: string[];
  correctAnswer: number;
  translations: Record<string, ReadingTranslation>;
};

// Development sample only — not a real TOPIK reading passage.
// Reuses vocabulary and expressions from WORDS / SENTENCES / GRAMMAR / LISTENING.
export const SAMPLE_READING: ReadingQuestionData[] = [
  {
    id: "L1-S1-R01",
    passage:
      "저는 학생이에요.\n아침에 학교에 가요.\n학교에서 친구를 만나요.\n점심에 친구와 밥을 먹어요.",
    question: "이 사람은 아침에 어디에 가요?",
    options: ["학교", "식당", "회사", "집"],
    correctAnswer: 0,
    translations: {
      en: {
        question: "Where does this person go in the morning?",
        explanation:
          "The passage says \"I go to school in the morning,\" so the correct answer is school.",
      },
      vi: {
        question: "Buổi sáng người này đi đâu?",
        explanation:
          "Đoạn văn nói \"Buổi sáng tôi đi đến trường,\" nên đáp án đúng là trường học.",
      },
      zh: {
        question: "这个人早上去哪里？",
        explanation: "文中说“早上我去学校”，所以正确答案是学校。",
      },
      mn: {
        question: "Энэ хүн өглөө хаашаа явдаг вэ?",
        explanation: "Текстэд \"Өглөө би сургууль руу явдаг\" гэсэн тул зөв хариулт бол сургууль.",
      },
      uz: {
        question: "Bu odam ertalab qayerga boradi?",
        explanation: "Matnda \"Ertalab men maktabga boraman\" deyilgan, shuning uchun to‘g‘ri javob maktab.",
      },
      ne: {
        question: "यो व्यक्ति बिहान कहाँ जान्छ?",
        explanation: "अनुच्छेदमा \"बिहान म विद्यालय जान्छु\" भनिएको छ, त्यसैले सही उत्तर विद्यालय हो।",
      },
      ja: {
        question: "この人は朝どこに行きますか？",
        explanation: "文章に「朝、学校に行きます」とあるので、正解は学校です。",
      },
      th: {
        question: "คนนี้ไปไหนตอนเช้า?",
        explanation: "ข้อความบอกว่า \"ตอนเช้าฉันไปโรงเรียน\" ดังนั้นคำตอบที่ถูกต้องคือโรงเรียน",
      },
      id: {
        question: "Ke mana orang ini pergi di pagi hari?",
        explanation: "Bacaan mengatakan \"Pagi hari saya pergi ke sekolah,\" jadi jawaban yang benar adalah sekolah.",
      },
      ru: {
        question: "Куда этот человек идёт утром?",
        explanation: "В тексте говорится «Утром я иду в школу», поэтому правильный ответ — школа.",
      },
    },
  },
];
