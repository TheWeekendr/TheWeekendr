import React from 'react';
import '../App.css';
import '../rsuite.css';
import { Nav, Icon, Sidenav, Dropdown, Navbar } from 'rsuite';
import { Container, Header, Content, Sidebar, Button, ButtonToolbar } from 'rsuite';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'rsuite';
import SignUpModal from './SignUpModal';
import Events from './Events';


const headerStyles = {
  padding: 18,
  fontSize: 16,
  height: 256,
  background: '#64748b',
  color: ' #fff',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
};

const iconStyles = {
  width: 56,
  height: 56,
  lineHeight: '56px',
  textAlign: 'center'
};

const NavToggle = ({ expand, onChange }) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Navbar.Body>
        <Nav>
          <Dropdown
            placement="topStart"
            trigger="click"
            renderTitle={children => {
              return <Icon style={iconStyles} icon="cog" />;
            }}
          >
            <Dropdown.Item>Help</Dropdown.Item>
            <Dropdown.Item>Account Settings</Dropdown.Item>
            <Dropdown.Item>Sign Out</Dropdown.Item>
          </Dropdown>
        </Nav>

        <Nav pullRight>
          <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
            <Icon icon={expand ? 'angle-left' : 'angle-right'} />
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

class DispLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: true
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState({
      expand: !this.state.expand
    });
  }
  render() {
    const { expand } = this.state;
    return (
      <>
        <div className="show-fake-browser sidebar-page">
          <Container>
            <Sidebar
              style={{ display: 'flex', flexDirection: 'column' }}
              width={expand ? 260 : 56}
              collapsible
              className="ml-[-100%] z-10 top-0 pb-3 w-full flex flex-col justify-between h-screen border-r bg-slate-700 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]"
            >
              <Sidenav expanded={expand} defaultOpenKeys={['3']} appearance="subtle">
                <Sidenav.Header>
                  <div style={headerStyles}>
                    <span>
                      <div class="mt-8 text-center">
                        <img src="https://wallpapercave.com/uwp/uwp2022668.png" alt="logo" class="w-10 h-10 m-auto rounded-full object-cover drop-shadow-lg lg:w-32 lg:h-32" />
                        <h1 id="headerText" class="mt-5 lg:block">The Weekendr</h1>
                      </div>
                    </span>
                  </div>
                </Sidenav.Header>
                
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
              <NavToggle expand={expand} onChange={this.handleToggle} />
            </Sidebar>

            <Container>
              <Header>
                <div class="sticky top-0 border-b bg-slate-700 lg:py-2.5">
                  <div class="px-6 flex items-center justify-between space-x-4 2xl:container">
                    <h5 class="text-3xl text-white font-medium lg:block">Dash</h5>
                    <SignUpModal />
                  </div>
                </div>
              </Header>
              <Content className="overflow-auto">
                Content
                <Events />
              </Content>
            </Container>
          </Container>
        </div>
      </>
      
    );
  }
}

export default DispLayout;