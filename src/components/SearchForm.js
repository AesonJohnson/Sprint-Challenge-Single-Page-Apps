import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResult] = useState(characters);

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });

    const results = characters.filter(character => {
      return character.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResult(results);
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  }
  
  const handleSubmit = event => {
    event.preventDefault();
  }
 
  return (
    <section className="search-form">
      <form onSubmit={event => handleSubmit(event)}>
          <input
            id="character"
            type="text"
            name="character"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
      </form>

      {searchResults.map((card, index) => (
        <CharacterCard
          key={index}
          url={card.image}
          name={card.name}
          gender={card.gender}
          species={card.species}
        />
      ))}
    </section>
  );
}