import React from 'react';
import '../App.css';
import '../rsuite.css';
import { Nav, Icon, Sidenav, Dropdown, Navbar, Footer } from 'rsuite';
import {
  Container,
  Header,
  Content,
  Sidebar,
  Button,
  ButtonToolbar,
} from 'rsuite';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'rsuite';
import { LinkContainer } from 'react-router-bootstrap';
import NavRoutes from '../NavRoutes';
import SearchForm from './SearchForm';
// import SignUpModal from './SignUpModal';
// import UpdateModal from './UpdateModal';
import { withAuth0 } from '@auth0/auth0-react';
import Login from './Login';
import Logout from './Logout';
import data from '../data/eventData.json';
import axios from 'axios';

const headerStyles = {
  padding: 18,
  fontSize: 16,
  height: 300,
  background: '#475569',
  color: ' #fff',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
};

const iconStyles = {
  width: 56,
  height: 56,
  lineHeight: '56px',
  textAlign: 'center',
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
            <Dropdown.Item>Update Profile</Dropdown.Item>
            <Dropdown.Item>Sign Out</Dropdown.Item>
          </Dropdown>
        </Nav>

        <Nav pullRight>
          <Nav.Item
            onClick={onChange}
            style={{ width: 56, textAlign: 'center' }}
          >
            <Icon icon={expand ? 'angle-left' : 'angle-right'} />
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: true,
      googleEventsData: data.events_results,
      foodData: null,
      weatherData: null,
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.setGoogleEventsData = this.setGoogleEventsData.bind(this);
  }
  handleToggle() {
    this.setState({
      expand: !this.state.expand,
    });
  }

  setGoogleEventsData(data) {
    this.setState({ googleEventsData: data });
  }

  async componentDidMount() {
    // auth0 stuff goes here
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      console.log('token: ', jwt);

      // const config = {
      //   headers: { Authorization: `Bearer ${jwt}` },
      //   method: 'get',
      //   baseURL: process.env.REACT_APP_SERVER,
      //   url: '/user',
      // };

      // const userResponse = await axios(config);

      // console.log('userResponse: ', userResponse);

      // this.props.setUserDataState({
      //   userData: userResponse.data
      // });
    }
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
              <Sidenav
                expanded={expand}
                defaultOpenKeys={['3']}
                appearance="subtle"
              >
                <Sidenav.Header>
                  <div style={headerStyles}>
                    <span>
                      <div class="mt-8 text-center">
                        <img
                          src="https://wallpapercave.com/uwp/uwp2022668.png"
                          alt="logo"
                          class="w-10 h-10 m-auto rounded-full object-cover drop-shadow-lg lg:w-32 lg:h-32"
                        />
                        <h1 id="headerText" class="mt-3 pr-8 lg:block mx-auto">
                          <span className="">The</span> <br />
                          Weekendr
                        </h1>
                      </div>
                    </span>
                  </div>
                </Sidenav.Header>

                <Sidenav.Body>
                  <Nav>
                    <LinkContainer to="/">
                      <Nav.Item
                        href="/"
                        eventKey="1"
                        icon={<Icon icon="home" />}
                      >
                        Home
                      </Nav.Item>
                    </LinkContainer>
                    <LinkContainer to="/dash">
                      <Nav.Item
                        href="/dash"
                        eventKey="2"
                        icon={<Icon icon="dashboard" />}
                      >
                        Dash
                      </Nav.Item>
                    </LinkContainer>
                    <LinkContainer to="/map">
                      <Nav.Item
                        href="/map"
                        eventKey="3"
                        icon={<Icon icon="map" />}
                      >
                        Map
                      </Nav.Item>
                    </LinkContainer>
                    <LinkContainer to="/about">
                      <Nav.Item
                        href="/about"
                        eventKey="4"
                        icon={<Icon icon="group" />}
                      >
                        About
                      </Nav.Item>
                    </LinkContainer>
                    <Dropdown
                      placement="rightStart"
                      eventKey="4-5"
                      title="Login"
                      icon={<Icon icon="gear-circle" />}
                    >
                      <Dropdown.Item eventKey="4-5">
                        {this.props.auth0.isAuthenticated ? (
                          <>
                            <Logout />
                          </>
                        ) : (
                          <Login />
                        )}
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
                <div class="sticky top-0 h-14 border-b bg-slate-700 lg:py-2.5">
                  <div class="px-6 flex items-center justify-between space-x-4 2xl:container">
                    <h5 class="text-3xl text-white font-medium lg:block"></h5>
                    <SearchForm
                      userData={this.props.userData}
                      googleEventsData={this.state.googleEventsData}
                      setGoogleEventsData={this.setGoogleEventsData}
                      foodData={this.state.foodData}
                      weatherData={this.state.weatherData}
                    />
                    {/* <SignUpModal
                      setUserDataState={this.props.setUserDataState}
                      getUser={this.props.getUser}
                    />
                    <UpdateModal
                      setUserDataState={this.props.setUserDataState}
                      userData={this.props.userData}
                    /> */}
                  </div>
                </div>
              </Header>
              <Content id="dashContainer" className="p-6 bg-slate-300">
                <NavRoutes
                  setUserDataState={this.props.setUserDataState}
                  getUser={this.props.getUser}
                  userData={this.props.userData}
                  googleEventsData={this.state.googleEventsData}
                />
              </Content>
              <Footer id="footer" className="bg-slate-700"></Footer>
            </Container>
          </Container>
        </div>
      </>
    );
  }
}

export default withAuth0(Layout);
