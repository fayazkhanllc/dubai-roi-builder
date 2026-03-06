import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-display font-bold text-foreground mb-10 text-center"
          >
            Get in <span className="text-primary">Touch</span>
          </motion.h1>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border rounded-lg p-8"
            >
              <h2 className="font-display font-semibold text-xl text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <Input placeholder="Full Name" required />
                <Input placeholder="Email Address" type="email" required />
                <Input placeholder="Phone Number" type="tel" required />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Preferred Contact Method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="phone">Phone Call</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea placeholder="Your Message" rows={4} />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </motion.div>

            {/* Info + Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: "Office Address", value: "Building No 4851, Shop No 01, Tilal City, Sharjah, UAE" },
                  { icon: Phone, label: "Phone", value: "+971 500252026" },
                  { icon: MessageCircle, label: "WhatsApp", value: "+971 500252026" },
                  { icon: Mail, label: "Email", value: "realestateqalahtaltilal@gmail.com" },
                  { icon: Clock, label: "Business Hours", value: "Sun – Thu: 9AM – 6PM | Fri: 9AM – 1PM" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <item.icon className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="bg-muted rounded-lg h-64 flex items-center justify-center text-muted-foreground border border-border">
                <div className="text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <p className="text-sm">Google Maps Embed Placeholder</p>
                  <p className="text-xs">Tilal City, Sharjah, UAE</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
