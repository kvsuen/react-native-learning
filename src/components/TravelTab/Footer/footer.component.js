import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.bookButton}>Book with Booking.com</Text>
      <View style={styles.booked}>
        <Text style={styles.bookedText}>Booked?</Text>
        <View style={styles.bookedIndicator}></View>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  bookButton: {
    color: '#18AD8A',
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#C2E7E1',
    borderRadius: 25,
    padding: 10
  },
  booked: {
    flexDirection: 'row',
    marginRight: 25,
    alignItems: 'center'
  },
  bookedText: {
    color: '#989DB1',
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  },
  bookedIndicator: {
    height: 35,
    width: 35,
    borderWidth: 1,
    borderColor: '#C2E7E1',
    borderRadius: 25,
    marginLeft: 20
  }
});
