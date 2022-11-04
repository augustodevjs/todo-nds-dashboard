import { IoMdClose } from 'react-icons/io';
import { Button, ModalProps } from '../../components';
import * as S from './styles';

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  icon: Icon,
  children,
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

      {children}

      <S.ButtonGroup>
        <Button variant="danger" onClick={onRequestClose}>
          Fechar
        </Button>
        {actions?.map((action) => action)}
      </S.ButtonGroup>
    </S.Modal>
  );
};
