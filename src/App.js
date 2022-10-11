import React from 'react';
import Layout from './components/Layout';
import DispLayout from './components/DispLayout';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
    };
  }

  setUserDataState = data => {
    this.setState({
      userData: data,
    });
  };

  render() {
    return (
      <>
        {/* <div className="flex h-screen overflow-hidden">
          <SidenavBar />
          <Home />
        </div> */}

        <DispLayout
          userData={this.state.userData}
          setUserDataState={this.setUserDataState}
        />
      </>
    );
  }
}

export default App;
