import { motion } from "framer-motion";
import { Link } from "react-router";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { Home, FolderGit2 } from "lucide-react";

import VantaNetBackground from "../Components/VantaBackground";
import Footer from "../Components/Footer";
import WhatsAppFloat from "../Components/WhatsAppFloat";

const Contact = () => {
  return (
    <>
    <section className="min-h-screen px-6 md:px-20 py-20 text-white relative">

      {/* 🔥 Vanta Background */}
      <VantaNetBackground />

      {/* 🔹 Right Fixed Icon Navigation */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        <Link
          to="/"
          className="group w-11 h-11 flex items-center justify-center
                     rounded-full bg-emerald-500/15 border border-emerald-400/40
                     hover:bg-emerald-500 hover:border-emerald-500 transition"
        >
          <Home
            size={20}
            className="text-emerald-400 group-hover:text-black"
          />
        </Link>

        <Link
          to="/projects"
          className="group w-11 h-11 flex items-center justify-center
                     rounded-full bg-emerald-500/15 border border-emerald-400/40
                     hover:bg-emerald-500 hover:border-emerald-500 transition"
        >
          <FolderGit2
            size={20}
            className="text-emerald-400 group-hover:text-black"
          />
        </Link>
      </div>

      {/* 🔹 Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Get In <span className="text-emerald-400">Touch</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-sm">
          Let’s talk about your project, ideas, or just say hello 
        </p>
      </motion.div>

      {/* 🔹 Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 relative z-10">

        {/* Left Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-10"
        >
          <h2 className="text-2xl font-semibold text-emerald-400">
            Contact Information
          </h2>

          <div className="space-y-6 text-gray-300">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-emerald-400 text-xl" />
              <span>hasib.gub221@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-emerald-400 text-xl" />
              <span>+880 1570265433</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-emerald-400 text-xl" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>

          <p className="text-gray-400 leading-relaxed">
            I’m always open to discussing new projects, creative ideas,
            or opportunities to be part of your vision.
          </p>
        </motion.div>

        {/* Right Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10
                     rounded-2xl p-8 space-y-6 shadow-2xl"
        >
          <div>
            <label className="block text-sm mb-2 text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3
                         focus:outline-none focus:border-emerald-400 transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3
                         focus:outline-none focus:border-emerald-400 transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-300">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3
                         focus:outline-none focus:border-emerald-400 transition resize-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center gap-3
                       bg-emerald-500 hover:bg-emerald-600
                       text-black font-semibold py-3 rounded-lg transition"
          >
            Send Message <FaPaperPlane />
          </motion.button>
        </motion.form>
      </div>

      <WhatsAppFloat />
    </section>
    <section>
        <Footer/>
      </section>
      </>
  );
};

export default Contact;
