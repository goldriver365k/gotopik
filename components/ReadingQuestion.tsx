import Card from "@/components/Card";
import QuizQuestion from "@/components/QuizQuestion";
import type { ReadingQuestionData } from "@/data/sampleReading";
import { t as translate } from "@/lib/i18n";

type ReadingQuestionProps = {
  data: ReadingQuestionData;
  lang: string;
};

function pick(data: ReadingQuestionData, lang: string) {
  return data.translations[lang] ?? data.translations.en;
}

export default function ReadingQuestion({ data, lang }: ReadingQuestionProps) {
  const translation = pick(data, lang);

  return (
    <Card className="flex flex-col gap-4">
      <div>
        <p className="text-xs font-semibold text-muted">
          {translate("read", lang)}
        </p>
        <p className="mt-2 whitespace-pre-line text-base leading-8 text-foreground">
          {data.passage}
        </p>
      </div>

      <div className="border-t border-border pt-3">
        <p className="text-base font-bold text-foreground">{data.question}</p>
        <p className="mt-1 text-sm text-muted">{translation.question}</p>
      </div>

      <QuizQuestion
        options={data.options}
        correctAnswer={data.correctAnswer}
        explanation={translation.explanation}
        lang={lang}
      />
    </Card>
  );
}
