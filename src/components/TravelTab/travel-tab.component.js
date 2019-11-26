import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Chips from './Chips/chips.component';
import Cards from './Cards/cards.component';

const TravelTab = ({ icon, name, subtitle, options, price, type }) => {
  const tabs = <Text>N/A</Text>;

  return (
    <View style={styles.container}>
      <View>
        <Text>
          {icon} {name} {subtitle} {price} 3dots placeholder
        </Text>
      </View>
      <View>{type ? <Chips type={type} /> : tabs}</View>
      <ScrollView>
        <Cards />
      </ScrollView>
      <View>
        <Text>Book with Booking.com Placeholder</Text>
      </View>
    </View>
  );
};

export default TravelTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});