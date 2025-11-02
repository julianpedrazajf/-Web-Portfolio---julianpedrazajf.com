import React from 'react';
import './Navbar.css';

const navContent = {
  en: {
    work: "Work Experience",
    workSubmenu: {
      fulltime: "Full-Time",
      parttime: "Part-Time",
      references: "References"
    },
    portfolio: "Portfolio",
    diplomas: "Diplomas",
    education: "Education",
    donations: "Donations",
    contact: "Contact"
  },
  es: {
    work: "Experiencia Laboral",
    workSubmenu: {
      fulltime: "Tiempo Completo",
      parttime: "Tiempo Parcial",
      references: "Referencias"
    },
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
        <li style={{ position: 'relative' }} className="nav-item-with-submenu">
          <a href="#work" style={{ 
            color: "#333", 
            textDecoration: "none", 
            fontWeight: 500,
            transition: "color 0.2s ease",
            display: "inline-block",
            padding: "0.5rem 0"
          }}>
            {t.work}
          </a>
          <ul className="submenu" style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(10px)",
            padding: "0.5rem 0",
            borderRadius: "4px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            listStyle: "none",
            minWidth: "150px",
            opacity: 0,
            visibility: "hidden",
            transition: "all 0.2s ease",
            zIndex: 1001
          }}>
            <li>
              <a href="#fulltime" style={{ 
                color: "#333",
                textDecoration: "none",
                padding: "0.5rem 1rem",
                display: "block",
                fontSize: "0.95rem",
                transition: "background 0.2s ease",
                ":hover": {
                  background: "rgba(0,0,0,0.05)"
                }
              }}>
                {t.workSubmenu.fulltime}
              </a>
            </li>
            <li>
              <a href="#parttime" style={{ 
                color: "#333",
                textDecoration: "none",
                padding: "0.5rem 1rem",
                display: "block",
                fontSize: "0.95rem",
                transition: "background 0.2s ease",
                ":hover": {
                  background: "rgba(0,0,0,0.05)"
                }
              }}>
                {t.workSubmenu.parttime}
              </a>
            </li>
            <li>
              <a href="#references" style={{ 
                color: "#333",
                textDecoration: "none",
                padding: "0.5rem 1rem",
                display: "block",
                fontSize: "0.95rem",
                transition: "background 0.2s ease",
                ":hover": {
                  background: "rgba(0,0,0,0.05)"
                }
              }}>
                {t.workSubmenu.references}
              </a>
            </li>
          </ul>
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