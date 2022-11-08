import { TextInput } from '../../../../shared/components';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { ListFormInput } from '../../../../shared/domain-types';
import * as S from './styles';

type Props = {
  onSubmit: SubmitHandler<ListFormInput>;
  id: string;
};

export const ListForm: React.FC<Props> = ({ onSubmit, id }) => {
  const { register, handleSubmit, formState } = useFormContext<ListFormInput>();

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)} id={id}>
      <TextInput
        type="text"
        label="Nome"
        isRequired
        placeholder="Digite o nome da lista"
        error={formState.errors.name?.message}
        {...register('name')}
      />
    </S.Form>
  );
};
