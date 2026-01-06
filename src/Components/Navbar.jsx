// components/Navbar.jsx
import { Contact, House, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

const Navbar = ({ theme, darkMode, setDarkMode }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const navLinks = [
    { label: <House />, href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: <Contact />, href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 
  bg-gray-100 w-11/12 mx-auto rounded-xl z-50 
  ${theme.navBg} shadow border-b ${theme.border} 
  transition-all duration-300`}
    >      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className={`p-2 rounded-lg ${theme.textSecondary} ${theme.hover} transition-colors`}
            >
              {openMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="flex-1 flex justify-center sm:justify-start">
            <span
              style={{
                fontFamily: "'Pacifico', cursive",
                fontSize: "1.5rem",
                fontWeight: "400",
                background: "linear-gradient(to right, #059669, #14b8a6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "1px",
              }}
            >
              Hasib Al Mamun
            </span>
          </div>


          <div className="hidden sm:flex sm:items-center sm:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${theme.textSecondary} hover:text-emerald-600 transition-colors`}
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${theme.hover} transition-all transform hover:scale-110 text-2xl`}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? (<Sun color="orange" />) : (<Moon color="orange" />)}
            </button>
          </div>
        </div>
      </div>

      {openMenu && (
        <div className={`sm:hidden ${theme.bgSecondary} border-t ${theme.border}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpenMenu(false)}
              className={`block px-4 py-3 ${theme.textSecondary} ${theme.hover} transition-colors`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-full text-left px-4 py-3 ${theme.textSecondary} ${theme.hover} transition-colors`}
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;