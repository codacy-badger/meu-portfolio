import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  img {
    margin: auto auto;
    max-width: 180px !important;
    transition: transform 400ms;

    :hover {
      transform: scale(1.01);
    }
  }

  .nickname {
    margin-top: 30px !important;
    font-size: 28px;
    font-weight: 600;
  }
`;
