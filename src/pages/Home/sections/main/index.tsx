import React from 'react';
import { Image, Popup } from 'semantic-ui-react';

import Logo from '@assets/img/logo.jpg';

import { Container, Header } from './styles';

const MainSection = () => (
  <Container>
    <Header>
      <Popup
        trigger={<Image src={Logo} size="medium" rounded />}
        content="Conhecido como AvengerSuicide"
        position="left center"
      />
      <div className="nickname">
        <span>Pablo Vinícius</span>
      </div>
    </Header>
  </Container>
);

export default MainSection;
