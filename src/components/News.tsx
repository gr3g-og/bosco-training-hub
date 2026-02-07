import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Calendar, Bell } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const announcements = [{
  id: 1,
  type: "enrollment",
  title: "January 2026 Intake Now Open",
  description: "Applications are now being accepted for our January intake. Limited spots available for all programs.",
  date: "January 5, 2026",
  isNew: true
}, {
  id: 2,
  type: "event",
  title: "Annual Skills Exhibition",
  description: "Join us for our yearly showcase where students demonstrate their technical expertise and creativity.",
  date: "February 15, 2026",
  isNew: true
}, {
  id: 3,
  type: "news",
  title: "Partnership with Local Industries",
  description: "Don Bosco has partnered with leading companies to provide internship opportunities for our graduates.",
  date: "December 20, 2025",
  isNew: false
}];
const getTypeColor = (type: string) => {
  switch (type) {
    case "enrollment":
      return "bg-primary text-primary-foreground";
    case "event":
      return "bg-secondary text-secondary-foreground";
    case "news":
      return "bg-accent text-accent-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};
const getTypeLabel = (type: string) => {
  switch (type) {
    case "enrollment":
      return "Enrollment";
    case "event":
      return "Event";
    case "news":
      return "News";
    default:
      return type;
  }
};
export const News = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const advance = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % announcements.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(advance, 4000);
    return () => clearInterval(interval);
  }, [isPaused, advance]);

  const item = announcements[activeIndex];

  return (
    <section id="news" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-primary px-4 py-2 rounded-full mb-4 border-destructive bg-primary-foreground">
            <Bell className="w-4 h-4" />
            <span className="font-medium text-sm text-[#ff2e2e]">Latest Updates</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            News & Announcements
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[#050100]">
            Stay informed about upcoming events, enrollment periods, and important updates from Don Bosco Training Institute.
          </p>
        </motion.div>

        <div
          className="max-w-xl mx-auto relative overflow-hidden"
          style={{ minHeight: 220 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            >
              <Card className="hover:shadow-lg hover:shadow-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300 bg-background">
                <CardContent className="p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={getTypeColor(item.type)}>
                      {getTypeLabel(item.type)}
                    </Badge>
                    {item.isNew && (
                      <Badge variant="outline" className="border-secondary text-secondary">
                        New
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4 border-t border-border">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {announcements.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-primary scale-125"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to announcement ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};