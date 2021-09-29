import { Date } from "prismic-reactjs";
import styled from "styled-components";

const PostDate = ({ date }) => {
  // Format the date to M d, Y
  const dateFormat = {
    month: "short",
    day: "2-digit",
    year: "numeric",
  };
  const displayDate = new Intl.DateTimeFormat("en-US", dateFormat).format(
    Date(date)
  );

  return (
    <StyledDate>
      <time className="created-at">{displayDate}</time>
    </StyledDate>
  );
};

const StyledDate = styled.p`
  color: #9a9a9a;
  font-family: "Lato", sans-serif;
  margin-bottom: 8px;

  @media (max-width: 767px) {
    .blog-post-meta {
      font-size: 16px;
    }
  }
`;

export default PostDate;
