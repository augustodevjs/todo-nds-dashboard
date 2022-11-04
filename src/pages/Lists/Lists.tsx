import { useState } from 'react';
import { MdList } from 'react-icons/md';
import { FaTrash, FaPen } from 'react-icons/fa';
import { TableColumn } from 'react-data-table-component';
import { SideBar } from '../../shared/layout';
import { useModal } from '../../shared/hooks';
import { Button, IconButton, PageHeader, Table } from '../../shared/components';
import { AddListModal, EditListModal, RemoveListModal } from './components';

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

  const handleEdit = (list: DataRow) => {
    setSelectedList(list);
    openEditModal();
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
      selector: (list) => list.nome,
      center: true,
      sortable: true,
    },
    {
      name: 'Descrição',
      selector: (list) => list.descricacao,
      center: true,
    },
    {
      name: 'Ações',
      cell: (list) => (
        <>
          <IconButton
            icon={FaPen}
            variant="edit"
            onClick={() => handleEdit(list)}
          />
          <IconButton
            variant="remove"
            icon={FaTrash}
            onClick={() => handleRemove(list)}
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

        <EditListModal
          isOpen={isEditModalOpen}
          onRequestClose={closeEditModal}
        />

        <RemoveListModal
          name={selectedList?.nome}
          isOpen={isRemoveModalOpen}
          onRequestClose={closeRemoveModal}
        />
      </>
    </SideBar>
  );
};
