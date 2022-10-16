import { TextInputProps } from '../../domain-types';
import * as S from './styles';

export const TextInput = ({ label, ...rest }: TextInputProps) => {
  return (
    <S.TextInputForm>
      <label>{label}</label>
      <input {...rest} />
    </S.TextInputForm>
  );
};
