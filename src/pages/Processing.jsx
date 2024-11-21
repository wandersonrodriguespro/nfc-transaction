import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/globalStyles';

function Processing() {
  const navigate = useNavigate();
  const location = useLocation();
  const { value } = location.state || { value: 0 };

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/success', { state: { value } });
    }, 3500);

    return () => clearTimeout(timer);
  }, [navigate, value]);

  return (
    <div className="container">
      <h1>Processando...</h1>
      <div className="wave-container">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  );
}

export default Processing;
