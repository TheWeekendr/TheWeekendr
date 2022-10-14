import React from 'react';
import { Panel } from 'rsuite';
import data from '../data/weatherData.json';

console.log(data);
// const weatherData = data;

class WeatherCard extends React.Component {
  render() {
    const weatherData = this.props.weatherData;
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
                    <p className='mb-3 text-lg text-slate-700 text-center border-b border-t border-slate-300 py-3'>
                      The weather forecast on {event.datetime} calls for{' '}
                      {event.weather.description.toLowerCase()}.
                    </p>
                    <div className='text-center py-2'>
                      <b className='text-lg text-slate-800'>High:</b><span className='text-lg text-slate-600'> {event.high_temp} &#176;F</span>
                      <br />
                      <b className='text-lg text-slate-800'>Low:</b><span className='text-lg text-slate-600'> {event.low_temp} &#176;F</span>
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

export default WeatherCard;
