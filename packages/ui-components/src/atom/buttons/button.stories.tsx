
import { fn } from "@storybook/test";
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './button';

export default {
  title: 'ui-components/Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    onClick: fn(),
    color: 'primary',
    variant: 'contain',
    disabled: false,
    className: '',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error','purple','purple900'],
    },
    variant: {
      control: 'select',
      options: ['contain', 'outline', 'text'],
    },
    disabled: {
      control: 'boolean',
    },
    className: {
      control: 'text',
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button Default',
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Button Outline',
  variant: 'outline',
};

export const Text = Template.bind({});
Text.args = {
  children: 'Button Text',
  variant: 'text',
};
