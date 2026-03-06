import { motion } from 'framer-motion';
import { Github, ExternalLink, Terminal, FolderGit2 } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-cyber-gray/20 border border-cyber-gray hover:border-cyber-green rounded-lg overflow-hidden group flex flex-col h-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(57,255,20,0.15)]"
    >
      {/* Header/Thumbnail Area (Simulated terminal header) */}
      <div className="h-12 bg-black/50 border-b border-cyber-gray flex items-center px-4 justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <span className="font-mono text-xs text-gray-500 flex items-center gap-2">
          <FolderGit2 size={14} />
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-200 mb-3 group-hover:text-cyber-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <span 
                key={i} 
                className="font-mono text-[10px] px-2 py-1 bg-cyber-dark text-cyber-green border border-cyber-green/30 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 pt-4 border-t border-cyber-gray/50 mt-auto">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-cyber-accent transition-colors"
              >
                <Github size={16} /> Source
              </a>
            )}
            
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-cyber-green transition-colors ml-auto"
              >
                <ExternalLink size={16} /> View
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
