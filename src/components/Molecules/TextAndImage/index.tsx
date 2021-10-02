import PropTypes from "prop-types";
import styled from "styled-components";

const TextAndImage: React.FC = ({
  richTextField1,
  richTextField2,
  image,
  imageAlt,
}: any) => {
  return (
    <Wrapper>
      <div>
        <p>{richTextField1}</p>
        <p className="desk-only">{richTextField2}</p>
      </div>
      <div className="asset">
        <img src={image} alt={imageAlt} />
      </div>
      <div className="mob-only">
        <p>{richTextField2}</p>
      </div>
    </Wrapper>
  );
};

TextAndImage.propTypes = {
  richTextField1: PropTypes.string,
  richTextField2: PropTypes.string,
  image: PropTypes.any,
  imageAlt: PropTypes.string,
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: 50%;
  }

  div p {
    font-size: 28px;
    color: #000;
  }

  .asset {
    display: flex;
    justify-content: flex-end;
  }

  .asset img {
    max-height: 70vh;
    max-width: 100%;
    object-fit: scale-down;
  }

  .mob-only {
    display: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 1rem;

    div {
      width: 100%;
    }

    .asset img {
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

export default TextAndImage;
