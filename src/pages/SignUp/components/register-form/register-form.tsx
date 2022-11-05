import { useFormContext } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';
import { Button, TextInput } from '../../../../shared/components';
import { ISignUpForm } from '../../../../shared/domain-types';

import * as S from './styles';

type Props = {
  isLoading: boolean;
  onSubmit: (data: ISignUpForm) => void;
};

export const RegisterForm: React.FC<Props> = ({ isLoading, onSubmit }) => {
  const { handleSubmit, formState, register } = useFormContext<ISignUpForm>();

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <h2>Nova Conta</h2>
      <TextInput
        type="text"
        label="Nome"
        isRequired
        error={formState.errors.name?.message}
        placeholder="Digite o seu nome"
        {...register('name')}
      />
      <TextInput
        type="email"
        label="Email"
        isRequired
        error={formState.errors.email?.message}
        placeholder="Digite o seu email"
        {...register('email')}
      />
      <TextInput
        type="password"
        label="Senha"
        isRequired
        error={formState.errors.password?.message}
        placeholder="Digite a sua senha"
        {...register('password')}
      />
      <TextInput
        type="password"
        label="Confirmação de Senha"
        isRequired
        error={formState.errors.passwordConfirm?.message}
        placeholder="Repita novamente sua senha"
        {...register('passwordConfirm')}
      />
      <Button type="submit" disabled={!formState.isValid}>
        {isLoading ? (
          <S.ContainerLoading>
            <ClipLoader color="#fff" loading size={18} speedMultiplier={1} />
          </S.ContainerLoading>
        ) : (
          'Cadastrar'
        )}
      </Button>
    </S.Form>
  );
};
