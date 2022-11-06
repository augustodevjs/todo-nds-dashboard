import { SubmitHandler, useFormContext } from 'react-hook-form';
import { TextInput } from '../../../../shared/components';
import { ListFormInput } from '../../../../shared/domain-types';
import * as S from './styles';

type Props = {
  onSubmit: SubmitHandler<ListFormInput>;
  id: string;
};

export const ListForm: React.FC<Props> = ({ onSubmit, ...rest }) => {
  const { register, handleSubmit, formState } = useFormContext<ListFormInput>();

  return (
    <S.Container>
      <form {...rest} onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          type="text"
          label="Nome"
          isRequired
          placeholder="Digite o nome da lista"
          error={formState.errors.name?.message}
          {...register('name')}
        />
      </form>
    </S.Container>
  );
};
