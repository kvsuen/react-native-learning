import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ItineraryScreen from './src/screens/ItineraryScreen';

import event from './mockdata.json';

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
  },
});
