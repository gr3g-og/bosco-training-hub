import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Wrench, Zap, Briefcase, Code, Cog } from "lucide-react";

const programs = [
  {
    icon: Cpu,
    title: "Basic Level Courses",
    description: "Introductory courses for people looking to enter new fields.",
    level: "Absolute Beginners",
    color: "primary",
  },
  {
    icon: Briefcase,
    title: "Advanced Level",
    description: "Advanced courses for students who need practical understanding of their fields.",
    level: "Advance Career",
    color: "secondary",
  },
  {
    icon: Code,
    title: "Part-Time",
    description: "Part-time courses for people who can't attend regular weekday classes.",
    level: "Weekend Classes",
    color: "accent",
  },
];

export const Programs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programs" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-display font-semibold text-lg mb-2 block">
            Our Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Choose Your Path to Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive range of technical and vocational training programs designed
            to equip you with industry-relevant skills.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-medium transition-shadow duration-300 border-border group">
                <CardHeader>
                  <div className={`w-14 h-14 bg-${program.color}/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <program.icon className={`w-7 h-7 text-${program.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-display">{program.title}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="font-normal">
                      {program.level}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? We offer custom training solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
