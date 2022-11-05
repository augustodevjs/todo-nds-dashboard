import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { AuthCreateUser } from '../../shared/services';
import { ISignUpForm } from '../../shared/domain-types';
import { signUpForm } from '../../shared/domain-types/validators';
import { Button, TextInput, TsParticle } from '../../shared/components';

import * as S from './styles';
import Logo from '../../shared/assets/logo.svg';
import { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { Alert } from '../../shared/adapters';

export const SignUp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState } = useForm<ISignUpForm>({
    mode: 'onChange',
    resolver: yupResolver(signUpForm),
  });

  const onSubmit = (data: ISignUpForm) => {
    setIsLoading(true);
    AuthCreateUser(data).then((result) => {
      if (result instanceof Error) {
        setIsLoading(false);
        return result.message;
      }

      setIsLoading(false);
      Alert.callSuccess({
        title: 'Sucesso!',
        description: 'Usuário cadastrado com sucesso.',
        onConfirm: () => navigate('/'),
      });
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
            <Button type="submit" disabled={!formState.isValid}>
              {isLoading ? (
                <S.ContainerLoading>
                  <ClipLoader
                    color="#fff"
                    loading
                    size={18}
                    speedMultiplier={1}
                  />
                </S.ContainerLoading>
              ) : (
                'Cadastrar'
              )}
            </Button>
          </S.Form>

          <Link to="/">Já possui uma conta?</Link>
        </S.Content>
      </S.Container>
    </>
  );
};
