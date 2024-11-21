import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/globalStyles';

function Success() {
  const location = useLocation();
  const { value } = location.state || { value: 0 };
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Transaction Completed!</h1>
      <p>Value: $ {value}</p>
      <button onClick={handleBack} className="button">
        New Transaction
      </button>
    </div>
  );
}

export default Success;
