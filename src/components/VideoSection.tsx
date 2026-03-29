import { Play } from 'lucide-react';
import { useState } from 'react';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Comment nous générons vos clients en{' '}
          <span className="text-blue-400">30 jours</span>
        </h2>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700 aspect-video">
            {!isPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-20 h-20 flex items-center justify-center bg-blue-500 hover:bg-blue-600 rounded-full shadow-2xl shadow-blue-500/50 hover:scale-110 transition-all duration-300"
                >
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </button>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-400 text-lg">Vidéo de présentation</p>
              </div>
            )}
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
