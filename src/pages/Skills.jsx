import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../constants/portfolioData';
import SkillBar from '../components/features/SkillBar';
import CertificationCard from '../components/features/CertificationCard';
import { Terminal } from 'lucide-react';

export default function Skills() {
  const { skills, certifications } = PORTFOLIO_DATA;

  return (
    <div className="py-8 space-y-20">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4 mb-12"
      >
        <Terminal className="text-cyber-green" size={32} />
        <h1 className="text-4xl font-bold tracking-tighter text-cyber-accent">
          Technical_Arsenal
        </h1>
        <div className="h-[1px] bg-cyber-green/30 flex-grow ml-4"></div>
      </motion.div>

      {/* Skills Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.categories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.2 }}
              className="bg-cyber-dark/50 border border-cyber-gray p-6 rounded-lg"
            >
              <h2 className="text-xl font-mono text-gray-200 mb-6 border-b border-cyber-gray/50 pb-2">
                // {category.title}
              </h2>
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                    index={skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-bold font-mono text-gray-300">
            &gt; Certifications.list()
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </section>

    </div>
  );
}
