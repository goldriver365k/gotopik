export type LanguageOption = {
  code: string;
  label: string;
};

export const LEARNING_LANGUAGE_STORAGE_KEY = "learningLanguage";

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: "en", label: "English" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "zh", label: "中文" },
  { code: "mn", label: "Монгол" },
  { code: "uz", label: "O‘zbek" },
  { code: "ne", label: "नेपाली" },
  { code: "ja", label: "日本語" },
  { code: "th", label: "ไทย" },
  { code: "id", label: "Bahasa Indonesia" },
  { code: "ru", label: "Русский" },
];

export function getSavedLanguage(): string {
  if (typeof window === "undefined") return "en";
  return localStorage.getItem(LEARNING_LANGUAGE_STORAGE_KEY) ?? "en";
}
