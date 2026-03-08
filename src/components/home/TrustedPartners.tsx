import { motion } from "framer-motion";

const developers = ["Emaar", "Sobha", "Damac", "Danube", "Nakheel", "Omniyat", "Meraas", "Azizi"];

const TrustedPartners = () => {
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
            Trusted <span className="text-primary">Developer Partners</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            We work with the UAE's most reputable developers to bring you premium investment opportunities.
          </p>
        </motion.div>

        <div className="relative overflow-hidden group">
          {/* Gradient fades */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

          {/* Ticker track */}
          <div className="flex w-max animate-ticker group-hover:[animation-play-state:paused]">
            {[...developers, ...developers, ...developers, ...developers].map((d, i) => (
              <div
                key={`${d}-${i}`}
                className="mx-3 shrink-0 bg-muted border border-border rounded-lg px-10 py-5 text-center font-display font-semibold text-foreground transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:shadow-lg cursor-default select-none"
              >
                {d}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
