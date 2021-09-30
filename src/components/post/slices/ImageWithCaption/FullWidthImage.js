import Caption from "./Caption";

const FullWidthImage = ({ slice }) => {
  const imageUrl = slice.primary.image.url;
  const caption = slice.primary.caption;

  return (
    <div
      className="blog-header single"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="wrapper">
        <Caption caption={caption} />
      </div>
    </div>
  );
};

export default FullWidthImage;
