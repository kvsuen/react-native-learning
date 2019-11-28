import React from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';

const HotelOptionsCard = ({
  name,
  image,
  rating,
  stars,
  tag,
  deal,
  walkDistance,
  pricePerNight,
  qty,
  handleSelection
}) => {
  return (
    <TouchableWithoutFeedback onPress={() => handleSelection('hotel', pricePerNight, qty)}>
      <View style={styles.container}>
        <View style={styles.image}>
          <Image style={styles.image} source={{ uri: image }} />
          <Text style={styles.description}> {rating} · Superb · {stars} star hotel </Text>
        </View>
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.title}>{name}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.grayBoldText}>{tag} &nbsp;&nbsp;</Text>
              <Text style={styles.grayBoldText}>{deal}</Text>
            </View>
          </View>
          <View style={styles.flexContainer}>
            <Text style={styles.grayText}>
              {walkDistance / 60} minutes walk to destination
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.price}>C$ {pricePerNight} &nbsp;</Text>
              <Text style={styles.grayText}>/ night </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HotelOptionsCard;

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
  image: {
    flex: 1.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  description: {
    position: 'relative',
    marginLeft: 15,
    top: -25,
    color: 'white',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  textContainer: {
    marginTop: -20,
    paddingHorizontal: 15,
    paddingVertical: 15,
    flex: 1,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 22,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
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
