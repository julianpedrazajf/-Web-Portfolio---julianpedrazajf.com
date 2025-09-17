import React, { useState } from "react";

const disclaimers = {
  en: {
    title: "🧾 Page 1: Disclaimer",
    legal: [
      "The information on this website is for informational purposes only.",
      "It does not represent a guarantee, offer, or define the specific role, conditions, or commitments of either party.",
      "This site does not specify the exact role Julian may be applying for but serves as a reference to better match his profile with the right service or opportunity, for the mutual benefit of both parties.",
      "By continuing, you acknowledge that you have read and understood this notice.",
    ],
    continue: "Continue",
    toggle: "Español",
  },
  es: {
    title: "🧾 Página 1: Aviso Legal",
    legal: [
      "La información en este sitio web es solo para fines informativos.",
      "No representa una garantía, oferta ni define el rol, condiciones o compromisos de ninguna de las partes.",
      "Este sitio no especifica el rol exacto al que Julian pueda estar aplicando, sino que sirve como referencia para emparejar mejor su perfil con el servicio u oportunidad adecuada, en beneficio mutuo.",
      "Al continuar, reconoces que has leído y entendido este aviso.",
    ],
    continue: "Continuar",
    toggle: "English",
  },
};

export default function Disclaimer({ onContinue }) {
  const [lang, setLang] = useState("en");
  const d = disclaimers[lang];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="max-w-xl w-full bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">{d.title}</h1>
        <div className="mb-6 space-y-3">
          {d.legal.map((line, i) => (
            <p key={i} className="text-gray-700">{line}</p>
          ))}
        </div>
        <div className="flex justify-between">
          <button
            className="text-blue-600 underline"
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            aria-label="Toggle language"
          >
            {d.toggle}
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={onContinue}
          >
            {d.continue}
          </button>
        </div>
      </div>
    </div>
  );
}