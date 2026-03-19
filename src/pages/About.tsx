import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { teamMembers, pakistanTeamMembers } from "@/data/properties";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const developers = ["Emaar", "Sobha", "Damac", "Danube", "Nakheel", "Omniyat", "Meraas", "Azizi"];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              About <span className="text-primary">Qalaht Al Tilal Real Estate</span>
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Founded in Sharjah with a vision to make world-class real estate investment
              accessible to global buyers, Qalaht Al Tilal Real Estate has grown into one of the
              most trusted names in the UAE property market. Our RERA-licensed team
              combines deep market knowledge with a client-first approach to deliver
              exceptional results for investors and homeowners alike.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We specialize in off-plan investments, luxury ready properties, and
              Golden Visa advisory — guiding our clients from property selection
              through to handover and beyond.
            </p>
          </motion.div>

          {/* RERA */}
          <div className="flex items-center justify-center gap-3 mb-16 bg-muted rounded-lg p-6 max-w-md mx-auto">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <p className="font-semibold text-foreground">RERA Licensed Agency</p>
              <p className="text-sm text-muted-foreground">License #907298 — Sharjah Real Estate Registration Department</p>
            </div>
          </div>

          {/* Team */}
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-10">
            UAE <span className="text-primary">Real Estate Team</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {teamMembers.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <img
                  src={m.avatar}
                  alt={m.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-primary mb-4"
                  loading="lazy"
                />
                <h3 className="font-display font-semibold text-foreground">{m.name}</h3>
                <p className="text-sm text-primary">{m.title}</p>
                <p className="text-sm text-muted-foreground mt-1">{m.bio}</p>
              </motion.div>
            ))}
          </div>

          {/* Pakistan Real Estate Team */}
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-10">
            Pakistan <span className="text-primary">Real Estate Team</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {pakistanTeamMembers.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <img
                  src={m.avatar}
                  alt={m.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-primary mb-4"
                  loading="lazy"
                />
                <h3 className="font-display font-semibold text-foreground">{m.name}</h3>
                <p className="text-sm text-primary">{m.title}</p>
                <p className="text-sm text-muted-foreground mt-1">{m.bio}</p>
              </motion.div>
            ))}
          </div>

          {/* Partners */}
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-8">
            Trusted <span className="text-primary">Developer Partners</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {developers.map((d) => (
              <div
                key={d}
                className="bg-muted border border-border rounded-lg px-8 py-4 text-center font-semibold text-foreground text-sm"
              >
                {d}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
