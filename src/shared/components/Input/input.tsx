import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import * as S from './styles';
import {
  FieldValues,
  UseFormRegister,
  // useForm, // don't need this import
} from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = ({ label, ...rest }: InputProps) => {
  return (
    <S.InputForm>
      <label>{label}</label>
      <input {...rest} />
    </S.InputForm>
  );
};
