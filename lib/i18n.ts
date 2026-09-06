// Shared UI text dictionary for GO TOPIK.
// Covers the app's own interface text (buttons, labels, headings) — not the
// Korean learning content itself, which stays Korean by design.
// Falls back to English when a language or key is missing.

export type UiTextKey = keyof typeof UI_TEXT;

export const UI_TEXT = {
  // Common
  language: {
    en: "Language", vi: "Ngôn ngữ", zh: "语言", mn: "Хэл", uz: "Til",
    ne: "भाषा", ja: "言語", th: "ภาษา", id: "Bahasa", ru: "Язык",
  },
  continue: {
    en: "Continue", vi: "Tiếp tục", zh: "继续", mn: "Үргэлжлүүлэх", uz: "Davom etish",
    ne: "जारी राख्नुहोस्", ja: "続ける", th: "ดำเนินการต่อ", id: "Lanjutkan", ru: "Продолжить",
  },
  next: {
    en: "Next", vi: "Tiếp theo", zh: "下一步", mn: "Дараах", uz: "Keyingisi",
    ne: "अर्को", ja: "次へ", th: "ถัดไป", id: "Berikutnya", ru: "Далее",
  },
  previous: {
    en: "Previous", vi: "Trước đó", zh: "上一步", mn: "Өмнөх", uz: "Oldingi",
    ne: "अघिल्लो", ja: "前へ", th: "ก่อนหน้า", id: "Sebelumnya", ru: "Назад",
  },
  backToSteps: {
    en: "Back to Steps", vi: "Quay lại danh sách STEP", zh: "返回步骤列表",
    mn: "Алхмууд руу буцах", uz: "Bosqichlarga qaytish", ne: "स्टेपहरूमा फर्कनुहोस्",
    ja: "STEP一覧に戻る", th: "กลับไปที่ขั้นตอน", id: "Kembali ke Langkah", ru: "Назад к шагам",
  },
  checkAnswer: {
    en: "Check Answer", vi: "Kiểm tra đáp án", zh: "检查答案", mn: "Хариултаа шалгах",
    uz: "Javobni tekshirish", ne: "उत्तर जाँच्नुहोस्", ja: "答えを確認", th: "ตรวจคำตอบ",
    id: "Periksa Jawaban", ru: "Проверить ответ",
  },
  correct: {
    en: "Correct", vi: "Chính xác", zh: "正确", mn: "Зөв", uz: "To‘g‘ri",
    ne: "सही", ja: "正解", th: "ถูกต้อง", id: "Benar", ru: "Верно",
  },
  incorrect: {
    en: "Incorrect", vi: "Chưa đúng", zh: "不正确", mn: "Буруу", uz: "Noto‘g‘ri",
    ne: "गलत", ja: "不正解", th: "ไม่ถูกต้อง", id: "Salah", ru: "Неверно",
  },
  correctAnswer: {
    en: "Correct answer", vi: "Đáp án đúng", zh: "正确答案", mn: "Зөв хариулт",
    uz: "To‘g‘ri javob", ne: "सही उत्तर", ja: "正解", th: "คำตอบที่ถูกต้อง",
    id: "Jawaban benar", ru: "Правильный ответ",
  },
  yourAnswer: {
    en: "Your answer", vi: "Câu trả lời của bạn", zh: "你的答案", mn: "Таны хариулт",
    uz: "Sizning javobingiz", ne: "तपाईंको उत्तर", ja: "あなたの回答", th: "คำตอบของคุณ",
    id: "Jawaban Anda", ru: "Ваш ответ",
  },
  progress: {
    en: "Progress", vi: "Tiến độ", zh: "进度", mn: "Явц", uz: "Jarayon",
    ne: "प्रगति", ja: "進捗", th: "ความคืบหน้า", id: "Kemajuan", ru: "Прогресс",
  },
  learningStage: {
    en: "Learning Stage", vi: "Giai đoạn học", zh: "学习阶段", mn: "Сургалтын үе шат",
    uz: "O‘quv bosqichi", ne: "सिकाइ चरण", ja: "学習ステージ", th: "ขั้นตอนการเรียน",
    id: "Tahap Belajar", ru: "Этап обучения",
  },
  completed: {
    en: "Completed", vi: "Đã hoàn thành", zh: "已完成", mn: "Дууссан", uz: "Bajarilgan",
    ne: "पूरा भयो", ja: "完了", th: "เสร็จสิ้น", id: "Selesai", ru: "Завершено",
  },
  inProgress: {
    en: "In Progress", vi: "Đang học", zh: "进行中", mn: "Хийгдэж байгаа", uz: "Jarayonda",
    ne: "जारी छ", ja: "進行中", th: "กำลังดำเนินการ", id: "Sedang Berjalan", ru: "В процессе",
  },
  notStarted: {
    en: "Not Started", vi: "Chưa bắt đầu", zh: "未开始", mn: "Эхлээгүй", uz: "Boshlanmagan",
    ne: "सुरु नभएको", ja: "未着手", th: "ยังไม่เริ่ม", id: "Belum Dimulai", ru: "Не начато",
  },
  allStepsOpen: {
    en: "All steps are open. Start anywhere.",
    vi: "Tất cả các STEP đều mở. Bắt đầu từ bất kỳ đâu.",
    zh: "所有步骤均已开放，可从任意步骤开始。",
    mn: "Бүх алхам нээлттэй. Хаанаас ч эхэлж болно.",
    uz: "Barcha bosqichlar ochiq. Istalgan joydan boshlang.",
    ne: "सबै स्टेप खुला छन्। जुनसुकैबाट सुरु गर्नुहोस्।",
    ja: "すべてのSTEPが自由に選べます。どこからでも始められます。",
    th: "ทุกขั้นตอนเปิดให้เรียนได้ เริ่มจากขั้นตอนไหนก็ได้",
    id: "Semua langkah terbuka. Mulai dari mana saja.",
    ru: "Все шаги открыты. Начните с любого.",
  },
  allLevelsOpen: {
    en: "All levels are open. Start anywhere.",
    vi: "Tất cả các cấp độ đều mở. Bắt đầu từ bất kỳ đâu.",
    zh: "所有级别均已开放，可从任意级别开始。",
    mn: "Бүх түвшин нээлттэй. Хаанаас ч эхэлж болно.",
    uz: "Barcha darajalar ochiq. Istalgan joydan boshlang.",
    ne: "सबै तह खुला छन्। जुनसुकैबाट सुरु गर्नुहोस्।",
    ja: "すべてのレベルが自由に選べます。どこからでも始められます。",
    th: "ทุกระดับเปิดให้เรียนได้ เริ่มจากระดับไหนก็ได้",
    id: "Semua level terbuka. Mulai dari mana saja.",
    ru: "Все уровни открыты. Начните с любого.",
  },
  allSteps: {
    en: "All Steps", vi: "Tất cả STEP", zh: "所有步骤", mn: "Бүх алхам",
    uz: "Barcha bosqichlar", ne: "सबै स्टेप", ja: "すべてのSTEP", th: "ขั้นตอนทั้งหมด",
    id: "Semua Langkah", ru: "Все шаги",
  },
  chooseYourLevel: {
    en: "Choose Your Level", vi: "Chọn cấp độ của bạn", zh: "选择你的级别",
    mn: "Түвшнээ сонгоно уу", uz: "Darajangizni tanlang", ne: "आफ्नो तह छान्नुहोस्",
    ja: "レベルを選択", th: "เลือกระดับของคุณ", id: "Pilih Level Anda", ru: "Выберите свой уровень",
  },
  navHome: {
    en: "HOME", vi: "TRANG CHỦ", zh: "首页", mn: "НҮҮР", uz: "BOSH SAHIFA",
    ne: "गृह", ja: "ホーム", th: "หน้าแรก", id: "BERANDA", ru: "ГЛАВНАЯ",
  },
  navStudy: {
    en: "STUDY", vi: "HỌC TẬP", zh: "学习", mn: "СУРАЛЦАХ", uz: "O‘QISH",
    ne: "अध्ययन", ja: "学習", th: "เรียน", id: "BELAJAR", ru: "УЧЁБА",
  },
  navTest: {
    en: "TEST", vi: "KIỂM TRA", zh: "测试", mn: "ШАЛГАЛТ", uz: "TEST",
    ne: "परीक्षा", ja: "テスト", th: "ทดสอบ", id: "TES", ru: "ТЕСТ",
  },
  navMy: {
    en: "MY", vi: "CÁ NHÂN", zh: "我的", mn: "МИНИЙ", uz: "MENING",
    ne: "मेरो", ja: "マイページ", th: "ของฉัน", id: "SAYA", ru: "МОЙ",
  },

  // Landing
  landingTitle1: {
    en: "Prepare for TOPIK", vi: "Chuẩn bị cho TOPIK", zh: "备考TOPIK",
    mn: "TOPIK-д бэлдэх", uz: "TOPIKka tayyorlaning", ne: "TOPIK को तयारी गर्नुहोस्",
    ja: "TOPIK対策をしよう", th: "เตรียมสอบ TOPIK", id: "Persiapan TOPIK", ru: "Готовьтесь к TOPIK",
  },
  landingTitle2: {
    en: "in your language", vi: "bằng ngôn ngữ của bạn", zh: "用你的母语",
    mn: "өөрийн хэлээрээ", uz: "o‘z tilingizda", ne: "आफ्नै भाषामा",
    ja: "あなたの言語で", th: "ด้วยภาษาของคุณ", id: "dalam bahasamu", ru: "на вашем языке",
  },
  landingSubtitle: {
    en: "TOPIK 1–6 · All levels open", vi: "TOPIK 1–6 · Mọi cấp độ đều mở",
    zh: "TOPIK 1–6 · 所有级别开放", mn: "TOPIK 1–6 · Бүх түвшин нээлттэй",
    uz: "TOPIK 1–6 · Barcha darajalar ochiq", ne: "TOPIK 1–6 · सबै तह खुला",
    ja: "TOPIK 1〜6 · すべてのレベルが利用可能", th: "TOPIK 1–6 · เปิดทุกระดับ",
    id: "TOPIK 1–6 · Semua level terbuka", ru: "TOPIK 1–6 · Все уровни открыты",
  },
  startLearning: {
    en: "Start Learning", vi: "Bắt đầu học", zh: "开始学习", mn: "Суралцаж эхлэх",
    uz: "O‘qishni boshlash", ne: "सिक्न सुरु गर्नुहोस्", ja: "学習を始める", th: "เริ่มเรียน",
    id: "Mulai Belajar", ru: "Начать обучение",
  },
  checkMyLevel: {
    en: "Check My Level", vi: "Kiểm tra trình độ", zh: "测试我的水平", mn: "Түвшнээ шалгах",
    uz: "Darajamni tekshirish", ne: "मेरो तह जाँच्नुहोस्", ja: "レベルをチェック",
    th: "ตรวจสอบระดับของฉัน", id: "Cek Level Saya", ru: "Проверить мой уровень",
  },
  whatIsTopik: {
    en: "What is TOPIK?", vi: "TOPIK là gì?", zh: "什么是TOPIK？", mn: "TOPIK гэж юу вэ?",
    uz: "TOPIK nima?", ne: "TOPIK के हो?", ja: "TOPIKとは？", th: "TOPIK คืออะไร?",
    id: "Apa itu TOPIK?", ru: "Что такое TOPIK?",
  },

  // Continue Learning card
  continueLearning: {
    en: "Continue Learning", vi: "Học tiếp", zh: "继续学习", mn: "Үргэлжлүүлж суралцах",
    uz: "O‘qishni davom ettirish", ne: "सिकाइ जारी राख्नुहोस्", ja: "学習を続ける",
    th: "เรียนต่อ", id: "Lanjutkan Belajar", ru: "Продолжить обучение",
  },
  startLearningTitle: {
    en: "Start Learning", vi: "Bắt đầu học", zh: "开始学习", mn: "Суралцаж эхлэх",
    uz: "O‘qishni boshlash", ne: "सिक्न सुरु गर्नुहोस्", ja: "学習を始める", th: "เริ่มเรียน",
    id: "Mulai Belajar", ru: "Начать обучение",
  },
  chooseLevelToBegin: {
    en: "Choose your TOPIK level to begin.", vi: "Chọn cấp độ TOPIK để bắt đầu.",
    zh: "选择你的TOPIK级别以开始。", mn: "Эхлэхийн тулд TOPIK түвшнээ сонгоно уу.",
    uz: "Boshlash uchun TOPIK darajangizni tanlang.", ne: "सुरु गर्न आफ्नो TOPIK तह छान्नुहोस्।",
    ja: "TOPIKレベルを選んで始めましょう。", th: "เลือกระดับ TOPIK ของคุณเพื่อเริ่มต้น",
    id: "Pilih level TOPIK Anda untuk memulai.", ru: "Выберите свой уровень TOPIK, чтобы начать.",
  },
  chooseLevel: {
    en: "Choose Level", vi: "Chọn cấp độ", zh: "选择级别", mn: "Түвшин сонгох",
    uz: "Darajani tanlash", ne: "तह छान्नुहोस्", ja: "レベルを選ぶ", th: "เลือกระดับ",
    id: "Pilih Level", ru: "Выбрать уровень",
  },

  // Section labels (Continue card / MY)
  sectionWords: {
    en: "Words", vi: "Từ vựng", zh: "单词", mn: "Үгс", uz: "So‘zlar",
    ne: "शब्दहरू", ja: "単語", th: "คำศัพท์", id: "Kosakata", ru: "Слова",
  },
  sectionSentences: {
    en: "Sentences", vi: "Câu", zh: "句子", mn: "Өгүүлбэрүүд", uz: "Gaplar",
    ne: "वाक्यहरू", ja: "文", th: "ประโยค", id: "Kalimat", ru: "Предложения",
  },
  sectionGrammar: {
    en: "Grammar", vi: "Ngữ pháp", zh: "语法", mn: "Дүрэм", uz: "Grammatika",
    ne: "व्याकरण", ja: "文法", th: "ไวยากรณ์", id: "Tata Bahasa", ru: "Грамматика",
  },
  sectionListening: {
    en: "Listening", vi: "Nghe", zh: "听力", mn: "Сонсох", uz: "Tinglash",
    ne: "सुन्ने", ja: "リスニング", th: "การฟัง", id: "Mendengarkan", ru: "Аудирование",
  },
  sectionReading: {
    en: "Reading", vi: "Đọc", zh: "阅读", mn: "Унших", uz: "O‘qish",
    ne: "पढ्ने", ja: "リーディング", th: "การอ่าน", id: "Membaca", ru: "Чтение",
  },
  sectionPractice: {
    en: "Practice", vi: "Luyện tập", zh: "练习", mn: "Дадлага", uz: "Mashq",
    ne: "अभ्यास", ja: "練習", th: "แบบฝึกหัด", id: "Latihan", ru: "Практика",
  },
  sectionWriting: {
    en: "Writing", vi: "Viết", zh: "写作", mn: "Бичих", uz: "Yozish",
    ne: "लेखन", ja: "ライティング", th: "การเขียน", id: "Menulis", ru: "Письмо",
  },
  sectionComplete: {
    en: "Complete", vi: "Hoàn thành", zh: "完成", mn: "Дуусгах", uz: "Yakunlash",
    ne: "पूरा", ja: "完了", th: "เสร็จสมบูรณ์", id: "Selesai", ru: "Завершено",
  },

  // Writing
  writingPlaceholder: {
    en: "Write your answer here...", vi: "Viết câu trả lời của bạn ở đây...",
    zh: "在这里写下你的答案……", mn: "Хариултаа энд бичнэ үү...",
    uz: "Javobingizni shu yerga yozing...", ne: "आफ्नो जवाफ यहाँ लेख्नुहोस्...",
    ja: "ここに答えを書いてください…", th: "เขียนคำตอบของคุณที่นี่...",
    id: "Tulis jawaban Anda di sini...", ru: "Напишите ваш ответ здесь...",
  },
  showSampleAnswer: {
    en: "Show Sample Answer", vi: "Xem câu trả lời mẫu", zh: "查看示例答案",
    mn: "Жишээ хариултыг харах", uz: "Namunaviy javobni ko‘rsatish",
    ne: "नमूना जवाफ देखाउनुहोस्", ja: "模範解答を見る", th: "ดูตัวอย่างคำตอบ",
    id: "Tampilkan Contoh Jawaban", ru: "Показать пример ответа",
  },
  hideSampleAnswer: {
    en: "Hide Sample Answer", vi: "Ẩn câu trả lời mẫu", zh: "隐藏示例答案",
    mn: "Жишээ хариултыг нуух", uz: "Namunaviy javobni yashirish",
    ne: "नमूना जवाफ लुकाउनुहोस्", ja: "模範解答を隠す", th: "ซ่อนตัวอย่างคำตอบ",
    id: "Sembunyikan Contoh Jawaban", ru: "Скрыть пример ответа",
  },
  sampleAnswerLabel: {
    en: "Sample Answer", vi: "Câu trả lời mẫu", zh: "示例答案", mn: "Жишээ хариулт",
    uz: "Namunaviy javob", ne: "नमूना जवाफ", ja: "模範解答", th: "ตัวอย่างคำตอบ",
    id: "Contoh Jawaban", ru: "Пример ответа",
  },
  keyPointLabel: {
    en: "Key Point", vi: "Điểm chính", zh: "要点", mn: "Гол санаа",
    uz: "Asosiy nuqta", ne: "मुख्य बुँदा", ja: "ポイント", th: "ประเด็นสำคัญ",
    id: "Poin Penting", ru: "Ключевой момент",
  },
  keywordsLabel: {
    en: "Keywords", vi: "Từ khóa", zh: "关键词", mn: "Түлхүүр үг",
    uz: "Kalit so‘zlar", ne: "मुख्य शब्दहरू", ja: "キーワード", th: "คำสำคัญ",
    id: "Kata Kunci", ru: "Ключевые слова",
  },

  // Listening / Reading / Practice
  listen: {
    en: "LISTEN", vi: "NGHE", zh: "听", mn: "СОНСОХ", uz: "TINGLANG",
    ne: "सुन्नुहोस्", ja: "きく", th: "ฟัง", id: "DENGARKAN", ru: "СЛУШАТЬ",
  },
  read: {
    en: "READ", vi: "ĐỌC", zh: "读", mn: "УНШИХ", uz: "O‘QING",
    ne: "पढ्नुहोस्", ja: "よむ", th: "อ่าน", id: "BACA", ru: "ЧИТАТЬ",
  },
  play: {
    en: "Play", vi: "Phát", zh: "播放", mn: "Тоглуулах", uz: "Ijro etish",
    ne: "बजाउनुहोस्", ja: "再生", th: "เล่นเสียง", id: "Putar", ru: "Воспроизвести",
  },
  questionLabel: {
    en: "Question", vi: "Câu hỏi", zh: "问题", mn: "Асуулт", uz: "Savol",
    ne: "प्रश्न", ja: "問題", th: "คำถาม", id: "Pertanyaan", ru: "Вопрос",
  },
  nextQuestion: {
    en: "Next Question", vi: "Câu hỏi tiếp theo", zh: "下一题", mn: "Дараагийн асуулт",
    uz: "Keyingi savol", ne: "अर्को प्रश्न", ja: "次の問題", th: "คำถามถัดไป",
    id: "Pertanyaan Berikutnya", ru: "Следующий вопрос",
  },
  seeResults: {
    en: "See Results", vi: "Xem kết quả", zh: "查看结果", mn: "Үр дүнг харах",
    uz: "Natijalarni ko‘rish", ne: "नतिजा हेर्नुहोस्", ja: "結果を見る", th: "ดูผลลัพธ์",
    id: "Lihat Hasil", ru: "Смотреть результаты",
  },
  practiceComplete: {
    en: "Practice Complete", vi: "Hoàn thành luyện tập", zh: "练习完成", mn: "Дадлага дууслаа",
    uz: "Mashq yakunlandi", ne: "अभ्यास पूरा भयो", ja: "練習完了", th: "ฝึกฝนเสร็จสิ้น",
    id: "Latihan Selesai", ru: "Практика завершена",
  },
  score: {
    en: "Score", vi: "Điểm số", zh: "得分", mn: "Оноо", uz: "Ball",
    ne: "स्कोर", ja: "スコア", th: "คะแนน", id: "Skor", ru: "Счёт",
  },
  accuracy: {
    en: "Accuracy", vi: "Độ chính xác", zh: "正确率", mn: "Оновчтой байдал",
    uz: "Aniqlik", ne: "शुद्धता", ja: "正答率", th: "ความแม่นยำ", id: "Akurasi", ru: "Точность",
  },
  finishStep: {
    en: "Finish Step", vi: "Hoàn tất STEP", zh: "完成步骤", mn: "Алхмыг дуусгах",
    uz: "Bosqichni yakunlash", ne: "स्टेप पूरा गर्नुहोस्", ja: "STEPを終える", th: "จบขั้นตอน",
    id: "Selesaikan Langkah", ru: "Завершить шаг",
  },

  // Complete screen
  stepComplete: {
    en: "STEP COMPLETE", vi: "HOÀN THÀNH STEP", zh: "步骤完成", mn: "АЛХАМ ДУУСЛАА",
    uz: "BOSQICH YAKUNLANDI", ne: "स्टेप पूरा भयो", ja: "STEP完了", th: "ขั้นตอนเสร็จสิ้น",
    id: "LANGKAH SELESAI", ru: "ШАГ ЗАВЕРШЁН",
  },
  greatJob: {
    en: "Great job! You completed this step.",
    vi: "Tuyệt vời! Bạn đã hoàn thành STEP này.",
    zh: "太棒了！你完成了这个步骤。",
    mn: "Гайхалтай! Та энэ алхмыг дуусгалаа.",
    uz: "Ajoyib! Siz bu bosqichni yakunladingiz.",
    ne: "बधाई छ! तपाईंले यो स्टेप पूरा गर्नुभयो।",
    ja: "よくできました！このSTEPを完了しました。",
    th: "เยี่ยมมาก! คุณทำขั้นตอนนี้เสร็จแล้ว",
    id: "Kerja bagus! Anda menyelesaikan langkah ini.",
    ru: "Отлично! Вы завершили этот шаг.",
  },
  practiceScore: {
    en: "Practice Score", vi: "Điểm luyện tập", zh: "练习得分", mn: "Дадлагын оноо",
    uz: "Mashq bali", ne: "अभ्यास स्कोर", ja: "練習スコア", th: "คะแนนแบบฝึกหัด",
    id: "Skor Latihan", ru: "Результат практики",
  },
  ofWord: {
    en: "of", vi: "trên", zh: "之", mn: "-с", uz: "dan", ne: "मध्ये",
    ja: "の", th: "จาก", id: "dari", ru: "из",
  },
  stepsWord: {
    en: "Steps", vi: "STEP", zh: "步骤", mn: "алхам", uz: "bosqich",
    ne: "स्टेप", ja: "STEP", th: "ขั้นตอน", id: "Langkah", ru: "шагов",
  },
  nextStep: {
    en: "Next Step", vi: "STEP tiếp theo", zh: "下一步骤", mn: "Дараагийн алхам",
    uz: "Keyingi bosqich", ne: "अर्को स्टेप", ja: "次のSTEP", th: "ขั้นตอนถัดไป",
    id: "Langkah Berikutnya", ru: "Следующий шаг",
  },
  review: {
    en: "Review", vi: "Ôn lại", zh: "回顾", mn: "Дахин үзэх", uz: "Takrorlash",
    ne: "पुनरावलोकन", ja: "復習", th: "ทบทวน", id: "Tinjau", ru: "Повторить",
  },
  homeButton: {
    en: "Home", vi: "Trang chủ", zh: "首页", mn: "Нүүр хуудас", uz: "Bosh sahifa",
    ne: "गृहपृष्ठ", ja: "ホーム", th: "หน้าแรก", id: "Beranda", ru: "Главная",
  },
  backToLevel: {
    en: "Back to Level", vi: "Quay lại cấp độ", zh: "返回级别", mn: "Түвшин рүү буцах",
    uz: "Darajaga qaytish", ne: "तहमा फर्कनुहोस्", ja: "レベルに戻る", th: "กลับไปที่ระดับ",
    id: "Kembali ke Level", ru: "Назад к уровню",
  },

  // Study
  studySubtitle: {
    en: "Continue your learning and review your progress.",
    vi: "Tiếp tục học và xem lại tiến độ của bạn.",
    zh: "继续学习并查看你的进度。",
    mn: "Сургалтаа үргэлжлүүлж, явцаа хянана уу.",
    uz: "O‘qishni davom ettiring va jarayoningizni ko‘ring.",
    ne: "आफ्नो सिकाइ जारी राख्नुहोस् र प्रगति हेर्नुहोस्।",
    ja: "学習を続けて、進捗を確認しましょう。",
    th: "เรียนต่อและตรวจสอบความคืบหน้าของคุณ",
    id: "Lanjutkan belajar dan tinjau kemajuan Anda.",
    ru: "Продолжайте обучение и отслеживайте прогресс.",
  },
  todaysReview: {
    en: "Today's Review", vi: "Ôn tập hôm nay", zh: "今日复习", mn: "Өнөөдрийн давталт",
    uz: "Bugungi takrorlash", ne: "आजको पुनरावलोकन", ja: "今日の復習", th: "ทบทวนวันนี้",
    id: "Tinjauan Hari Ini", ru: "Повторение на сегодня",
  },
  reviewPlaceholder: {
    en: "Review will appear here after you study.",
    vi: "Nội dung ôn tập sẽ xuất hiện sau khi bạn học.",
    zh: "学习后复习内容会显示在这里。",
    mn: "Суралцсаны дараа давталт энд гарч ирнэ.",
    uz: "Siz o‘qigandan so‘ng takrorlash shu yerda paydo bo‘ladi.",
    ne: "अध्ययन गरेपछि पुनरावलोकन यहाँ देखिनेछ।",
    ja: "学習後にここに復習内容が表示されます。",
    th: "การทบทวนจะปรากฏที่นี่หลังจากที่คุณเรียน",
    id: "Tinjauan akan muncul di sini setelah Anda belajar.",
    ru: "Повторение появится здесь после занятий.",
  },
  currentLevelTitle: {
    en: "Current Level", vi: "Cấp độ hiện tại", zh: "当前级别", mn: "Одоогийн түвшин",
    uz: "Joriy daraja", ne: "हालको तह", ja: "現在のレベル", th: "ระดับปัจจุบัน",
    id: "Level Saat Ini", ru: "Текущий уровень",
  },
  changeLevel: {
    en: "Change Level", vi: "Đổi cấp độ", zh: "更改级别", mn: "Түвшин солих",
    uz: "Darajani o‘zgartirish", ne: "तह परिवर्तन गर्नुहोस्", ja: "レベルを変更",
    th: "เปลี่ยนระดับ", id: "Ubah Level", ru: "Изменить уровень",
  },
  chooseYourLevelToStart: {
    en: "Choose your level to start learning.",
    vi: "Chọn cấp độ để bắt đầu học.", zh: "选择级别开始学习。",
    mn: "Суралцаж эхлэхийн тулд түвшнээ сонгоно уу.",
    uz: "O‘qishni boshlash uchun darajangizni tanlang.",
    ne: "सिक्न सुरु गर्न आफ्नो तह छान्नुहोस्।",
    ja: "学習を始めるにはレベルを選んでください。",
    th: "เลือกระดับของคุณเพื่อเริ่มเรียน",
    id: "Pilih level Anda untuk mulai belajar.",
    ru: "Выберите уровень, чтобы начать обучение.",
  },

  // MY
  guestLabel: {
    en: "Guest", vi: "Khách", zh: "访客", mn: "Зочин", uz: "Mehmon",
    ne: "पाहुना", ja: "ゲスト", th: "ผู้เยี่ยมชม", id: "Tamu", ru: "Гость",
  },
  guestNote: {
    en: "Your progress is saved on this device.",
    vi: "Tiến độ của bạn được lưu trên thiết bị này.",
    zh: "你的进度已保存在此设备上。",
    mn: "Таны явц энэ төхөөрөмжид хадгалагдана.",
    uz: "Sizning jarayoningiz shu qurilmada saqlanadi.",
    ne: "तपाईंको प्रगति यो उपकरणमा सुरक्षित छ।",
    ja: "学習の進捗はこの端末に保存されます。",
    th: "ความคืบหน้าของคุณถูกบันทึกไว้ในอุปกรณ์นี้",
    id: "Kemajuan Anda disimpan di perangkat ini.",
    ru: "Ваш прогресс сохраняется на этом устройстве.",
  },
  progressByLevel: {
    en: "Progress by Level", vi: "Tiến độ theo cấp độ", zh: "各级别进度",
    mn: "Түвшин тус бүрийн явц", uz: "Daraja bo‘yicha jarayon", ne: "तह अनुसार प्रगति",
    ja: "レベル別の進捗", th: "ความคืบหน้าตามระดับ", id: "Kemajuan per Level",
    ru: "Прогресс по уровням",
  },
  learningLanguageTitle: {
    en: "Learning Language", vi: "Ngôn ngữ học tập", zh: "学习语言", mn: "Сургалтын хэл",
    uz: "O‘quv tili", ne: "सिकाइ भाषा", ja: "学習言語", th: "ภาษาที่ใช้เรียน",
    id: "Bahasa Belajar", ru: "Язык обучения",
  },
  changeLanguage: {
    en: "Change Language", vi: "Đổi ngôn ngữ", zh: "更改语言", mn: "Хэл солих",
    uz: "Tilni o‘zgartirish", ne: "भाषा परिवर्तन गर्नुहोस्", ja: "言語を変更",
    th: "เปลี่ยนภาษา", id: "Ubah Bahasa", ru: "Изменить язык",
  },
  estimatedLevelTitle: {
    en: "Estimated Level", vi: "Trình độ ước tính", zh: "预估级别", mn: "Тооцоолсон түвшин",
    uz: "Taxminiy daraja", ne: "अनुमानित तह", ja: "推定レベル", th: "ระดับโดยประมาณ",
    id: "Perkiraan Level", ru: "Примерный уровень",
  },
  levelTestTitle: {
    en: "Level Test", vi: "Kiểm tra trình độ", zh: "级别测试", mn: "Түвшин тогтоох шалгалт",
    uz: "Daraja testi", ne: "तह परीक्षा", ja: "レベルテスト", th: "แบบทดสอบระดับ",
    id: "Tes Level", ru: "Тест на уровень",
  },
  findEstimated: {
    en: "Find your estimated TOPIK level.",
    vi: "Tìm trình độ TOPIK ước tính của bạn.",
    zh: "找出你的预估TOPIK级别。",
    mn: "Тооцоолсон TOPIK түвшнээ олж мэдээрэй.",
    uz: "Taxminiy TOPIK darajangizni aniqlang.",
    ne: "आफ्नो अनुमानित TOPIK तह पत्ता लगाउनुहोस्।",
    ja: "推定のTOPIKレベルを確認しましょう。",
    th: "ค้นหาระดับ TOPIK โดยประมาณของคุณ",
    id: "Temukan perkiraan level TOPIK Anda.",
    ru: "Узнайте свой примерный уровень TOPIK.",
  },
  recommendedWord: {
    en: "Recommended", vi: "Đề xuất", zh: "推荐", mn: "Санал болгож буй", uz: "Tavsiya etilgan",
    ne: "सिफारिस गरिएको", ja: "おすすめ", th: "แนะนำ", id: "Direkomendasikan", ru: "Рекомендовано",
  },
  retakeLevelTest: {
    en: "Retake Level Test", vi: "Làm lại bài kiểm tra", zh: "重新测试级别",
    mn: "Түвшин тогтоох шалгалтыг дахин өгөх", uz: "Testni qayta topshirish",
    ne: "फेरि परीक्षा दिनुहोस्", ja: "レベルテストを再受験", th: "ทำแบบทดสอบอีกครั้ง",
    id: "Ulangi Tes Level", ru: "Пройти тест заново",
  },
  studySummary: {
    en: "Study Summary", vi: "Tóm tắt học tập", zh: "学习概览", mn: "Сургалтын хураангуй",
    uz: "O‘quv xulosasi", ne: "अध्ययन सारांश", ja: "学習サマリー", th: "สรุปการเรียน",
    id: "Ringkasan Belajar", ru: "Итоги обучения",
  },
  completedStepsWord: {
    en: "Completed Steps", vi: "STEP đã hoàn thành", zh: "已完成步骤", mn: "Дууссан алхам",
    uz: "Bajarilgan bosqichlar", ne: "पूरा भएका स्टेप", ja: "完了したSTEP", th: "ขั้นตอนที่เสร็จแล้ว",
    id: "Langkah Selesai", ru: "Пройдено шагов",
  },
  currentLevelWord: {
    en: "Current Level", vi: "Cấp độ hiện tại", zh: "当前级别", mn: "Одоогийн түвшин",
    uz: "Joriy daraja", ne: "हालको तह", ja: "現在のレベル", th: "ระดับปัจจุบัน",
    id: "Level Saat Ini", ru: "Текущий уровень",
  },
  currentStepWord: {
    en: "Current Step", vi: "STEP hiện tại", zh: "当前步骤", mn: "Одоогийн алхам",
    uz: "Joriy bosqich", ne: "हालको स्टेप", ja: "現在のSTEP", th: "ขั้นตอนปัจจุบัน",
    id: "Langkah Saat Ini", ru: "Текущий шаг",
  },
  settingsTitle: {
    en: "Settings", vi: "Cài đặt", zh: "设置", mn: "Тохиргоо", uz: "Sozlamalar",
    ne: "सेटिङहरू", ja: "設定", th: "การตั้งค่า", id: "Pengaturan", ru: "Настройки",
  },
  languageWord: {
    en: "Language", vi: "Ngôn ngữ", zh: "语言", mn: "Хэл", uz: "Til",
    ne: "भाषा", ja: "言語", th: "ภาษา", id: "Bahasa", ru: "Язык",
  },
  changeWord: {
    en: "Change", vi: "Đổi", zh: "更改", mn: "Солих", uz: "O‘zgartirish",
    ne: "परिवर्तन", ja: "変更", th: "เปลี่ยน", id: "Ubah", ru: "Изменить",
  },
  notifications: {
    en: "Notifications", vi: "Thông báo", zh: "通知", mn: "Мэдэгдэл", uz: "Bildirishnomalar",
    ne: "सूचनाहरू", ja: "通知", th: "การแจ้งเตือน", id: "Notifikasi", ru: "Уведомления",
  },
  comingSoon: {
    en: "Coming Soon", vi: "Sắp ra mắt", zh: "即将推出", mn: "Тун удахгүй",
    uz: "Tez orada", ne: "छिट्टै आउँदैछ", ja: "近日公開", th: "เร็วๆ นี้",
    id: "Segera Hadir", ru: "Скоро",
  },
  account: {
    en: "Account", vi: "Tài khoản", zh: "账户", mn: "Бүртгэл", uz: "Hisob",
    ne: "खाता", ja: "アカウント", th: "บัญชี", id: "Akun", ru: "Аккаунт",
  },
  availableAfterSignIn: {
    en: "Available after sign in", vi: "Có sau khi đăng nhập", zh: "登录后可用",
    mn: "Нэвтэрсний дараа боломжтой", uz: "Tizimga kirgandan so‘ng mavjud",
    ne: "साइन इन पछि उपलब्ध", ja: "サインイン後に利用可能", th: "ใช้ได้หลังจากเข้าสู่ระบบ",
    id: "Tersedia setelah masuk", ru: "Доступно после входа",
  },
  signInNote: {
    en: "Save your progress across devices — sign-in will be available soon.",
    vi: "Lưu tiến độ trên nhiều thiết bị — tính năng đăng nhập sẽ sớm ra mắt.",
    zh: "跨设备保存进度——登录功能即将推出。",
    mn: "Явцаа бусад төхөөрөмж дээр хадгал — нэвтрэх боломж удахгүй нэмэгдэнэ.",
    uz: "Jarayoningizni turli qurilmalarda saqlang — tizimga kirish tez orada.",
    ne: "आफ्नो प्रगति विभिन्न उपकरणहरूमा सुरक्षित गर्नुहोस् — साइन इन छिट्टै आउँदैछ।",
    ja: "複数の端末で進捗を保存 — サインイン機能は近日公開予定です。",
    th: "บันทึกความคืบหน้าข้ามอุปกรณ์ — ฟีเจอร์เข้าสู่ระบบจะเปิดให้ใช้เร็วๆ นี้",
    id: "Simpan kemajuan Anda di berbagai perangkat — masuk akan segera tersedia.",
    ru: "Сохраняйте прогресс на разных устройствах — вход появится скоро.",
  },

  // Test
  testSubtitle: {
    en: "Check your level and practice for TOPIK.",
    vi: "Kiểm tra trình độ và luyện tập cho TOPIK.",
    zh: "测试你的水平并练习TOPIK。",
    mn: "Түвшнээ шалгаад TOPIK-д бэлдээрэй.",
    uz: "Darajangizni tekshiring va TOPIKka mashq qiling.",
    ne: "आफ्नो तह जाँच्नुहोस् र TOPIK अभ्यास गर्नुहोस्।",
    ja: "レベルを確認してTOPIKの練習をしましょう。",
    th: "ตรวจสอบระดับและฝึกฝนสำหรับ TOPIK",
    id: "Cek level dan berlatih untuk TOPIK.",
    ru: "Проверьте уровень и потренируйтесь к TOPIK.",
  },
  newToTopik: {
    en: "New to TOPIK? Learn what TOPIK is.",
    vi: "Mới biết đến TOPIK? Tìm hiểu TOPIK là gì.",
    zh: "刚接触TOPIK？了解一下TOPIK是什么。",
    mn: "TOPIK-тэй анх удаа танилцаж байна уу? TOPIK гэж юу болохыг үзээрэй.",
    uz: "TOPIK bilan yangi tanishyapsizmi? TOPIK nima ekanini bilib oling.",
    ne: "TOPIK मा नयाँ हुनुहुन्छ? TOPIK के हो जान्नुहोस्।",
    ja: "TOPIKが初めての方はこちら。TOPIKについて知る。",
    th: "เพิ่งรู้จัก TOPIK? เรียนรู้ว่า TOPIK คืออะไร",
    id: "Baru mengenal TOPIK? Pelajari apa itu TOPIK.",
    ru: "Впервые слышите о TOPIK? Узнайте, что это такое.",
  },
  miniTest: {
    en: "Mini Test", vi: "Kiểm tra ngắn", zh: "小测验", mn: "Бяцхан шалгалт",
    uz: "Mini test", ne: "मिनी परीक्षा", ja: "ミニテスト", th: "แบบทดสอบสั้น",
    id: "Tes Mini", ru: "Мини-тест",
  },
  miniTestDesc: {
    en: "Quick practice with 10 questions.", vi: "Luyện tập nhanh với 10 câu hỏi.",
    zh: "10道题快速练习。", mn: "10 асуулттай хурдан дадлага.",
    uz: "10 ta savol bilan tezkor mashq.", ne: "१० प्रश्नसँग द्रुत अभ्यास।",
    ja: "10問のクイック練習。", th: "ฝึกฝนเร็วๆ ด้วย 10 คำถาม", id: "Latihan cepat dengan 10 soal.",
    ru: "Быстрая практика — 10 вопросов.",
  },
  mockTopik1: {
    en: "TOPIK I Mock Test", vi: "Đề thi thử TOPIK I", zh: "TOPIK I 模拟考试",
    mn: "TOPIK I дадлага шалгалт", uz: "TOPIK I sinov testi", ne: "TOPIK I नमूना परीक्षा",
    ja: "TOPIK I 模擬試験", th: "ข้อสอบจำลอง TOPIK I", id: "Ujian Simulasi TOPIK I",
    ru: "Пробный тест TOPIK I",
  },
  mockTopik1Desc: {
    en: "Practice for TOPIK I.", vi: "Luyện tập cho TOPIK I.", zh: "为TOPIK I做练习。",
    mn: "TOPIK I-д зориулсан дадлага.", uz: "TOPIK I uchun mashq.", ne: "TOPIK I का लागि अभ्यास।",
    ja: "TOPIK Iの練習。", th: "ฝึกฝนสำหรับ TOPIK I", id: "Latihan untuk TOPIK I.",
    ru: "Практика для TOPIK I.",
  },
  mockTopik2: {
    en: "TOPIK II Mock Test", vi: "Đề thi thử TOPIK II", zh: "TOPIK II 模拟考试",
    mn: "TOPIK II дадлага шалгалт", uz: "TOPIK II sinov testi", ne: "TOPIK II नमूना परीक्षा",
    ja: "TOPIK II 模擬試験", th: "ข้อสอบจำลอง TOPIK II", id: "Ujian Simulasi TOPIK II",
    ru: "Пробный тест TOPIK II",
  },
  mockTopik2Desc: {
    en: "Practice for TOPIK II.", vi: "Luyện tập cho TOPIK II.", zh: "为TOPIK II做练习。",
    mn: "TOPIK II-д зориулсан дадлага.", uz: "TOPIK II uchun mashq.", ne: "TOPIK II का लागि अभ्यास।",
    ja: "TOPIK IIの練習。", th: "ฝึกฝนสำหรับ TOPIK II", id: "Latihan untuk TOPIK II.",
    ru: "Практика для TOPIK II.",
  },
  wrongAnswers: {
    en: "Wrong Answers", vi: "Câu trả lời sai", zh: "错题本", mn: "Буруу хариултууд",
    uz: "Noto‘g‘ri javoblar", ne: "गलत उत्तरहरू", ja: "間違えた問題", th: "คำตอบที่ผิด",
    id: "Jawaban Salah", ru: "Ошибки",
  },
  wrongAnswersDesc: {
    en: "Review questions you answered incorrectly.",
    vi: "Ôn lại các câu bạn trả lời sai.", zh: "复习你答错的题目。",
    mn: "Буруу хариулсан асуултуудаа дахин үзээрэй.",
    uz: "Noto‘g‘ri javob bergan savollaringizni qayta ko‘ring.",
    ne: "गलत जवाफ दिएका प्रश्नहरू पुनरावलोकन गर्नुहोस्।",
    ja: "間違えた問題を復習しましょう。", th: "ทบทวนคำถามที่คุณตอบผิด",
    id: "Tinjau kembali soal yang Anda jawab salah.", ru: "Повторите вопросы, на которые вы ответили неверно.",
  },
  writingPractice: {
    en: "Writing Practice", vi: "Luyện viết", zh: "写作练习", mn: "Бичгийн дадлага",
    uz: "Yozish mashqi", ne: "लेखन अभ्यास", ja: "ライティング練習", th: "ฝึกเขียน",
    id: "Latihan Menulis", ru: "Практика письма",
  },
  writingPracticeDesc: {
    en: "Practice TOPIK writing.", vi: "Luyện viết cho TOPIK.", zh: "练习TOPIK写作。",
    mn: "TOPIK-ийн бичгийн хэсэгт дадлага хийх.", uz: "TOPIK yozuv qismiga mashq qiling.",
    ne: "TOPIK लेखन अभ्यास गर्नुहोस्।", ja: "TOPIKのライティングを練習。",
    th: "ฝึกเขียนสำหรับ TOPIK", id: "Berlatih menulis untuk TOPIK.", ru: "Практикуйте письмо для TOPIK.",
  },
  retakeTest: {
    en: "Retake Test", vi: "Làm lại bài kiểm tra", zh: "重新测试", mn: "Дахин шалгалт өгөх",
    uz: "Testni qayta topshirish", ne: "फेरि परीक्षा दिनुहोस्", ja: "再テスト", th: "ทำแบบทดสอบอีกครั้ง",
    id: "Ulangi Tes", ru: "Пройти тест заново",
  },

  // Level difficulty descriptions
  levelBeginner: {
    en: "Beginner", vi: "Sơ cấp", zh: "初级", mn: "Анхан шат", uz: "Boshlang‘ich",
    ne: "प्रारम्भिक", ja: "初級", th: "ระดับต้น", id: "Pemula", ru: "Начальный",
  },
  levelElementary: {
    en: "Elementary", vi: "Cơ bản", zh: "基础级", mn: "Бага шат", uz: "Boshlang‘ich-o‘rta",
    ne: "आधारभूत", ja: "初中級", th: "ระดับพื้นฐาน", id: "Dasar", ru: "Элементарный",
  },
  levelIntermediate: {
    en: "Intermediate", vi: "Trung cấp", zh: "中级", mn: "Дунд шат", uz: "O‘rta",
    ne: "मध्यम", ja: "中級", th: "ระดับกลาง", id: "Menengah", ru: "Средний",
  },
  levelUpperIntermediate: {
    en: "Upper Intermediate", vi: "Trung cao cấp", zh: "中高级", mn: "Дунд ахисан шат",
    uz: "Yuqori o‘rta", ne: "माथिल्लो मध्यम", ja: "中上級", th: "ระดับกลางสูง",
    id: "Menengah Atas", ru: "Выше среднего",
  },
  levelAdvanced: {
    en: "Advanced", vi: "Cao cấp", zh: "高级", mn: "Ахисан шат", uz: "Yuqori",
    ne: "उच्च", ja: "上級", th: "ระดับสูง", id: "Lanjutan", ru: "Продвинутый",
  },

  // Parts of speech
  posNoun: {
    en: "Noun", vi: "Danh từ", zh: "名词", mn: "Нэр үг", uz: "Ot",
    ne: "नाम", ja: "名詞", th: "คำนาม", id: "Kata Benda", ru: "Существительное",
  },
  posVerb: {
    en: "Verb", vi: "Động từ", zh: "动词", mn: "Үйл үг", uz: "Fe’l",
    ne: "क्रिया", ja: "動詞", th: "คำกริยา", id: "Kata Kerja", ru: "Глагол",
  },
  posAdjective: {
    en: "Adjective", vi: "Tính từ", zh: "形容词", mn: "Тэмдэг нэр", uz: "Sifat",
    ne: "विशेषण", ja: "形容詞", th: "คำคุณศัพท์", id: "Kata Sifat", ru: "Прилагательное",
  },
  keyExpression: {
    en: "Key expression", vi: "Cấu trúc chính", zh: "重点表达", mn: "Гол хэллэг",
    uz: "Asosiy ibora", ne: "मुख्य अभिव्यक्ति", ja: "キー表現", th: "สำนวนสำคัญ",
    id: "Ungkapan Kunci", ru: "Ключевое выражение",
  },
  grammarLabel: {
    en: "Grammar", vi: "Ngữ pháp", zh: "语法", mn: "Дүрэм", uz: "Grammatika",
    ne: "व्याकरण", ja: "文法", th: "ไวยากรณ์", id: "Tata Bahasa", ru: "Грамматика",
  },
  meaning: {
    en: "Meaning", vi: "Ý nghĩa", zh: "含义", mn: "Утга", uz: "Ma’nosi",
    ne: "अर्थ", ja: "意味", th: "ความหมาย", id: "Arti", ru: "Значение",
  },
  explanation: {
    en: "Explanation", vi: "Giải thích", zh: "解释", mn: "Тайлбар", uz: "Tushuntirish",
    ne: "व्याख्या", ja: "説明", th: "คำอธิบาย", id: "Penjelasan", ru: "Объяснение",
  },
  examples: {
    en: "Examples", vi: "Ví dụ", zh: "例句", mn: "Жишээ", uz: "Misollar",
    ne: "उदाहरणहरू", ja: "例文", th: "ตัวอย่าง", id: "Contoh", ru: "Примеры",
  },
  myPageSubtitle: {
    en: "Your learning progress and settings.",
    vi: "Tiến độ học tập và cài đặt của bạn.",
    zh: "你的学习进度和设置。",
    mn: "Таны сургалтын явц ба тохиргоо.",
    uz: "Sizning o‘quv jarayoningiz va sozlamalaringiz.",
    ne: "तपाईंको सिकाइ प्रगति र सेटिङहरू।",
    ja: "あなたの学習進捗と設定。",
    th: "ความคืบหน้าการเรียนและการตั้งค่าของคุณ",
    id: "Kemajuan belajar dan pengaturan Anda.",
    ru: "Ваш прогресс обучения и настройки.",
  },
} as const;

export function t(key: UiTextKey, lang: string): string {
  const entry = UI_TEXT[key] as Record<string, string>;
  return entry[lang] ?? entry.en;
}
