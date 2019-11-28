import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const CarOptionsCard = ({
  rentalCompany,
  make,
  vehicle,
  image,
  type,
  seats,
  rating,
  luggage,
  deal,
  pickUpLocation,
  pricePerDay
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.textContainer}>
        <View style={styles.flexContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.vehicleTitle}>
              {make} {vehicle}
            </Text>
            <Text style={styles.subTitle}>or similar</Text>
          </View>
          <Image
            style={{ width: 100, height: 18 }}
            source={{ uri: rentalCompany }}
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.grayBoldText}>{type} &nbsp;&nbsp;</Text>
          <Text style={styles.grayBoldText}>{seats} seats</Text>
        </View>
        <View style={styles.flexContainer}>
          <Text style={styles.grayText}>{luggage}</Text>
          <Text style={styles.grayBoldText}>{deal}</Text>
        </View>
        <View>
          <Text style={styles.grayText}>{rating}/10</Text>
        </View>
        <View style={styles.flexContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.grayText}>Pick up: &nbsp;</Text>
            <Text style={styles.grayBoldText}>{pickUpLocation}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.price}>C$ {pricePerDay} &nbsp;</Text>
            <Text style={styles.grayText}>/ day </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CarOptionsCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginRight: 20,
    borderRadius: 20,
    width: 375
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  image: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  textContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    flex: 1
  },
  vehicleTitle: {
    fontSize: 22,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginRight: 5,
    marginBottom: 3
  },
  subTitle: {
    color: '#989DB1',
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  },
  grayBoldText: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#989DB1',
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