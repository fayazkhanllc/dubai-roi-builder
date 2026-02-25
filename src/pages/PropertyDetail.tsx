import { useParams, Link } from "react-router-dom";
import { properties } from "@/data/properties";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BedDouble, Bath, Maximize, MapPin, Calendar, Building2, TrendingUp, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-32 text-center">
          <h1 className="text-2xl font-display font-bold text-foreground">Property Not Found</h1>
          <Button asChild className="mt-4"><Link to="/properties">Back to Properties</Link></Button>
        </div>
        <Footer />
      </div>
    );
  }

  const similar = properties.filter((p) => p.id !== property.id && p.location === property.location).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <Link to="/properties" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Properties
          </Link>

          {/* Gallery */}
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {property.images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-lg overflow-hidden"
              >
                <img src={img} alt={`${property.title} ${i + 1}`} className="w-full h-72 md:h-96 object-cover" />
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Details */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {property.offPlan && <Badge className="bg-primary text-primary-foreground">Off-Plan</Badge>}
                  <Badge variant="secondary">{property.type}</Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {property.location}
                  </Badge>
                </div>
                <h1 className="text-3xl font-display font-bold text-foreground">{property.title}</h1>
                <p className="text-3xl font-bold text-primary mt-2">{property.priceFormatted}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: BedDouble, label: "Bedrooms", value: property.bedrooms || "N/A" },
                  { icon: Bath, label: "Bathrooms", value: property.bathrooms },
                  { icon: Maximize, label: "Area", value: `${property.area} sqft` },
                  { icon: TrendingUp, label: "ROI", value: `${property.roi}%` },
                ].map((d) => (
                  <div key={d.label} className="bg-muted rounded-lg p-4 text-center">
                    <d.icon className="h-5 w-5 mx-auto text-primary mb-1" />
                    <p className="text-xs text-muted-foreground">{d.label}</p>
                    <p className="font-semibold text-foreground">{d.value}</p>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">Description</h3>
                <p className="text-muted-foreground leading-relaxed">{property.description}</p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: Calendar, label: "Handover", value: property.handoverDate },
                  { icon: Building2, label: "Developer", value: property.developer },
                  { label: "Payment Plan", value: property.paymentPlan },
                ].map((d) => (
                  <div key={d.label} className="bg-muted rounded-lg p-4">
                    <p className="text-xs text-muted-foreground">{d.label}</p>
                    <p className="font-semibold text-foreground">{d.value}</p>
                  </div>
                ))}
              </div>

              {/* Floor Plan placeholder */}
              <div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">Floor Plan</h3>
                <div className="bg-muted rounded-lg h-64 flex items-center justify-center text-muted-foreground">
                  Floor plan image placeholder
                </div>
              </div>
            </div>

            {/* Schedule a Tour */}
            <div>
              <div className="bg-card border border-border rounded-lg p-6 sticky top-28">
                <h3 className="font-display font-semibold text-lg text-foreground mb-4">Schedule a Tour</h3>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <Input placeholder="Full Name" />
                  <Input placeholder="Email" type="email" />
                  <Input placeholder="Phone" type="tel" />
                  <Input placeholder="Preferred Date" type="date" />
                  <Button type="submit" className="w-full">Book a Tour</Button>
                </form>
              </div>
            </div>
          </div>

          {/* Similar */}
          {similar.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-display font-bold text-foreground mb-6">Similar Properties</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {similar.map((p) => (
                  <Link
                    key={p.id}
                    to={`/properties/${p.id}`}
                    className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <img src={p.images[0]} alt={p.title} className="w-full h-44 object-cover" loading="lazy" />
                    <div className="p-4">
                      <h4 className="font-display font-semibold text-foreground">{p.title}</h4>
                      <p className="text-primary font-bold mt-1">{p.priceFormatted}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PropertyDetail;
