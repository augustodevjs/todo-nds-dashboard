import { FaTrash } from 'react-icons/fa';
import {
  Button,
  ConfirmModal,
  ConfirmModalProps,
  ModalProps,
} from '../../../../shared/components';

type Props = Pick<ModalProps, 'isOpen' | 'onRequestClose'> & {
  name?: string;
};

export const RemoveListModal: React.FC<Props> = ({
  isOpen,
  onRequestClose,
  name,
}) => {
  const submitButton = (
    <Button type="submit" form="add" variant="primary">
      Confirmar
    </Button>
  );

  const modalConfigs: ConfirmModalProps = {
    isOpen,
    onRequestClose,
    title: 'Remoção de Lista',
    icon: FaTrash,
    size: 'sm',
    message: `Tem certeza de que deseja excluir a lista ${name}?`,
    onConfirm: () => console.log('oi'),
    actions: [submitButton],
  };

  return <ConfirmModal {...modalConfigs} />;
};
