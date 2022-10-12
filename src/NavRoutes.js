import React from 'react';
import Home from './components/Home';
import PanelDisplay from './components/PanelDisplay';
import About from './components/About';
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";

class NavRoutes extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route
            exact path="/"
            element={<Home
          />}>
          </Route>
          <Route
            exact path="/dash"
            element={<PanelDisplay
            />}>
          </Route>
          <Route
            exact path="/map"
            element={<About
            />}>
          </Route>
          <Route
            exact path="/about"
            element={<About
          />}>
          </Route>
        </Routes>
      </>
    )
  }
};

export default NavRoutes;
