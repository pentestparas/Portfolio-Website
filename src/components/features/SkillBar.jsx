import { motion } from 'framer-motion';

export default function SkillBar({ name, level, index }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-mono text-sm text-gray-300">{name}</span>
        <span className="font-mono text-sm text-cyber-green">{level}%</span>
      </div>
      <div className="w-full bg-cyber-gray/30 h-2 rounded overflow-hidden border border-cyber-gray/50">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
          className="bg-cyber-green h-full shadow-[0_0_10px_rgba(57,255,20,0.5)]"
        />
      </div>
    </div>
  );
}
