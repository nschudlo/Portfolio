import React from 'react';
import './App.css';
import Menu from './components/Menu.js';
import PortfolioView from "./components/PortfolioView.js";
import Container from "react-bootstrap/Container";

import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Container fluid="xl" style={{backgroundColor:"lightGrey"}}>
        <Menu />
        <Route path="/portfolio">
          <PortfolioView />
        </Route>
      </Container>
    </Router>
  );
}

export default App;
