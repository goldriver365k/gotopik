export type ListeningTranslation = {
  question: string;
  explanation: string;
};

export type ListeningQuestionData = {
  id: string;
  audioText: string;
  audioUrl: string | null;
  question: string;
  options: string[];
  correctAnswer: number;
  translations: Record<string, ListeningTranslation>;
};

// Development sample only — not a real TOPIK listening item.
// Reuses vocabulary and the "-에 가요" pattern from WORDS / SENTENCES / GRAMMAR.
export const SAMPLE_LISTENING: ListeningQuestionData[] = [
  {
    id: "L1-S1-L01",
    audioText: "저는 학교에 가요.",
    audioUrl: null,
    question: "어디에 가요?",
    options: ["학교", "집", "회사", "식당"],
    correctAnswer: 0,
    translations: {
      en: {
        question: "Where are you going?",
        explanation:
          "The sentence says \"I go to school,\" so the correct answer is school.",
      },
      vi: {
        question: "Bạn đi đâu?",
        explanation:
          "Câu nói \"Tôi đi đến trường,\" nên đáp án đúng là trường học.",
      },
      zh: {
        question: "你要去哪里？",
        explanation: "句子说“我去学校”，所以正确答案是学校。",
      },
      mn: {
        question: "Хаашаа явж байна вэ?",
        explanation: "\"Би сургууль руу явж байна\" гэсэн тул зөв хариулт бол сургууль.",
      },
      uz: {
        question: "Qayerga borayapsiz?",
        explanation: "Gapda \"Men maktabga boraman\" deyilgan, shuning uchun to‘g‘ri javob maktab.",
      },
      ne: {
        question: "तपाईं कहाँ जाँदै हुनुहुन्छ?",
        explanation: "वाक्यमा \"म विद्यालय जान्छु\" भनिएको छ, त्यसैले सही उत्तर विद्यालय हो।",
      },
      ja: {
        question: "どこに行きますか？",
        explanation: "文には「学校に行きます」とあるので、正解は学校です。",
      },
      th: {
        question: "คุณจะไปไหน?",
        explanation: "ประโยคบอกว่า \"ฉันไปโรงเรียน\" ดังนั้นคำตอบที่ถูกต้องคือโรงเรียน",
      },
      id: {
        question: "Anda pergi ke mana?",
        explanation: "Kalimatnya mengatakan \"Saya pergi ke sekolah,\" jadi jawaban yang benar adalah sekolah.",
      },
      ru: {
        question: "Куда вы идёте?",
        explanation: "В предложении говорится «Я иду в школу», поэтому правильный ответ — школа.",
      },
    },
  },
];
