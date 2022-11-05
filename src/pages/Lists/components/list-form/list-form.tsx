import { useFormContext } from 'react-hook-form';
import { TextInput } from '../../../../shared/components';
import { ListFormInput } from '../../../../shared/domain-types';
import * as S from './styles';

type Props = {
  onSubmit: (data: ListFormInput) => void;
};

export const ListForm: React.FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit, formState } = useFormContext<ListFormInput>();

  return (
    <S.Container>
      <form onSubmit={handleSubmit(onSubmit)}>
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
