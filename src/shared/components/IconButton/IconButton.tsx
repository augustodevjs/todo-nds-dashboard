import { IconButtonProps } from '../../domain-types';
import * as S from './styles';

export const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  onClick,
  variant,
}) => {
  return (
    <S.ButtonWrapper variant={variant} onClick={onClick}>
      <Icon />
    </S.ButtonWrapper>
  );
};
