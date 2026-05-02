import { Button } from "@/components/ui/button";

export const ApplyCTA = () => {
  return (
    <section className="bg-orange-pale border-t-[3px] border-primary px-6 md:px-12 py-20 md:py-22">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-10">
        <div className="flex-1 min-w-[280px]">
          <h2
            className="font-display font-bold leading-[1.1] mb-4"
            style={{ fontSize: "clamp(30px, 4vw, 48px)" }}
          >
            Ready to <em className="italic text-primary">learn a trade</em>?
          </h2>
          <p className="text-sm md:text-[15px] font-light text-muted-foreground max-w-[440px] leading-[1.7]">
            Applications are open for our next intake. Take the first step toward a
            career you can build a life on.
          </p>
        </div>

        <div className="flex-shrink-0 flex flex-col items-start md:items-end gap-4">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Next Intake: September
          </span>
          <Button size="xl" asChild>
            <a href="#contact">Start Application</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
