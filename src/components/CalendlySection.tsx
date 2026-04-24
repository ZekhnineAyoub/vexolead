import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CalendlySection() {
  const navigate = useNavigate();

  useEffect(() => {
    function handleMessage(e:any) {
      if (e.origin !== "https://calendly.com") return;

      if (e.data?.event === "calendly.event_scheduled") {
        navigate("/thank-you");
      }
    }

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [navigate]);

  return (
    <section id="calendly" className="bg-black text-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Réservez un appel stratégique
        </h2>

        <p className="text-gray-300 mb-8">
          Choisissez directement un créneau disponible pour discuter de votre projet.
        </p>

        <div className="rounded-2xl overflow-hidden bg-white">
          <iframe
            src="https://calendly.com/vexolead/new-meeting?embed_domain=www.vexolead.com&embed_type=Inline"
            width="100%"
            height="700"
            frameBorder="0"
            title="Calendly"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default CalendlySection;