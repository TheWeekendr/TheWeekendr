import React from 'react';
import { Input, InputGroup, Icon } from 'rsuite';
import { Form, ControlLabel, FormGroup, FormControl, Button } from 'rsuite';
import axios from 'axios';
import { CLASS_TYPES } from '@babel/types';
import { LinkContainer } from 'react-router-bootstrap';
// import { DateRangePicker } from 'rsuite';
import { LinkContainer } from 'react-router-bootstrap';

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
    // Query Google Events API
    try {
      const searchQuery = this.props.userData.favActivities.join() || 'events';
      const location =
        this.state.formValue.zipCode || this.props.userData.zipCode;
      const apiUrl = `http://localhost:3001/google-events?location=${location}&searchQuery=${searchQuery}`;

      const apiResponse = await axios.get(apiUrl);
      this.props.setGoogleEventsData(apiResponse.data.events_results);
    } catch (error) {
      alert(`Error(Google Events API): ${error.code} - ${error.message}`);
    }

    // Query Yelp Restaurants API
    try {
      const searchQuery =
        'restaurants ' + this.props.userData.favFoods.join(' ') ||
        'restaurants';
      const location =
        this.state.formValue.zipCode || this.props.userData.zipCode;
      const apiUrl = `http://localhost:3001/yelp-restaurants?location=${location}&searchQuery=${searchQuery}`;
      const apiResponse = await axios.get(apiUrl);

      this.props.setYelpRestaurantsData(apiResponse.data.organic_results);
    } catch (error) {
      alert(`Error(Yelp Restaurants API): ${error.code} - ${error.message}`);
    }

    // Query Weather API
    try {
      const location =
        this.state.formValue.zipCode || this.props.userData.zipCode;
      const apiUrl = `http://localhost:3001/weather?location=${location}`;
      const apiResponse = await axios.get(apiUrl);

      this.props.setWeatherData(apiResponse.data.data);
    } catch (error) {
      alert(`Error(Weather API): ${error.code} - ${error.message}`);
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
                // onChange={this.handleChange}
                maxLength={5}
              />
              <InputGroup.Addon>
                <Icon icon="search" />
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>
          <LinkContainer to="/dash">
            <Button href="/dash" onClick={this.handleSearch}>
              Search
            </Button>
          </LinkContainer>
        </Form>
      </>
    );
  }
}

export default SearchForm;
