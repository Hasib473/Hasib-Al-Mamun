import { Mail, MapPin, Twitter, Github, Linkedin } from "lucide-react";
import imgprof from '../assets/WhatsApp Image 2025-10-03 at 15.51.43_b77fa177.jpg'
const HeroLeft = () => {
    return (
        <div className=" bg-[#1f1f1f] text-white rounded-3xl p-6 shadow-xl">


            {/* Profile image */}
            <div className="rounded-2xl overflow-hidden mb-5">
                <img
                    src={imgprof}
                    alt="profile"
                    className="w-full h-[220px] object-cover object-center grayscale"
                />

            </div>

            {/* Info */}
            <div className="text-center space-y-2 mb-6">
                <p className="flex justify-center items-center gap-2 text-gray-300 text-sm">
                    <Mail size={16} /> hasib.gub221@gmail.com
                </p>
                <p className="flex justify-center items-center gap-2 text-gray-400 text-sm">
                    <MapPin size={16} />  Bangladesh
                </p>

            </div>

            {/* Social icons */}
            <div className="flex justify-center gap-4 mb-6">
                {[Twitter, Github, Linkedin].map((Icon, i) => (
                    <div
                        key={i}
                        className="w-10 h-10 rounded-full border border-gray-600 
            flex items-center justify-center hover:bg-emerald-500 
            hover:border-emerald-500 transition"
                    >
                        <Icon size={18} />
                    </div>
                ))}
            </div>

            {/* CTA */}
            <button
                className="w-full py-3 rounded-xl font-semibold
        bg-gradient-to-r from-emerald-500 to-green-400
        text-black hover:opacity-90 transition"
            >
                ✉️ Hire Me
            </button>
        </div>
    );
};

export default HeroLeft;
