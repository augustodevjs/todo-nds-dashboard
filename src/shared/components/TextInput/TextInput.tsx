import { forwardRef } from 'react';
import { TextInputProps } from '../types';
import * as S from './styles';

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, variant, ...rest }, ref) => {
    return (
      <S.TextInputForm variant={variant}>
        <label>{label}</label>
        <input {...rest} ref={ref} />
      </S.TextInputForm>
    );
  },
);
