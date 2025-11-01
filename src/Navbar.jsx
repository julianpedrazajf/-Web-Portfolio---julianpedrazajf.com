import React from 'react';

const navContent = {
  en: {
    work: "Work Experience",
    portfolio: "Portfolio",
    diplomas: "Diplomas",
    education: "Education",
    donations: "Donations",
    contact: "Contact"
  },
  es: {
    work: "Experiencia Laboral",
    portfolio: "Portafolio",
    diplomas: "Diplomas",
    education: "Educación",
    donations: "Donaciones",
    contact: "Contacto"
  }
};

export default function Navbar({ language = 'en' }) {
  const t = navContent[language];

  return (
    <nav style={{
      padding: "1rem",
      marginTop: "1rem",
      marginBottom: "2rem",
      background: "rgba(255,255,255,0.8)",
      backdropFilter: "blur(10px)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      borderBottom: "1px solid rgba(0,0,0,0.1)"
    }}>
      <ul style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "5rem",
        listStyle: "none",
        margin: 0,
        padding: 0
      }}>
        <li>
          <a href="#work" style={{ 
            color: "#333", 
            textDecoration: "none", 
            fontWeight: 500,
            transition: "color 0.2s ease"
          }}>
            {t.work}
          </a>
        </li>
        <li>
          <a href="#portfolio" style={{ 
            color: "#333", 
            textDecoration: "none", 
            fontWeight: 500,
            transition: "color 0.2s ease"
          }}>
            {t.portfolio}
          </a>
        </li>
        <li>
          <a href="#diplomas" style={{ 
            color: "#333", 
            textDecoration: "none", 
            fontWeight: 500,
            transition: "color 0.2s ease"
          }}>
            {t.diplomas}
          </a>
        </li>
        <li>
          <a href="#education" style={{ 
            color: "#333", 
            textDecoration: "none", 
            fontWeight: 500,
            transition: "color 0.2s ease"
          }}>
            {t.education}
          </a>
        </li>
        <li>
          <a href="#donations" style={{ 
            color: "#333", 
            textDecoration: "none", 
            fontWeight: 500,
            transition: "color 0.2s ease"
          }}>
            {t.donations}
          </a>
        </li>
        <li>
          <a href="#contact" style={{ 
            color: "#333", 
            textDecoration: "none", 
            fontWeight: 500,
            transition: "color 0.2s ease"
          }}>
            {t.contact}
          </a>
        </li>
      </ul>
    </nav>
  );
}