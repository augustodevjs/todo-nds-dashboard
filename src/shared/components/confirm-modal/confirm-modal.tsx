import { IoMdClose } from 'react-icons/io';
import { Button, ConfirmModalProps } from '../../components';
import * as S from './styles';

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onRequestClose,
  icon: Icon,
  message,
  title,
  actions,
  size,
}) => {
  return (
    <S.Modal
      size={size ?? ''}
      isOpen={isOpen ?? false}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <S.Header>
        <S.Title>
          {Icon && <Icon />}
          {title}
        </S.Title>
        <IoMdClose onClick={onRequestClose} />
      </S.Header>

      <p>{message}</p>

      <S.ButtonGroup>
        <Button variant="danger" onClick={onRequestClose}>
          Fechar
        </Button>
        {actions?.map((action) => action)}
      </S.ButtonGroup>
    </S.Modal>
  );
};
