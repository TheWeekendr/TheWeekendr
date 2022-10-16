import React from 'react';
import '../App.css';
import '../rsuite.css';
import { Nav, Icon, Sidenav, Navbar, Footer } from 'rsuite';
import { Container, Header, Content, Sidebar } from 'rsuite';
import { LinkContainer } from 'react-router-bootstrap';
import NavRoutes from '../NavRoutes';
import SearchForm from './SearchForm';
import SignUpModal from './SignUpModal';
import UpdateModal from './UpdateModal';
import { withAuth0 } from '@auth0/auth0-react';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './Login';
import Logout from './Logout';
import Profile from './Profile';

const NavToggle = (props, { expand, onChange }) => {
  // If logged in, check to see if user is in DB. If so, get profile. If not, launch signup
  const { user, isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    props.getUser(user.sub);
  } else {
    // Not logged in
  }

  return (
    <Navbar appearance="subtle">
      <Navbar.Body>
        <div className='h-14 w-full flex flex-col justify-center'>
          <p className='mx-auto text-sm' style={{ color: '#e2e8f0' }}>&copy; 2022 The Weekendr</p>
        </div>
      </Navbar.Body>
    </Navbar>
  );
};

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: true,
      googleEventsData: [],
      foodData: [],
      weatherData: [],
      loading: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.setGoogleEventsData = this.setGoogleEventsData.bind(this);
    this.setYelpRestaurantsData = this.setYelpRestaurantsData.bind(this);
    this.setWeatherData = this.setWeatherData.bind(this);
    this.setLoading = this.setLoading.bind(this);
  }
  handleToggle() {
    this.setState({
      expand: !this.state.expand,
    });
  }

  setGoogleEventsData(data) {
    this.setState({ googleEventsData: data });
  }

  setYelpRestaurantsData(data) {
    this.setState({ foodData: data });
  }

  setWeatherData(data) {
    this.setState({ weatherData: data });
  }

  setLoading(data) {
    this.setState({ loading: data });
  }

  // async componentDidMount() {
  //   // auth0 stuff goes here
  //   // if (this.props.auth0.isAuthenticated) {
  //   //   console.log('Layout -- Logged in!');
  //   //   const res = await this.props.auth0.getIdTokenClaims();
  //   //   const jwt = res.__raw;

  //   //   console.log('token:  ', jwt);

  //     // const config = {
  //     //   headers: { Authorization: `Bearer ${jwt}` },
  //     //   method: 'get',
  //     //   baseURL: process.env.REACT_APP_SERVER,
  //     //   url: '/user',
  //     // };

  //     // const userResponse = await axios(config);

  //     // console.log('userResponse: ', userResponse);

  //     // this.props.setUserDataState({
  //     //   userData: userResponse.data
  //     // });
  //   }
  // }

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
                  <div id="sideNavBody" className='border-b border-slate-400'>
                    <span>
                      <div className="mt-4 text-center z-0 flex flex-col justify-between align-center items-center">
                        <div id="card">
                          <img
                            src="https://wallpapercave.com/uwp/uwp2022668.png"
                            alt="logo"
                            className="w-full h-full m-auto rounded-full object-cover drop-shadow-lg z-10"
                          />
                        </div>
                        <h1
                          id="headerText"
                          className="mt-3 lg:block mx-auto z-50 relative flex"
                        >
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
                    <Nav.Item
                      eventKey="5"
                      icon={<Icon icon="gear-circle" className="py-2" />}
                    >
                      {this.props.auth0.isAuthenticated ? (
                        <>
                          <Logout />
                        </>
                      ) : (
                        <Login />
                      )}
                    </Nav.Item>
                    <div className="mt-4">
                      {this.props.auth0.isAuthenticated ? (
                        <>
                          <UpdateModal
                            setUserDataState={this.props.setUserDataState}
                            userData={this.props.userData}
                          />
                        </>
                      ) : (
                        <SignUpModal
                          setShowSignupModal={this.props.setShowSignupModal}
                          showSignupModal={this.props.showSignupModal}
                          setUserDataState={this.props.setUserDataState}
                          getUser={this.props.getUser}
                          userData={this.props.userData}
                        />
                      )}
                    </div>
                  </Nav>
                </Sidenav.Body>
              </Sidenav>
              <NavToggle
                getUser={this.props.getUser}
                userData={this.props.userData}
              />
            </Sidebar>

            <Container>
              <Header>
                <div className="sticky flex flex-row justify-between top-0 h-14 border-b bg-slate-700">
                  <div className="px-6 flex items-center justify-between space-x-4 container">
                    <div>
                      <Profile />
                    </div>
                    {this.props.auth0.isAuthenticated ? (
                      <>
                       <SearchForm
                         userData={this.props.userData}
                         googleEventsData={this.state.googleEventsData}
                         setGoogleEventsData={this.setGoogleEventsData}
                         setYelpRestaurantsData={this.setYelpRestaurantsData}
                         setWeatherData={this.setWeatherData}
                         foodData={this.state.foodData}
                         weatherData={this.state.weatherData}
                         setLoading={this.setLoading}
                       />
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </Header>
              <Content id="dashContainer" className="p-6 bg-slate-300">
                <NavRoutes
                  setUserDataState={this.props.setUserDataState}
                  getUser={this.props.getUser}
                  userData={this.props.userData}
                  googleEventsData={this.state.googleEventsData}
                  foodData={this.state.foodData}
                  weatherData={this.state.weatherData}
                  setShowSignupModal={this.props.setShowSignupModal}
                  showSignupModal={this.props.showSignupModal}
                  loading={this.state.loading}
                />
                <SignUpModal
                  setShowSignupModal={this.props.setShowSignupModal}
                  showSignupModal={this.props.showSignupModal}
                  setUserDataState={this.props.setUserDataState}
                  getUser={this.props.getUser}
                  userData={this.props.userData}
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
