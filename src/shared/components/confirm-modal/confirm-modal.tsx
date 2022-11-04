import { Button, ConfirmModalProps, ModalProps } from '../../components';
import * as S from './styles';

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  message,
  onConfirm,
  ...rest
}) => {
  const confirmButton = (
    <Button variant="primary" onClick={onConfirm}>
      Confirmar
    </Button>
  );

  const defaultConfigs: ModalProps = {
    size: 'sm',
    actions: [confirmButton],
  };

  return (
    <S.ModalConfirm {...defaultConfigs} {...rest}>
      <p>{message}</p>
    </S.ModalConfirm>
  );
};
