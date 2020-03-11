import { createGlobalStyle } from 'styled-components';

import 'semantic-ui-css/semantic.min.css';

export default createGlobalStyle`
  a,
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: #fff;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    color: #fff;
    background-color: #7289da;
    font-family: 'Montserrat', sans-serif;
    text-rendering: optimizelegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  .margin-wrap-container {
    margin: 0 60px;
  }

  .padding-wrap-container {
    padding: 0 60px;
  }
`;
