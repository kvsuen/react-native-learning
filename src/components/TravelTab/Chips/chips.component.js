import React from 'React';
import { StyleSheet, View, Text } from 'react-native';

const Chips = ({ labels }) => {
  const chips = labels.map((label, index) => {
    return (
      <View style={styles.container} key={index}>
        <Text style={styles.text} >
          {label}
        </Text>
      </View>
    );
  });

  return <>{chips}</>;
};

export default Chips;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D0EAE4',
    borderRadius: 20,
    marginHorizontal: 8
  },
  text: { 
    color: '#59B8C0',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    padding: 10
  }
});
