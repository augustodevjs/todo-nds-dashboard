import { IconButtonProps } from '../../domain-types';
import * as S from './styles';

export const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <S.ButtonWrapper onClick={onClick}>
      <Icon />
    </S.ButtonWrapper>
  );
};
