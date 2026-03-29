import { TrendingDown, Target, DollarSign } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: TrendingDown,
      title: 'Pas assez de clients',
      description: 'Vous perdez du temps à chercher des clients au lieu de vous concentrer sur votre expertise',
    },
    {
      icon: Target,
      title: 'Publicités inefficaces',
      description: 'Vous dépensez de l\'argent en pub sans voir de résultats concrets ni de retour sur investissement',
    },
    {
      icon: DollarSign,
      title: 'Revenus instables',
      description: 'Impossible de prévoir vos revenus du mois prochain, vous vivez dans l\'incertitude financière',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vous rencontrez ces <span className="text-red-400">problèmes</span> ?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            La plupart des coachs et consultants sont bloqués par les mêmes obstacles
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-red-500/50 rounded-xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
                  <Icon className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{problem.title}</h3>
                <p className="text-gray-400 leading-relaxed">{problem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
