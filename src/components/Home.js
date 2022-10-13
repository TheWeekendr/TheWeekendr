import React from 'react';
import SignUpModal from './SignUpModal';
import UpdateModal from './UpdateModal';
import { withAuth0 } from '@auth0/auth0-react';


class Home extends React.Component {
  render() {
    return (
      <>
        <section>
          <div class="px-6 py-12 md:px-12 text-slate-700 text-center lg:text-left">
            <div class="container mx-auto xl:px-32">
              <div class="grid lg:grid-cols-2 flex items-center">
                <div class="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                  <div
                    id="heroBlock"
                    class="block rounded-lg shadow-lg px-6 py-14 md:px-12 lg:-mr-14"
                  >
                    <h1 class="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-6">
                      Welcome <br />
                      <span class="text-slate-700">to your </span>
                      <span id="weekend">weekend.</span>
                    </h1>
                    <div className="w-3/5">
                      {this.props.auth0.isAuthenticated ?
                        <>
                          <UpdateModal
                            setUserDataState={this.props.setUserDataState}
                            userData={this.props.userData}
                          />
                        </>
                        :
                        <SignUpModal
                          setUserDataState={this.props.setUserDataState}
                          getUser={this.props.getUser}
                        />
                      }
                    </div>
                  </div>
                </div>
                <div class="md:mb-12 lg:mb-0">
                  <img
                    src="https://wallpaperaccess.com/full/4611212.jpg"
                    class="w-5/6 rounded-lg shadow-lg"
                    alt=""
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
