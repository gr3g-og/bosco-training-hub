import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import campusBg from "@/assets/campus-view-2.png";

export const Testimonial = () => {
  return (
    <section className="relative py-24 md:py-28 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={campusBg}
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 60%" }}
        />
        <div className="absolute inset-0 bg-charcoal/90" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-[780px] mx-auto text-center"
      >
        <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-7 border-2 border-primary">
          <img src={logo} alt="Don Bosco Training Institute" className="w-full h-full object-cover" />
        </div>

        <span className="font-display block text-[80px] text-primary opacity-40 leading-[0.6] mb-2">
          “
        </span>

        <p
          className="font-display italic font-normal text-white leading-[1.6] mb-8"
          style={{ fontSize: "clamp(20px, 2.8vw, 28px)" }}
        >
          Don Bosco gave me the practical skills and confidence to start my own
          electrical contracting business right after graduation. The instructors
          treat you like family.
        </p>

        <span className="block w-10 h-[2px] bg-primary mx-auto mb-6 rounded-sm" />

        <div className="text-[13px] text-white/50 leading-[1.8]">
          <strong className="block text-white text-[15px] font-semibold tracking-[0.04em] mb-0.5">
            Kwame Asante
          </strong>
          Electrical Installation · Class of 2024
        </div>
      </motion.div>
    </section>
  );
};
