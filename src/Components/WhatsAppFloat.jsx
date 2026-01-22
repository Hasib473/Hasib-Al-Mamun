import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/8801570265433"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        right-6
        bottom-10
        z-50
        w-14
        h-14
        rounded-full
        bg-green-500
        flex
        items-center
        justify-center
        shadow-[0_10px_25px_rgba(34,197,94,0.35)]
        hover:bg-green-600
        hover:scale-110
        transition
        duration-300
      "
      aria-label="WhatsApp Chat"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
};

export default WhatsAppFloat;
