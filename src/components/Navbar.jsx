import { useState } from "react";
import logo from "../assets/logo.png";
import { GrLanguage } from "react-icons/gr";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }
  const navItems = [
    { link: "overview", path: "home" },
    { link: "feature", path: "feature" },
    { link: "about", path: "about" },
    { link: "pricing", path: "pricing" },
  ];
  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-14 items-center">
            <a
              href="/"
              className="text-2xl font-semibold flex items-center space-x-3 text-primary"
            >
              <img src={logo} alt="Logo" className="w-12 h-12 inline-block" />
              <span className="mt-5"> Ajoke</span>
            </a>
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <li key={link}>
                  <a href={path} className="block hover:text-gray-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-x-12 hidden md:flex">
            <a
              href="/"
              className="hidden lg:flex items-center hover:text-primary"
            >
              <GrLanguage className="mr-2" />
              language
            </a>
            <button className="bg-secondary py-2 px-4 transition-none duration-300 rounded hover:text-white hover:bg-indigo-600">
              Buy Now
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-primary focus:outline-none focus:text-gray-300"
            >
              {isOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* mobile navigation */}
      <div
        className={`space-y-4 pt-24 pb-5 bg-secondary text-xl ${
          isOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <a key={link} href={path} className="block hover:text-gray-300">
            {link}
          </a>
        ))}
      </div>
    </>
  );
}

export default Navbar;
