import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
  ShieldQuestion,
  Sparkles,
  Star,
} from "lucide-react";
import { BANKS, SCORE_CRITERIA } from "@/lib/sim-data";
import { useSimulation } from "@/lib/simulation-store";
import { BankIcon, SectionHeading } from "@/components/sim-bits";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results — Fraud Alert Room" },
      {
        name: "description",
        content:
          "Score each bank against a five-point rubric, review the room's final fraud decision, and see the combined results.",
      },
      { property: "og:title", content: "Results — Fraud Alert Room" },
      {
        property: "og:description",
        content:
          "A judging rubric for the Fraud Alert Room activity: identification, reasoning, indicator sharing, collaboration and evidence.",
      },
    ],
  }),
  component: Results,
});

const MAX_TOTAL = SCORE_CRITERIA.reduce((a, c) => a + c.max, 0) + 2;

const DECISION_META = {
  NORMAL: { label: "Normal Activity", icon: ShieldCheck, tone: "text-success" },
  SUSPICIOUS: { label: "Suspicious — Investigate", icon: ShieldQuestion, tone: "text-warning" },
  FRAUD: { label: "Confirmed Fraud Alert", icon: ShieldAlert, tone: "text-destructive" },
} as const;

function Results() {
  const { state, setScore, toggleBonus, bankTotal, reset } = useSimulation();

  const decision = state.finalDecision ? DECISION_META[state.finalDecision] : null;

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
      <SectionHeading
        eyebrow="Judging & scoring"
        title="Results"
        description="Score each bank against the rubric below, then check the room's combined decision."
      />

      {decision && (
        <div className="surface-card mx-auto mt-10 flex max-w-2xl items-center gap-4 p-6">
          <span
            className={cn(
              "flex size-12 shrink-0 items-center justify-center rounded-2xl bg-muted",
              decision.tone,
            )}
          >
            <decision.icon className="size-6" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Room's final decision
            </p>
            <p className="font-display text-lg font-bold">{decision.label}</p>
          </div>
        </div>
      )}

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {BANKS.map((bank) => {
          const scores = state.scores[bank.id];
          const bonus = state.bonus[bank.id];
          const total = bankTotal(bank.id);
          return (
            <div key={bank.id} className="surface-card p-6">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <BankIcon bank={bank} className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold">{bank.name.toUpperCase()}</h3>
                    <p className="text-xs text-muted-foreground">{bank.focus}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-display text-2xl font-bold">{total}</p>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    / {MAX_TOTAL}
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                {SCORE_CRITERIA.map((c) => (
                  <div key={c.key}>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-foreground">{c.label}</span>
                      <span className="text-muted-foreground">
                        {scores[c.key]}/{c.max}
                      </span>
                    </div>
                    <div className="mt-1.5 flex gap-1.5">
                      {Array.from({ length: c.max + 1 }, (_, v) => v).map((v) => (
                        <button
                          key={v}
                          onClick={() => setScore(bank.id, c.key, v)}
                          className={cn(
                            "h-7 flex-1 rounded-lg border text-xs font-semibold transition-colors",
                            scores[c.key] === v
                              ? "border-secondary bg-secondary/15 text-secondary"
                              : "border-border text-muted-foreground hover:bg-muted",
                          )}
                        >
                          {v}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => toggleBonus(bank.id)}
                className={cn(
                  "mt-5 flex w-full items-center justify-between rounded-xl border px-4 py-3 text-sm font-medium transition-colors",
                  bonus
                    ? "border-accent bg-accent/10 text-accent-foreground"
                    : "border-border hover:bg-muted",
                )}
              >
                <span className="flex items-center gap-2">
                  <Star className={cn("size-4", bonus && "fill-accent text-accent")} />
                  Bonus: correct indicator match (+2)
                </span>
                {state.indicators[bank.id] === bank.correctIndicator && (
                  <span className="text-xs font-semibold text-success">Matched ✓</span>
                )}
              </button>
            </div>
          );
        })}
      </div>

      <div className="surface-card mx-auto mt-10 flex max-w-2xl flex-col items-center gap-2 p-8 text-center">
        <Award className="size-8 text-secondary" />
        <p className="font-display text-xl font-bold">
          Room total: {BANKS.reduce((sum, b) => sum + bankTotal(b.id), 0)} /{" "}
          {MAX_TOTAL * BANKS.length}
        </p>
        <p className="text-sm text-muted-foreground">
          Great collaborative detection combines many small, honest observations.
        </p>
      </div>

      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Button asChild size="lg" variant="outline">
          <Link to="/viva">
            <Sparkles className="size-4" /> Go to viva questions
          </Link>
        </Button>
        <Button size="lg" variant="ghost" onClick={reset}>
          <RotateCcw className="size-4" /> Reset simulation
        </Button>
      </div>
    </div>
  );
}
