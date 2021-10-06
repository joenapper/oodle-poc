import PropTypes from "prop-types";
import styled from "styled-components";

interface IWhoWeAreCardProps {
  img: any;
  imgAlt: string;
  title: string;
  text: string;
}

const WhoWeAreCard: React.FC<IWhoWeAreCardProps> = ({
  img,
  imgAlt,
  title,
  text,
}) => {
  return (
    <Wrapper>
      <div className="img-wrapper">
        <img src={img} alt={imgAlt} />
      </div>
      <h3>{title}</h3>
      <h4>{text}</h4>
    </Wrapper>
  );
};

WhoWeAreCard.propTypes = {
  img: PropTypes.any,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

const Wrapper = styled.div`
  width: 33.33%;

  .img-wrapper {
    margin-bottom: 2rem;
  }

  img {
    width: 150px;
    height: 120px;
    object-fit: contain;
  }

  h3 {
    font-size: 90px;
  }

  h4 {
    font-size: 30px;
    margin-left: 2rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: auto;
    margin-bottom: 2rem;

    .img-wrapper {
      text-align: center;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 425px) {
    h3 {
      font-size: 60px;
    }

    h4 {
      font-size: 24px;
    }
  }
`;

export default WhoWeAreCard;
