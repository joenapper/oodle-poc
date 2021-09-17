import Link from 'next/link'
import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'
import PostDate from '../PostDate'
import FirstParagraph from '../FirstParagraph'
import { hrefResolver, linkResolver } from 'prismic-configuration'

const PostItem = ({ post }) => {
  const title = RichText.asText(post.data.title) ? RichText.asText(post.data.title) : 'Untitled'
  
  return (
    <Item className="blog-post">
      <Link
        as={linkResolver(post)}
        href={hrefResolver(post)}
      >
        <a>
          <h2>{title}</h2>
        </a>
      </Link>

      <PostDate date={post.data.date} />
      
      <FirstParagraph
        sliceZone={post.data.body}
        textLimit={300}
      />
    </Item>
  )
}

const Item = styled.div`
  margin-bottom: 3rem;
`

export default PostItem
