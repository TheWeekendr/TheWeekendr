import React from 'react';
import Layout from './components/Layout';
import DispLayout from './components/DispLayout';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        {/* <div className="flex h-screen overflow-hidden">
          <SidenavBar />
          <Home />
        </div> */}
        <DispLayout />
      </>
    )
  }
}


export default App;
