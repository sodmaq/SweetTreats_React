import { useState } from "react";
import logo from "../assets/logo.png";
import { GrLanguage } from "react-icons/gr";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const navItems = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ];

  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto border-b text-primary fixed top-0 right-0 left-0 z-50">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-14 items-center">
            <a
              href="/"
              className="text-2xl font-semibold flex items-center space-x-3 text-primary"
            >
              <img src={logo} alt="Logo" className="w-12 h-12 inline-block" />
              <span>Ajoke</span>
            </a>
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer hover:text-gray-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-x-12 hidden md:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center hover:text-primary"
            >
              <GrLanguage className="mr-2" />
              Language
            </a>
            <button className="bg-secondary py-2 px-4 transition duration-300 rounded hover:text-white hover:bg-indigo-600">
              Buy Now
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-primary focus:outline-none"
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

      {/* Mobile navigation */}
      <div
        className={`pt-24 pb-5 bg-secondary text-xl text-center ${
          isOpen ? "block fixed top-0 right-0 left-0 z-40" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            to={path}
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="block py-2 hover:text-gray-300"
          >
            {link}
          </Link>
        ))}
      </div>
    </>
  );
}

export default Navbar;
