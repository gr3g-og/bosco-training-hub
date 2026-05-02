import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import campusImage from "@/assets/campus-view-2.png";

export const About = () => {
  return (
    <>
      {/* Mission split — image + dark editorial panel */}
      <section id="about" className="grid md:grid-cols-2 min-h-[580px]">
        <div className="relative overflow-hidden order-1 min-h-[300px]">
          <img
            src={campusImage}
            alt="Don Bosco Training Institute campus"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, transparent 60%, hsl(var(--primary) / 0.3))",
            }}
          />
        </div>

        <div className="bg-charcoal px-6 py-14 md:px-16 md:py-20 flex flex-col justify-center order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionEyebrow onDark>Our Mission</SectionEyebrow>
            <h2
              className="font-display font-bold text-white leading-[1.15] mt-4 mb-5"
              style={{ fontSize: "clamp(30px, 3.5vw, 46px)" }}
            >
              Empowering Youth Through{" "}
              <em className="italic text-primary-light">Skill</em> & Faith.
            </h2>
            <p className="text-sm md:text-[15px] font-light leading-[1.8] text-white/60 mb-3.5">
              Founded by the Salesians of Don Bosco in partnership with the Catholic
              Archdiocese of Accra, our institute responds to the needs of young people —
              especially those who are economically and socially marginalized — with
              practical, market-relevant training.
            </p>
            <p className="text-sm md:text-[15px] font-light leading-[1.8] text-white/60 mb-7">
              Every program is built around hands-on practice, character formation, and a
              clear pathway to dignified employment.
            </p>

            <div className="border-l-[3px] border-primary py-3.5 px-5 my-6 bg-primary/10">
              <p className="font-display italic text-[15px] text-white/80 leading-relaxed">
                "It is not enough to love the young; they must know that they are loved."
              </p>
              <cite className="not-italic text-[11px] tracking-[0.06em] text-primary-light block mt-1.5">
                — St. John Bosco
              </cite>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <Pillars />
    </>
  );
};

const pillars = [
  {
    n: "01",
    title: "Job-Oriented Training",
    desc: "Curricula designed around current Ghanaian and West African market needs — graduates leave ready to work or start their own venture.",
  },
  {
    n: "02",
    title: "Expert Instructors",
    desc: "Learn from seasoned professionals with years of industry experience who teach the way the trade is actually practiced.",
  },
  {
    n: "03",
    title: "Career Growth",
    desc: "NVTI-recognized certifications and continuous skill pathways that open doors and grow with you over your career.",
  },
];

const Pillars = () => (
  <section className="bg-white py-20 md:py-24 px-6 md:px-12">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center max-w-xl mx-auto mb-14">
        <div className="flex justify-center">
          <SectionEyebrow>Why Don Bosco</SectionEyebrow>
        </div>
        <h2
          className="font-display font-bold mt-4 mb-3.5"
          style={{ fontSize: "clamp(30px, 3.5vw, 44px)" }}
        >
          Built on three <em className="italic text-primary">pillars</em>.
        </h2>
        <p className="text-sm md:text-[15px] font-light text-muted-foreground leading-relaxed">
          Practical skill, character, and opportunity — the foundation of every program we offer.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((p, i) => (
          <motion.div
            key={p.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative p-9 border border-border rounded-sharp overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-orange-glow"
          >
            <span className="absolute top-0 left-0 right-0 h-[3px] bg-primary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            <span className="block font-display font-bold text-primary opacity-15 text-[52px] leading-none mb-4">
              {p.n}
            </span>
            <h3 className="font-display font-semibold text-[22px] leading-[1.25] mb-3">
              {p.title}
            </h3>
            <p className="text-[13px] font-light leading-[1.75] text-muted-foreground">
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
