import React, { useRef, useState, ElementType } from 'react';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    as?: ElementType;
    className?: string;
    innerClassName?: string;
    spotlightColor?: string;
    [key: string]: any;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
    children,
    as: Component = 'div',
    className = '',
    innerClassName = '',
    spotlightColor = 'rgb(9, 172, 239)',
    ...props
}) => {
    const divRef = useRef<HTMLElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <Component
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            // Liquid Glass Style
            className={`relative rounded-xl border border-neutral-200/50 dark:border-neutral-700/50 bg-gradient-to-br from-neutral-50/90 to-neutral-50/50 dark:from-neutral-900/60 dark:to-neutral-900/20 backdrop-blur-md transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden ${className}`}
            {...props}
        >
            {/* Gradient Glow Layer */}
            <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, ${spotlightColor}15, transparent 40%)`,
                }}
            />

            {/* Content Container */}
            <div className={`relative h-full w-full ${innerClassName}`}>
                {children}
            </div>
        </Component>
    );
};
