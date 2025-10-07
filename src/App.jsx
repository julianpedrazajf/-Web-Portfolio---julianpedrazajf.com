
import React, { useState } from 'react';
import Disclaimer from './Disclaimer.jsx';
import Home from './Home.jsx';

function App() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  return (
    showDisclaimer
      ? <Disclaimer onContinue={() => setShowDisclaimer(false)} />
      : <Home />
  );
}

export default App;
