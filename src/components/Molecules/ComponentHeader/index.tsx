import PropTypes from "prop-types";
import styled from "styled-components";

const ComponentHeader: React.FC = ({ title, number }: any) => {
  return (
    <Wrapper>
      <div className="flex">
        <h3>{title}</h3>
        <span>{number}</span>
      </div>
      <div className="hr" />
    </Wrapper>
  );
};

ComponentHeader.propTypes = {
  title: PropTypes.string,
  number: PropTypes.string,
};

const Wrapper = styled.div`
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .flex h3 {
    text-transform: uppercase;
  }

  .hr {
    width: 100%;
    height: 2px;
    background-color: #231f20;
  }
`;

export default ComponentHeader;
