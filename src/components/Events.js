import React from 'react';
import { Panel, Row, Col } from 'rsuite';

const events = {
  "search_metadata": {
    "id": "6345b89d94fb039b3a5aa128",
      "status": "Success",
        "json_endpoint": "https://serpapi.com/searches/daa0b71dcc647941/6345b89d94fb039b3a5aa128.json",
          "created_at": "2022-10-11 18:40:29 UTC",
            "processed_at": "2022-10-11 18:40:29 UTC",
              "google_events_url": "https://www.google.com/search?q=Events+in+Denver&ibp=htl;events&uule=w+CAIQICIgRGVudmVyLENPLENvbG9yYWRvLFVuaXRlZCBTdGF0ZXM&hl=en",
                "raw_html_file": "https://serpapi.com/searches/daa0b71dcc647941/6345b89d94fb039b3a5aa128.html",
                  "total_time_taken": 5.01
  },
  "search_parameters": {
    "q": "Events in Denver",
      "engine": "google_events",
        "location_requested": "Denver, CO, Colorado, United States",
          "location_used": "Denver,CO,Colorado,United States"
  },
  "search_information": {
    "events_results_state": "Results for exact spelling"
  },
  "events_results": [
    {
      "title": "Collect-A-Con",
      "date": {
        "start_date": "Oct 15",
        "when": "Sat, Oct 15, 10 AM – 1 PM"
      },
      "address": [
        "Colorado Convention Center, 700 14th St",
        "Denver, CO"
      ],
      "link": "https://www.denver.org/event/collect-a-con/89834/",
      "event_location_map": {
        "image": "https://www.google.com/maps/vt/data=Us2lE4jejDfIEPB6w2CSgLLLyq9cJOfRxHgFixJHF2yfQwOcnIQeTcujwmnOXXQzk--r_J1Lw2Zi83P5tFau7bcWTlA_CBAyVHXEfllUrCysR2kebfs",
        "link": "https://www.google.com/maps/place//data=!4m2!3m1!1s0x876c78d17bd9d871:0x580ecf50af57c3cf?sa=X&hl=en",
        "serpapi_link": "https://serpapi.com/search.json?data=%214m2%213m1%211s0x876c78d17bd9d871%3A0x580ecf50af57c3cf&engine=google_maps&google_domain=google.com&hl=en&q=Events+in+Denver&type=place"
      },
      "description": "Vanilla Ice and Collect at Colorado Convention Center at 2022-10-15T10:00:00-0600",
      "ticket_info": [
        {
          "source": "Axs.com",
          "link": "https://www.axs.com/events/442387/collect-a-con-tickets",
          "link_type": "tickets"
        },
        {
          "source": "Universe.com",
          "link": "https://www.universe.com/events/collect-a-con-denver-co-tickets-HR7LGV?ref=ticketmaster",
          "link_type": "tickets"
        },
        {
          "source": "Visit Denver",
          "link": "https://www.denver.org/event/collect-a-con/89834/",
          "link_type": "more info"
        },
        {
          "source": "Ticketmaster",
          "link": "https://www.ticketmaster.com/colorado-convention-center-tickets-denver/venue/341669",
          "link_type": "more info"
        },
        {
          "source": "Songkick",
          "link": "https://www.songkick.com/concerts/40234875-vanilla-ice-at-colorado-convention-center",
          "link_type": "more info"
        }
      ],
      "venue": {
        "name": "Colorado Convention Center",
        "rating": 4.5,
        "reviews": 9136,
        "link": "https://www.google.com/search?hl=en&q=Colorado+Convention+Center&ludocid=6345236870457705423&ibp=gwp%3B0,7"
      },
      "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhPV3nXyH4UYyt2V8833ZhiQlENoXX8RefItMDjNL5znKGolTZX4-Tfaw&s",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUELwt8d03bWUXsJ2ZV8F2LYBBLq77znkfY88Ceo53Nw&s"
    },
  ]
}

console.log(events);
    


const Card = props => (
  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 320 }}>
    <img src={events.events_results[0].image} alt="thumbnail" height="240" className="mx-auto"/>
    <Panel {...props} header={events.events_results[0].title}>
      <p>
        <small>{events.events_results[0].description}</small>
      </p>
    </Panel>
  </Panel>
);

const instance = (
  <>
    <Row>
      <Col md={6} sm={6}>
        <Card />
      </Col>
      <Col md={6} sm={6}>
        <Card />
      </Col>
      <Col md={6} sm={6}>
        <Card />
      </Col>
      <Col md={6} sm={6}>
        <Card />
      </Col>
    </Row>
    <Row sm={6}>
      <Col md={6} sm={6}>
        <Card />
      </Col>
      <Col md={6} sm={6}>
        <Card />
      </Col>
      <Col md={6} sm={6}>
        <Card />
      </Col>
      <Col md={6} sm={6}>
        <Card />
      </Col>
    </Row>
  </>
);

class Events extends React.Component {
  render() {
    return (
      <>
        {instance}
      </>
    );
  }
}

export default Events;

