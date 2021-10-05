import PropTypes from "prop-types";
import Container from "../../Grid/Container";
import ComponentHeader from "../../Molecules/ComponentHeader";
import WhoWeAreCard from "../../Molecules/WhoWeAreCard";
import car from "../../assets/car.png";
import styled from "styled-components";

const WhoWeAre: React.FC = () => {
  return (
    <Container backgroundColour="#6059A3" textColour="white">
      <ComponentHeader title="Who we are" number="02" colour="white" />
      <Text>
        We now have more than 250 enthusiastic Oodle employees across our five
        locations, we work with dealers, currently have cars on the Oodle
        Marketplace, and ,have happy customers.
      </Text>
      <Flex>
        <WhoWeAreCard img={car} imgAlt="map" title="250" text="Employees" />
        <WhoWeAreCard img={car} imgAlt="map" title="2300" text="Car dealers" />
        <WhoWeAreCard
          img={car}
          imgAlt="map"
          title="10,000"
          text="Happy customers"
        />
      </Flex>
    </Container>
  );
};

WhoWeAre.propTypes = {
  title: PropTypes.string,
  number: PropTypes.string,
};

const Text = styled.p`
  font-size: 28px;
  width: 50%;
  margin: 2rem 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default WhoWeAre;
