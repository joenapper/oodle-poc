import PropTypes from "prop-types";
import styled from "styled-components";

const Container: React.FC = ({ children = null }) => {
  return <Wrapper>{children}</Wrapper>;
};

Container.propTypes = {
  children: PropTypes.node,
};

const Wrapper = styled.section`
  padding: 4rem;
  max-width: 1000px;
  margin: auto;
`;

export default Container;
