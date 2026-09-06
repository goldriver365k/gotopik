export type Sentence = {
  id: string;
  korean: string;
  translations: Record<string, string>;
  keyExpression: string;
  relatedWords: string[];
  audioUrl: string | null;
};

// Development sample only — not the final TOPIK 1 curriculum.
// relatedWords link back to vocabulary introduced in the WORDS screen.
export const SAMPLE_SENTENCES: Sentence[] = [
  {
    id: "L1-S1-S01",
    korean: "저는 학생이에요.",
    translations: {
      en: "I am a student.",
      vi: "Tôi là học sinh.",
      zh: "我是学生。",
      mn: "Би сурагч.",
      uz: "Men talabaman.",
      ne: "म विद्यार्थी हुँ।",
      ja: "私は学生です。",
      th: "ฉันเป็นนักเรียน",
      id: "Saya seorang pelajar.",
      ru: "Я студент.",
    },
    keyExpression: "-이에요",
    relatedWords: [],
    audioUrl: null,
  },
  {
    id: "L1-S1-S02",
    korean: "저는 학교에 가요.",
    translations: {
      en: "I go to school.",
      vi: "Tôi đi đến trường.",
      zh: "我去学校。",
      mn: "Би сургууль руу явж байна.",
      uz: "Men maktabga boraman.",
      ne: "म विद्यालय जान्छु।",
      ja: "私は学校に行きます。",
      th: "ฉันไปโรงเรียน",
      id: "Saya pergi ke sekolah.",
      ru: "Я иду в школу.",
    },
    keyExpression: "-에 가요",
    relatedWords: ["학교", "가다"],
    audioUrl: null,
  },
  {
    id: "L1-S1-S03",
    korean: "친구와 밥을 먹어요.",
    translations: {
      en: "I eat with my friend.",
      vi: "Tôi ăn cơm với bạn.",
      zh: "我和朋友一起吃饭。",
      mn: "Би найзтайгаа хамт хоол идэж байна.",
      uz: "Men do‘stim bilan ovqatlanaman.",
      ne: "म साथीसँग खाना खान्छु।",
      ja: "友達とご飯を食べます。",
      th: "ฉันกินข้าวกับเพื่อน",
      id: "Saya makan bersama teman.",
      ru: "Я ем с другом.",
    },
    keyExpression: "-와 먹어요",
    relatedWords: ["친구", "먹다"],
    audioUrl: null,
  },
];
