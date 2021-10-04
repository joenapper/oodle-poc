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
    position: {
      options: ["left", "center", "right"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Change my colour and position in the controls",
  theme: "teal",
  position: "left",
};

export const LeftAligned = Template.bind({});
LeftAligned.args = {
  theme: "teal",
  position: "left",
};

export const CenterAligned = Template.bind({});
CenterAligned.args = {
  theme: "teal",
  position: "center",
};

export const RightAligned = Template.bind({});
RightAligned.args = {
  theme: "teal",
  position: "right",
};
