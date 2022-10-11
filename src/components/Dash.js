import React from 'react';
import axios from 'axios';

class Dash extends React.Component {
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
    };
  }

  

  render() {
    return (
      <>
      </>
    );
  }
};

export default Dash;
