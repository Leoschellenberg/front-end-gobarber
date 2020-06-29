import React from 'react';

import GlobalStyled from './styles/global';
import SignIn from './pages/SignIn';

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyled />
  </>
);

export default App;
