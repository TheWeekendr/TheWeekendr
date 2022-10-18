import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import PanelLoader from './PanelLoader';

const Dash = props => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <></>;
  }

  return (
    <>
      {isAuthenticated ? (
        <>
          <PanelLoader
            userData={props.userData}
            googleEventsData={props.googleEventsData}
            foodData={props.foodData}
            weatherData={props.weatherData}
            loading={props.loading}
          />
        </>
      ) : (
        <>
          <section id="dashFade" className='mt-10'>
            <div className="px-6 py-12 pt-16 md:px-12 text-slate-700 text-center lg:text-left">
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
                      <h3 id="dashLoginText" className="text-slate-700 mb-5">
                        Please log in or sign up to view your dashboard.
                      </h3>
                      <div id="dashLoginText" className="flex justify-center mx-auto mb-1">
                        <span id="teamDash" className="inline-block w-28 h-1 mx-2 bg-pink-300 rounded-full"></span>
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
