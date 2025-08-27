import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger & close icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white p-4 fixed w-full z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <div
          className="text-3xl font-bold"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          Anish Kumar
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="#home"
              className="text-lg hover:text-orange-500 transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-lg hover:text-orange-500 transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-lg hover:text-orange-500 transition"
            >
              Service
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-lg hover:text-orange-500 transition"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-lg hover:text-orange-500 transition"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-6 py-4 space-y-4 absolute top-full left-0 w-full shadow-lg">
          <a
            href="#home"
            className="block text-lg hover:text-orange-500"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-lg hover:text-orange-500"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#skills"
            className="block text-lg hover:text-orange-500"
            onClick={() => setIsOpen(false)}
          >
            Service
          </a>
          <a
            href="#projects"
            className="block text-lg hover:text-orange-500"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block text-lg hover:text-orange-500"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
