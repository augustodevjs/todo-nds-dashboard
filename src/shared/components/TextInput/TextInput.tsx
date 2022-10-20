import { forwardRef, memo } from 'react';
import { TextInputProps } from '../../domain-types';
import * as S from './styles';

const TextInputWrapper = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, ...rest }, ref) => {
    return (
      <S.TextInputForm>
        <label>{label}</label>
        <input {...rest} {...rest} ref={ref} />
      </S.TextInputForm>
    );
  },
);

export const TextInput = memo(TextInputWrapper);
