import React from 'react';
import { Modal, Button } from 'rsuite';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'rsuite';
import { CheckPicker } from 'rsuite';
import { Tooltip, Whisper } from 'rsuite';
import { withAuth0 } from '@auth0/auth0-react';
import foodData from '../data/foodData.json';
import activitiesData from '../data/activitiesData.json';
import axios from 'axios';

class UpdateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: {
        name: this.props.userData.name,
        password: this.props.userData.password,
        zipCode: this.props.userData.zipCode,
      },
      favFoods: this.props.userData.favFoods,
      favActivities: this.props.userData.favActivities,
      show: false,
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFoods = this.handleFoods.bind(this);
    this.handleActivities = this.handleActivities.bind(this);
    this.handleUpdateAccount = this.handleUpdateAccount.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  close() {
    this.props.closeProfile();
    this.setState({ show: false });
  }

  open() {
    this.setState({ show: true });

    this.setState({
      formValue: {
        name: this.props.userData.name,
        password: this.props.userData.password,
        zipCode: this.props.userData.zipCode,
      },
    });

    this.setState({ favFoods: this.props.userData.favFoods });
    this.setState({ favActivities: this.props.userData.favActivities });
  }

  handleChange(value) {
    this.setState({
      formValue: value,
    });
  }

  handleDelete = async () => {
    let verify = window.confirm(
      'Are you sure you want to delete this account? You will be logged out and will need to create a new profile to use this app.'
    );
    if (verify) {
      try {
        await axios.delete(
          `${process.env.REACT_APP_SERVER}/user/${this.props.userData.userSub}`
        );
        const { logout } = this.props.auth0;
        logout({ returnTo: window.location.origin });
        this.close();
      } catch (error) {
        alert(`Error: ${error.code} - ${error.message}`);
      }
    }
  }; 

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

  handleUpdateAccount = async () => {
    let userUpdateData = {
      name: this.state.formValue.name,
      userSub: this.props.userData.userSub,
      zipCode: this.state.formValue.zipCode,
      favFoods: this.state.favFoods,
      favActivities: this.state.favActivities,
      priorSearches: this.props.userData.priorSearches,
      savedActivities: this.props.userData.savedActivities,
      _id: this.props.userData._id,
      __v: this.props.userData.__v,
    };

    try {
      await axios.put(
        `${process.env.REACT_APP_SERVER}/user/${userUpdateData._id}`,
        userUpdateData
      );

      this.props.setUserDataState(userUpdateData);
    } catch (error) {
      alert(`Error: ${error.code} - ${error.message}`);
    }
    this.close();
  };

  render() {
    return (
      <div className="mx-auto flex flex-col mx-16">
        <Modal show={this.state.show} onHide={this.close} size="xs">
          <Modal.Header>
            <Modal.Title>Update Search Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              fluid
              onChange={this.handleChange}
              formValue={this.state.formValue}
            >
              <FormGroup>
                <ControlLabel>Username</ControlLabel>
                <FormControl
                  name="name"
                  placeholder={this.props.userData.name}
                />
                <HelpBlock>Required</HelpBlock>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Zip Code</ControlLabel>
                <FormControl
                  name="zipCode"
                  type="zip-code"
                  placeholder={this.props.userData.zipCode}
                />
                <HelpBlock>Required</HelpBlock>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Select Up to 3</ControlLabel>
                <CheckPicker
                  onChange={this.handleFoods}
                  data={foodData}
                  defaultValue={this.props.userData.favFoods}
                  placeholder="Favorite Foods"
                  style={{ width: 400 }}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Select Up to 2</ControlLabel>
                <CheckPicker
                  onChange={this.handleActivities}
                  data={activitiesData}
                  defaultValue={this.props.userData.favActivities}
                  placeholder="Favorite Activities"
                  style={{ width: 400 }}
                />
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleUpdateAccount} appearance="default">
              Save Changes
            </Button>
            <Button onClick={this.close} appearance="subtle">
              Cancel
            </Button>
            <Button onClick={this.handleDelete} appearance="subtle">
              Delete Account
            </Button>
          </Modal.Footer>
        </Modal>
        <Whisper
          placement="right"
          trigger="hover"
          speaker={
            <Tooltip>
              This will allow you to update
              <br /> your profile search criteria.
            </Tooltip>
          }
        >
          <Button block appearance="default" size="md" onClick={this.open}>
            Update Search Criteria
          </Button>
        </Whisper>
      </div>
    );
  }
}

export default withAuth0(UpdateModal);
