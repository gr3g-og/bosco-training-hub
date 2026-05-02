import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import logo from "@/assets/logo.png";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[660px] h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Students learning technical skills at Don Bosco Training Institute"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 40%" }}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-[920px]">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="inline-flex items-center gap-2.5 bg-primary text-white text-[10px] font-semibold uppercase tracking-[0.14em] px-4 py-[7px] rounded-sharp mb-7"
        >
          <span className="w-1.5 h-1.5 bg-white rounded-full" />
          Salesian Technical Institute · Ashaiman
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.85 }}
          className="font-display font-bold text-white leading-[1.05] mb-7"
          style={{ fontSize: "clamp(44px, 6.5vw, 82px)" }}
        >
          Learn a Trade,
          <span className="block italic text-primary-light">Earn a Living.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-base font-light leading-[1.75] text-white/75 max-w-[480px] mb-10"
        >
          Ultra-modern, job-oriented vocational training for the youth of Ghana.
          Practical skills. NVTI certification. A pathway to a brighter future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap items-center gap-3.5"
        >
          <Button size="lg" asChild>
            <a href="#contact">Enroll Now</a>
          </Button>
          <Button size="lg" variant="ghost-outline" asChild>
            <Link to="/programs">Discover Programs</Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="hidden md:flex absolute bottom-8 left-12 z-10 items-center gap-3 text-[10px] uppercase tracking-[0.14em] text-white/40"
      >
        Scroll
        <span className="block w-11 h-px bg-white/25" />
      </motion.div>

      {/* Logo stamp */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="hidden md:block absolute bottom-6 right-12 z-10 w-[72px] h-[72px] rounded-full overflow-hidden border-2"
        style={{ borderColor: "hsl(var(--primary) / 0.5)" }}
      >
        <img src={logo} alt="Don Bosco logo" className="w-full h-full object-cover" />
      </motion.div>
    </section>
  );
};
