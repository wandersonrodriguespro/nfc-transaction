import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Dot, Dots, Wave, WaveContainer } from './styles';
import { Container } from '../../styles/globalStyles';

function Processing() {
  const navigate = useNavigate();
  const location = useLocation();
  const { value } = location.state || { value: 0 };

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/success', { state: { value } });
    }, 4500);

    return () => clearTimeout(timer);
  }, [navigate, value]);

  return (
    <Container>
      <Dots>
        <Dot />
        <Dot />
        <Dot />
      </Dots>
      <h1>Processing</h1>
      <WaveContainer>
        <Wave />
        <Wave />
        <Wave />
      </WaveContainer>
    </Container>
  );
}

export default Processing;
