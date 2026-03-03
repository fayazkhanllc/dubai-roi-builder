import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import WhyInvest from "@/components/home/WhyInvest";
import TrustedPartners from "@/components/home/TrustedPartners";
import Testimonials from "@/components/home/Testimonials";
import AboutPreview from "@/components/home/AboutPreview";
import GroupCompanies from "@/components/home/GroupCompanies";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedProjects />
      <WhyInvest />
      <TrustedPartners />
      <Testimonials />
      <AboutPreview />
      <GroupCompanies />
      <Footer />
    </div>
  );
};

export default Index;
