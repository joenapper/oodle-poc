import Link from "next/link";
import PropTypes from "prop-types";
import styled from "styled-components";

interface ICallToActionProps {
  image: any;
  imageAlt: string;
  content: string;
  buttonLink: string;
  buttonText: string;
}

const CallToAction: React.FC<ICallToActionProps> = ({
  image,
  imageAlt,
  content,
  buttonLink = "/",
  buttonText,
}) => {
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
`;

export default CallToAction;
