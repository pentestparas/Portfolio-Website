import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../constants/portfolioData';
import { FileText, Download, Maximize2, ExternalLink } from 'lucide-react';

export default function ResumeViewer() {
  const { contact } = PORTFOLIO_DATA;

  return (
    <section className="py-12 border-t border-cyber-gray/30">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold font-mono text-gray-200">
            <span className="text-cyber-green">❯</span> Resume_Core.pdf
          </h2>
          <div className="hidden md:block h-[1px] bg-cyber-gray/30 w-24"></div>
        </div>

        <a 
          href={contact.resumeUrl}
          download={contact.resumeFilename}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-cyber-green/10 border border-cyber-green text-cyber-green font-mono text-sm hover:bg-cyber-green/20 transition-all duration-300 group rounded"
        >
          <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
          DOWNLOAD_RESUME
        </a>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative aspect-[1/1.4] w-full max-w-4xl mx-auto border border-cyber-gray/30 bg-black/40 rounded-lg overflow-hidden group shadow-2xl shadow-cyber-green/5"
      >
        {/* Cybersecurity Overlay Frame */}
        <div className="absolute inset-0 border-[16px] border-black/80 pointer-events-none z-10" />
        <div className="absolute inset-0 border border-cyber-green/20 pointer-events-none z-10" />
        
        {/* Terminal Header Decoration */}
        <div className="absolute top-0 left-0 right-0 h-10 bg-cyber-gray/10 border-b border-cyber-gray/20 flex items-center px-6 gap-2 z-20">
          <div className="w-2 h-2 rounded-full bg-red-500/50" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
          <div className="w-2 h-2 rounded-full bg-cyber-green/50" />
          <span className="ml-4 font-mono text-[10px] text-gray-500 uppercase tracking-widest">
            SECURE_VIEWER_V1.0.4
          </span>
        </div>

        {/* The PDF Viewer */}
        <div className="absolute inset-0 pt-10 pb-4 px-4 bg-gray-900/50">
          <iframe 
            src={`${contact.resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
            className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
            title="Paras Patil Resume"
          />
        </div>

        {/* Hover Hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 bg-black/80 border border-cyber-green/30 px-4 py-2 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p className="font-mono text-[10px] text-cyber-green flex items-center gap-2">
            <Maximize2 size={12} />
            INTERACTION_READY_MODE
          </p>
        </div>
      </motion.div>

      <div className="mt-8 flex justify-center">
        <p className="text-gray-500 font-mono text-xs flex items-center gap-2">
           <ShieldCheck size={14} className="text-cyber-green" />
           DOC_INTEGRITY_VERIFIED_BY_SHA256
        </p>
      </div>
    </section>
  );
}
