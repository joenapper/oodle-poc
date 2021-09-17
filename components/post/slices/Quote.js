import { RichText } from 'prismic-reactjs'

const Quote = ({ slice }) => (
  <div className="post-part single container">
    <blockquote className="block-quotation">
      {RichText.asText(slice.primary.quote)}
    </blockquote>
  </div>
)

export default Quote
