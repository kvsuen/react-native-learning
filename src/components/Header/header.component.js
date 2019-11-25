import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ title, startDate, endDate, departure, arrival }) => {
  return (
    <View>
      <View>
        <Text>Back Button Placeholder</Text>
      </View>
      <View>
        <Text>{title}</Text>
        <Text>{startDate} {endDate}</Text>
        <Text>{departure} {arrival}</Text>
      </View>
      <View>
        <Text>Bookmark Placeholder</Text>
      </View>
    </View>
  );
};

export default Header;
