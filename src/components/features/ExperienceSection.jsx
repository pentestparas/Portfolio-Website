import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../constants/portfolioData';
import { Server, Activity, Shield } from 'lucide-react';

export default function ExperienceSection() {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section className="py-20 relative border-t border-cyber-gray/30 mt-12">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-cyber-accent leading-none font-mono">
          System.Log('Career_Timeline')
        </h2>
        <div className="h-[1px] bg-cyber-green/30 flex-grow"></div>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-cyber-gray before:to-transparent">
        {experience.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            {/* Timeline Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-cyber-green bg-cyber-dark text-cyber-green shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(0,255,65,0.2)] z-10 transition-transform duration-300 group-hover:scale-110">
              {index % 3 === 0 ? <Shield size={18} /> : index % 3 === 1 ? <Server size={18} /> : <Activity size={18} />}
            </div>
            
            {/* Timeline Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-black/40 border border-cyber-gray/50 p-6 rounded relative hover:border-cyber-green/50 transition-colors duration-300">
               {/* Arrow */}
               <div className="absolute top-4 -left-3 md:group-odd:left-auto md:group-odd:-right-3 md:group-even:-left-3 w-3 h-3 bg-black border border-cyber-gray/50 md:group-odd:border-l-0 md:group-odd:border-b-0 md:group-even:border-r-0 md:group-even:border-t-0 rotate-45"></div>

               <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                 <h3 className="font-bold text-lg text-cyber-accent">{job.title}</h3>
                 <span className="font-mono text-sm text-gray-500 bg-cyber-gray/20 px-2 py-1 rounded">{job.date}</span>
               </div>
               
               <p className="text-gray-300 font-medium mb-4">{job.company}</p>
               <p className="text-sm text-gray-400 leading-relaxed mb-6">{job.description}</p>
               
               <div className="flex flex-wrap gap-2">
                 {job.tags.map((tag, i) => (
                   <span key={i} className="text-xs font-mono text-cyber-green/80 border border-cyber-green/30 px-2 py-1 bg-cyber-green/5">
                     #{tag}
                   </span>
                 ))}
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
