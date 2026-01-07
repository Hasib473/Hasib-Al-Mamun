import { motion } from "framer-motion";

const frontendSkills = [
  { name: "HTML", level: 95 },
  { name: "CSS / Tailwind", level: 90 },
  { name: "JavaScript", level: 88 },
  { name: "React.js", level: 90 },
  { name: "Next.js", level: 75 },
];

const backendSkills = [
  { name: "Node.js", level: 80 },
  { name: "Express.js", level: 78 },
  { name: "MongoDB", level: 75 },
  { name: "MySQL", level: 70 },
  { name: "REST API", level: 85 },
];

const SkillBar = ({ name, level }) => (
  <div className="mb-5">
    <div className="flex justify-between mb-1">
      <span className="text-sm text-gray-300">{name}</span>
      <span className="text-sm text-gray-400">{level}%</span>
    </div>
    <div className="w-full h-2  rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1 }}
        className="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full"
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section className="min-h-screen text-white px-6 md:px-20 mb-10 ">
      
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          My <span className="text-emerald-500">Skills</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          A snapshot of the technologies I use to build modern, scalable web applications.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

        {/* Frontend */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900/60 border border-white/10 rounded-2xl p-8  shadow-xl"
        >
          <h2 className="text-2xl font-semibold mb-6 text-emerald-400">
            Frontend Development
          </h2>
          {frontendSkills.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </motion.div>

        {/* Backend */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900/60 border border-white/10 rounded-2xl p-8 shadow-xl"
        >
          <h2 className="text-2xl font-semibold mb-6 text-emerald-400">
            Backend Development
          </h2>
          {backendSkills.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
