import { createFileRoute } from "@tanstack/react-router";
import { Clock3, Mic, ScrollText, Users } from "lucide-react";
import { ACTIVITY_STEPS, CLOSING_SPEECH, OPENING_SPEECH } from "@/lib/sim-data";
import { SectionHeading } from "@/components/sim-bits";

export const Route = createFileRoute("/guide")({
  head: () => ({
    meta: [
      { title: "Presenter Guide — Fraud Alert Room" },
      {
        name: "description",
        content:
          "Opening and closing speeches, a five-step run-of-show and timing for presenting the Fraud Alert Room role simulation.",
      },
      { property: "og:title", content: "Presenter Guide — Fraud Alert Room" },
      {
        property: "og:description",
        content:
          "Everything a presenter needs to run the Fraud Alert Room activity: script, timing and role notes.",
      },
    ],
  }),
  component: Guide,
});

const totalMinutes = ACTIVITY_STEPS.reduce((sum, s) => sum + s.minutes, 0);

function Guide() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:py-20">
      <SectionHeading
        eyebrow="For the presenter"
        title="Presenter guide"
        description={`A ${totalMinutes}-minute run-of-show, with a script for the open and close.`}
      />

      <section className="mt-12">
        <div className="mb-4 flex items-center gap-2">
          <Clock3 className="size-4 text-secondary" />
          <h2 className="font-display text-lg font-bold">Run of show</h2>
        </div>
        <div className="surface-card divide-y divide-border overflow-hidden">
          {ACTIVITY_STEPS.map((step, i) => (
            <div key={step.title} className="flex items-start gap-4 p-5">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-xs font-bold text-primary">
                {i + 1}
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold">{step.title}</h3>
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    {step.minutes} min
                  </span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-4 flex items-center gap-2">
          <Mic className="size-4 text-secondary" />
          <h2 className="font-display text-lg font-bold">Opening speech</h2>
        </div>
        <SpeechCard text={OPENING_SPEECH} />
      </section>

      <section className="mt-12">
        <div className="mb-4 flex items-center gap-2">
          <ScrollText className="size-4 text-secondary" />
          <h2 className="font-display text-lg font-bold">Closing speech</h2>
        </div>
        <SpeechCard text={CLOSING_SPEECH} />
      </section>

      <section className="mt-12">
        <div className="mb-4 flex items-center gap-2">
          <Users className="size-4 text-secondary" />
          <h2 className="font-display text-lg font-bold">Room setup</h2>
        </div>
        <div className="surface-card p-6 text-sm leading-relaxed text-muted-foreground">
          Five roles: Bank A (payment monitoring), Bank B (location monitoring), Bank C (transaction
          velocity) and Bank D (customer behaviour), plus one Fraud Analyst who coordinates the room
          from the Collaboration page. Each bank plays on their own device, reviews five
          transactions privately, and only shares a single fraud indicator — never their raw
          transaction list.
        </div>
      </section>
    </div>
  );
}

function SpeechCard({ text }: { text: string }) {
  const paragraphs = text.split("\n\n");
  return (
    <div className="surface-card space-y-4 p-6 text-sm leading-relaxed text-muted-foreground sm:p-8">
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}
