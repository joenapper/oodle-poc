import React from "react";

import ComponentHeader from "./";

export default {
  title: "About Us/ComponentHeader",
  component: ComponentHeader,
};

const Template = (args) => <ComponentHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Where we are",
  number: "01",
};
