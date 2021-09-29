import PostItem from "./PostItem";
import styled from "styled-components";

const PostList = ({ posts }) => {
  return (
    <Posts>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </Posts>
  );
};

const Posts = styled.section`
  max-width: 700px;
  margin: auto;
`;

export default PostList;
