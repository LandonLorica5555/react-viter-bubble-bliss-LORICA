import React from "react";
import { FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white text-black p-4 sticky top-0 z-50 shadow-md">
        <div className="container px-10 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Bubble Bliss
            </h1>
            <p className="text-lg gap-2">🧋</p>
          </div>
          <div className="hidden md:flex space-x-6">
            <a
              href="#home"
              className="hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent font-semibold transition"
            >
              Home
            </a>
            <a
              href="#types"
              className="hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent font-semibold transition"
            >
              Types
            </a>
            <a
              href="#toppings"
              className="hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent font-semibold transition"
            >
              Toppings
            </a>
            <a
              href="#benefits"
              className="hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent font-semibold transition"
            >
              Benefits
            </a>
            <a
              href="#contact"
              className="hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent font-semibold transition"
            >
              Contact
            </a>
          </div>

          <button
            className="md:hidden text-xl focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
        fixed inset-0 bg-white z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-8 text-black text-2xl">
          <a
            href="#home"
            className="hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent font-semibold transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#ypes"
            className="hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent font-semibold transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Types
          </a>
          <a
            href="#toppings"
            className="hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent font-semibold transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Toppings
          </a>
          <a
            href="#benefits"
            className="hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent font-semibold transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Benefits
          </a>
          <a
            href="#contact"
            className="hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-clip-text hover:text-transparent font-semibold transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          
        </div>
      </div>
    </>
  );
};

export default Navigation;
