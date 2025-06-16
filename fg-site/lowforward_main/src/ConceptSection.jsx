import "./App.css";

/**
 * ConceptSection component:
 * - Title
 * - Optional question
 * - Figure: video + caption
 * - Children = summary text
 */

const ConceptSection = ({ title, question, videoSrc, caption, children }) => {
  return (
    <section>
      <h2 className="section">{title}</h2>

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

      <div className="concept-summary">{children}</div>
    </section>
  );
};

export default ConceptSection;
