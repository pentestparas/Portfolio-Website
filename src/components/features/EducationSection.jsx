import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../constants/portfolioData';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function EducationSection() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section className="py-12 border-t border-cyber-gray/30">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-bold font-mono text-gray-200">
          <span className="text-cyber-green">❯</span> Academic_Records
        </h2>
        <div className="h-[1px] bg-cyber-gray/30 flex-grow"></div>
      </div>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-black/30 border border-cyber-gray/20 p-6 rounded-lg group hover:border-cyber-accent/30 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <GraduationCap className="text-cyber-accent" size={20} />
                  <h3 className="text-xl font-bold text-gray-200">{edu.school}</h3>
                </div>
                <p className="text-cyber-green font-mono text-sm">{edu.degree}</p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-1">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Calendar size={14} />
                  <span>{edu.date}</span>
                </div>
                {index === 1 || index === 2 ? (
                  <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <MapPin size={12} />
                    <span>Pune, India</span>
                  </div>
                ) : null}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
