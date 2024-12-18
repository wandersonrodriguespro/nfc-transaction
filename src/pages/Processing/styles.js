import styled from "styled-components";
export const Content = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const Container = styled.div`
  max-width: 350px;
  height: 150px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #ffafaf6e;
  color: #fff; 
  border-radius: 10px;
  box-shadow: 0 0px 10px 1px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 25px;
    color: #fff;
  }
`

export const Dots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;

    :nth-child(1) {
  animation-delay: 0s;
    }

    :nth-child(2) {
  animation-delay: 100ms;
    }

    :nth-child(3) {
  animation-delay: 200ms;
    }

    
`
export const Dot = styled.div `
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fff;
    opacity: 0.2;
    animation: jump 600ms infinite linear;

    
`

export const WaveContainer = styled.div`
    position: absolute;
    width: 100px;
    height: 100px;
    margin: 2rem auto;

    :nth-child(2) {
        animation-delay: 0.4s;
    }

    :nth-child(3) {
        animation-delay: 0.8s;
    }

  @keyframes wave-animation {
    0% {
        transform: scale(0);
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7), 0 0 0 0 rgba(255, 255, 255, 0.7);
    }
    
    100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(51, 204, 102, 0), 0 0 0 30px rgba(51, 204, 102, 0);
    }
 
}

`
export const Wave = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    animation: wave-animation 3s infinite ease-out;

    @keyframes jump {
  0% {
    opacity: 0.2;
    transform: translateY(0px);
  }
  33% {
    opacity: 0.6;
    transform: translateY(-9px);
  }
  66% {
    opacity: 0.2;
    transform: translateY(0px);
  }
}
`