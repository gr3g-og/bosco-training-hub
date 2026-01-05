import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ArrowRight, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  return <section id="news" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-12">
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

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {announcements.map((item, index) => <motion.div key={item.id} initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.5,
          delay: index * 0.1
        }}>
              <Card className="h-full hover:shadow-lg hover:shadow-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300 bg-background">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={getTypeColor(item.type)}>
                      {getTypeLabel(item.type)}
                    </Badge>
                    {item.isNew && <Badge variant="outline" className="border-secondary text-secondary">
                        New
                      </Badge>}
                  </div>
                  
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>)}
        </div>
      </div>
    </section>;
};