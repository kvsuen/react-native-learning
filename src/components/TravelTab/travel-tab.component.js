import React from 'react';
import { Text, View } from 'react-native';

const TravelTab = ({ icon, name, subtitle, options, price, type }) => {
  const tabs = <Text>Na</Text>;

  if (type === flight) {
    tabs = <Text>Flights</Text>;
  } else if (type === hotel) {
    tabs = <Text>Hotels</Text>;
  } else if (type === car) {
    tabs = <Text>Cars</Text>;
  }

  return (
    <View>
      <View>
        <Text>
          {icon} {name} {subtitle} {price} 3dots placeholder
        </Text>
      </View>
      <View>
        {tabs}
      </View>
      <View>
        {tabs}
      </View>
      <View>
        Book with Booking.com Placeholder
      </View>
    </View>
  );
};

export default TravelTab;
