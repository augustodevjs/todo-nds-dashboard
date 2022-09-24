import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button, Header, ImgSvg } from '../Components';
import { Input } from '../../../components';

import { ContainerForm, Section } from './styles';

type CreateUserData = {
  email: string;
  password: string;
};

const createUserFormSchema = yup
  .object({
    email: yup
      .string()
      .email('Digite um email válido')
      .required('O email é obrigatório'),
    password: yup
      .string()
      .min(6, 'A senha deve ter pelo menos 6 digitos')
      .required('A senha é obrigatória'),
  })
  .required();

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserData>({
    resolver: yupResolver(createUserFormSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: CreateUserData) => console.log(data);

  console.log('errors', errors);

  return (
    <>
      <Header text="Não possui uma conta?" />
      <Section>
        <ContainerForm onSubmit={handleSubmit(onSubmit)}>
          <ImgSvg />

          <h1>Autenticação</h1>

          <Input
            type="email"
            name="email"
            label="Email"
            placeholder="Digite o seu melhor email"
            error={errors.email?.message}
            register={register}
          />

          <Input
            type="password"
            name="password"
            label="Senha"
            placeholder="Digite sua senha"
            error={errors.password?.message}
            register={register}
          />

          <Button text="Entrar" />

          <p>
            <Link to="/signup">Não possui uma conta?</Link>
          </p>
        </ContainerForm>
      </Section>
    </>
  );
}
