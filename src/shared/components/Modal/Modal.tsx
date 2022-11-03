import ReactModal from 'react-modal';
import { IoMdClose } from 'react-icons/io';
import { Button } from '../../components';
import { ModalProps } from '../../domain-types';
import * as S from './styles';

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  icon: Icon,
  children,
  title,
  actions,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
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
    </ReactModal>
  );
};
