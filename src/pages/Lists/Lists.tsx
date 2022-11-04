import { useState } from 'react';
import { MdList } from 'react-icons/md';
import { FaTrash, FaPen } from 'react-icons/fa';
import { TableColumn } from 'react-data-table-component';
import { SideBar } from '../../shared/layout';
import { useModal } from '../../shared/hooks';
import { Button, IconButton, PageHeader, Table } from '../../shared/components';
import { AddListModal, EditListModal, RemoveListModal } from './components';
import { IList } from '../../shared/services';

export const Lists = () => {
  const [selectedList, setSelectedList] = useState<IList>();
  const [isAddModalOpen, openAddModal, closeAddModal] = useModal();
  const [isEditModalOpen, openEditModal, closeEditModal] = useModal();
  const [isRemoveModalOpen, openRemoveModal, closeRemoveModal] = useModal();

  const handleRemove = (list: IList) => {
    setSelectedList(list);
    openRemoveModal();
  };

  const handleEdit = (list: IList) => {
    setSelectedList(list);
    openEditModal();
  };

  const data: IList[] = [
    {
      name: 'João Augusto',
    },
    {
      name: 'Rafaela',
    },
    {
      name: 'Eliza',
    },
  ];

  const columns: TableColumn<IList>[] = [
    {
      name: 'name',
      selector: (list) => list.name,
      center: true,
      sortable: true,
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
          name={selectedList?.name}
          isOpen={isRemoveModalOpen}
          onRequestClose={closeRemoveModal}
        />
      </>
    </SideBar>
  );
};
