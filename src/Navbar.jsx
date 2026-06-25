import React, { useState } from 'react';
import './Navbar.css';

const navContent = {
  en: {
    home: "Home",
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
    contact: "Contact"
  },
  es: {
    home: "Inicio",
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
    contact: "Contacto"
  }
};

export default function Navbar({ language = 'en' }) {
  const t = navContent[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <>
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
          borderRadius: "10px",
          padding: "0.6rem",
          cursor: "pointer",
          color: "#fff",
          fontSize: "1.5rem",
          lineHeight: 1
        }}
        className="hamburger-button liquid-glass"
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>

      <div
        style={{
          background: "transparent",
          borderRadius: "40px",
          padding: "0",
          marginTop: "2rem",
          marginBottom: "1rem",
          maxWidth: "999px",
          marginInline: "auto"
        }}
        className="desktop-nav"
      >
        <nav
          className="liquid-glass"
          style={{
            borderRadius: "36px",
            padding: "0.6rem",
            width: "100%",
            boxSizing: "border-box",
            overflow: "visible"
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
        <li>
          <a href="#/" style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: 500,
            transition: "color 0.2s ease",
            display: "inline-block",
            padding: "0.5rem 0"
          }}>
            {t.home}
          </a>
        </li>
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
            padding: "0.5rem 0",
            borderRadius: "14px",
            listStyle: "none",
            minWidth: "160px",
            opacity: openSubmenu === 'work' ? 1 : 0,
            visibility: openSubmenu === 'work' ? 'visible' : 'hidden',
            transition: "all 0.2s ease",
            zIndex: 1001
          }}>
            <li className="submenu-item">
        <a href="#/fulltime" className="submenu-link">
                {t.workSubmenu.fulltime}
              </a>
            </li>
            <li className="submenu-item">
              <a href="#/parttime" className="submenu-link">
                {t.workSubmenu.parttime}
              </a>
            </li>
            <li className="submenu-item">
              <a href="#/references" className="submenu-link">
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
            padding: "0.5rem 0",
            borderRadius: "14px",
            listStyle: "none",
            minWidth: "180px",
            opacity: openSubmenu === 'diplomas' ? 1 : 0,
            visibility: openSubmenu === 'diplomas' ? 'visible' : 'hidden',
            transition: "all 0.2s ease",
            zIndex: 1001
          }}>
            <li className="submenu-item">
              <a href="#/diplomas/university" className="submenu-link">
                {t.diplomasSubmenu.university}
              </a>
            </li>
            <li className="submenu-item">
              <a href="#/diplomas/bootcamps" className="submenu-link">
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
            padding: "0.5rem 0",
            borderRadius: "14px",
            listStyle: "none",
            minWidth: "180px",
            opacity: openSubmenu === 'education' ? 1 : 0,
            visibility: openSubmenu === 'education' ? 'visible' : 'hidden',
            transition: "all 0.2s ease",
            zIndex: 1001
          }}>
            <li className="submenu-item">
              <a href="#/education/books" className="submenu-link">
                {t.educationSubmenu.books}
              </a>
            </li>
            <li className="submenu-item">
                <a href="#/education/finance" className="submenu-link">
                {t.educationSubmenu.finance}
              </a>
            </li>
          </ul>
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
        background: "rgba(18, 18, 20, 0.9)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
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
        {/* Home */}
        <li>
          <a href="#/" onClick={toggleMenu} style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "1.1rem",
            fontWeight: 500,
            padding: "0.75rem",
            display: "block"
          }}>
            {t.home}
          </a>
        </li>
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
                <a href="#/fulltime" onClick={toggleMenu} className="submenu-link mobile-submenu-link">
                  {t.workSubmenu.fulltime}
                </a>
              </li>
              <li>
                <a href="#/parttime" onClick={toggleMenu} className="submenu-link mobile-submenu-link">
                  {t.workSubmenu.parttime}
                </a>
              </li>
              <li>
                <a href="#/references" onClick={toggleMenu} className="submenu-link mobile-submenu-link">
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
                <a href="#/diplomas/university" onClick={toggleMenu} className="submenu-link mobile-submenu-link">
                  {t.diplomasSubmenu.university}
                </a>
              </li>
              <li>
                <a href="#/diplomas/bootcamps" onClick={toggleMenu} className="submenu-link mobile-submenu-link">
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
                <a href="#/education/books" onClick={toggleMenu} className="submenu-link mobile-submenu-link">
                  {t.educationSubmenu.books}
                </a>
              </li>
              <li>
                <a href="#/education/finance" onClick={toggleMenu} className="submenu-link mobile-submenu-link">
                  {t.educationSubmenu.finance}
                </a>
              </li>
            </ul>
          )}
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