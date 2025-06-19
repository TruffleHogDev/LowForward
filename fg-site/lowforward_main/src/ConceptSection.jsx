import "./App.css";

const ConceptSection = ({ title, question, videoSrc, caption, children }) => {
  return (
    <section className="concept-section">
      <h2 className="section">{title}</h2>

      <div className="concept-flex">
        <div className="concept-text">{children}</div>

        {videoSrc && (
          <figure className="concept-figure">
            {question && (
              <figcaption className="concept-question">{question}</figcaption>
            )}
            <video
              src={videoSrc}
              controls
              className="concept-video"
              preload="metadata"
            />
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
