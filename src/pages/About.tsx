import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Award, Users, TrendingUp, Heart, Lightbulb, Shield, Clock, GraduationCap, Building, Briefcase, Calendar } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import principalImage from "@/assets/principal.png";
import facilitiesImage from "@/assets/facilities.jpg";
import studentLife1 from "@/assets/student-life-1.avif";
import studentLife2 from "@/assets/student-life-2.avif";
import studentLife3 from "@/assets/student-life-3.avif";

const coreValues = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest standards in everything we do.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold honesty and strong moral principles.",
  },
  {
    icon: Heart,
    title: "Service",
    description: "We serve our community with dedication and compassion.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new ideas and modern training methods.",
  },
];

const stats = [
  { icon: GraduationCap, value: "5000+", label: "Students Trained" },
  { icon: Calendar, value: "25+", label: "Years of Excellence" },
  { icon: Building, value: "9", label: "Programs Offered" },
  { icon: Briefcase, value: "85%", label: "Job Placement Rate" },
];

const timeline = [
  {
    year: "1998",
    title: "Foundation",
    description: "Don Bosco Training Institute was established in Ashaiman, Ghana, following the Salesian tradition of youth empowerment.",
  },
  {
    year: "2005",
    title: "Expansion",
    description: "Added new programs including Electrical Installation and Automobile Technology to meet growing industry demands.",
  },
  {
    year: "2012",
    title: "Modern Facilities",
    description: "Upgraded to state-of-the-art training facilities with modern equipment and expanded workshops.",
  },
  {
    year: "2018",
    title: "Digital Integration",
    description: "Introduced IT & Computer Design programs and integrated digital learning tools across all courses.",
  },
  {
    year: "2023",
    title: "Continued Growth",
    description: "Expanded Heavy Duty Equipment programs and strengthened industry partnerships for better job placements.",
  },
];

const facilities = [
  { image: facilitiesImage, title: "Modern Workshops" },
  { image: studentLife1, title: "Practical Training" },
  { image: studentLife2, title: "Classroom Learning" },
  { image: studentLife3, title: "Student Activities" },
];

const About = () => {
  const heroRef = useRef(null);
  const historyRef = useRef(null);
  const missionRef = useRef(null);
  const leadershipRef = useRef(null);
  const statsRef = useRef(null);
  const facilitiesRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const historyInView = useInView(historyRef, { once: true, margin: "-100px" });
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const leadershipInView = useInView(leadershipRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const facilitiesInView = useInView(facilitiesRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="text-secondary font-display font-semibold text-lg mb-2 block">
                About Don Bosco
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                Empowering Youth Through Skills & Education
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Following the Salesian tradition of St. John Bosco, we are committed to transforming 
                young lives through quality vocational education and character formation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* History Section */}
        <section ref={historyRef} className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={historyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-secondary font-display font-semibold text-lg mb-2 block">
                Our Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                A Legacy of Excellence
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                For over two decades, Don Bosco Training Institute has been at the forefront of 
                vocational education in Ghana, shaping skilled professionals who drive our nation forward.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={historyInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex flex-col md:flex-row items-center gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="bg-card rounded-xl p-6 shadow-soft">
                        <span className="text-secondary font-display font-bold text-2xl">{item.year}</span>
                        <h3 className="text-xl font-display font-semibold text-card-foreground mt-2">{item.title}</h3>
                        <p className="text-muted-foreground mt-2">{item.description}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-secondary rounded-full ring-4 ring-background z-10 hidden md:block" />
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section ref={missionRef} className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={missionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl p-8 shadow-medium"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-card-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide ultra-modern, job-oriented skill training that equips young people with 
                  the knowledge, competencies, and character needed to succeed in their chosen careers 
                  and contribute positively to society.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={missionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-medium"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-card-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading vocational training institution in Ghana and beyond, recognized 
                  for producing highly skilled, ethical, and innovative professionals who drive 
                  economic growth and social development.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl font-display font-bold text-foreground mb-4">Our Core Values</h3>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={missionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-xl font-display font-semibold text-card-foreground mb-2">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section ref={leadershipRef} className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={leadershipInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-secondary font-display font-semibold text-lg mb-2 block">
                Leadership
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                Guided by Experience
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={leadershipInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-medium">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-center">
                    <div className="relative inline-block p-1 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl">
                      <img
                        src={principalImage}
                        alt="Rev. Fr., Mark Eshun - Principal of Don Bosco Training Institute"
                        className="rounded-xl w-full h-[350px] object-cover border-4 border-background"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-card-foreground mb-2">
                      Rev. Fr., Mark Eshun
                    </h3>
                    <p className="text-secondary font-medium mb-4">Principal</p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Under the leadership of Rev. Fr. Mark Eshun, Don Bosco Training Institute 
                      continues to uphold the Salesian tradition of education that focuses on the 
                      holistic development of young people.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      His dedication to excellence in vocational training and commitment to the 
                      welfare of students has helped shape the institution into a beacon of hope 
                      for youth seeking quality skill development.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Our Impact in Numbers
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Over the years, we have made a significant impact in vocational education and youth empowerment.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <p className="text-5xl font-display font-bold mb-2">{stat.value}</p>
                  <p className="text-lg opacity-90">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section ref={facilitiesRef} className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={facilitiesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-secondary font-display font-semibold text-lg mb-2 block">
                Our Facilities
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                State-of-the-Art Learning Environment
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our modern facilities provide students with hands-on experience using industry-standard 
                equipment and technology.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {facilities.map((facility, index) => (
                <motion.div
                  key={facility.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={facilitiesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl"
                >
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex items-end p-6">
                    <h3 className="text-background font-display font-semibold text-lg">
                      {facility.title}
                    </h3>
                  </div>
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

export default About;
