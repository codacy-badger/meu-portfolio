import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  display: none; /* flex */
  height: 60px;
  width: 100%;
  top: 0;
  align-items: center;
  justify-content: space-between;
  background-color: #667ed4;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);

  * {
    font-size: 15px !important;
    font-weight: 600 !important;

    &,
    .icon.button {
      color: #fff;
    }
  }
`;

export const DropdownContainer = styled.div`
  div.dropdown[aria-expanded='true'],
  button:hover {
    * {
      color: #000;
    }
  }

  .menu {
    a,
    i {
      color: #2d3a3a !important;
    }
  }
`;

export const LeftContainer = styled.div`
  button {
    margin: 0 !important;
  }
`;

export const RightContainer = styled.nav`
  &,
  a {
    display: flex;
    height: 100%;
    align-items: center;
  }

  a {
    position: relative;
    padding: 0 10px;

    :after {
      content: '';
      position: absolute;
      height: 2px;
      width: 0;
      left: 0;
      bottom: 0;
      background-color: #fff;
      transition: width 300ms;
    }

    :not(:last-child) {
      margin-right: 15px;
    }

    :hover {
      color: #e8e8e8;

      :after {
        width: 100%;
      }
    }
  }
`;
