
import React, { useState, useEffect } from 'react';
import Disclaimer from './Disclaimer.jsx';
import Home from './Home.jsx';
import FullTime from './pages/work/FullTime.jsx';
import PartTime from './pages/work/PartTime.jsx';
import References from './pages/work/References.jsx';
import UniversityDegrees from './pages/diplomas/UniversityDegrees.jsx';
import OnlineBootcamps from './pages/diplomas/OnlineBootcamps.jsx';
import Books from './pages/education/Books.jsx';
import Finance from './pages/education/Finance.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Donations from './pages/Donations.jsx';
import Contact from './pages/Contact.jsx';
import LanguageContext from './LanguageContext';

function App() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [route, setRoute] = useState(window.location.hash || '');

  // Global language state (initialized from localStorage so user's choice persists)
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('language') || 'en';
    } catch (e) {
      return 'en';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('language', language);
    } catch (e) {
      // ignore
    }
  }, [language]);

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash || '');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  if (showDisclaimer) {
    return (
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Disclaimer onContinue={() => setShowDisclaimer(false)} />
      </LanguageContext.Provider>
    );
  }

  // Minimal hash router: handle only the FullTime route for now.
  // Minimal hash router: handle FullTime and PartTime routes.
  if (route === '#/fulltime' || route === '#fulltime') {
    return (
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <FullTime language={language} />
      </LanguageContext.Provider>
    );
  }

  if (route === '#/parttime' || route === '#parttime') {
    return (
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <PartTime language={language} />
      </LanguageContext.Provider>
    );
  }

  if (route === '#/references' || route === '#references') {
    return (
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <References language={language} />
      </LanguageContext.Provider>
    );
  }

  if (route === '#/diplomas/university' || route === '#/diplomas-university' || route === '#diplomas-university') {
    return (
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <UniversityDegrees language={language} />
      </LanguageContext.Provider>
    );
  }

  if (route === '#/diplomas/bootcamps' || route === '#/diplomas-bootcamps' || route === '#diplomas-bootcamps') {
    return (
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <OnlineBootcamps language={language} />
      </LanguageContext.Provider>
    );
  }

  if (route === '#/education/books' || route === '#education-books' || route === '#/education-books') {
    return (
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Books language={language} />
      </LanguageContext.Provider>
    );
  }

  if (route === '#/education/finance' || route === '#education-finance' || route === '#/education-finance') {
    return (
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Finance language={language} />
      </LanguageContext.Provider>
    );
  }

  if (route === '#/portfolio' || route === '#portfolio') {
    return (
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Portfolio language={language} />
      </LanguageContext.Provider>
    );
  }

  if (route === '#/donations' || route === '#donations') {
    return (
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Donations language={language} />
      </LanguageContext.Provider>
    );
  }

  if (route === '#/contact' || route === '#contact') {
    return (
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Contact language={language} />
      </LanguageContext.Provider>
    );
  }

  // default to Home
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Home language={language} setLanguage={setLanguage} />
    </LanguageContext.Provider>
  );
}

export default App;
