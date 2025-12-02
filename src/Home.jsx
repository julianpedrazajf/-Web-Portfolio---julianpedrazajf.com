import React, { useContext } from "react";
import Navbar from "./Navbar";
import LanguageContext from './LanguageContext';

const content = {
  en: {
    title: "Julian's Portfolio",
    introduction: "Hi, I'm Julian.\nFrontend Developer and IT student focused on building clean, fast, and user-centered web experiences.\nI enjoy turning ideas into functional interfaces using modern tools and best practices.\n\nExplore my work below.",
    aiSectionTitle: "AI Section",
    aiSectionQuestion: "Have a quick question about Julian or any area of knowledge he has experience in?",
    githubLink: ""
  },
  es: {
    title: "Portafolio de Julian",
    introduction: "Hola, soy Julian.\nDesarrollador Frontend y estudiante de IT enfocado en construir experiencias web limpias, rápidas y centradas en el usuario.\nDisfruto transformar ideas en interfaces funcionales utilizando herramientas modernas y buenas prácticas.\n\nExplora mi trabajo a continuación.",
    aiSectionTitle: "Sección de IA",
    aiSectionQuestion: "¿Tienes alguna pregunta sobre Julian o algún área de conocimiento en la que tenga experiencia?",
    githubLink: ""
  }
};

export default function Home() {
  const { language, setLanguage } = useContext(LanguageContext);
  const t = content[language]; // t for translate

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  return (
    <main style={{ minHeight: "100vh", width: "100vw", background: "transparent" }}>
      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className="lang-toggle"
        style={{
          padding: "0.3rem",
          background: "rgba(255,255,255,0.8)",
          border: "1px solid rgba(0,0,0,0.1)",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        {language === 'en' ? '🇪🇸 ES' : '🇺🇸 EN'}
      </button>

      {/* Navigation Bar */}
      <Navbar language={language} />

      {/* Hero Section */}
      <section style={{ padding: "1rem 1rem", textAlign: "center" }}>
        <h1 style={{ margin: 0 }}>
          <img
            src="/img/image1.png"
            alt={t.title}
            className="site-logo"
            style={{ verticalAlign: 'middle' }}
          />
        </h1>
        <a href="https://github.com/julianpedrazajf" target="_blank" rel="noopener noreferrer" style={{ textDecorationLine: 'underline', textDecorationColor: '#fff', color: "#fff", fontWeight: 600, display: 'block', marginBottom: '3rem' }}>
          {t.githubLink} <br />
          https://github.com/julianpedrazajf
        </a>

        {/* Introducción (versión 3 - narrativa personal) */}
        <div style={{ fontSize: "1.25rem", margin: "1rem auto", maxWidth: 600, textAlign: "center", display: "block", lineHeight: 1.6, whiteSpace: "pre-line" }}>
          <p style={{ marginBottom: 12 }}>
          {t.introduction}
          </p>
        </div>
      </section>



      {/* AI Section */}
      <section style={{ padding: "2rem 1rem", maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 700 }}>🧠 {t.aiSectionTitle}</h2>
        <blockquote style={{ fontStyle: "italic", margin: "1rem auto", color: "#555" }}>
          "{t.aiSectionQuestion}"
        </blockquote>
        {/* You can add a chatbot or FAQ search here */}
      </section>
    </main>
  );
}
