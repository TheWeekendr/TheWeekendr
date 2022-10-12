import React from 'react';
import { PanelGroup, Panel, Paragraph } from 'rsuite';
import EventCard from './EventCard';
import FoodCard from './FoodCard';
import WeatherCard from './WeatherCard';

class PanelDisplay extends React.Component {
  render() {
    return (
      <PanelGroup accordion bordered className="w-full">
        <Panel header="Events" collapsible>
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

export default PanelDisplay;
