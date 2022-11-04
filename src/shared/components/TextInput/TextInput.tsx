import { forwardRef } from 'react';
import { TextInputProps } from '../types';
import * as S from './styles';

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, variant, isRequired, ...rest }, ref) => {
    return (
      <S.TextInputForm isRequired={isRequired} variant={variant}>
        <label>{label}</label>
        <input {...rest} ref={ref} />
      </S.TextInputForm>
    );
  },
);
