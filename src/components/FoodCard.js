import React from 'react';
import { Panel } from 'rsuite';

class FoodCard extends React.Component {
  render() {
    const foodData = this.props.foodData;
    return (
      <>
        <div id="scrollContainer" className="flex flex-nowrap mx-auto">
          {foodData.map((event, i) => {
            return (
              <Panel
                id="eventCard"
                key={i}
                shaded
                bordered
                bodyFill
                style={{ display: 'inline-block', width: 320 }}
              >
                <img
                  src={event.thumbnail}
                  alt="thumbnail"
                  height="240"
                  className="mx-auto mt-5"
                />
                <Panel header={event.title}>
                  <div className='flex flex-col justify-evenly content-between'>
                    <div>  
                      <p>Price: "{event.price}"</p>
                      <p>Rating: {event.rating}</p>
                      <p>Reviews: {event.reviews}</p>
                    </div>
                    <div className="mt-2mb-1">
                      <small>"{event.snippet}"</small>
                    </div>
                    <div className='sticky bottom py-3'>
                      <p className="mt-3">
                        <a href={event.link}>Yelp Review Page</a>
                      </p>
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

export default FoodCard;
