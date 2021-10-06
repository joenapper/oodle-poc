import PropTypes from "prop-types";
import Container from "../../Grid/Container";
import styled from "styled-components";

interface IHeroProps {
  title: string;
  text: string;
}

const Hero: React.FC<IHeroProps> = ({ title, text }) => {
  return (
    <Container backgroundColour="#312F43" textColour="#FFFFFF">
      <Wrapper>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Wrapper>
    </Container>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

const Wrapper = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 80px;
`;

const Text = styled.p`
  font-size: 24px;
`;

export default Hero;
