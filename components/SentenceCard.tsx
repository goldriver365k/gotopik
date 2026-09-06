import Card from "@/components/Card";
import PronounceButton from "@/components/PronounceButton";
import type { Sentence } from "@/data/sampleSentences";
import { t } from "@/lib/i18n";

type SentenceCardProps = {
  sentence: Sentence;
  lang: string;
};

function pick(map: Record<string, string>, lang: string): string {
  return map[lang] ?? map.en;
}

export default function SentenceCard({ sentence, lang }: SentenceCardProps) {
  const translation = pick(sentence.translations, lang);
  const matchText = sentence.keyExpression.replace(/^-/, "");
  const highlightIndex = sentence.korean.indexOf(matchText);

  return (
    <Card className="flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <p className="text-lg font-black leading-snug text-foreground">
          {highlightIndex === -1 ? (
            sentence.korean
          ) : (
            <>
              {sentence.korean.slice(0, highlightIndex)}
              <span className="font-black text-mint-dark">{matchText}</span>
              {sentence.korean.slice(highlightIndex + matchText.length)}
            </>
          )}
        </p>
        <PronounceButton label="Play sentence" />
      </div>

      <p className="text-sm text-muted">{translation}</p>

      <div className="border-t border-border pt-3">
        <p className="text-xs font-semibold text-muted">
          {t("keyExpression", lang)}
        </p>
        <p className="mt-1 text-sm font-bold text-mint-dark">
          {sentence.keyExpression}
        </p>
      </div>

      {sentence.relatedWords.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {sentence.relatedWords.map((word) => (
            <span
              key={word}
              className="rounded-full bg-mint-light px-2 py-0.5 text-[11px] font-semibold text-mint-dark"
            >
              {word}
            </span>
          ))}
        </div>
      ) : null}
    </Card>
  );
}
