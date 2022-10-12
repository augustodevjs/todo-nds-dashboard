import { Particle } from './Particle';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Particle',
  component: Particle,
} as ComponentMeta<typeof Particle>;

const Template: ComponentStory<typeof Particle> = (args) => (
  <Particle {...args} />
);

export const Base = Template.bind({});

Base.args = {
  backgroundColor: '#121214',
  particlesColor: '#ffffff',
};
