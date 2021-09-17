import PropTypes from "prop-types"
import styled from "styled-components";

Header.propTypes = {
  children: PropTypes.node
}

export default function Header({ children = null }) {
  return (
    <StyledHeader>
      <p>{children}</p>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  max-width: 700px;
  margin: 0 auto;
  color: #9a9a9a;
  font-family: "Lato", sans-serif;
  font-size: 16px;
  font-style: italic;
  text-align: center;
`
