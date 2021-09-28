import styled from "styled-components";

const ComponentHeader: React.FC = () => {
  return (
    <Wrapper>
      <div className="flex">
        <h3>Where we are</h3>
        <span>01</span>
      </div>
      <div className="hr" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #f8f9fd;
  padding: 1rem;

  .flex {
    display: flex;
    justify-content: space-between;
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
