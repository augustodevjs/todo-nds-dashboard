import { MdInbox } from 'react-icons/md';
import { SideBar } from '../../shared/layout';
import { Button, PageHeader } from '../../shared/components';

export const Tasks = () => {
  return (
    <SideBar>
      <PageHeader
        title="Tarefas"
        description="Página de gerenciamento das tarefas"
        icon={MdInbox}
        action={<Button>Novo</Button>}
      />
    </SideBar>
  );
};
