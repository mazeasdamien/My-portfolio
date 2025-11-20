import React, { useRef, useEffect } from 'react';

export const BoomerangVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Initial speed
    video.playbackRate = 0.5;

    const handleEnded = () => {
      // Switch to reverse
      video.playbackRate = -0.5;
      video.play();
    };

    const handleTimeUpdate = () => {
      // If playing backwards and reached the start
      if (video.playbackRate < 0 && video.currentTime < 0.1) {
        video.playbackRate = 0.5;
        video.play();
      }
    };

    video.addEventListener('ended', handleEnded);
    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      <video
        ref={videoRef}
        src="videos/background_video.mp4"
        className="w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        controls={false}
      />
    </div>
  );
};
