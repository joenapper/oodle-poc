import PropTypes from "prop-types";
import styled from "styled-components";

const Container: React.FC = ({
  children = null,
  backgroundColour,
  textColour,
}: any) => {
  return (
    <Wrapper style={{ backgroundColor: backgroundColour, color: textColour }}>
      {children}
    </Wrapper>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  backgroundColour: PropTypes.string,
  textColour: PropTypes.string,
};

const Wrapper = styled.section`
  padding: 4rem;
  max-width: 1000px;
  margin: auto;
`;

export default Container;
