import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import WhyInvest from "@/components/home/WhyInvest";
import Testimonials from "@/components/home/Testimonials";
import AboutPreview from "@/components/home/AboutPreview";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedProjects />
      <WhyInvest />
      <Testimonials />
      <AboutPreview />
      <Footer />
    </div>
  );
};

export default Index;
