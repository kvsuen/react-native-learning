import React from 'react';
import CarOptionsCard from './CarOptionsCard/card-options-card.component';

const CarOptions = ({ options, handleSelection, qty }) => {
  const cards = options.map((option, index) => {
    const {
      rentalCompany,
      make,
      vehicle,
      image,
      type,
      seats,
      rating,
      luggage,
      deal,
      pickUpLocation,
      pricePerDay
    } = option;
    return (
      <CarOptionsCard
        key={index}
        rentalCompany={rentalCompany}
        make={make}
        vehicle={vehicle}
        image={image}
        type={type}
        seats={seats}
        rating={rating}
        luggage={luggage}
        deal={deal}
        pickUpLocation={pickUpLocation}
        pricePerDay={pricePerDay}
        qty={qty}
        handleSelection={handleSelection}
      />
    );
  });

  return cards;
};

export default CarOptions;
