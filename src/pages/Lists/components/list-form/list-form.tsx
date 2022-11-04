import { useFormContext } from 'react-hook-form';
import { TextAreaInput, TextInput } from '../../../../shared/components';
import { ListFormInput } from '../../../../shared/domain-types';
import * as S from './styles';

export const ListForm: React.FC = () => {
  const { register } = useFormContext<ListFormInput>();

  return (
    <S.Container>
      <TextInput
        isRequired
        variant="gray"
        label="Nome"
        placeholder="Digite o nome da lista"
        {...register('name')}
      />

      <TextAreaInput
        label="Descrição"
        rows={4}
        isRequired
        placeholder="Escreva uma breve descrição sobre a lista"
        {...register('description')}
      />
    </S.Container>
  );
};
