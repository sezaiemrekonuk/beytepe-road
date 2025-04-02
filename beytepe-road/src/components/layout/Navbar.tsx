import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container flex justify-between items-center py-4">
        <div className="flex items-center">
          <img 
            src="/beyteperoad-logo.jpg" 
            alt="Beytepe Road Logo" 
            className="h-10 w-auto mr-2"
          />
          <span className="text-xl font-bold text-primary">Beytepe Road</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-700 hover:text-primary transition-colors">Özellikler</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-primary transition-colors">Nasıl Çalışır</a>
          <a href="#about" className="text-gray-700 hover:text-primary transition-colors">Hakkımızda</a>
          <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">İletişim</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="btn-primary">
            Hacettepe Mail ile Kaydol
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white"
        >
          <div className="container py-4 flex flex-col space-y-4">
            <a href="#features" className="text-gray-700 hover:text-primary transition-colors px-4 py-2">Özellikler</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-primary transition-colors px-4 py-2">Nasıl Çalışır</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors px-4 py-2">Hakkımızda</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors px-4 py-2">İletişim</a>
            <button className="btn-primary mx-4">
              Hacettepe Mail ile Kaydol
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar; 