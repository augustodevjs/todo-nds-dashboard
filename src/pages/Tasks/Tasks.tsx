import { MdInbox } from 'react-icons/md';
import { SideBar } from '../../shared/layout';
import { Button, Card, PageHeader } from '../../shared/components';
import * as S from './styles';

export const Tasks = () => {
  return (
    <SideBar>
      <PageHeader
        title="Tarefas"
        description="Página de gerenciamento das tarefas"
        icon={MdInbox}
        action={<Button>Novo</Button>}
      />

      <S.Container>
        <Card
          stateTask="Em Atraso"
          titleTask="Título da Task"
          description="Descrição da task"
        />

        <Card
          stateTask="Em Atraso"
          titleTask="Título da Task"
          description="Descrição da task"
        />

        <Card
          stateTask="Em Atraso"
          titleTask="Título da Task"
          description="Descrição da task"
        />

        <Card
          stateTask="Em Atraso"
          titleTask="Título da Task"
          description="Descrição da task"
        />

        <Card
          stateTask="Em Atraso"
          titleTask="Título da Task"
          description="Descrição da task"
        />

        <Card
          stateTask="Em Atraso"
          titleTask="Título da Task"
          description="Descrição da task"
        />

        <Card
          stateTask="Em Atraso"
          titleTask="Título da Task"
          description="Descrição da task"
        />

        <Card
          stateTask="Em Atraso"
          titleTask="Título da Task"
          description="Descrição da task"
        />

        <Card
          stateTask="Em Atraso"
          titleTask="Título da Task"
          description="Descrição da task"
        />

        <Card
          stateTask="Em Atraso"
          titleTask="Título da Task"
          description="Descrição da task"
        />

        <Card
          stateTask="Em Atraso"
          titleTask="Título da Task"
          description="Descrição da task"
        />

        <Card
          stateTask="Em Atraso"
          titleTask="Título da Task"
          description="Descrição da task"
        />

        <Card
          stateTask="Em Atraso"
          titleTask="Título da Task"
          description="Descrição da task"
        />

        <Card
          stateTask="Em Atraso"
          titleTask="Título da Task"
          description="Descrição da task"
        />

        <Card
          stateTask="Em Atraso"
          titleTask="Título da Task"
          description="Descrição da task"
        />

        <Card
          stateTask="Em Atraso"
          titleTask="Título da Task"
          description="Descrição da task"
        />

        <Card
          stateTask="Em Atraso"
          titleTask="Título da Task"
          description="Descrição da task"
        />

        <Card
          stateTask="Em Atraso"
          titleTask="Título da Task"
          description="Descrição da task"
        />

        <Card
          stateTask="Em Atraso"
          titleTask="Título da Task"
          description="Descrição da task"
        />

        <Card
          stateTask="Em Atraso"
          titleTask="Título da Task"
          description="Descrição da task"
        />
      </S.Container>
    </SideBar>
  );
};
