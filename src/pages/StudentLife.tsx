import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StudentLife as StudentLifeSection } from "@/components/StudentLife";
import { SEO } from "@/components/SEO";

const StudentLife = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Student Life"
        description="Experience vibrant student life at Don Bosco Training Institute. Explore our campus facilities, student activities, sports, and the supportive community that shapes future professionals."
        path="/student-life"
      />
      <Navigation />
      <main className="pt-20">
        <StudentLifeSection />
      </main>
      <Footer />
    </div>
  );
};

export default StudentLife;
