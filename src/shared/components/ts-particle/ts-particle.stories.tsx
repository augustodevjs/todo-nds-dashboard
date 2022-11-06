import { TsParticle } from './ts-particle';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Particle',
  component: TsParticle,
} as ComponentMeta<typeof TsParticle>;

const Template: ComponentStory<typeof TsParticle> = (args) => (
  <TsParticle {...args} />
);

export const Base = Template.bind({});

Base.args = {
  backgroundColor: '#121214',
  particlesColor: '#ffffff',
};
