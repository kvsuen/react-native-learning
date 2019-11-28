import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Header from '../components/Header/header.component';
import TravelTab from '../components/TravelTab/travel-tab.component';
import TripOverviewFooter from '../components/TripOverviewFooter/trip-overview-footer.component';

const ItineraryScreen = ({ event }) => {
  const [expanded, setExpanded] = useState('car');
  const [price, setPrice] = useState('1500');

  useEffect(() => {
    // grab data from api

  }, [])

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
          options={event.flightOptions}
          persons={event.persons}
          departure={event.departure}
          arrival={event.arrival}
          handleTouch={handleTouch}
        />
        <TravelTab
          type="hotel"
          expanded={expanded === 'hotel'}
          options={event.hotelOptions}
          rooms={event.rooms}
          nights={event.nights}
          arrival={event.arrival}
          handleTouch={handleTouch}
        />
        <TravelTab
          type="car"
          expanded={expanded === 'car'}
          options={event.carOptions}
          days={event.days}
          arrival={event.arrival}
          handleTouch={handleTouch}
        />
        <TripOverviewFooter price={price} />
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
