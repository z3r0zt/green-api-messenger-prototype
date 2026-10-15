import { useNavigate } from 'react-router';

export const MessangerPage = () => {
  const navigate = useNavigate();

  return (
    <section>
      <h1>Messanger Page</h1>
      <button onClick={() => navigate('/')}>Go to Main</button>
    </section>
  );
};
