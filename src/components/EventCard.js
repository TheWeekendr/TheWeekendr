import React from 'react';
import { Panel } from 'rsuite';
import data from '../data/eventData.json';

console.log(data);
const eventData = data.events_results;

class EventCard extends React.Component {
  render() {
    return (
      <>
        <div id="scrollContainer">
          {eventData.map((event, i) => {
            return (
              <Panel id="eventCard" key={i} shaded bordered bodyFill style={{ display: 'inline-block', width: 320 }}>
                <img src={event.image} alt="thumbnail" height="240" className="mx-auto mt-5" />
                <Panel header={event.title}>
                  <div>
                    <p>{event.date.when}</p>
                    <p>{event.address[0]}</p>
                    <p>{event.address[1]}</p>
                    <small>{event.description}</small>
                    <p><a href={event.ticket_info[0].link}>Click Here for Ticket</a></p>
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

export default EventCard;

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

