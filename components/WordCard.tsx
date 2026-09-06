import Card from "@/components/Card";
import PronounceButton from "@/components/PronounceButton";
import type { Word } from "@/data/sampleWords";
import { t, type UiTextKey } from "@/lib/i18n";

type WordCardProps = {
  word: Word;
  lang: string;
};

const PART_OF_SPEECH_KEY: Record<string, UiTextKey> = {
  noun: "posNoun",
  verb: "posVerb",
  adjective: "posAdjective",
};

function pick(map: Record<string, string>, lang: string): string {
  return map[lang] ?? map.en;
}

export default function WordCard({ word, lang }: WordCardProps) {
  const translation = pick(word.translations, lang);
  const exampleTranslation = pick(word.exampleTranslations, lang);
  const posKey = PART_OF_SPEECH_KEY[word.partOfSpeech];
  const partOfSpeech = posKey ? t(posKey, lang) : word.partOfSpeech;

  return (
    <Card className="flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-black text-foreground">
              {word.korean}
            </span>
            <span className="rounded-full bg-mint-light px-2 py-0.5 text-[11px] font-semibold text-mint-dark">
              {partOfSpeech}
            </span>
          </div>
          <p className="mt-1 text-sm font-medium text-mint-dark">
            {translation}
          </p>
        </div>

        <PronounceButton />
      </div>

      <div className="border-t border-border pt-3">
        <p className="text-sm text-foreground">{word.example}</p>
        <p className="mt-1 text-sm text-muted">{exampleTranslation}</p>
      </div>
    </Card>
  );
}
