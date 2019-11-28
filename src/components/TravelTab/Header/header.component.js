import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

import { Entypo } from '@expo/vector-icons';

const Header = ({ expanded, icon, name, subtitle, price, handleExpand }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    open ? setOpen(false) : setOpen(true);
  };

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
    },
    popup: {
      position: 'absolute',
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      height: 75,
      width: 75,
      left: -50
    }
  });

  return (
    <TouchableWithoutFeedback onPress={() => handleExpand(name.toLowerCase())}>
      <View style={styles.header}>
        {icon}
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.price}>C$ {price}</Text>
        <TouchableWithoutFeedback onPress={() => handleOpen()}>
          <View>
            <Entypo
              style={styles.dots}
              name="dots-three-vertical"
              size={18}
              color="#989DB1"
            />
            {open && <View style={styles.popup}></View>}
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Header;
