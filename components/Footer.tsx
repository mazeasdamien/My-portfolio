import React from 'react';
import { Github, Linkedin, Youtube, BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 py-12 mt-auto transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center gap-6">
        <div className="flex gap-6 text-neutral-400 dark:text-neutral-500">
          <a href="https://www.linkedin.com/in/mazeas/" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"><Linkedin size={24} /></a>
          <a href="https://github.com/mazeasdamien" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"><Github size={24} /></a>
          <a href="https://scholar.google.com/citations?user=SydtND4AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"><BookOpen size={24} /></a>
          <a href="https://www.youtube.com/@mazeas" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"><Youtube size={24} /></a>
        </div>
        <p className="text-sm text-neutral-400 dark:text-neutral-500 text-center">
          © Damien Mazeas<br />
          Last updated {new Date().toLocaleString('default', { month: 'long' })} {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;