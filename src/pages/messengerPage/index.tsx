import { useNavigate } from 'react-router';

export const MessengerPage = () => {
  const navigate = useNavigate();

  return (
    <section>
      <button onClick={() => navigate('/')}>Go to Main</button>
    </section>
  );
};
