import Link from "next/link";
import type { ReactNode } from "react";
import Card from "@/components/Card";
import { t } from "@/lib/i18n";

type TestFeatureCardProps = {
  title: string;
  description: string;
  href?: string;
  extra?: ReactNode;
  lang: string;
};

export default function TestFeatureCard({
  title,
  description,
  href,
  extra,
  lang,
}: TestFeatureCardProps) {
  const content = (
    <Card className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <p className="text-base font-bold text-foreground">{title}</p>
        {!href ? (
          <span className="rounded-full bg-border px-2 py-0.5 text-[11px] font-semibold text-muted">
            {t("comingSoon", lang)}
          </span>
        ) : null}
      </div>
      <p className="text-sm text-muted">{description}</p>
      {extra}
    </Card>
  );

  if (!href) return content;

  return <Link href={href}>{content}</Link>;
}
