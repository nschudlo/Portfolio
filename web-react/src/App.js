import React from 'react';
import './App.css';
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import PortfolioView from "./components/PortfolioView";
import Container from "react-bootstrap/Container";

import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div id="header-and-body">
        <Container fluid className="site-header">
          <SiteHeader />
        </Container>

        <Container fluid="lg" className="site-body">
          <Route path="/">
            <PortfolioView />
          </Route>
        </Container>
      </div>

      <Container fluid className="site-footer">
        <SiteFooter />
      </Container>
    </Router>
  );
}

export default App;
