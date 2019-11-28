import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const TripOverviewFooter = ({ price }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Trip Overview</Text>
        <Text style={styles.price}>C$ {price}</Text>
      </View>
    </View>
  );
}
 
export default TripOverviewFooter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 0.2,
    borderTopLeftRadius: 35,
    paddingLeft: 10,
  },
  header: {
    flexDirection: 'row',
    marginVertical: 15,
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginHorizontal: 15
  },
  price: {
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginRight: 35
  },
});