import React from 'react';
import { Panel, Button } from 'rsuite';
import data from '../data/eventData.json';

console.log(data);
// const eventData = data.events_results;

class EventCard extends React.Component {
  render() {
    const eventData = this.props.googleEventsData;
    return (
      <>
        <div id="scrollContainer" className="flex flex-nowrap mx-auto">
          {eventData.map((event, i) => {
            return (
              <Panel
                id="eventCard"
                className="bg-slate-300"
                key={i}
                style={{ display: 'inline-block', width: 350 }}
              >
                <div
                  id="innerEventCard"
                  className="block rounded-lg shadow-lg bg-white max-w-sm text-center h-100"
                >
                  <div className="py-3 px-6 border-b border-slate-400">
                    {event.date.when}
                  </div>
                  <div className="w-full">
                    <img
                      className="d-block object-cover h-44 mx-auto p-2 rounded-xl mt-3"
                      src={event.image}
                      alt="eventImg"
                    />
                  </div>
                  <div className="p-6 h-72">
                    <h5 className="text-gray-900 text-xl font-medium mb-2 border-t border-b border-slate-400 py-2">
                      {event.title}
                    </h5>
                    <p className="text-gray-700 text-base">{event.address[0]}</p>
                    <p className="text-gray-700 text-base mb-3">
                      {event.address[1]}
                    </p>
                    <small>{event.description}</small>
                  </div>
                  <div className="sticky bottom py-3 px-6 border-t border-slate-400">
                    <Button
                      block
                      appearance="default"
                      size="md"
                      href={event.ticket_info[0].link}
                      type="link"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Tickets
                    </Button>
                  </div>
                </div>
              </Panel>
            );
          })}
        </div>
      </>
    );
  }
}

export default EventCard;


  /* <img src={event.image} alt="thumbnail" height="240" className="mx-auto mt-5 rounded-lg shadow-md text-slate-100" />
                <Panel id="cardHeader" header={event.title} className="text-slate-100">
                  <div>
                    <p>{event.date.when}</p>
                    <p>{event.address[0]}</p>
                    <p>{event.address[1]}</p>
                    <small>{event.description}</small>
                    <p><a href={event.ticket_info[0].link}>Click Here for Ticket</a></p>
                  </div> */

