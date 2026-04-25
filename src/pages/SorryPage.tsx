// src/pages/SorryPage.jsx

function SorryPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-[#0f172a] border border-red-500/30 rounded-2xl p-8 text-center shadow-2xl">

        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          ⚠️ Candidature non retenue
        </h1>

        <p className="text-gray-300 text-lg mb-6">
          Merci pour votre intérêt. Après analyse de vos réponses, nous ne pouvons pas vous proposer un accompagnement pour le moment.
        </p>

        {/* Bloc rouge impact */}
        <div className="bg-red-500/10 border border-red-500 rounded-xl p-5 mb-8">
          <p className="text-red-400 font-semibold text-lg">
            🚫 Nous travaillons uniquement avec des personnes prêtes à passer à l’action immédiatement
          </p>

          <p className="text-gray-300 mt-3">
            Notre système est conçu pour des professionnels déterminés à investir dans leur croissance et à obtenir des résultats concrets rapidement.
          </p>
        </div>

        {/* Bloc repositionnement */}
        <div className="bg-black/40 border border-gray-700 rounded-xl p-5 mb-8">
          <p className="text-gray-300">
            👉 Si vous êtes encore en phase de réflexion ou que vous n’êtes pas prêt à vous engager maintenant,
            nous vous recommandons de revenir vers nous lorsque votre projet sera plus avancé.
          </p>
        </div>

        {/* Call to action */}
        <a
          href="/"
          className="inline-block bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-xl font-semibold"
        >
          🔙 Retour à l’accueil
        </a>

        {/* Petit effet rareté */}
        <p className="text-gray-500 text-sm mt-6">
          🔒 Nous ouvrons seulement quelques places chaque mois pour garantir des résultats à nos clients.
        </p>

      </div>
    </div>
  );
}

export default SorryPage;