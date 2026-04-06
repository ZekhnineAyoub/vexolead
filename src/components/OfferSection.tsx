import { Check, Clock, Shield } from 'lucide-react';

interface OfferSectionProps {
  onCtaClick: () => void;
}

export default function OfferSection({ onCtaClick }: OfferSectionProps) {
  const features = [
    'Audit complet de votre marché et concurrence',
    'Création de vos campagnes publicitaires (Facebook & Instagram)',
    'Tunnel de vente optimisé pour la conversion',
    'Automatisation complète (emails, SMS, suivi)',
    'Dashboard de suivi en temps réel',
    'Optimisation continue des performances',
    'Support prioritaire 7j/7',
    'Formation à l\'utilisation du système',
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-sm font-medium mb-6">
            <Clock className="w-4 h-4" />
            <span>Places limitées ce mois-ci</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Système <span className="text-red-400">clé en main</span> de génération de leads
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour générer des clients qualifiés automatiquement
          </p>
        </div>

        <div className="relative group mb-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Garantie Résultats 30 jours</h3>
                  <p className="text-gray-300">
                    Si vous ne générez pas de leads qualifiés dans les 30 premiers jours, nous continuons gratuitement jusqu'à obtenir des résultats
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onCtaClick}
              className="w-full py-5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-bold text-xl transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105"
            >
              Recevoir mes premiers leads
            </button>

            <p className="text-center text-gray-400 text-sm mt-4">
              Plus que <span className="text-blue-400 font-semibold">3 places disponibles</span> ce mois-ci
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
