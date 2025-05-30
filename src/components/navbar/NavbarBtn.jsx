import { motion } from "framer-motion";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  const handleClick = () => {
    // Replace with your WhatsApp number (include country code without '+' or '0')
    const phoneNumber = "2349160214824"; 
    const message = "Hello John, I'd like to discuss a project opportunity!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-darkCyan to-orange cursor-pointer hover:shadow-cyanShadow"
      whileHover={{ 
        scale: 1.1,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.95 }}
      animate={{
        y: [0, -5, 0],
        transition: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.5,
          ease: "easeInOut"
        }
      }}
      onClick={handleClick}
    >
      <span>Hire Me</span>
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </motion.button>
  );
};

export default NavbarBtn;