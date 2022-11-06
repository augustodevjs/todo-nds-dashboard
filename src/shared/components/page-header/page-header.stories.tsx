import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MdList, MdInbox } from 'react-icons/md';
import { Button, PageHeader } from '../../components';

export default {
  title: 'Components/PageHeader',
  component: PageHeader,
  argTypes: {
    icon: {
      options: ['MdList', 'MdInbox'],
      mapping: { MdList, MdInbox },
      control: {
        type: 'select',
      },
    },
    action: {
      control: false,
    },
  },
  args: {
    title: 'Listas',
    description: 'Página de gerenciamento das listas',
    icon: MdList,
  },
} as ComponentMeta<typeof PageHeader>;

const Template: ComponentStory<typeof PageHeader> = (args) => (
  <div style={{ width: '75vw' }}>
    <PageHeader {...args} />
  </div>
);

export const Base = Template.bind({});

Base.args = {};

export const WithActions = Template.bind({});

WithActions.args = {
  action: <Button>Action</Button>,
};
