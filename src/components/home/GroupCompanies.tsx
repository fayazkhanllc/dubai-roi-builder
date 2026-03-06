import { motion } from "framer-motion";
import qalahtLogo from "@/assets/qalaht-logo.jpeg";
import axisLogo from "@/assets/axis-logo.jpeg";
import kayiLogo from "@/assets/kayi-logo.jpeg";
import homelinkLogo from "@/assets/homelink-logo.jpeg";

const companies = [
  {
    name: "Qalaht Al Tilal Real Estate",
    logo: qalahtLogo,
    description: "Premium real estate brokerage specializing in residential and commercial properties across the UAE.",
  },
  {
    name: "Kayi Real Estate",
    logo: kayiLogo,
    description: "Innovative real estate solutions with a focus on high-growth investment opportunities in the UAE market.",
  },
  {
    name: "Home Link Real Estate",
    logo: homelinkLogo,
    description: "Connecting buyers and sellers with trusted property solutions and personalized real estate services.",
  },
  {
    name: "Axis Real Estate",
    logo: axisLogo,
    description: "Strategic real estate investments and development solutions driving growth across emerging markets.",
  },
  {
    name: "B17 Pakistan",
    logo: axisLogo,
    description: "Expanding our real estate footprint into Pakistan with premium development projects and investment opportunities in key growth corridors.",
  },
];

const GroupCompanies = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Group of <span className="text-primary">Companies</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Our family of companies delivering excellence across the real estate industry.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-12">
          {companies.map((company, i) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center text-center max-w-xs"
            >
              <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg mb-5 bg-background">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground">
                {company.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                {company.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GroupCompanies;
