import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
const contactInfo = [{
  icon: Phone,
  title: "Phone",
  details: "Contact us for enrollment",
  link: "tel:+233"
}, {
  icon: Mail,
  title: "Email",
  details: "info@donboscoashaiman.com",
  link: "mailto:info@donboscoashaiman.com"
}, {
  icon: MapPin,
  title: "Location",
  details: "Ashaiman, Ghana",
  link: "#"
}, {
  icon: Clock,
  title: "Office Hours",
  details: "Mon - Fri: 8AM - 5PM",
  link: "#"
}];
export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="contact" className="py-24 bg-gradient-subtle" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <span className="font-display font-semibold mb-2 block text-destructive text-2xl">
            Open Enrollment
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your future? Get in touch with us to learn more about our programs
            and enrollment process.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="space-y-6">
            <div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                Get in Touch
              </h3>
              <p className="text-muted-foreground mb-6">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="First Name" className="bg-background" />
                <Input placeholder="Last Name" className="bg-background" />
              </div>
              <Input type="email" placeholder="Email Address" className="bg-background" />
              <Input type="tel" placeholder="Phone Number" className="bg-background" />
              <Textarea placeholder="Tell us about your interest and which program you'd like to join..." rows={5} className="bg-background resize-none" />
              <Button size="lg" className="w-full">
                Submit Application
              </Button>
            </form>

            <p className="text-sm text-muted-foreground">
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="space-y-6">
            <div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-6">
                Reach out to us through any of these channels. We're here to help!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => <motion.div key={info.title} initial={{
              opacity: 0,
              y: 20
            }} animate={isInView ? {
              opacity: 1,
              y: 0
            } : {}} transition={{
              duration: 0.5,
              delay: 0.4 + index * 0.1
            }}>
                  <Card className="hover:shadow-soft transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                          <h4 className="font-display font-semibold text-foreground mb-1">
                            {info.title}
                          </h4>
                          <a href={info.link} className="text-muted-foreground hover:text-secondary transition-colors">
                            {info.details}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>)}
            </div>

            <Card className="bg-gradient-accent text-secondary-foreground border-0 shadow-accent">
              <CardContent className="p-8 text-center">
                <h4 className="text-2xl font-display font-bold mb-2">
                  Enrollment Open Now!
                </h4>
                <p className="mb-4">
                  Join our next intake and start building your future today.
                </p>
                <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90" asChild>
                  <a href="/programs">View Available Programs</a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>;
};