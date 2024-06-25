import React from 'react';
import './Bubble.css';

function Bubble({ name, icon, pos, id }) {
  return (
    <div className={`bubble-area ${pos}`}>
      <a href={"#" + id}>
        <span className="bubble-icon">{icon}</span>
        <span className="bubble-label">{name}</span>
      </a>
    </div>
  );
}

export default Bubble;