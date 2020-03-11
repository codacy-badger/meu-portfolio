import styled from 'styled-components';

import background from '@assets/img/bg.jpg';

export const Container = styled.div`
  section {
    height: 100vh;
    width: 100%;
  }
`;

export const MainContainer = styled.section`
  padding: 40px 300px;
  text-align: center;

  background: linear-gradient(
      to top,
      rgba(51, 51, 51, 0.6),
      rgba(117, 19, 93, 0.73)
    ),
    url(${background}) no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;

  @media (max-width: 1200px) {
    padding: 40px 40px;
  }
`;
