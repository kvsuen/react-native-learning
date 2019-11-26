import React from 'React';
import { View, Text } from 'react-native';

const Chips = ({ type }) => {
  let labels = [];

  if (type === 'flight') {
    labels = ['Airlines', 'Stops', 'Time in', 'Time out'];
  } else if (type === 'hotel') {
    labels = ['Name', 'Price', 'Type', 'Location'];
  } else if (type === 'car') {
    labels = ['Supplier', 'Price', 'Type', 'Pickup', 'Drop off'];
  }

  const chips = labels.map((label, index) => {
    return <Text key={index}>{label}</Text>;
  });

  return <>{chips}</>;
};

export default Chips;
