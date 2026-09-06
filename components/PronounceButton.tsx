type PronounceButtonProps = {
  label?: string;
};

export default function PronounceButton({
  label = "Play pronunciation",
}: PronounceButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => {}}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted"
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
    </button>
  );
}
