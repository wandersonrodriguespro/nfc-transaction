import styled from "styled-components";

export const Content = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Container = styled.div`
  position: absolute;
  max-width: 350px;
  height: 150px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff; 

  h1 {
    font-size: 55px;
    color: #fff;
    height: 90px;
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
        transform: scale(5);
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