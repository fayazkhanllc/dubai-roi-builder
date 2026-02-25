import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { properties, locations } from "@/data/properties";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { BedDouble, Bath, MapPin, TrendingUp, Search } from "lucide-react";
import { motion } from "framer-motion";

const ITEMS_PER_PAGE = 6;

const Properties = () => {
  const [budget, setBudget] = useState([0, 15000000]);
  const [bedrooms, setBedrooms] = useState("any");
  const [type, setType] = useState("any");
  const [location, setLocation] = useState("any");
  const [sort, setSort] = useState("latest");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let result = properties.filter((p) => {
      if (p.price < budget[0] || p.price > budget[1]) return false;
      if (bedrooms !== "any" && p.bedrooms !== Number(bedrooms)) return false;
      if (type !== "any" && p.type !== type) return false;
      if (location !== "any" && p.location !== location) return false;
      return true;
    });

    if (sort === "price-asc") result.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") result.sort((a, b) => b.price - a.price);
    else if (sort === "roi") result.sort((a, b) => b.roi - a.roi);

    return result;
  }, [budget, bedrooms, type, location, sort]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paged = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
            Explore <span className="text-primary">Properties</span>
          </h1>

          {/* Filters */}
          <div className="bg-card border border-border rounded-lg p-6 mb-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Budget (AED)</label>
              <Slider
                min={0}
                max={15000000}
                step={100000}
                value={budget}
                onValueChange={setBudget}
              />
              <p className="text-xs text-muted-foreground mt-1">
                {(budget[0] / 1e6).toFixed(1)}M – {(budget[1] / 1e6).toFixed(1)}M
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Bedrooms</label>
              <Select value={bedrooms} onValueChange={setBedrooms}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <SelectItem key={n} value={String(n)}>{n} Bed</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Type</label>
              <Select value={type} onValueChange={setType}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">All Types</SelectItem>
                  <SelectItem value="Apartment">Apartment</SelectItem>
                  <SelectItem value="Villa">Villa</SelectItem>
                  <SelectItem value="Commercial">Commercial</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Location</label>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">All Locations</SelectItem>
                  {locations.map((l) => (
                    <SelectItem key={l} value={l}>{l}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Sort By</label>
              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="roi">ROI Potential</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results */}
          <p className="text-sm text-muted-foreground mb-6">{filtered.length} properties found</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {paged.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-border"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.images[0]}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {p.offPlan && <Badge className="bg-primary text-primary-foreground">Off-Plan</Badge>}
                    <Badge variant="secondary">{p.type}</Badge>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                    <MapPin className="h-3 w-3" /> {p.location}
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{p.title}</h3>
                  <p className="text-xl font-bold text-primary mt-2">{p.priceFormatted}</p>
                  <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                    {p.bedrooms > 0 && (
                      <span className="flex items-center gap-1"><BedDouble className="h-4 w-4" /> {p.bedrooms}</span>
                    )}
                    <span className="flex items-center gap-1"><Bath className="h-4 w-4" /> {p.bathrooms}</span>
                    <span className="flex items-center gap-1 text-primary"><TrendingUp className="h-4 w-4" /> {p.roi}%</span>
                  </div>
                  <Button asChild size="sm" className="w-full mt-4">
                    <Link to={`/properties/${p.id}`}>View Details</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-10">
              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i}
                  variant={page === i + 1 ? "default" : "outline"}
                  size="sm"
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Properties;
