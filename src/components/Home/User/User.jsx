import { RichText } from "prismic-reactjs";
import styled from "styled-components";

const User = ({ image, headline, description }) => {
  return (
    <UserContainer>
      <div
        className="blog-avatar"
        style={{ backgroundImage: `url(${image.url})` }}
      />
      <h1 className="blog-title">{RichText.asText(headline)}</h1>
      <p className="blog-description">{RichText.asText(description)}</p>
    </UserContainer>
  );
};

const UserContainer = styled.section`
  text-align: center;
  max-width: 700px;
  margin: auto;

  .blog-avatar {
    height: 140px;
    width: 140px;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
    margin: 1em auto;
  }

  .blog-description {
    font-size: 18px;
    color: #9a9a9a;
    line-height: 30px;
    margin-bottom: 3rem;
    padding-bottom: 3rem;
    font-family: "Lato", sans-serif;
    border-bottom: 1px solid #dadada;
  }
`;

export default User;
