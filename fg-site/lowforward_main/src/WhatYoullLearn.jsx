import React from "react";
import "./App.css";

// Article Header "What You'll Learn" Component
const WhatYoullLearn = ({ topics }) => {
  return (
    <div className="learning-container">
      <h1 className="learning-header">
        What You'll Learn: {topics[0]?.theme || "General Concepts"}
      </h1>
      <div className="learning-grid">
        {topics.map((topic, index) => (
          <div key={index} className="learning-item">
            <div className="learning-what">{topic.what}</div>
            <div className="learning-why">{topic.why}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatYoullLearn;

/* Example Usage:
<WhatYoullLearn topics={[
  { what: "Frame Data", why: "Helps understand move priority" },
  { what: "Combos", why: "Meaningful, consistent, stable damage is important." },
  { what: "Okizeme", why: "Improving wake-up pressure and mix-ups" }
]} />
*/
