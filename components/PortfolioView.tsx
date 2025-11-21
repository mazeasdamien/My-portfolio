import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppIconData } from '../types';
import { GlassIcon } from './GlassIcon';
import { portfolioData } from '../data';

export default function PortfolioView() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    // Filter and map portfolio data to app icons
    const appsData: AppIconData[] = useMemo(() => {
        return portfolioData
            .filter(item => item.category === 'portfolio' || item.category === 'tools')
            .map((item, index) => ({
                id: `app-${index}`,
                title: item.title,
                category: item.subtitle || item.category,
                description: item.description || '',
                imageUrl: item.thumbnail || '',
                hoverImageUrl: item.hoverThumbnail || item.thumbnail || '',
                iconLabel: `${item.subtitle || item.category} - ${item.displayDate || item.date}`,
                link: item.url || ''
            }));
    }, []);

    // Background Image - High quality abstract gradient
    const bgImage = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop";

    return (
        <div className="relative w-full h-screen overflow-hidden text-neutral-900 dark:text-neutral-100 selection:bg-neutral-200 dark:selection:bg-neutral-800">

            {/* 2. Status Bar (Top) */}
            <header className="relative z-50 px-8">
            </header>

            {/* 3. Main Content Area */}
            <main className="relative z-10 flex flex-col items-center justify-end h-full pb-20 md:pb-20 overflow-y-auto md:overflow-hidden scrollbar-hide">

                {/* Spacer for fixed header on mobile if needed, or just rely on grid padding */}
                <div className="h-60 md:hidden shrink-0 w-full" />

                {/* App Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 md:gap-x-8 md:gap-y-10 px-4 md:px-8 pb-8 pt-0 perspective-1000 shrink-0">
                    {appsData.map((app) => (
                        <GlassIcon
                            key={app.id}
                            data={app}
                            isHovered={hoveredId === app.id}
                            onHover={setHoveredId}
                        />
                    ))}
                </div>

            </main>

            {/* 4. Dynamic Info Dock / Tooltip */}
            <AnimatePresence mode="wait">
                {hoveredId ? (() => {
                    const app = appsData.find(a => a.id === hoveredId);
                    if (!app) return null;

                    return (
                        <motion.div
                            key="popup-project"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="fixed top-32 md:top-24 left-0 right-0 mx-auto w-full max-w-3xl z-50 px-4 md:px-0"
                        >
                            {/* Backdrop blur layer - always visible during animation */}
                            <div className="absolute inset-0 rounded-[2rem] backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-700/50 shadow-2xl bg-neutral-50/90 dark:bg-neutral-900/90" />

                            {/* Content layer - fades in */}
                            <motion.div
                                className="relative overflow-hidden rounded-[2rem]"
                            >
                                {/* Lighting effect on the glass panel */}
                                <div className="absolute inset-0 bg-white/40 dark:bg-neutral-900/40 pointer-events-none" />

                                <div className="relative px-4 py-4 md:px-8 md:py-6 flex items-center gap-4">
                                    <div className="flex flex-col items-start text-left">
                                        <h3 className="text-lg md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2 tracking-wide">
                                            {app.title}
                                        </h3>
                                        <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                            {app.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    );
                })() : (
                    <motion.div
                        key="popup-default"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-32 md:top-24 left-0 right-0 mx-auto w-full max-w-3xl z-50 px-4 md:px-0"
                    >
                        {/* Backdrop blur layer */}
                        <div className="absolute inset-0 rounded-[2rem] backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-700/50 shadow-2xl bg-neutral-50/90 dark:bg-neutral-900/90" />

                        {/* Content layer */}
                        <motion.div
                            className="relative overflow-hidden rounded-[2rem]"
                        >
                            {/* Lighting effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

                            <div className="relative px-4 py-4 md:px-8 md:py-6 flex items-center justify-center">
                                <h3 className="text-lg md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-wide">
                                    Selected Projects
                                </h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
