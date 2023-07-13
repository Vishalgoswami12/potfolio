import React from "react";

export default function Card(props) {
  const { Icon, cardName } = props;
  return (
    <div className="card">
      <figure>
        <Icon />
      </figure>
      <h3 className="card-text">{cardName}</h3>
    </div>
  );
}