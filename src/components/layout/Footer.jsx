import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../constants/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { contact } = PORTFOLIO_DATA;

  return (
    <footer className="border-t border-cyber-gray bg-cyber-dark py-8 px-4 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        <div className="mb-4 md:mb-0">
          <p className="font-mono text-sm text-gray-500">
            &copy; {currentYear} PARAS PATIL. ALL RIGHTS RESERVED.
          </p>
          <p className="font-mono text-xs text-cyber-green/50 mt-1">
             STATUS: SECURE 
          </p>
        </div>

        <div className="flex space-x-6 items-center">
          {contact.socials.github && (
            <a href={contact.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-accent transition-colors">
              <Github className="w-5 h-5" />
            </a>
          )}
          {contact.socials.linkedin && (
            <a href={contact.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-accent transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {contact.socials.twitter && (
            <a href={contact.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-accent transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          )}
          <a href={`mailto:${contact.email}`} className="text-gray-400 hover:text-cyber-accent transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>

      </div>
    </footer>
  );
}
