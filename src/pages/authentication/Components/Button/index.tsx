import { ButtonForm } from './styles';

type ButtonProps = {
  text: string;
};

export function Button({ text }: ButtonProps) {
  return <ButtonForm type="submit">{text}</ButtonForm>;
}
