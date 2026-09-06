import Link from "next/link";
import Header from "@/components/Header";
import Card from "@/components/Card";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";

export default function AboutTopikPage() {
  return (
    <>
      <Header title="What is TOPIK?" />
      <main className="flex flex-1 flex-col gap-6 px-5 py-6">
        <div className="flex flex-col gap-3 text-sm text-foreground">
          <p>
            TOPIK (Test of Proficiency in Korean) is a Korean language
            proficiency test for non-native Korean speakers.
          </p>
          <p>
            It evaluates Korean language proficiency and is commonly used
            when studying, working, or living in Korea.
          </p>
        </div>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold text-foreground">TOPIK Levels</h2>
          <Card className="flex flex-col gap-1">
            <p className="text-sm font-bold text-mint-dark">TOPIK I</p>
            <p className="text-sm text-muted">Level 1 · Level 2</p>
          </Card>
          <Card className="flex flex-col gap-1">
            <p className="text-sm font-bold text-mint-dark">TOPIK II</p>
            <p className="text-sm text-muted">
              Level 3 · Level 4 · Level 5 · Level 6
            </p>
          </Card>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold text-foreground">
            Why do I need TOPIK?
          </h2>
          <Card>
            <p className="mb-2 text-sm text-muted">
              TOPIK scores may be useful for:
            </p>
            <ul className="flex flex-col gap-1.5 text-sm text-foreground">
              <li>• Applying to Korean universities or graduate schools</li>
              <li>• Scholarships and academic programs</li>
              <li>• Employment in Korea or Korean companies</li>
              <li>
                • Visa or residency-related requirements in some situations
              </li>
              <li>• Measuring Korean proficiency</li>
              <li>• Setting a clear learning goal</li>
            </ul>
            <p className="mt-3 text-xs text-muted">
              Requirements vary by institution or program — TOPIK is not
              always mandatory.
            </p>
          </Card>
        </section>

        <Card className="flex flex-col gap-4 text-center">
          <p className="text-sm font-bold text-foreground">
            GO TOPIK helps you prepare from Level 1 to Level 6 in your own
            language.
          </p>
          <div className="flex flex-col gap-3">
            <Link href="/home">
              <PrimaryButton fullWidth>Start Learning</PrimaryButton>
            </Link>
            <Link href="/diagnostic">
              <SecondaryButton fullWidth>Check My Level</SecondaryButton>
            </Link>
          </div>
        </Card>
      </main>
    </>
  );
}
