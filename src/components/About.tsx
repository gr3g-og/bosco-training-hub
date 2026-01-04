import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Award, Users, TrendingUp } from "lucide-react";
import principalImage from "@/assets/principal.png";
const features = [{
  icon: Target,
  title: "Job-Oriented Training",
  description: "Programs designed to meet current market demands and prepare you for real-world careers."
}, {
  icon: Award,
  title: "Industry Recognition",
  description: "Certified courses recognized by leading employers and industry bodies."
}, {
  icon: Users,
  title: "Expert Instructors",
  description: "Learn from experienced professionals with years of industry expertise."
}, {
  icon: TrendingUp,
  title: "Career Growth",
  description: "Continuous skill development pathways to advance your professional journey."
}];
export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="about" className="py-24 bg-gradient-subtle" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Ensuring Modern Job-Oriented Skill Training for All</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            In order to succeed in today's competitive job market, it is crucial for students and
            employees to acquire skill training that is tailored towards their future careers and
            the job market.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="text-center">
            <div className="relative inline-block p-1 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl">
              <img src={principalImage} alt="Rev. Fr., Mark Eshun - Principal of Don Bosco Training Institute" className="rounded-xl w-full h-[400px] object-cover border-4 border-background" />
            </div>
            <p className="text-xl font-display font-semibold text-foreground mt-6">
              Rev. Fr., Mark Eshun
            </p>
            <p className="text-muted-foreground">Principal</p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Our institution places a high priority on providing job-oriented skill training to
              equip our students with the necessary knowledge and skills to excel in their chosen
              fields.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              With state-of-the-art facilities and a commitment to excellence, we prepare our
              students not just for jobs, but for successful careers that make a real impact.
            </p>
            <a href="/about" className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium transition-colors duration-300">
              Learn More About Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <motion.div key={feature.title} initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.5,
          delay: 0.4 + index * 0.1
        }} className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow duration-300">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
};