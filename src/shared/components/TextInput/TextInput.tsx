import { forwardRef } from 'react';
import { TextInputProps } from '../../domain-types';
import * as S from './styles';

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, ...rest }, ref) => {
    return (
      <S.TextInputForm>
        <label>{label}</label>
        <input {...rest} ref={ref} />
      </S.TextInputForm>
    );
  },
);
