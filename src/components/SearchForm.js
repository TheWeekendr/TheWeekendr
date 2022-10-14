import React from 'react';
import { Input, InputGroup, Icon } from 'rsuite';
import { Form, ControlLabel, FormGroup, FormControl, Button } from 'rsuite';
import axios from 'axios';
import { LinkContainer } from 'react-router-bootstrap';
import { Whisper, Tooltip } from 'rsuite';
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
    this.props.setLoading(true);
    try {
      let searchQuery =
        this.props.userData.favActivities.slice(1, 4).join() || 'events';
      let location =
        this.state.formValue.zipCode || this.props.userData.zipCode;
      let apiUrl = `${process.env.REACT_APP_SERVER}/google-events?location=${location}&searchQuery=${searchQuery}`;

      let apiResponse = await axios.get(apiUrl);
      this.props.setGoogleEventsData(apiResponse.data.events_results);

      searchQuery =
        'restaurants ' + this.props.userData.favFoods.slice(1, 4).join(' ') ||
        'restaurants';
      location = this.state.formValue.zipCode || this.props.userData.zipCode;
      apiUrl = `${process.env.REACT_APP_SERVER}/yelp-restaurants?location=${location}&searchQuery=${searchQuery}`;
      apiResponse = await axios.get(apiUrl);

      this.props.setYelpRestaurantsData(apiResponse.data.organic_results);

      location = this.state.formValue.zipCode || this.props.userData.zipCode;
      apiUrl = `${process.env.REACT_APP_SERVER}/weather?location=${location}`;
      apiResponse = await axios.get(apiUrl);

      this.props.setWeatherData(apiResponse.data.data);
      this.props.setLoading(false);
    } catch (error) {
      alert(`Error(APIs): ${error.code} - ${error.message}`);
    }
  };

  // componentDidMount() {
  //   this.handleSearch();
  // }

  render() {
    return (
      <>
        <Whisper placement="auto" trigger="hover" speaker={<Tooltip>Press 'Search' to view results based off your Weekendr profile, or enter a new zip code to search results in a new location.</Tooltip> }>
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
        </Whisper>
      </>
    );
  }
}

export default SearchForm;
