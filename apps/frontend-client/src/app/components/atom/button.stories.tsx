import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "./button";


const meta: Meta<typeof Button> = {
  title: "SabaiCode/Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button Default",
  },
};

export const Outline: Story = {
  args: {
    children: "Button Outline",
    variant: "outline",
  },
};
export const Text: Story = {
  args: {
    children: "Button Text",
    variant: "text",
  },
};