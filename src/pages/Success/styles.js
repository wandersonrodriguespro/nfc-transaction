import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  background-color: #fff;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  text-align: center;
  /* color: #fff; */
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0px 20px 2px rgba(0, 0, 0, 0.1);
  font-size: 20px;
  animation: scale 800ms ease-in-out;

  h1 {
    font-size: 30px;
    color: green;
  }

  p{
    font-size: 17px;
    color: #898989;
  }

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

export const PaymentSucceed = styled.div`
  background-color: #fcfcfc;
  width: 100%;
  display: flex;
  justify-content: center;

  p{
    font-size: 17px;
    width: auto;
    color: green;
  }


img{
  background-color: green;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  margin: auto 8px;
}
`
