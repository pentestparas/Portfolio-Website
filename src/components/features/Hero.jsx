import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../constants/portfolioData';
import { Terminal, Shield, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [typedTitle, setTypedTitle] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    const titles = PORTFOLIO_DATA.hero.titles;
    const currentTitle = titles[titleIndex % titles.length];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && typedTitle === currentTitle) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && typedTitle === '') {
        setIsDeleting(false);
        setTitleIndex((prev) => prev + 1);
      } else {
        const nextContent = isDeleting
          ? currentTitle.substring(0, typedTitle.length - 1)
          : currentTitle.substring(0, typedTitle.length + 1);
        setTypedTitle(nextContent);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedTitle, isDeleting, titleIndex]);

  return (
    <section className="min-h-[80vh] flex flex-col justify-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 relative"
      >
        <div className="flex items-center gap-2 mb-4 text-cyber-green/70">
          <Terminal size={16} />
          <span className="text-sm font-mono tracking-wider">{PORTFOLIO_DATA.hero.greeting}</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight drop-shadow-[0_0_15px_rgba(57,255,20,0.3)]">
          <span className="text-gray-100">I am </span>
          <span className="text-cyber-green">{PORTFOLIO_DATA.hero.name}</span>
        </h1>

        <div className="h-12 md:h-16 mb-6">
          <p className="text-2xl md:text-4xl font-mono text-gray-400 border-r-4 border-cyber-accent pr-2 inline-block animate-[pulse_1s_ease-in-out_infinite]">
            &gt; {typedTitle}
          </p>
        </div>

        <p className="text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed">
          {PORTFOLIO_DATA.hero.description}
        </p>

        <div className="flex gap-4">
          <Link to="/projects">
            <button className="px-6 py-3 bg-cyber-green/10 border border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black transition-all duration-300 font-mono font-bold flex items-center gap-2 group">
              <Shield size={18} className="group-hover:animate-pulse" />
              View_Operations
            </button>
          </Link>
          <Link to="/contact">
            <button className="px-6 py-3 border border-gray-600 text-gray-300 hover:border-cyber-accent hover:text-cyber-accent transition-all duration-300 font-mono flex items-center gap-2">
              <Lock size={18} />
              Secured_Comms
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 opacity-5 pointer-events-none hidden lg:block">
        <pre className="font-mono text-[10px] leading-tight text-cyber-green whitespace-pre">
{`01001000 01000001 01000011 01001011 
01010100 01001000 01000101 01010000 
01001100 01000001 01001110 01000101 
01010100 00100000 01001110 01001111 
01010111 00000000 00000000 00000000`}
        </pre>
      </div>
    </section>
  );
}
