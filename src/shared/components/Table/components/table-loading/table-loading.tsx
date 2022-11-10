import * as S from './styles';
import { ClipLoader } from 'react-spinners';

export const TableLoading: React.FC = () => {
  return (
    <S.LoadingWrapper>
      <ClipLoader color="#fff" loading size={40} speedMultiplier={1} />
    </S.LoadingWrapper>
  );
};
