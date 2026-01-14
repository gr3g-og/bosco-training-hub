import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Programs } from "@/components/Programs";
import { News } from "@/components/News";
import { Contact } from "@/components/Contact";
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
        <About />
        <Programs />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
export default Index;