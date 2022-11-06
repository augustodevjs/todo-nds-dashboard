import { TextInput } from './text-input';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: {
    error: {
      control: {
        type: 'text',
      },
    },
    variant: {
      control: false,
    },
  },
  args: {
    placeholder: 'Digite aqui',
    label: '',
    error: undefined,
    disabled: false,
  },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Base = Template.bind({});

Base.args = {};
