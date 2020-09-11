import React from 'react';
import './App.css';
import SiteHeader from "./components/SiteHeader";
import PortfolioView from "./components/PortfolioView";
import Container from "react-bootstrap/Container";

import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Container fluid style={{backgroundColor:"darkGrey", height:"50px"}}>
        <SiteHeader />
      </Container>
      <Container fluid="xl" style={{backgroundColor:"lightGrey"}}>
        <Route path="/">
          <PortfolioView />
        </Route>
      </Container>
    </Router>
  );
}

export default App;
