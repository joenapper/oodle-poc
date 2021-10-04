import Link from "next/link";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button: React.FC = ({
  href = "/",
  text,
  theme = "teal",
  position = "left",
}: any) => {
  const themeColours = {
    teal: "#0ad2a0",
    white: "#FFFFFF",
    navy: "#312f43",
    pink: "#ec608a",
    orange: "#fb9f1e",
    purple: "#6059a3",
    grey: "#F8F9FD",
  };
  const themeColour = themeColours[theme];
  if (!themeColour) throw new Error(`No theme resolved for ${theme}`);

  const positionClasses = {
    left: "position-left",
    center: "position-center",
    right: "position-right",
  };
  const positionClass = positionClasses[position];
  if (!positionClass)
    throw new Error(`No position class resolved for ${position}`);

  return (
    <Wrapper className={positionClass}>
      <Link href={href}>
        <a style={{ backgroundColor: themeColour }}>{text}</a>
      </Link>
    </Wrapper>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
  theme: PropTypes.oneOf([
    "teal",
    "white",
    "navy",
    "pink",
    "orange",
    "purple",
    "grey",
  ]),
  position: PropTypes.oneOf(["left", "center", "right"]),
};

const Wrapper = styled.div`
  display: flex;

  &.position-center {
    justify-content: center;
  }

  &.position-right {
    justify-content: flex-end;
  }

  a {
    padding: 0.5rem 2rem;
    border-radius: 16px;
    font-size: 14px;
    display: inline-block;
    text-decoration: none;
    color: #312f43;
  }
`;

export default Button;
