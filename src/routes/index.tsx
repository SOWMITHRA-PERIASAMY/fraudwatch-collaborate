import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Database, Lock, Network, Play, ShieldAlert, Sparkles } from "lucide-react";
import { BANKS, HOW_IT_WORKS } from "@/lib/sim-data";
import { BankIcon, SectionHeading } from "@/components/sim-bits";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fraud Alert Room — Collaborative Fraud Detection Simulation" },
      {
        name: "description",
        content:
          "An interactive classroom role simulation where four fictional banks analyse local data and share fraud indicators to detect fraud together.",
      },
      { property: "og:title", content: "Fraud Alert Room — Collaborative Fraud Detection" },
      {
        property: "og:description",
        content:
          "Four banks. Four local datasets. One collaborative fraud-detection challenge — a federated learning role simulation.",
      },
    ],
  }),
  component: Home,
});

const FLOW = ["Local Data", "Local Analysis", "Shared Intelligence", "Fraud Alert"];

function Home() {
  return (
    <div>
      <section className="hero-surface relative overflow-hidden">
        <div className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 size-80 rounded-full bg-[oklch(0.75_0.13_205)]/25 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div className="animate-[rise-in_0.6s_cubic-bezier(0.22,1,0.36,1)_both]">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] ring-1 ring-white/20">
              <Sparkles className="size-3.5" /> VAC Role Simulation
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              FRAUD ALERT ROOM
            </h1>
            <p className="mt-4 text-lg font-semibold text-[oklch(0.86_0.09_205)] sm:text-xl">
              Collaborative Fraud Detection Using Federated Learning
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
              Four banks. Four local datasets. One collaborative fraud-detection challenge.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 bg-white text-primary hover:bg-white/90">
                <Link to="/simulation">
                  <Play className="size-4" /> Start Simulation
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 border-white/40 bg-white/5 text-white hover:bg-white/15 hover:text-white"
              >
                <a href="#how">
                  How It Works <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>

            <p className="mt-8 text-sm font-medium text-white/70">Sowmithra P | 24CS0923</p>
          </div>

          <HeroDiagram />
        </div>

        <div className="relative border-t border-white/15 bg-black/10">
          <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-2 px-4 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80 sm:text-xs">
            {FLOW.map((f, i) => (
              <span key={f} className="flex items-center gap-3">
                <span
                  className="rounded-full bg-white/10 px-3 py-1.5 ring-1 ring-white/15 animate-[fade-in_0.5s_ease-out_both]"
                  style={{ animationDelay: `${i * 220}ms` }}
                >
                  {f}
                </span>
                {i < FLOW.length - 1 && <ArrowRight className="size-3.5 text-[oklch(0.82_0.11_205)]" />}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:py-20">
        <SectionHeading
          eyebrow="How it works"
          title="Local Data → Local Analysis → Shared Insights → Collaborative Detection"
          description="Banks never exchange raw customer records. They exchange what they learned."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS.map((s, i) => (
            <div
              key={s.step}
              className="surface-card lift-hover animate-[rise-in_0.6s_cubic-bezier(0.22,1,0.36,1)_both] p-6"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <span className="inline-flex size-9 items-center justify-center rounded-xl bg-[image:var(--gradient-brand)] font-display text-sm font-bold text-white">
                {i + 1}
              </span>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary">
                {s.step}
              </p>
              <h3 className="mt-1 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="surface-card mt-8 flex flex-col gap-3 border-l-4 border-l-accent p-5 sm:flex-row sm:items-center">
          <Lock className="size-5 shrink-0 text-accent" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            In real federated learning, participating organisations can train local models and share
            model updates or aggregated information instead of centralising raw data.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button asChild size="lg">
            <Link to="/simulation">
              Select Your Role <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/how-it-works">Full explanation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function HeroDiagram() {
  return (
    <div className="animate-[scale-in_0.5s_cubic-bezier(0.22,1,0.36,1)_both] rounded-3xl bg-white/8 p-5 ring-1 ring-white/15 backdrop-blur-sm sm:p-7">
      <div className="grid grid-cols-2 gap-3">
        {BANKS.slice(0, 2).map((b) => (
          <HeroNode key={b.id} id={b.id} />
        ))}
      </div>

      <div className="relative my-4 flex justify-center">
        <svg viewBox="0 0 240 60" className="h-14 w-full max-w-sm" aria-hidden="true">
          {[30, 100, 140, 210].map((x, i) => (
            <line
              key={x}
              x1={x}
              y1={i < 2 ? 4 : 56}
              x2={120}
              y2={30}
              stroke="oklch(0.82 0.11 205)"
              strokeWidth="1.6"
              strokeDasharray="6 6"
              className="animate-[flow_2.6s_linear_infinite]"
            />
          ))}
          <circle cx="120" cy="30" r="7" fill="oklch(0.82 0.11 205)" />
        </svg>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="rounded-full bg-white px-4 py-1.5 font-display text-[11px] font-bold tracking-[0.14em] text-primary shadow-lg">
            FRAUD ANALYST
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {BANKS.slice(2).map((b) => (
          <HeroNode key={b.id} id={b.id} />
        ))}
      </div>

      <p className="mt-5 flex items-center justify-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/70">
        <Network className="size-3.5" /> Insights only — no raw data leaves a bank
      </p>
    </div>
  );
}

function HeroNode({ id }: { id: "A" | "B" | "C" | "D" }) {
  const bank = BANKS.find((b) => b.id === id)!;
  return (
    <div className="rounded-2xl bg-white/12 p-4 ring-1 ring-white/15">
      <div className="flex items-center gap-2">
        <BankIcon bank={bank} className="size-4 text-[oklch(0.86_0.09_205)]" />
        <span className="font-display text-sm font-bold tracking-wide">
          BANK {bank.id}
        </span>
      </div>
      <p className="mt-1 text-[11px] text-white/70">{bank.focus}</p>
      <p className="mt-3 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-white/60">
        <Database className="size-3" /> Local database
      </p>
    </div>
  );
}
