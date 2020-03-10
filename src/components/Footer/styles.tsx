import styled from 'styled-components';

export const Container = styled.footer`
  padding: 40px 300px;
  text-align: center;
  background-color: #384182;

  @media (max-width: 1200px) {
    padding: 40px 40px;
  }
`;

export const BrandsContainer = styled.div`
  display: flex;
  margin-top: 40px;
  flex-wrap: wrap;
  justify-content: center;

  a {
    i {
      margin: 0 10px;
      font-size: 30px;
      transition: transform 300ms;
      color: #fff;
    }

    :hover > i {
      color: #7289da;
      transform: scale(1.1);
    }
  }
`;

export const CreatorContainer = styled.div`
  margin-top: 25px;

  p {
    margin: 5px 0;
    font-weight: 600;
  }
`;
