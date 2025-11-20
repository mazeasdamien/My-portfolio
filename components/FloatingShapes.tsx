import React, { useEffect, useRef } from 'react';

export const FloatingShapes: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Inject keyframes into document
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
      @keyframes float-1 {
        0%, 100% { transform: translate(-50%, -50%) translate(0, 0); }
        50% { transform: translate(-50%, -50%) translate(-30px, 40px); }
      }
      @keyframes float-2 {
        0%, 100% { transform: translate(-50%, -50%) translate(0, 0); }
        50% { transform: translate(-50%, -50%) translate(50px, -30px); }
      }
      @keyframes float-3 {
        0%, 100% { transform: translate(-50%, -50%) translate(0, 0); }
        50% { transform: translate(-50%, -50%) translate(-40px, -35px); }
      }
      @keyframes float-4 {
        0%, 100% { transform: translate(-50%, -50%) translate(0, 0); }
        50% { transform: translate(-50%, -50%) translate(35px, 45px); }
      }
      @keyframes float-5 {
        0%, 100% { transform: translate(-50%, -50%) translate(0, 0); }
        50% { transform: translate(-50%, -50%) translate(-45px, 30px); }
      }
      @keyframes float-6 {
        0%, 100% { transform: translate(-50%, -50%) translate(0, 0); }
        50% { transform: translate(-50%, -50%) translate(40px, -40px); }
      }
      @keyframes float-7 {
        0%, 100% { transform: translate(-50%, -50%) translate(0, 0); }
        50% { transform: translate(-50%, -50%) translate(-35px, -45px); }
      }
      @keyframes float-8 {
        0%, 100% { transform: translate(-50%, -50%) translate(0, 0); }
        50% { transform: translate(-50%, -50%) translate(30px, 35px); }
      }
    `;
        document.head.appendChild(styleSheet);

        return () => {
            document.head.removeChild(styleSheet);
        };
    }, []);

    const orbs = [
        { id: 1, x: 20, y: 30, size: 350, color: 'rgba(184, 212, 232, 0.6)', blur: 80, duration: 8 },
        { id: 2, x: 70, y: 20, size: 300, color: 'rgba(200, 220, 240, 0.55)', blur: 70, duration: 10 },
        { id: 3, x: 50, y: 60, size: 400, color: 'rgba(232, 216, 200, 0.6)', blur: 90, duration: 9 },
        { id: 4, x: 85, y: 70, size: 280, color: 'rgba(240, 232, 216, 0.5)', blur: 75, duration: 11 },
        { id: 5, x: 15, y: 80, size: 320, color: 'rgba(224, 208, 184, 0.55)', blur: 85, duration: 12 },
        { id: 6, x: 60, y: 15, size: 360, color: 'rgba(192, 208, 224, 0.6)', blur: 80, duration: 10 },
        { id: 7, x: 35, y: 50, size: 290, color: 'rgba(184, 212, 232, 0.5)', blur: 70, duration: 9 },
        { id: 8, x: 80, y: 45, size: 340, color: 'rgba(200, 220, 240, 0.55)', blur: 75, duration: 11 },
    ];

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ zIndex: 0 }}
        >
            {orbs.map((orb) => (
                <div
                    key={orb.id}
                    className="absolute rounded-full"
                    style={{
                        left: `${orb.x}%`,
                        top: `${orb.y}%`,
                        width: `${orb.size}px`,
                        height: `${orb.size}px`,
                        background: `radial-gradient(circle at 40% 40%, ${orb.color}, transparent 70%)`,
                        filter: `blur(${orb.blur}px)`,
                        animation: `float-${orb.id} ${orb.duration}s ease-in-out infinite alternate`,
                        willChange: 'transform',
                        transform: 'translate(-50%, -50%)'
                    }}
                />
            ))}
        </div>
    );
};
