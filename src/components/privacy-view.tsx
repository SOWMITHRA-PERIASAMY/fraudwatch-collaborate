import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Cpu, Database, Lock, ShieldCheck } from "lucide-react";
import { BANKS, type BankId } from "@/lib/sim-data";
import { useSimulation } from "@/lib/simulation-store";
import { SectionHeading } from "@/components/sim-bits";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PrivacyView({ bankId }: { bankId?: BankId }) {
  const { state } = useSimulation();

  return (
    <section className="space-y-10">
      <SectionHeading
        eyebrow="Privacy check"
        title="YOUR DATA STAYS LOCAL"
        description="Four separate databases. Four separate models. Only indicators travel."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {BANKS.map((b, i) => (
          <div
            key={b.id}
            className={cn(
              "surface-card animate-[rise-in_0.5s_ease-out_both] p-5",
              b.id === bankId && "ring-2 ring-secondary/50",
            )}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-sm font-bold tracking-[0.1em]">
                BANK {b.id} DATABASE
              </span>
              <Lock className="size-4 text-primary" />
            </div>
            <div className="mt-4 space-y-2">
              <Row icon={<Database className="size-3.5" />} text="Raw transactions" tone="locked" />
              <ArrowDown className="mx-auto size-3.5 text-border" />
              <Row icon={<Cpu className="size-3.5" />} text="Local model" tone="local" />
              <ArrowDown className="mx-auto size-3.5 text-border" />
              <Row
                icon={<ShieldCheck className="size-3.5" />}
                text={state.indicators[b.id] ?? b.correctIndicator}
                tone="shared"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-3">
        <div className="flex gap-6 text-secondary">
          {[0, 1, 2, 3].map((i) => (
            <ArrowDown
              key={i}
              className="size-6 animate-[fade-in_0.6s_ease-out_both]"
              style={{ animationDelay: `${i * 160}ms` }}
            />
          ))}
        </div>
        <div className="w-full max-w-xl rounded-3xl bg-[image:var(--gradient-hero)] px-6 py-6 text-center text-white shadow-[var(--shadow-lift)]">
          <ShieldCheck className="mx-auto size-8" />
          <p className="mt-2 font-display text-base font-bold tracking-[0.12em]">
            SHARED FRAUD INSIGHTS
          </p>
          <p className="mt-2 text-sm text-white/75">
            Only fraud indicators reach the collaboration hub.
          </p>
        </div>
      </div>

      <div className="surface-card mx-auto max-w-2xl border-l-4 border-l-accent p-5 text-center text-sm text-muted-foreground">
        “Raw transaction data remains with the bank in this simulation.”
      </div>

      <div className="flex justify-center">
        <Button asChild size="lg">
          <Link to="/collaboration">
            Enter the Fraud Alert Room <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

function Row({
  icon,
  text,
  tone,
}: {
  icon: React.ReactNode;
  text: string;
  tone: "locked" | "local" | "shared";
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium",
        tone === "locked" && "bg-destructive/8 text-destructive",
        tone === "local" && "bg-primary/8 text-primary",
        tone === "shared" && "bg-success/10 text-success",
      )}
    >
      {icon}
      <span className="leading-snug">{text}</span>
    </div>
  );
}
