import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((emoji) => (
          <Entry
            name={emoji.name}
            emoji={emoji.emoji}
            meaning={emoji.meaning}
            key={emoji.id}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
