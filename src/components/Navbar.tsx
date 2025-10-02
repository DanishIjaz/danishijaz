import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setOpenDropdown(null);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            Danish Ijaz
          </div>

          <button
            className="lg:hidden text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <ul className="hidden lg:flex items-center space-x-8">
            <li>
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium"
              >
                About Me
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium"
              >
                Services
              </button>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setOpenDropdown('portfolio')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium"
              >
                Portfolio
              </button>
              {openDropdown === 'portfolio' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-2xl py-2 animate-fade-in">
                  <button
                    onClick={() => scrollToSection('gfx')}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-purple-600 transition-all"
                  >
                    GFX Design
                  </button>
                  <button
                    onClick={() => scrollToSection('vfx')}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-purple-600 transition-all"
                  >
                    VFX Production
                  </button>
                </div>
              )}
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </button>
            </li>
          </ul>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors font-medium"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors font-medium"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors font-medium"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-6 py-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full text-center"
                >
                  Contact Me
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
