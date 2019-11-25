import React from 'react';
import Header from '../components/Header/header.component';

const ItineraryScreen = ({ event }) => {
  return (
    <Header
      title={event.title}
      startDate={event.startDate}
      endDate={event.endDate}
      departure={event.departure}
      arrival={event.arrival}
    />

  );
};

export default ItineraryScreen;
