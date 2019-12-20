import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      setCharacter(response.data.results)
    })
    .catch(error => {
      console.log(error)
    })
  }, []);

  return (
    <section className="character-list">
      {character.map((card, index) => {
        return(
          <CharacterCard
            key={index}
            url={card.image}
            name={card.name}
            gender={card.gender}
            species={card.species}
          />)
      })}
    </section>
  );
}
