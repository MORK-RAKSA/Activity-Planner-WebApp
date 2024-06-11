import type { Meta, StoryObj } from "@storybook/react";
import Ruler from "./ruler";



const meta: Meta<typeof Ruler> = {
  title: "Activity-Planner/Atoms/ruler",
  component: Ruler,
  
};

export default meta;
type Story = StoryObj<typeof Ruler>;

export const Default: Story = {
    args: {
        width: "40%",
        className: "bg-pink-600"
    },
}