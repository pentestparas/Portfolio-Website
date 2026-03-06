import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../constants/portfolioData';
import { Code, Fingerprint, Database, Terminal } from 'lucide-react';

export default function AboutSection() {
  const { about } = PORTFOLIO_DATA;

  return (
    <section className="py-20 relative border-t border-cyber-gray/30">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-cyber-accent leading-none">
          {about.title}
        </h2>
        <div className="h-[1px] bg-cyber-green/30 flex-grow"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Text Content */}
        <div className="lg:col-span-2 space-y-6">
          {about.content.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="text-gray-300 leading-relaxed text-lg bg-cyber-gray/10 p-4 border-l-2 border-cyber-green/50 rounded-r-lg"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Stats / Visual Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="border border-cyber-gray bg-black/50 p-6 rounded-lg relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
            <Fingerprint size={120} className="text-cyber-green" />
          </div>
          
          <h3 className="font-mono text-xl text-gray-200 mb-6 border-b border-cyber-gray pb-2 inline-block">
             User_Metrics 
          </h3>
          
          <div className="space-y-6 relative z-10">
            {about.stats.map((stat, index) => (
               <div key={index} className="flex justify-between items-center bg-cyber-dark/80 p-3 rounded border border-cyber-green/20">
                 <span className="text-gray-400 flex items-center gap-2">
                   {index === 0 ? <Code size={16} /> : index === 1 ? <Database size={16} /> : <Terminal size={16} />}
                   {stat.label}
                 </span>
                 <span className="font-bold text-cyber-accent text-xl">{stat.value}</span>
               </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
