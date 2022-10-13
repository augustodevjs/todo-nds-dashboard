import React, { forwardRef, InputHTMLAttributes } from 'react';
import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FC<InputProps> = forwardRef(
  ({ label, ...rest }, ref) => {
    return (
      <S.InputForm>
        <label>{label}</label>
        <input {...rest} />
      </S.InputForm>
    );
  },
);
