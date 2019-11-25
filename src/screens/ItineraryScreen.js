import React from 'react';
import Header from '../components/Header/header.component';
import TravelTab from '../components/TravelTab/travel-tab.component';

const ItineraryScreen = ({ event }) => {
  return (
    <Header
      title={event.title}
      startDate={event.startDate}
      endDate={event.endDate}
      departure={event.departure}
      arrival={event.arrival}
    />
    <TravelTab />
    <TravelTab />
    <TravelTab />
  );
};

export default ItineraryScreen;
