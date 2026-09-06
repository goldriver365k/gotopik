import Card from "@/components/Card";
import type { Grammar } from "@/data/sampleGrammar";
import { t } from "@/lib/i18n";

type GrammarCardProps = {
  grammar: Grammar;
  lang: string;
};

function pick(map: Record<string, string>, lang: string): string {
  return map[lang] ?? map.en;
}

function HighlightedKorean({ text, pattern }: { text: string; pattern: string }) {
  const matchText = pattern.replace(/^-/, "");
  const index = text.indexOf(matchText);

  if (index === -1) {
    return <>{text}</>;
  }

  return (
    <>
      {text.slice(0, index)}
      <span className="font-bold text-mint-dark">{matchText}</span>
      {text.slice(index + matchText.length)}
    </>
  );
}

export default function GrammarCard({ grammar, lang }: GrammarCardProps) {
  const meaning = pick(grammar.meanings, lang);
  const explanation = pick(grammar.explanations, lang);

  return (
    <Card className="flex flex-col gap-4">
      <div>
        <span className="rounded-full bg-mint-light px-2 py-0.5 text-[11px] font-semibold text-mint-dark">
          {t("grammarLabel", lang)}
        </span>
        <p className="mt-2 text-2xl font-black text-foreground">
          {grammar.pattern}
        </p>
      </div>

      <div>
        <p className="text-xs font-semibold text-muted">{t("meaning", lang)}</p>
        <p className="mt-1 text-sm font-bold text-mint-dark">{meaning}</p>
      </div>

      <div className="border-t border-border pt-3">
        <p className="text-xs font-semibold text-muted">
          {t("explanation", lang)}
        </p>
        <p className="mt-1 text-sm text-foreground">{explanation}</p>
      </div>

      <div className="border-t border-border pt-3">
        <p className="mb-2 text-xs font-semibold text-muted">
          {t("examples", lang)}
        </p>
        <div className="flex flex-col gap-3">
          {grammar.examples.map((example) => (
            <div key={example.korean}>
              <p className="text-sm font-semibold text-foreground">
                <HighlightedKorean text={example.korean} pattern={grammar.pattern} />
              </p>
              <p className="text-sm text-muted">
                {pick(example.translations, lang)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
