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
                  { icon: MapPin, label: "Office Address", value: "Building No 4851, Office No 01, Tilal City, Sharjah, UAE" },
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
              <div className="rounded-lg h-64 overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.0!2d55.4!3d25.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE4JzAwLjAiTiA1NcKwMjQnMDAuMCJF!5e0!3m2!1sen!2sae!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
              <a
                href="https://maps.app.goo.gl/zjTtqvbhEVxj4tkX8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline mt-2"
              >
                <MapPin className="h-4 w-4" />
                Open in Google Maps
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
