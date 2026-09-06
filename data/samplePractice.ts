export type PracticeQuestionType =
  | "vocabulary"
  | "sentence"
  | "grammar"
  | "reading"
  | "listening";

export type PracticeQuestionData = {
  id: number;
  type: PracticeQuestionType;
  question: string;
  passage?: string;
  audioText?: string;
  options: string[];
  correctAnswer: number;
  explanation: Record<string, string>;
};

// Development sample only — not real TOPIK questions.
// Reuses vocabulary, sentences, and grammar already introduced in this STEP.
export const SAMPLE_PRACTICE: PracticeQuestionData[] = [
  {
    id: 1,
    type: "vocabulary",
    question: '"학교"의 뜻은 무엇입니까?',
    options: ["School", "Friend", "Food", "House"],
    correctAnswer: 0,
    explanation: {
      en: "학교 means school.",
      vi: "학교 nghĩa là trường học.",
      zh: "학교 的意思是学校。",
      mn: "학교 гэдэг нь сургууль гэсэн үг.",
      uz: "학교 maktab degan ma’noni bildiradi.",
      ne: "학교 को अर्थ विद्यालय हो।",
      ja: "학교は学校という意味です。",
      th: "학교 แปลว่าโรงเรียน",
      id: "학교 berarti sekolah.",
      ru: "학교 означает школа.",
    },
  },
  {
    id: 2,
    type: "sentence",
    question: "빈칸에 알맞은 말을 고르세요.\n저는 학교에 ______.",
    options: ["가요", "먹어요", "만나요", "있어요"],
    correctAnswer: 0,
    explanation: {
      en: '"가요" fits with -에 to mean going somewhere: 학교에 가요 (I go to school).',
      vi: '"가요" phù hợp với -에 để diễn tả việc đi đến đâu đó: 학교에 가요 (Tôi đi đến trường).',
      zh: "“가요”与-에搭配表示去某地：학교에 가요（我去学校）。",
      mn: "\"가요\" нь -에-тэй хослож хаашаа явахыг илэрхийлнэ: 학교에 가요 (Би сургууль руу явж байна).",
      uz: "\"가요\" -에 bilan birga qayerga borishni bildiradi: 학교에 가요 (Men maktabga boraman).",
      ne: "\"가요\" ले -에 सँग मिलेर कतै जाने कुरा जनाउँछ: 학교에 가요 (म विद्यालय जान्छु)।",
      ja: "「가요」は-에と組み合わせてどこかに行くことを表します：학교에 가요（学校に行きます）。",
      th: "\"가요\" ใช้คู่กับ -에 เพื่อบอกว่าไปที่ไหน: 학교에 가요 (ฉันไปโรงเรียน)",
      id: "\"가요\" cocok dengan -에 untuk menyatakan pergi ke suatu tempat: 학교에 가요 (Saya pergi ke sekolah).",
      ru: "«가요» сочетается с -에, обозначая движение куда-либо: 학교에 가요 (Я иду в школу).",
    },
  },
  {
    id: 3,
    type: "grammar",
    question: "알맞은 문장을 고르세요.",
    options: [
      "저는 학교에 가요.",
      "저는 학교를 가요.",
      "저는 학교와 가요.",
      "저는 학교가 가요.",
    ],
    correctAnswer: 0,
    explanation: {
      en: "Use -에 with 가요 to show where someone goes: 학교에 가요.",
      vi: "Dùng -에 với 가요 để chỉ nơi ai đó đi đến: 학교에 가요.",
      zh: "用-에搭配가요表示某人要去的地方：학교에 가요。",
      mn: "Хэн нэгний хаашаа явахыг харуулахын тулд 가요-той хамт -에-г ашиглана: 학교에 가요.",
      uz: "Kimningdir qayerga borishini ko‘rsatish uchun 가요 bilan -에 ishlatiladi: 학교에 가요.",
      ne: "कोही कहाँ जान्छ भनी देखाउन 가요 सँग -에 प्रयोग गरिन्छ: 학교에 가요।",
      ja: "誰かがどこに行くかを示すために가요と-에を使います：학교에 가요。",
      th: "ใช้ -에 คู่กับ 가요 เพื่อบอกว่าใครไปที่ไหน: 학교에 가요",
      id: "Gunakan -에 dengan 가요 untuk menunjukkan ke mana seseorang pergi: 학교에 가요.",
      ru: "-에 используется с 가요, чтобы показать, куда кто-то идёт: 학교에 가요.",
    },
  },
  {
    id: 4,
    type: "reading",
    passage: "저는 학생이에요. 아침에 학교에 가요.",
    question: "이 사람은 어디에 가요?",
    options: ["학교", "회사", "식당", "집"],
    correctAnswer: 0,
    explanation: {
      en: "The passage says the person goes to school in the morning.",
      vi: "Đoạn văn nói người này đi đến trường vào buổi sáng.",
      zh: "文中说这个人早上去学校。",
      mn: "Текстэд энэ хүн өглөө сургууль руу явдаг гэж бичсэн байна.",
      uz: "Matnda bu odam ertalab maktabga borishi aytilgan.",
      ne: "अनुच्छेदमा यो व्यक्ति बिहान विद्यालय जान्छ भनिएको छ।",
      ja: "文章にはこの人が朝学校に行くと書かれています。",
      th: "ข้อความบอกว่าคนนี้ไปโรงเรียนตอนเช้า",
      id: "Bacaan mengatakan orang ini pergi ke sekolah di pagi hari.",
      ru: "В тексте говорится, что этот человек утром идёт в школу.",
    },
  },
  {
    id: 5,
    type: "listening",
    audioText: "저는 친구와 밥을 먹어요.",
    question: "누구와 밥을 먹어요?",
    options: ["친구", "선생님", "가족", "학생"],
    correctAnswer: 0,
    explanation: {
      en: 'The sentence says "I eat with my friend," so the answer is 친구 (friend).',
      vi: 'Câu nói "Tôi ăn cơm với bạn," nên đáp án là 친구 (bạn).',
      zh: "句子说“我和朋友一起吃饭”，所以答案是친구（朋友）。",
      mn: "\"Би найзтайгаа хамт хоол идэж байна\" гэсэн тул хариулт нь 친구 (найз).",
      uz: "Gapda \"Men do‘stim bilan ovqatlanaman\" deyilgan, shuning uchun javob 친구 (do‘st).",
      ne: "वाक्यमा \"म साथीसँग खाना खान्छु\" भनिएको छ, त्यसैले उत्तर 친구 (साथी) हो।",
      ja: "文には「友達とご飯を食べます」とあるので、答えは친구（友達）です。",
      th: "ประโยคบอกว่า \"ฉันกินข้าวกับเพื่อน\" ดังนั้นคำตอบคือ 친구 (เพื่อน)",
      id: "Kalimatnya mengatakan \"Saya makan bersama teman,\" jadi jawabannya adalah 친구 (teman).",
      ru: "В предложении говорится «Я ем с другом», поэтому ответ — 친구 (друг).",
    },
  },
];
