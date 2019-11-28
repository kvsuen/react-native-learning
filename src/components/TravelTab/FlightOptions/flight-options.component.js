import React from 'react';
import { View } from 'react-native';

import FlightOptionsCard from './FlightOptionsCard/flight-options-card.component';

const FlightOptions = ({ options, selectedItem, handleSelection }) => {
  const cards = options.map((option, index) => {
    const {
      id,
      direction,
      airline,
      airlineImage,
      date,
      departureTime,
      arrivalTime,
      departureLocation,
      arrivalLocation,
      stops,
      flightTime,
      price,
    } = option;
    return (
      <FlightOptionsCard
        key={id}
        id={id}
        index={index}
        direction={direction}
        airline={airline}
        airlineImage={airlineImage}
        date={date}
        departureTime={departureTime}
        arrivalTime={arrivalTime}
        departureLocation={departureLocation}
        arrivalLocation={arrivalLocation}
        stops={stops}
        flightTime={flightTime}
        price={price}
        selectedItem={selectedItem}
        handleSelection={handleSelection}
      />
    );
  });

  return (
    <View style={{ flexWrap: 'wrap' }}>
      {cards}
    </View>
  );
}
 
export default FlightOptions;