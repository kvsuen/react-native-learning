import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FlightOptionsCard = ({
  id,
  direction,
  index,
  airline,
  airlineImage,
  date,
  departureTime,
  arrivalTime,
  departureLocation,
  arrivalLocation,
  stops,
  flightTime,
  price,
  selectedItem,
  handleSelection
}) => {
  const flightSelection = direction === 'Departing' ? 'depFlight' : 'retFlight';

  return (
    <TouchableWithoutFeedback
      onPress={() => handleSelection(id, flightSelection, price, 1)}
    >
      <View
        style={{
          ...styles.container,
          marginBottom: index % 2 === 0 ? 10 : 0,
          borderColor: selectedItem[flightSelection] === id ? 'rgb(255, 198, 112)' : '#D0EAE4'
        }}
      >
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.title}>
              {direction} · {date}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{ height: 35, width: 35 }}
              source={{ uri: airlineImage }}
            />
            <View style={{ marginHorizontal: 20 }}>
              <Text style={styles.timeText}>{departureTime}</Text>
              <Text style={styles.locationText}>{departureLocation}</Text>
            </View>
            <Ionicons name="ios-arrow-round-forward" size={36} color="black" />
            <View style={{ marginHorizontal: 20 }}>
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
    </TouchableWithoutFeedback>
  );
};

export default FlightOptionsCard;

const styles = StyleSheet.create({
  container: {
    height: 130,
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
    paddingHorizontal: 15,
    paddingVertical: 5,
    flex: 1,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 18,
    marginTop: 5,
    marginBottom: 5,
    paddingBottom: 10,
    borderBottomColor: 'rgba(150, 150, 150, 0.4)',
    borderBottomWidth: 1
  },
  timeText: {
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginVertical: 1
  },
  locationText: {
    fontSize: 20,
    marginVertical: 1
  },
  grayText: {
    color: '#989DB1',
    marginVertical: 1
  },
  price: {
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  }
});
