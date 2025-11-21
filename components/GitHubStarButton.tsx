import React, { useState, useEffect } from 'react';
import { Github, Star } from 'lucide-react';

interface GitHubStarButtonProps {
    repo: string; // Format: "username/repo-name"
    className?: string;
}

export const GitHubStarButton: React.FC<GitHubStarButtonProps> = ({ repo, className }) => {
    const [stars, setStars] = useState<number | null>(null);

    useEffect(() => {
        const fetchStars = async () => {
            try {
                const response = await fetch(`https://api.github.com/repos/${repo}`);
                if (response.ok) {
                    const data = await response.json();
                    setStars(data.stargazers_count);
                }
            } catch (error) {
                console.error('Failed to fetch GitHub stars:', error);
            }
        };

        fetchStars();
    }, [repo]);

    return (
        <a
            href={`https://github.com/${repo}`}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
        >
            <Github size={16} />
            GitHub
            {stars !== null && (
                <>
                    <span className="mx-1">•</span>
                    <Star size={14} className="inline" fill="currentColor" />
                    <span className="ml-1">{stars}</span>
                </>
            )}
        </a>
    );
};
