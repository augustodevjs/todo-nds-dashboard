import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAuth } from '../../shared/hooks/useAuth';
import { ISignInForm } from '../../shared/domain-types';
import { signInForm } from '../../shared/domain-types/validators';
import { Button, TextInput, TsParticle } from '../../shared/components';

import Logo from '../../shared/assets/logo.svg';
import * as S from './styles';

export const SignIn = () => {
  const { login } = useAuth();

  const { register, handleSubmit } = useForm<ISignInForm>({
    mode: 'onBlur',
    resolver: yupResolver(signInForm),
  });

  const onSubmit = (data: ISignInForm) => {
    login(data.email, data.password);
  };

  return (
    <>
      <TsParticle />
      <S.Container>
        <S.Content>
          <S.Logo>
            <img src={Logo} alt="Logo da Aplicação" />
          </S.Logo>
          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <h2>Autenticação</h2>
            <TextInput
              type="text"
              label="Email"
              placeholder="Digite o seu email"
              {...register('email')}
            />
            <TextInput
              type="text"
              label="Senha"
              placeholder="Digite a sua senha"
              {...register('password')}
            />
            <Button>Entrar</Button>
          </S.Form>

          <Link to="/register">Não possui uma conta?</Link>
        </S.Content>
      </S.Container>
    </>
  );
};
