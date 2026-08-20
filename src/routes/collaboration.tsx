import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CircleDashed,
  Clock3,
  ShieldAlert,
  ShieldCheck,
  ShieldQuestion,
} from "lucide-react";
import { BANKS } from "@/lib/sim-data";
import { useSimulation, type FinalDecision } from "@/lib/simulation-store";
import { BankIcon, SectionHeading, ShieldHub } from "@/components/sim-bits";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/collaboration")({
  head: () => ({
    meta: [
      { title: "Fraud Alert Room — Collaboration" },
      {
        name: "description",
        content:
          "Watch the four fraud indicators arrive from Bank A, B, C and D, then combine them into one collaborative fraud alert decision.",
      },
      { property: "og:title", content: "Fraud Alert Room — Collaboration" },
      {
        property: "og:description",
        content:
          "No raw data changes hands here — only fraud indicators. See how four weak signals combine into a strong alert.",
      },
    ],
  }),
  component: Collaboration,
});

const DECISIONS: { value: FinalDecision; label: string; hint: string; icon: typeof ShieldCheck }[] =
  [
    {
      value: "NORMAL",
      label: "Normal Activity",
      hint: "Indicators don't add up to a real threat.",
      icon: ShieldCheck,
    },
    {
      value: "SUSPICIOUS",
      label: "Suspicious — Investigate",
      hint: "Enough signal to flag for manual review.",
      icon: ShieldQuestion,
    },
    {
      value: "FRAUD",
      label: "Confirmed Fraud Alert",
      hint: "Independent signals converge on the same customer.",
      icon: ShieldAlert,
    },
  ];

function Collaboration() {
  const { state, setFinalDecision } = useSimulation();
  const submittedCount = BANKS.filter((b) => state.indicators[b.id]).length;
  const allSubmitted = submittedCount === BANKS.length;

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
      <SectionHeading
        eyebrow="Collaboration hub"
        title="The Fraud Alert Room"
        description="Four indicators arrive here — never the raw transactions behind them."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {BANKS.map((bank, i) => {
          const indicator = state.indicators[bank.id];
          return (
            <div
              key={bank.id}
              className="surface-card animate-[rise-in_0.6s_cubic-bezier(0.22,1,0.36,1)_both] p-5"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BankIcon bank={bank} className="size-4" />
                </span>
                <span
                  className={cn(
                    "flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em]",
                    indicator ? "bg-success/10 text-success" : "bg-muted text-muted-foreground",
                  )}
                >
                  {indicator ? (
                    <>
                      <ShieldCheck className="size-3" /> Received
                    </>
                  ) : (
                    <>
                      <Clock3 className="size-3" /> Waiting
                    </>
                  )}
                </span>
              </div>
              <h3 className="mt-3 font-display text-sm font-bold">
                {bank.name.toUpperCase()} — {bank.focus}
              </h3>
              <div className="mt-3 min-h-14 rounded-xl border border-dashed border-border px-3 py-2.5 text-xs leading-relaxed text-muted-foreground">
                {indicator ? (
                  <span className="font-medium text-foreground">“{indicator}”</span>
                ) : (
                  <span className="flex items-center gap-1.5">
                    <CircleDashed className="size-3.5 animate-spin [animation-duration:2.5s]" />
                    Analysing local data…
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {!allSubmitted && (
        <div className="surface-card mt-8 flex flex-col items-center gap-4 p-8 text-center">
          <p className="text-sm text-muted-foreground">
            {submittedCount}/{BANKS.length} indicators received. Each bank needs to finish its local
            analysis and submit a fraud indicator first.
          </p>
          <Button asChild variant="outline">
            <Link to="/simulation">Go review a bank's transactions</Link>
          </Button>
        </div>
      )}

      {allSubmitted && (
        <div className="mt-10 space-y-8">
          <ShieldHub className="mx-auto max-w-2xl" label="ALL FOUR INDICATORS RECEIVED" />

          <div className="surface-card mx-auto max-w-3xl p-6 sm:p-8">
            <h2 className="text-center font-display text-lg font-bold sm:text-xl">
              What's the room's final call?
            </h2>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Weigh all four indicators together — location, amount, velocity and behaviour all
              pointing at the same transaction is a much stronger signal than any one alone.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {DECISIONS.map((d) => {
                const Icon = d.icon;
                const active = state.finalDecision === d.value;
                return (
                  <button
                    key={d.value}
                    onClick={() => setFinalDecision(d.value)}
                    className={cn(
                      "rounded-2xl border p-4 text-left transition-colors",
                      active ? "border-secondary bg-secondary/10" : "border-border hover:bg-muted",
                    )}
                  >
                    <Icon
                      className={cn("size-5", active ? "text-secondary" : "text-muted-foreground")}
                    />
                    <p className="mt-2 text-sm font-bold">{d.label}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{d.hint}</p>
                  </button>
                );
              })}
            </div>

            {state.finalDecision && (
              <div className="mt-6 flex flex-col items-center gap-3 animate-[rise-in_0.4s_ease-out_both]">
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Room decision recorded
                </p>
                <Button asChild size="lg">
                  <Link to="/results">
                    Continue to scoring <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
