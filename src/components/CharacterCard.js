import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <img src={props.url} />
      <h2>{props.name}</h2>
      <p>Gender: {props.gender}</p>
      <p>Species: {props.species}</p>
    </div>
  );
}
