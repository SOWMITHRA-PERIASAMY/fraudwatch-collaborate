import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Gauge, ShieldCheck, UserRoundCog } from "lucide-react";
import { BANKS } from "@/lib/sim-data";
import { useSimulation } from "@/lib/simulation-store";
import { BankIcon, ROLE_ACCENT, SectionHeading } from "@/components/sim-bits";
import { BankDashboard } from "@/components/bank-dashboard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/simulation")({
  head: () => ({
    meta: [
      { title: "Simulation — Fraud Alert Room" },
      {
        name: "description",
        content:
          "Pick a bank role and review five local transactions, marking each normal or suspicious before sharing a single fraud indicator with the room.",
      },
      { property: "og:title", content: "Simulation — Fraud Alert Room" },
      {
        property: "og:description",
        content:
          "Play a bank in the Fraud Alert Room: analyse local transactions and share only a fraud indicator, never raw data.",
      },
    ],
  }),
  component: Simulation,
});

function Simulation() {
  const { state, setRole } = useSimulation();

  if (state.role && state.role !== "ANALYST") {
    return (
      <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
        <BankDashboard bankId={state.role} onBack={() => setRole(null)} />
      </div>
    );
  }

  if (state.role === "ANALYST") {
    return (
      <div className="mx-auto w-full max-w-2xl px-4 py-16 text-center sm:px-6 lg:py-24">
        <span className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-[image:var(--gradient-brand)] text-white shadow-[var(--shadow-lift)]">
          <UserRoundCog className="size-8" />
        </span>
        <h1 className="mt-6 font-display text-2xl font-bold sm:text-3xl">
          You are the Fraud Analyst
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Let the four banks finish their local analysis and submit their fraud indicators. When
          they're ready, head to the Fraud Alert Room to combine what they found and make the final
          call.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button asChild size="lg">
            <Link to="/collaboration">
              Open the Fraud Alert Room <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" onClick={() => setRole(null)}>
            Change role
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
      <SectionHeading
        eyebrow="Choose your role"
        title="Who are you in this simulation?"
        description="Four banks each hold one slice of the picture. One analyst brings the slices together."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {BANKS.map((bank, i) => {
          const done = Object.keys(state.verdicts[bank.id]).length;
          return (
            <button
              key={bank.id}
              onClick={() => setRole(bank.id)}
              className="surface-card lift-hover animate-[rise-in_0.6s_cubic-bezier(0.22,1,0.36,1)_both] p-6 text-left"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <span
                className={cn(
                  "flex size-11 items-center justify-center rounded-xl bg-gradient-to-br text-white",
                  ROLE_ACCENT[bank.id],
                )}
              >
                <BankIcon bank={bank} className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold">{bank.name.toUpperCase()}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                {bank.focus}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{bank.tagline}</p>
              <div className="mt-4 flex items-center gap-2 text-xs font-medium text-primary">
                {done > 0 ? (
                  <>
                    <CheckCircle2 className="size-3.5" /> {done}/{bank.transactions.length} reviewed
                  </>
                ) : (
                  <>
                    <Gauge className="size-3.5" /> Not started
                  </>
                )}
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-6">
        <button
          onClick={() => setRole("ANALYST")}
          className="surface-card lift-hover mx-auto flex w-full max-w-2xl animate-[rise-in_0.6s_cubic-bezier(0.22,1,0.36,1)_both] items-center gap-4 p-6 text-left"
          style={{ animationDelay: "360ms" }}
        >
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white from-[oklch(0.3_0.12_265)] to-[oklch(0.52_0.21_296)]">
            <ShieldCheck className="size-5" />
          </span>
          <div>
            <h3 className="font-display text-lg font-bold">Fraud Analyst</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Coordinates the room — combines the four indicators into a final fraud alert.
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}
