import React from 'react';
import { Input, InputGroup, Icon } from 'rsuite';
import { Form, ControlLabel, FormGroup, FormControl, Button } from 'rsuite';
// import { DateRangePicker } from 'rsuite';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: {
        search: '',
        dates: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      formValue: value,
    });
  }

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
                name="searchZip"
                style={{ width: 180 }}
                onChange={this.handleChange}
                maxLength={5}
              />
              <InputGroup.Addon>
                <Icon icon="search" />
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>

          <Button>Search</Button>
        </Form>
      </>
    );
  }
};

export default SearchForm;
