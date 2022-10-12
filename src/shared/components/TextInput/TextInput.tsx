import { InputHTMLAttributes } from 'react';
import * as S from './styles';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const TextInput = ({ label, ...rest }: TextInputProps) => {
  return (
    <S.TextInputForm>
      <label>{label}</label>
      <input {...rest} />
    </S.TextInputForm>
  );
};
