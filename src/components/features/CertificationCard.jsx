import { motion } from 'framer-motion';
import { ShieldAlert, Unlock, ShieldCheck, ExternalLink } from 'lucide-react';

const iconMap = {
  ShieldAlert: ShieldAlert,
  Unlock: Unlock,
  ShieldCheck: ShieldCheck
};

export default function CertificationCard({ cert, index }) {
  const IconComponent = iconMap[cert.icon] || ShieldCheck;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-cyber-gray/10 border border-cyber-gray hover:border-cyber-green/50 p-6 rounded-lg relative group transition-all duration-300"
    >
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-cyber-green hover:text-cyber-accent">
          <ExternalLink size={20} />
        </a>
      </div>

      <div className="w-12 h-12 bg-cyber-dark rounded-full border border-cyber-green/30 flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(57,255,20,0.3)] transition-shadow duration-300">
        <IconComponent className="text-cyber-green" size={24} />
      </div>

      <h3 className="text-lg font-bold text-gray-200 mb-2">{cert.name}</h3>
      <div className="flex justify-between items-center font-mono text-sm text-gray-400">
        <span>{cert.issuer}</span>
        <span className="text-cyber-accent bg-cyber-accent/10 px-2 py-1 rounded">{cert.date}</span>
      </div>
    </motion.div>
  );
}
