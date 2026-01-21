import { Mail, MapPin, Twitter, Github, Linkedin } from "lucide-react";
import imgprof from '../assets/WhatsApp Image 2025-10-03 at 15.51.43_b77fa177.jpg';
import { motion } from "framer-motion";
import { CiMail } from "react-icons/ci";

const HeroLeft = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative bg-black text-white rounded-3xl p-6 shadow-2xl 
                 hover:shadow-emerald-500 hover:scale-105 transition-all duration-500 overflow-hidden"
        >
            {/* Glowing animated side line */}
            <div className="absolute top-0 left-0 w-1 h-full overflow-hidden">
                <div className="w-1 h-20  animate-move-line"></div>
            </div>

            {/* Profile image */}
            <motion.div
                className="rounded-2xl overflow-hidden mb-5"
                whileHover={{ scale: 1.05 }}
            >
                <img
                    src={imgprof}
                    alt="profile"
                    className="w-full h-[220px] object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                />
            </motion.div>

            {/* Info */}
            <div className="text-center space-y-2 mb-6">
                <p className="flex justify-center items-center gap-2 text-gray-300 text-sm">
                    <Mail size={16} /> hasib.gub221@gmail.com
                </p>
                <p className="flex justify-center items-center gap-2 text-gray-400 text-sm">
                    <MapPin size={16} /> Bangladesh
                </p>
            </div>

           {/* Social icons */}
<div className="flex justify-center gap-4 mb-6">
  {[
    { icon: Github, url: "https://github.com/Hasib473" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/hasib-al-mamun-4229a5317/" },
  ].map(({ icon: Icon, url }, i) => (
    <motion.a
      key={i}
      href={url}           // link
      target="_blank"      // new tab
      rel="noopener noreferrer" // security
      whileHover={{ scale: 1.2, backgroundColor: "#0096FF", borderColor: "#0000A3" }}
      className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center cursor-pointer transition-colors duration-300"
    >
      <Icon size={18} />
    </motion.a>
  ))}
</div>


            {/* CTA */}
   <motion.a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=hasib.gub221@gmail.com&su=Hello&body=Hi%20Hasib"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05, opacity: 0.9 }}
  className="w-full flex items-center justify-center gap-2 cursor-pointer border border-white py-3 rounded-xl font-semibold
             text-white transition-all duration-300"
>
  <CiMail size={20} />
  Hire Me
</motion.a>




        </motion.div>
    );
};

export default HeroLeft;
