import { NextPage } from "next";
import Head from "next/head";
import { RichText } from "prismic-reactjs";
import Layout from "@/components/Global/Layout";
import BackButton from "@/components/post/BackButton";
import SliceZone from "@/components/post/SliceZone";
import { queryRepeatableDocuments } from "@/utils/queries";
import { Client } from "@/utils/prismicHelpers";
import { Document } from "@prismicio/client/types/documents";

interface IPostPageProps {
  post: Document | {};
}

const PostPage: NextPage<IPostPageProps> = ({ post }) => {
  if (Object.keys(post).length === 0) {
    return;
  }

  const { data } = post as Document;

  if (post && data) {
    const hasTitle = RichText.asText(data.title).length !== 0;
    const title = hasTitle ? RichText.asText(data.title) : "Untitled";

    return (
      <Layout>
        <Head>
          <title>{title}</title>
        </Head>
        <div>
          <div>
            <BackButton />
            <h1>{title}</h1>
          </div>
          <SliceZone sliceZone={data.body} />
        </div>
      </Layout>
    );
  }

  return null;
};

export async function getStaticProps({
  params,
  preview = null,
  previewData = {},
}) {
  const { ref }: any = previewData;
  const post: Document | {} =
    (await Client().getByUID("post", params.uid, ref ? { ref } : null)) || {};
  return {
    props: {
      preview,
      post,
    },
  };
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments(
    (doc) => doc.type === "post"
  );
  return {
    paths: documents.map((doc: any) => `/blog/${doc.uid}`),
    fallback: true,
  };
}

export default PostPage;
