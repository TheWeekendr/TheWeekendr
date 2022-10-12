import React from 'react';
import Layout from './components/Layout';
import DispLayout from './components/DispLayout';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        name: '',
        password: '',
        zipCode: '',
        favFoods: [],
        favActivities: [],
      },
    };
  }

  setUserDataState = data => {
    this.setState({
      userData: data,
    });
  };

  getUser = async data => {
    try {
      // let userData = await axios.get(`${process.env.REACT_APP_SERVER}/user-name/Alice`);
      // let userData = await axios.get(`http://localhost:3001/user-name/Alice`);
      let userData = await axios.get(
        `http://localhost:3001/user-name/${data.name}`
      );

      this.setState({ userData: userData.data[0] });
    } catch (error) {
      alert(`Error: ${error.code} - ${error.message}`);
    }
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
          getUser={this.getUser}
        />
      </>
    );
  }
}

export default App;
