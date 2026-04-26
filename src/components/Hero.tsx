import { ArrowRight, CheckCircle2 } from 'lucide-react';
import vslVideo from '../assets/vsl-vexolead.mp4';

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
          <CheckCircle2 className="w-4 h-4" />
          <span>+500 leads générés ce mois-ci</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          <span className="text-white">Générez des clients qualifiés</span>
          <br />
          <span className="bg-clip-text bg-gradient-to-r text-red-400">
            chaque semaine — automatiquement
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Nous créons pour vous un système d'acquisition complet{' '}
          <span className="text-red-400 font-semibold">
            (publicité + tunnel + automatisation)
          </span>
        </p>

        {/* 🎥 VSL VIDEO */}
        <div className="mb-12">
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <video
              src={vslVideo}
              controls
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            {/* Overlay léger pour effet premium */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={onCtaClick}
            className="group px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105 flex items-center gap-2"
          >
            Recevoir mes premiers leads
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onCtaClick}
            className="px-8 py-4 bg-transparent border-2 border-blue-500/50 hover:border-blue-500 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-blue-500/10"
          >
            Réserver un appel
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { label: 'Leads générés', value: '+15K' },
            { label: 'Clients actifs', value: '250+' },
            { label: 'ROI moyen', value: 'x4.2' },
            { label: 'Taux de satisfaction', value: '98%' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4"
            >
              <div className="text-3xl font-bold text-blue-400 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}