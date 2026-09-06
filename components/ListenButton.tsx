import SecondaryButton from "@/components/SecondaryButton";
import { t } from "@/lib/i18n";

type ListenButtonProps = {
  lang: string;
};

export default function ListenButton({ lang }: ListenButtonProps) {
  return (
    <SecondaryButton
      type="button"
      onClick={() => {}}
      className="mt-2 flex items-center justify-center gap-2"
      fullWidth
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 5 6 9H3v6h3l5 4V5Z" />
        <path d="M16 8.5a5 5 0 0 1 0 7" />
      </svg>
      {t("play", lang)}
    </SecondaryButton>
  );
}
