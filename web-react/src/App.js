import React from 'react';
import './App.css';
import Menu from './components/Menu.js';
import GameList from "./components/GameList.js";
import Container from "react-bootstrap/Container";

import {BrowserRouter as Router, Route} from 'react-router-dom';

const GAME_LIST = [
  {
    id: "FruitShootRiot",
    title: "Fruit Shoot Riot",
  },
  {
    id: "CorpseCuisine",
    title: "Corpse Cuisine",
  }, 
  {
    id: "NightShift",
    title: "Night Shift",
  },
  {
    id: "MonkeyFracasJr",
    title: "Monkey Fracas Jr.",
  },
  {
    id: "AmericanGladiators",
    title: "American Gladiators",
  }
];

function App() {
  return (
    <Router>
      <Container>
        <Menu />
        <GameList list={GAME_LIST} />
      </Container>
    </Router>
  );
}

export default App;
