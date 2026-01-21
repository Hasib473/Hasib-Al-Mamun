import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router";

import heroimg from "../assets/heroapps.jpg";
import duaimg from "../assets/dua.jpg";
import gameimg from "../assets/game.jpg";

/* 🔹 Featured Projects (only 3 for Home) */
const projects = [
  {
    title: "Online Game-Store",
    description:
      "A GameStore where users can install games with Firebase authentication.",
    tech: ["React", "Firebase", "React Router", "Tailwind"],
    image: gameimg,
    github: "https://github.com/Hasib473/GameStore",
    live: "https://gamestore-bang.surge.sh/",
  },
  {
    title: "Dua and Ruqyah",
    description:
      "An online platform to search and read Islamic Dua and Ruqyah.",
    tech: ["Tailwind", "TypeScript", "Next.js", "Node.js"],
    image: duaimg,
    github: "https://github.com/Hasib473/Dua-Ruqyah",
    live:
      "https://dua-ruqyah-git-vercel-react-server-co-b8feee-hasib473s-projects.vercel.app/",
  },
  {
    title: "Online App-Store (Hero-app)",
    description: "An app store where users can find and install apps.",
    tech: ["React", "Tailwind", "JavaScript", "React Router"],
    image: heroimg,
    github: "https://github.com/Hasib473/Hero-App",
    live: "https://heroapps-bd.netlify.app/",
  },
];

const HomeProjects = () => {
  return (
    <section className="pb-6 px-6 text-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl text-white font-bold">
          Featured <span className="text-emerald-500">Projects</span>
        </h2>
        <p className="text-white mt-3 text-sm">
          A glimpse of my recent work
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="relative bg-[#0f172a] border border-white/10 
                       rounded-xl overflow-hidden
                       hover:border-emerald-500/60"
          >
            {/* Image */}
            <div className="relative h-44">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />

              {/* 🔥 overlay fix */}
              <div className="absolute inset-0 bg-black/30 pointer-events-none" />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between h-[230px] relative z-10">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 line-clamp-2 mb-3">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
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
              <div className="flex gap-4 mt-4 pt-3 border-t border-white/10">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-20 flex items-center gap-1.5 
                             text-xs text-gray-300 hover:text-white"
                >
                  <Github size={14} /> Code
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-20 flex items-center gap-1.5 
                             text-xs text-gray-300 hover:text-emerald-400"
                >
                  <ExternalLink size={14} /> Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Explore More */}
      <div className="text-center mt-16">
        <Link
          to="/projects"
          className="relative z-20 inline-block px-8 py-3 rounded-xl
                     bg-emerald-500 text-black font-semibold
                     hover:bg-emerald-400 transition"
        >
          Explore More Projects
        </Link>
      </div>
    </section>
  );
};

export default HomeProjects;
