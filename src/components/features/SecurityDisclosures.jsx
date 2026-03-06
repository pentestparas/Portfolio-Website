import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../constants/portfolioData';
import { Bug, ShieldCheck, Timer, ExternalLink } from 'lucide-react';

export default function SecurityDisclosures() {
  const { securityDisclosures } = PORTFOLIO_DATA;

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'fixed': return 'text-cyber-green';
      case 'acknowledged': return 'text-cyber-accent';
      default: return 'text-gray-400';
    }
  };

  return (
    <section className="py-12 border-t border-cyber-gray/30">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-bold font-mono text-gray-200">
          <span className="text-cyber-green">❯</span> Security.Disclosures()
        </h2>
        <div className="h-[1px] bg-cyber-gray/30 flex-grow"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {securityDisclosures.map((disc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative p-6 bg-black/40 border border-cyber-gray/30 rounded-lg hover:border-cyber-green/50 transition-all duration-300 overflow-hidden"
          >
            {/* Background Glitch Effect */}
            <div className="absolute inset-0 bg-cyber-green/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            
            <div className="flex items-center justify-between mb-4">
              <Bug className="text-cyber-green opacity-50 group-hover:opacity-100 transition-opacity" size={20} />
              <span className={`text-xs font-mono px-2 py-1 rounded bg-black/60 border border-cyber-gray/50 ${getStatusColor(disc.status)}`}>
                {disc.status.toUpperCase()}
              </span>
            </div>

            <h3 className="text-lg font-bold text-gray-200 mb-1">{disc.platform}</h3>
            <p className="text-sm text-gray-400 font-mono mb-4">Severity: {disc.severity.toUpperCase()}</p>

            <div className="flex items-center gap-2 text-xs text-cyber-accent opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 cursor-pointer">
              <span>VIEW_ADVISORY</span>
              <ExternalLink size={12} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
