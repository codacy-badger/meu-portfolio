import React from 'react';

import MainSection from './sections/main';

import { Container, MainContainer } from './styles';

const HomePage = () => (
  <Container>
    <MainContainer>
      <MainSection />
    </MainContainer>
  </Container>
);

export default HomePage;
