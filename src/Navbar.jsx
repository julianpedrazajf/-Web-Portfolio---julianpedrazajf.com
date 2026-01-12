import React, { useState } from 'react';
import './Navbar.css';
import Logo from './components/Logo';

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

export default function Navbar({ language = 'en', showLogo = true }) {
  const t = navContent[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <>
      {showLogo && <Logo />}

      {/* Hamburger Button (mobile only) */}
      <button 
        onClick={toggleMenu}
        style={{
          display: "none",
          position: "fixed",
          top: "1rem",
          left: "auto",
          right: "1rem",
          zIndex: 2000,
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "8px",
          padding: "0.6rem",
          cursor: "pointer",
          color: "#fff",
          fontSize: "1.5rem",
          lineHeight: 1
        }}
        className="hamburger-button"
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>

      <div
        style={{
          background: "linear-gradient(90deg, #C33726, #F4A223, #F2C24C, #8A1E14)",
          borderRadius: "40px",
          padding: "1px",
          marginTop: "2rem",
          marginBottom: "1rem",
          maxWidth: "999px",
          marginInline: "auto"
        }}
        className="desktop-nav"
      >
        <nav
          style={{
            background: "#2A2A2A",
            backdropFilter: "blur(10px) brightness(1.1)",
            borderRadius: "36px",
            padding: "0.6rem",
            width: "100%",
            boxSizing: "border-box"
          }}
        >
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
          <button
            onClick={() => toggleSubmenu('work')}
            aria-expanded={openSubmenu === 'work'}
            style={{
              background: 'none',
              border: 'none',
              color: "#fff", 
              textDecoration: "none", 
              fontWeight: 500,
              transition: "color 0.2s ease",
              display: "inline-block",
              padding: "0.5rem 0",
              cursor: 'pointer'
            }}
          >
            {t.work}
          </button>
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
            opacity: openSubmenu === 'work' ? 1 : 0,
            visibility: openSubmenu === 'work' ? 'visible' : 'hidden',
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
          <button
            onClick={() => toggleSubmenu('diplomas')}
            aria-expanded={openSubmenu === 'diplomas'}
            style={{
              background: 'none',
              border: 'none',
              color: "#fff", 
              textDecoration: "none", 
              fontWeight: 500,
              transition: "color 0.2s ease",
              display: "inline-block",
              padding: "0.5rem 0",
              cursor: 'pointer'
            }}
          >
            {t.diplomas}
          </button>
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
            opacity: openSubmenu === 'diplomas' ? 1 : 0,
            visibility: openSubmenu === 'diplomas' ? 'visible' : 'hidden',
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
          <button
            onClick={() => toggleSubmenu('education')}
            aria-expanded={openSubmenu === 'education'}
            style={{
              background: 'none',
              border: 'none',
              color: "#fff", 
              textDecoration: "none", 
              fontWeight: 500,
              transition: "color 0.2s ease",
              display: "inline-block",
              padding: "0.5rem 0",
              cursor: 'pointer'
            }}
          >
            {t.education}
          </button>
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
            opacity: openSubmenu === 'education' ? 1 : 0,
            visibility: openSubmenu === 'education' ? 'visible' : 'hidden',
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

      </div>

    {/* Mobile Menu Overlay */}
    <div 
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(26, 26, 29, 0.98)",
        backdropFilter: "blur(10px)",
        zIndex: 1999,
        display: isMenuOpen ? "flex" : "none",
        flexDirection: "column",
        padding: "4rem 2rem 2rem",
        overflowY: "auto"
      }}
      className="mobile-menu"
    >
      <ul style={{
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }}>
        {/* Work Experience */}
        <li>
          <button
            onClick={() => toggleSubmenu('work')}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "1.1rem",
              fontWeight: 500,
              padding: "0.75rem",
              width: "100%",
              textAlign: "left",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            {t.work}
            <span style={{ fontSize: "0.8rem" }}>{openSubmenu === 'work' ? '▼' : '▶'}</span>
          </button>
          {openSubmenu === 'work' && (
            <ul style={{
              listStyle: "none",
              margin: 0,
              padding: "0 0 0 1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem"
            }}>
              <li>
                <a href="#/fulltime" onClick={toggleMenu} style={{ 
                  color: "#ccc",
                  textDecoration: "none",
                  padding: "0.5rem",
                  display: "block",
                  fontSize: "1rem"
                }}>
                  {t.workSubmenu.fulltime}
                </a>
              </li>
              <li>
                <a href="#/parttime" onClick={toggleMenu} style={{ 
                  color: "#ccc",
                  textDecoration: "none",
                  padding: "0.5rem",
                  display: "block",
                  fontSize: "1rem"
                }}>
                  {t.workSubmenu.parttime}
                </a>
              </li>
              <li>
                <a href="#/references" onClick={toggleMenu} style={{ 
                  color: "#ccc",
                  textDecoration: "none",
                  padding: "0.5rem",
                  display: "block",
                  fontSize: "1rem"
                }}>
                  {t.workSubmenu.references}
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* Portfolio */}
        <li>
          <a href="#/portfolio" onClick={toggleMenu} style={{ 
            color: "#fff",
            textDecoration: "none",
            fontSize: "1.1rem",
            fontWeight: 500,
            padding: "0.75rem",
            display: "block"
          }}>
            {t.portfolio}
          </a>
        </li>

        {/* Diplomas */}
        <li>
          <button
            onClick={() => toggleSubmenu('diplomas')}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "1.1rem",
              fontWeight: 500,
              padding: "0.75rem",
              width: "100%",
              textAlign: "left",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            {t.diplomas}
            <span style={{ fontSize: "0.8rem" }}>{openSubmenu === 'diplomas' ? '▼' : '▶'}</span>
          </button>
          {openSubmenu === 'diplomas' && (
            <ul style={{
              listStyle: "none",
              margin: 0,
              padding: "0 0 0 1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem"
            }}>
              <li>
                <a href="#/diplomas/university" onClick={toggleMenu} style={{ 
                  color: "#ccc",
                  textDecoration: "none",
                  padding: "0.5rem",
                  display: "block",
                  fontSize: "1rem"
                }}>
                  {t.diplomasSubmenu.university}
                </a>
              </li>
              <li>
                <a href="#/diplomas/bootcamps" onClick={toggleMenu} style={{ 
                  color: "#ccc",
                  textDecoration: "none",
                  padding: "0.5rem",
                  display: "block",
                  fontSize: "1rem"
                }}>
                  {t.diplomasSubmenu.bootcamps}
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* Education */}
        <li>
          <button
            onClick={() => toggleSubmenu('education')}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "1.1rem",
              fontWeight: 500,
              padding: "0.75rem",
              width: "100%",
              textAlign: "left",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            {t.education}
            <span style={{ fontSize: "0.8rem" }}>{openSubmenu === 'education' ? '▼' : '▶'}</span>
          </button>
          {openSubmenu === 'education' && (
            <ul style={{
              listStyle: "none",
              margin: 0,
              padding: "0 0 0 1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem"
            }}>
              <li>
                <a href="#/education/books" onClick={toggleMenu} style={{ 
                  color: "#ccc",
                  textDecoration: "none",
                  padding: "0.5rem",
                  display: "block",
                  fontSize: "1rem"
                }}>
                  {t.educationSubmenu.books}
                </a>
              </li>
              <li>
                <a href="#/education/finance" onClick={toggleMenu} style={{ 
                  color: "#ccc",
                  textDecoration: "none",
                  padding: "0.5rem",
                  display: "block",
                  fontSize: "1rem"
                }}>
                  {t.educationSubmenu.finance}
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* Donations */}
        <li>
          <a href="#/donations" onClick={toggleMenu} style={{ 
            color: "#fff",
            textDecoration: "none",
            fontSize: "1.1rem",
            fontWeight: 500,
            padding: "0.75rem",
            display: "block"
          }}>
            {t.donations}
          </a>
        </li>

        {/* Contact */}
        <li>
          <a href="#/contact" onClick={toggleMenu} style={{ 
            color: "#fff",
            textDecoration: "none",
            fontSize: "1.1rem",
            fontWeight: 500,
            padding: "0.75rem",
            display: "block"
          }}>
            {t.contact}
          </a>
        </li>
      </ul>
    </div>
    </>
  );
}