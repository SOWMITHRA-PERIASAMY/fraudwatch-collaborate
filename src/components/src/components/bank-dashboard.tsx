import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Send,
  ShieldAlert,
} from "lucide-react";
import { useMemo, useState } from "react";
import { getBank, type BankId } from "@/lib/sim-data";
import { useSimulation } from "@/lib/simulation-store";
import { BankIcon, formatINR } from "@/components/sim-bits";
import { PrivacyView } from "@/components/privacy-view";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export function BankDashboard({ bankId, onBack }: { bankId: BankId; onBack: () => void }) {
  const bank = getBank(bankId);
  const { state, setVerdict, setIndicator } = useSimulation();
  const verdicts = state.verdicts[bankId];
  const [index, setIndex] = useState(() => {
    const firstUnanswered = bank.transactions.findIndex((t) => !verdicts[t.id]);
    return firstUnanswered === -1 ? bank.transactions.length - 1 : firstUnanswered;
  });
  const [choice, setChoice] = useState<string | null>(state.indicators[bankId]);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const answered = bank.transactions.filter((t) => verdicts[t.id]).length;
  const complete = answered === bank.transactions.length;
  const suspiciousCount = useMemo(
    () => bank.transactions.filter((t) => verdicts[t.id] === "SUSPICIOUS").length,
    [bank.transactions, verdicts],
  );
  const tx = bank.transactions[index]!;
  const submitted = state.indicators[bankId];

  if (showPrivacy) return <PrivacyView bankId={bankId} />;

  return (
    <div className="space-y-8">
      <div className="surface-card flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-[image:var(--gradient-brand)] text-white">
            <BankIcon bank={bank} className="size-6" />
          </span>
          <div>
            <h1 className="font-display text-xl font-bold sm:text-2xl">
              {bank.name.toUpperCase()} – {bank.focus.toUpperCase()}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">{bank.tagline}</p>
          </div>
        </div>
        <Button variant="outline" onClick={onBack}>
          <ChevronLeft className="size-4" /> Change role
        </Button>
      </div>

      <div className="surface-card p-6">
        <div className="flex items-center justify-between gap-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary">
            Local Analysis
          </p>
          <p className="text-sm font-semibold">
            Transaction {index + 1} of {bank.transactions.length}
          </p>
        </div>
        <Progress value={(answered / bank.transactions.length) * 100} className="mt-3 h-2" />
        <p className="mt-2 text-xs text-muted-foreground">
          {answered}/{bank.transactions.length} reviewed · your data stays inside {bank.name}
        </p>
      </div>

      <div
        key={tx.id}
        className="surface-card animate-[scale-in_0.35s_cubic-bezier(0.22,1,0.36,1)_both] overflow-hidden"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-muted/50 px-6 py-3">
          <span className="font-display text-sm font-bold tracking-[0.14em]">
            TRANSACTION {tx.id}
          </span>
          <span className="text-xs text-muted-foreground">{tx.time}</span>
        </div>
        <div className="space-y-4 p-6">
          <p className="font-display text-3xl font-bold sm:text-4xl">{formatINR(tx.amount)}</p>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
              {tx.contextLabel}: {tx.contextValue}
            </span>
            {verdicts[tx.id] && (
              <span
                className={cn(
                  "rounded-full px-3 py-1 font-semibold",
                  verdicts[tx.id] === "SUSPICIOUS"
                    ? "bg-destructive/10 text-destructive"
                    : "bg-success/10 text-success",
                )}
              >
                Marked {verdicts[tx.id] === "SUSPICIOUS" ? "Suspicious" : "Normal"}
              </span>
            )}
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{tx.description}</p>

          <div className="grid gap-3 pt-2 sm:grid-cols-2">
            <Button
              size="lg"
              variant={verdicts[tx.id] === "NORMAL" ? "default" : "outline"}
              className={cn(
                "h-12",
                verdicts[tx.id] === "NORMAL" &&
                  "bg-success text-success-foreground hover:bg-success/90",
              )}
              onClick={() => {
                setVerdict(bankId, tx.id, "NORMAL");
                if (index < bank.transactions.length - 1) setIndex(index + 1);
              }}
            >
              <CheckCircle2 className="size-4" /> Mark Normal
            </Button>
            <Button
              size="lg"
              variant={verdicts[tx.id] === "SUSPICIOUS" ? "default" : "outline"}
              className={cn(
                "h-12",
                verdicts[tx.id] === "SUSPICIOUS" &&
                  "bg-destructive text-destructive-foreground hover:bg-destructive/90",
              )}
              onClick={() => {
                setVerdict(bankId, tx.id, "SUSPICIOUS");
                if (index < bank.transactions.length - 1) setIndex(index + 1);
              }}
            >
              <ShieldAlert className="size-4" /> Mark Suspicious
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-border px-6 py-3">
          <Button
            variant="ghost"
            size="sm"
            disabled={index === 0}
            onClick={() => setIndex(index - 1)}
          >
            <ChevronLeft className="size-4" /> Previous
          </Button>
          <div className="flex gap-1.5">
            {bank.transactions.map((t, i) => (
              <button
                key={t.id}
                aria-label={`Go to transaction ${t.id}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "size-2.5 rounded-full transition-colors",
                  i === index ? "bg-secondary" : verdicts[t.id] ? "bg-primary/40" : "bg-border",
                )}
              />
            ))}
          </div>
          <Button
            variant="ghost"
            size="sm"
            disabled={index === bank.transactions.length - 1}
            onClick={() => setIndex(index + 1)}
          >
            Next <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>

      {complete && (
        <div className="surface-card animate-[rise-in_0.5s_ease-out_both] p-6">
          <div className="flex items-center gap-2 text-success">
            <BadgeCheck className="size-5" />
            <h2 className="font-display text-lg font-bold">LOCAL ANALYSIS COMPLETE</h2>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Stat label="Transactions analysed" value={`${answered}/${bank.transactions.length}`} />
            <Stat label="Suspicious transactions detected" value={`${suspiciousCount}`} />
          </div>

          <h3 className="mt-6 font-display text-base font-bold">
            What fraud indicator did your bank detect?
          </h3>
          <div className="mt-3 grid gap-2">
            {bank.indicatorOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => !submitted && setChoice(opt)}
                disabled={!!submitted}
                className={cn(
                  "rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors",
                  choice === opt
                    ? "border-secondary bg-secondary/10 text-secondary"
                    : "border-border hover:bg-muted",
                  submitted && "cursor-default opacity-80",
                )}
              >
                {opt}
              </button>
            ))}
          </div>

          {submitted ? (
            <div className="mt-5 space-y-4">
              <div className="rounded-xl bg-primary/5 p-4 text-sm">
                <p className="font-semibold text-primary">Indicator shared with the room</p>
                <p className="mt-1 text-muted-foreground">
                  “{submitted}” — no transaction records were shared.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" onClick={() => setShowPrivacy(true)}>
                  See how your data stays local <ArrowRight className="size-4" />
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/collaboration">Go to Fraud Alert Room</Link>
                </Button>
              </div>
            </div>
          ) : (
            <Button
              size="lg"
              className="mt-5"
              disabled={!choice}
              onClick={() => choice && setIndicator(bankId, choice)}
            >
              <Send className="size-4" /> Submit indicator
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-muted/60 p-4">
      <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-2xl font-bold">{value}</p>
    </div>
  );
}
