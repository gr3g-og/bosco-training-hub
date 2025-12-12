import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Smile, BookOpen, Users2, Sparkles, ChevronLeft, ChevronRight, X } from "lucide-react";
import studentLife1 from "@/assets/student-life-1.avif";
import studentLife2 from "@/assets/student-life-2.avif";
import studentLife3 from "@/assets/student-life-3.avif";
import studentLife4 from "@/assets/student-life-4.avif";
import studentLife5 from "@/assets/student-life-5.avif";
import studentLife6 from "@/assets/student-life-6.avif";
import studentLife7 from "@/assets/student-life-7.avif";
import studentLife8 from "@/assets/student-life-8.avif";
import studentLife9 from "@/assets/student-life-9.avif";
import studentLife10 from "@/assets/student-life-10.avif";
import studentLife11 from "@/assets/student-life-11.avif";
import studentLife12 from "@/assets/student-life-12.avif";
import studentLife13 from "@/assets/student-life-13.avif";
import studentLife14 from "@/assets/student-life-14.avif";
import studentLife15 from "@/assets/student-life-15.avif";
import studentLife16 from "@/assets/student-life-16.avif";
import studentLife17 from "@/assets/student-life-17.avif";
import studentLife18 from "@/assets/student-life-18.avif";
import studentLife19 from "@/assets/student-life-19.avif";
import studentLife20 from "@/assets/student-life-20.avif";

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
  { src: studentLife1, alt: "Student life at Don Bosco" },
  { src: studentLife2, alt: "Students in training" },
  { src: studentLife3, alt: "Campus activities" },
  { src: studentLife4, alt: "Practical training session" },
  { src: studentLife5, alt: "Student community" },
  { src: studentLife6, alt: "Learning environment" },
  { src: studentLife7, alt: "Hands-on training" },
  { src: studentLife8, alt: "Student workshop" },
  { src: studentLife9, alt: "Campus experience" },
  { src: studentLife10, alt: "Student gathering" },
  { src: studentLife11, alt: "Campus life" },
  { src: studentLife12, alt: "Student activities" },
  { src: studentLife13, alt: "Training facilities" },
  { src: studentLife14, alt: "Student events" },
  { src: studentLife15, alt: "Learning moments" },
  { src: studentLife16, alt: "Practical sessions" },
  { src: studentLife17, alt: "Student collaboration" },
  { src: studentLife18, alt: "Institute activities" },
  { src: studentLife19, alt: "Campus moments" },
  { src: studentLife20, alt: "Student experiences" },
];

export const StudentLife = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

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

  const openGallery = (index: number = 0) => {
    setGalleryIndex(index);
    setGalleryOpen(true);
  };

  const nextGalleryImage = () => {
    setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevGalleryImage = () => {
    setGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
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
              <div className="relative rounded-xl overflow-hidden shadow-medium h-80 md:h-96 bg-muted">
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

              <Button size="lg" variant="default" onClick={() => openGallery(0)} className="w-full sm:w-auto">
                View More Photos
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Gallery Dialog */}
      <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
        <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 bg-background/95 backdrop-blur-sm border-border">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={() => setGalleryOpen(false)}
              className="absolute top-4 right-4 z-50 bg-background/80 hover:bg-background text-foreground rounded-full p-2 transition-colors"
              aria-label="Close gallery"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 z-50 bg-background/80 text-foreground px-3 py-1 rounded-full text-sm font-medium">
              {galleryIndex + 1} / {galleryImages.length}
            </div>

            {/* Previous Button */}
            <button
              onClick={prevGalleryImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-background/80 hover:bg-background text-foreground rounded-full p-3 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.img
              key={galleryIndex}
              src={galleryImages[galleryIndex].src}
              alt={galleryImages[galleryIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Next Button */}
            <button
              onClick={nextGalleryImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-background/80 hover:bg-background text-foreground rounded-full p-3 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-[80vw] overflow-x-auto px-4 py-2 bg-background/60 rounded-lg">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setGalleryIndex(index)}
                  className={`flex-shrink-0 w-12 h-12 rounded overflow-hidden transition-all ${
                    galleryIndex === index ? "ring-2 ring-primary scale-110" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
