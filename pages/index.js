import Prismic from '@prismicio/client'
import { RichText } from "prismic-reactjs";
import Layout from "@/components/Global/Layout"
import User from "@/components/home/User"
import PostList from "@/components/home/PostList"
import { Client } from "@/utils/prismicHelpers";

export default function HomePage({ doc, posts }) {
  if (doc && doc.data) {
    return (
      <Layout>
        <User
          image={doc.data.image}
          headline={doc.data.headline}
          description={doc.data.description}
        />
        <PostList posts={posts} />
      </Layout>
    );
  }
};

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const client = Client()

  const doc = await client.getSingle("blog_home", ref ? { ref } : null) || {}

  const posts = await client.query(
    Prismic.Predicates.at("document.type", "post"), {
      orderings: "[my.post.date desc]",
      ...(ref ? { ref } : null)
    },
  )

  return {
    props: {
      doc,
      posts: posts ? posts.results : [],
      preview
    }
  }
}
