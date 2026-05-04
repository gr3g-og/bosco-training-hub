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
import { organizationLd, websiteLd } from "@/lib/seo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Don Bosco Training Institute, Ashaiman — Learn a Trade, Earn a Living"
        description="Salesian non-profit vocational centre in Ashaiman, Ghana offering job-oriented training in electrical, automotive, IT, cosmetology, catering and more."
        path="/"
        jsonLd={[organizationLd, websiteLd]}
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
