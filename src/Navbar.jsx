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
    diplomasSubmenu: {
      university: "University Degrees",
      bootcamps: "Online Bootcamps"
    },
    education: "Education",
    educationSubmenu: {
      books: "Books",
      finance: "Finance"
    },
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
    diplomasSubmenu: {
      university: "Títulos Universitarios",
      bootcamps: "Bootcamps en Línea"
    },
    education: "Educación",
    educationSubmenu: {
      books: "Libros",
      finance: "Finanzas"
    },
    donations: "Donaciones",
    contact: "Contacto"
  }
};

export default function Navbar({ language = 'en' }) {
  const t = navContent[language];

  return (
    <nav style={{
      background: "rgba(255, 255, 255, 0.18)",
      backdropFilter: "blur(10px) brightness(1.1)",
      border: "1px solid rgba(255, 255, 255, 0.18)",
      padding: "0.7rem",
      marginTop: "2rem",
      marginBottom: "1rem",
      borderRadius: "40px",
      maxWidth: "999px",
      marginInline: "auto"
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
            color: "#fff", 
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
            <li className="submenu-item">
        <a href="#/fulltime" style={{ 
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
            <li className="submenu-item">
              <a href="#/parttime" style={{ 
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
            <li className="submenu-item">
              <a href="#/references" style={{ 
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
          <a href="#/portfolio" style={{ 
            color: "#fff", 
            textDecoration: "none", 
            fontWeight: 500,
            transition: "color 0.2s ease",
            display: "inline-block",
            padding: "0.5rem 0"
          }}>
            {t.portfolio}
          </a>
        </li>
        <li style={{ position: 'relative' }} className="nav-item-with-submenu">
          <a href="#diplomas" style={{ 
            color: "#fff", 
            textDecoration: "none", 
            fontWeight: 500,
            transition: "color 0.2s ease",
            display: "inline-block",
            padding: "0.5rem 0"
          }}>
            {t.diplomas}
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
            minWidth: "180px",
            opacity: 0,
            visibility: "hidden",
            transition: "all 0.2s ease",
            zIndex: 1001
          }}>
            <li className="submenu-item">
              <a href="#/diplomas/university" style={{ 
                color: "#333",
                textDecoration: "none",
                padding: "0.5rem 1rem",
                display: "block",
                fontSize: "0.95rem",
                transition: "background 0.2s ease"
              }}>
                {t.diplomasSubmenu.university}
              </a>
            </li>
            <li className="submenu-item">
              <a href="#/diplomas/bootcamps" style={{ 
                color: "#333",
                textDecoration: "none",
                padding: "0.5rem 1rem",
                display: "block",
                fontSize: "0.95rem",
                transition: "background 0.2s ease"
              }}>
                {t.diplomasSubmenu.bootcamps}
              </a>
            </li>
          </ul>
        </li>
        <li style={{ position: 'relative' }} className="nav-item-with-submenu">
          <a href="#education" style={{ 
            color: "#fff", 
            textDecoration: "none", 
            fontWeight: 500,
            transition: "color 0.2s ease",
            display: "inline-block",
            padding: "0.5rem 0"
          }}>
            {t.education}
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
            minWidth: "180px",
            opacity: 0,
            visibility: "hidden",
            transition: "all 0.2s ease",
            zIndex: 1001
          }}>
            <li className="submenu-item">
              <a href="#/education/books" style={{ 
                color: "#333",
                textDecoration: "none",
                padding: "0.5rem 1rem",
                display: "block",
                fontSize: "0.95rem",
                transition: "background 0.2s ease"
              }}>
                {t.educationSubmenu.books}
              </a>
            </li>
            <li className="submenu-item">
                <a href="#/education/finance" style={{ 
                color: "#333",
                textDecoration: "none",
                padding: "0.5rem 1rem",
                display: "block",
                fontSize: "0.95rem",
                transition: "background 0.2s ease"
              }}>
                {t.educationSubmenu.finance}
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#/donations" style={{ 
            color: "#fff", 
            textDecoration: "none", 
            fontWeight: 500,
            transition: "color 0.2s ease",
            display: "inline-block",
            padding: "0.5rem 0"
          }}>
            {t.donations}
          </a>
        </li>
        <li>
          <a href="#/contact" style={{ 
            color: "#fff", 
            textDecoration: "none", 
            fontWeight: 500,
            transition: "color 0.2s ease",
            display: "inline-block",
            padding: "0.5rem 0"
          }}>
            {t.contact}
          </a>
        </li>
      </ul>
    </nav>
  );
}