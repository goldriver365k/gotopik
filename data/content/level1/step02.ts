// TOPIK 1 STEP 2 — minimal test data only, not real curriculum yet.
// Deliberately different from STEP 1 (own title, own word) and mostly
// empty, to prove STEP-specific content loads correctly without STEP 1's
// sample data being auto-cloned onto every STEP.
import type { StepContent } from "@/types/content";

export const STEP_1_2: StepContent = {
  level: 1,
  step: 2,
  title: "가족 (Family)",
  words: [
    {
      id: "L1-S2-W01",
      korean: "가족",
      partOfSpeech: "noun",
      translations: {
        en: "family", vi: "gia đình", zh: "家人", mn: "гэр бүл", uz: "oila",
        ne: "परिवार", ja: "家族", th: "ครอบครัว", id: "keluarga", ru: "семья",
      },
      example: "저는 가족과 살아요.",
      exampleTranslations: {
        en: "I live with my family.",
        vi: "Tôi sống với gia đình.",
        zh: "我和家人一起住。",
        mn: "Би гэр бүлтэйгээ амьдардаг.",
        uz: "Men oilam bilan yashayman.",
        ne: "म परिवारसँग बस्छु।",
        ja: "私は家族と住んでいます。",
        th: "ฉันอาศัยอยู่กับครอบครัว",
        id: "Saya tinggal bersama keluarga.",
        ru: "Я живу с семьёй.",
      },
      audioUrl: null,
    },
  ],
  sentences: [],
  grammar: [],
  listening: [],
  reading: [],
  practice: [],
};
