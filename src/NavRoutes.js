import React from 'react';
import Home from './components/Home';
import Dash from './components/Dash';
import Map from './components/Map';
import About from './components/About';
import './App.css';
import { Routes, Route } from 'react-router-dom';

class NavRoutes extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                setUserDataState={this.props.setUserDataState}
                getUser={this.props.getUser}
                userData={this.props.userData}
                setShowSignupModal={this.props.setShowSignupModal}
                showSignupModal={this.props.showSignupModal}
              />
            }
          ></Route>
          <Route
            exact
            path="/dash"
            element={
              <Dash
                userData={this.props.userData}
                googleEventsData={this.props.googleEventsData}
                setUserDataState={this.props.setUserDataState}
                getUser={this.props.getUser}
              />
            }
          ></Route>
          <Route exact path="/map" element={<Map />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </>
    );
  }
}

export default NavRoutes;
