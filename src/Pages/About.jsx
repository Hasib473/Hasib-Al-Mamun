import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen text-white px-6 md:px-20 mb-10 ">
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="text-emerald-500">Me</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A passionate Web Developer focused on building clean, scalable and user-friendly digital experiences.
        </p>
      </motion.div>

      {/* Content */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">

        {/* Left: About Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-emerald-400">
            Who I Am
          </h2>

          <p className="text-gray-300 leading-relaxed">
            I’m <span className="text-white font-semibold">Hasib Al Mamun</span>, a
            passionate Web Developer with a strong interest in building
            modern, responsive, and high-performance web applications.
          </p>

          <p className="text-gray-300 leading-relaxed">
            I primarily work with <span className="text-emerald-400">React, Tailwind CSS, Node.js MongoDB Express.js </span> 
            and modern JavaScript tools. I enjoy turning complex problems into
            simple, beautiful, and intuitive solutions.
          </p>

          <p className="text-gray-400 leading-relaxed">
            My goal is to continuously improve my skills, contribute to impactful
            projects, and grow as a professional software engineer.
          </p>
        </motion.div>

        {/* Right: Education */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900/60 border border-white/10 rounded-2xl p-8 shadow-xl"
        >
          <h2 className="text-2xl font-semibold mb-8 text-emerald-400">
            Education
          </h2>

          {/* Education Item */}
          <div className="relative pl-6 border-l border-emerald-500 space-y-8">

            <div>
              <span className="absolute -left-[7px] top-1 w-3 h-3 bg-emerald-500 rounded-full"></span>
              <h3 className="text-lg font-semibold">
                B.Sc in Computer Science & Engineering
              </h3>
              <p className="text-gray-400 text-sm">
                Green University of Bangladesh
              </p>
              <p className="text-gray-500 text-sm">
                2022– 2026(Feb)
              </p>
            </div>

            <div>
              <span className="absolute -left-[7px] top-[110px] w-3 h-3 bg-emerald-500 rounded-full"></span>
              <h3 className="text-lg font-semibold">
                Higher Secondary Certificate (HSC)
              </h3>
              <p className="text-gray-400 text-sm">
                Science Background
              </p>
              <p className="text-gray-500 text-sm">
                2017 – 2019
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
