import React from "react";
import Header from "./components/Header.js";
import { Route, Link } from "react-router-dom";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js"


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path ="/" component={WelcomePage} />
      <CharacterList />
      {/* <Route path= "/character" component={CharacterList} /> */}
    </main>
  );
}
