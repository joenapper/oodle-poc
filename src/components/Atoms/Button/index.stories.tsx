import React from "react";

import Button from "./";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    href: {
      defaultValue: "/",
      control: {
        type: "text",
      },
    },
    text: {
      defaultValue: "Button",
      control: {
        type: "text",
      },
    },
    theme: {
      options: ["teal", "white", "navy", "pink", "orange", "purple", "grey"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Teal = Template.bind({});
Teal.args = {
  theme: "teal",
};

export const White = Template.bind({});
White.args = {
  theme: "white",
};

export const Navy = Template.bind({});
Navy.args = {
  theme: "navy",
};

export const Pink = Template.bind({});
Pink.args = {
  theme: "pink",
};

export const Orange = Template.bind({});
Orange.args = {
  theme: "orange",
};

export const Purple = Template.bind({});
Purple.args = {
  theme: "purple",
};

export const Grey = Template.bind({});
Grey.args = {
  theme: "grey",
};
