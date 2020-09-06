import React from 'react';
import './App.css';
import Menu from './components/Menu.js';
import GameList from "./components/GameList.js";
import Container from "react-bootstrap/Container";

const GAME_LIST = ["Corpse Cuisine", "Night Shift", "Fracas Jr.", "Gladiators"];

function App() {
  return (
    <Container>
      This is a test
      <Menu/>
      <GameList list={GAME_LIST} />
    </Container>
  );
}

export default App;
