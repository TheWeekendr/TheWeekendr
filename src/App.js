import React from 'react';
import Layout from './components/Layout';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { thisExpression } from '@babel/types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        name: '',
        userSub: '',
        zipCode: '',
        favFoods: [],
        favActivities: [],
        authData: null,
      },
      showSignupModal: false,
      showUpdateModal: false,
    };
  }

  setUserDataState = data => {
    this.setState({
      userData: data,
    });
  };
  setUserSubState = data => {
    this.setState({
      userData: { subUser: data },
    });
  };

  setShowSignupModal = show => {
    this.setState({ showSignupModal: show });
  };

  setShowUpdateModal = show => {
    this.setState({ showUpdateSignupModal: show });
  };

  getUser = async userSub => {
    if (this.state.userData.userSub === '') {
      try {
        let userData = await axios.get(
          `http://localhost:3001/user-sub/${userSub}`
        );
        if (userData.data.length > 0) {
          console.log('Got data!');
          this.setState({ userData: userData.data[0] });
        } else {
          this.setState({ userData: { userSub: userSub } });
          console.log('No data! Go fish!');
          this.setShowSignupModal(true);
        }
      } catch (error) {
        alert(`Error: ${error.code} - ${error.message}`);
      }
    }
  };

  render() {
    return (
      <>
        <BrowserRouter>
          <Layout
            userData={this.state.userData}
            setUserDataState={this.setUserDataState}
            getUser={this.getUser}
            setUserSubState={this.setUserSubState}
            setShowSignupModal={this.setShowSignupModal}
            showSignupModal={this.state.showSignupModal}
            setShowUpdateModal={this.setShowUpdateModal}
            showUpdateModal={this.state.showUpdateModal}
          />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
