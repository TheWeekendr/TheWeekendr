import React from 'react';
import { Input, InputGroup, Icon } from 'rsuite';
import { Form, ControlLabel, FormGroup, FormControl, Button } from 'rsuite';
import axios from 'axios';
import { CLASS_TYPES } from '@babel/types';
// import { DateRangePicker } from 'rsuite';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: {
        zipCode: '',
        // dates: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      formValue: value,
    });
  }

  handleSearch = async () => {
    try {
      const searchQuery = ['wine'].join();
      // const searchQuery = this.props.userData.favActivities.join();
      // const location = (this.state.formValue.zipCode.length = 5
      //   ? this.state.formValue.zipCode
      //   : this.props.userData.zipCode);
      const location = '94596';
      const apiUrl = `http://localhost:3001/google-events?location=${location}&searchQuery=${searchQuery}`;

      const apiResponse = await axios.get(apiUrl);
      this.props.setGoogleEventsData(apiResponse.data.events_results);
    } catch (error) {
      alert(`Error: ${error.code} - ${error.message}`);
    }
  };

  render() {
    return (
      <>
        <Form
          layout="inline"
          onChange={this.handleChange}
          formValue={this.state.formValue}
        >
          {/* <FormGroup>
            <ControlLabel srOnly>Dates</ControlLabel>
            <FormControl 
              accepter={DateRangePicker} 
              placeholder="Please select your weekend:" 
              name="selectDate" 
              style={{ width: 280 }}
              onChange={this.handleChange}
            />
          </FormGroup> */}

          <FormGroup>
            <ControlLabel srOnly>Search</ControlLabel>
            <InputGroup inside>
              <FormControl
                accepter={Input}
                placeholder="Enter Zip Code"
                name="zipCode"
                style={{ width: 180 }}
                onChange={this.handleChange}
                maxLength={5}
              />
              <InputGroup.Addon>
                <Icon icon="search" />
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>

          <Button onClick={this.handleSearch}>Search</Button>
        </Form>
      </>
    );
  }
}

export default SearchForm;
