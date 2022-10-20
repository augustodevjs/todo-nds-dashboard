import * as S from './styles';

type ModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export const Modal: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {
  return (
    <S.Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <h1>Olá jovem macembo!</h1>
    </S.Modal>
  );
};
