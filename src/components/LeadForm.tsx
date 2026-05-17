import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send } from 'lucide-react';

export default function LeadForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessActivity: '',
    isOwner: '',
    employeesCount: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        'https://vexolead-server.onrender.com/api/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phoneNumber: formData.phone,
            businessActivity: formData.businessActivity,
            isOwner: formData.isOwner,
            employeesCount: formData.employeesCount,
          }),
        }
      );

      if (response.ok) {
        navigate('/thank-you');
      } else {
        alert('Une erreur est survenue.');
      }
    } catch (error) {
      console.error(error);
      alert('Erreur serveur.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-black px-4">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Vérifiez votre <span className="text-red-500">éligibilité</span>
          </h2>

          <p className="text-gray-300 text-xl">
            Répondez à ces questions pour savoir si nous pouvons vous accompagner.
          </p>
        </div>

        <div className="bg-[#111827] border border-white/10 rounded-[30px] p-8 md:p-12 shadow-[0_0_40px_rgba(255,0,0,0.15)]">

          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Nom */}
            <div>
              <label className="block text-white font-semibold mb-3 text-lg">
                Nom complet <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                placeholder="Jean Dupont"
                className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500"
                required
              />
            </div>

            {/* Email + Téléphone */}
            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block text-white font-semibold mb-3 text-lg">
                  Email <span className="text-red-500">*</span>
                </label>

                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  placeholder="jean@exemple.fr"
                  className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-3 text-lg">
                  Téléphone WhatsApp <span className="text-red-500">*</span>
                </label>

                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                  placeholder="+225 07..."
                  className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500"
                  required
                />
              </div>

            </div>

            {/* Activité */}
            <div>
              <label className="block text-white font-semibold mb-3 text-lg">
                Votre activité / Business <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                value={formData.businessActivity}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    businessActivity: e.target.value,
                  })
                }
                placeholder="Ex: BTP, immobilier, coaching..."
                className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500"
                required
              />
            </div>

            {/* Dirigeant */}
            <div>
              <label className="block text-white font-semibold mb-3 text-lg">
                Êtes-vous le dirigeant de l’entreprise ? <span className="text-red-500">*</span>
              </label>

              <select
                value={formData.isOwner}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    isOwner: e.target.value,
                  })
                }
                className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-red-500"
                required
              >
                <option value="">Sélectionnez une réponse</option>
                <option value="Oui">Oui</option>
                <option value="Non">Non</option>
              </select>
            </div>

            {/* Employés */}
            <div>
              <label className="block text-white font-semibold mb-3 text-lg">
                Combien d’employés avez-vous dans votre entreprise ? <span className="text-red-500">*</span>
              </label>

              <input
                type="number"
                value={formData.employeesCount}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    employeesCount: e.target.value,
                  })
                }
                placeholder="Ex: 5"
                className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500"
                required
              />
            </div>

            {/* Bouton */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                'Envoi en cours...'
              ) : (
                <>
                  Envoyer
                  <Send size={20} />
                </>
              )}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}