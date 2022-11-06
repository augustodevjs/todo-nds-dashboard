import { FaPen } from 'react-icons/fa';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, Modal, ModalProps } from '../../../../shared/components';
import { ListFormInput } from '../../../../shared/domain-types';
import { ListForm } from '../list-form/list-form';

type Props = Pick<ModalProps, 'isOpen' | 'onRequestClose'> & {
  id?: number;
};

export const EditListModal: React.FC<Props> = ({
  isOpen,
  onRequestClose,
  id,
}) => {
  const form = useForm<ListFormInput>({
    mode: 'onChange',
  });

  const submitButton = (
    <Button type="submit" form="edit-list-form" variant="primary">
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
        <ListForm id="edit-list-form" onSubmit={onSubmit} />
      </FormProvider>
    </Modal>
  );
};
