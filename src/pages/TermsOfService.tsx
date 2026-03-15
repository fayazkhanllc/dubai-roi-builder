import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service | Qalaht Al Tilal Real Estate";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Terms of Service for Qalaht Al Tilal Real Estate. Understand the terms and conditions governing your use of our services.");
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
              Terms of Service
            </h1>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-foreground/80 text-lg">
                Last updated: March 15, 2026
              </p>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using the Qalaht Al Tilal Real Estate website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground">2. Services</h2>
                <p>
                  Qalaht Al Tilal Real Estate provides real estate brokerage, property consultancy, and investment advisory services in the United Arab Emirates. We are licensed by the Real Estate Regulatory Agency (RERA) under License #907298.
                </p>
                <p>Our services include but are not limited to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Residential and commercial property sales and leasing.</li>
                  <li>Off-plan property investment advisory.</li>
                  <li>Property viewing and tour arrangements.</li>
                  <li>Market analysis and investment consultation.</li>
                  <li>Golden Visa eligibility guidance through property investment.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground">3. Property Information Disclaimer</h2>
                <p>
                  All property listings, prices, floor plans, renderings, and specifications displayed on our website are provided for informational purposes only. While we strive for accuracy, we do not guarantee that all information is complete, current, or error-free. Prices and availability are subject to change without notice. Prospective buyers should verify all details independently before making any purchase decisions.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground">4. User Obligations</h2>
                <p>When using our website and services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and truthful information in all forms and communications.</li>
                  <li>Not use the website for any unlawful purpose or in violation of UAE laws.</li>
                  <li>Not reproduce, duplicate, or exploit any content from our website without written permission.</li>
                  <li>Not attempt to interfere with the website's functionality or security.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground">5. Intellectual Property</h2>
                <p>
                  All content on this website, including text, graphics, logos, images, and software, is the property of Qalaht Al Tilal Real Estate or its content suppliers and is protected by UAE and international copyright laws. Unauthorized use of any content may violate copyright, trademark, and other applicable laws.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground">6. Limitation of Liability</h2>
                <p>
                  Qalaht Al Tilal Real Estate shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our website or services. We do not guarantee investment returns or property value appreciation. All real estate investments carry inherent risks, and clients are advised to conduct their own due diligence.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground">7. Commission & Fees</h2>
                <p>
                  Our brokerage commission and service fees are in accordance with RERA regulations and will be clearly communicated before any transaction. Standard commission rates apply as per the prevailing market norms in the UAE real estate sector.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground">8. Governing Law</h2>
                <p>
                  These Terms of Service are governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Sharjah, UAE.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground">9. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on this page. Your continued use of our website after any changes constitutes your acceptance of the updated terms.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-display font-semibold text-foreground">10. Contact Us</h2>
                <p>
                  For any questions regarding these Terms of Service, please contact us at:
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

export default TermsOfService;
