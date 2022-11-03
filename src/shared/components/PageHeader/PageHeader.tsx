import { PageHeaderProps } from '../types';
import * as S from './styles';

export const PageHeader: React.FC<PageHeaderProps> = ({
  description,
  title,
  action,
  icon: Icon,
}) => {
  return (
    <S.Header>
      <S.HeadingWrapper>
        <S.IconWrapper>
          <Icon />
        </S.IconWrapper>
        <div>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </div>
      </S.HeadingWrapper>

      <S.Button>{action}</S.Button>
    </S.Header>
  );
};
