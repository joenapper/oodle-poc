import Head from "next/head";
import { RichText } from "prismic-reactjs";
import { queryRepeatableDocuments } from 'utils/queries'
import BackButton from "../../components/post/BackButton";
import SliceZone from "../../components/post/SliceZone";
import { Client } from "utils/prismicHelpers";

export default function PostPage({ post }) {
  if (post && post.data) {
    const hasTitle = RichText.asText(post.data.title).length !== 0;
    const title = hasTitle ? RichText.asText(post.data.title) : "Untitled";

    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <div>
          <div>
            <BackButton />
            <h1>{title}</h1>
          </div>
          <SliceZone sliceZone={post.data.body} />
        </div>
      </>
    );
  }

  return null;
};

export async function getStaticProps({ params, preview = null, previewData = {} }) {
  const { ref } = previewData
  const post = await Client().getByUID("post", params.uid, ref ? { ref } : null) || {}
  return {
    props: {
      preview,
      post
    }
  }
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments((doc) => doc.type === 'post')
  return {
    paths: documents.map(doc => `/blog/${doc.uid}`),
    fallback: true,
  }
}
