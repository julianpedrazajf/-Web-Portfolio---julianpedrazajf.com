import React from "react";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", width: "100vw", background: "#f5f6fa" }}>
      {/* Hero Section */}
      <section style={{ padding: "3rem 1rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800 }}>Julian's Portfolio</h1>
        <a href="https://github.com/julianpedrazajf" target="_blank" rel="noopener noreferrer" style={{ color: "#24292f", fontWeight: 600 }}>
          https://github.com/julianpedrazajf <br /> 
        </a>

          {/* Navigation Bar */}
      <Navbar />
      
        {/* Introducción (versión 3 - narrativa personal) */}
        <div style={{ fontSize: "1.25rem", margin: "1rem auto", maxWidth: 600, textAlign: "left", display: "inline-block", lineHeight: 1.6 }}>
          <p style={{ marginBottom: 12 }}>
            Me llamo Julian. Me guía la búsqueda del conocimiento y el deseo de servir: aprendo de libros, tecnología y la experiencia humana, y aplico lo que sé para crear y ayudar.
          </p>
          <p style={{ marginBottom: 0 }}>
            En este espacio encontrarás mi trabajo y la intención detrás de él: ser útil donde haga falta —tanto en proyectos profesionales como en tareas más cotidianas o personales. Si algo de esto resuena contigo, me encantaría conversar.
          </p>
        </div>
      </section>



      {/* AI Section */}
      <section style={{ padding: "2rem 1rem", maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 700 }}>🧠 AI Section</h2>
        <blockquote style={{ fontStyle: "italic", margin: "1rem auto", color: "#555" }}>
          “Have a quick question about Julian or any area of knowledge he has experience in?”
        </blockquote>
        {/* You can add a chatbot or FAQ search here */}
      </section>
    </main>
  );
}
