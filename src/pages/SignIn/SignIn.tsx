import { Button, TextInput, TsParticle } from '../../shared/components';
import Logo from '../../shared/assets/logo.svg';
import * as S from './styles';
import { Link } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { useAuth } from '../../shared/hooks/useAuth';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await login(email, password);
  };

  return (
    <>
      <TsParticle />
      <S.Container>
        <S.Content>
          <S.Logo>
            <img src={Logo} alt="Logo da Aplicação" />
          </S.Logo>
          <S.Form onSubmit={handleSubmit}>
            <h2>Autenticação</h2>
            <TextInput
              type="text"
              label="Email"
              placeholder="Digite o seu email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
              type="text"
              label="Senha"
              placeholder="Digite a sua senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button>Entrar</Button>
          </S.Form>

          <Link to="/register">Não possui uma conta?</Link>
        </S.Content>
      </S.Container>
    </>
  );
};
