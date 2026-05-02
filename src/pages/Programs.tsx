import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Programs } from "@/components/Programs";
import { ContactStrip } from "@/components/ContactStrip";
import { SEO } from "@/components/SEO";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

const ProgramsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Training Programs"
        description="Explore 10 vocational training programs at Don Bosco Training Institute: Electrical, Solar, Automotive, IT & Design, Cosmetology, Catering, and more. NVTI-certified courses for career success."
        path="/programs"
      />
      <Navigation />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-cream px-6 md:px-12">
          <div className="container mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center">
                <SectionEyebrow>All Programs</SectionEyebrow>
              </div>
              <h1
                className="font-display font-bold mt-4 mb-5 leading-[1.1]"
                style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
              >
                Pick a trade. <em className="italic text-primary">Build a career.</em>
              </h1>
              <p className="text-base font-light text-muted-foreground leading-[1.75]">
                Ten hands-on vocational programs designed for real Ghanaian job
                markets. Each one leads to NVTI-recognized certification and
                practical, work-ready skills.
              </p>
            </motion.div>
          </div>
        </section>

        <Programs pageMode />
      </main>

      <ContactStrip />
      <Footer />
    </div>
  );
};

export default ProgramsPage;
