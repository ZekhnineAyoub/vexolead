import { Search, Cog, Rocket } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Analyse de votre activité',
      description: 'Nous étudions votre marché, votre audience et vos concurrents pour créer la stratégie parfaite',
    },
    {
      icon: Cog,
      number: '02',
      title: 'Création du système',
      description: 'Nous mettons en place vos publicités, votre tunnel de vente et l\'automatisation complète',
    },
    {
      icon: Rocket,
      number: '03',
      title: 'Génération de leads qualifiés',
      description: 'Vous recevez des clients potentiels prêts à acheter directement dans votre agenda',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comment <span className="text-blue-400">ça fonctionne</span> ?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Un processus simple en 3 étapes pour transformer votre business
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent transform -translate-y-1/2 hidden md:block"></div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl"></div>
                      <div className="relative w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50">
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-12 h-12 bg-gray-900 border-2 border-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-blue-400 font-bold">{step.number}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
