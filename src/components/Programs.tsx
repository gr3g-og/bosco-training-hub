import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { programList } from "@/data/programList";

interface ProgramsProps {
  /** When true, renders the standalone Programs page version (with full header + bg) */
  pageMode?: boolean;
}

export const Programs = ({ pageMode = false }: ProgramsProps) => {
  return (
    <section
      id="programs"
      className={`px-6 md:px-12 py-20 md:py-24 ${pageMode ? "bg-white" : "bg-cream"}`}
    >
      <div className="container mx-auto">
        {/* Editorial header — left heading, right paragraph */}
        <div className="flex flex-wrap items-end justify-between gap-8 mb-12 md:mb-14">
          <div className="max-w-md">
            <SectionEyebrow>Our Programs</SectionEyebrow>
            <h2
              className="font-display font-bold leading-[1.1] mt-3"
              style={{ fontSize: "clamp(34px, 4vw, 52px)" }}
            >
              Trades that build a <em className="italic text-primary">future</em>.
            </h2>
          </div>
          <p className="text-sm md:text-[15px] font-light text-muted-foreground max-w-sm leading-[1.75]">
            Ten hands-on vocational programs, each leading to NVTI-recognized
            certification and real career pathways across Ghana.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
          {programList.map((program, i) => (
            <motion.div
              key={program.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: (i % 5) * 0.06 }}
            >
              <Link
                to={`/programs/${program.slug}`}
                className="group block bg-white rounded-sharp overflow-hidden border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-orange-glow"
              >
                <div className="relative h-[180px] overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.07]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal/55" />
                  <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold uppercase tracking-[0.1em]">
                      View Program
                    </span>
                  </div>
                </div>

                <div className="p-5 pb-5">
                  <h3 className="font-display font-semibold text-[17px] leading-[1.3] mb-2">
                    {program.name}
                  </h3>
                  <p className="text-xs font-light leading-[1.6] text-muted-foreground mb-4 line-clamp-2">
                    {program.short}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-primary bg-orange-pale px-2.5 py-1 rounded-sharp">
                      {program.duration}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-[13px] font-bold transition-colors group-hover:bg-primary-dark">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
