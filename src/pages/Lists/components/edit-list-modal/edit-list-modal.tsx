import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { FaPen } from 'react-icons/fa';
import { ClipLoader } from 'react-spinners';
import { FormProvider, useForm } from 'react-hook-form';
import {
  AssignmentList,
  listGetById,
  ListUpdate,
} from '../../../../shared/services';
import { ListFormInput } from '../../../../shared/domain-types';
import { Button, Modal, ModalProps } from '../../../../shared/components';
import { ListForm } from '../../components';

type Props = Pick<ModalProps, 'isOpen' | 'onRequestClose'> & {
  id?: number;
  setData: Dispatch<SetStateAction<AssignmentList[]>>;
};

import * as S from './styles';
import { Alert } from '../../../../shared/adapters';

export const EditListModal: React.FC<Props> = ({
  isOpen,
  onRequestClose,
  setData,
  id,
}) => {
  const form = useForm<ListFormInput>({
    mode: 'onChange',
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id) {
      listGetById(id).then((result) => {
        if (result instanceof Error) {
          Alert.callError({
            title: (result as Error).name,
            description: (result as Error).message,
          });
          return;
        }

        form.reset(result);
      });
    }
  }, [id]);

  const submitButton = (
    <Button
      type="submit"
      disabled={!form.formState.isValid}
      form="edit-list-form"
      variant="primary"
    >
      {isLoading ? (
        <S.ContainerLoading>
          <ClipLoader color="#fff" loading size={18} speedMultiplier={1} />
        </S.ContainerLoading>
      ) : (
        'Salvar'
      )}
    </Button>
  );

  const onSubmit = (data: ListFormInput) => {
    if (id) {
      setIsLoading(true);

      ListUpdate(data, id).then((result) => {
        if (result instanceof Error) {
          setIsLoading(false);

          Alert.callError({
            title: (result as Error).name,
            description: (result as Error).message,
          });

          onRequestClose?.();
          return;
        }

        setIsLoading(false);

        Alert.callSuccess({
          title: 'Item atualizado',
          onConfirm: onRequestClose,
        });

        setData((prevData) =>
          prevData.map((list) =>
            list.id === result.id ? { ...result } : list,
          ),
        );
      });
    }
  };

  const modalConfigs: ModalProps = {
    size: 'sm',
    isOpen,
    icon: FaPen,
    onRequestClose,
    title: 'Edição de Lista',
    actions: [submitButton],
  };

  return (
    <Modal {...modalConfigs}>
      <FormProvider {...form}>
        <ListForm id="edit-list-form" onSubmit={onSubmit} />
      </FormProvider>
    </Modal>
  );
};
