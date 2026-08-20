import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HelpCircle } from "lucide-react";
import { VIVA_QA } from "@/lib/sim-data";
import { SectionHeading } from "@/components/sim-bits";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/viva")({
  head: () => ({
    meta: [
      { title: "Viva Questions — Fraud Alert Room" },
      {
        name: "description",
        content:
          "Ten viva-style questions and model answers covering federated learning, fraud indicators and why banks don't share raw data.",
      },
      { property: "og:title", content: "Viva Questions — Fraud Alert Room" },
      {
        property: "og:description",
        content:
          "Prepare for questions on federated learning, fraud detection and data privacy with these viva prompts and answers.",
      },
    ],
  }),
  component: Viva,
});

function Viva() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 lg:py-20">
      <SectionHeading
        eyebrow="Check your understanding"
        title="Viva questions"
        description="Ten questions an evaluator might ask, with model answers for each."
      />

      <div className="surface-card mt-10 p-4 sm:p-6">
        <Accordion type="single" collapsible className="w-full">
          {VIVA_QA.map((item, i) => (
            <AccordionItem key={item.q} value={`q-${i}`}>
              <AccordionTrigger>
                <span className="flex items-start gap-3 pr-2 text-left">
                  <HelpCircle className="mt-0.5 size-4 shrink-0 text-secondary" />
                  <span>{item.q}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="pl-7 leading-relaxed text-muted-foreground">{item.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-10 flex justify-center">
        <Button asChild size="lg" variant="outline">
          <Link to="/guide">
            View presenter guide <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
