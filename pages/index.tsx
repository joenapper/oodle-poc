import { NextPage } from "next";
import Prismic from "@prismicio/client";
import Layout from "@/components/Global/Layout";
import User from "@/components/home/User";
import PostList from "@/components/home/PostList";
import { Client } from "@/utils/prismicHelpers";
import ApiSearchResponse from "@prismicio/client/types/ApiSearchResponse";
import { Document } from "@prismicio/client/types/documents";

interface IHomePageProps {
  doc: any;
  posts: Document[];
}

const HomePage: NextPage<IHomePageProps> = ({ doc, posts }) => {
  if (!doc) {
    return;
  }

  const { data } = doc;

  if (data) {
    return (
      <Layout>
        <User
          image={data.image}
          headline={data.headline}
          description={data.description}
        />
        <PostList posts={posts} />
      </Layout>
    );
  }
};

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref }: any = previewData;

  const client = Client();

  const doc = (await client.getSingle("blog_home", ref ? { ref } : null)) || {};

  const posts: ApiSearchResponse = await client.query(
    Prismic.Predicates.at("document.type", "post"),
    {
      orderings: "[my.post.date desc]",
      ...(ref ? { ref } : null),
    }
  );

  return {
    props: {
      doc,
      posts: posts?.results ?? [],
      preview,
    },
  };
}

export default HomePage;
