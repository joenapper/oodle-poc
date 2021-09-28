import React from "react";

import LocationSection from "./LocationSection";
import ComponentHeader from "./ComponentHeader";

export default {
  title: "About Us/LocationSection",
  component: LocationSection,
};

const Template = (args) => <LocationSection {...args} />;

export const Primary = Template.bind({});

export const Secondary = () => (
  <>
    <ComponentHeader />
    <LocationSection />
  </>
);
Secondary.parameters = { controls: { hideNoControlsWarning: true } };
