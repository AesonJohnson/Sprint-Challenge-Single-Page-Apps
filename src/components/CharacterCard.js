import React from "react";


export default function CharacterCard({url, name, gender, species}) {
  return (
    <div>
      <img src={url} />
      <h2>{name}</h2>
      <p>Gender: {gender}</p>
      <p>Species: {species}</p>
    </div>
  );
}
