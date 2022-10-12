import React from 'react';
import Home from './components/Home';
import DispLayout from './components/DispLayout';
import About from './components/About';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

class NavRoutes extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route
              exact path="/"
              element={<Home
            />}>
            </Route>
            <Route
              exact path="/"
              element={<DispLayout
              />}>
            </Route>
            <Route
              exact path="/"
              element={<About
            />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    )
  }
};

export default NavRoutes;
