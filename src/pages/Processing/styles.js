import styled from "styled-components";

export const Dots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  margin-top: -10px;

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
    width: 1px;
    height: 1px;
    border-radius: 50%;
    background-color: #fff;
    opacity: 0.2;
    animation: jump 600ms infinite linear;

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

export const WaveContainer = styled.div`
    position: relative;
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
        transform: scale(1.5);
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
`