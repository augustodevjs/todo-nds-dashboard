import { FaPlus } from 'react-icons/fa';
import { ClipLoader } from 'react-spinners';
import { yupResolver } from '@hookform/resolvers/yup';
import { Dispatch, SetStateAction, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Alert } from '../../../../shared/adapters';
import { ListFormInput } from '../../../../shared/domain-types';
import { AssignmentList, ListCreate } from '../../../../shared/services';
import { Button, Modal, ModalProps } from '../../../../shared/components';
import { listFormValidation } from '../../../../shared/domain-types/validators';
import { ListForm } from '../../components';
import * as S from './styles';

type Props = Pick<ModalProps, 'isOpen' | 'onRequestClose'> & {
  setData: Dispatch<SetStateAction<AssignmentList[]>>;
};

export const AddListModal: React.FC<Props> = ({
  isOpen,
  onRequestClose,
  setData,
}) => {
  const form = useForm<ListFormInput>({
    mode: 'onChange',
    resolver: yupResolver(listFormValidation),
  });

  const [isLoading, setIsLoading] = useState(false);

  const submitButton = (
    <Button
      disabled={!form.formState.isValid}
      form="add-form-input"
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

  const onSubmit: SubmitHandler<ListFormInput> = (data) => {
    setIsLoading(true);
    ListCreate(data).then((result) => {
      if (result instanceof Error) {
        setIsLoading(false);

        Alert.callError({
          title: (result as Error).name,
          description: (result as Error).message,
        });

        form.reset();
        onRequestClose?.();
        return;
      }

      setIsLoading(false);

      Alert.callSuccess({
        title: 'Item cadastrado',
        onConfirm: onRequestClose,
      });

      form.reset();

      setData((prevData) => [...prevData, result]);
    });
  };

  const modalConfigs: ModalProps = {
    size: 'sm',
    isOpen,
    icon: FaPlus,
    onRequestClose,
    title: 'Cadastro de Lista',
    actions: [submitButton],
  };

  return (
    <Modal {...modalConfigs}>
      <FormProvider {...form}>
        <ListForm id="add-form-input" onSubmit={onSubmit} />
      </FormProvider>
    </Modal>
  );
};
