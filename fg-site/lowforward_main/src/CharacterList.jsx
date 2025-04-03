import React from "react";
import "./App.css";

// Character-Specific "Who Has This?" Component
const CharacterList = ({ characters }) => {
  return (
    <div className="character-container">
      <h2 className="character-header">Who Has This?</h2>
      <div className="character-grid">
        {characters.map((char, index) => (
          <div
            key={index}
            className="character-item"
            style={{ backgroundImage: `url(${char.image})` }}
          >
            <span className="character-name">{char.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;

/* Example Usage:
<CharacterList characters={[
  { name: "Ryu", image: "/images/ryu.png" },
  { name: "Ken", image: "/images/ken.png" },
  { name: "Akuma", image: "/images/akuma.png" }
]} />
*/
