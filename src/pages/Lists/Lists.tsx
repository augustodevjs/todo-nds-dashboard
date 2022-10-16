import { SideBar } from '../../shared/layout';
import DataTable, { TableColumn } from 'react-data-table-component';
import { FaTrash, FaPen } from 'react-icons/fa';
import { Button, PageHeader } from '../../shared/components';
import { MdInbox, MdList } from 'react-icons/md';

type DataRow = {
  nome: string;
  descricacao: string;
};

export const Lists = () => {
  const data: DataRow[] = [
    {
      nome: 'João Augusto',
      descricacao: 'lorem ipsum',
    },
    {
      nome: 'Rafaela',
      descricacao: 'lorem ipsum',
    },
    {
      nome: 'Biejam',
      descricacao: 'lorem ipsum',
    },

    {
      nome: 'Pedro',
      descricacao: 'lorem ipsum',
    },
    {
      nome: 'Eliza',
      descricacao: 'lorem ipsum',
    },
  ];

  const columns: TableColumn<DataRow>[] = [
    {
      name: 'Nome',
      selector: (row) => row.nome,
      center: true,
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
          <FaPen />
          <FaTrash />
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
          action={<Button transparent>Novo</Button>}
        />
        <DataTable columns={columns} data={data} theme="dark" />
      </>
    </SideBar>
  );
};
