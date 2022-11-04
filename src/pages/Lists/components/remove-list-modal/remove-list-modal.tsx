import { FaTrash } from 'react-icons/fa';
import {
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
  const onConfirm = () => console.log('oi');

  const modalConfigs: ConfirmModalProps = {
    isOpen,
    onRequestClose,
    title: 'Remoção da Lista',
    icon: FaTrash,
    message: `Tem certeza de que deseja excluir a lista ${name}?`,
    onConfirm,
  };

  return <ConfirmModal {...modalConfigs} />;
};
