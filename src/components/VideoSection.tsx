import { Play } from 'lucide-react';
import { useState, useRef } from 'react';
import videoSrc from '../assets/video-pres.mp4';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Comment nous générons vos clients en{' '}
          <span className="text-blue-400">30 jours</span>
        </h2>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>

          <div className="relative bg-black rounded-2xl overflow-hidden border border-gray-700 aspect-video">

            {/* VIDEO */}
            <video
              ref={videoRef}
              className="w-full h-full object-contain bg-black"
              controls={isPlaying}
              preload="metadata"
            >
              <source src={videoSrc} type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>

            {/* OVERLAY PLAY BUTTON */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <button
                  onClick={handlePlay}
                  className="w-20 h-20 flex items-center justify-center bg-blue-500 hover:bg-blue-600 rounded-full shadow-2xl shadow-blue-500/50 hover:scale-110 transition-all duration-300"
                >
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}