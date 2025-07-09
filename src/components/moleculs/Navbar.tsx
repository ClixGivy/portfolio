import { useState } from 'react';
import PFP from '../../assets/profilePic.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
            
          {/* Left: Profile */}
          <div className="flex items-center space-x-4">
            <img
              src={PFP}
              alt="pfp"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <h1 className="text-lg font-semibold text-gray-800">Christophe NICOLAS</h1>
              <p className="text-sm text-gray-500">Développeur Full Stack</p>
            </div>
          </div>

          {/* Right: Buttons (desktop) */}
          <div className="hidden md:flex space-x-4">
            <a
              href="#realisations"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg transition"
            >
              Réalisations Professionnelles
            </a>
            <a
              href="#autre"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg transition"
            >
              À définir
            </a>
          </div>

          {/* Burger menu (mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <a
            href="#realisations"
            className="block bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg mt-2"
          >
            Réalisations Professionnelles
          </a>
          <a
            href="#autre"
            className="block bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg mt-2"
          >
            À définir
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
