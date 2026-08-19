import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { BANKS, SCORE_CRITERIA, type BankId, type RoleId, type ScoreKey, type Verdict } from "./sim-data";

export type FinalDecision = "NORMAL" | "SUSPICIOUS" | "FRAUD";

type BankScores = Record<ScoreKey, number>;

export interface SimState {
  role: RoleId | null;
  verdicts: Record<BankId, Record<string, Verdict>>;
  indicators: Record<BankId, string | null>;
  finalDecision: FinalDecision | null;
  scores: Record<BankId, BankScores>;
  bonus: Record<BankId, boolean>;
  revealed: boolean;
}

const emptyScores = (): BankScores =>
  SCORE_CRITERIA.reduce((acc, c) => ({ ...acc, [c.key]: 0 }), {} as BankScores);

const initialState = (): SimState => ({
  role: null,
  verdicts: { A: {}, B: {}, C: {}, D: {} },
  indicators: { A: null, B: null, C: null, D: null },
  finalDecision: null,
  scores: { A: emptyScores(), B: emptyScores(), C: emptyScores(), D: emptyScores() },
  bonus: { A: false, B: false, C: false, D: false },
  revealed: false,
});

interface SimContextValue {
  state: SimState;
  setRole: (role: RoleId | null) => void;
  setVerdict: (bank: BankId, txId: string, verdict: Verdict) => void;
  setIndicator: (bank: BankId, indicator: string) => void;
  setFinalDecision: (decision: FinalDecision) => void;
  setScore: (bank: BankId, key: ScoreKey, value: number) => void;
  toggleBonus: (bank: BankId) => void;
  reveal: () => void;
  reset: () => void;
  bankTotal: (bank: BankId) => number;
  isBankComplete: (bank: BankId) => boolean;
}

const SimContext = createContext<SimContextValue | null>(null);
const STORAGE_KEY = "fraud-alert-room-state-v1";

export function SimulationProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<SimState>(initialState);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setState({ ...initialState(), ...(JSON.parse(raw) as SimState) });
    } catch {
      /* ignore corrupt storage */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore quota errors */
    }
  }, [state]);

  const value = useMemo<SimContextValue>(
    () => ({
      state,
      setRole: (role) => setState((s) => ({ ...s, role })),
      setVerdict: (bank, txId, verdict) =>
        setState((s) => ({
          ...s,
          verdicts: { ...s.verdicts, [bank]: { ...s.verdicts[bank], [txId]: verdict } },
        })),
      setIndicator: (bank, indicator) =>
        setState((s) => ({ ...s, indicators: { ...s.indicators, [bank]: indicator } })),
      setFinalDecision: (finalDecision) => setState((s) => ({ ...s, finalDecision })),
      setScore: (bank, key, value) =>
        setState((s) => ({
          ...s,
          scores: { ...s.scores, [bank]: { ...s.scores[bank], [key]: value } },
        })),
      toggleBonus: (bank) =>
        setState((s) => ({ ...s, bonus: { ...s.bonus, [bank]: !s.bonus[bank] } })),
      reveal: () => setState((s) => ({ ...s, revealed: true })),
      reset: () => setState(initialState()),
      bankTotal: (bank) =>
        Object.values(state.scores[bank]).reduce((a, b) => a + b, 0) + (state.bonus[bank] ? 2 : 0),
      isBankComplete: (bank) =>
        Object.keys(state.verdicts[bank]).length ===
        BANKS.find((b) => b.id === bank)!.transactions.length,
    }),
    [state],
  );

  return <SimContext.Provider value={value}>{children}</SimContext.Provider>;
}

export function useSimulation() {
  const ctx = useContext(SimContext);
  if (!ctx) throw new Error("useSimulation must be used inside SimulationProvider");
  return ctx;
}
