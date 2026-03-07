import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {

  const phoneNumber = "919391093490";
  const message =
    "Hi AR Fabrications, I would like to get a quote for fabrication work.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed 
      bottom-4 right-4 
      sm:bottom-6 sm:right-6 
      md:bottom-8 md:right-8 
      z-50"
    >
      <div
        className="bg-green-500 hover:bg-green-600
        text-white
        p-3 sm:p-4
        rounded-full
        shadow-xl
        hover:scale-110
        transition duration-300
        flex items-center justify-center"
      >
        <FaWhatsapp className="text-xl sm:text-2xl md:text-[28px]" />
      </div>
    </a>
  );
};

export default WhatsAppButton;