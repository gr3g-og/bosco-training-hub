import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { StudentLife as StudentLifeSection } from "@/components/StudentLife";

const StudentLife = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <StudentLifeSection />
      </main>
      <Footer />
    </div>
  );
};

export default StudentLife;
