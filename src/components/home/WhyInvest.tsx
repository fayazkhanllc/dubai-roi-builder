import { TrendingUp, Shield, Building2, Globe, Landmark, Plane } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: TrendingUp, label: "Average ROI", value: "7–10%", desc: "Highest rental yields globally" },
  { icon: Shield, label: "Tax-Free Income", value: "0%", desc: "No income or capital gains tax" },
  { icon: Landmark, label: "Golden Visa", value: "10 Years", desc: "Residency for AED 2M+ investors" },
  { icon: Building2, label: "World-Class Projects", value: "400+", desc: "New projects launching annually" },
  { icon: Globe, label: "Foreign Ownership", value: "100%", desc: "Full freehold ownership rights" },
  { icon: Plane, label: "Global Hub", value: "#1", desc: "Top destination for expats worldwide" },
];

const WhyInvest = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-foreground">
            Why Invest in <span className="text-primary">Dubai</span>?
          </h2>
          <p className="text-secondary-foreground/60 mt-3 max-w-xl mx-auto">
            Dubai offers unmatched returns, tax advantages, and a world-class lifestyle for investors.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-lg p-6 text-center hover:border-primary/50 transition-colors"
            >
              <s.icon className="h-10 w-10 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-primary font-display">{s.value}</p>
              <p className="font-semibold text-secondary-foreground mt-1">{s.label}</p>
              <p className="text-sm text-secondary-foreground/60 mt-1">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;
