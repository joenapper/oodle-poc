import React from "react";

import Footer from "./index";
import prismicLogo from "../../assets/logo-prismic.svg";

export default {
  title: "Global/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Primary = () => (
  <Footer>
    <p>
      Proudly published with &nbsp;
      <a href="https://prismic.io" target="_blank" rel="noopener noreferrer">
        Prismic
      </a>
      <br />
      <a href="https://prismic.io" target="_blank" rel="noopener noreferrer">
        <img
          className="footer-logo"
          src={prismicLogo}
          alt="Gray Prismic logo"
        />
      </a>
    </p>
  </Footer>
);
Primary.parameters = { controls: { hideNoControlsWarning: true } };

export const Secondary = Template.bind({});
Secondary.args = {
  children: "This is a footer",
};
