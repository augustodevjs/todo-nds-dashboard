import { useFormContext } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';
import { ISignInForm } from '../../../../shared/domain-types';
import { Button, TextInput } from '../../../../shared/components';
import * as S from './styles';

type Props = {
  isLoading: boolean;
  onSubmit: (data: ISignInForm) => void;
};

export const FormLogin: React.FC<Props> = ({ isLoading, onSubmit }) => {
  const { handleSubmit, register, formState } = useFormContext<ISignInForm>();

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <h2>Autenticação</h2>
      <TextInput
        type="text"
        label="Email"
        placeholder="Digite o seu email"
        isRequired
        error={formState.errors.email?.message}
        {...register('email')}
      />
      <TextInput
        type="password"
        label="Senha"
        placeholder="Digite a sua senha"
        isRequired
        error={formState.errors.password?.message}
        {...register('password')}
      />
      <Button type="submit" disabled={!formState.isValid}>
        {isLoading ? (
          <S.ContainerLoading>
            <ClipLoader color="#fff" loading size={18} speedMultiplier={1} />
          </S.ContainerLoading>
        ) : (
          'Entrar'
        )}
      </Button>
    </S.Form>
  );
};
