import { Star, TrendingUp, Users, DollarSign } from 'lucide-react';

export default function ResultsSection() {
  const testimonials = [
    {
      name: 'Sophie Moreau',
      role: 'Coach en développement personnel',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'En 30 jours, j\'ai généré 45 nouveaux leads qualifiés. Mon agenda est maintenant rempli pour les 2 prochains mois !',
      metric: '+45 leads/mois',
    },
    {
      name: 'Marc Dubois',
      role: 'Consultant en marketing digital',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'Mon chiffre d\'affaires a triplé en 3 mois. VexoLead a transformé ma façon de travailler et mon business.',
      metric: 'x3 ROI',
    },
    {
      name: 'Émilie Laurent',
      role: 'Coach sportif en ligne',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'J\'ai signé 12 nouveaux clients en un mois grâce à leur système. Je ne m\'occupe plus de la prospection !',
      metric: '+12 clients',
    },
  ];

  const metrics = [
    { icon: TrendingUp, value: '+120', label: 'Leads générés par mois en moyenne' },
    { icon: DollarSign, value: 'x3', label: 'Retour sur investissement moyen' },
    { icon: Users, value: '+10', label: 'Nouveaux clients en 30 jours' },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-green-400" />
            <span>Résultats prouvés</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ils ont transformé leur <span className="text-blue-400">business</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Rejoignez des centaines de coachs et consultants qui génèrent des clients qualifiés chaque semaine
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 text-center"
              >
                <Icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-gray-400">{metric.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-blue-500/50 rounded-xl p-6 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-500/50"
                />
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">"{testimonial.text}"</p>
              <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold">
                {testimonial.metric}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
