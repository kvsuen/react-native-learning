import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Header from '../components/Header/header.component';
import TravelTab from '../components/TravelTab/travel-tab.component';
import TripOverviewFooter from '../components/TripOverviewFooter/trip-overview-footer.component';

const ItineraryScreen = ({ event }) => {
  const [expanded, setExpanded] = useState('flight');

  const handleTouch = type => {
    setExpanded(type);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#4B99A0', '#57C6C3']}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Header
          title={event.title}
          startDate={event.startDate}
          endDate={event.endDate}
          departure={event.departure}
          arrival={event.arrival}
        />
        <TravelTab
          type="flight"
          expanded={expanded === 'flight'}
          persons={event.persons}
          departure={event.departure}
          arrival={event.arrival}
          handleTouch={handleTouch}
        />
        <TravelTab
          type="hotel"
          expanded={expanded === 'hotel'}
          rooms={event.rooms}
          nights={event.nights}
          arrival={event.arrival}
          handleTouch={handleTouch}
        />
        <TravelTab
          type="car"
          days={event.days}
          arrival={event.arrival}
          expanded={expanded === 'car'}
          handleTouch={handleTouch}
        />
        <TripOverviewFooter />
      </LinearGradient>
    </View>
  );
};

export default ItineraryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
