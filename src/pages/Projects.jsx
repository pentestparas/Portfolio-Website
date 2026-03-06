import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA } from '../constants/portfolioData';
import ProjectCard from '../components/features/ProjectCard';
import { Terminal } from 'lucide-react';

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;
  
  // Extract unique categories for filter tabs
  const categories = ["All", ...new Set(projects.map(p => p.category))];
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="py-8 space-y-12">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4"
      >
        <Terminal className="text-cyber-green" size={32} />
        <h1 className="text-4xl font-bold tracking-tighter text-cyber-accent">
          Operations_Log
        </h1>
        <div className="h-[1px] bg-cyber-green/30 flex-grow ml-4"></div>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-4">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveFilter(category)}
            className={`font-mono px-4 py-2 text-sm rounded transition-all duration-300 ${
              activeFilter === category
                ? 'bg-cyber-green text-black font-bold shadow-[0_0_10px_rgba(57,255,20,0.4)]'
                : 'bg-cyber-gray/30 text-gray-400 hover:text-cyber-green border border-cyber-gray hover:border-cyber-green'
            }`}
          >
            {category === "All" ? "./all_logs" : `./${category.toLowerCase()}`}
          </button>
        ))}
      </div>

      {/* Projects Grid Grid with AnimatePresence for filter transitions */}
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              transition={{ duration: 0.3 }}
              key={project.id}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

    </div>
  );
}
