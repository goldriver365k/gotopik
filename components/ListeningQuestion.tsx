import Card from "@/components/Card";
import ListenButton from "@/components/ListenButton";
import QuizQuestion from "@/components/QuizQuestion";
import type { ListeningQuestionData } from "@/data/sampleListening";
import { t as translate } from "@/lib/i18n";

type ListeningQuestionProps = {
  data: ListeningQuestionData;
  lang: string;
};

function pick(data: ListeningQuestionData, lang: string) {
  return data.translations[lang] ?? data.translations.en;
}

export default function ListeningQuestion({ data, lang }: ListeningQuestionProps) {
  const translation = pick(data, lang);

  return (
    <Card className="flex flex-col gap-4">
      <div>
        <p className="text-xs font-semibold text-muted">
          {translate("listen", lang)}
        </p>
        <ListenButton lang={lang} />
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
