import React from "react";

import TextAndImage from "./";
import Container from "../../Grid/Container";
import ComponentHeader from "../../Atoms/ComponentHeader";
import map from "../../assets/map.png";

export default {
  title: "Molecules/Text & Image",
  component: TextAndImage,
};

const Template = (args) => <TextAndImage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  richTextField1:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi itaque cupiditate suscipit adipisci aut culpa!",
  richTextField2:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam aperiam facere temporibus illo quam quod architecto alias animi cumque iste. Neque quo molestiae ipsum sit?",
  image: map,
};

export const Example = ({
  title,
  number,
  richTextField1,
  richTextField2,
  image,
  imageAlt,
}) => (
  <Container>
    <ComponentHeader title={title} number={number} />
    <TextAndImage
      richTextField1={richTextField1}
      richTextField2={richTextField2}
      image={image}
      imageAlt={imageAlt}
    />
  </Container>
);
Example.args = {
  title: "Where we are",
  number: "01",
  richTextField1:
    "Our different approach has attracted oodles of customers, and as a result, we've been growing fast.",
  richTextField2:
    "From our first loan, we moved into our first office in Oxford, expanded west to Wales, up to Nottingham, headed to London and north again to Manchester.",
  image: map,
  imageAlt: "Map",
};
