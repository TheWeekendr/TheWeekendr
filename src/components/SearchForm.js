import React from 'react';
import { Input, InputGroup, Icon } from 'rsuite';
import { Form, ControlLabel, FormGroup, FormControl, Button } from 'rsuite';
import axios from 'axios';
import { LinkContainer } from 'react-router-bootstrap';
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
      let searchQuery = this.props.userData.favActivities.join() || 'events';
      let location =
        this.state.formValue.zipCode || this.props.userData.zipCode;
      let apiUrl = `${process.env.REACT_APP_SERVER}/google-events?location=${location}&searchQuery=${searchQuery}`;

      let apiResponse = await axios.get(apiUrl);
      this.props.setGoogleEventsData(apiResponse.data.events_results);

      searchQuery =
        'restaurants ' + this.props.userData.favFoods.join(' ') ||
        'restaurants';
      location = this.state.formValue.zipCode || this.props.userData.zipCode;
      apiUrl = `${process.env.REACT_APP_SERVER}/yelp-restaurants?location=${location}&searchQuery=${searchQuery}`;
      apiResponse = await axios.get(apiUrl);

      this.props.setYelpRestaurantsData(apiResponse.data.organic_results);

      location = this.state.formValue.zipCode || this.props.userData.zipCode;
      apiUrl = `${process.env.REACT_APP_SERVER}/weather?location=${location}`;
      apiResponse = await axios.get(apiUrl);

      this.props.setWeatherData(apiResponse.data.data);
    } catch (error) {
      alert(`Error(APIs): ${error.code} - ${error.message}`);
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
