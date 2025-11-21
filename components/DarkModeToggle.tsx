import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

export const DarkModeToggle: React.FC = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <button
            onClick={toggleDarkMode}
            className="relative group p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Toggle dark mode"
        >
            <div className="relative w-6 h-6">
                {/* Sun icon (light mode) */}
                <Sun
                    className={`absolute inset-0 transition-all duration-500 ${isDarkMode
                            ? 'opacity-0 rotate-180 scale-0'
                            : 'opacity-100 rotate-0 scale-100 text-yellow-500'
                        }`}
                    size={24}
                />

                {/* Moon icon (dark mode) */}
                <Moon
                    className={`absolute inset-0 transition-all duration-500 ${!isDarkMode
                            ? 'opacity-0 rotate-180 scale-0'
                            : 'opacity-100 rotate-0 scale-100 text-blue-400'
                        }`}
                    size={24}
                />
            </div>

            {/* Tooltip */}
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {isDarkMode ? 'Light mode' : 'Dark mode'}
            </span>
        </button>
    );
};
