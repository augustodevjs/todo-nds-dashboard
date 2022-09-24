import { InputHTMLAttributes } from 'react';
import { Form, FormControlProps } from 'react-bootstrap';
import { UseFormRegister } from 'react-hook-form';
import { Div, InputForm, Label, Span } from './styles';

type Props = FormControlProps &
  InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
    register?: UseFormRegister<any>;
  };

export function Input({ name = '', register, label, error, ...rest }: Props) {
  return (
    <Div>
      <Form.Group>
        {label && <Label>{label}</Label>}
        <InputForm {...register?.(name)} {...rest}></InputForm>
        {error && <Span>{error}</Span>}
      </Form.Group>
    </Div>
  );
}
