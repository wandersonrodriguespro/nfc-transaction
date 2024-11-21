import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  text-align: center;
  background: #ffafaf6e;
  color: #fff; 
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0px 10px 1px rgba(0, 0, 0, 0.1);
  font-size: 20px;

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
`

export const InputValue = styled.input`
  padding: 0.5rem;
  width: 100%;
  font-size: 18px;
  color: #000;
  font-weight: bold;
  border: 1px solid #f97d7d;
  border-radius: 5px;

  &::-webkit-inner-spin-button{
    -webkit-appearance: none;
  }
`