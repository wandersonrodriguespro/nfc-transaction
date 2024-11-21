import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Content, PaymentSucceed } from './styles';
import { useEffect } from 'react';
import CheckIcon from '../../assets/check-icon.svg'

function Success() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <Content onClick={handleBack}>
      <Container>
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
