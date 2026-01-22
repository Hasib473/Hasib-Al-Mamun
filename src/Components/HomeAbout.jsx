import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const HomeAbout = () => {
  return (
    <section className=" px-6 md:px-20  text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="text-emerald-400 font-semibold tracking-wide text-center">
            ABOUT ME
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Building scalable <br />
            <span className="text-emerald-500"> Web App</span>
          </h2>

          <p className="text-gray-400 leading-relaxed max-w-xl">
            I’m <span className="text-white font-semibold">Hasib Al Mamun</span>, a
            MERN stack developer passionate about crafting clean UI and powerful
            backend systems. I focus on performance, scalability, and real-world
            problem solving.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Tailwind CSS",
              "Node.js",
              "Express",
              "MongoDB",
              "REST API",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-1.5 rounded-full text-sm bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Link
            to="/about"
            className="inline-flex items-center gap-2 mt-6 text-emerald-400 font-semibold hover:gap-3 transition-all"
          >
            Learn more about me <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* Right Visual Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gray-900/60 border border-white/10 rounded-3xl p-10 shadow-2xl"
        >
          <div className="space-y-8">

            <div>
              <h3 className="text-xl font-semibold text-emerald-400">
                Experience
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                1+ year of hands-on experience building real-world web
                applications using modern technologies.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-emerald-400">
                Education
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                B.Sc in Computer Science & Engineering <br />
                Green University of Bangladesh
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-emerald-400">
                Goal
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                To grow as a backend-focused full-stack engineer and build
                scalable, impactful digital products.
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAbout;
