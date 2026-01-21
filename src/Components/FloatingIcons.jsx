import { FaHome, FaUser, FaCode, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router";

const FloatingIcons = () => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4"
    >
      {[
        { icon: <FaHome />, path: "/" },
        { icon: <FaUser />, path: "/about" },
        { icon: <FaCode />, path: "/projects" },
        { icon: <FaEnvelope />, path: "/contact" },
      ].map((item, i) => (
        <Link key={i} to={item.path}>
          <div className="p-3 rounded-full bg-emerald-500 text-black hover:scale-110 transition">
            {item.icon}
          </div>
        </Link>
      ))}
    </motion.div>
  );
};

export default FloatingIcons;
