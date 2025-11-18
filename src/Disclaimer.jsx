import React, { useContext } from "react";
import ShaderBackground from "./ShaderBackground";
import LanguageContext from './LanguageContext';

const disclaimers = {
  en: {
    title: "Disclaimer",
    legal: [
      "The information on this website is for informational purposes only. It does not represent a guarantee, offer, or define the specific role, conditions, or commitments of either party. This site does not specify the exact role Julian may be applying for but serves as a reference to better match his profile with the right service or opportunity, for the mutual benefit of both parties. By continuing, you acknowledge that you have read and understood this notice.",
    ],
    continue: "Continue",
    toggle: "Español",
  },
  es: {
    title: "Aviso Legal",
    legal: [
      "La información en este sitio web es solo para fines informativos. No representa una garantía, oferta, ni define el rol, condiciones o compromisos de ninguna de las partes. Este sitio no especifica el rol exacto al que Julian pueda estar aplicando, sino que sirve como referencia para emparejar mejor su perfil con el servicio u oportunidad adecuada, en beneficio mutuo. Al continuar, reconoces que has leído y entendido este aviso.",
    ],
    continue: "Continuar",
    toggle: "English",
  },
};

export default function Disclaimer({ onContinue }) {
  const { language, setLanguage } = useContext(LanguageContext);
  const d = disclaimers[language];

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
    // Glassmorphism styles
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px) brightness(1.1)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    // Existing styles
    padding: "2rem",
    borderRadius: "1rem",
    maxWidth: "52rem",
    width: "100%",
    textAlign: "center",
    boxShadow:  "-10px -10px 58px #0e0f0eff, 10px 10px 58px #0e0f0eff",
  };

  const titleStyle = {
    color: "#FFF",
    fontSize: "3rem", // 32px for emphasis
    fontWeight: "100",
    marginBottom: "1.5rem",
    textAlign: "center",
    letterSpacing: "0.05em",
    fontFamily: "Georgia, serif",
  };

  const textStyle = {
    color: "#FFF",
  
    fontSize: "1.20rem", // 20px for readability
    fontWeight: "normal",
    lineHeight: "1.85",
    backgroundColor: "rgba(33, 33, 33, 0.7)",
    borderRadius: "0.5rem",
    padding: "1rem",
    marginBottom: "1.25rem",
    fontFamily: "Georgia, serif",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
    marginTop: "2rem",
  };

  const toggleButtonStyle = {
    color: "#fff",
    textDecoration: "underline",
    // fontWeight: "600",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
  };

  const continueButtonStyle = {
    backgroundColor: "rgba(33, 33, 33, 0.7)",
    color: "#fff",
    padding: "0.5rem 1.5rem",
    borderRadius: "0.5rem",
    // fontWeight: "700",
    cursor: "pointer",
    fontSize: "1rem",
    // transition: "all 0.2s",
    outline: "none",
    boxShadow: "none",
    border: "none",
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
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              aria-label="Toggle language"
            >
              {d.toggle}
            </button>
            <button
              style={continueButtonStyle}
              onClick={onContinue}
            >
              {d.continue}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}