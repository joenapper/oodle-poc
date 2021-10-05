import React from "react";

import WhoWeAreCard from "./";
import Container from "../../Grid/Container";
import car from "../../assets/car.png";
import styled from "styled-components";

export default {
  title: "Molecules/Who We Are Card",
  component: WhoWeAreCard,
};

const Template = (args) => <WhoWeAreCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  img: car,
  imgAlt: "car",
  title: "lorem",
  text: "lorem ipsum",
};

export const Example = () => (
  <Container>
    <Flex>
      <WhoWeAreCard img={car} imgAlt="car" title="lorem" text="lorem ipsum" />
      <WhoWeAreCard img={car} imgAlt="car" title="lorem" text="lorem ipsum" />
      <WhoWeAreCard img={car} imgAlt="car" title="lorem" text="lorem ipsum" />
    </Flex>
  </Container>
);
Example.parameters = { controls: { hideNoControlsWarning: true } };

const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
