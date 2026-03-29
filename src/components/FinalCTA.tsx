import { ArrowRight, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onCtaClick: () => void;
}

export default function FinalCTA({ onCtaClick }: FinalCTAProps) {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900/50 to-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-blue-500/20 to-blue-600/20 blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-3xl p-12 md:p-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Transformez votre business maintenant</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Commencez à générer des clients{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                dès aujourd'hui
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Rejoignez les coachs et consultants qui ont déjà transformé leur prospection en
              machine automatique de génération de leads
            </p>

            <button
              onClick={onCtaClick}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-bold text-xl transition-all duration-300 shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105"
            >
              Obtenir mes premiers leads
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-gray-400 text-sm mt-6">
              Garantie résultats 30 jours • Sans engagement • Support 7j/7
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
