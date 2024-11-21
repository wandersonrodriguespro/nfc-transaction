import { useLocation, useNavigate } from 'react-router-dom';
import { Container } from './styles';


function Success() {
  const location = useLocation();
  const { value } = location.state || { value: 0 };
  const navigate = useNavigate();

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
