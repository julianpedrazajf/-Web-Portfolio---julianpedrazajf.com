
import React, { useState, useEffect } from 'react';
import Disclaimer from './Disclaimer.jsx';
import Home from './Home.jsx';
import FullTime from './pages/work/FullTime.jsx';

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
  if (route === '#/fulltime' || route === '#fulltime') {
    return <FullTime />;
  }

  // default to Home
  return <Home />;
}

export default App;
