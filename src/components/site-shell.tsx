import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, RotateCcw, ShieldCheck, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { useSimulation } from "@/lib/simulation-store";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/simulation", label: "Simulation" },
  { to: "/collaboration", label: "Collaboration" },
  { to: "/results", label: "Results" },
  { to: "/viva", label: "Viva" },
  { to: "/guide", label: "Presenter" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const { reset } = useSimulation();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
              <ShieldCheck className="size-5" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-sm font-bold tracking-tight sm:text-base">
                Fraud Alert Room
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                VAC Role Simulation
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                  pathname === item.to && "bg-primary/10 text-primary",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() => reset()}
            >
              <RotateCcw className="size-4" />
              Reset
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Toggle navigation"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <nav className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-3">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground",
                    pathname === item.to && "bg-primary/10 text-primary",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                variant="outline"
                className="mt-2 w-full"
                onClick={() => {
                  reset();
                  setOpen(false);
                }}
              >
                <RotateCcw className="size-4" />
                Reset Simulation
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border bg-muted/40">
        <div className="mx-auto w-full max-w-7xl space-y-3 px-4 py-8 text-center sm:px-6">
          <p className="font-display text-sm font-semibold">
            Fraud Alert Room · Sowmithra P | 24CS0923
          </p>
          <p className="mx-auto max-w-3xl text-xs leading-relaxed text-muted-foreground">
            Educational simulation only. All transactions and banks shown are fictional. This
            activity demonstrates the concept of collaborative fraud detection and federated
            learning; it is not a real banking or fraud-detection system.
          </p>
        </div>
      </footer>
    </div>
  );
}
