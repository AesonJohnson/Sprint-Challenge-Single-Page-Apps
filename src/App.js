import React from "react";
import Header from "./components/Header.js";
import { Route, Link } from "react-router-dom";
import CharacterCard from "./components/CharacterCard.js"
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";
import SearchForm from "./components/SearchForm.js";
import styles from "styled-components";

const Links = styles.h3`
  display:inline-block;
  margin:10px;
  color:black;
`

export default function App() {
  return (
    <main>
      <Header />

      <Link to="/"><Links>Home</Links></Link>
      <Link to="/characters"><Links>Characters</Links></Link>

      <SearchForm />

      <Route exact path ="/" component={WelcomePage} />
      <Route exact path="/card/:id" component={CharacterCard} />
      <Route path= "/characters" component={CharacterList} />
    </main>
  );
}
