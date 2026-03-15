import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    document.title = "Page Not Found — Qalaht Al Tilal Real Estate";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "The page you're looking for doesn't exist. Return to Qalaht Al Tilal Real Estate to explore premium properties in UAE.");
    }
    const robots = document.querySelector('meta[name="robots"]') || document.createElement("meta");
    robots.setAttribute("name", "robots");
    robots.setAttribute("content", "noindex, follow");
    if (!document.querySelector('meta[name="robots"]')) document.head.appendChild(robots);

    return () => {
      document.title = "Qalaht Al Tilal Real Estate";
      robots.remove();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-background px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-lg"
        >
          <h1 className="text-8xl md:text-9xl font-display font-bold text-primary/20 leading-none select-none">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Sorry, the page <code className="text-sm bg-muted px-2 py-0.5 rounded">{location.pathname}</code> doesn't exist or has been moved. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button asChild size="lg">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/properties">
                <Search className="mr-2 h-4 w-4" />
                Browse Properties
              </Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            className="mt-4 text-muted-foreground"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
