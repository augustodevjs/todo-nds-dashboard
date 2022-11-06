import { forwardRef } from 'react';
import { TextInputProps } from '../types';
import * as S from './styles';

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, variant, isRequired, error, ...rest }, ref) => {
    return (
      <S.TextInputForm error={error} isRequired={isRequired} variant={variant}>
        <label>{label}</label>
        <input {...rest} ref={ref} />
        {error !== undefined && <span>{error}</span>}
      </S.TextInputForm>
    );
  },
);
