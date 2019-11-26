import React from 'react';
import { Text, View } from 'react-native';

import Header from '../components/Header/header.component';
import TravelTab from '../components/TravelTab/travel-tab.component';

const ItineraryScreen = ({ event }) => {
  return (
    <View>
      <Header
        title={event.title}
        startDate={event.startDate}
        endDate={event.endDate}
        departure={event.departure}
        arrival={event.arrival}
      />
      <TravelTab type="flight"/>
      <TravelTab type="hotel"/>
      <TravelTab type="car"/>
    </View>
  );
};

export default ItineraryScreen;
