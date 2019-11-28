import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

const CarOptionsCard = ({
  id,
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
  pricePerDay,
  selectedItem,
  qty,
  handleSelection
}) => {
  return (
    <TouchableWithoutFeedback onPress={() => handleSelection(id, 'car', pricePerDay, qty)}>
      <View style={{...styles.container, borderColor: selectedItem === id ? 'rgb(255, 198, 112)' : '#D0EAE4'}}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.textContainer}>
          <View>
            <View style={styles.flexContainer}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.vehicleTitle}>
                  {make} {vehicle}
                </Text>
                <Text style={styles.grayBoldText}>or similar</Text>
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
    </TouchableWithoutFeedback>
  );
};

export default CarOptionsCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginRight: 20,
    borderRadius: 20,
    width: 375,
    borderWidth: 1
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
    flex: 1,
    justifyContent: 'space-between'
  },
  vehicleTitle: {
    fontSize: 22,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginRight: 5,
    marginBottom: 3
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
