import React from "react";
import Buness from '../../../public/Buness.png';
import Idea from '../../../public/Idea.png';
import Hat from '../../../public/Hat.png';
import sun from '../../../public/sun.png';
import Present from '../../../public/Present.png';
import Rocket from '../../../public/Rocket.png';

const images = {
  Buness,
  Idea,
  Hat,
  sun,
  Present,
  Rocket
};

const Card = ({ id, name, flipped, matched, clicked }) => {
  return (
    <div
      onClick={() => (flipped ? undefined : clicked(name, id))}
      className={
        "card" + (flipped ? " flipped" : "") + (matched ? " matched" : "")
      }
    >
      <div className="back">?</div>
      <div className="front">
        <img alt={name} src={images[name]} />
      </div>
    </div>
  );
};

export default Card;
