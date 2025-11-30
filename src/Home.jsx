import React, { useContext } from "react";
import Navbar from "./Navbar";
import LanguageContext from './LanguageContext';

const content = {
  en: {
    title: "Julian's Portfolio",
    introduction: "I'm Julian, constantly learning and applying what I know to create, improve, and add value.",
    aiSectionTitle: "AI Section",
    aiSectionQuestion: "Have a quick question about Julian or any area of knowledge he has experience in?",
    githubLink: ""
  },
  es: {
    title: "Portafolio de Julian",
    introduction: "Soy Julian, aprendo constantemente y aplico lo que sé para crear, mejorar y aportar valor.",
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
        style={{
          position: "fixed",
          top: "1rem",
          right: "1rem",
          padding: "0.5rem 1rem",
          background: "rgba(255,255,255,0.8)",
          border: "1px solid rgba(0,0,0,0.1)",
          borderRadius: "4px",
          cursor: "pointer",
          zIndex: 1001
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
            style={{
              maxWidth: '20%',
              height: 'auto',
              display: 'inline-block',
              verticalAlign: 'middle'
            }}
          />
        </h1>
        <a href="https://github.com/julianpedrazajf" target="_blank" rel="noopener noreferrer" style={{ textDecorationLine: 'underline', textDecorationColor: '#fff', color: "#fff", fontWeight: 600, display: 'block', marginBottom: '3rem' }}>
          {t.githubLink} <br />
          https://github.com/julianpedrazajf
        </a>

        {/* Introducción (versión 3 - narrativa personal) */}
        <div style={{ fontSize: "1.25rem", margin: "1rem auto", maxWidth: 600, textAlign: "center", display: "block", lineHeight: 1.6}}>
          <p style={{ marginBottom: 12 }}>
          "{t.introduction}"
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
