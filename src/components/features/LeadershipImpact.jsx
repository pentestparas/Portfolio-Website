import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../constants/portfolioData';
import { Trophy, Presentation, FileText } from 'lucide-react';

export default function LeadershipImpact() {
  const { leadership } = PORTFOLIO_DATA;

  const icons = [<Presentation size={24} />, <Trophy size={24} />, <FileText size={24} />];

  return (
    <section className="py-12 border-t border-cyber-gray/30">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-bold font-mono text-gray-200">
          <span className="text-cyber-green">❯</span> Leadership_&_Impact
        </h2>
        <div className="h-[1px] bg-cyber-gray/30 flex-grow"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {leadership.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="flex gap-4 p-6 bg-cyber-gray/5 border-l-4 border-cyber-accent rounded-r-lg"
          >
            <div className="text-cyber-accent shrink-0">
              {icons[index % icons.length]}
            </div>
            <p className="text-gray-300 leading-relaxed font-mono text-sm leading-6">
              {item}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
