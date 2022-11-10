import * as S from './styles';

type CardProps = {
  stateTask: string;
  titleTask: string;
  description: string;
};

export const Card: React.FC<CardProps> = ({
  stateTask,
  titleTask,
  description,
}) => {
  return (
    <S.Container>
      <h3>{stateTask}</h3>

      <S.TitleContent>
        <S.Text>
          <h2>{titleTask}</h2>
          <p>{description}</p>
        </S.Text>
        <p>sadsa</p>
      </S.TitleContent>
    </S.Container>
  );
};
