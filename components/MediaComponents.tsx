import React, { useState, useEffect } from 'react';
import { Maximize2 } from 'lucide-react';

export const ZoomableImage: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            <div
                className={`relative group cursor-zoom-in overflow-hidden bg-neutral-100 dark:bg-neutral-900 ${className}`}
                onClick={() => setIsOpen(true)}
            >
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Maximize2 className="text-white drop-shadow-md" />
                </div>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 z-[100] bg-white/95 dark:bg-neutral-950/95 flex items-center justify-center p-4 cursor-zoom-out backdrop-blur-md"
                    onClick={() => setIsOpen(false)}
                >
                    <img
                        src={src}
                        alt={alt}
                        className="max-w-7xl max-h-[90vh] w-full h-auto object-contain shadow-2xl rounded-lg"
                    />
                </div>
            )}
        </>
    );
};

export const VideoPlayer: React.FC<{ src: string; className?: string }> = ({ src, className }) => {
    return (
        <div className={`bg-black ${className}`}>
            <video
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
            />
        </div>
    )
}

export const YoutubeEmbed: React.FC<{ id: string }> = ({ id }) => {
    return (
        <div className="aspect-video w-full bg-neutral-100">
            <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    )
}