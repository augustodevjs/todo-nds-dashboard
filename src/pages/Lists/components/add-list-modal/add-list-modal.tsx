import { FaPlus } from 'react-icons/fa';
import { Button, Modal, ModalProps } from '../../../../shared/components';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { ListFormInput } from '../../../../shared/domain-types';
import { ListForm } from '../list-form/list-form';

type Props = Pick<ModalProps, 'isOpen' | 'onRequestClose'>;

export const AddListModal: React.FC<Props> = ({ isOpen, onRequestClose }) => {
  const form = useForm<ListFormInput>({
    mode: 'onChange',
  });

  const submitButton = (
    <Button type="submit" form="add" variant="primary">
      Salvar
    </Button>
  );

  const onSubmit: SubmitHandler<ListFormInput> = (data) => {
    console.log('oi');
  };

  const modalConfigs: ModalProps = {
    size: 'lg',
    isOpen,
    icon: FaPlus,
    onRequestClose,
    title: 'Cadastrar da Lista',
    actions: [submitButton],
  };

  return (
    <Modal {...modalConfigs}>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <ListForm />
        </form>
      </FormProvider>
    </Modal>
  );
};
