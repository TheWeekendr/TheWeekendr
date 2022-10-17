import React from 'react';
import { Panel } from 'rsuite';
import moment from 'moment';

class WeatherCard extends React.Component {
  render() {
    const weatherData = this.props.weatherData;
    if (weatherData.length === 0) {
      console.log(weatherData);
      return (
        <>
          <div className='flex flex-col justify-center items-center'> 
            <Panel
              id="eventCard"
              shaded
              bordered
              bodyFill
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 600, flexDirection: 'row', backgroundColor: '#fbcfe8' }}
            >
              <span>
                <div className="mt-9 text-center">
                  <img
                    src="https://i.pinimg.com/originals/ee/ff/bb/eeffbbe09c8fc37c6a7a6b28faf03b1f.jpg"
                    alt="logo"
                    className="w-10 h-10 m-auto rounded-full object-cover drop-shadow-lg lg:w-32 lg:h-32"
                  />
                </div>
              </span>
              <Panel>
                <div className='flex flex-col justify-center items-center'>
                  <p className='mb-3 mt-6 text-lg text-slate-800 text-center border-b border-t border-slate-800 py-3 px-6 mx-auto'>
                    Simply press <span id="searchText" className='font-semibold text-slate-700'>Search</span> to view your Weekendr results!
                  </p>
                </div>
              </Panel>
            </Panel>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div id="scrollContainer">
            {weatherData.map((event, i) => {
              return (
                <Panel
                  id="eventCard"
                  key={i}
                  shaded
                  bordered
                  bodyFill
                  style={{ display: 'inline-block', width: 320, }}
                >
                  <Panel>
                    <div>
                      <img src={`https://www.weatherbit.io/static/img/icons/${event.weather.icon}.png`} alt="weatherIcon" className='mx-auto' />
                      <p className='mb-3 text-lg text-slate-700 text-center border-b border-t border-indigo-200 py-3'>
                        The weather forecast on 
                        <br />
                        <span className='text-slate-800 font-semibold'>{moment(event.datetime).format("dddd, MMMM Do YYYY")}</span>
                        <br /> calls for {event.weather.description.toLowerCase()}.
                      </p>
                      <div className='text-center py-2'>
                        <b className='text-lg text-slate-800'>High:</b><span className='text-lg text-slate-700'> {event.high_temp} &#176;F</span>
                        <br />
                        <b className='text-lg text-slate-800'>Low:</b><span className='text-lg text-slate-700'> {event.low_temp} &#176;F</span>
                      </div>
                    </div>
                  </Panel>
                </Panel>
              );
            })}
          </div>
        </>
      );
    }
  }
};

export default WeatherCard;
