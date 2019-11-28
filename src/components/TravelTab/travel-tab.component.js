import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';

import Chips from './Chips/chips.component';
import Footer from './Footer/footer.component';
import Header from './Header/header.component';
import FlightOptions from './FlightOptions/flight-options.component';
import HotelOptions from './HotelOptions/hotel-options.component';
import CarOptions from './CarOptions/car-options.component';

const TravelTab = ({
  expanded,
  type,
  options,
  persons,
  rooms,
  departure,
  arrival,
  days,
  nights,
  handleTouch
}) => {
  let icon;
  let name;
  let subtitle;
  let labels = [];
  let price = 500;
  let bgColor = '#FFFFFF';
  let itineraryOptions = <></>;

  if (type === 'flight') {
    icon = <Entypo name="aircraft" size={18} color="#989DB1" />;
    name = 'Flight';
    subtitle = `Return, ${persons} person`;
    labels = ['Airlines', 'Stops', 'Time in', 'Time out'];
    bgColor = '#F8FAFE';
    itineraryOptions = <FlightOptions options={options} />;
  } else if (type === 'hotel') {
    icon = <Ionicons name="ios-bed" size={18} color="#989DB1" />;
    name = 'Hotel';
    subtitle = `${nights} nights, ${rooms} room`;
    labels = ['Name', 'Price', 'Type', 'Location'];
    bgColor = '#FFFFFF';
    itineraryOptions = <HotelOptions options={options} />;
  } else if (type === 'car') {
    icon = <Ionicons name="ios-car" size={18} color="#989DB1" />;
    name = 'Car';
    subtitle = `${days} days`;
    labels = ['Supplier', 'Price', 'Type', 'Pickup', 'Drop off'];
    bgColor = '#F0F3F8';
    itineraryOptions = <CarOptions options={options} />;
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: bgColor,
      flexGrow: expanded ? 1 : 0.2,
      borderTopLeftRadius: 35,
      paddingLeft: 25,
      marginBottom: -50
    },
    chipsContainer: {
      flexDirection: 'row',
      marginBottom: 15
    },
    cardsContainer: {
      flex: 1
    }
  });

  return (
    <View style={styles.container}>
      <Header
        expanded={expanded}
        icon={icon}
        name={name}
        subtitle={subtitle}
        price={price}
        handleTouch={handleTouch}
      />
      {expanded && (
        <>
          <View style={styles.chipsContainer}>
            <Chips labels={labels} />
          </View>
          <ScrollView style={styles.cardsContainer} horizontal={true}>
            {itineraryOptions}
          </ScrollView>
          <Footer />
        </>
      )}
    </View>
  );
};

export default TravelTab;
