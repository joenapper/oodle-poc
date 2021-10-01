import Link from "next/link";
import PropTypes from "prop-types";
import styled from "styled-components";

const CallToAction: React.FC = ({
  image,
  imageAlt,
  content,
  buttonLink = "/",
  buttonText,
}: any) => {
  return (
    <Wrapper>
      <div className="asset">
        <img src={image} alt={imageAlt} />
      </div>
      <p>{content}</p>
      <Link href={buttonLink}>
        <a>{buttonText}</a>
      </Link>
    </Wrapper>
  );
};

CallToAction.propTypes = {
  image: PropTypes.any,
  imageAlt: PropTypes.string,
  content: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonText: PropTypes.string,
};

const Wrapper = styled.section`
  background-color: #312f43;
  padding: 4rem 20%;
  text-align: center;

  img {
    max-width: 250px;
    max-height: 250px;
  }

  p {
    font-size: 36px;
    color: #fff;
  }

  a {
    background-color: #0ad2a0;
    padding: 0.75rem 3rem;
    border-radius: 16px;
    text-decoration: none;
    font-size: 14px;
    color: #312f43;
  }

  /* @media (max-width: 768px) {
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
  } */
`;

export default CallToAction;
