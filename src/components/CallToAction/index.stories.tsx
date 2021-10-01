import React from "react";

import CallToAction from "./";
import ComponentHeader from "../ComponentHeader";

export default {
  title: "About Us/CallToAction",
  component: CallToAction,
};

const Template = (args) => <CallToAction {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Teal_awareness_ribbon_icon_with_outline.svg/2560px-Teal_awareness_ribbon_icon_with_outline.svg.png",
  imageAlt: "image alt tag",
  content:
    "Whether you're a customer looking for finance, a dealer wanting to work with an award-winning partner, or you'd like a career with us...",
  buttonLink: "/",
  buttonText: "Get in touch",
};

export const Secondary = ({
  title,
  number,
  image,
  imageAlt,
  content,
  buttonLink,
  buttonText,
}) => (
  <>
    <ComponentHeader title={title} number={number} />
    <CallToAction
      image={image}
      imageAlt={imageAlt}
      content={content}
      buttonLink={buttonLink}
      buttonText={buttonText}
    />
  </>
);
Secondary.args = {
  title: "A title",
  number: "A number",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Teal_awareness_ribbon_icon_with_outline.svg/2560px-Teal_awareness_ribbon_icon_with_outline.svg.png",
  imageAlt: "image alt tag",
  content:
    "Whether you're a customer looking for finance, a dealer wanting to work with an award-winning partner, or you'd like a career with us...",
  buttonLink: "/",
  buttonText: "Get in touch",
};
