import { ReactNode } from 'react';
import * as S from './styles';

export interface ButtonProps {
  type?: 'button' | 'reset' | 'submit';
  onClick?: () => void;
  children: ReactNode;
  transparent?: boolean;
}

export const Button = ({
  children,
  onClick,
  type,
  transparent = false,
}: ButtonProps) => {
  return (
    <S.Button transparent={transparent} type={type} onClick={onClick}>
      {children}
    </S.Button>
  );
};
