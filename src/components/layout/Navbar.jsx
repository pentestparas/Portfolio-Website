import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Terminal, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="border-b border-cyber-gray bg-cyber-dark/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <Terminal className="text-cyber-green w-6 h-6" />
            <span className="font-mono font-bold text-cyber-accent tracking-widest text-xl">
              ROOT@PARAS:~$
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-mono text-sm transition-colors duration-200 hover:text-cyber-accent ${
                    isActive ? 'text-cyber-accent border-b-2 border-cyber-accent' : 'text-gray-400'
                  }`
                }
              >
                ./{link.name.toLowerCase()}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-cyber-green focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden border-t border-cyber-gray bg-cyber-dark"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md font-mono text-base font-medium ${
                    isActive 
                    ? 'bg-cyber-gray text-cyber-accent' 
                    : 'text-gray-300 hover:bg-cyber-gray/50 hover:text-cyber-green'
                  }`
                }
              >
                {/* Prefixing to look like a command execution */}
                &gt; {link.name.toLowerCase()}.sh
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
