import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-4">
              VexoLead
            </h3>
            <p className="text-gray-400 leading-relaxed">
              L'agence spécialisée dans la génération de leads qualifiés pour les coachs,
              consultants et entreprises en ligne.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>contact@vexolead.fr</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span>+33 7 46 57 42 60</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Légal</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Mentions légales
              </a>
              <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Conditions générales
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} VexoLead. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
