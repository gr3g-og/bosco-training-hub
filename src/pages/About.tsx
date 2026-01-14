import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { GraduationCap, Building, Briefcase, Calendar, Globe, Sun, Wrench, HandHeart, ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import principalImage from "@/assets/principal.png";
import campusView2 from "@/assets/campus-view-2.png";
import administratorImage from "@/assets/administrator.avif";
import campus1 from "@/assets/campus-1.avif";
import campus2 from "@/assets/campus-2.avif";
import campus3 from "@/assets/campus-3.avif";
import campus4 from "@/assets/campus-4.avif";
import campus5 from "@/assets/campus-5.avif";
import campus6 from "@/assets/campus-6.avif";
import campus7 from "@/assets/campus-7.avif";
import campus8 from "@/assets/campus-8.avif";
import campus9 from "@/assets/campus-9.avif";
import campus10 from "@/assets/campus-10.avif";
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
const campusImages = [{
  image: campus1,
  title: "Campus Entrance",
  description: "Welcome to Don Bosco Technical Institute"
}, {
  image: campus2,
  title: "Modern Facilities",
  description: "State-of-the-art training facilities for hands-on learning"
}, {
  image: campus3,
  title: "Learning Environment",
  description: "Conducive spaces designed for practical skills development"
}, {
  image: campus4,
  title: "Technical Workshops",
  description: "Well-equipped workshops with industry-standard tools"
}, {
  image: campus5,
  title: "Student Activities",
  description: "Vibrant campus life fostering holistic development"
}, {
  image: campus6,
  title: "Training Center",
  description: "Dedicated spaces for specialized vocational training"
}, {
  image: campus7,
  title: "Campus Grounds",
  description: "Beautiful green spaces for recreation and community"
}, {
  image: campus8,
  title: "Skills Development",
  description: "Hands-on training in real-world environments"
}, {
  image: campus9,
  title: "Innovation Hub",
  description: "Modern technology and equipment for future-ready skills"
}, {
  image: campus10,
  title: "Community Space",
  description: "Gathering areas that bring students together"
}];
const About = () => {
  const heroRef = useRef(null);
  const historyRef = useRef(null);
  const leadershipRef = useRef(null);
  const statsRef = useRef(null);
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
  const leadershipInView = useInView(leadershipRef, {
    once: true,
    margin: "-100px"
  });
  const statsInView = useInView(statsRef, {
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
              <span className="font-display font-semibold mb-4 block text-destructive text-2xl">
                About Don Bosco Training Institute
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-secondary-foreground">Our School</h1>
              <p className="text-lg md:text-xl leading-relaxed text-black">Don Bosco Training Institute, Ashaiman is a reputable non-profit vocational and technical training centre located in Tema Community 22, off Afariwa–Akosombo Road, Ashaiman, in the Greater Accra Region of Ghana. We are managed by the Salesians of Don Bosco in collaboration with the Catholic Archdiocese of Accra and guided by the educational philosophy of St. John Bosco — a patron of youth education and empowerment. Our institute was established to respond to the pressing needs of young people, especially those who are economically and socially marginalized. We provide job-oriented, market-relevant skill training that equips students with the practical and technical abilities they need to excel in today’s competitive job market and earn a decent living. </p>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={heroInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="mt-12">
              <img src={campusView2} alt="Aerial view of Don Bosco Training Institute campus" className="w-full h-auto rounded-lg shadow-lg" />
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
              <span className="font-display font-semibold mb-2 block text-destructive text-3xl">
                Leadership
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                Guided by Experience
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} animate={leadershipInView ? {
              opacity: 1,
              y: 0
            } : {}} transition={{
              duration: 0.6,
              delay: 0.2
            }}>
                <div className="bg-card rounded-2xl p-8 shadow-medium h-full">
                  <div className="text-center">
                    <div className="relative inline-block p-1 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl mb-6">
                      <img src={principalImage} alt="Rev. Fr., Mark Eshun - Principal of Don Bosco Training Institute" className="rounded-xl w-full h-[300px] object-cover border-4 border-background" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-card-foreground mb-2">
                      Rev. Fr. Mark Eshun
                    </h3>
                    <p className="font-medium mb-4 text-xl text-primary">PRINCIPAL</p>
                    <p className="leading-relaxed text-black">
                      Under the leadership of Rev. Fr. Mark Eshun, Don Bosco Training Institute 
                      continues to uphold the Salesian tradition of education that focuses on the 
                      holistic development of young people.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              y: 30
            }} animate={leadershipInView ? {
              opacity: 1,
              y: 0
            } : {}} transition={{
              duration: 0.6,
              delay: 0.4
            }}>
                <div className="bg-card rounded-2xl p-8 shadow-medium h-full">
                  <div className="text-center">
                    <div className="relative inline-block p-1 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl mb-6">
                      <img src={administratorImage} alt="Rev. Fr. Peter Nghia Nguyen Trong - Administrator of Don Bosco Training Institute" className="rounded-xl w-full h-[300px] object-cover border-4 border-background" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-card-foreground mb-2">
                      Rev. Fr. Peter Nghia Nguyen Trong
                    </h3>
                    <p className="font-medium mb-4 text-xl text-primary">ADMINISTRATOR</p>
                    <p className="leading-relaxed text-black">
                      Rev. Fr. Peter Nghia Nguyen Trong serves as the Administrator, ensuring the 
                      smooth operation of the institute and supporting the mission to provide 
                      quality vocational training to youth.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
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
              
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                Making a Difference
              </h2>
              <p className="text-lg max-w-3xl mx-auto text-black">
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
            }} className="bg-card rounded-xl p-6 shadow-soft hover:shadow-lg hover:shadow-primary/20 border-transparent hover:border-primary/30 transition-all duration-300 border-2">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <initiative.icon className="w-6 h-6 text-[#a37a00]" />
                  </div>
                  <h4 className="text-xl font-display font-semibold mb-2 text-primary">
                    {initiative.title}
                  </h4>
                  <p className="text-black">{initiative.description}</p>
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
              <span className="font-display font-semibold mb-2 block text-destructive text-3xl">
                Special Initiatives
              </span>
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
                        <span className="font-display font-bold text-2xl text-[#fd6f44]">{item.year}</span>
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
              
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                Our Campus
              </h2>
              <p className="text-lg max-w-3xl mx-auto text-black">Take a visual tour of our expansive campus and vibrant learning environment.</p>
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