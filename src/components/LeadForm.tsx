import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send } from 'lucide-react';

export default function LeadForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: '',
    budgetReady: '',
    startReady: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://vexolead-server.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phoneNumber: formData.phone,
          profession: formData.business,
          message: formData.message,
          budgetReady: formData.budgetReady,
          startReady: formData.startReady,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erreur lors de l'envoi");
      }

      const isQualified =
        ['oui_clair', 'oui_demarrer'].includes(formData.budgetReady) &&
        ['cette_semaine', 'deux_semaines'].includes(formData.startReady);

      setFormData({
        name: '',
        email: '',
        phone: '',
        business: '',
        message: '',
        budgetReady: '',
        startReady: '',
      });

      navigate(isQualified ? '/meeting' : '/sorry');
    } catch (error) {
      console.error('Erreur formulaire:', error);
      alert("Une erreur s'est produite lors de l'envoi du formulaire.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const inputClass =
    'w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all';

  return (
    <section id="lead-form" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vérifiez votre <span className="text-red-400">éligibilité</span>
          </h2>

          <p className="text-xl text-gray-400">
            Répondez à ces questions pour savoir si nous pouvons vous accompagner.
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>

          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block text-white font-medium mb-2">
                  Nom complet <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Jean Dupont"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="jean@exemple.fr"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Téléphone WhatsApp <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="+225 07..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Votre activité / Business <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="business"
                  required
                  value={formData.business}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Ex: BTP, immobilier, coaching..."
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Si nous vous montrons un plan clair pour générer plus de prospects qualifiés,
                  êtes-vous prêt à investir à partir de 150 000 FCFA ?
                  <span className="text-red-400"> *</span>
                </label>

                <select
                  name="budgetReady"
                  required
                  value={formData.budgetReady}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Sélectionnez une réponse</option>
                  <option value="oui_demarrer">Oui, je suis prêt à démarrer</option>
                  <option value="oui_clair">Oui, si la solution est claire</option>
                  <option value="reflexion">Je dois encore réfléchir</option>
                  <option value="non">Non, pas pour le moment</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Si votre profil est accepté, quand pouvez-vous démarrer ?
                  <span className="text-red-400"> *</span>
                </label>

                <select
                  name="startReady"
                  required
                  value={formData.startReady}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Sélectionnez une réponse</option>
                  <option value="cette_semaine">Cette semaine</option>
                  <option value="deux_semaines">Dans les 2 prochaines semaines</option>
                  <option value="reflexion">Je suis encore en réflexion</option>
                  <option value="non">Pas maintenant</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Quel est votre objectif principal ?
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                  placeholder="Ex: recevoir plus de demandes, remplir mon agenda..."
                />
              </div>

              {/* 🔥 Message persuasion VSL */}
              <div className="bg-red-500/10 border border-red-500/40 rounded-lg p-4 text-center">
                <p className="text-red-300 font-semibold">
                  ⚠️ Important : regardez la vidéo complète avant de soumettre
                </p>
                <p className="text-gray-300 text-sm mt-1">
                  Les profils acceptés sont uniquement ceux qui ont regardé la vidéo complète.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Analyse en cours...
                  </>
                ) : (
                  <>
                    Vérifier mon éligibilité
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-center text-gray-400 text-sm">
                Nous ouvrons uniquement quelques places pour les professionnels sérieux.
              </p>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}