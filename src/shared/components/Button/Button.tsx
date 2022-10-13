import { ReactNode } from 'react';
import * as S from './styles';

export interface ButtonProps {
  type?: 'button' | 'reset' | 'submit';
  onClick?: () => void;
  children: ReactNode;
}

export const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <S.Button type={type} onClick={onClick}>
      {children}
    </S.Button>
  );
};
