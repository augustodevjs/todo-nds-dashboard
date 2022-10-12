import { Button } from '../../shared/components';
import { useAuth } from '../../shared/hooks/useAuth';

export const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <>
      <div>Estou logado!</div>
      <Button onClick={logout}>Quero deslogar</Button>
    </>
  );
};
