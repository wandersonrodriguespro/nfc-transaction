import styled, { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    outline: none;
    font-weight: 400;
    font-style: normal;
    font-family: "Poppins", sans-serif;
    width: 100%;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  
  body {
    background-color: #f97d7d;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    transition: ease 0.4s;
    padding: 3%;
  }
`;

export default globalStyles;
