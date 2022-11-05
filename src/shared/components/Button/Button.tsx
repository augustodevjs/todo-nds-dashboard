import { ButtonProps } from '../types';
import * as S from './styles';

export const Button = ({
  children,
  onClick,
  type,
  transparent = false,
  variant,
  disabled,
  isLoading,
}: ButtonProps) => {
  return (
    <S.Button
      isLoading={isLoading}
      disabled={disabled}
      variant={variant}
      transparent={transparent}
      type={type}
      onClick={onClick}
    >
      {children}
    </S.Button>
  );
};
