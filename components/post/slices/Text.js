import { RichText } from "prismic-reactjs";
import { linkResolver } from "prismic-configuration";
import { customLink } from "@/utils/prismicHelpers";

const Text = ({ slice }) => (
  <div className="post-part single container">
    <RichText
      render={slice.primary.text}
      linkResolver={linkResolver}
      serializeHyperlink={customLink}
    />
  </div>
);

export default Text;
