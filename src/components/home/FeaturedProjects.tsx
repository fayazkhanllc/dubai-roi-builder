import { Link } from "react-router-dom";
import { properties } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BedDouble, Bath, MapPin, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const featured = properties.filter((p) => p.featured);

const FeaturedProjects = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Handpicked off-plan and ready properties with exceptional ROI potential.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-border"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.images[0]}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  {p.offPlan && (
                    <Badge className="bg-primary text-primary-foreground">Off-Plan</Badge>
                  )}
                  <Badge variant="secondary">{p.type}</Badge>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                  <MapPin className="h-3 w-3" /> {p.location}
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground">
                  {p.title}
                </h3>
                <p className="text-2xl font-bold text-primary mt-2">{p.priceFormatted}</p>
                <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                  {p.bedrooms > 0 && (
                    <span className="flex items-center gap-1">
                      <BedDouble className="h-4 w-4" /> {p.bedrooms} Bed
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Bath className="h-4 w-4" /> {p.bathrooms} Bath
                  </span>
                  <span className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4 text-primary" /> {p.roi}% ROI
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
                  <span>Payment: {p.paymentPlan}</span>
                  <span>Handover: {p.handoverDate}</span>
                </div>
                <div className="flex gap-2 mt-5">
                  <Button asChild size="sm" className="flex-1">
                    <Link to={`/properties/${p.id}`}>View Details</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <Link to="/contact">Schedule Tour</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
