import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

import { Entypo } from '@expo/vector-icons';

const Header = ({ expanded, icon, name, subtitle, price, handleTouch }) => {
  const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      marginVertical: 15,
      alignItems: 'center'
    },
    name: {
      color: expanded ? 'black' : '#989DB1',
      fontSize: expanded ? 24 : 16,
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
      color: expanded ? 'black' : '#989DB1',
      fontSize: expanded ? 20 : 18,
      fontFamily: 'Roboto',
      fontWeight: 'bold'
    },
    dots: {
      marginHorizontal: 15
    }
  });

  return (
    <TouchableWithoutFeedback onPress={() => handleTouch(name.toLowerCase())}>
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
    </TouchableWithoutFeedback>
  );
};

export default Header;
