import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { AuthCreateUser } from '../../shared/services';
import { ISignUpForm } from '../../shared/domain-types';
import { signUpForm } from '../../shared/domain-types/validators';
import { Button, TextInput, TsParticle } from '../../shared/components';

import * as S from './styles';
import Logo from '../../shared/assets/logo.svg';

export const SignUp = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<ISignUpForm>({
    mode: 'onBlur',
    resolver: yupResolver(signUpForm),
  });

  const onSubmit = (data: ISignUpForm) => {
    AuthCreateUser(data).then((result) => {
      if (result instanceof Error) {
        return result.message;
      }

      alert('Usuário cadastrado com sucesso!');
      navigate('/');
    });
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
            <h2>Nova Conta</h2>
            <TextInput
              type="text"
              label="Nome"
              placeholder="Digite o seu nome"
              {...register('name')}
            />
            <TextInput
              type="email"
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
            <TextInput
              type="text"
              label="Confirmação de Senha"
              placeholder="Repita novamente sua senha"
              {...register('passwordConfirm')}
            />
            <Button type="submit">Entrar</Button>
          </S.Form>

          <Link to="/">Já possui uma conta?</Link>
        </S.Content>
      </S.Container>
    </>
  );
};
