import { NextPage } from "next";
import { Client } from "@/utils/prismicHelpers";
import { RichText } from "prismic-reactjs";
import Layout from "@/components/Global/Layout";
import Hero from "@/components/Organisms/Hero";

interface IAboutUsPageProps {
  doc: any;
}

const AboutUsPage: NextPage<IAboutUsPageProps> = ({ doc }) => {
  if (!doc) {
    return;
  }
  const { data } = doc;

  if (data) {
    return (
      <Layout>
        <Hero
          title={RichText.asText(data.title)}
          text={RichText.asText(data.text)}
        />
      </Layout>
    );
  }
};

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref }: any = previewData;

  const client = Client();

  const doc = (await client.getSingle("about", ref ? { ref } : null)) || {};

  return {
    props: {
      doc,
      preview,
    },
  };
}

export default AboutUsPage;
