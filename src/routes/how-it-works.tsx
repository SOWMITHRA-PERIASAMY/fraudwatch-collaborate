import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Building2, Lock, Share2, ShieldCheck } from "lucide-react";
import { BANKS, HOW_IT_WORKS } from "@/lib/sim-data";
import { BankIcon, SectionHeading } from "@/components/sim-bits";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Fraud Alert Room" },
      {
        name: "description",
        content:
          "Four steps: analyse locally, detect patterns, share fraud indicators instead of raw records, and collaborate on a stronger fraud alert.",
      },
      { property: "og:title", content: "How It Works — Fraud Alert Room" },
      {
        property: "og:description",
        content:
          "The federated learning idea explained in four classroom-friendly steps for the Fraud Alert Room simulation.",
      },
    ],
  }),
  component: HowItWorks,
});

const CHAIN = [
  "LOCAL DATA",
  "LOCAL ANALYSIS",
  "MODEL / FRAUD INSIGHT",
  "SHARED INTELLIGENCE",
  "COLLABORATIVE DETECTION",
];

function HowItWorks() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
      <SectionHeading
        eyebrow="The concept"
        title="How the Fraud Alert Room works"
        description="Each bank keeps its own data. Only the learning travels."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-4 sm:grid-cols-2">
        {HOW_IT_WORKS.map((s, i) => (
          <div
            key={s.step}
            className="surface-card lift-hover relative overflow-hidden p-6 animate-[rise-in_0.6s_cubic-bezier(0.22,1,0.36,1)_both]"
            style={{ animationDelay: `${i * 90}ms` }}
          >
            <span className="absolute right-4 top-3 font-display text-5xl font-bold text-muted/70">
              {i + 1}
            </span>
            <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              {[<Building2 key="a" className="size-5" />, <ShieldCheck key="b" className="size-5" />, <Share2 key="c" className="size-5" />, <ArrowRight key="d" className="size-5" />][i]}
            </span>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary">
              {s.step}
            </p>
            <h3 className="mt-1 text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="surface-card mt-8 flex gap-3 border-l-4 border-l-accent p-5">
        <Lock className="mt-0.5 size-5 shrink-0 text-accent" />
        <p className="text-sm leading-relaxed text-muted-foreground">
          In real federated learning, participating organisations can train local models and share
          model updates or aggregated information instead of centralising raw data.
        </p>
      </div>

      <section className="mt-16">
        <SectionHeading
          eyebrow="Who does what"
          title="The four monitoring roles"
          description="Every bank sees only one dimension of the fraudster's behaviour."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BANKS.map((b) => (
            <div key={b.id} className="surface-card p-5">
              <BankIcon bank={b} className="size-5 text-secondary" />
              <h3 className="mt-3 font-display text-base font-bold">
                {b.name.toUpperCase()} — {b.focus}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.tagline}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading eyebrow="The chain" title="From local data to a collaborative decision" />
        <div className="mx-auto mt-8 flex max-w-md flex-col items-center gap-2">
          {CHAIN.map((c, i) => (
            <div key={c} className="flex w-full flex-col items-center">
              <div
                className="w-full rounded-2xl bg-[image:var(--gradient-brand)] px-5 py-3 text-center font-display text-sm font-bold tracking-[0.12em] text-white shadow-[var(--shadow-soft)] animate-[rise-in_0.5s_ease-out_both]"
                style={{ animationDelay: `${i * 110}ms`, opacity: 1 - i * 0.06 }}
              >
                {c}
              </div>
              {i < CHAIN.length - 1 && <ArrowDown className="my-1 size-4 text-secondary" />}
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12 flex justify-center">
        <Button asChild size="lg">
          <Link to="/simulation">
            Start the simulation <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
