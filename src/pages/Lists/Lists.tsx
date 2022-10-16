import { SideBar } from '../../shared/layout';
import { TableColumn, createTheme } from 'react-data-table-component';
import { FaTrash, FaPen } from 'react-icons/fa';
import { Button, IconButton, PageHeader, Table } from '../../shared/components';
import { MdList } from 'react-icons/md';

type DataRow = {
  nome: string;
  descricacao: string;
  data: string;
};

export const Lists = () => {
  const data: DataRow[] = [
    {
      nome: 'João Augusto',
      descricacao:
        'Realizar a primeira task da sprint 1 e fazer refatoração do código',
      data: '20/20/2022',
    },
    {
      nome: 'João Augusto',
      descricacao:
        'Realizar a primeira task da sprint 1 e fazer refatoração do código',
      data: '20/20/2022',
    },
    {
      nome: 'João Augusto',
      descricacao:
        'Realizar a primeira task da sprint 1 e fazer refatoração do código',
      data: '20/20/2022',
    },
    {
      nome: 'João Augusto',
      descricacao:
        'Realizar a primeira task da sprint 1 e fazer refatoração do código',
      data: '20/20/2022',
    },
    {
      nome: 'João Augusto',
      descricacao:
        'Realizar a primeira task da sprint 1 e fazer refatoração do código ',
      data: '20/20/2022',
    },
    {
      nome: 'João Augusto',
      descricacao:
        'Realizar a primeira task da sprint 1 e fazer refatoração do código ',
      data: '20/20/2022',
    },
    {
      nome: 'João Augusto',
      descricacao:
        'Realizar a primeira task da sprint 1 e fazer refatoração do código ',
      data: '20/20/2022',
    },
    {
      nome: 'Rafaela',
      descricacao:
        'Realizar a primeira task da sprint 1 e fazer refatoração do código ',
      data: '20/20/2022',
    },
    {
      nome: 'Biejam',
      descricacao:
        'Realizar a primeira task da sprint 1 e fazer refatoração do código ',
      data: '20/20/2022',
    },

    {
      nome: 'Pedro',
      descricacao:
        'Realizar a primeira task da sprint 1 e fazer refatoração do código ',
      data: '20/20/2022',
    },
    {
      nome: 'Eliza',
      descricacao:
        'Realizar a primeira task da sprint 1 e fazer refatoração do código ',
      data: '20/20/2022',
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
      name: 'Data',
      selector: (row) => row.data,
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
          action={<Button transparent>Novo</Button>}
        />

        <Table columns={columns} data={data} />
      </>
    </SideBar>
  );
};
