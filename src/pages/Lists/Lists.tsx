import { useState } from 'react';
import { MdList } from 'react-icons/md';
import { FaTrash, FaPen } from 'react-icons/fa';
import { TableColumn } from 'react-data-table-component';
import { SideBar } from '../../shared/layout';
import { useModal } from '../../shared/hooks';
import { AddListModal, RemoveListModal } from './components';
import { Button, IconButton, PageHeader, Table } from '../../shared/components';

type DataRow = {
  nome: string;
  descricacao: string;
};

export const Lists = () => {
  const [selectedList, setSelectedList] = useState<DataRow>();
  const [isAddModalOpen, openAddModal, closeAddModal] = useModal();
  const [isEditModalOpen, openEditModal, closeEditModal] = useModal();
  const [isRemoveModalOpen, openRemoveModal, closeRemoveModal] = useModal();

  const handleRemove = (list: DataRow) => {
    setSelectedList(list);
    openRemoveModal();
  };

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
            onClick={() => console.log('oi')}
          />
          <IconButton
            variant="remove"
            icon={FaTrash}
            onClick={() => handleRemove(row)}
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
            <Button transparent onClick={openAddModal}>
              Novo
            </Button>
          }
        />

        <Table columns={columns} data={data} />

        <AddListModal isOpen={isAddModalOpen} onRequestClose={closeAddModal} />

        <RemoveListModal
          name={selectedList?.nome}
          isOpen={isRemoveModalOpen}
          onRequestClose={closeRemoveModal}
        />
      </>
    </SideBar>
  );
};
