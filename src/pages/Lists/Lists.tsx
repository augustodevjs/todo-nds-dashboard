import { SideBar } from '../../shared/layout';
import * as S from './styles';
import DataTable, { TableColumn } from 'react-data-table-component';
import { FaTrash, FaPen } from 'react-icons/fa';

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
      <S.Container>
        <DataTable columns={columns} data={data} theme="dark" />
      </S.Container>
    </SideBar>
  );
};
