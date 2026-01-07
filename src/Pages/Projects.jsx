import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Online Health Monitoring System",
    description:
      "A full-stack web application for real-time doctor consultation, appointment booking, and health report management.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Job Search Platform",
    description:
      "A job portal where employers post jobs and candidates apply based on skills and experience.",
    tech: ["React", "Tailwind", "PHP", "MySQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Online Medicine Shop",
    description:
      "E-commerce website with cart system, medicine search, and order confirmation.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen text-white px-6 ">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold">
          My <span className="text-emerald-500">Projects</span>
        </h1>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          Selected projects showcasing my frontend and full-stack development skills.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0f172a] border border-white/10 rounded-2xl 
                       p-6 flex flex-col justify-between
                       hover:border-emerald-500/60"
          >
            {/* Top Content */}
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                {project.title}
              </h3>

              {/* Description (clamped) */}
              <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full 
                               bg-emerald-500/10 text-emerald-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex gap-4 pt-4 border-t border-white/10">
              <a
                href={project.github}
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white"
              >
                <Github size={16} /> Code
              </a>
              <a
                href={project.live}
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-emerald-400"
              >
                <ExternalLink size={16} /> Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
