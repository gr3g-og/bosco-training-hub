import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { num: "25", sfx: "+", label: "Years of Service" },
  { num: "5,000", sfx: "+", label: "Graduates Trained" },
  { num: "10", sfx: "", label: "Vocational Programs" },
  { num: "70", sfx: "%", label: "Hands-On Training" },
];

const CountUp = ({ value, duration = 1600 }: { value: string; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const target = parseInt(value.replace(/,/g, ""), 10);
  const useCommas = value.includes(",");
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || isNaN(target)) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return <span ref={ref}>{useCommas ? display.toLocaleString("en-US") : display}</span>;
};

export const Stats = () => {
  return (
    <section className="bg-primary grid grid-cols-2 md:grid-cols-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className={`px-6 py-9 text-center border-white/20 ${
            i < 3 ? "md:border-r" : ""
          } ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b md:border-b-0" : ""}`}
        >
          <span className="block font-display font-bold text-white leading-none text-4xl md:text-[44px]">
            <CountUp value={stat.num} />
            <span className="text-2xl md:text-[28px] font-normal">{stat.sfx}</span>
          </span>
          <span className="block mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/75">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </section>
  );
};
