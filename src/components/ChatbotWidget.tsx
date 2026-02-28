import { useState } from "react";
import { Bot, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const sampleResponses: Record<string, string> = {
  default: "Thank you for reaching out! Our team will get back to you shortly. For immediate assistance, call us at +971 065 798 333.",
  roi: "Dubai offers some of the highest rental yields globally — averaging 7-10% across premium locations like Dubai Marina, Downtown, and Business Bay.",
  visa: "Properties valued at AED 2M+ qualify you for a 10-year Golden Visa, granting long-term residency for you and your family.",
  price: "Our listings range from AED 950K studio apartments to AED 12.5M+ luxury villas. We can help find the right fit for your budget.",
};

const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: "bot" | "user"; text: string }[]>([
    { from: "bot", text: "Hello! 👋 How can I help you with Dubai real estate today?" },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((m) => [...m, { from: "user" as const, text: userMsg }]);
    setInput("");

    const lower = userMsg.toLowerCase();
    let reply = sampleResponses.default;
    if (lower.includes("roi") || lower.includes("return")) reply = sampleResponses.roi;
    else if (lower.includes("visa") || lower.includes("residency")) reply = sampleResponses.visa;
    else if (lower.includes("price") || lower.includes("budget") || lower.includes("cost")) reply = sampleResponses.price;

    setTimeout(() => setMessages((m) => [...m, { from: "bot", text: reply }]), 800);
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-20 z-50 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-4 shadow-2xl transition-transform hover:scale-110"
          aria-label="Open chat"
        >
          <Bot className="h-6 w-6" />
        </button>
      )}
      {open && (
        <div className="fixed bottom-6 right-6 z-[55] w-80 bg-card border border-border rounded-lg shadow-2xl flex flex-col max-h-[28rem]">
          <div className="flex items-center justify-between p-4 border-b border-border bg-secondary rounded-t-lg">
            <span className="font-display font-semibold text-secondary-foreground">Qalaht Al Tilal AI</span>
            <button onClick={() => setOpen(false)} className="text-secondary-foreground/60 hover:text-secondary-foreground">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
            {messages.map((m, i) => (
              <div key={i} className={m.from === "bot" ? "text-left" : "text-right"}>
                <span
                  className={`inline-block px-3 py-2 rounded-lg max-w-[85%] ${
                    m.from === "bot"
                      ? "bg-muted text-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  {m.text}
                </span>
              </div>
            ))}
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); send(); }}
            className="p-3 border-t border-border flex gap-2"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about properties..."
              className="text-sm"
            />
            <Button type="submit" size="icon" variant="ghost">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
