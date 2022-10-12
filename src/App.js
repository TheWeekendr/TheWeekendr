import React from 'react';
// import Layout from './components/Layout';
import DispLayout from './components/DispLayout';
import './App.css';
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
    };
  }

  setUserDataState(data) {
    this.setState({
      userData: data,
    });
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <DispLayout
            userData={this.state.userData}
            setUserDataState={this.setUserDataState}
          />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
