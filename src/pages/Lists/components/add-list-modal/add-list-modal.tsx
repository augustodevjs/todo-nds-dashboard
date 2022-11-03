import { FaPlus } from 'react-icons/fa';
import { ListForm } from '../list-form/list-form';
import { Button, Modal, ModalProps } from '../../../../shared/components';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { ListFormInput } from '../../../../shared/domain-types';

type Props = Pick<ModalProps, 'isOpen' | 'onRequestClose'>;

export const AddListModal: React.FC<Props> = ({ isOpen, onRequestClose }) => {
  const form = useForm<ListFormInput>();

  const onSubmit: SubmitHandler<ListFormInput> = (data) => console.log(data);

  const submitButton = (
    <>
      <Button id="add-list" variant="primary">
        Salvar
      </Button>
    </>
  );

  const modalConfigs: ModalProps = {
    isOpen,
    icon: FaPlus,
    onRequestClose,
    title: 'Cadastrar da Lista',
    actions: [submitButton],
  };

  return (
    <Modal {...modalConfigs}>
      <FormProvider {...form}>
        <ListForm id="add-list" onSubmit={onSubmit} />
      </FormProvider>
    </Modal>
  );
};
