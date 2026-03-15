import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Qalaht Al Tilal Real Estate";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Read the privacy policy of Qalaht Al Tilal Real Estate. Learn how we collect, use, and protect your personal data.");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
              Privacy Policy
            </h1>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-foreground/80 text-lg">
                Last updated: March 15, 2026
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground">1. Introduction</h2>
                <p>
                  Qalaht Al Tilal Real Estate ("we," "our," or "us") is committed to protecting the privacy of our clients and website visitors. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground">2. Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, and WhatsApp number when you fill out our contact forms or subscribe to our newsletter.</li>
                  <li><strong>Property Preferences:</strong> Budget range, preferred locations, property types, and other real estate preferences shared during consultations.</li>
                  <li><strong>Usage Data:</strong> Browser type, IP address, pages visited, time spent on the website, and other analytical data collected through cookies.</li>
                  <li><strong>Communication Data:</strong> Records of correspondence when you contact us via email, phone, WhatsApp, or our chatbot.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground">3. How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide personalized property recommendations and real estate services.</li>
                  <li>To respond to your inquiries and schedule property viewings.</li>
                  <li>To send you relevant property listings, market updates, and newsletters (with your consent).</li>
                  <li>To improve our website, services, and customer experience.</li>
                  <li>To comply with legal obligations under UAE law and RERA regulations.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground">4. Data Protection</h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. We comply with the UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data and GDPR where applicable.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground">5. Data Sharing</h2>
                <p>
                  We do not sell your personal data. We may share your information with trusted partners including property developers, mortgage providers, and legal advisors solely for the purpose of facilitating your real estate transaction. All third parties are contractually obligated to protect your data.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground">6. Cookies</h2>
                <p>
                  Our website uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences. Disabling cookies may affect certain website functionalities.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground">7. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access the personal data we hold about you.</li>
                  <li>Request correction of inaccurate data.</li>
                  <li>Request deletion of your data (subject to legal obligations).</li>
                  <li>Withdraw consent for marketing communications at any time.</li>
                  <li>Lodge a complaint with the relevant data protection authority.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground">8. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact us at:
                </p>
                <ul className="list-none space-y-1">
                  <li><strong>Email:</strong> realestateqalahtaltilal@gmail.com</li>
                  <li><strong>Phone:</strong> +971 500252026</li>
                  <li><strong>Address:</strong> Building No 4851, Office# 01, Tilal City, Sharjah, UAE</li>
                </ul>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
