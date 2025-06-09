import "./App.css";

/**
 * ConceptSection component to display a gameplay section with:
 * - Title
 * - Optional question prompt
 * - Video (floating right on large screens)
 * - Summary text block
 *
 * Props:
 * - title: section heading (string)
 * - question: an optional string prompt/question
 * - videoSrc: imported video path
 * - caption: string below the video
 * - children: summary content (JSX or text)
 */

const ConceptSection = ({ title, question, videoSrc, caption, children }) => {
  return (
    <section className="concept-block">
      <h2 className="section">{title}</h2>

      {videoSrc && (
        <div className="media-prompt">
          {question && <p className="media-question">{question}</p>}
          <video
            src={videoSrc}
            controls
            className="video-float"
            preload="metadata"
          />
          {caption && <figcaption>{caption}</figcaption>}
        </div>
      )}

      <div className="concept-summary">{children}</div>
    </section>
  );
};

export default ConceptSection;
