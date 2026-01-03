import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Target, Award, Users, TrendingUp, Heart, Lightbulb, Shield, GraduationCap, Building, Briefcase, Calendar, Globe, Sun, Wrench, HandHeart, ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import principalImage from "@/assets/principal.png";
import facilitiesImage from "@/assets/facilities.jpg";
import studentLife1 from "@/assets/student-life-1.avif";
import studentLife2 from "@/assets/student-life-2.avif";
import studentLife3 from "@/assets/student-life-3.avif";
import campusAerial from "@/assets/campus-aerial.png";
import studentLife4 from "@/assets/student-life-4.avif";
import studentLife5 from "@/assets/student-life-5.avif";
import programAutomobile from "@/assets/program-automobile.jpg";
import programElectrical from "@/assets/program-electrical.jpg";
const coreValues = [{
  icon: Award,
  title: "Excellence",
  description: "We strive for the highest standards in everything we do."
}, {
  icon: Shield,
  title: "Integrity",
  description: "We uphold honesty and strong moral principles."
}, {
  icon: Heart,
  title: "Service",
  description: "We serve our community with dedication and compassion."
}, {
  icon: Lightbulb,
  title: "Innovation",
  description: "We embrace new ideas and modern training methods."
}];
const stats = [{
  icon: GraduationCap,
  value: "5000+",
  label: "Students Trained"
}, {
  icon: Calendar,
  value: "25+",
  label: "Years of Excellence"
}, {
  icon: Building,
  value: "9",
  label: "Programs Offered"
}, {
  icon: Briefcase,
  value: "85%",
  label: "Job Placement Rate"
}];
const timeline = [{
  year: "Foundation",
  title: "Salesian Mission Begins",
  description: "Established by the Salesians of Don Bosco in partnership with the Catholic Archdiocese of Accra, following St. John Bosco's mission to empower marginalized youth through skills training."
}, {
  year: "BINA",
  title: "German Partnership",
  description: "Launched the BINA Programme in partnership with the German Government, providing hands-on training and strengthening international collaboration for youth development."
}, {
  year: "Solar",
  title: "Solar Training Center",
  description: "Established a regional Solar Training Center with German, Korean, and Samsung support, training trainers across West Africa including centers in Sunyani, Tatale, and Monrovia, Liberia."
}, {
  year: "2024",
  title: "Ghana-Italy Partnership",
  description: "Italian President Sergio Mattarella launched the 'Ghana Project' partnership with Confindustria Alto Adriatico and the Salesians, focusing on youth skills development."
}, {
  year: "2025",
  title: "Climate & TVET Leadership",
  description: "Hosted JoyNews-German Embassy #ClimateTalks on green solutions (July) and TVET workshops on youth employment (Sept), reinforcing our role as a TVET leader in Ghana."
}];
const initiatives = [{
  icon: HandHeart,
  title: "Women's Empowerment",
  description: "Electronics and phone repair training for women to combat barriers like trafficking and promote economic independence."
}, {
  icon: Sun,
  title: "Green Skills Training",
  description: "Solar installation and sustainable technology programs preparing youth for the growing renewable energy sector."
}, {
  icon: Globe,
  title: "Regional Impact",
  description: "Training trainers across West Africa, extending our reach to Ghana, Liberia, and beyond through partner centers."
}, {
  icon: Wrench,
  title: "NVTI Certification",
  description: "Employment-oriented training leading to NVTI-compatible certifications recognized by employers nationwide."
}];
const facilities = [{
  image: facilitiesImage,
  title: "Modern Workshops"
}, {
  image: studentLife1,
  title: "Practical Training"
}, {
  image: studentLife2,
  title: "Classroom Learning"
}, {
  image: studentLife3,
  title: "Student Activities"
}];
const campusImages = [{
  image: campusAerial,
  title: "Aerial View of Our Campus",
  description: "A bird's eye view showcasing our expansive campus with solar panels and modern facilities"
}, {
  image: facilitiesImage,
  title: "Modern Training Workshops",
  description: "State-of-the-art workshops equipped with industry-standard tools and equipment"
}, {
  image: programAutomobile,
  title: "Automobile Training Center",
  description: "Hands-on vehicle maintenance and repair training facility"
}, {
  image: programElectrical,
  title: "Electrical Installation Lab",
  description: "Fully equipped electrical training laboratory"
}, {
  image: studentLife4,
  title: "Student Activities",
  description: "Vibrant campus life with diverse student engagement"
}, {
  image: studentLife5,
  title: "Learning Environment",
  description: "Conducive spaces for theoretical and practical learning"
}];
const About = () => {
  const heroRef = useRef(null);
  const historyRef = useRef(null);
  const missionRef = useRef(null);
  const leadershipRef = useRef(null);
  const statsRef = useRef(null);
  const facilitiesRef = useRef(null);
  const campusRef = useRef(null);
  const [currentCampusSlide, setCurrentCampusSlide] = useState(0);
  const heroInView = useInView(heroRef, {
    once: true,
    margin: "-100px"
  });
  const historyInView = useInView(historyRef, {
    once: true,
    margin: "-100px"
  });
  const missionInView = useInView(missionRef, {
    once: true,
    margin: "-100px"
  });
  const leadershipInView = useInView(leadershipRef, {
    once: true,
    margin: "-100px"
  });
  const statsInView = useInView(statsRef, {
    once: true,
    margin: "-100px"
  });
  const facilitiesInView = useInView(facilitiesRef, {
    once: true,
    margin: "-100px"
  });
  const campusInView = useInView(campusRef, {
    once: true,
    margin: "-100px"
  });

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCampusSlide(prev => (prev + 1) % campusImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const nextSlide = () => {
    setCurrentCampusSlide(prev => (prev + 1) % campusImages.length);
  };
  const prevSlide = () => {
    setCurrentCampusSlide(prev => (prev - 1 + campusImages.length) % campusImages.length);
  };
  return <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={heroInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6
          }} className="text-center max-w-4xl mx-auto">
              <span className="text-secondary font-display font-semibold text-lg mb-4 block">
                About Don Bosco Training Institute
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">Our School</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">Don Bosco Training Institute, Ashaiman is a reputable non-profit vocational and technical training centre located in Tema Community 22, off Afariwa–Akosombo Road, Ashaiman, in the Greater Accra Region of Ghana. We are managed by the Salesians of Don Bosco in collaboration with the Catholic Archdiocese of Accra and guided by the educational philosophy of St. John Bosco — a patron of youth education and empowerment. Our institute was established to respond to the pressing needs of young people, especially those who are economically and socially marginalized. We provide job-oriented, market-relevant skill training that equips students with the practical and technical abilities they need to excel in today’s competitive job market and earn a decent living. </p>
            </motion.div>
          </div>
        </section>

        {/* Special Initiatives Section */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={historyInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <span className="text-secondary font-display font-semibold text-lg mb-2 block">
                Special Initiatives
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                Making a Difference
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Beyond traditional training, we lead specialized programs addressing critical needs 
                in our community and across the region.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {initiatives.map((initiative, index) => <motion.div key={initiative.title} initial={{
              opacity: 0,
              y: 30
            }} animate={historyInView ? {
              opacity: 1,
              y: 0
            } : {}} transition={{
              duration: 0.5,
              delay: 0.2 + index * 0.1
            }} className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow duration-300">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <initiative.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="text-xl font-display font-semibold text-card-foreground mb-2">
                    {initiative.title}
                  </h4>
                  <p className="text-muted-foreground">{initiative.description}</p>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* History Section */}
        <section ref={historyRef} className="bg-background py-24">
          <div className="container mx-auto px-4">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={historyInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              
              
              
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />
              
              <div className="space-y-12">
                {timeline.map((item, index) => <motion.div key={item.year} initial={{
                opacity: 0,
                x: index % 2 === 0 ? -30 : 30
              }} animate={historyInView ? {
                opacity: 1,
                x: 0
              } : {}} transition={{
                duration: 0.5,
                delay: index * 0.1
              }} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="bg-card rounded-xl p-6 shadow-soft">
                        <span className="text-secondary font-display font-bold text-2xl">{item.year}</span>
                        <h3 className="text-xl font-display font-semibold text-card-foreground mt-2">{item.title}</h3>
                        <p className="text-muted-foreground mt-2">{item.description}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-secondary rounded-full ring-4 ring-background z-10 hidden md:block" />
                    <div className="flex-1 hidden md:block" />
                  </motion.div>)}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section ref={missionRef} className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              

              
            </div>

            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={missionInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="text-center mb-12">
              
            </motion.div>

            
          </div>
        </section>

        {/* Leadership Section */}
        <section ref={leadershipRef} className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={leadershipInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <span className="text-secondary font-display font-semibold text-lg mb-2 block">
                Leadership
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                Guided by Experience
              </h2>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={leadershipInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl p-8 md:p-12 shadow-medium">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-center">
                    <div className="relative inline-block p-1 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl">
                      <img src={principalImage} alt="Rev. Fr., Mark Eshun - Principal of Don Bosco Training Institute" className="rounded-xl w-full h-[350px] object-cover border-4 border-background" />
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
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={statsInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Our Impact in Numbers
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Over the years, we have made a significant impact in vocational education and youth empowerment.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => <motion.div key={stat.label} initial={{
              opacity: 0,
              scale: 0.8
            }} animate={statsInView ? {
              opacity: 1,
              scale: 1
            } : {}} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} className="text-center">
                  <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <p className="text-5xl font-display font-bold mb-2">{stat.value}</p>
                  <p className="text-lg opacity-90">{stat.label}</p>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section ref={facilitiesRef} className="py-24 bg-background">
          
        </section>

        {/* Our Campus Carousel Section */}
        <section ref={campusRef} className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={campusInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6
          }} className="text-center mb-12">
              <span className="text-secondary font-display font-semibold text-lg mb-2 block">
                Explore
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                Our Campus
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Take a visual tour of our expansive campus, modern facilities, and vibrant learning environment.
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={campusInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="relative max-w-5xl mx-auto">
              {/* Main Carousel */}
              <div className="relative overflow-hidden rounded-2xl shadow-medium">
                <div className="relative h-[400px] md:h-[500px]">
                  {campusImages.map((item, index) => <div key={index} className={`absolute inset-0 transition-opacity duration-700 ${index === currentCampusSlide ? "opacity-100" : "opacity-0"}`}>
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-background mb-2">
                          {item.title}
                        </h3>
                        <p className="text-background/90 text-lg max-w-2xl">
                          {item.description}
                        </p>
                      </div>
                    </div>)}
                </div>

                {/* Navigation Arrows */}
                <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/20 hover:bg-background/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors" aria-label="Previous slide">
                  <ChevronLeft className="w-6 h-6 text-background" />
                </button>
                <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/20 hover:bg-background/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors" aria-label="Next slide">
                  <ChevronRight className="w-6 h-6 text-background" />
                </button>
              </div>

              {/* Dot Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {campusImages.map((_, index) => <button key={index} onClick={() => setCurrentCampusSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentCampusSlide ? "bg-secondary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} aria-label={`Go to slide ${index + 1}`} />)}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default About;