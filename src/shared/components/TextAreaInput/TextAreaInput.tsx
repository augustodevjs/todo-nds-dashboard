import { forwardRef, TextareaHTMLAttributes } from 'react';
import * as S from './styles';

interface TextAreaInputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const TextAreaInput = forwardRef<
  HTMLTextAreaElement,
  TextAreaInputProps
>(({ label, ...rest }, ref) => {
  return (
    <S.TextAreaInputForm>
      <label>{label}</label>
      <textarea rows={4} {...rest} ref={ref} />
    </S.TextAreaInputForm>
  );
});
