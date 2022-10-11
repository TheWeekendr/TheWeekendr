import React from 'react';
// import SidenavBar from './components/SidenavBar';
// import Home from './components/Home';
import Layout from './components/Layout';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        {/* <div className="flex h-screen overflow-hidden">
          <SidenavBar />
          <Home />
        </div> */}
        <Layout />
      </>
    )
  }

}


export default App;
