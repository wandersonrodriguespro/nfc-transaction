import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Content, PaymentSucceed } from './styles';
import { useEffect } from 'react';
import CheckIcon from '../../assets/check-icon.svg'

function Success() {
  const location = useLocation();
  const { value } = location.state || { value: 0 };
  const navigate = useNavigate();

  const playSuccessSound = () => {
    const audio = new Audio('/src/assets/successful-operation.mp3');
    audio.play();
  };

  useEffect(() => {
    playSuccessSound();
  }, []);

  const handleBack = () => {
    navigate('/');
  };

  return (
    <Content onClick={handleBack}>
      <Container>
        <h1>${value}</h1>
        <PaymentSucceed>
          <img src={CheckIcon} alt="Check Icon" />
          <p>Payment succeeded</p>
        </PaymentSucceed>
        <p>Thank you for your payment.</p>
      </Container>
    </Content>
  );
}

export default Success;
