import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Programs } from "@/components/Programs";
import { News } from "@/components/News";
import { Testimonial } from "@/components/Testimonial";
import { ApplyCTA } from "@/components/ApplyCTA";
import { Contact } from "@/components/Contact";
import { ContactStrip } from "@/components/ContactStrip";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Don Bosco Training Institute, Ashaiman - Technical Skills for All"
        description="Ultra-modern job-oriented skill training at Don Bosco Training Institute, Ashaiman. Equip yourself with practical vocational skills in electrical, automotive, IT, cosmetology, and more."
        path="/"
      />
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <About />
        <Programs />
        <News />
        <Testimonial />
        <ApplyCTA />
        <Contact />
      </main>
      <ContactStrip />
      <Footer />
    </div>
  );
};

export default Index;
