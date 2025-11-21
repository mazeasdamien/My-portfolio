import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AppIconData } from '../types';

interface GlassIconProps {
    data: AppIconData;
    isHovered: boolean;
    onHover: (id: string | null) => void;
}

export const GlassIcon: React.FC<GlassIconProps> = ({ data, isHovered, onHover }) => {
    const ref = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    // Spring config for smooth "spatial" feel
    const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };

    // Mouse position relative to element center for parallax tilt
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-50, 50], [10, -10]), springConfig);
    const rotateY = useSpring(useTransform(x, [-50, 50], [-10, 10]), springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        onHover(null);
    };

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (data.link) {
            if (data.link.startsWith('/') || data.link.startsWith('#')) {
                navigate(data.link);
            } else {
                window.open(data.link, '_blank');
            }
        }
    };

    return (
        <div className="relative group flex flex-col items-center justify-center gap-3">
            {/* Icon Container */}
            <motion.div
                ref={ref}
                onMouseEnter={() => onHover(data.id)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
                initial={false}
                animate={isHovered ? "hover" : "rest"}
                style={{
                    rotateX: isHovered ? rotateX : 0,
                    rotateY: isHovered ? rotateY : 0,
                    z: isHovered ? 50 : 0, // Translate Z for 3D pop
                }}
                variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.15 }
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-[14.4rem] md:h-[14.4rem] rounded-[1rem] cursor-pointer select-none z-20"
            >
                {/* Shadow Layer (Dynamic) */}
                <motion.div
                    className="absolute inset-0 rounded-[1rem] bg-black/40 blur-xl"
                    variants={{
                        rest: { opacity: 0, scale: 0.8, y: 10 },
                        hover: { opacity: 0.6, scale: 1.2, y: 20 } // Shadow drops and expands on lift
                    }}
                    transition={{ duration: 0.3 }}
                />

                {/* Glass Border / Housing */}
                <div className="relative w-full h-full rounded-[1rem] overflow-hidden bg-white/10 dark:bg-neutral-800/30 border border-neutral-200/50 dark:border-neutral-700/50 shadow-sm backdrop-blur-sm group-hover:border-purple-400/40 transition-all duration-300">

                    {/* Image Content */}
                    <img
                        src={isHovered && data.hoverImageUrl ? data.hoverImageUrl : data.imageUrl}
                        alt={data.title}
                        className={`w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300`}
                    />

                    {/* Color tint overlay for integration */}
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-500/5 via-transparent to-neutral-500/5 mix-blend-overlay pointer-events-none" />

                    {/* Specular Highlight (Sheen) */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Inner Glow on Hover */}
                    <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(168,85,247,0.15)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[1rem]" />
                </div>
            </motion.div>

            {/* Simple Title Label (Always visible, but fades slightly when another is hovered) */}
            <motion.span
                className={`text-sm font-semibold tracking-wide text-neutral-600 dark:text-neutral-300 text-center w-32 truncate pointer-events-none transition-all duration-300 ${isHovered ? 'opacity-0 translate-y-2' : 'opacity-100'}`}
            >
                {data.iconLabel}
            </motion.span>
        </div>
    );
};
