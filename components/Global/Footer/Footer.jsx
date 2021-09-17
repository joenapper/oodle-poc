import styled from "styled-components";

const Footer = () => (
  <StyledFooter>
    <p>
      Proudly published with &nbsp;
      <a
        href="https://prismic.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        Prismic
      </a>
      <br />
      <a
        href="https://prismic.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="footer-logo"
          src="/images/logo-prismic.svg"
          alt="Gray Prismic logo"
        />
      </a>
    </p>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  max-width: 700px;
  margin: 0 auto;
  color: #9a9a9a;
  font-family: "Lato", sans-serif;
  font-size: 16px;
  font-style: italic;
  text-align: center;

  footer p {
    border-top: 1px solid #dadada;
    padding: 2rem 0;
    margin-bottom: 0;
  }

  footer a {
    font-weight: bold;
  }

  .footer-logo {
    width: 30px;
    margin-top: 10px;
  }
`;

export default Footer
