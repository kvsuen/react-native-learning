import React from 'react';
import FlightOptionsCard from './FlightOptionsCard/flight-options-card.component';

const FlightOptions = ({ options }) => {
  const cards = options.map((option, index) => {
    const {
      type,
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
        key={index}
        type={type}
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
      />
    );
  });

  return cards;
}
 
export default FlightOptions;