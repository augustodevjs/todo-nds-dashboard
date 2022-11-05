import { useEffect, useState } from 'react';
import { MdList } from 'react-icons/md';
import { FaTrash, FaPen } from 'react-icons/fa';
import { TableColumn } from 'react-data-table-component';
import { SideBar } from '../../shared/layout';
import { useModal } from '../../shared/hooks';
import { Button, IconButton, PageHeader, Table } from '../../shared/components';
import { AddListModal, EditListModal, RemoveListModal } from './components';
import { AssignmentList, ListGetAll } from '../../shared/services';
import { Alert } from '../../shared/adapters';

export const Lists = () => {
  const [data, setData] = useState<AssignmentList[]>([]);
  const [selectedList, setSelectedList] = useState<AssignmentList>();

  const [isAddModalOpen, openAddModal, closeAddModal] = useModal();
  const [isEditModalOpen, openEditModal, closeEditModal] = useModal();
  const [isRemoveModalOpen, openRemoveModal, closeRemoveModal] = useModal();

  const handleRemove = (list: AssignmentList) => {
    setSelectedList(list);
    openRemoveModal();
  };

  const handleEdit = (list: AssignmentList) => {
    setSelectedList(list);
    openEditModal();
  };

  useEffect(() => {
    ListGetAll().then((result) => {
      if (result instanceof Error) {
        Alert.callError({
          title: (result as Error).name,
          description: (result as Error).message,
        });
        return;
      } else {
        Alert.callSuccess({
          title: 'Preparação Cadastrada',
        });
        setData(result);
      }
    });
  }, []);

  const columns: TableColumn<AssignmentList>[] = [
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
