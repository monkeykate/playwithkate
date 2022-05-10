import React from "react";
import ReactCardFlip from "react-card-flip";
import creeper from './creeper4.png';
import exploding from './exploding.png';
import "./index.css";

function Card(props) {
  const [isFlipped, setFlipped] = React.useState(false);
  const CardStyle = {
    border: "1px solid #03506f",
    borderRadius: "30px",
    padding: "20px",
    margin: "20px",
    width: "270px",
    height: "170px",
    backgroundColor: "#75cfb8",
  };
  const CardStyle2 = {
    border: "1px solid #03506f",
    borderRadius: "30px",
    padding: "20px",
    margin: "20px",
    width: "270px",
    height: "170px",
    backgroundColor: "#75cfb8",
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div
        id="card"
        style={CardStyle}
        className="CardFront"
        onClick={() => setFlipped((prev) => !prev)}
      >
        <div className="CardStyle">
          <span className="emoji" role="img" aria-label="emojis">
            <img src={creeper} width="115" height="150" alt='abc'></img>
          </span>
        </div>
      </div>
      <div
        style={CardStyle2}
        onClick={() => setFlipped((prev) => !prev)}
        className="CardBack"
      >
        <p>
        <div className="CardStyle">
        <img src={exploding} width="115" height="150" alt='abc'></img>
        </div>
        </p>
      </div>
    </ReactCardFlip>
  );
}

export default Card;
