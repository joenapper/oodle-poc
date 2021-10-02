import React from "react";

import ComponentHeader from "./";
import Container from "../../Grid/Container";

export default {
  title: "Atoms/Component Header",
  component: ComponentHeader,
};

const Template = (args) => <ComponentHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "title",
  number: "number",
};

export const PrimaryContained = () => (
  <Container>
    <ComponentHeader title="title" number="number" />
  </Container>
);
PrimaryContained.parameters = { controls: { hideNoControlsWarning: true } };
