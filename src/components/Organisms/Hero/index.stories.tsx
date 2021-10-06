import React from "react";

import Hero from "./";

export default {
  title: "Organisms/Hero",
  component: Hero,
};

const Template = (args) => <Hero {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Lorem ipsum",
  text:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae praesentium, libero in accusamus commodi laborum illum voluptatem hic voluptatum quos?",
};
