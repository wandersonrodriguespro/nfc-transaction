import styled from "styled-components";

export const Container = styled.div`
  background-color: #60e756c9;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  text-align: center;
  color: #fff; 
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0px 20px 2px rgba(0, 0, 0, 0.1);
  font-size: 20px;
  animation: scale 800ms ease-in-out;

  @keyframes scale {
    0% {
      transform: scale(0);
    }
    60% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`