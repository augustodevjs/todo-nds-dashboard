import { Button, Input } from '../../shared/components';
import Logo from '../../shared/assets/logo.svg';
import * as S from './styles';
import { Link } from 'react-router-dom';

export const SignIn = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Logo>
          <img src={Logo} alt="Logo da Aplicação" />
        </S.Logo>
        <S.Form>
          <h2>Autenticação</h2>
          <Input type="text" label="Email" placeholder="Digite o seu email" />
          <Input type="text" label="Senha" placeholder="Digite a sua senha" />
          <Button>Entrar</Button>
        </S.Form>

        <Link to="/register">Não possui uma conta?</Link>
      </S.Content>
    </S.Container>
  );
};
