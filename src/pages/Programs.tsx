import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

import programAC from "@/assets/program-ac-refrigeration.jpg";
import programAutomobile from "@/assets/program-automobile.jpg";
import programCatering from "@/assets/program-catering.jpg";
import programCosmetology from "@/assets/program-cosmetology.jpg";
import programCrane from "@/assets/program-crane.jpg";
import programDriving from "@/assets/program-driving.jpg";
import programElectrical from "@/assets/program-electrical.jpg";
import programForklift from "@/assets/program-forklift.jpg";
import programIT from "@/assets/program-it-design.jpg";

const programs = [
  {
    name: "Air Condition & Refrigeration",
    image: programAC,
    slug: "air-condition-refrigeration"
  },
  {
    name: "Automobile",
    image: programAutomobile,
    slug: "automobile"
  },
  {
    name: "Catering & Hospitality",
    image: programCatering,
    slug: "catering-hospitality"
  },
  {
    name: "Cosmetology (Beauty & Haircare)",
    image: programCosmetology,
    slug: "cosmetology"
  },
  {
    name: "Crane Operation",
    image: programCrane,
    slug: "crane-operation"
  },
  {
    name: "Driving & Licensing",
    image: programDriving,
    slug: "driving-licensing"
  },
  {
    name: "Electrical Installation & Solar",
    image: programElectrical,
    slug: "electrical-solar"
  },
  {
    name: "ForkLift & Logistics",
    image: programForklift,
    slug: "forklift-logistics"
  },
  {
    name: "IT & Graphic Design",
    image: programIT,
    slug: "it-graphic-design"
  }
];

const ProgramsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                Our Training Programs
              </h1>
              <p className="text-lg text-muted-foreground">
                Explore our comprehensive range of vocational training programs designed to equip you with practical skills for a successful career.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program, index) => (
                <motion.div
                  key={program.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={program.image}
                        alt={program.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {program.name}
                      </h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProgramsPage;
