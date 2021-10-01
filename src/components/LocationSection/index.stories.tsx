import React from "react";

import LocationSection from "./";
import ComponentHeader from "../ComponentHeader";
import map from "../assets/map.png";

export default {
  title: "About Us/LocationSection",
  component: LocationSection,
};

const Template = (args) => <LocationSection {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  richTextField1:
    "Our different approach has attracted oodles of customers, and as a result, we've been growing fast.",
  richTextField2:
    "From our first loan, we moved into our first office in Oxford, expanded west to Wales, up to Nottingham, headed to London and north again to Manchester.",
  image: map,
};

export const Secondary = ({
  title,
  number,
  richTextField1,
  richTextField2,
  image,
  imageAlt,
}) => (
  <>
    <ComponentHeader title={title} number={number} />
    <LocationSection
      richTextField1={richTextField1}
      richTextField2={richTextField2}
      image={map}
      imageAlt={imageAlt}
    />
  </>
);
Secondary.args = {
  title: "Where we are",
  number: "01",
  richTextField1:
    "Our different approach has attracted oodles of customers, and as a result, we've been growing fast.",
  richTextField2:
    "From our first loan, we moved into our first office in Oxford, expanded west to Wales, up to Nottingham, headed to London and north again to Manchester.",
  imageAlt: "Map",
};
