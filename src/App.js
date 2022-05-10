import React from 'react';
import Card from "./Card";
import content from "./content";

function createEntry(entry) {
  return <Card key={entry.id} emoji={entry.emoji} back={entry.back} />;
}
function App() {
  return (
    <div>
      <h1>
        <span>find the correct cards to win.
    
        </span>
      </h1>

      <div
        className="container-fluid"
        style={{ display: "flex", flexWrap: "wrap", margin: "10px 130px" }}
      >
        {content.map(createEntry)}
      </div>
    </div>
  );
}

export default App;
