import React from 'react';
import { Modal, Button } from 'rsuite';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'rsuite';
import { CheckPicker } from 'rsuite';
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
  }
  close() {
    this.setState({ show: false });
  }
  open() {
    this.setState({ show: true });
    console.log('userData - open', this.props.userData);
    this.setState({
      formValue: {
        name: this.props.userData.name,
        password: this.props.userData.password,
        zipCode: this.props.userData.zipCode,
      },
    });
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

  handleUpdateAccount = async () => {
    let userUpdateData = {
      name: this.state.formValue.name,
      // password: this.state.formValue.password,
      zipCode: this.state.formValue.zipCode,
      favFoods: this.state.favFoods,
      favActivities: this.state.favActivities,
      priorSearches: this.props.userData.priorSearches,
      savedActivities: this.props.userData.savedActivities,
      _id: this.props.userData._id,
      __v: this.props.userData.__v,
    };

    try {
      // await axios.put(
      //   `${process.env.REACT_APP_SERVER}/user/${userUpdateData._id}`,
      //   userUpdateData
      // );
      await axios.put(
        `http://localhost:3001/user/${userUpdateData._id}`,
        userUpdateData
      );

      this.props.setUserDataState(userUpdateData);
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
      <div className="mx-auto flex flex-col mx-16">
        <Modal show={this.state.show} onHide={this.close} size="xs">
          <Modal.Header>
            <Modal.Title>Update Profile</Modal.Title>
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
                <ControlLabel>Password</ControlLabel>
                <FormControl name="password" type="password" />
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
                <CheckPicker
                  onChange={this.handleFoods}
                  data={foodData}
                  defaultValue={this.props.userData.favFoods}
                  placeholder="Favorite Foods"
                  style={{ width: 400 }}
                />
              </FormGroup>
              <FormGroup>
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
            <Button onClick={this.handleUpdateAccount} appearance="primary">
              Save Changes
            </Button>
            <Button onClick={this.close} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
        <Button appearance="ghost" onClick={this.open}>
          Update Profile
        </Button>
      </div>
    );
  }
}

export default UpdateModal;
