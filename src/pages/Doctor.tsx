import Navbar from "@/components/Navbar";
import DoctorSection from "@/components/DoctorSection";
import Footer from "@/components/Footer";

const Doctor = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20" />
      <DoctorSection />
      <Footer />
    </div>
  );
};

export default Doctor;
