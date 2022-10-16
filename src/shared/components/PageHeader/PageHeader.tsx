import { ComponentType, ReactNode } from 'react';
import * as S from './styles';

type PageHeaderProps = {
  title: string;
  description: string;
  icon: ComponentType;
  action?: ReactNode;
};

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
