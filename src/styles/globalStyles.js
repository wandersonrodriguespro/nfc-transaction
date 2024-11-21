import { createGlobalStyle } from 'styled-components';

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
  
  .container {
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
}

h1 {
  font-size: 25px;
  color: #fff;
  line-height: 28px;
  letter-spacing: 1px;
  font-weight: 500;
}

.input {
  padding: 0.5rem;
  width: 100%;
  font-size: 18px;
  color: #000;
  font-weight: bold;
  margin-bottom: 1rem;
  border: 1px solid #f97d7d;
  border-radius: 5px;
}
.input::-webkit-inner-spin-button {
    -webkit-appearance: none;
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

.wave-container {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 2rem auto;
}

.wave {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: wave-animation 3s infinite ease-out;
}

.wave:nth-child(2) {
  animation-delay: 0.4s;
}

.wave:nth-child(3) {
  animation-delay: 0.8s;
}


  @keyframes wave-animation {
  0% {
    transform: scale(0);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7), 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
 
  100% {
    transform: scale(1.5);
    box-shadow: 0 0 0 0 rgba(51, 204, 102, 0), 0 0 0 30px rgba(51, 204, 102, 0);
  }
 
}

`;

export default globalStyles;
