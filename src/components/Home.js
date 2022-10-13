import React from 'react';
import SignUpModal from './SignUpModal';
import UpdateModal from './UpdateModal';
import { withAuth0 } from '@auth0/auth0-react';

class Home extends React.Component {
  render() {
    return (
      <>
        <section>
          <div className="px-6 py-12 md:px-12 text-slate-700 text-center lg:text-left">
            <div className="container mx-auto xl:px-32">
              <div className="grid lg:grid-cols-2 flex items-center">
                <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                  <div
                    id="heroBlock"
                    className="block rounded-lg shadow-lg px-6 py-14 md:px-12 lg:-mr-14"
                  >
                    <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-6">
                      Welcome <br />
                      <span id="to" className="text-slate-700">to </span>
                      <span id="your" className="text-slate-700">your </span>
                      <span id="weekend">weekend.</span>
                    </h1>
                    <div className="w-3/5">
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
                  </div>
                </div>
                <div className="md:mb-12 lg:mb-0">
                  <img
                    src="https://wallpaperaccess.com/full/4611212.jpg"
                    className="w-5/6 rounded-lg shadow-lg"
                    alt="heroImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withAuth0(Home);
