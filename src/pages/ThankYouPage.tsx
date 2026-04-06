import { CheckCircle, MessageCircle, PhoneCall } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-white text-gray-800 px-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-2xl border border-gray-100">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-4 rounded-full">
            <CheckCircle className="w-20 h-20 text-green-500" />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Merci, votre demande a bien été envoyée
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Nous avons bien reçu vos informations.
          <br />
          L’équipe <span className="font-semibold text-gray-900">VexoLead</span>{" "}
          vous contactera très prochainement pour échanger sur vos besoins et
          voir comment nous pouvons vous aider à obtenir plus de prospects
          qualifiés.
        </p>

        <div className="bg-slate-50 rounded-xl p-6 text-left mb-8 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Prochaines étapes :
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <PhoneCall className="w-5 h-5 text-blue-600 mt-1" />
              <p className="text-gray-700">
                Nous analysons votre demande et votre activité.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-blue-600 mt-1" />
              <p className="text-gray-700">
                Un membre de notre équipe vous recontacte rapidement pour
                discuter de votre objectif.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
              <p className="text-gray-700">
                Nous vous expliquons la meilleure stratégie pour générer plus de
                clients pour votre activité.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-blue-700 text-white font-medium rounded-lg shadow-md hover:bg-blue-800 transition"
          >
            Retour à l’accueil
          </a>

          <a
            href="https://wa.me/33622155379?text=Bonjour%2C%20je%20viens%20de%20soumettre%20ma%20demande%20sur%20VexoLead."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600 transition"
          >
            Nous contacter sur WhatsApp
          </a>
        </div>
      </div>

      <footer className="mt-10 text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} VexoLead — Tous droits réservés.
      </footer>
    </div>
  );
}