import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';

import Chips from './Chips/chips.component';
import Cards from './Cards/cards.component';
import Footer from './Footer/footer.component';
import Header from './Header/header.component';

const TravelTab = ({
  type,
  persons,
  rooms,
  departure,
  arrival,
  days,
  nights
}) => {
  let icon;
  let name;
  let subtitle;
  let labels = [];
  let price = 500;

  if (type === 'flight') {
    icon = <Entypo name="aircraft" size={18} color="#989DB1" />;
    name = 'Flight';
    subtitle = `Return, ${persons} person`;
    labels = ['Airlines', 'Stops', 'Time in', 'Time out'];
  } else if (type === 'hotel') {
    icon = <Ionicons name="ios-bed" size={18} color="#989DB1" />;
    name = 'Hotel';
    subtitle = `${nights} nights, ${rooms} room`;
    labels = ['Name', 'Price', 'Type', 'Location'];
  } else if (type === 'car') {
    icon = <Ionicons name="ios-car" size={18} color="#989DB1" />;
    name = 'Car';
    subtitle = `${days} days`;
    labels = ['Supplier', 'Price', 'Type', 'Pickup', 'Drop off'];
  }

  return (
    <View style={styles.container}>
      <Header icon={icon} name={name} subtitle={subtitle} price={price} />
      <View style={styles.chipsContainer}>
        <Chips labels={labels} />
      </View>
      <ScrollView>
        <Cards type={type} />
      </ScrollView>
      <Footer />
    </View>
  );
};

export default TravelTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF2F7',
    borderTopLeftRadius: 35,
    paddingLeft: 25
  },
  chipsContainer: {
    flexDirection: 'row',
    marginBottom: 15
  }
});
