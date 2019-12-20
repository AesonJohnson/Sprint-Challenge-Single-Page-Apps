import React from "react";
import Header from "./components/Header.js";
import { Route, Link } from "react-router-dom";
import CharacterCard from "./components/CharacterCard.js"
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js"


export default function App() {
  return (
    <main>
      <Header />
      <Route path ="/" component={WelcomePage} />
      <Route path= "/" component={CharacterList} />
      <Route path="/card/:id" component={CharacterCard} />

    </main>
  );
}
