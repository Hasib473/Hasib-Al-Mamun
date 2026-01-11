import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import heroimg from "../assets/heroapps.jpg";

const projects = [
  {
    title: "Online Health Monitoring System",
    description:
      "A full-stack web application for real-time doctor consultation, appointment booking, and health report management.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "",
    github: "#",
    live: "#",
  },
  {
    title: "Online App-Store (Hero-app)",
    description:
      "A App store where users can find and install apps.",
    tech: ["React", "Tailwind", "JavaScript", "React Router"],
    image: heroimg,
    github: "https://github.com/Hasib473/Hero-App",
    live: "https://heroapps-bd.netlify.app/",
  },
  {
    title: "Online Medicine Shop",
    description:
      "E-commerce website with cart system, medicine search, and order confirmation.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/projects/medicine.png",
    github: "#",
    live: "#",
  },
];

const upcomingProjects = [
  {
    title: "Virtual Freelancing Marketplace",
    description:
      "A platform to connect freelancers and clients with AI-based recommendations and real-time tracking.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    image: "",
    github: "#",
    live: "#",
  },
  {
    title: "Regional Language Translator",
    description:
      "A web application to translate Chakma,Marma and More regional languages to Bangla or English.",
    tech: ["React", "PHP", "MySQL"],
    image: "",
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen text-white px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">
          My <span className="text-emerald-500">Projects</span>
        </h1>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
          Selected projects showcasing my frontend and full-stack development skills.
        </p>
      </div>

      {/* Existing Projects Grid */}
      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="bg-[#0f172a] border border-white/10 rounded-xl 
                       overflow-hidden flex
                       hover:border-emerald-500/60"
          >
            {/* Image (Left) */}
            <div className="w-1/3 relative">
              {project.image && (
                <>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </>
              )}
            </div>

            {/* Content (Right) */}
            <div className="w-2/3 p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-semibold mb-1">
                  {project.title}
                </h3>

                <p className="text-xs text-gray-400 mb-3 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded-full 
                                 bg-emerald-500/10 text-emerald-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-2 border-t border-white/10">
                <a
                  href={project.github}
                  className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-white"
                >
                  <Github size={14} /> Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-emerald-400"
                >
                  <ExternalLink size={14} /> Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Upcoming Projects Header */}
      <div className="text-center mt-16 mb-8">
        <h2 className="text-3xl font-bold">
          Upcoming <span className="text-emerald-500">Projects</span>
        </h2>
        <p className="text-gray-400 mt-2 max-w-lg mx-auto text-sm">
          Projects that I am currently working on and will release soon.
        </p>
      </div>

      {/* Upcoming Projects Grid */}
      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {upcomingProjects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="bg-[#0f172a] border border-white/10 rounded-xl 
                       overflow-hidden flex
                       hover:border-emerald-500/60"
          >
            {/* Content */}
            <div className="w-full p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-semibold mb-1">
                  {project.title}
                </h3>

                <p className="text-xs text-gray-400 mb-3 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded-full 
                                 bg-emerald-500/10 text-emerald-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Placeholder Actions */}
              <div className="flex gap-4 pt-2 border-t border-white/10">
                <span className="text-xs text-gray-500 italic">Coming Soon</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
