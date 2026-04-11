import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '33746574260';
    const message = encodeURIComponent(
      'Bonjour, je souhaite en savoir plus sur vos services de génération de leads.'
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      aria-label="Contact WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
      <span className="absolute right-full mr-3 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Contactez-nous sur WhatsApp
      </span>
    </button>
  );
}