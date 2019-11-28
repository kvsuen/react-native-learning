import React, { useState, useEffect } from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Header from '../components/Header/header.component';
import TravelTab from '../components/TravelTab/travel-tab.component';
import TripOverviewFooter from '../components/TripOverviewFooter/trip-overview-footer.component';

const ItineraryScreen = ({ event }) => {
  const [expanded, setExpanded] = useState('flight');
  const [bookmarked, setBookmarked] = useState(false);
  const [priceState, setPriceState] = useState({
    flight: 0,
    hotel: 0,
    car: 0,
    totalPrice: 0
  });

  useEffect(() => {
    // would need to grab data from api depending on event here,
    // for each of the flights, hotels, car

    // fetch bookmarked state
    retrieveData();
  }, []);

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem(String(event.id));
      if (value !== null) {
        setBookmarked(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  const storeData = async () => {
    try {
      if (bookmarked) {
        setBookmarked(false);
        await AsyncStorage.setItem(String(event.id), '');
      } else {
        setBookmarked(true);
        await AsyncStorage.setItem(String(event.id), '1');
      }
    } catch (error) {
      // Error saving data
    }
  };

  const handleBookmark = () => {
    storeData();
  };

  const handleExpand = type => {
    setExpanded(type);
  };

  const handleSelection = (type, price, qty) => {
    let total = price * qty;
    
    const otherPrices = Object.keys(priceState).filter(price => {
      return price !== type && price !== 'totalPrice';
    });
    
    otherPrices.forEach(key => {
      total += priceState[key];
    });
    
    setPriceState({ ...priceState, [type]: price * qty, totalPrice: total });
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
          price={priceState.flight}
          handleExpand={handleExpand}
          handleSelection={handleSelection}
        />
        <TravelTab
          type="hotel"
          expanded={expanded === 'hotel'}
          options={event.hotelOptions}
          rooms={event.rooms}
          nights={event.nights}
          price={priceState.hotel}
          handleExpand={handleExpand}
          handleSelection={handleSelection}
        />
        <TravelTab
          type="car"
          expanded={expanded === 'car'}
          options={event.carOptions}
          days={event.days}
          price={priceState.car}
          handleExpand={handleExpand}
          handleSelection={handleSelection}
        />
        <TripOverviewFooter price={priceState.totalPrice} />
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
