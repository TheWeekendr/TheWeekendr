import React from 'react';
import { Panel, Button } from 'rsuite';
import data from '../data/eventData.json';

console.log(data);
const eventData = data.events_results;

class EventCard extends React.Component {
  render() {
    return (
      <>
        <div id="scrollContainer" className='flex flex-nowrap'>
          {eventData.map((event, i) => {
            return (
              <Panel id="eventCard" className="bg-slate-300" key={i} style={{ display: 'inline-block', width: 350 }}>
                <div id="innerEventCard" class="block rounded-lg shadow-lg bg-white max-w-sm text-center h-100">
                  <div class="py-3 px-6 border-b border-gray-300">
                    {event.date.when}
                  </div>
                  <div class="w-full">
                    <img class="d-block object-cover h-44 mx-auto" src={event.image} alt="" />
                  </div>
                  <div class="p-6">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">{event.title}</h5>
                    <p class="text-gray-700 text-base mb-4">
                      {event.address[0]}
                    </p>
                    <p class="text-gray-700 text-base mb-4">
                      {event.address[1]}
                    </p>
                    <small>{event.description}</small>
                  </div>
                  <div class="sticky bottom py-3 px-6 border-t border-gray-300">
                    <Button block appearance="default" size="md" href={event.ticket_info[0].link} type="link" target="_blank" rel="noreferrer noopener">Tickets</Button>
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

{/* <img src={event.image} alt="thumbnail" height="240" className="mx-auto mt-5 rounded-lg shadow-md text-slate-100" />
                <Panel id="cardHeader" header={event.title} className="text-slate-100">
                  <div>
                    <p>{event.date.when}</p>
                    <p>{event.address[0]}</p>
                    <p>{event.address[1]}</p>
                    <small>{event.description}</small>
                    <p><a href={event.ticket_info[0].link}>Click Here for Ticket</a></p>
                  </div> */}

{/* <div id="cards" class="basis-96 mx-3 grow flex-initial w-96">
  <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
    <div class="py-3 px-6 border-b border-gray-300">
      {event.date.when}
    </div>
    <a href="#!">
      <img class="w-full" src={event.image} alt="" />
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">{event.title}</h5>
      <p class="text-gray-700 text-base mb-4">
        {event.address[0]}
      </p>
      <p class="text-gray-700 text-base mb-4">
        {event.address[1]}
      </p>
      <small>{event.description}</small>
    </div>
    <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
      <button href={event.ticket_info[0].link} type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Tickets</button>
    </div>
  </div>
</div>  */}



// const instance = (
//   <>
//     <Row>
//       <Col md={6} sm={6}>
//         <Card />
//       </Col>
//       <Col md={6} sm={6}>
//         <Card />
//       </Col>
//       <Col md={6} sm={6}>
//         <Card />
//       </Col>
//       <Col md={6} sm={6}>
//         <Card />
//       </Col>
//     </Row>
//     <Row sm={6}>
//       <Col md={6} sm={6}>
//         <Card />
//       </Col>
//       <Col md={6} sm={6}>
//         <Card />
//       </Col>
//       <Col md={6} sm={6}>
//         <Card />
//       </Col>
//       <Col md={6} sm={6}>
//         <Card />
//       </Col>
//     </Row>
//   </>
// );

