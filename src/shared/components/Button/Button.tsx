import { ButtonProps } from '../types';
import * as S from './styles';

export const Button = ({
  children,
  onClick,
  type,
  transparent = false,
  variant,
}: ButtonProps) => {
  return (
    <S.Button
      variant={variant}
      transparent={transparent}
      type={type}
      onClick={onClick}
    >
      {children}
    </S.Button>
  );
};
