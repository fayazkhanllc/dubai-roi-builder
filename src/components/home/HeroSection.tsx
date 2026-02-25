import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920')",
        }}
      />
      <div className="absolute inset-0 bg-secondary/80" />

      <div className="container mx-auto px-4 relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Headline & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-foreground leading-tight">
              Invest in Dubai Real Estate with{" "}
              <span className="text-primary">High ROI</span> &{" "}
              <span className="text-primary">Golden Visa</span> Eligibility
            </h1>
            <p className="mt-6 text-lg text-secondary-foreground/70 font-body max-w-lg">
              Discover premium off-plan and ready properties with up to 10% rental yields.
              Tax-free income. World-class lifestyle.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-base">
                <Link to="/properties">Explore Properties</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right — Quick Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-card/90 backdrop-blur-md rounded-lg p-8 shadow-2xl"
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              Get Free Consultation
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Fill in your details and our expert will call you within 30 minutes.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <Input placeholder="Full Name" />
              <Input placeholder="Email Address" type="email" />
              <Input placeholder="Phone Number" type="tel" />
              <Input placeholder="WhatsApp Number" type="tel" />
              <Button type="submit" className="w-full">
                Request Callback
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
