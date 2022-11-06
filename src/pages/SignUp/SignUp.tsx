import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { Alert } from '../../shared/adapters';
import { TsParticle } from '../../shared/components';
import { AuthCreateUser } from '../../shared/services';
import { ISignUpForm } from '../../shared/domain-types';
import { signUpForm } from '../../shared/domain-types/validators';

import * as S from './styles';
import { RegisterForm } from './components';
import Logo from '../../shared/assets/logo.svg';

export const SignUp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ISignUpForm>({
    mode: 'onChange',
    resolver: yupResolver(signUpForm),
  });

  const onSubmit = (data: ISignUpForm) => {
    setIsLoading(true);
    AuthCreateUser(data).then((result) => {
      if (result instanceof Error) {
        setIsLoading(false);
        Alert.callError({
          title: (result as Error).name,
          description: (result as Error).message,
        });

        form.reset();
        return;
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

          <FormProvider {...form}>
            <RegisterForm onSubmit={onSubmit} isLoading={isLoading} />
          </FormProvider>

          <Link to="/">Já possui uma conta?</Link>
        </S.Content>
      </S.Container>
    </>
  );
};
