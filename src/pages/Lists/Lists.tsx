import { SideBar } from '../../shared/layout';
import DataTable, {
  TableColumn,
  createTheme,
} from 'react-data-table-component';
import { FaTrash, FaPen } from 'react-icons/fa';
import { Button, IconButton, PageHeader } from '../../shared/components';
import { MdList } from 'react-icons/md';

type DataRow = {
  nome: string;
  descricacao: string;
};

createTheme('dark', {
  text: {
    primary: '#C4C4CC',
  },
  background: {
    default: '#29292E',
  },
  sortFocus: {
    default: '#2aa198',
  },
});

export const Lists = () => {
  const data: DataRow[] = [
    {
      nome: 'João Augusto',
      descricacao: 'lorem ipsum',
    },
    {
      nome: 'João Augusto',
      descricacao: 'lorem ipsum',
    },
    {
      nome: 'João Augusto',
      descricacao: 'lorem ipsum',
    },
    {
      nome: 'João Augusto',
      descricacao: 'lorem ipsum',
    },
    {
      nome: 'João Augusto',
      descricacao: 'lorem ipsum',
    },
    {
      nome: 'João Augusto',
      descricacao: 'lorem ipsum',
    },
    {
      nome: 'João Augusto',
      descricacao: 'lorem ipsum',
    },
    {
      nome: 'João Augusto',
      descricacao: 'lorem ipsum',
    },
    {
      nome: 'João Augusto',
      descricacao: 'lorem ipsum',
    },
    {
      nome: 'João Augusto',
      descricacao: 'lorem ipsum',
    },
    {
      nome: 'João Augusto',
      descricacao: 'lorem ipsum',
    },
    {
      nome: 'João Augusto',
      descricacao: 'lorem ipsum',
    },
    {
      nome: 'João Augusto',
      descricacao: 'lorem ipsum',
    },
    {
      nome: 'João Augusto',
      descricacao: 'lorem ipsum',
    },
    {
      nome: 'João Augusto',
      descricacao: 'lorem ipsum',
    },
    {
      nome: 'João Augusto',
      descricacao: 'lorem ipsum',
    },
    {
      nome: 'João Augusto',
      descricacao: 'lorem ipsum',
    },
    {
      nome: 'João Augusto',
      descricacao: 'lorem ipsum',
    },
    {
      nome: 'João Augusto',
      descricacao: 'lorem ipsum',
    },
    {
      nome: 'João Augusto',
      descricacao: 'lorem ipsum',
    },
    {
      nome: 'João Augusto',
      descricacao: 'lorem ipsum',
    },
    {
      nome: 'João Augusto',
      descricacao: 'lorem ipsum',
    },
    {
      nome: 'João Augusto',
      descricacao: 'lorem ipsum',
    },
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
          <IconButton icon={FaPen} onClick={() => console.log('Editar')} />
          <IconButton icon={FaTrash} onClick={() => console.log('Remover')} />
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
        <DataTable columns={columns} data={data} theme="dark" pagination />
      </>
    </SideBar>
  );
};
