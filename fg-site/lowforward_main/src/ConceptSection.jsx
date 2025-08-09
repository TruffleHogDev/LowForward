import "./App.css";

const ConceptSection = ({
  title,
  question,
  videoSrc,
  imageSrc, // ✅ NEW
  imageAlt = "", // ✅ NEW
  caption,
  children,
  mediaLeft = false, // optional: put media on the left at lg+
}) => {
  const hasMedia = Boolean(videoSrc || imageSrc);

  return (
    <section className="concept-section">
      <h2 className="section">{title}</h2>

      <div className={`concept-flex ${mediaLeft ? "media-left" : ""}`}>
        <div className="concept-text">{children}</div>

        {hasMedia && (
          <figure className="concept-figure">
            {question && (
              <figcaption className="concept-question">{question}</figcaption>
            )}

            {videoSrc ? (
              <video
                src={videoSrc}
                controls
                className="concept-media"
                preload="metadata"
                playsInline
              />
            ) : (
              <img
                src={imageSrc}
                alt={imageAlt}
                className="concept-media"
                loading="lazy"
              />
            )}

            {caption && (
              <figcaption className="concept-caption">{caption}</figcaption>
            )}
          </figure>
        )}
      </div>
    </section>
  );
};

export default ConceptSection;
