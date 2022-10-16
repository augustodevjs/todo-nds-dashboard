import { ButtonProps } from '../../domain-types';
import * as S from './styles';

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
