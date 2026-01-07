// components/Navbar.jsx
import { Contact, House, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const navLinks = [
    { label: <House />, href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: <Contact />, href: "#contact" },
  ];

  return (
    <nav className="top-4 relative z-10 border-1 border-white w-11/12 mx-auto rounded-xl shadow">
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
          <div className="flex-1 text-2xl font-bold flex justify-center sm:justify-start">
            
              Hasib Al Mamun
            
          </div>

          {/* Desktop Menu Links */}
          <div className="hidden sm:flex sm:items-center sm:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:text-white transition-all transform hover:scale-110 text-2xl"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? (<Sun color="orange" />) : (<Moon color="orange" />)}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div className="sm:hidden bg-gray-900 border-t border-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpenMenu(false)}
              className="block px-4 py-3 text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-full text-left px-4 py-3 text-gray-300 hover:text-white transition-colors"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
