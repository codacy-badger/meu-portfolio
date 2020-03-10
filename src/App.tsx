import React from 'react';

import MainLayout from '@layouts';

import Home from '@pages/Home';

import GlobalStyle from '@styles/global';

const App = () => (
  <>
    <MainLayout>
      <Home />
    </MainLayout>
    <GlobalStyle />
  </>
);

export default App;
