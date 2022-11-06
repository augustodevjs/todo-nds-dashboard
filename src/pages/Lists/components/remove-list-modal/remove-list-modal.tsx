import { Dispatch, SetStateAction, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Alert } from '../../../../shared/adapters';
import { AssignmentList, ListRemove } from '../../../../shared/services';
import {
  ConfirmModal,
  ConfirmModalProps,
  ModalProps,
} from '../../../../shared/components';

type Props = Pick<ModalProps, 'isOpen' | 'onRequestClose'> & {
  name?: string;
  id?: number;
  setData: Dispatch<SetStateAction<AssignmentList[]>>;
};

export const RemoveListModal: React.FC<Props> = ({
  isOpen,
  onRequestClose,
  name,
  id,
  setData,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const onConfirm = () => {
    if (id) {
      setIsLoading(true);
      ListRemove(id).then((result) => {
        if (result instanceof Error) {
          setIsLoading(false);
          Alert.callError({
            title: (result as Error).name,
            description: (result as Error).message,
          });
          return;
        }

        setIsLoading(false);
        Alert.callSuccess({
          title: `Item removido com sucesso!`,
          onConfirm: onRequestClose,
        });

        setData((data) => data.filter((list) => list.id !== id));
      });
    }
  };

  const modalConfigs: ConfirmModalProps = {
    isOpen,
    onRequestClose,
    onConfirm,
    title: 'Remoção de Lista',
    icon: FaTrash,
    size: 'sm',
    message: `Tem certeza de que deseja excluir a lista ${name}?`,
    isLoading: isLoading,
  };

  return <ConfirmModal {...modalConfigs} />;
};
