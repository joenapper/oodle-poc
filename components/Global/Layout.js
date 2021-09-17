import Head from "next/head";
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header>Header to be continued..</Header>

      <main>{children}</main>
      
      <Footer>
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
      </Footer>
    </div>
  );
}

Layout.defaultProps = {
  title: "Oodle | Proof of concept",
  description: "Oodle proof of concept",
  keywords: "oodle, web dev, design, ux, ui",
};