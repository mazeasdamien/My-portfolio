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
            // Outer container: acts as the border. Default color neutral-200.
            className={`relative rounded-xl bg-neutral-200 dark:bg-neutral-700 p-[1px] transition-all duration-300 hover:shadow-md ${className}`}
            {...props}
        >
            {/* Gradient Glow Layer - sits on top of the bg-neutral-200 but behind the content */}
            <div
                className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(1000px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 60%)`,
                }}
            />

            {/* Content Container - the actual "card" background */}
            <div className={`relative h-full w-full bg-white dark:bg-neutral-900 rounded-[11px] ${innerClassName}`}>
                {children}
            </div>
        </Component>
    );
};
