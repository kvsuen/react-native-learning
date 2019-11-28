import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FlightOptionsCard = ({
  type,
  airline,
  airlineImage,
  date,
  departureTime,
  arrivalTime,
  departureLocation,
  arrivalLocation,
  stops,
  flightTime,
  price
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.title}>
            {type} · {date}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            style={{ height: 50, width: 50 }}
            source={{ uri: airlineImage }}
          />
          <View style={{marginHorizontal: 20}}>
            <Text style={styles.timeText}>{departureTime}</Text>
            <Text style={styles.locationText}>{departureLocation}</Text>
          </View>
          <Ionicons name="ios-arrow-round-forward" size={42} color="black" />
          <View style={{marginHorizontal: 20}}>
            <Text style={styles.timeText}>{arrivalTime}</Text>
            <Text style={styles.locationText}>{arrivalLocation}</Text>
          </View>
        </View>
        <View style={styles.flexContainer}>
          <Text style={styles.grayText}>
            {stops} Stop · {flightTime} · {airline}
          </Text>
          <Text style={styles.price}>C$ {price}</Text>
        </View>
      </View>
    </View>
  );
};

export default FlightOptionsCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginRight: 20,
    borderRadius: 20,
    width: 375,
    borderColor: '#D0EAE4',
    borderWidth: 1
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textContainer: {
    marginTop: -20,
    paddingHorizontal: 15,
    paddingVertical: 15,
    flex: 1,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 18,
    marginTop: 15,
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomColor: 'rgba(150, 150, 150, 0.4)',
    borderBottomWidth: 1
  },
  timeText: {
    fontSize: 22,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginVertical: 3
  },
  locationText: {
    fontSize: 22,
    marginVertical: 3
  },
  grayText: {
    color: '#989DB1',
    marginVertical: 3
  },
  price: {
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  }
});
