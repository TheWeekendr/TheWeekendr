import React from 'react';
import { PanelGroup, Panel } from 'rsuite';
import EventCard from './EventCard';
import FoodCard from './FoodCard';
import WeatherCard from './WeatherCard';

class Dash extends React.Component {
  render() {
    return (
      <PanelGroup accordion bordered className="w-full bg-slate-100">
        <Panel header="Events" collapsible defaultExpanded>
          <div>
            <EventCard />
          </div>
        </Panel>
        <Panel header="Food" collapsible>
          <div>
            <FoodCard />
          </div>
        </Panel>
        <Panel header="Weather" collapsible>
          <div>
            <WeatherCard />
          </div>
        </Panel>
      </PanelGroup>
    );
  }
}

export default Dash;
