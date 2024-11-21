import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputValue, Container } from './styles';

function Home() {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleTransaction = () => {
    if (value) {
      navigate('/processing', { state: { value } });
    }
  };

  return (
    <Container>
      <h1>Amount</h1>

      <InputValue type="number" placeholder="Enter the value" value={value} onChange={(e) => setValue(e.target.value)} className="input" />

      <button onClick={handleTransaction} className="button">
        Pay
      </button>
    </Container>
  );
}

export default Home;
