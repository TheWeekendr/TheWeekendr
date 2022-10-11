import React from 'react';
import { Modal, Button } from 'rsuite';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'rsuite';
import { CheckPicker } from 'rsuite';
import axios from 'axios';

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: {
        name: '',
        password: '',
        zipCode: '',
      },
      favFoods: [],
      favActivities: [],
      show: false,
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFoods = this.handleFoods.bind(this);
    this.handleActivities = this.handleActivities.bind(this);
  }
  close() {
    this.setState({ show: false });
  }
  open() {
    this.setState({ show: true });
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
      // password: this.state.formValue.password,
      zipCode: this.state.formValue.zipCode,
      favFoods: this.state.favFoods,
      favActivities: this.state.favActivities,
    };

    try {
      // const res = await axios.post(
      //   `${process.env.REACT_APP_SERVER}/user`,
      //   userData
      // );
      const res = await axios.post(`http://localhost:3001/user`, userData);

      this.props.setUserDataState(userData);
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
        <Modal show={this.state.show} onHide={this.close} size="xs">
          <Modal.Header>
            <Modal.Title>Sign Up</Modal.Title>
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
                <ControlLabel>Password</ControlLabel>
                <FormControl name="password" type="password" />
                <HelpBlock>Required</HelpBlock>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Zip Code</ControlLabel>
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
        <Button appearance="ghost" onClick={this.open}>
          Sign Up
        </Button>
      </div>
    );
  }
}

export default SignUpModal;
