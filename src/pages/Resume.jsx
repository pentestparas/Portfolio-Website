import ResumeViewer from '../components/features/ResumeViewer';
import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-12"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-cyber-accent mb-4">
             Terminal_Resume 
          </h1>
          <p className="text-gray-400 font-mono text-sm border-l-2 border-cyber-green pl-4">
            Viewing authenticated professional record. System integrity: nominal.
          </p>
        </div>
        
        <ResumeViewer />
        
        <div className="mt-12 text-center">
            <p className="text-cyber-gray text-xs font-mono uppercase tracking-tighter">
                End_Of_Transmission
            </p>
        </div>
      </div>
    </motion.div>
  );
}
