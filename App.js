import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ItineraryScreen from './src/screens/ItineraryScreen';

const event = {
  title: "Calgary Tech Conference",
  startDate: "July 25 - 8:30",
  endDate: "July 29 - 8:30",
  departure: "Toronto, ON",
  arrival: "Calgary, AB",
}

export default function App() {
  return (
    <View style={styles.container}>
      <ItineraryScreen event={event} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
