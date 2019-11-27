import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Entypo } from '@expo/vector-icons';

const Header = ({ icon, name, subtitle, price }) => {
  return (
    <View style={styles.header}>
      {icon}
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.price}>C$ {price}</Text>
      <Entypo
        style={styles.dots}
        name="dots-three-vertical"
        size={18}
        color="#989DB1"
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginVertical: 15,
    alignItems: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  },
  name: {
    fontSize: 24,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginHorizontal: 15
  },
  subtitle: {
    fontSize: 16,
    flex: 1,
    color: '#989DB1',
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  },
  price: {
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  },
  dots: {
    marginHorizontal: 15
  }
});