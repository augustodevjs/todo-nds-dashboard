import { MdList } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { FaTrash, FaPen } from 'react-icons/fa';
import { TableColumn } from 'react-data-table-component';
import { SideBar } from '../../shared/layout';
import { Button, IconButton, PageHeader, Table } from '../../shared/components';
import { useModal } from '../../shared/hooks';
import { ListFormInput } from '../../shared/domain-types';
import { AddListModal } from './components';

type DataRow = {
  nome: string;
  descricacao: string;
};

export const Lists = () => {
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

        <AddListModal isOpen={newModalOpen} onRequestClose={toogleModal} />
      </>
    </SideBar>
  );
};
