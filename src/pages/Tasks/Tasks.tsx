import { MdInbox } from 'react-icons/md';
import { Button, PageHeader } from '../../shared/components';
import { SideBar } from '../../shared/layout';

export const Tasks = () => {
  return (
    <SideBar>
      <PageHeader
        title="Tarefas"
        description="Página de gerenciamento das tarefas"
        icon={MdInbox}
        action={<Button transparent>Novo</Button>}
      />
    </SideBar>
  );
};
