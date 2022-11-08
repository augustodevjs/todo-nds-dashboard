import { useState } from 'react';
import { FaPen } from 'react-icons/fa';
import { ClipLoader } from 'react-spinners';
import { FormProvider, useForm } from 'react-hook-form';
import { ListFormInput } from '../../../../shared/domain-types';
import { Button, Modal, ModalProps } from '../../../../shared/components';
import { ListForm } from '../../components';

type Props = Pick<ModalProps, 'isOpen' | 'onRequestClose'> & {
  id?: number;
};

import * as S from './styles';

export const EditListModal: React.FC<Props> = ({
  isOpen,
  onRequestClose,
  id,
}) => {
  const form = useForm<ListFormInput>({
    mode: 'onChange',
  });

  const [isLoading, setIsLoading] = useState(false);

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
    console.log(data);
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
