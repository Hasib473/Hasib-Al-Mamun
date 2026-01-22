import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, Home, Code2, Mail } from "lucide-react";
import { Link } from "react-router";

import heroimg from "../assets/heroapps.jpg";
import duaimg from "../assets/dua.jpg";
import gameimg from "../assets/game.jpg";
import emergencyimg from "../assets/emergency.jpg";
import cricketimg from "../assets/cricket.jpg";
import customer from "../assets/Customer.jpg";

import VantaNetBackground from "../Components/VantaBackground";
import WhatsAppFloat from "../Components/WhatsAppFloat";

const projects = [
  {
    title: "Online Game-Store",
    description:
      "A GameStore where User can easily Install Game and Login and Registration using firebase authentication.",
    tech: ["React", "Firebase", "React Router", "Tailwind"],
    image: gameimg,
    github: "https://github.com/Hasib473/GameStore",
    live: "https://gamestore-bang.surge.sh/",
  },
  {
    title: "Dua and Ruqyah",
    description:
      "A online platform where you can search and read any Islamic dua and Ruqya",
    tech: ["Tailwind", "TypeScript", "Next.js", "Node.js", "NoSQL"],
    image: duaimg,
    github: "https://github.com/Hasib473/Dua-Ruqyah",
    live:
      "https://dua-ruqyah-git-vercel-react-server-co-b8feee-hasib473s-projects.vercel.app/",
  },
  {
    title: "Online App-Store (Hero-app)",
    description: "A App store where users can find and install apps.",
    tech: ["React", "Tailwind", "JavaScript", "React Router"],
    image: heroimg,
    github: "https://github.com/Hasib473/Hero-App",
    live: "https://heroapps-bd.netlify.app/",
  },
  {
    title: "Emergency Services",
    description:
      "A Online Emergency Services where user can see emergency numbers and make calls using fake coin.",
    tech: ["JavaScript", "Tailwind", "Daisy UI", "HTML"],
    image: emergencyimg,
    github: "https://github.com/Hasib473/Emergency-Hotline",
    live: "https://hasib473.github.io/Emergency-Hotline/",
  },
  {
    title: "Cricket Auction",
    description:
      "A Online Cricket Auction site where user buy players using fake coin.",
    tech: ["JavaScript", "React", "Tailwind", "Daisy UI"],
    image: cricketimg,
    github: "https://github.com/Hasib473/Cricket-Auction",
    live: "https://cricket-auctioninrealworld.netlify.app/",
  },
  {
    title: "Customer Support Management",
    description:
      "A Simple Customer Support Task Management site using React.",
    tech: ["JavaScript", "React", "Tailwind", "Daisy UI"],
    image: customer,
    github: "https://github.com/Hasib473/Custoer-suppoet/",
    live: "https://customer-service473.netlify.app/",
  },
];

const upcomingProjects = [
  {
    title: "Virtual Freelancing Marketplace",
    description:
      "A platform to connect freelancers and clients with AI-based recommendations and real-time tracking.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
  },
  {
    title: "Regional Language Translator",
    description:
      "A web application to translate Chakma, Marma and other regional languages to Bangla or English.",
    tech: ["React", "PHP", "MySQL"],
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen text-white px-6 relative py-8 ">
      <VantaNetBackground />

      {/* 🔹 Fixed Right Icon Navigation */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
        <Link
          to="/"
          className="group w-11 h-11 flex items-center justify-center
                     rounded-full  border-2 border-emerald-400
                     hover:border-emerald-400 hover:bg-emerald-500/90 transition"
        >
          <Home size={20} className="text-emerald-400 group-hover:text-black" />
        </Link>

        <Link
          to="/skills"
          className="group w-11 h-11 flex items-center justify-center
                     rounded-full border-2 border-emerald-400
                     hover:border-emerald-400 hover:bg-emerald-500/90 transition"
        >
          <Code2 size={20} className="text-emerald-400 group-hover:text-black" />
        </Link>

        <Link
          to="/contact"
          className="group w-11 h-11 flex items-center justify-center
                     rounded-full border-2 border-emerald-400
                     hover:border-emerald-400 hover:bg-emerald-500/90 transition"
        >
          <Mail size={20} className="text-emerald-400 group-hover:text-black" />
        </Link>
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">
          My <span className="text-emerald-500">Projects</span>
        </h1>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto text-sm">
          Selected projects showcasing my frontend and full-stack development
          skills.
        </p>
      </div>

      {/* Existing Projects */}
      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="bg-[#0f172a] border border-white/10 rounded-xl
                       overflow-hidden flex hover:border-emerald-500/60"
          >
            {/* Image */}
            <div className="w-1/3 relative">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 pointer-events-none" />
            </div>

            {/* Content */}
            <div className="w-2/3 p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-400 mb-3 line-clamp-2">
                  {project.description}
                </p>

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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-white"
                >
                  <Github size={14} /> Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-emerald-400"
                >
                  <ExternalLink size={14} /> Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Upcoming Projects */}
      <div className="text-center mt-16 mb-8">
        <h2 className="text-3xl font-bold">
          Upcoming <span className="text-emerald-500">Projects</span>
        </h2>
      </div>

      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
        {upcomingProjects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -4 }}
            className="bg-[#0f172a] border border-white/10 rounded-xl p-4
                       hover:border-emerald-500/60"
          >
            <h3 className="font-semibold mb-2">{project.title}</h3>
            <p className="text-xs text-gray-400 mb-3">
              {project.description}
            </p>

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

            <div className="mt-3 text-xs text-gray-500 italic">
              Coming Soon
            </div>
          </motion.div>
        ))}
      </div>
      <WhatsAppFloat/>
    </section>
  );
};

export default Projects;
