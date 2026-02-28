import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AboutPreview = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              About <span className="text-primary">Qalaht Al Tilal Real Estate</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              With over two decades of experience in the UAE's dynamic real estate market,
              Qalaht Al Tilal Real Estate has helped hundreds of investors achieve exceptional returns.
              We are RERA-licensed, trusted by global clients, and partnered with Dubai's
              leading developers.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you're looking for a high-ROI investment, Golden Visa eligibility,
              or your dream home in Dubai — our team of experts is here to guide you
              every step of the way.
            </p>
            <Button asChild className="mt-6">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
              alt="Dubai skyline"
              className="w-full h-80 object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
