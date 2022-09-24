import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Header, ImgSvg, Button } from '../Components';

import { FormContainer, Section } from './styles';
import { Input } from '../../../components';

type CreateUserData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const createUserFormSchema = yup
  .object({
    name: yup.string().required('O nome é obrigatório'),
    email: yup
      .string()
      .email('Digite um email válido')
      .required('O email é obrigatório'),
    password: yup
      .string()
      .min(6, 'A senha deve ter pelo menos 6 digitos')
      .required('A senha é obrigatória'),
    confirmPassword: yup
      .string()
      .required('Confirmar a senha é obrigatório')
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
  })
  .required();

export function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserData>({
    resolver: yupResolver(createUserFormSchema),
  });

  const onSubmit = (data: CreateUserData) => console.log(data);

  console.log('errors', errors);

  return (
    <>
      <Header text="Já possui uma conta?" />
      <Section>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <ImgSvg />

          <h1>Nova Conta</h1>

          <Input
            type="text"
            name="name"
            label="Nome"
            error={errors.name?.message}
            register={register}
          />

          <Input
            type="email"
            name="email"
            label="Email"
            error={errors.email?.message}
            register={register}
          />

          <Input
            type="password"
            name="password"
            label="Senha"
            error={errors.password?.message}
            register={register}
          />

          <Input
            type="password"
            name="confirmPassword"
            label="Confirmação de Senha"
            error={errors.confirmPassword?.message}
            register={register}
          />

          <Button text="Entrar" />

          <p>
            <Link to="/login">Não possui uma conta?</Link>
          </p>
        </FormContainer>
      </Section>
    </>
  );
}
