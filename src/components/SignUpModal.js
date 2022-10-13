import React from 'react';
import { Modal, Button } from 'rsuite';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'rsuite';
import { CheckPicker } from 'rsuite';
import axios from 'axios';

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // formValue: {
      //   name: this.props.userData.name || '',
      //   password: this.props.userData.password || '',
      //   zipCode: this.props.userData.zipCode || '',
      // },
      // favFoods: this.props.userData.favFoods || [],
      // favActivities: this.props.userData.favActivities || [],
      show: false,
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFoods = this.handleFoods.bind(this);
    this.handleActivities = this.handleActivities.bind(this);
  }
  close() {
    this.props.setShowSignupModal(false);
  }
  open() {
    this.props.setShowSignupModal(true);
  }
  handleChange(value) {
    this.setState({
      formValue: value,
    });
  }

  handleFoods(value) {
    this.setState({
      favFoods: value,
    });
  }

  handleActivities(value) {
    this.setState({
      favActivities: value,
    });
  }

  handleCreateAccount = async () => {
    let userData = {
      name: this.state.formValue.name,
      zipCode: this.state.formValue.zipCode,
      favFoods: this.state.favFoods,
      favActivities: this.state.favActivities,
      userSub: this.props.userData.userSub,
    };

    try {
      // await axios.post(`${process.env.REACT_APP_SERVER}/user`, userData);
      await axios.post(`http://localhost:3001/user`, userData);

      this.props.setUserDataState(userData);
      // this.props.getUser(userData);
    } catch (error) {
      alert(`Error: ${error.code} - ${error.message}`);
    }
    this.close();
  };

  render() {
    const foodData = [
      {
        value: 'chinese',
        label: 'Chinese',
      },
      {
        value: 'thai',
        label: 'Thai',
      },
      {
        value: 'italian',
        label: 'Italian',
      },
      {
        value: 'mexican',
        label: 'Mexican',
      },
      {
        value: 'mongolian',
        label: 'Mongolian',
      },
    ];

    const activitiesData = [
      {
        value: 'golf',
        label: 'Golf',
      },
      {
        value: 'comedy',
        label: 'Comedy',
      },
      {
        value: 'wine',
        label: 'Wine',
      },
      {
        value: 'beer',
        label: 'Beer',
      },
      {
        value: 'art',
        label: 'Art',
      },
      {
        value: 'music',
        label: 'Music',
      },
    ];

    return (
      <div className="sticky mx-auto flex flex-col mx-16">
        <Modal show={this.props.showSignupModal} onHide={this.close} size="xs">
          <Modal.Header>
            <Modal.Title><p className='text-slate-700 mb-2'>Create Weekendr Search Profile</p></Modal.Title>
            <Modal.Title><small className='text-slate-500'>Use the following form to create a user profile<br />in order to retrieve your search results. </small></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              fluid
              onChange={this.handleChange}
              formValue={this.state.formValue}
            >
              <FormGroup>
                <ControlLabel>Username</ControlLabel>
                <FormControl name="name" />
                <HelpBlock>Required</HelpBlock>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Home Zip Code</ControlLabel>
                <FormControl name="zipCode" type="zip-code" />
                <HelpBlock>Required</HelpBlock>
              </FormGroup>
              <FormGroup>
                <CheckPicker
                  onChange={this.handleFoods}
                  data={foodData}
                  placeholder="Favorite Foods"
                  style={{ width: 400 }}
                  preventOverflow
                />
              </FormGroup>
              <FormGroup>
                <CheckPicker
                  onChange={this.handleActivities}
                  data={activitiesData}
                  placeholder="Favorite Activities"
                  style={{ width: 400 }}
                  preventOverflow
                />
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleCreateAccount} appearance="primary">
              Create Account
            </Button>
            <Button onClick={this.close} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
        {/* <Button block appearance="default" size="lg" onClick={this.open}>
          Sign Up
        </Button> */}
      </div>
    );
  }
}

export default SignUpModal;
