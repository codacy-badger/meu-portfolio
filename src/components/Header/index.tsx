import React from 'react';
import { Dropdown, Button, Icon } from 'semantic-ui-react';

import {
  Container,
  DropdownContainer,
  LeftContainer,
  RightContainer,
} from './styles';

const UserButton = () => (
  <Button
    icon="user circle"
    content="AvengerSuicide"
    labelPosition="left"
    inverted
  />
);

const HeaderComponent = () => (
  <Container className="padding-wrap-container">
    <LeftContainer>
      <DropdownContainer>
        <Dropdown trigger={<UserButton />} icon={false} closeOnChange>
          <Dropdown.Menu style={{ width: '100%', marginTop: '8px' }}>
            <Dropdown.Header>Medias</Dropdown.Header>
            <Dropdown.Item>
              <a
                href="https://github.com/AvengerSuicide"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="github" />
                GitHub
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a
                href="https://github.com/AvengerSuicide"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="discord" />
                Discord
              </a>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </DropdownContainer>
    </LeftContainer>
    <RightContainer>
      <a href="#projects">Projetos</a>
      <a href="#projects">Conhecimentos</a>
      <a href="#goals">Metas</a>
    </RightContainer>
  </Container>
);

export default HeaderComponent;
