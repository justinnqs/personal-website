import React from 'react';
import Landing from './pages/Landing';
import { Defaults } from './components/atoms/Defaults';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(
  faLinkedin,
  faGithub
);

const App = () => {
  return (
    <React.Fragment>
      <Defaults />
      <Landing></Landing>
    </React.Fragment>
  );
}

export default App;
