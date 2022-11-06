import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAuth } from '../../shared/hooks/useAuth';
import { TsParticle } from '../../shared/components';
import { ISignInForm } from '../../shared/domain-types';
import { signInForm } from '../../shared/domain-types/validators';

import * as S from './styles';
import { FormLogin } from './components';
import Logo from '../../shared/assets/logo.svg';

export const SignIn = () => {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ISignInForm>({
    mode: 'onChange',
    resolver: yupResolver(signInForm),
  });

  const onSubmit: SubmitHandler<ISignInForm> = (data) => {
    setIsLoading(true);
    login(data.email, data.password).then(() => {
      setIsLoading(false);
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
            <FormLogin onSubmit={onSubmit} isLoading={isLoading} />
          </FormProvider>

          <Link to="/register">Não possui uma conta?</Link>
        </S.Content>
      </S.Container>
    </>
  );
};
