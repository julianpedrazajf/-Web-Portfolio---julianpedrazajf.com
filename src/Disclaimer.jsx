import React, { useState } from "react";
import ShaderBackground from "./ShaderBackground";

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

  const containerStyle = {
    display: "grid",
    placeItems: "center",
    minHeight: "100vh",
    width: "100vw",
    // backgroundColor: "#212121", // Remove to show shader
    padding: "1rem",
    margin: 0,
    position: "relative",
    zIndex: 1,
  };

  const cardStyle = {
    backgroundColor: "#323232",
    padding: "2rem",
    borderRadius: "1rem",
    border: "2px solid #A0153E",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    maxWidth: "32rem",
    width: "100%",
  };

  const titleStyle = {
    color: "#FF004D",
    fontSize: "1.875rem",
    fontWeight: "800",
    marginBottom: "1.5rem",
    textAlign: "center",
    letterSpacing: "0.05em",
  };

  const textStyle = {
    color: "#FF004D",
    fontSize: "1rem",
    lineHeight: "1.75",
    backgroundColor: "rgba(33, 33, 33, 0.7)",
    borderRadius: "0.5rem",
    padding: "1rem",
    marginBottom: "1.25rem",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
    marginTop: "2rem",
  };

  const toggleButtonStyle = {
    color: "#A0153E",
    textDecoration: "underline",
    fontWeight: "600",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
  };

  const continueButtonStyle = {
    backgroundColor: "#A0153E",
    color: "#212121",
    padding: "0.5rem 1.5rem",
    borderRadius: "0.5rem",
    fontWeight: "700",
    border: "2px solid #FF004D",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "all 0.2s",
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", width: "100vw", overflow: "hidden" }}>
      <ShaderBackground />
      <div style={containerStyle}>
        <div style={cardStyle}>
          <h1 style={titleStyle}>{d.title}</h1>
          <div>
            {d.legal.map((line, i) => (
              <p key={i} style={textStyle}>
                {line}
              </p>
            ))}
          </div>
          <div style={buttonContainerStyle}>
            <button
              style={toggleButtonStyle}
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              aria-label="Toggle language"
            >
              {d.toggle}
            </button>
            <button
              style={continueButtonStyle}
              onClick={onContinue}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#FF004D";
                e.target.style.color = "#323232";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#A0153E";
                e.target.style.color = "#212121";
              }}
            >
              {d.continue}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}