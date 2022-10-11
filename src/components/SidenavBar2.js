import React from 'react';
import '../App.css';
import '../rsuite.css';
import { Sidenav, Nav, Dropdown } from 'rsuite';
// import { Toggle } from 'rsuite';
import { Icon } from '@rsuite/icons';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'rsuite';
import { Button, ButtonToolbar } from 'rsuite';
import SignUpModal from './SignUpModal';


class SidenavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: '1'
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleToggle() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const { expanded } = this.state;

    return (
      <>
        <div id="sideNav" className='mt-5'>
          <SignUpModal />
          {/* <Toggle onChange={this.handleToggle} checked={expanded} />
          <hr /> */}
          <Sidenav
            expanded={expanded}
            defaultOpenKeys={['3', '4']}
            activeKey={this.state.activeKey}
            onSelect={this.handleSelect}
            appearance="subtle"
            className='mt-5'
          >
            <Sidenav.Body>
              <Nav>
                <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
                  Home
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
                  Dash
                </Nav.Item>
                <Nav.Item eventKey="3" icon={<Icon icon="group" />}>
                  Map
                </Nav.Item>
                <Nav.Item eventKey="4" icon={<Icon icon="group" />}>
                  About
                </Nav.Item>

                <Dropdown
                  placement="rightStart"
                  eventKey="4-5"
                  title="Login"
                  icon={<Icon icon="gear-circle" />}
                >
                  <Dropdown.Item eventKey="4-5">
                    <Form fluid>
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
                        <ButtonToolbar>
                          <Button appearance="primary">Submit</Button>
                          <Button appearance="default">Cancel</Button>
                        </ButtonToolbar>
                      </FormGroup>
                    </Form>
                  </Dropdown.Item>
                </Dropdown>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
        </div>
      </>
    );
  }
}

export default SidenavBar;
