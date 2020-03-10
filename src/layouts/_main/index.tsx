import React, { FunctionComponent } from 'react';

import { Children } from '@interfaces/Props';

import Footer from '@components/Footer';
import Header from '@components/Header';

import { Wrapper, MainContainer } from './styles';

const MainLayout: FunctionComponent<Children> = ({ children }) => (
  <Wrapper>
    <Header />
    <MainContainer>{children}</MainContainer>
    <Footer />
  </Wrapper>
);

export default MainLayout;
