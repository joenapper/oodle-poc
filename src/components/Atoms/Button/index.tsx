import Link from "next/link";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button: React.FC = ({ href = "/", text, theme = "teal" }: any) => {
  const themeClasses = {
    teal: "#0ad2a0",
    white: "#FFFFFF",
    navy: "#312f43",
    pink: "#ec608a",
    orange: "#fb9f1e",
    purple: "#6059a3",
    grey: "#F8F9FD",
  };
  const themeColour = themeClasses[theme];
  if (!themeColour) throw new Error(`No theme class resolved for ${theme}`);

  return (
    <Link href={href}>
      <Wrapper style={{ backgroundColor: themeColour }}>{text}</Wrapper>
    </Link>
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
};

const Wrapper = styled.a`
  padding: 0.5rem 2rem;
  border-radius: 16px;
  font-size: 14px;
  display: inline-block;
`;

export default Button;
