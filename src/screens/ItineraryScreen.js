import React, { useState, useEffect } from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Header from '../components/Header/header.component';
import TravelTab from '../components/TravelTab/travel-tab.component';
import TripOverviewFooter from '../components/TripOverviewFooter/trip-overview-footer.component';

const ItineraryScreen = ({ event }) => {
  const [expanded, setExpanded] = useState('flight');
  const [bookmarked, setBookmarked] = useState(false)
  const [price, setPrice] = useState('1500');

  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem(String(event.id));
      if (value !== null) {
        setBookmarked(value)
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  storeData = async () => {
    try {
      if (bookmarked) {
        setBookmarked(false)
        await AsyncStorage.setItem(String(event.id), '');
      } else {
        setBookmarked(true)
        await AsyncStorage.setItem(String(event.id), '1');

      }
    } catch (error) {
      // Error saving data
    }
  };

  useEffect(() => {
    // grab data from api depending on event,
    // for each of the flights, hotels, car
    
    // fetch bookmarked state
    retrieveData()

  }, []);

  const handleBookmark = () => {
    storeData()
  }

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
          bookmarked={bookmarked}
          handleBookmark={handleBookmark}
        />
        <TravelTab
          type="flight"
          expanded={expanded === 'flight'}
          options={event.flightOptions}
          persons={event.persons}
          handleTouch={handleTouch}
        />
        <TravelTab
          type="hotel"
          expanded={expanded === 'hotel'}
          options={event.hotelOptions}
          rooms={event.rooms}
          nights={event.nights}
          handleTouch={handleTouch}
        />
        <TravelTab
          type="car"
          expanded={expanded === 'car'}
          options={event.carOptions}
          days={event.days}
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
