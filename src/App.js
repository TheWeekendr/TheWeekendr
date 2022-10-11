import React from 'react';
// import SidenavBar from './components/SidenavBar';
// import Home from './components/Home';
import Layout from './components/Layout';
import './App.css';

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
        {/* <div className="flex h-screen overflow-hidden">
          <SidenavBar />
          <Home />
        </div> */}
        <Layout
          userData={this.state.userData}
          setUserDataState={this.setUserDataState}
        />
      </>
    );
  }
}

export default App;
