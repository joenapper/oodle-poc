import React from "react";

import WhoWeAre from "./";

export default {
  title: "Organisms/Who We Are",
  component: WhoWeAre,
};

export const Primary = () => <WhoWeAre />;
Primary.parameters = { controls: { hideNoControlsWarning: true } };
