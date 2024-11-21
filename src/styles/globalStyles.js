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
    padding: 3%;
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
  }
  


  h1 {
    font-size: 25px;
    color: #fff;
    line-height: 28px;
    letter-spacing: 1px;
    font-weight: 500;
  }

  .button {
    display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0.7rem 1.5rem;
  background-color: #000;
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  }

  .button:hover {
  background-color: #000000e8;
  }

  .button img {
    width: 25px;
    margin: 0;
    padding: 0;
  }
`;

export const Container = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  text-align: center;
  background: #ffafaf6e;
  color: #fff; 
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-size: 20px;
`

export default globalStyles;
