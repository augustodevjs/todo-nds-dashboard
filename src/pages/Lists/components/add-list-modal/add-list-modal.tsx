import { FaPlus } from 'react-icons/fa';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ListFormInput } from '../../../../shared/domain-types';
import { Button, Modal, ModalProps } from '../../../../shared/components';
import { listFormValidation } from '../../../../shared/domain-types/validators';

import { ListForm } from '../../components';

type Props = Pick<ModalProps, 'isOpen' | 'onRequestClose'>;

export const AddListModal: React.FC<Props> = ({ isOpen, onRequestClose }) => {
  const form = useForm<ListFormInput>({
    mode: 'onChange',
    resolver: yupResolver(listFormValidation),
  });

  const submitButton = (
    <Button type="submit" form="add" variant="primary">
      Salvar
    </Button>
  );

  const onSubmit: SubmitHandler<ListFormInput> = (data) => {
    console.log(data);
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
        <ListForm id="add" onSubmit={onSubmit} />
      </FormProvider>
    </Modal>
  );
};
