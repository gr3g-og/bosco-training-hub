import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Smile, BookOpen, Users2, Sparkles } from "lucide-react";
import studentLifeImage from "@/assets/student-life.jpg";

const highlights = [
  {
    icon: BookOpen,
    title: "Engaging Classroom Activities",
    description: "Interactive learning experiences that make education enjoyable and effective.",
  },
  {
    icon: Users2,
    title: "Supportive Community",
    description: "A welcoming environment where students help each other grow and succeed.",
  },
  {
    icon: Sparkles,
    title: "Exciting Extracurriculars",
    description: "Beyond academics - sports, clubs, and activities that develop well-rounded individuals.",
  },
  {
    icon: Smile,
    title: "Personal Growth",
    description: "Holistic development focusing on both technical skills and character building.",
  },
];

export const StudentLife = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="student-life" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="text-secondary font-display font-semibold text-lg">
              Student Experience
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              A Vibrant Student Life Full of Fun, Play, and Education
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Don Bosco Training Institute offers a vibrant student life that is full of fun, play,
              and education. Our students enjoy a well-rounded experience that includes engaging
              classroom activities, exciting extracurriculars, and a supportive community.
            </p>
            <p className="text-lg text-foreground leading-relaxed font-medium">
              Join us and discover the joys of learning and personal growth!
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <highlight.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-4"
            >
              <Button size="lg" variant="default" asChild>
                <a href="#contact">Student Information</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-medium">
              <img
                src={studentLifeImage}
                alt="Students enjoying hands-on technical training at Don Bosco"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating decoration */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
