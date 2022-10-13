import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { PanelGroup, Panel } from 'rsuite';
import EventCard from './EventCard';
import FoodCard from './FoodCard';
import WeatherCard from './WeatherCard';
import SignUpModal from './SignUpModal';

const Dash = props => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {isAuthenticated ? (
        <>
          <div>
            <PanelGroup accordion bordered className="w-full bg-slate-100">
              <Panel header="Events" collapsible>
                <div>
                  <EventCard
                    userData={props.userData}
                    googleEventsData={props.googleEventsData}
                  />
                </div>
              </Panel>
              <Panel header="Food" collapsible>
                <div>
                  <FoodCard
                    userData={props.userData}
                    foodData={props.foodData}
                  />
                </div>
              </Panel>
              <Panel header="Weather" collapsible>
                <div>
                  <WeatherCard
                    userData={props.userData}
                    weatherData={props.weatherData}
                  />
                </div>
              </Panel>
            </PanelGroup>
          </div>
        </>
      ) : (
        <>
          <section id="dashFade" className='mt-10'>
            <div className="px-6 py-12 md:px-12 text-slate-700 text-center lg:text-left">
              <div className="container mx-auto xl:px-32">
                <div className="mt-48 flex flex-col items-center justify-center z-10">
                  <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0 z-10">
                    <div
                      id="heroBlock2"
                      className="block rounded-lg shadow-lg px-6 py-14 md:px-12"
                    >
                      <h2 className="font-bold tracking-tight text-center text-slate-700">
                        <span id="dashText">Why, hello there!</span>
                      </h2>
                      <h3 id="dashLoginText" className="text-slate-700 mb-6">
                        Please log in or sign up to view your dashboard.
                      </h3>
                      <div className="mx-44">
                        <SignUpModal
                          setUserDataState={props.setUserDataState}
                          getUser={props.getUser}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div
            id="dashImgFade"
            className="flex items-center justify-center relative z-0"
          >
            <img
              src="https://iphoneswallpapers.com/wp-content/uploads/2021/05/Neon-Light-Palm-Tree.jpg"
              className="w-96 rounded-xl shadow-lg absolute z-0 mt-8 mb-96"
              alt=""
            />
          </div>
        </>
      )}
    </>
  );
};

export default Dash;
