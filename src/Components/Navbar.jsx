// components/Navbar.jsx
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav className="relative z-10 border border-white/20 w-11/12 mx-auto rounded-xl shadow ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="p-2 rounded-lg text-gray-300 hover:text-white transition-colors"
            >
              {openMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo / Name */}
          <div className="flex-1 text-2xl font-bold flex justify-center sm:justify-start sm:text-white">
            Hasib Al Mamun
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative transition-all duration-300 ${isActive
                    ? " border-b-2 border-emerald-500 text-emerald-500  font-semibold"
                    : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {/* underline */}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px]  duration-300 ${isActive ? "w-full" : "w-0"
                        }`}
                    />
                  </>
                )}
              </NavLink>
            ))}

            <a
              href="/CV/Hasib-Al-Mamun(CV).pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border flex items-center cursor-pointer border-white/30 px-4 py-1.5 rounded-lg hover:bg-white hover:text-black transition">
               <Download/><div className="font-extrabold">CV</div>
              </button>
            </a>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div className="sm:hidden bg-black/90 border-t border-white/10">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpenMenu(false)}
              className={({ isActive }) =>
                `block px-4 py-3 transition-colors ${isActive
                  ? "text-emerald-500 bg-white/5"
                  : "text-gray-300 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <a
              href="/CV/Hasib-Al-Mamun(CV).pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border flex items-center cursor-pointer border-white/30 px-4 py-1.5 rounded-lg hover:bg-white hover:text-black transition">
               <Download/><div className="font-extrabold">CV</div>
              </button>
            </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
