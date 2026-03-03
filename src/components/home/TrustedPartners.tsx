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

        <div className="flex flex-wrap justify-center gap-5">
          {developers.map((d, i) => (
            <motion.div
              key={d}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-muted border border-border rounded-lg px-10 py-5 text-center font-display font-semibold text-foreground hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              {d}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
