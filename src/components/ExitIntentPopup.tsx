import { useState, useEffect } from "react";
import { X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const handler = (e: MouseEvent) => {
      if (e.clientY < 5) setShow(true);
    };
    document.addEventListener("mouseleave", handler);
    return () => document.removeEventListener("mouseleave", handler);
  }, [dismissed]);

  if (!show || dismissed) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4">
      <div className="bg-card rounded-lg shadow-2xl max-w-md w-full p-8 relative">
        <button
          onClick={() => { setShow(false); setDismissed(true); }}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="text-center mb-6">
          <Download className="h-12 w-12 text-primary mx-auto mb-3" />
          <h3 className="text-xl font-display font-bold text-foreground">
            Free Dubai Investment Guide
          </h3>
          <p className="text-sm text-muted-foreground mt-2">
            Get our exclusive 2026 UAE Real Estate Investment Guide — ROI analysis, Golden Visa tips, and top areas to buy.
          </p>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setShow(false); setDismissed(true); }}
          className="space-y-3"
        >
          <Input placeholder="Your email address" type="email" required />
          <Button type="submit" className="w-full">
            Download Free Guide
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
