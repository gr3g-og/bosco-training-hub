import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { programDetails } from "@/data/programDetails";
import { breadcrumbLd, courseLd } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Award, Briefcase } from "lucide-react";

const ProgramDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const program = slug ? programDetails[slug] : undefined;

  if (!program) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-3xl font-display font-bold text-foreground mb-4">
              Program Not Found
            </h1>
            <p className="text-muted-foreground mb-6">
              The program you're looking for doesn't exist.
            </p>
            <Link to="/programs">
              <Button variant="default">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Programs
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={program.name}
        description={program.overview.slice(0, 155)}
        path={`/programs/${slug}`}
        image={program.image}
        jsonLd={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Programs", path: "/programs" },
            { name: program.name, path: `/programs/${slug}` },
          ]),
          courseLd({
            name: program.name,
            description: program.overview,
            slug: slug!,
          }),
        ]}
      />
      <Navigation />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-[55vh] min-h-[360px] overflow-hidden">
          <img
            src={program.image}
            alt={program.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="container mx-auto">
              <Link
                to="/programs"
                className="inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.12em] text-white/60 hover:text-primary-light transition-colors mb-5"
              >
                <ArrowLeft className="mr-1.5 h-3.5 w-3.5" />
                All Programs
              </Link>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display font-bold text-white leading-[1.05]"
                style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
              >
                {program.name}
              </motion.h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {program.overview}
                </p>
              </motion.div>

              {/* What You'll Learn */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="border-border/50">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-display font-bold text-foreground">
                        What You'll Learn
                      </h2>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {program.modules.map((mod, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                          {mod}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Certification */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="border-border/50 bg-primary/5">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-display font-bold text-foreground">
                        Certification
                      </h2>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      {program.certification}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Career Opportunities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="border-border/50">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-secondary" />
                      </div>
                      <h2 className="text-2xl font-display font-bold text-foreground">
                        Career Opportunities
                      </h2>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {program.careers.map((career, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary shrink-0" />
                          {career}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center pt-4"
              >
                <Link to="/#contact">
                  <Button size="lg" className="text-base">
                    Enroll Now
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProgramDetailPage;
