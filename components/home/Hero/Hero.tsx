import Link from "next/link";
import PropTypes from "prop-types";
import styled from "styled-components";

interface Props {
  buttonText?: string;
  buttonLink?: string;
  children: React.ReactNode;
}

const Hero: React.FC<Props> = ({
  children = null,
  buttonText,
  buttonLink = "/",
}) => {
  return (
    <Section>
      <div className="assets">
        <svg viewBox="0 0 1280 484" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <rect height="484" id="path-1" width="1280" x="0" y="0"></rect>
            <linearGradient
              id="linearGradient-3"
              x1="50%"
              x2="88.5230159%"
              y1="43.4110527%"
              y2="57.945645%"
            >
              <stop offset="0%" stopColor="#6059A3" stopOpacity="0"></stop>
              <stop offset="100%" stopColor="#6059A3"></stop>
            </linearGradient>
            <linearGradient
              id="linearGradient-4"
              x1="83.9961396%"
              x2="30.386378%"
              y1="60.0616301%"
              y2="3.67737221%"
            >
              <stop offset="0%" stopColor="#6059A3" stopOpacity="0"></stop>
              <stop offset="100%" stopColor="#6059A3"></stop>
            </linearGradient>
          </defs>
          <g
            fill="none"
            fillRule="evenodd"
            id="Home-page---Car-search-🚘"
            stroke="none"
            strokeWidth="1"
          >
            <g id="header">
              <mask fill="white" id="mask-2">
                <use xlinkHref="#path-1"></use>
              </mask>
              <use fill="#312F43" id="Rectangle" xlinkHref="#path-1"></use>
              <g
                id="image"
                mask="url(#mask-2)"
                opacity="0.7"
                strokeLinecap="round"
                strokeWidth="3.747724"
              >
                <g transform="translate(36.000000, 20.000000)">
                  <path
                    d="M42.3932235,396.378982 C14.1310745,354.90968 0,310.236857 0,262.360514 C0,232.218165 18.7994096,223.142324 21.0382713,210.60013 C24.1335248,193.260394 12.6864207,176.669453 30.0346129,154.94675 C33.994248,149.988655 50.2954181,147.54561 54.2229218,141.821185 C74.8247948,111.793492 95.0123986,73.6512144 115.077274,52.871566 C120.068225,47.702822 108.66313,35.074584 115.077274,32.0263328 C152.193771,14.3871259 432.423932,-15.4894753 621.197926,9.66828587 C809.97192,34.8260471 777.776907,76.7528424 922.315975,125.913365 C1066.85504,175.073888 1106.08948,158.894977 1153.26085,197.439644 C1170.71256,211.699777 1196.32776,239.949887 1209.00611,270.912064 C1230.59693,323.639626 1218.24695,374.035817 1209.00611,386.248572 C1199.22801,399.17138 1176.47734,405.755189 1140.75412,406"
                    id="Path-2-Copy"
                    stroke="#6059A3"
                  ></path>
                  <path
                    d="M1047,191 C1065.60533,210.004045 1083.9437,223.144355 1102.0151,230.420931 C1129.1222,241.335795 1168.12381,244 1178.62569,244 C1185.62695,244 1190.41839,244 1193,244"
                    id="Path-4"
                    stroke="url(#linearGradient-3)"
                  ></path>
                </g>
              </g>
              <g
                id="car-wheels"
                mask="url(#mask-2)"
                stroke="url(#linearGradient-4)"
                strokeWidth="4"
              >
                <g transform="translate(118.000000, 292.000000)">
                  <ellipse
                    cx="101.65"
                    cy="101.5"
                    id="Oval"
                    rx="101.65"
                    ry="101.5"
                  ></ellipse>
                  <ellipse
                    cx="943.35"
                    cy="101.5"
                    id="Oval-Copy"
                    rx="101.65"
                    ry="101.5"
                  ></ellipse>
                </g>
              </g>
            </g>
          </g>
        </svg>

        <div className="content">
          {children}
          <Link href={`${buttonLink}`}>
            <a className="button">{buttonText}</a>
          </Link>
        </div>
      </div>
    </Section>
  );
};

Hero.propTypes = {
  children: PropTypes.node,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
};

const Section = styled.section`
  background: rgb(49, 47, 67);

  .assets {
    position: relative;
    width: 100%;

    .content {
      width: 100%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
      text-align: center;

      h2 {
        font-size: 2rem;
        color: #fff;
        font-weight: 100;
      }

      .button {
        background: rgb(10, 210, 160);
        color: rgb(49, 47, 67);
        padding: 0.75rem 3rem;
        border-radius: 4px;
        text-decoration: none;
      }
    }
  }
`;

export default Hero;
