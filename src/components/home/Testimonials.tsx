import { useState } from "react";
import { testimonials } from "@/data/properties";
import { ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];

  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12">
          What Our <span className="text-primary">Clients</span> Say
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-2 border-primary"
              />
              <blockquote className="text-lg italic text-muted-foreground leading-relaxed">
                "{t.quote}"
              </blockquote>
              <p className="mt-4 font-display font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
              {t.verified && (
                <span className="inline-flex items-center gap-1 mt-2 text-xs text-primary">
                  <BadgeCheck className="h-4 w-4" /> Verified Buyer
                </span>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="p-2 rounded-full border border-border hover:border-primary transition-colors">
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button onClick={next} className="p-2 rounded-full border border-border hover:border-primary transition-colors">
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
