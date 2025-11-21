import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { AppIconData } from '../types';
import { GlassIcon } from './GlassIcon';
import { portfolioData } from '../data';

export default function PortfolioView() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const [currentTime, setCurrentTime] = useState(new Date());

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

    // Clock ticker
    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
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

    // Background Image - High quality abstract gradient
    const bgImage = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop";

    return (
        <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-cyan-900 via-purple-900 to-violet-900 text-white selection:bg-white/20">
            {/* 1. Ambient Background Layer */}
            <div className="absolute inset-0 z-0">
                {/* Main Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-80 transition-opacity duration-[1000ms] ease-out scale-105"
                    style={{ backgroundImage: `url(${bgImage})` }}
                />

                {/* Overlay Gradients for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
            </div>

            {/* 2. Status Bar (Top) */}
            <header className="relative z-50 px-8">
            </header>

            {/* 3. Main Content Area */}
            <main className="relative z-10 flex flex-col items-center justify-end h-full pb-20">

                {/* App Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 md:gap-x-8 md:gap-y-10 px-4 md:px-8 pb-8 pt-0 perspective-1000">
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
                            className="fixed top-40 md:top-24 left-0 right-0 mx-auto w-full max-w-3xl z-50 px-4 md:px-0"
                        >
                            {/* Backdrop blur layer - always visible during animation */}
                            <div className="absolute inset-0 rounded-[2rem] backdrop-blur-xl border border-white/30 shadow-2xl" />

                            {/* Content layer - fades in */}
                            <motion.div
                                className="relative overflow-hidden rounded-[2rem] bg-white/20"
                            >
                                {/* Lighting effect on the glass panel */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

                                <div className="relative px-4 py-4 md:px-8 md:py-6 flex items-center gap-4">
                                    <div className="flex flex-col items-start text-left">
                                        <h3 className="text-lg md:text-2xl font-semibold text-white mb-2 tracking-wide shadow-black/50 drop-shadow-md">
                                            {app.title}
                                        </h3>
                                        <p className="text-xs md:text-sm text-white/80 leading-relaxed">
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
                        className="fixed top-40 md:top-24 left-0 right-0 mx-auto w-full max-w-3xl z-50 px-4 md:px-0"
                    >
                        {/* Backdrop blur layer */}
                        <div className="absolute inset-0 rounded-[2rem] backdrop-blur-xl border border-white/30 shadow-2xl" />

                        {/* Content layer */}
                        <motion.div
                            className="relative overflow-hidden rounded-[2rem] bg-white/20"
                        >
                            {/* Lighting effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

                            <div className="relative px-4 py-4 md:px-8 md:py-6 flex items-center justify-center">
                                <h3 className="text-lg md:text-2xl font-semibold text-white tracking-wide shadow-black/50 drop-shadow-md">
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
