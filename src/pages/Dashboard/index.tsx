import { useEffect } from 'react';
import { api } from '../../shared/api/axios-config';
import { Button } from '../../shared/components';
import { useAuth } from '../../shared/hooks/useAuth';

export const Dashboard = () => {
  const { logout } = useAuth();

  useEffect(() => {
    const data = async () => {
      const response = await api.get('/AssignmentList');
      console.log(response.data);
    };

    data();
  }, []);

  return (
    <>
      <div>Estou logado!</div>
      <Button onClick={logout}>Quero deslogar</Button>
    </>
  );
};
