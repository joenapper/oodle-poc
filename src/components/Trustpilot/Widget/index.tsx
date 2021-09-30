import React from "react";

type Widget = {
  height: string;
  id: string;
};

const Widget = React.forwardRef<HTMLDivElement, Widget>(
  ({ height, id }, ref) => (
    <div
      className="trustpilot-widget"
      data-businessunit-id="5a675e1fabe1ab0001fcb88c"
      data-locale="en-GB"
      data-stars="4,5"
      data-style-height={height}
      data-style-width="100%"
      data-template-id={id}
      data-theme="light"
      ref={ref}
    />
  )
);

export default Widget;
