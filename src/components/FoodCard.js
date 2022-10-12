import React from 'react';
import { Panel } from 'rsuite';
import data from '../data/yelpData.json';

console.log(data);
const foodData = data.organic_results;

class FoodCard extends React.Component {
  render() {
    return (
      <>
        <div id="scrollContainer" className='flex flex-nowrap mx-auto'>
          {foodData.map((event, i) => {
            return (
              <Panel id="eventCard" key={i} shaded bordered bodyFill style={{ display: 'inline-block', width: 320 }}>
                <img src={event.thumbnail} alt="thumbnail" height="240" className="mx-auto mt-5" />
                <Panel header={event.title}>
                  <div>
                    <p>Price: "{event.price}"</p>
                    <p>Rating: {event.rating}</p>
                    <p>Reviews: {event.reviews}</p>
                    <small className='mt-2'>"{event.snippet}"</small>
                    <p className='mt-3'><a href={event.link}>Yelp Review Page</a></p>
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

export default FoodCard;