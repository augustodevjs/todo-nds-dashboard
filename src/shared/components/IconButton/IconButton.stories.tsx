import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FaPlus } from 'react-icons/fa';
import { IconButton } from './IconButton';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  args: {
    icon: FaPlus,
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Base = Template.bind({});
