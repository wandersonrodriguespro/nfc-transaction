import { useLocation, useNavigate } from 'react-router-dom';
import { Container } from './styles';
import { useEffect } from 'react';

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
    <Container>
      <h1>Successful transaction!</h1>
      <p>Value: $ {value}</p>
      <button onClick={handleBack} className="button">
        New Transaction
      </button>
    </Container>
  );
}

export default Success;
