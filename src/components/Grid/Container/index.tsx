import PropTypes from "prop-types";
import styled from "styled-components";

interface IContainerProps {
  children: React.ReactNode;
  backgroundColour: string;
  textColour: string;
}

const Container: React.FC<IContainerProps> = ({
  children = null,
  backgroundColour,
  textColour,
}) => {
  return (
    <section style={{ backgroundColor: backgroundColour }}>
      <Wrapper style={{ color: textColour }}>{children}</Wrapper>
    </section>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  backgroundColour: PropTypes.string,
  textColour: PropTypes.string,
};

const Wrapper = styled.div`
  padding: 4rem;
  max-width: 1000px;
  margin: auto;
`;

export default Container;
