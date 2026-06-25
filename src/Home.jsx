import React from "react";
import Navbar from "./Navbar";
import { Code, GraduationCap, BadgeCheck, ArrowUpRight, Mail } from "lucide-react";

const content = {
  en: {
    metaRole: "Frontend Developer",
    metaStudy: "IT Student",
    metaStatus: "Available for work",
    title: "Hi, I'm Julian.",
    description:
      "Frontend Developer and IT student focused on building clean, fast, and user-centered web experiences. I turn ideas into functional interfaces using modern tools and best practices.",
    viewWork: "View Portfolio",
    contact: "Contact",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  es: {
    metaRole: "Desarrollador Frontend",
    metaStudy: "Estudiante de IT",
    metaStatus: "Disponible para trabajar",
    title: "Hola, soy Julian.",
    description:
      "Desarrollador Frontend y estudiante de IT enfocado en construir experiencias web limpias, rápidas y centradas en el usuario. Transformo ideas en interfaces funcionales con herramientas modernas y buenas prácticas.",
    viewWork: "Ver Portafolio",
    contact: "Contacto",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
};

export default function Home({ language = "en", setLanguage }) {
  const t = content[language];

  const toggleLanguage = () => {
    if (setLanguage) setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <main className="hero">
      {/* Language Toggle */}
      <button onClick={toggleLanguage} className="lang-toggle lang-toggle--home">
        {language === "en" ? "🇪🇸 ES" : "🇺🇸 EN"}
      </button>

      {/* Navigation Bar */}
      <Navbar language={language} />

      {/* Cinematic hero content (bottom-aligned) */}
      <div className="hero-content">
        <div className="hero-row">
          <div className="hero-main">
            {/* Metadata row */}
            <div
              className="hero-meta animate-blur-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              <span className="hero-meta-item">
                <Code strokeWidth={1.8} /> {t.metaRole}
              </span>
              <span className="hero-meta-item">
                <GraduationCap strokeWidth={1.8} /> {t.metaStudy}
              </span>
              <span className="hero-meta-item">
                <BadgeCheck strokeWidth={1.8} /> {t.metaStatus}
              </span>
            </div>

            {/* Title */}
            <h1
              className="hero-title animate-blur-fade-up"
              style={{ animationDelay: "400ms" }}
            >
              {t.title}
            </h1>

            {/* Description */}
            <p
              className="hero-desc animate-blur-fade-up"
              style={{ animationDelay: "500ms" }}
            >
              {t.description}
            </p>

            {/* CTAs */}
            <div className="hero-ctas">
              <a
                href="#/portfolio"
                className="btn btn-solid animate-blur-fade-up"
                style={{ animationDelay: "600ms" }}
              >
                {t.viewWork}
                <ArrowUpRight size={18} />
              </a>
              <a
                href="#/contact"
                className="btn btn-glass liquid-glass animate-blur-fade-up"
                style={{ animationDelay: "700ms" }}
              >
                <Mail size={18} />
                {t.contact}
              </a>
            </div>
          </div>

          {/* Right-side pills: real social links */}
          <div className="hero-side">
            <a
              href="https://github.com/julianpedrazajf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-glass liquid-glass animate-blur-fade-up"
              style={{ animationDelay: "800ms" }}
            >
              {t.github}
              <ArrowUpRight size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/julian-avila-247a09261/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-glass liquid-glass animate-blur-fade-up"
              style={{ animationDelay: "900ms" }}
            >
              {t.linkedin}
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
