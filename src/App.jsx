
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
import Contact from './pages/Contact.jsx';
import VideoBackground from './VideoBackground.jsx';
import LanguageContext from './LanguageContext';

function App() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [route, setRoute] = useState(window.location.hash || '');

  // Global language state (initialized from localStorage so user's choice persists)
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('language') || 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('language', language);
    } catch {
      // ignore
    }
  }, [language]);

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash || '');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // The disclaimer keeps its own shader background and gates every route.
  if (showDisclaimer) {
    return (
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Disclaimer onContinue={() => setShowDisclaimer(false)} />
      </LanguageContext.Provider>
    );
  }

  // Minimal hash router: resolve the route to a page component, then render it
  // once over the shared cinematic video background.
  let page;
  if (route === '#/fulltime' || route === '#fulltime') {
    page = <FullTime language={language} />;
  } else if (route === '#/parttime' || route === '#parttime') {
    page = <PartTime language={language} />;
  } else if (route === '#/references' || route === '#references') {
    page = <References language={language} />;
  } else if (route === '#/diplomas/university' || route === '#/diplomas-university' || route === '#diplomas-university') {
    page = <UniversityDegrees language={language} />;
  } else if (route === '#/diplomas/bootcamps' || route === '#/diplomas-bootcamps' || route === '#diplomas-bootcamps') {
    page = <OnlineBootcamps language={language} />;
  } else if (route === '#/education/books' || route === '#education-books' || route === '#/education-books') {
    page = <Books language={language} />;
  } else if (route === '#/education/finance' || route === '#education-finance' || route === '#/education-finance') {
    page = <Finance language={language} />;
  } else if (route === '#/portfolio' || route === '#portfolio') {
    page = <Portfolio language={language} />;
  } else if (route === '#/contact' || route === '#contact') {
    page = <Contact language={language} />;
  } else {
    // default to Home
    page = <Home language={language} setLanguage={setLanguage} />;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <VideoBackground />
      <div className="app-content">{page}</div>
    </LanguageContext.Provider>
  );
}

export default App;
