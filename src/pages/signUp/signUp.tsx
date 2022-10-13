import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, Input } from '../../shared/components';
import Logo from '../../shared/assets/logo.svg';
import * as S from './styles';

interface IFormInputs {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
}

const signUpForm: yup.SchemaOf<IFormInputs> = yup.object({
  name: yup.string(),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: yup.string().required('Senha é obrigatório'),
  confirmPassword: yup
    .string()
    .required('Confirmação de senha é obrigatório')
    .oneOf([yup.ref('password'), 'Senhas não conferem.']),
});

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<IFormInputs>({
    mode: 'onBlur',
    resolver: yupResolver(signUpForm),
  });

  console.log(getValues());

  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <S.Container>
      <S.Content>
        <S.Logo>
          <img src={Logo} alt="Logo da Aplicação" />
        </S.Logo>

        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <h2>Nova Conta</h2>
          <Input
            type="text"
            label="Nome"
            placeholder="Digite o seu nome"
            id="name"
          />
          <Input
            type="email"
            label="Email"
            placeholder="Digite o seu email"
            {...register('email')}
          />
          <Input
            type="text"
            label="Senha"
            placeholder="Digite a sua senha"
            {...register('password')}
          />
          <Input
            type="text"
            label="Confirmação de Senha"
            placeholder="Repita novamente sua senha"
            {...register('confirmPassword')}
          />
          <Button type="submit">Entrar</Button>
        </S.Form>

        <Link to="/">Já possui uma conta?</Link>
      </S.Content>
    </S.Container>
  );
};
