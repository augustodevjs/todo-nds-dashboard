import { useFormContext } from 'react-hook-form';
import { TextAreaInput, TextInput } from '../../../../shared/components';
import { ListFormInput } from '../../../../shared/domain-types';
import * as S from './styles';

type Props = {
  onSubmit: (data: ListFormInput) => void;
  id: string;
};

export const ListForm: React.FC<Props> = ({ onSubmit, id }) => {
  const methods = useFormContext<ListFormInput>();

  return (
    <form onSubmit={methods?.handleSubmit(onSubmit)} id={id}>
      <S.Container>
        <TextInput
          variant="gray"
          label="Nome"
          placeholder="Digite o nome da lista"
          {...methods.register('name')}
        />

        <TextAreaInput
          label="Descrição"
          rows={4}
          placeholder="Escreva uma breve descrição sobre a lista"
          {...methods?.register('description')}
        />
      </S.Container>
    </form>
  );
};
