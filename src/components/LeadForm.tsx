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
        formData.budgetReady === 'oui' &&
        formData.startReady === 'oui';

      setFormData({
        name: '',
        email: '',
        phone: '',
        business: '',
        message: '',
        budgetReady: '',
        startReady: '',
      });

      if (isQualified) {
        navigate('/thank-you');
      } else {
        navigate('/sorry');
      }

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

  return (
    <section id="lead-form" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vérifiez votre <span className="text-red-400">éligibilité</span>
          </h2>

          <p className="text-xl text-gray-400">
            Répondez au formulaire pour savoir si nous pouvons vous accompagner.
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>

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
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white"
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
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white"
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
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white"
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
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white"
                  placeholder="Ex: BTP, immobilier, coaching..."
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Êtes-vous prêt à investir 150 000 FCFA pour mettre en place un système qui vous aide à générer des prospects qualifiés ? <span className="text-red-400">*</span>
                </label>
                <select
                  name="budgetReady"
                  required
                  value={formData.budgetReady}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white"
                >
                  <option value="">Sélectionnez une réponse</option>
                  <option value="oui">Oui, je suis prêt à investir</option>
                  <option value="non">Non, pas pour le moment</option>
                  <option value="reflexion">Je dois encore réfléchir</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Si votre profil est accepté, êtes-vous prêt à commencer immédiatement cette semaine ? <span className="text-red-400">*</span>
                </label>
                <select
                  name="startReady"
                  required
                  value={formData.startReady}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white"
                >
                  <option value="">Sélectionnez une réponse</option>
                  <option value="oui">Oui, je peux commencer immédiatement</option>
                  <option value="non">Non, pas maintenant</option>
                  <option value="reflexion">Je suis encore en réflexion</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white resize-none"
                  placeholder="Parlez-nous de vos objectifs..."
                />
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
                Nous travaillons uniquement avec des personnes prêtes à passer à l’action.
              </p>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}