import { Activity, Clock, CreditCard, MapPin, ShieldCheck } from "lucide-react";
import type { BankConfig, RoleId } from "@/lib/sim-data";
import { cn } from "@/lib/utils";

export const BANK_ICONS = {
  card: CreditCard,
  pin: MapPin,
  clock: Clock,
  activity: Activity,
} as const;

export function BankIcon({ bank, className }: { bank: BankConfig; className?: string }) {
  const Icon = BANK_ICONS[bank.icon];
  return <Icon className={className} />;
}

export const ROLE_ACCENT: Record<RoleId, string> = {
  A: "from-[oklch(0.38_0.15_264)] to-[oklch(0.5_0.17_275)]",
  B: "from-[oklch(0.52_0.21_296)] to-[oklch(0.62_0.19_305)]",
  C: "from-[oklch(0.55_0.14_230)] to-[oklch(0.72_0.13_205)]",
  D: "from-[oklch(0.45_0.18_285)] to-[oklch(0.68_0.15_250)]",
  ANALYST: "from-[oklch(0.3_0.12_265)] to-[oklch(0.52_0.21_296)]",
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">{eyebrow}</p>
      )}
      <h2 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export function ShieldHub({ className, label = "COLLABORATIVE FRAUD ENGINE" }: { className?: string; label?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-3 rounded-3xl bg-[image:var(--gradient-hero)] px-6 py-7 text-center text-white shadow-[var(--shadow-lift)]",
        className,
      )}
    >
      <span className="flex size-14 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25 animate-[pulse-ring_2.4s_ease-out_infinite]">
        <ShieldCheck className="size-7" />
      </span>
      <span className="font-display text-sm font-bold tracking-[0.14em]">{label}</span>
    </div>
  );
}

export const formatINR = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;
