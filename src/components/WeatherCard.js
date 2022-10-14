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
                style={{ display: 'inline-block', width: 320 }}
              >
                {/* <img src={event.thumbnail} alt="thumbnail" height="240" className="mx-auto mt-5" /> */}
                <Panel>
                  <div>

                    <img src={`https://www.weatherbit.io/static/img/icons/${event.weather.icon}.png`} alt="weatherIcon"/>
                    <p>
                      The weather forecast on {event.datetime} calls for{' '}
                      {event.weather.description.toLowerCase()}.
                    </p>
                    
                    <b>High:</b> {event.high_temp} &#176;F
                    <br />
                    <b>Low:</b> {event.low_temp} &#176;F
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
