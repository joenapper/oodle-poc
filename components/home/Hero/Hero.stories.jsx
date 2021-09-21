import React from 'react';

import Hero from './Hero';

export default {
  title: 'Home/Hero',
  component: Hero,
};

const Template = (args) => <Hero {...args} />;

export const Primary = () => (
  <Hero buttonText="Start here" buttonLink="/">
    <h2>
      Find the <strong>perfect car</strong>
      <br />
      for your <strong>ideal budget</strong>
    </h2>
  </Hero>
)
Primary.parameters = { controls: { hideNoControlsWarning: true } }

export const Secondary = Template.bind({});
Secondary.args = {
  children: <h2>This is a hero component</h2>,
  buttonText: 'Button',
  buttonLink: '/',
};

