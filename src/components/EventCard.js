import React from 'react';
import { Panel, Button } from 'rsuite';

class EventCard extends React.Component {

  addDefaultSrc = (e) => {
    e.target.src = 'https://www.nirah.com/images/item-placeholder.svg?id=498f4e96baf0bbbc9351';
  }

  render() {
    const eventData = this.props.googleEventsData;
    return (
      <>
        <div id="scrollContainer" className="flex flex-nowrap mx-auto">
          {eventData.map((event, i) => {
            return (
              <Panel
                id="eventCard"
                className="bg-white border border-slate-300"
                key={i}
                shaded
                bodyFill
                style={{ display: 'inline-block', width: 320 }}
              >
                <div className="py-3 px-1 border-b border-slate-300 mx-auto text-center text-sm">
                  {event.date.when}
                </div>
                <div className="w-full p-2 bg-sky-50">
                  <img
                    className="d-block object-cover h-44 mx-auto rounded-lg mt-2 mb-2 shadow-md"
                    src={event.image}
                    alt="eventImg"
                    onError={this.addDefaultSrc}
                  />
                </div>
                <div id="cardHeight" className="flex flex-col justify-between content-between">
                  <h5 className="text-slate-700 text-center text-xl font-medium mb-2 border-t border-b border-slate-300 py-2 px-4">
                    {event.title}
                  </h5>
                  <div
                    id="cardHeader"
                    className="px-5 text-center text-slate-700"
                  >
                    <div>
                      <p className="text-lg leading-5">{event.address[0]}</p>
                      <p>{event.address[1]}</p>
                    </div>
                  </div>

                  <div>
                    <p className="px-5 mb-3 mt-2">{event.description}</p>
                  </div>
                  <div className="sticky bottom py-3 px-6 border-t border-slate-300">
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
