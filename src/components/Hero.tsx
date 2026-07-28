import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useRef } from 'react';
import {
  InlineWidget,
  useCalendlyEventListener,
} from 'react-calendly';
import { useNavigate } from 'react-router-dom';
import vslVideo from '../assets/vsl-vexolead.mp4';

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const calendlyRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Redirection uniquement après confirmation du rendez-vous
  useCalendlyEventListener({
    onEventScheduled: () => {
      navigate('/thank-you');
    },
  });

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;

      videoRef.current.play().catch((error) => {
        console.error('Impossible de lire la vidéo :', error);
      });
    }
  };

  const scrollToCalendly = () => {
    calendlyRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section className="relative overflow-hidden px-4 py-20">
      {/* Arrière-plan */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />

      <div className="absolute inset-0">
        <div className="absolute left-10 top-20 h-72 w-72 animate-pulse rounded-full bg-blue-500/20 blur-3xl" />

        <div className="absolute bottom-20 right-10 h-96 w-96 animate-pulse rounded-full bg-blue-600/10 blur-3xl delay-1000" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
          <CheckCircle2 className="h-4 w-4" />

          <span>+500 leads générés ce mois-ci</span>
        </div>

        {/* Titre */}
        <h1 className="mb-6 text-3xl font-bold leading-tight md:text-5xl">
          <span className="text-white">
            Générez des clients qualifiés
          </span>

          <br />

          <span className="bg-gradient-to-r bg-clip-text text-red-400">
            chaque semaine — automatiquement
          </span>
        </h1>

        {/* Sous-titre */}
        <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-400 md:text-2xl">
          Nous créons pour vous un système d&apos;acquisition complet{' '}

          <span className="font-semibold text-red-400">
            (publicité + tunnel + automatisation)
          </span>
        </p>

        {/* Message son */}
        <p className="mb-4 animate-pulse font-semibold text-red-400">
          🔊 Activez le son pour comprendre comment générer des clients
          automatiquement
        </p>

        {/* Vidéo */}
        <div className="mb-6">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <video
              ref={videoRef}
              src={vslVideo}
              controls
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-black/20" />
          </div>
        </div>

        {/* Bouton son */}
        <button
          type="button"
          onClick={handleUnmute}
          className="mb-12 rounded-lg bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
        >
          🔊 Activer le son
        </button>

        {/* Boutons CTA */}
        <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={onCtaClick}
            className="group flex items-center gap-2 rounded-lg bg-blue-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/50 transition-all duration-300 hover:scale-105 hover:bg-blue-600 hover:shadow-blue-500/70"
          >
            Recevoir mes premiers leads

            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            type="button"
            onClick={scrollToCalendly}
            className="rounded-lg border-2 border-blue-500/50 bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/10"
          >
            Réserver un appel
          </button>
        </div>

        {/* Statistiques */}
        <div className="mx-auto mb-24 grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { label: 'Leads générés', value: '+15K' },
            { label: 'Clients actifs', value: '250+' },
            { label: 'ROI moyen', value: 'x4.2' },
            { label: 'Taux de satisfaction', value: '98%' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
            >
              <div className="mb-1 text-3xl font-bold text-blue-400">
                {stat.value}
              </div>

              <div className="text-sm text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Calendly */}
      </div>
    </section>
  );
}