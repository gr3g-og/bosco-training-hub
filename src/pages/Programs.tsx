import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const programs = [
  {
    name: "Air Condition & Refrigeration",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&h=600&fit=crop",
    slug: "air-condition-refrigeration"
  },
  {
    name: "Automobile",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop",
    slug: "automobile"
  },
  {
    name: "Catering & Hospitality",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop",
    slug: "catering-hospitality"
  },
  {
    name: "Cosmetology (Beauty & Haircare)",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop",
    slug: "cosmetology"
  },
  {
    name: "Crane Operation",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
    slug: "crane-operation"
  },
  {
    name: "Driving & Licensing",
    image: "https://images.unsplash.com/photo-1449965408869-euj9de4c3da4?w=800&h=600&fit=crop",
    slug: "driving-licensing"
  },
  {
    name: "Electrical Installation & Solar",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
    slug: "electrical-solar"
  },
  {
    name: "ForkLift & Logistics",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    slug: "forklift-logistics"
  },
  {
    name: "IT & Graphic Design",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
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
