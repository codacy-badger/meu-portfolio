import React from 'react';
import { Loader } from 'semantic-ui-react';
import styled from 'styled-components';

const LoaderComponent = () => (
  <Container>
    <Loader />
  </Container>
);

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export default LoaderComponent;
