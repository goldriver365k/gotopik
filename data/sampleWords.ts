export type Word = {
  id: string;
  korean: string;
  partOfSpeech: string;
  translations: Record<string, string>;
  example: string;
  exampleTranslations: Record<string, string>;
  audioUrl: string | null;
  // Optional: "new" for a STEP's own vocabulary, "review" when a word
  // reused from an earlier STEP is listed again. Not read by WordCard yet —
  // reserved for future spaced-review use. STEP 1's words predate this
  // field and are left as-is.
  status?: "new" | "review";
};

// Development sample only — not the final TOPIK 1 curriculum.
export const SAMPLE_WORDS: Word[] = [
  {
    id: "L1-S1-W01",
    korean: "사람",
    partOfSpeech: "noun",
    translations: {
      en: "person", vi: "người", zh: "人", mn: "хүн", uz: "odam",
      ne: "मानिस", ja: "人", th: "คน", id: "orang", ru: "человек",
    },
    example: "저 사람은 제 친구예요.",
    exampleTranslations: {
      en: "That person is my friend.",
      vi: "Người đó là bạn tôi.",
      zh: "那个人是我的朋友。",
      mn: "Тэр хүн бол миний найз.",
      uz: "U odam mening do‘stim.",
      ne: "त्यो मानिस मेरो साथी हो।",
      ja: "あの人は私の友達です。",
      th: "คนนั้นเป็นเพื่อนของฉัน",
      id: "Orang itu adalah temanku.",
      ru: "Этот человек — мой друг.",
    },
    audioUrl: null,
  },
  {
    id: "L1-S1-W02",
    korean: "학교",
    partOfSpeech: "noun",
    translations: {
      en: "school", vi: "trường học", zh: "学校", mn: "сургууль", uz: "maktab",
      ne: "विद्यालय", ja: "学校", th: "โรงเรียน", id: "sekolah", ru: "школа",
    },
    example: "저는 학교에 가요.",
    exampleTranslations: {
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
    audioUrl: null,
  },
  {
    id: "L1-S1-W03",
    korean: "친구",
    partOfSpeech: "noun",
    translations: {
      en: "friend", vi: "bạn", zh: "朋友", mn: "найз", uz: "do‘st",
      ne: "साथी", ja: "友達", th: "เพื่อน", id: "teman", ru: "друг",
    },
    example: "친구를 만났어요.",
    exampleTranslations: {
      en: "I met my friend.",
      vi: "Tôi đã gặp bạn tôi.",
      zh: "我见了我的朋友。",
      mn: "Би найзтайгаа уулзсан.",
      uz: "Men do‘stim bilan uchrashdim.",
      ne: "मैले मेरो साथीलाई भेटें।",
      ja: "友達に会いました。",
      th: "ฉันเจอเพื่อนของฉัน",
      id: "Saya bertemu teman saya.",
      ru: "Я встретил друга.",
    },
    audioUrl: null,
  },
  {
    id: "L1-S1-W04",
    korean: "먹다",
    partOfSpeech: "verb",
    translations: {
      en: "to eat", vi: "ăn", zh: "吃", mn: "идэх", uz: "yemoq",
      ne: "खानु", ja: "食べる", th: "กิน", id: "makan", ru: "есть",
    },
    example: "밥을 먹어요.",
    exampleTranslations: {
      en: "I eat rice.",
      vi: "Tôi ăn cơm.",
      zh: "我吃饭。",
      mn: "Би будаа идэж байна.",
      uz: "Men guruch yeyapman.",
      ne: "म भात खान्छु।",
      ja: "ご飯を食べます。",
      th: "ฉันกินข้าว",
      id: "Saya makan nasi.",
      ru: "Я ем рис.",
    },
    audioUrl: null,
  },
  {
    id: "L1-S1-W05",
    korean: "가다",
    partOfSpeech: "verb",
    translations: {
      en: "to go", vi: "đi", zh: "去", mn: "явах", uz: "bormoq",
      ne: "जानु", ja: "行く", th: "ไป", id: "pergi", ru: "идти",
    },
    example: "학교에 가요.",
    exampleTranslations: {
      en: "I go to school.",
      vi: "Tôi đi đến trường.",
      zh: "我去学校。",
      mn: "Би сургууль руу явж байна.",
      uz: "Men maktabga boraman.",
      ne: "म विद्यालय जान्छु।",
      ja: "学校に行きます。",
      th: "ฉันไปโรงเรียน",
      id: "Saya pergi ke sekolah.",
      ru: "Я иду в школу.",
    },
    audioUrl: null,
  },
];
