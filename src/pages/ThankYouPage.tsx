import { CheckCircle } from "lucide-react";
export default function ThankYouPage() {
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* MAIN CONTENT */}
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-lg">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-20 h-20 text-green-500" />
        </div>
        <h2 className="text-3xl font-semibold mb-4 text-blue-700">
          Merci pour votre inscription !
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Nous avons bien reçu vos informations. <br />
          Notre équipe vous contactera très prochainement pour finaliser les
          prochaines étapes.
        </p>
        <div className="mt-8">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-blue-700 text-white font-medium rounded-lg shadow-md hover:bg-blue-800 transition"
          >
            Retour à l’accueil
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="mt-12 text-gray-500 text-sm">
        © {new Date().getFullYear()} VexoLead — Tous droits réservés.
      </footer>
    </div>
  );
}
