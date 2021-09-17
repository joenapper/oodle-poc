import { RichText } from 'prismic-reactjs'

const Caption = ({ caption }) => {
  if (RichText.asText(caption) !== '') {
    return (
      <p>
        <span className='image-label'>
          {RichText.asText(caption)}
        </span>
      </p>
    )
  }

  return null
}

export default Caption
