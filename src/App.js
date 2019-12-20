import React from "react";
import Header from "./components/Header.js";
import { Route, Link } from "react-router-dom";
import CharacterCard from "./components/CharacterCard.js"
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";
import SearchForm from "./components/SearchForm.js";


export default function App() {
  return (
    <main>
      <Header />
      <Link to="/">Home</Link>
      <Link to="/characters">Characters</Link>
      <Route exact path ="/" component={WelcomePage} />
      <Route exact path="/card/:id" component={CharacterCard} />
      <Route path= "/characters" component={CharacterList} />
    </main>
  );
}
