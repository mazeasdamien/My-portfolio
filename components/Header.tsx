import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FilterType } from '../types';
import { Mail } from 'lucide-react';

interface HeaderProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const Header: React.FC<HeaderProps> = ({ activeFilter, onFilterChange }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const filters: { id: FilterType; label: string }[] = [
    { id: 'all', label: 'Home' },
    { id: 'cv', label: 'CV' },
    { id: 'publication', label: 'Publications' },
    { id: 'teaching', label: 'Teaching' },
    { id: 'tutorial', label: 'Tutorials' },
    { id: 'portfolio', label: 'Portfolio' },
  ];

  const handleFilterClick = (id: FilterType) => {
    onFilterChange(id);
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-neutral-50/90 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <Link 
          to="/" 
          onClick={() => handleFilterClick('all')}
          className="text-3xl font-bold tracking-tighter text-neutral-900 hover:text-neutral-600 transition-colors"
        >
          Damien Mazeas, PhD
        </Link>

        <nav className="flex flex-wrap justify-center gap-x-1 gap-y-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilterClick(filter.id)}
              className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-neutral-900 text-white'
                  : 'text-neutral-500 hover:bg-neutral-200 hover:text-neutral-900'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </nav>

        <a 
          href="mailto:damien.mazeas@icloud.com"
          className="hidden md:flex items-center gap-2 text-sm font-medium text-neutral-900 hover:opacity-60 transition-opacity"
        >
          <Mail size={16} />
          <span>Get in touch</span>
        </a>
      </div>
    </header>
  );
};

export default Header;