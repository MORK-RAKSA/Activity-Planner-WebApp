import type { Meta, StoryObj } from "@storybook/react";
import TextField from "./text-field";




const meta: Meta <typeof TextField> = {
    title: "ui-components/Atoms/TextField",
    component: TextField,
    parameters: {
        layout: "centered",
    },
}

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
    args: {
        type: "text",
        label: "Label",
        placeholder: "example...",
        name: "default",
    },
};

export const PasswordField: Story = {
    args: {
        type: "password",
        label: "Password",
        value: "password",
        name: "password",
    },
};

export const NumberField: Story = {
    args: {
        type: "number",
        label: "Number Field",
        name: "number",
        value: "123",
    },
};


export const ErrorField:Story ={
    args: {
        type: "text",
        label: "Error Field",
        name: "error",
        error: "this field is required",
    },
};