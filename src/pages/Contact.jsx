import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Send, CheckCircle, ShieldAlert, AlertTriangle } from 'lucide-react';
import DOMPurify from 'dompurify';
import { PORTFOLIO_DATA } from '../constants/portfolioData';

export default function Contact() {
  const { contact } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [terminalLines, setTerminalLines] = useState([
    "> INITIALIZING SECURE SMTP CONNECTION...",
    "> AWAITING USER INPUT..."
  ]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSimulatedSubmit = (e) => {
    e.preventDefault();
    
    // Rate Limiting Check (10 second cooldown)
    const now = Date.now();
    if (now - lastSubmitTime < 10000) {
      const remaining = Math.ceil((10000 - (now - lastSubmitTime)) / 1000);
      setTerminalLines(prev => [...prev, `> ERROR: RATE_LIMIT_EXCEEDED. RETRY IN ${remaining}s.`]);
      return;
    }

    // Input Sanitization
    const cleanData = {
      name: DOMPurify.sanitize(formData.name),
      email: DOMPurify.sanitize(formData.email),
      message: DOMPurify.sanitize(formData.message)
    };

    // Validation
    if (!cleanData.name || !cleanData.email || !cleanData.message) {
      setTerminalLines(prev => [...prev, "> ERROR: MISSING_PAYLOAD_PARAMETERS"]);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanData.email)) {
      setTerminalLines(prev => [...prev, "> ERROR: INVALID_EMAIL_FORMAT"]);
      return;
    }

    setStatus('sending');
    setLastSubmitTime(now);
    setTerminalLines(prev => [
      ...prev, 
      "> SANITIZING INPUT...",
      "> ENCRYPTING PAYLOAD...",
      "> RESOLVING HOST...", 
      "> TRANSMITTING PACKETS..."
    ]);

    // Simulate network delay
    setTimeout(() => {
      setStatus('success');
      setTerminalLines(prev => [
        ...prev, 
        "> 200 OK: PACKET DELIVERED SUCCESSFULLY",
        "> CONNECTION TERMINATED."
      ]);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 2500);
  };

  return (
    <div className="py-12 max-w-4xl mx-auto space-y-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <ShieldAlert className="w-16 h-16 text-cyber-green mx-auto mb-6" />
        <h1 className="text-4xl font-bold tracking-widest text-cyber-accent">
          {contact.header}
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          {contact.description}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-cyber-dark/50 border border-cyber-gray p-2 rounded-lg">
        
        {/* Terminal Output Window */}
        <div className="bg-black rounded-md p-4 font-mono text-sm border border-cyber-gray/30 h-[400px] overflow-y-auto flex flex-col justify-end relative">
          <div className="absolute top-0 left-0 w-full p-2 bg-cyber-gray/20 border-b border-cyber-gray flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          
          <div className="space-y-2 pt-8">
            <AnimatePresence>
              {terminalLines.map((line, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`${
                    line.includes('ERROR') ? 'text-red-500' :
                    line.includes('SUCCESS') || line.includes('200') ? 'text-cyber-green' :
                    'text-gray-400'
                  }`}
                >
                  {line}
                </motion.div>
              ))}
            </AnimatePresence>
            {status === 'sending' && (
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-2 h-4 bg-cyber-green inline-block mt-2"
              />
            )}
          </div>
        </div>

        {/* Input Form */}
        <div className="p-4 md:p-6">
          <form onSubmit={handleSimulatedSubmit} className="space-y-6 form-control">
            
            <div className="space-y-2">
              <label className="font-mono text-xs text-cyber-green uppercase tracking-wider">
                Target_Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={status === 'sending'}
                className="w-full bg-black/50 border border-cyber-gray text-gray-200 px-4 py-3 font-mono focus:outline-none focus:border-cyber-green focus:shadow-[0_0_10px_rgba(57,255,20,0.2)] transition-all disabled:opacity-50"
                placeholder="root"
              />
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs text-cyber-green uppercase tracking-wider">
                Return_Address [Email]
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={status === 'sending'}
                className="w-full bg-black/50 border border-cyber-gray text-gray-200 px-4 py-3 font-mono focus:outline-none focus:border-cyber-green focus:shadow-[0_0_10px_rgba(57,255,20,0.2)] transition-all disabled:opacity-50"
                placeholder="hacker@local.host"
              />
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs text-cyber-green uppercase tracking-wider">
                Cleartext_Payload [Message]
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'sending'}
                rows={4}
                className="w-full bg-black/50 border border-cyber-gray text-gray-200 px-4 py-3 font-mono focus:outline-none focus:border-cyber-green focus:shadow-[0_0_10px_rgba(57,255,20,0.2)] transition-all resize-none disabled:opacity-50"
                placeholder="Enter payload data here..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full font-mono font-bold tracking-widest px-6 py-4 flex items-center justify-center gap-3 transition-all duration-300 ${
                status === 'success' 
                  ? 'bg-cyber-green/20 text-cyber-green border border-cyber-green'
                  : 'bg-cyber-green text-black hover:bg-cyber-accent hover:shadow-[0_0_15px_rgba(57,255,20,0.5)] disabled:opacity-50 hover:-translate-y-1'
              }`}
            >
              {status === 'sending' ? (
                <>...EXECUTING</>
              ) : status === 'success' ? (
                <><CheckCircle size={20} /> PAYLOAD_DELIVERED</>
              ) : (
                <><Send size={20} /> EXECUTE_TRANSMISSION</>
              )}
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}
