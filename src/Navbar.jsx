import React from 'react';

export default function Navbar() {
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
        gap: "2rem",
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
            Work Experience
          </a>
        </li>
        <li>
          <a href="#portfolio" style={{ 
            color: "#333", 
            textDecoration: "none", 
            fontWeight: 500,
            transition: "color 0.2s ease"
          }}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#diplomas" style={{ 
            color: "#333", 
            textDecoration: "none", 
            fontWeight: 500,
            transition: "color 0.2s ease"
          }}>
            Diplomas
          </a>
        </li>
        <li>
          <a href="#education" style={{ 
            color: "#333", 
            textDecoration: "none", 
            fontWeight: 500,
            transition: "color 0.2s ease"
          }}>
            Education
          </a>
        </li>
        <li>
          <a href="#donations" style={{ 
            color: "#333", 
            textDecoration: "none", 
            fontWeight: 500,
            transition: "color 0.2s ease"
          }}>
            Donations
          </a>
        </li>
        <li>
          <a href="#contact" style={{ 
            color: "#333", 
            textDecoration: "none", 
            fontWeight: 500,
            transition: "color 0.2s ease"
          }}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}