import { MdList } from 'react-icons/md';
import { TableColumn } from 'react-data-table-component';
import { FaTrash, FaPen, FaPlus } from 'react-icons/fa';
import { SideBar } from '../../shared/layout';
import {
  Button,
  IconButton,
  Modal,
  ModalProps,
  PageHeader,
  Table,
  TextInput,
} from '../../shared/components';
import { useModal } from '../../shared/hooks';
import { FormProvider, useForm } from 'react-hook-form';
import { ListFormInput } from '../../shared/domain-types';

type DataRow = {
  nome: string;
  descricacao: string;
};

export const Lists = () => {
  const form = useForm<ListFormInput>({
    mode: 'onChange',
  });
  const { newModalOpen, toogleModal } = useModal();

  const data: DataRow[] = [
    {
      nome: 'João Augusto',
      descricacao:
        'Realizar a primeira task da sprint 1 e fazer refatoração do código',
    },
    {
      nome: 'João Augusto',
      descricacao:
        'Realizar a primeira task da sprint 1 e fazer refatoração do código',
    },
    {
      nome: 'João Augusto',
      descricacao:
        'Realizar a primeira task da sprint 1 e fazer refatoração do código',
    },
    {
      nome: 'João Augusto',
      descricacao:
        'Realizar a primeira task da sprint 1 e fazer refatoração do código',
    },
    {
      nome: 'João Augusto',
      descricacao:
        'Realizar a primeira task da sprint 1 e fazer refatoração do código ',
    },
    {
      nome: 'João Augusto',
      descricacao:
        'Realizar a primeira task da sprint 1 e fazer refatoração do código ',
    },
    {
      nome: 'João Augusto',
      descricacao:
        'Realizar a primeira task da sprint 1 e fazer refatoração do código ',
    },
    {
      nome: 'Rafaela',
      descricacao:
        'Realizar a primeira task da sprint 1 e fazer refatoração do código ',
    },
    {
      nome: 'Biejam',
      descricacao:
        'Realizar a primeira task da sprint 1 e fazer refatoração do código ',
    },

    {
      nome: 'Pedro',
      descricacao:
        'Realizar a primeira task da sprint 1 e fazer refatoração do código ',
    },
    {
      nome: 'Eliza',
      descricacao:
        'Realizar a primeira task da sprint 1 e fazer refatoração do código ',
    },
  ];

  const columns: TableColumn<DataRow>[] = [
    {
      name: 'Nome',
      selector: (row) => row.nome,
      center: true,
      sortable: true,
    },
    {
      name: 'Descrição',
      selector: (row) => row.descricacao,
      center: true,
    },
    {
      name: 'Ações',
      cell: (row) => (
        <>
          <IconButton
            icon={FaPen}
            variant="edit"
            onClick={() => alert('Editar')}
          />
          <IconButton
            variant="remove"
            icon={FaTrash}
            onClick={() => alert('Remover')}
          />
        </>
      ),
      center: true,
    },
  ];

  const submitButton = <Button variant="primary">Salvar</Button>;

  const modalConfigs: ModalProps = {
    isOpen: newModalOpen,
    title: 'Cadastrar da Lista',
    actions: [submitButton],
    icon: FaPlus,
    onRequestClose: toogleModal,
  };

  return (
    <SideBar>
      <>
        <PageHeader
          title="Listas"
          description="Página de gerenciamento das listas"
          icon={MdList}
          action={
            <Button transparent onClick={toogleModal}>
              Novo
            </Button>
          }
        />

        <Table columns={columns} data={data} />

        <FormProvider {...form}>
          <Modal {...modalConfigs}></Modal>
        </FormProvider>
      </>
    </SideBar>
  );
};
