import React from 'react';
import { PanelGroup, Panel } from 'rsuite';
import EventCard from './EventCard';
import FoodCard from './FoodCard';
import WeatherCard from './WeatherCard';
// import { Loader } from 'rsuite';
import { Grid } from 'react-loader-spinner'

class PanelLoader extends React.Component {
  render() {
    if (this.props.loading) {
      return (
        ( <section>
            <div className="mt-48 flex flex-col items-center justify-center z-10">
              <div id="heroBlock2" className="block w-96 rounded-lg shadow-lg px-6 py-14 md:px-12 mx-auto">
                {/* <span><Loader size="md" center content="loading results..." /></span> */}
              <span className="mx-auto justify-center"><Grid
                height="80"
                width="80"
                color="#f71d91"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                wrapperClass=""
                visible={true} />
              </span>
              </div>
            </div>
          </section> )
      );
    } else {
      return (
        <div className='shadow-lg'>
          <PanelGroup accordion bordered className="w-full bg-slate-100">
            <Panel header="Events" collapsible>
              <div>
                <EventCard
                  userData={this.props.userData}
                  googleEventsData={this.props.googleEventsData}
                />
              </div>
            </Panel>
            <Panel header="Food" collapsible>
              <div>
                <FoodCard
                  userData={this.props.userData}
                  foodData={this.props.foodData}
                />
              </div>
            </Panel>
            <Panel header="Weather" collapsible defaultExpanded>
              <div>
                <WeatherCard
                  userData={this.props.userData}
                  weatherData={this.props.weatherData}
                />
              </div>
            </Panel>
          </PanelGroup>
        </div>
      );
    }
  }
}

export default PanelLoader;
