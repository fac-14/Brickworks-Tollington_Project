import React from 'react';
// import { render } from 'react-dom';

import Home from './pages/home';
import Events from './pages/events';
import Nav from './mainPageComponents/header';

const App = () => {
  return (
    <div>
      <Nav />
      <Home />
      <Events />
    </div>
  );
};

export default App;