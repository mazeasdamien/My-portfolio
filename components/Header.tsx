import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FilterType } from '../types';
import { Mail, MapPin } from 'lucide-react';
import { DarkModeToggle } from './DarkModeToggle';

interface HeaderProps {
    activeFilter: FilterType;
    onFilterChange: (filter: FilterType) => void;
}

const Header: React.FC<HeaderProps> = ({ activeFilter, onFilterChange }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentTime, setCurrentTime] = useState(new Date());

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

    // Update time every second for real-time display
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date: Date) => {
        return new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Europe/Paris',
            hour12: true
        }).format(date);
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

                <nav className="flex flex-wrap justify-center gap-x-1 gap-y-2">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => handleFilterClick(filter.id)}
                            className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-200 ${activeFilter === filter.id
                                ? 'bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900'
                                : 'text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100'
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <div className="hidden lg:flex items-center gap-2 text-xs font-medium text-neutral-600 dark:text-neutral-400">
                        <span>{formatTime(currentTime)}</span>
                        <div className="flex items-center gap-1">
                            <MapPin size={12} />
                            <span>France</span>
                        </div>
                    </div>

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