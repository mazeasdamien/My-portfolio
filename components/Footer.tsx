import React from 'react';
import { Github, Linkedin, Youtube, BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center gap-6">
        <div className="flex gap-6 text-neutral-400">
           <a href="https://www.linkedin.com/in/mazeas/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 transition-colors"><Linkedin size={24} /></a>
           <a href="https://github.com/mazeasdamien" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 transition-colors"><Github size={24} /></a>
           <a href="https://scholar.google.com/citations?user=SydtND4AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 transition-colors"><BookOpen size={24} /></a>
           <a href="https://www.youtube.com/@mazeas" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 transition-colors"><Youtube size={24} /></a>
        </div>
        <p className="text-sm text-neutral-400 text-center">
          © {new Date().getFullYear()} Damien Mazeas, PhD.
        </p>
      </div>
    </footer>
  );
};

export default Footer;