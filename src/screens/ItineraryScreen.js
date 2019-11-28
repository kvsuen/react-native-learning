import React, { useState, useEffect } from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Header from '../components/Header/header.component';
import TravelTab from '../components/TravelTab/travel-tab.component';
import TripOverviewFooter from '../components/TripOverviewFooter/trip-overview-footer.component';

const ItineraryScreen = ({ event }) => {
  const [expanded, setExpanded] = useState('flight');
  const [bookmarked, setBookmarked] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    flight: {
      depFlight: null,
      retFlight: null
    },
    hotel: null,
    car: null
  });
  const [priceState, setPriceState] = useState({
    depFlight: 0,
    retFlight: 0,
    hotel: 0,
    car: 0,
    totalPrice: 0
  });

  useEffect(() => {
    // Would need to grab data from api depending on event here,
    // for each of the flights, hotels, car
    // and set state here or in redux.
    // Currently not using redux to save setup time.

    // fetch bookmarked state from device storage
    retrieveBookmarkState();
  }, []);

  const retrieveBookmarkState = async () => {
    try {
      const value = await AsyncStorage.getItem(String(event.id));
      if (value !== null) {
        setBookmarked(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  const handleBookmark = async () => {
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

  const handleExpand = type => {
    setExpanded(type);
  };

  const handleSelection = (id, type, price, qty) => {
    // Each time an item is selected, update the price state
    // and calculate new total price here as set state is asynchronous
    let total = price * qty;

    const otherPrices = Object.keys(priceState).filter(price => {
      return price !== type && price !== 'totalPrice';
    });

    otherPrices.forEach(key => {
      total += priceState[key];
    });

    setPriceState({ ...priceState, [type]: price * qty, totalPrice: total });

    // need to consider two selections for flight itinerary
    if (type === 'depFlight' || type === 'retFlight') {
      const selectedFlights = selectedItem.flight;
      selectedFlights[type] = id;

      setSelectedItem({ ...selectedItem, flights: selectedFlights });
    } else {
      setSelectedItem({ ...selectedItem, [type]: id });
    }
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
          price={priceState.depFlight + priceState.retFlight}
          selectedItem={selectedItem.flight}
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
          selectedItem={selectedItem.hotel}
          handleExpand={handleExpand}
          handleSelection={handleSelection}
        />
        <TravelTab
          type="car"
          expanded={expanded === 'car'}
          options={event.carOptions}
          days={event.days}
          price={priceState.car}
          selectedItem={selectedItem.car}
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
