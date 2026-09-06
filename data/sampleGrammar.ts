export type GrammarExample = {
  korean: string;
  translations: Record<string, string>;
};

export type Grammar = {
  id: number;
  pattern: string;
  meanings: Record<string, string>;
  explanations: Record<string, string>;
  examples: GrammarExample[];
};

// Development sample only — not the final TOPIK 1 curriculum.
// Reuses vocabulary and sentences already introduced in WORDS / SENTENCES.
export const SAMPLE_GRAMMAR: Grammar[] = [
  {
    id: 1,
    pattern: "-에 가요",
    meanings: {
      en: "go to / going to",
      vi: "đi đến",
      zh: "去某地",
      mn: "явах / очих",
      uz: "bormoq / boryapman",
      ne: "जानु / जाँदैछु",
      ja: "〜へ行く",
      th: "ไปที่ / กำลังไป",
      id: "pergi ke",
      ru: "идти в / иду в",
    },
    explanations: {
      en: "Use -에 after a place to show where someone goes.",
      vi: "Dùng -에 sau địa điểm để diễn tả nơi ai đó đi đến.",
      zh: "在地点后加 -에，表示某人要去的地方。",
      mn: "Хэн нэгний хаашаа явахыг илэрхийлэхийн тулд газрын нэрний ард -에-г ашиглана.",
      uz: "Kimningdir qayerga borishini ko‘rsatish uchun joy nomidan keyin -에 qo‘shiladi.",
      ne: "कोही कहाँ जान्छ भनेर देखाउन ठाउँपछि -에 प्रयोग गरिन्छ।",
      ja: "場所の後に-에を付けて、どこに行くかを表します。",
      th: "ใช้ -에 หลังสถานที่เพื่อบอกว่าใครไปที่ไหน",
      id: "Gunakan -에 setelah nama tempat untuk menunjukkan ke mana seseorang pergi.",
      ru: "-에 ставится после места, чтобы показать, куда кто-то идёт.",
    },
    examples: [
      {
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
      },
      {
        korean: "친구는 회사에 가요.",
        translations: {
          en: "My friend goes to work.",
          vi: "Bạn tôi đi đến công ty.",
          zh: "我朋友去公司。",
          mn: "Найз маань компани руу явж байна.",
          uz: "Do‘stim ishga boradi.",
          ne: "मेरो साथी अफिस जान्छ।",
          ja: "友達は会社に行きます。",
          th: "เพื่อนของฉันไปทำงาน",
          id: "Teman saya pergi ke kantor.",
          ru: "Мой друг идёт на работу.",
        },
      },
      {
        korean: "저는 집에 가요.",
        translations: {
          en: "I go home.",
          vi: "Tôi đi về nhà.",
          zh: "我回家。",
          mn: "Би гэртээ явж байна.",
          uz: "Men uyga boraman.",
          ne: "म घर जान्छु।",
          ja: "私は家に帰ります。",
          th: "ฉันกลับบ้าน",
          id: "Saya pulang ke rumah.",
          ru: "Я иду домой.",
        },
      },
    ],
  },
];
