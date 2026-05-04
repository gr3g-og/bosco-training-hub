import { motion } from "framer-motion";

const stats = [
  { num: "25", sfx: "+", label: "Years of Service" },
  { num: "5,000", sfx: "+", label: "Graduates Trained" },
  { num: "10", sfx: "", label: "Vocational Programs" },
  { num: "100", sfx: "%", label: "Hands-On Training" },
];

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
            {stat.num}
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
