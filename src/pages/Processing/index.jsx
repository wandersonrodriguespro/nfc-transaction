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
    }, 4500);

    return () => clearTimeout(timer);
  }, [navigate, value]);

  return (
      <Content>
      <WaveContainer>
        <Wave />
        <Wave />
        <Wave />
      </WaveContainer>
    <Container>
      <h1>$ {value}</h1>
      {/* <Dots>
        <Dot />
        <Dot />
        <Dot />
      </Dots> */}
    </Container>
    </Content>
  );
}

export default Processing;
