
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

function App() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [route, setRoute] = useState(window.location.hash || '');

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash || '');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  if (showDisclaimer) {
    return <Disclaimer onContinue={() => setShowDisclaimer(false)} />;
  }

  // Minimal hash router: handle only the FullTime route for now.
  // Minimal hash router: handle FullTime and PartTime routes.
  if (route === '#/fulltime' || route === '#fulltime') {
    return <FullTime />;
  }

  if (route === '#/parttime' || route === '#parttime') {
    return <PartTime />;
  }

  if (route === '#/references' || route === '#references') {
    return <References />;
  }

  if (route === '#/diplomas/university' || route === '#/diplomas-university' || route === '#diplomas-university') {
    return <UniversityDegrees />;
  }

  if (route === '#/diplomas/bootcamps' || route === '#/diplomas-bootcamps' || route === '#diplomas-bootcamps') {
    return <OnlineBootcamps />;
  }

  if (route === '#/education/books' || route === '#education-books' || route === '#/education-books') {
    return <Books />;
  }

  if (route === '#/education/finance' || route === '#education-finance' || route === '#/education-finance') {
    return <Finance />;
  }

  if (route === '#/portfolio' || route === '#portfolio') {
    return <Portfolio />;
  }

  if (route === '#/donations' || route === '#donations') {
    return <Donations />;
  }

  if (route === '#/contact' || route === '#contact') {
    return <Contact />;
  }

  // default to Home
  return <Home />;
}

export default App;
