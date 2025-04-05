import React from 'react';
import Container from "react-bootstrap/Container";
import { Route, Routes } from 'react-router';
import './App.css';
import PortfolioView from "./components/PortfolioView";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

function App() {
  return (
    <React.Fragment>
      <div id="header-and-body">
        <Container fluid className="site-header">
          <SiteHeader />
        </Container>

        <Container fluid="lg" className="site-body">
          <Routes>
            <Route path="/:id?" element={<PortfolioView />} />
          </Routes>
        </Container>
      </div>

      <Container fluid className="site-footer">
        <SiteFooter />
      </Container>
    </React.Fragment>
  );
}

export default App;
