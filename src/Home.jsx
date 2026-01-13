import React, { useContext, useEffect } from "react";
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

  // Load Chatbase chatbot script on component mount
  useEffect(() => {
    // Configure Chatbase before initialization
    window.chatbaseConfig = {
      showFloatingInitialMessages: true,  // Enable floating messages
      floatingInitialMessagesDelay: 1     // Show after 2 seconds
    };

    // Initialize chatbase queue if not already present
    if (!window.chatbase || window.chatbase("getState") !== "initialized") {
      window.chatbase = (...args) => {
        if (!window.chatbase.q) {
          window.chatbase.q = [];
        }
        window.chatbase.q.push(args);
      };
      window.chatbase = new Proxy(window.chatbase, {
        get(target, prop) {
          if (prop === "q") {
            return target.q;
          }
          return (...args) => target(prop, ...args);
        }
      });
    }

    // Load the Chatbase embed script
    const onLoad = function() {
      // Clear any stored state to ensure floating messages show on every reload
      try {
        const chatbaseKeys = Object.keys(localStorage).filter(key => 
          key.startsWith('chatbase') || key.includes('chatbase')
        );
        chatbaseKeys.forEach(key => localStorage.removeItem(key));
      } catch (e) {
        console.warn('Could not clear chatbase localStorage:', e);
      }

      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "x-Q1cVJoxUCqnT320qFuE";
      script.domain = "www.chatbase.co";
      // Once the script loads, attach a toggle handler to the bubble button
      script.onload = () => {
        const attachBubbleToggle = (attempt = 0) => {
          const bubble = document.getElementById('chatbase-bubble-button');
          if (!bubble) {
            if (attempt < 20) {
              setTimeout(() => attachBubbleToggle(attempt + 1), 150);
            }
            return;
          }
          if (bubble.dataset.toggleAttached === 'true') return;
          bubble.dataset.toggleAttached = 'true';

          let isOpen = false;
          bubble.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            isOpen = !isOpen;
            if (isOpen) {
              window.chatbase?.open?.();
            } else {
              window.chatbase?.close?.();
            }
          });
        };

        // Apply custom dimensions to chatbase window
        const applyCustomStyles = (attempt = 0) => {
          const chatWindow = document.getElementById('chatbase-bubble-window');
          if (!chatWindow) {
            if (attempt < 20) {
              setTimeout(() => applyCustomStyles(attempt + 1), 150);
            }
            return;
          }
          chatWindow.style.width = '400px';
          chatWindow.style.height = '70dvh';
        };

        attachBubbleToggle();
        applyCustomStyles();
      };
      document.body.appendChild(script);
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }

    return () => {
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <main style={{ minHeight: "100vh", width: "100vw", background: "transparent" }}>
      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className="lang-toggle lang-toggle--home"
      >
        {language === 'en' ? '🇪🇸 ES' : '🇺🇸 EN'}
      </button>

      {/* Navigation Bar */}
      <Navbar language={language} showLogo={false} />

      {/* Hero Section */}
      <section style={{ padding: "1rem 1rem", textAlign: "center" }}>
        <h1 style={{ margin: 0 }}>
          <a href="#/" aria-label="Home" style={{ display: 'inline-block', textDecoration: 'none' }}>
            <span className="home-logo-wrapper">
              <img
                src="/img/image1.png"
                alt={t.title}
                className="site-logo"
                style={{ verticalAlign: 'middle', cursor: 'pointer', display: 'block' }}
              />
            </span>
          </a>
        </h1>

        {/* Separator between sections */}
        <div className="section-separator-1000px" aria-hidden="true" />

        <a href="https://github.com/julianpedrazajf" target="_blank" rel="noopener noreferrer" style={{ textDecorationLine: 'underline', textDecorationColor: '#fff', color: "#fff", fontWeight: 600, display: 'block', marginBottom: '3rem' }}>
          {t.githubLink} <br />
          https://github.com/julianpedrazajf
        </a>

      {/* Separator between sections */}
      <div className="section-separator-500px" aria-hidden="true" />

        {/* Introducción (versión 3 - narrativa personal) */}
        <div style={{ fontSize: "1.25rem", margin: "0.5rem auto", maxWidth: 600, textAlign: "center", display: "block", lineHeight: 1.6, whiteSpace: "pre-line" }}>
          <p style={{ marginBottom: 12 }}>
          {t.introduction}
          </p>
        </div>
      </section>

      {/* Separator between sections */}
      <div className="section-separator-1000px" aria-hidden="true" />

    </main>
  );
}


