import { TextInput } from './TextInput';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/TextInput',
  component: TextInput,
  args: {
    placeholder: 'Type your e-mail address',
    label: 'E-mail',
    type: 'email',
  },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Base = Template.bind({});
