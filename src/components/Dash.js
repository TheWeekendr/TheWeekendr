import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { PanelGroup, Panel } from 'rsuite';
import EventCard from './EventCard';
import FoodCard from './FoodCard';
import WeatherCard from './WeatherCard';

const Dash = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
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
      </div>
    )
  );
};

export default Dash;