import React from 'react';
import './App.css';
import Menu from './components/Menu.js';
import GameList from "./components/GameList.js";
import Container from "react-bootstrap/Container";

const GAME_LIST = [
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
    <Container>

      <Menu />
    
      <GameList list={GAME_LIST} />
    
    </Container>
  );
}

export default App;
