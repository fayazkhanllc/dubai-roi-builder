import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const message = encodeURIComponent(
    "Hi Qalaht Al Tilal Real Estate! I'm interested in UAE real estate investment. Can you help me?"
  );

  return (
    <a
      href={`https://wa.me/971500252026?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full p-4 shadow-2xl transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
