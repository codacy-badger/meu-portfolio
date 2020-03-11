import React, { FunctionComponent, HTMLAttributes } from 'react';
import { Icon, SemanticICONS } from 'semantic-ui-react';

import { Container, BrandsContainer, CreatorContainer } from './styles';

const FooterComponent = () => (
  <Container>
    <p>
      &quot;Existem duas maneiras de construir um projeto de software. Uma é
      fazê-lo tão simples que obviamente não há falhas. A outra é fazê-lo tão
      complicado que não existem falhas óbvias.&quot; -
      <span>
        <b> C.A.R. Hoare</b>
      </span>
    </p>

    <BrandsContainer>
      <IconNavigation
        icon="github square"
        from="https://github.com/AvengerSuicide"
      />
      <IconNavigation
        icon="discord"
        from="https://discord.gg/"
        style={{ position: 'relative', bottom: '-2px' }}
      />
    </BrandsContainer>
    <CreatorContainer>
      <p>Created by Pablo Vinícius</p>
      <p>Copyright © 2020</p>
    </CreatorContainer>
  </Container>
);

interface IconNavigationProps extends HTMLAttributes<any> {
  icon: SemanticICONS;
  from: string;
}

const IconNavigation: FunctionComponent<IconNavigationProps> = ({
  icon,
  from,
  ...rest
}) => (
  <a target="_blank" rel="noopener noreferrer" href={from} {...rest}>
    <Icon name={icon} />
  </a>
);

export default FooterComponent;
