import React from 'react';
import { Panel } from 'rsuite';
import data from '../data/weatherData.json';

console.log(data);
const weatherData = data;

class WeatherCard extends React.Component {
  render() {
    return (
      <>
        <div id="scrollContainer">
          {weatherData.map((event, i) => {
            return (
              <Panel id="eventCard" key={i} shaded bordered bodyFill style={{ display: 'inline-block', width: 320 }}>
                {/* <img src={event.thumbnail} alt="thumbnail" height="240" className="mx-auto mt-5" /> */}
                <Panel header={event.city_name}>
                  <div>
                    <p>The weather forecast in {event.city_name} calls for {event.data[0].weather.description.toLowerCase()}.</p>
                    <b>High:</b> {event.data[0].high_temp} &#176;F
                    <br />
                    <b>Low:</b> {event.data[0].low_temp} &#176;F
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