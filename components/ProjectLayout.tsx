import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface ProjectLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 mb-12 transition-colors group animate-fade-in-up opacity-0"
          style={{ animationDelay: '0ms' }}
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Overview
        </Link>

        <div className="mb-16 border-l-4 border-neutral-900 pl-6 animate-fade-in-up opacity-0" style={{ animationDelay: '100ms' }}>
          <h2 className="text-neutral-500 text-sm font-bold uppercase tracking-widest mb-2">{subtitle}</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-neutral-900 max-w-4xl">
            {title}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 animate-fade-in-up opacity-0" style={{ animationDelay: '200ms' }}>
            {children}
        </div>
      </div>
    </div>
  );
};

export default ProjectLayout;