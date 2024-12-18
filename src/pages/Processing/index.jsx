import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Content, Dot, Dots, Wave, WaveContainer } from './styles';
import { Container } from './styles';

function Processing() {
  const navigate = useNavigate();
  const location = useLocation();
  const { value } = location.state || { value: 0 };

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/success', { state: { value } });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, value]);

  return (
    <Container>
      <h1>Processing</h1>
      <Dots>
        <Dot />
        <Dot />
        <Dot />
      </Dots>
    </Container>
  );
}

export default Processing;
