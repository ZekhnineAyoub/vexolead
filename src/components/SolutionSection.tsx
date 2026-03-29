import { Zap, Target, Workflow } from 'lucide-react';

export default function SolutionSection() {
  const pillars = [
    {
      icon: Target,
      title: 'Publicité ciblée',
      description: 'Campagnes Facebook & Instagram optimisées pour attirer uniquement vos clients idéaux',
    },
    {
      icon: Zap,
      title: 'Tunnel de conversion',
      description: 'Pages de vente et formulaires conçus pour transformer vos visiteurs en leads qualifiés',
    },
    {
      icon: Workflow,
      title: 'Automatisation',
      description: 'Système de suivi automatique par email et SMS pour convertir vos leads en clients payants',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
            LA SOLUTION
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nous construisons votre{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              machine à leads
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Un système complet qui génère des clients qualifiés pendant que vous vous concentrez sur votre expertise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 h-full">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{pillar.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-2xl p-8 text-center">
          <p className="text-2xl text-white font-semibold mb-2">
            Résultat : Un flux constant de clients qualifiés
          </p>
          <p className="text-gray-400 text-lg">
            Sans avoir à prospecter, sans perdre de temps, sans stress
          </p>
        </div>
      </div>
    </section>
  );
}
