import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Apple from '../assets/Apple.svg'
import '../styles/globalStyles';

function Home() {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleTransaction = () => {
    if (value) {
      navigate('/processing', { state: { value } });
    }
  };

  return (
    <div className="container">
      <h1>Value of the operation</h1>
      <input type="number" placeholder="Enter the value" value={value} onChange={(e) => setValue(e.target.value)} className="input" />
      <button onClick={handleTransaction} className="button">
        <img src={Apple} alt="Apple" />
        Pay
      </button>
    </div>
  );
}

export default Home;
