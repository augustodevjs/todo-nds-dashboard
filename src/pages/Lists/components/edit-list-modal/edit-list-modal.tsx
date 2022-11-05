import { FaPen } from 'react-icons/fa';
import { Button, Modal, ModalProps } from '../../../../shared/components';
import { FormProvider, useForm } from 'react-hook-form';
import { ListFormInput } from '../../../../shared/domain-types';
import { ListForm } from '../list-form/list-form';

type Props = Pick<ModalProps, 'isOpen' | 'onRequestClose'>;

export const EditListModal: React.FC<Props> = ({ isOpen, onRequestClose }) => {
  const form = useForm<ListFormInput>({
    mode: 'onChange',
  });

  const submitButton = (
    <Button type="submit" form="add" variant="primary">
      Salvar
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
        <ListForm onSubmit={onSubmit} />
      </FormProvider>
    </Modal>
  );
};
