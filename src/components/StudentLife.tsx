import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Smile, BookOpen, Users2, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import studentLifeImage from "@/assets/student-life.jpg";
import facilitiesImage from "@/assets/facilities.jpg";
import heroImage from "@/assets/hero-image.jpg";

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

const galleryImages = [
  { src: studentLifeImage, alt: "Students in training workshop" },
  { src: facilitiesImage, alt: "Modern training facilities" },
  { src: heroImage, alt: "Student gathering and activities" },
];

export const StudentLife = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="student-life" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
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
              className="pt-4 space-y-4"
            >
              {/* Gallery Slideshow */}
              <div className="relative rounded-xl overflow-hidden shadow-medium h-64 bg-muted">
                {galleryImages.map((image, index) => (
                  <motion.img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: currentSlide === index ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  />
                ))}
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-2 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-2 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentSlide === index ? "bg-primary w-6" : "bg-background/60"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <Button size="lg" variant="default" asChild className="w-full sm:w-auto">
                <a href="#contact">View More Photos</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
