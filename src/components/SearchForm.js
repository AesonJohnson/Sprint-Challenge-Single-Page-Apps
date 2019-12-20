import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styles from "styled-components";

const SearchButton = styles.div`
  margin:20px;
  margin-top:10px;
  margin-left:0px;
`

export default function SearchForm(props) {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResult] = useState(characters);

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
    <SearchButton>
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            id="character"
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
    </SearchButton>
  );
}