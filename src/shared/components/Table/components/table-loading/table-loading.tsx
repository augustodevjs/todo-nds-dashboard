import * as S from './styles';
import { MoonLoader } from 'react-spinners';

export const TableLoading: React.FC = () => {
  return (
    <S.LoadingWrapper>
      <MoonLoader color="#fff" loading size={40} speedMultiplier={1} />
    </S.LoadingWrapper>
  );
};
