import styled from "styled-components";
import map from "../../public/images/map.png";

const LocationSection: React.FC = () => {
  return (
    <Wrapper>
      <div>
        <p>
          Our different approach has attracted oodles of customers, and as a
          result, we've been growing fast.
        </p>
        <p className="desk-only">
          From our first loan, we moved into our first office in Oxford,
          expanded west to Wales, up to Nottingham, headed to London and north
          again to Manchester.
        </p>
      </div>
      <div className="asset">
        <img src={map} alt="Map" />
      </div>
      <div className="mob-only">
        <p>
          From our first loan, we moved into our first office in Oxford,
          expanded west to Wales, up to Nottingham, headed to London and north
          again to Manchester.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f9fd;
  padding: 1rem;

  div {
    width: 50%;
  }

  div p {
    font-size: 28px;
    color: #000;
  }

  .asset img {
    max-height: 80vh;
    width: 100%;
    object-fit: scale-down;
  }

  .mob-only {
    display: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    div {
      width: 100%;
    }

    .desk-only {
      display: none;
    }

    .mob-only {
      display: block;
    }
  }
`;

export default LocationSection;
