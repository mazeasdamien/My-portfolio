import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FilterType } from '../types';
import { Mail } from 'lucide-react';
import { DarkModeToggle } from './DarkModeToggle';

interface HeaderProps {
    activeFilter: FilterType;
    onFilterChange: (filter: FilterType) => void;
}

const Header: React.FC<HeaderProps> = ({ activeFilter, onFilterChange }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const filters: { id: FilterType; label: string }[] = [
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
        <header className="sticky top-0 z-50 bg-neutral-50/90 dark:bg-neutral-900/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                    <Link
                        to="/"
                        onClick={() => handleFilterClick('all')}
                        className="text-3xl font-bold tracking-tighter text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
                    >
                        Damien Mazeas, PhD
                    </Link>
                    <DarkModeToggle />
                </div>

                <nav className="flex flex-nowrap md:flex-wrap overflow-x-auto md:overflow-visible w-full md:w-auto justify-start md:justify-center gap-2 px-6 -mx-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => handleFilterClick(filter.id)}
                            className={`px-3 py-1 text-sm font-medium whitespace-nowrap rounded-full transition-all duration-200 ${activeFilter === filter.id
                                ? 'bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900'
                                : 'text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100'
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <a
                        href="mailto:damien.mazeas@icloud.com"
                        className="hidden md:flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-neutral-100 hover:opacity-60 transition-opacity"
                    >
                        <Mail size={16} />
                        <span>Get in touch</span>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;