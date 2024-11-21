import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Content, Wave, WaveContainer } from './styles';

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    navigate('/processing');
  };

  return (
    <Content onClick={handleBack}>
      <Container>
        <h1>$ 1,00</h1>
      </Container>
      <WaveContainer>
        <Wave />
        <Wave />
        <Wave />
      </WaveContainer>
    </Content>
  );
}

export default Home;
